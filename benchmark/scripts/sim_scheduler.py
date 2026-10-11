"""Discrete-event simulation of mode-R scheduling on a heterogeneous contributor pool.
Synthetic workload; every parameter is listed in PARAMS and written to the output."""
import heapq, json, csv, math
import numpy as np

PARAMS = dict(nodes=300, gpu_classes=[(1.0, 0.5), (2.0, 0.35), (4.0, 0.15)], latency_mean_s=0.04,
              rho_adversarial=0.10, flaky_share=0.05, flaky_fault_prob=0.15, r=3, q=2, audit_pi=0.10,
              mean_work=1.0, units=20000, mu_per_unit=0.98, R_min=0.8, kappa=dict(alpha=1.0, beta=0.5, gamma=2.0),
              softmax_temperature=0.15, loads=[0.5, 0.7, 0.85, 0.95], seed=7)

def run(policy, load, P=PARAMS):
    rng = np.random.default_rng(P["seed"])
    N = P["nodes"]
    speeds = rng.choice([c for c, _ in P["gpu_classes"]], N, p=[w for _, w in P["gpu_classes"]])
    lat = rng.lognormal(math.log(P["latency_mean_s"]) - 0.5, 1.0, N)
    kind = np.zeros(N, int)  # 0 honest, 1 adversarial (coordinating), 2 flaky
    perm = rng.permutation(N)
    kind[perm[:int(P["rho_adversarial"] * N)]] = 1
    kind[perm[int(P["rho_adversarial"] * N):int((P["rho_adversarial"] + P["flaky_share"]) * N)]] = 2
    R = np.ones(N); busy = np.zeros(N, bool); paused = np.zeros(N, bool)
    s_hat = speeds / speeds.max()
    cap = speeds.sum()
    lam = load * cap / (P["r"] * P["mean_work"])
    t = 0.0; ev = []; queue = []
    arrivals = np.cumsum(rng.exponential(1 / lam, P["units"]))
    works = rng.exponential(P["mean_work"], P["units"])
    for i, a in enumerate(arrivals): heapq.heappush(ev, (a, 0, i))
    first_arrival = {}; done = {}; attempts = {}; wrong = 0; reassign = 0; audits_caught = 0; wrong_t = []
    busy_time = 0.0; running = {}
    k = P["kappa"]

    def pick(n):
        idle = np.where(~busy & ~paused)[0]
        if len(idle) < n: return None
        if policy == "random":
            return rng.choice(idle, n, replace=False)
        kap = k["alpha"] * R[idle] + k["beta"] * s_hat[idle] - k["gamma"] * lat[idle]
        w = np.exp((kap - kap.max()) / P["softmax_temperature"]); w /= w.sum()
        return rng.choice(idle, n, replace=False, p=w)

    def dispatch(now):
        nonlocal busy_time
        while queue:
            u = queue[0]
            seats = pick(P["r"])
            if seats is None: return
            queue.pop(0)
            busy[seats] = True
            fin = [now + works[u] / speeds[j] + lat[j] for j in seats]
            busy_time += sum(f - now for f in fin)
            running[u] = (seats, max(fin))
            for j, f in zip(seats, fin): heapq.heappush(ev, (f, 2, int(j)))
            heapq.heappush(ev, (max(fin), 1, u))

    while ev:
        t, typ, u = heapq.heappop(ev)
        if typ == 0:
            first_arrival.setdefault(u, t); attempts[u] = attempts.get(u, 0) + 1
            queue.append(u); dispatch(t); continue
        if typ == 2:
            busy[u] = False; dispatch(t); continue
        seats, _ = running.pop(u)
        nadv = int((kind[seats] == 1).sum())
        coordinated = nadv >= P["q"]
        outputs = []
        for j in seats:
            if kind[j] == 1 and coordinated: outputs.append("evil")
            elif kind[j] == 2 and rng.random() < P["flaky_fault_prob"]: outputs.append(f"junk{j}")
            else: outputs.append("ok")
        vals, cnts = np.unique(outputs, return_counts=True)
        top = vals[cnts.argmax()]; ok = cnts.max() >= P["q"]
        audited = rng.random() < P["audit_pi"]
        if ok and top == "evil" and audited:
            ok = False; audits_caught += 1
            paused[seats[kind[seats] == 1]] = True   # verified fault: slashed and removed
        for j, o in zip(seats, outputs):
            agree = ok and o == top and not (top == "evil" and audited)
            if not agree and o != "ok" and (kind[j] == 2): pass
            R[j] = P["mu_per_unit"] * R[j] + (1 - P["mu_per_unit"]) * (1.0 if agree else 0.0)
            if R[j] < P["R_min"]: paused[j] = True
        if ok:
            done[u] = t
            if top == "evil":
                wrong += 1; wrong_t.append(len(done))
        else:
            reassign += 1; attempts[u] += 1
            queue.append(u)
        dispatch(t)
    lat_all = np.array([done[u] - first_arrival[u] for u in done])
    T_end = max(done.values())
    return dict(policy=policy, load=load, units_completed=len(done), mean_latency=float(lat_all.mean()),
                p95_latency=float(np.percentile(lat_all, 95)), utilisation=float(busy_time / (N * T_end)),
                reassignment_rate=reassign / len(done), wrong_accept_rate=wrong / len(done),
                wrong_accept_rate_first_quarter=sum(1 for x in wrong_t if x <= len(done) / 4) / (len(done) / 4),
                wrong_accept_rate_last_quarter=sum(1 for x in wrong_t if x > 3 * len(done) / 4) / (len(done) / 4), audit_catches=audits_caught,
                flaky_paused_share=float(paused[kind == 2].mean()), adversarial_paused_share=float(paused[kind == 1].mean()),
                honest_paused_share=float(paused[kind == 0].mean()))

rows = [run(pol, load) for load in PARAMS["loads"] for pol in ("random", "kappa")]
json.dump(dict(params=PARAMS, results=rows), open("data/sim_scheduler.json", "w"), indent=1)
with open("data/sim_scheduler.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); [w.writerow(r) for r in rows]
for r in rows: print({k: (round(v, 4) if isinstance(v, float) else v) for k, v in r.items()})

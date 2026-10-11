"""Monte Carlo simulations of TasQ v1.0 mode-R security and reputation dynamics.
All randomness is seeded; rerunning reproduces every number exactly."""
import json, csv, math
import numpy as np
from math import comb

OUT = {}
rng = np.random.default_rng(20250327)

def p_binom(rho, r, q):
    return sum(comb(r, k) * rho**k * (1 - rho)**(r - k) for k in range(q, r + 1))

# ------------------------------------------------------------------ S1: Eq. 6 vs simulation
CONFIGS = [(3, 2), (5, 3), (7, 5)]
RHOS = [0.02, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]
TRIALS = 400_000
N_POOL = 1000
s1 = []
for r, q in CONFIGS:
    for rho in RHOS:
        n_adv = int(round(rho * N_POOL))
        # uniform seats without replacement from a finite pool (hypergeometric)
        adv = rng.hypergeometric(n_adv, N_POOL - n_adv, r, size=TRIALS)
        p_hyper = float(np.mean(adv >= q))
        # stake-weighted seats: lognormal stakes, adversary holds share rho of total stake
        stakes = rng.lognormal(0, 1.0, N_POOL)
        is_adv = np.zeros(N_POOL, bool); is_adv[:n_adv] = True
        stakes[is_adv] *= (rho / (1 - rho)) * stakes[~is_adv].sum() / stakes[is_adv].sum() if n_adv else 1
        g = np.log(stakes)[None, :] - np.log(-np.log(rng.random((8_000, N_POOL))))  # Gumbel top-k = weighted w/o replacement
        top = np.argpartition(-g, r, axis=1)[:, :r]
        p_stake = float(np.mean(is_adv[top].sum(1) >= q))
        s1.append(dict(r=r, q=q, rho=rho, p_eq6=p_binom(rho, r, q), p_sim_uniform=p_hyper, p_sim_stake_weighted=p_stake,
                       trials_uniform=TRIALS, trials_stake=8_000))
OUT["S1_quorum_capture"] = s1

# ------------------------------------------------------------------ S2: Sybils on shared hardware, distinct-machine rule
# Adversary controls a fraction rho of identities, packed k identities per physical machine.
s2 = []
for k in (1, 2, 4, 8):
    for rho in (0.1, 0.2, 0.3):
        n_id = 1000; n_adv = int(rho * n_id)
        machines = np.concatenate([np.repeat(np.arange(math.ceil(n_adv / k)), k)[:n_adv], np.arange(10_000, 10_000 + n_id - n_adv)])
        is_adv = np.arange(n_id) < n_adv
        r, q, T = 3, 2, 30_000
        cap_free = cap_distinct = 0
        draws = rng.integers(0, n_id, (T, 32))
        for t in range(T):
            order = list(dict.fromkeys(draws[t].tolist()))
            free = order[:r]
            cap_free += is_adv[free].sum() >= q
            seen, chosen = set(), []
            for idx in order:
                m = machines[idx]
                if m in seen: continue
                seen.add(m); chosen.append(idx)
                if len(chosen) == r: break
            cap_distinct += is_adv[chosen].sum() >= q
        s2.append(dict(identities_per_machine=k, rho_identities=rho, p_without_rule=cap_free / T, p_with_distinct_machine_rule=cap_distinct / T, trials=T))
OUT["S2_distinct_machines"] = s2

# ------------------------------------------------------------------ S3: adversary economics with and without audits
# Coordinating adversary: knows its seats (selection is public) and deviates only when it holds >= q seats.
# Naive adversary: deviates whenever it holds >= 1 seat.
# Audit: with probability pi a unit is re-executed on an attested auditor; decision revealed after outputs are committed.
def econ(rho, r, q, pi, V, sigmaS, units=400_000, coordinating=True):
    adv = rng.binomial(r, rho, size=units)
    audited = rng.random(units) < pi
    if coordinating:
        attack = adv >= q
    else:
        attack = adv >= 1
    captured = attack & (adv >= q)
    outvoted = attack & (adv < q)
    gain = np.where(captured & ~audited, V, 0.0)
    loss = np.where(captured & audited, adv * sigmaS, 0.0) + np.where(outvoted, adv * sigmaS, 0.0)
    wrong_accepted = captured & ~audited
    return float((gain - loss).sum() / units), float(wrong_accepted.mean()), float(attack.mean())

s3 = []
for pi in (0.0, 0.05, 0.1, 0.2):
    for v in [0.05, 0.1, 0.2, 0.3, 0.5, 0.75, 1.0, 1.5, 2.0, 3.0]:
        prof_c, wrong_c, att_c = econ(0.1, 3, 2, pi, v, 1.0, coordinating=True)
        prof_n, wrong_n, att_n = econ(0.1, 3, 2, pi, v, 1.0, coordinating=False)
        s3.append(dict(pi=pi, V_over_sigmaS=v, profit_per_unit_coordinating=prof_c, profit_per_unit_naive=prof_n,
                       wrong_accept_rate_coordinating=wrong_c, rho=0.1, r=3, q=2,
                       breakeven_theory=(pi * 2 / (1 - pi)) if pi < 1 else None))
OUT["S3_attack_economics"] = s3

# empirical break-even V for coordinating adversary (bisection on simulated profit)
s3b = []
for pi in (0.05, 0.1, 0.2, 0.3):
    lo, hi = 0.0, 5.0
    for _ in range(18):
        mid = (lo + hi) / 2
        p, _, _ = econ(0.1, 3, 2, pi, mid, 1.0, units=300_000)
        lo, hi = (mid, hi) if p < 0 else (lo, mid)
    s3b.append(dict(pi=pi, breakeven_sim=(lo + hi) / 2, breakeven_rule_q=pi * 2 / (1 - pi)))
OUT["S3b_breakeven"] = s3b

# ------------------------------------------------------------------ S4: reputation dynamics (Eq. 5)
mu, R_min, periods, nodes = 0.9, 0.8, 300, 20_000
s4 = []
for fault in (0.0, 0.02, 0.05, 0.1, 0.2, 0.4):
    R = np.ones(nodes); excluded_at = np.full(nodes, -1)
    for t in range(periods):
        # period score: share of correct units out of 20, plus small latency noise
        correct = rng.binomial(20, 1 - fault, nodes) / 20
        s = np.clip(correct - np.abs(rng.normal(0, 0.03, nodes)), 0, 1)
        R = mu * R + (1 - mu) * s
        newly = (R < R_min) & (excluded_at < 0)
        excluded_at[newly] = t + 1
    ex = excluded_at > 0
    s4.append(dict(fault_rate=fault, excluded_share=float(ex.mean()),
                   median_periods_to_exclusion=float(np.median(excluded_at[ex])) if ex.any() else None,
                   p95_periods_to_exclusion=float(np.percentile(excluded_at[ex], 95)) if ex.any() else None,
                   mu=mu, R_min=R_min, periods=periods, nodes=nodes))
OUT["S4_reputation"] = s4

json.dump(OUT, open("data/sim_protocol.json", "w"), indent=1)
for key, rows in OUT.items():
    with open(f"data/{key}.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); [w.writerow(x) for x in rows]
    print(key); [print("  ", {k: (round(v, 5) if isinstance(v, float) else v) for k, v in x.items()}) for x in rows[:40]]

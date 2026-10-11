"""Cost models for GPU execution under modes A and R, plus a CPU analogue of floating-point non-determinism.
Modes A and R are MODELLED, not measured on GPUs. Inputs are either measured here (crypto timings),
taken from published work (confidential-GPU overhead range), or explicit assumptions listed in ASSUMPTIONS."""
import json, csv
import numpy as np

micro = {r["primitive"]: r["median_us"] for r in json.load(open("data/micro_crypto.json"))["results"]}
ASSUMPTIONS = dict(
    steady_state_overheads=[0.02, 0.05, 0.07],   # upper end follows reported confidential-GPU LLM overhead (< ~7%)
    network_rtt_s=0.05, round_trips_for_key_release=2, attestation_report_verify_s=0.02,
    job_durations_s=[0.1, 0.25, 0.5, 1, 2, 5, 10, 30, 60, 300],
)
setup_crypto_s = (micro["Hybrid X25519 + ML-KEM-768 (one side, full)"] + micro["HKDF-SHA256, 32 B output"] + micro["ML-DSA-65 verify"]) / 1e6
setup_s = ASSUMPTIONS["round_trips_for_key_release"] * ASSUMPTIONS["network_rtt_s"] + ASSUMPTIONS["attestation_report_verify_s"] + setup_crypto_s

# M1: effective mode-A overhead vs job duration
m1 = []
for eps in ASSUMPTIONS["steady_state_overheads"]:
    for T in ASSUMPTIONS["job_durations_s"]:
        m1.append(dict(steady_state_overhead=eps, job_s=T, setup_s=setup_s, effective_overhead=eps + setup_s / T))

# M2: cost of mode R (r seats + audits on attested hardware) relative to one commodity execution,
#     with the audit rate required by the revised admission rule pi >= V / (V + q sigma S)
m2 = []
for r, q in [(3, 2), (5, 3)]:
    for v in [0.0, 0.1, 0.25, 0.5, 1, 2, 4, 8]:
        pi = v / (v + q)
        for premium in (1.0, 1.5, 2.0):
            cost_R = r + pi * premium * 1.05
            cost_A = premium * 1.05
            m2.append(dict(r=r, q=q, V_over_sigmaS=v, required_audit_rate=pi, attested_price_premium=premium,
                           cost_mode_R=cost_R, cost_mode_A=cost_A))

# M3: attested-hardware price premium at which mode R and mode A cost the same
m3 = []
for r in (2, 3, 5):
    for pi in (0.0, 0.05, 0.1, 0.2, 0.3):
        m3.append(dict(r=r, audit_pi=pi, breakeven_premium=r / ((1 - pi) * 1.05)))

# D1: CPU analogue of reduction-order non-determinism in inference
rng = np.random.default_rng(3)
d_in, d_h, vocab, n = 512, 2048, 8000, 400
W1 = (rng.standard_normal((d_in, d_h)) / np.sqrt(d_in)).astype(np.float32)
W2 = (rng.standard_normal((d_h, vocab)) / np.sqrt(d_h)).astype(np.float32)
X = rng.standard_normal((n, d_in)).astype(np.float32)
def forward(order):
    H = np.maximum(X @ W1, 0)
    if order == "library":
        return H @ W2
    chunks = np.array_split(np.arange(d_h), 16)
    if order == "reversed_blocks": chunks = chunks[::-1]
    if order == "interleaved": chunks = chunks[::2] + chunks[1::2]
    acc = np.zeros((n, vocab), np.float32)
    for c in chunks: acc += H[:, c] @ W2[c]
    return acc
ref = forward("library")
d1 = []
for order in ("reversed_blocks", "interleaved"):
    out = forward(order)
    same = np.all(out == ref, axis=1)
    diff = np.abs(out - ref).max(axis=1) / (np.abs(ref).max(axis=1))
    top1 = (out.argmax(1) == ref.argmax(1)).mean()
    top5 = np.mean([set(np.argsort(-out[i])[:5]) == set(np.argsort(-ref[i])[:5]) for i in range(n)])
    d1.append(dict(variant=order, bitwise_identical_rows=float(same.mean()), max_rel_diff_median=float(np.median(diff)),
                   max_rel_diff_max=float(diff.max()), top1_agreement=float(top1), top5_set_agreement=float(top5), samples=n))

OUT = dict(assumptions=ASSUMPTIONS, setup_s=setup_s, setup_crypto_s=setup_crypto_s,
           M1_modeA_overhead=m1, M2_mode_costs=m2, M3_breakeven_premium=m3, D1_nondeterminism_cpu=d1)
json.dump(OUT, open("data/model_gpu.json", "w"), indent=1)
for key in ("M1_modeA_overhead", "M2_mode_costs", "M3_breakeven_premium", "D1_nondeterminism_cpu"):
    rows = OUT[key]
    with open(f"data/{key}.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); [w.writerow(x) for x in rows]
print("setup_s", setup_s, "crypto part", setup_crypto_s)
for x in m1[:10]: print(x)
for x in m3: print(x)
for x in d1: print(x)
for x in m2[:24]: print({k: round(v, 3) if isinstance(v, float) else v for k, v in x.items()})

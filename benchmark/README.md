# TasQ v1.0: simulation and microbenchmark data

This package backs Section 12 of the TasQ Technical Yellow Paper (v1.0, revision 2).
Host each section below at the URL shown; the paper cites these pages.

**What this is:** reproducible simulations of the protocol rules, cost models, and
microbenchmarks of individual cryptographic primitives.
**What this is not:** measurements of a deployed TasQ network, of contributor GPUs,
of hardware enclaves, or of real AI workloads. GPU and enclave figures are models.

Re-run everything with:

```
pip install numpy cryptography blake3 pqcrypto
python3 scripts/micro_crypto.py      # data/micro_crypto.*
python3 scripts/sim_protocol.py      # data/sim_protocol.json, data/S1*.csv to S4*.csv
python3 scripts/sim_scheduler.py     # data/sim_scheduler.*
python3 scripts/model_gpu.py         # data/model_gpu.json, data/M1*.csv to M3*.csv, data/D1*.csv (needs micro_crypto first)
```

All simulations use fixed seeds and reproduce exactly. Microbenchmark timings depend on hardware.

---

## tasqnetwork.io/benchmark, index
Links to the pages below, this README, the scripts and the raw data files.

## tasqnetwork.io/benchmark/crypto
- Source: `scripts/micro_crypto.py` → `data/micro_crypto.csv`, `data/micro_crypto.json`
- Environment: 2-vCPU Intel Xeon @ 2.10 GHz cloud instance, one thread, Python 3.11,
  `cryptography` 46.0.7, `blake3` 1.0.10, `pqcrypto` 1.0.0. Median of 7 runs.
- Covers BLAKE3, SHA-256, AES-256-GCM, Ed25519, X25519, ML-KEM-768, ML-DSA-65,
  hybrid X25519 + ML-KEM-768, HKDF, Merkle roots (1 024 and 65 536 leaves), ledger-ID derivation.

## tasqnetwork.io/benchmark/quorum
- Source: `scripts/sim_protocol.py`
- `S1_quorum_capture.csv`: Eq. 6 vs simulated capture probability (uniform and stake-weighted seats).
- `S2_distinct_machines.csv`: effect of the distinct-machine rule when Sybils share hardware.
- `S3_attack_economics.csv`: profit per unit for coordinating and naive adversaries, with and without hidden audits.
- `S3b_breakeven.csv`: simulated break-even unit value vs the admission rule (Eq. 7).

## tasqnetwork.io/benchmark/reputation
- Source: `scripts/sim_protocol.py` → `S4_reputation.csv`
- Exclusion share and time to exclusion by fault rate, μ = 0.9, threshold 0.8.

## tasqnetwork.io/benchmark/scheduler
- Source: `scripts/sim_scheduler.py` → `sim_scheduler.csv`, `sim_scheduler.json` (parameters included)
- Discrete-event simulation of mode R with hidden audits: latency, utilisation, wrong-acceptance
  rate over time, share of adversarial / faulty / honest nodes removed. Uniform vs κ-weighted seat selection.

## tasqnetwork.io/benchmark/gpu-model
- Source: `scripts/model_gpu.py`
- `M1_modeA_overhead.csv`: MODEL of effective mode-A overhead vs session length.
  Steady-state overhead range taken from published confidential-GPU measurements
  (Zhu et al., arXiv:2409.03992); network round trips are assumptions; key-exchange cost measured.
- `M2_mode_costs.csv`, `M3_breakeven_premium.csv`: MODEL of mode A vs mode R cost.
- `D1_nondeterminism_cpu.csv`: CPU experiment: reordered float32 accumulation in a
  two-layer network; bit-identity vs top-1/top-5 token agreement. A CPU analogue, not a GPU measurement.

---

Labelling rule for the website: every chart or number from M1 to M3 must carry the word
"modelled"; D1 must say "CPU analogue". Do not present any of these as testnet or GPU results.

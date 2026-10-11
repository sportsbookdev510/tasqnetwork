"""Microbenchmarks of the cryptographic primitives specified in the TasQ yellow paper v1.0.
Runs single-threaded on whatever machine executes it. Reports median of repeated trials."""
import os, time, json, csv, statistics, platform, hashlib, sys
import blake3
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives.asymmetric.x25519 import X25519PrivateKey
from cryptography.hazmat.primitives.kdf.hkdf import HKDF
from cryptography.hazmat.primitives import hashes
from pqcrypto.kem import ml_kem_768
from pqcrypto.sign import ml_dsa_65

REPEATS = 7
def timeit(fn, n):
    res = []
    for _ in range(REPEATS):
        t = time.perf_counter()
        for _ in range(n): fn()
        res.append((time.perf_counter() - t) / n)
    return statistics.median(res), min(res), max(res)

rows = []
def add(name, cat, n, fn, unit="op", size=None):
    med, lo, hi = timeit(fn, n)
    row = dict(primitive=name, category=cat, median_us=med * 1e6, min_us=lo * 1e6, max_us=hi * 1e6,
               ops_per_s=1 / med)
    if size: row["throughput_MiB_s"] = size / med / 2**20
    rows.append(row); print(f"{name:45s} {med*1e6:12.2f} us" + (f"  {row['throughput_MiB_s']:9.1f} MiB/s" if size else ""))

MiB = os.urandom(2**20); small = os.urandom(64)
add("BLAKE3, 1 MiB", "hash", 60, lambda: blake3.blake3(MiB).digest(), size=2**20)
add("SHA-256, 1 MiB", "hash", 60, lambda: hashlib.sha256(MiB).digest(), size=2**20)
add("BLAKE3, 64 B", "hash", 20000, lambda: blake3.blake3(small).digest())
key = AESGCM.generate_key(256); aes = AESGCM(key); nonce = os.urandom(12)
add("AES-256-GCM encrypt, 1 MiB", "symmetric", 60, lambda: aes.encrypt(nonce, MiB, None), size=2**20)
ct = aes.encrypt(nonce, MiB, None)
add("AES-256-GCM decrypt, 1 MiB", "symmetric", 60, lambda: aes.decrypt(nonce, ct, None), size=2**20)
sk = Ed25519PrivateKey.generate(); pk = sk.public_key(); msg = os.urandom(64); sig = sk.sign(msg)
add("Ed25519 sign", "signature", 3000, lambda: sk.sign(msg))
add("Ed25519 verify", "signature", 3000, lambda: pk.verify(sig, msg))
def pair(mod):
    a, b = mod.keygen()
    return (a, b) if len(a) == mod.PUBLIC_KEY_SIZE else (b, a)
dpk, dsk = pair(ml_dsa_65); dsig = ml_dsa_65.sign(dsk, msg); assert ml_dsa_65.verify(dpk, msg, dsig) in (True, None)
add("ML-DSA-65 keygen", "signature (PQ)", 500, lambda: ml_dsa_65.keygen())
add("ML-DSA-65 sign", "signature (PQ)", 500, lambda: ml_dsa_65.sign(dsk, msg))
add("ML-DSA-65 verify", "signature (PQ)", 1000, lambda: ml_dsa_65.verify(dpk, msg, dsig))
def hybrid_sign():
    sk.sign(msg); ml_dsa_65.sign(dsk, msg)
add("Hybrid Ed25519 + ML-DSA-65 sign", "signature (hybrid)", 500, hybrid_sign)
a = X25519PrivateKey.generate(); b = X25519PrivateKey.generate().public_key()
add("X25519 key exchange", "key exchange", 3000, lambda: a.exchange(b))
kpk, ksk = pair(ml_kem_768)
add("ML-KEM-768 keygen", "key exchange (PQ)", 2000, lambda: ml_kem_768.keygen())
add("ML-KEM-768 encapsulate", "key exchange (PQ)", 2000, lambda: ml_kem_768.encaps(kpk))
e = ml_kem_768.encaps(kpk); kct, kss = (e if len(e[0]) == ml_kem_768.CIPHERTEXT_SIZE else (e[1], e[0]))
assert ml_kem_768.decaps(ksk, kct) == kss
add("ML-KEM-768 decapsulate", "key exchange (PQ)", 2000, lambda: ml_kem_768.decaps(ksk, kct))
def hybrid_kex():
    a.exchange(b); e = ml_kem_768.encaps(kpk); ml_kem_768.decaps(ksk, kct)
add("Hybrid X25519 + ML-KEM-768 (one side, full)", "key exchange (hybrid)", 1000, hybrid_kex)
ikm = os.urandom(32)
add("HKDF-SHA256, 32 B output", "kdf", 5000, lambda: HKDF(algorithm=hashes.SHA256(), length=32, salt=None, info=b"tasq-id").derive(ikm))

def merkle_root(leaves):
    level = [blake3.blake3(x).digest() for x in leaves]
    while len(level) > 1:
        if len(level) % 2: level.append(level[-1])
        level = [blake3.blake3(level[i] + level[i+1]).digest() for i in range(0, len(level), 2)]
    return level[0]
for n in (1024, 65536):
    leaves = [os.urandom(32) for _ in range(n)]
    add(f"Merkle root (BLAKE3), {n} leaves", "commitment", 3 if n > 5000 else 30, lambda: merkle_root(leaves))
vec = os.urandom(256); att = os.urandom(512); pkb = os.urandom(32)
def ledger_id():
    C = merkle_root([pkb, vec, att])
    return HKDF(algorithm=hashes.SHA256(), length=32, salt=None, info=b"tasq-ledger-id").derive(pkb + C)
add("Ledger ID derivation (Eq. 2-3)", "identity", 3000, ledger_id)

env = dict(python=platform.python_version(), machine=platform.machine(), processor=open('/proc/cpuinfo').read().split('model name')[1].split('\n')[0].strip(': ').strip() if os.path.exists('/proc/cpuinfo') else platform.processor(),
           cpus=os.cpu_count(), repeats=REPEATS, threads=1,
           libraries=dict(blake3=blake3.__version__ if hasattr(blake3, '__version__') else 'n/a'))
json.dump(dict(environment=env, results=rows), open("data/micro_crypto.json", "w"), indent=1)
with open("data/micro_crypto.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["primitive", "category", "median_us", "min_us", "max_us", "ops_per_s", "throughput_MiB_s"])
    w.writeheader(); [w.writerow(r) for r in rows]
print(env)

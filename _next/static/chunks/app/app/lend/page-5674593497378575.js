(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1881],
  {
    66381: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 95817));
    },
    95817: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return v;
          },
        });
      var n = t(57437),
        s = t(2265),
        i = t(79140),
        l = t(67489),
        r = t(15134),
        c = t(82619),
        o = t(23091),
        d = t(82782),
        u = t(23700);
      let h = [
          { id: "cc-tdx", label: "NVIDIA CC + Intel TDX", enclave: !0 },
          { id: "cc-snp", label: "NVIDIA CC + AMD SEV-SNP", enclave: !0 },
          { id: "tpm", label: "TPM 2.0 only", enclave: !1 },
          { id: "none", label: "None", enclave: !1 },
        ],
        m = [
          "North America",
          "Europe",
          "Asia Pacific",
          "Middle East",
          "South America",
          "Africa",
        ],
        p = [
          ["GPU", "GEMM and FFT microbenchmarks"],
          ["CPU", "CoreMark-Pro and LINPACK kernels"],
          ["Memory", "STREAM bandwidth and latency"],
          ["Storage", "fio sequential and random"],
          ["Network", "iperf3 and QUIC round trips"],
        ];
      function v() {
        let e = (0, r.Os)(),
          { sign: a, busy: t } = (0, l.mx)(),
          [v, M] = (0, s.useState)("h100"),
          [x, g] = (0, s.useState)(1),
          [f, N] = (0, s.useState)("cc-tdx"),
          [b, j] = (0, s.useState)("Europe"),
          [y, C] = (0, s.useState)(32),
          [P, k] = (0, s.useState)(256),
          [H, w] = (0, s.useState)(1e3),
          [S, E] = (0, s.useState)(1e3),
          A = c.QC.find((e) => e.id === v),
          [z, I] = (0, s.useState)(A.basePerHour),
          [L, U] = (0, s.useState)(0.5),
          [R, _] = (0, s.useState)(""),
          [T, B] = (0, s.useState)(null);
        function V() {
          let e = new Uint8Array(32);
          crypto.getRandomValues(e), _((0, d.$v)(e));
        }
        (0, s.useEffect)(() => {
          I(A.basePerHour);
        }, [A.basePerHour]),
          (0, s.useEffect)(() => {
            V();
          }, []);
        let O = h.find((e) => e.id === f),
          D = A.attestable && O.enclave,
          G = [...(D ? ["A"] : []), "R", "P"],
          [q, X] = (0, s.useState)(["A", "R"]),
          F = q.filter((e) => G.includes(e)),
          J = (0, s.useMemo)(
            () => ({
              gpu: A.id,
              count: x,
              vram: A.vram,
              cores: y,
              ram: P,
              bw: H,
              region: b,
            }),
            [A, x, y, P, H, b]
          ),
          Q = (0, s.useMemo)(() => (R ? (0, d.Z8)(R, J, f) : null), [R, J, f]),
          K = Math.floor(S / o.I.stakePerSeat),
          W = (0, o.i7)(0.1, 2, o.I.sigma, o.I.stakePerSeat),
          Y = z * x * 720 * L;
        async function Z() {
          if (!Q) return;
          let t = await a("NodeRegistration", {
            operator: e.address,
            ledgerId: Q.ledgerId,
            gpuClass: A.id,
            gpuCount: x,
            modes: F.join(""),
            stakeCredits: BigInt(S),
            minPriceMicroUsd: BigInt(Math.round(1e6 * z)),
            nonce: (0, u.tf)(),
          });
          t && B(t);
        }
        let $ = [
          [
            "Wallet connected",
            e.connected ? "Done" : "Connect a wallet",
            e.connected,
          ],
          ["Hardware described", "Done", !0],
          ["Registration signed", T ? "Done" : "Sign below", !!T],
          [
            "Attestation report verified",
            D ? "Node agent, at first start" : "Not applicable",
            !1,
          ],
          ["Benchmark suite passed", "Node agent, seeded by coordinator", !1],
          ["Stake posted", "After contracts deploy", !1],
        ];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(l.yG, {
              eyebrow: "Lend",
              title: "Lend your compute",
              desc: "Describe your machine, see which assurance modes it qualifies for, and register it. You never receive a client's data in the clear unless you serve mode R.",
            }),
            (0, n.jsxs)("div", {
              className: "split",
              children: [
                (0, n.jsxs)("div", {
                  className: "stack",
                  style: { gap: 20 },
                  children: [
                    (0, n.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, n.jsx)("div", {
                          className: "panel-head",
                          children: (0, n.jsx)("span", {
                            className: "h4",
                            children: "Hardware",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "panel-body",
                          children: (0, n.jsxs)("div", {
                            className: "grid g2",
                            children: [
                              (0, n.jsx)(l.gN, {
                                label: "GPU class",
                                children: (0, n.jsx)("select", {
                                  className: "select",
                                  value: v,
                                  onChange: (e) => M(e.target.value),
                                  children: c.QC.map((e) =>
                                    (0, n.jsx)(
                                      "option",
                                      { value: e.id, children: e.name },
                                      e.id
                                    )
                                  ),
                                }),
                              }),
                              (0, n.jsx)(l.gN, {
                                label: "GPUs in this machine",
                                children: (0, n.jsx)(l.PG, {
                                  options: [1, 2, 4, 8].map((e) => ({
                                    value: e,
                                    label: String(e),
                                  })),
                                  value: x,
                                  onChange: g,
                                }),
                              }),
                              (0, n.jsx)(l.gN, {
                                label: "CPU cores",
                                children: (0, n.jsx)("input", {
                                  className: "input",
                                  type: "number",
                                  min: 1,
                                  value: y,
                                  onChange: (e) =>
                                    C(Math.max(1, +e.target.value || 1)),
                                }),
                              }),
                              (0, n.jsx)(l.gN, {
                                label: "System memory",
                                children: (0, n.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    (0, n.jsx)("input", {
                                      className: "input",
                                      type: "number",
                                      min: 8,
                                      value: P,
                                      onChange: (e) =>
                                        k(Math.max(8, +e.target.value || 8)),
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "suffix",
                                      children: "GB",
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)(l.gN, {
                                label: "Region",
                                children: (0, n.jsx)("select", {
                                  className: "select",
                                  value: b,
                                  onChange: (e) => j(e.target.value),
                                  children: m.map((e) =>
                                    (0, n.jsx)("option", { children: e }, e)
                                  ),
                                }),
                              }),
                              (0, n.jsx)(l.gN, {
                                label: "Uplink",
                                children: (0, n.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    (0, n.jsx)("input", {
                                      className: "input",
                                      type: "number",
                                      min: 10,
                                      value: H,
                                      onChange: (e) =>
                                        w(Math.max(10, +e.target.value || 10)),
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "suffix",
                                      children: "Mbit/s",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, n.jsx)("div", {
                          className: "panel-head",
                          children: (0, n.jsx)("span", {
                            className: "h4",
                            children: "Attestation and modes",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, n.jsx)(l.gN, {
                              label: "Hardware attestation",
                              help: "Mode A needs a confidential-computing GPU together with a CPU TEE so the whole runtime can be measured.",
                              children: (0, n.jsx)("select", {
                                className: "select",
                                value: f,
                                onChange: (e) => N(e.target.value),
                                children: h.map((e) =>
                                  (0, n.jsx)(
                                    "option",
                                    { value: e.id, children: e.label },
                                    e.id
                                  )
                                ),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "choice-grid",
                              children: Object.keys(o.EH).map((e) => {
                                let a = G.includes(e),
                                  t = a && q.includes(e);
                                return (0, n.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    className: "choice".concat(t ? " on" : ""),
                                    disabled: !a,
                                    onClick: () =>
                                      X((a) =>
                                        a.includes(e)
                                          ? a.filter((a) => a !== e)
                                          : [...a, e]
                                      ),
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: "t",
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "chip-mode ".concat(e),
                                            children: e,
                                          }),
                                          o.EH[e].name,
                                          t &&
                                            (0, n.jsx)(i.JO, {
                                              name: "check",
                                              size: 14,
                                              style: {
                                                marginLeft: "auto",
                                                color: "var(--brand-2)",
                                              },
                                            }),
                                        ],
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "d",
                                        children: a
                                          ? o.EH[e].use
                                          : "Needs an attestable GPU and a CPU TEE.",
                                      }),
                                    ],
                                  },
                                  e
                                );
                              }),
                            }),
                            F.includes("R") &&
                              (0, n.jsxs)("div", {
                                className: "notice info",
                                children: [
                                  (0, n.jsx)(i.JO, { name: "info", size: 16 }),
                                  (0, n.jsx)("span", {
                                    children:
                                      "In mode R your machine sees job inputs. Clients only send non-confidential work to mode R, and some of it is secretly re-run as an audit.",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, n.jsx)("div", {
                          className: "panel-head",
                          children: (0, n.jsx)("span", {
                            className: "h4",
                            children: "Price and stake",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "grid g2",
                              children: [
                                (0, n.jsx)(l.gN, {
                                  label: "Minimum price per GPU hour",
                                  help: "Reference price for this class is ".concat(
                                    (0, o.xe)(A.basePerHour),
                                    "."
                                  ),
                                  children: (0, n.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      (0, n.jsx)("input", {
                                        className: "input",
                                        type: "number",
                                        min: 0.05,
                                        step: 0.05,
                                        value: z,
                                        onChange: (e) =>
                                          I(
                                            Math.max(
                                              0.05,
                                              +e.target.value || 0.05
                                            )
                                          ),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "suffix",
                                        children: "USD",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, n.jsx)(l.gN, {
                                  label: "Stake",
                                  help: ""
                                    .concat(
                                      o.I.stakePerSeat,
                                      " credits per concurrent seat. A verified fault slashes "
                                    )
                                    .concat(
                                      100 * o.I.sigma,
                                      "% of the seat stake."
                                    ),
                                  children: (0, n.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      (0, n.jsx)("input", {
                                        className: "input",
                                        type: "number",
                                        min: 0,
                                        step: 100,
                                        value: S,
                                        onChange: (e) =>
                                          E(
                                            Math.max(
                                              0,
                                              Math.round(+e.target.value || 0)
                                            )
                                          ),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "suffix",
                                        children: "credits",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "grid g3",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "stat",
                                  style: { padding: 16 },
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "stat-v",
                                      style: { fontSize: 22 },
                                      children: K,
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "stat-l",
                                      children:
                                        "Concurrent mode R seats your stake covers",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "stat",
                                  style: { padding: 16 },
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "stat-v",
                                      style: { fontSize: 22 },
                                      children: W.toFixed(0),
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "stat-l",
                                      children:
                                        "Largest unit value admitted at π = 0.1, q = 2 (credits)",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "stat",
                                  style: { padding: 16 },
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "stat-v",
                                      style: { fontSize: 22 },
                                      children: (0, o.xe)(Y),
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: "stat-l",
                                      children: [
                                        "Gross per month at ",
                                        Math.round(100 * L),
                                        "% utilisation, illustrative",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(l.gN, {
                              label: "Assumed utilisation",
                              hint: "".concat(Math.round(100 * L), "%"),
                              help: "For the estimate only. Real utilisation depends on demand, price and reputation.",
                              children: (0, n.jsx)("input", {
                                type: "range",
                                min: 0.1,
                                max: 1,
                                step: 0.05,
                                value: L,
                                onChange: (e) => U(+e.target.value),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("aside", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "panel-head",
                          children: [
                            (0, n.jsx)("span", {
                              className: "h4",
                              children: "Node identity",
                            }),
                            (0, n.jsxs)("button", {
                              className: "btn btn-ghost btn-sm",
                              onClick: V,
                              children: [
                                (0, n.jsx)(i.JO, { name: "refresh", size: 14 }),
                                "New key",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          style: { gap: 14 },
                          children: [
                            (0, n.jsx)(l.pb, {
                              label: "Node public key",
                              value: R || "...",
                            }),
                            Q &&
                              (0, n.jsx)(l.pb, {
                                label: "Commitment C, Eq. 2",
                                value: Q.commitment,
                              }),
                            Q &&
                              (0, n.jsx)(l.pb, {
                                label: "Ledger ID, Eq. 3",
                                value: Q.ledgerId,
                              }),
                            (0, n.jsx)("p", {
                              className: "field-help",
                              children:
                                "Computed in your browser: BLAKE3 Merkle commitment over the key, capability vector and attestation, then HKDF-SHA256. The node agent generates the real key at install.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, n.jsx)("div", {
                          className: "panel-head",
                          children: (0, n.jsx)("span", {
                            className: "h4",
                            children: "Onboarding",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "panel-body",
                          style: { gap: 0, paddingTop: 6, paddingBottom: 6 },
                          children: (0, n.jsx)("ul", {
                            className: "checklist",
                            style: { margin: 0, padding: 0 },
                            children: $.map((e) => {
                              let [a, t, s] = e;
                              return (0, n.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "check-ico".concat(
                                        s ? " done" : ""
                                      ),
                                      children:
                                        s &&
                                        (0, n.jsx)(i.JO, {
                                          name: "check",
                                          size: 12,
                                        }),
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: "stack",
                                      style: { gap: 1 },
                                      children: [
                                        (0, n.jsx)("span", { children: a }),
                                        (0, n.jsx)("span", {
                                          className: "tiny faint",
                                          children: t,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                a
                              );
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-foot",
                          children: [
                            (0, n.jsxs)("details", {
                              children: [
                                (0, n.jsx)("summary", {
                                  className: "small muted",
                                  style: { cursor: "pointer" },
                                  children: "What the benchmark suite runs",
                                }),
                                (0, n.jsx)("div", {
                                  style: {
                                    display: "grid",
                                    gap: 6,
                                    marginTop: 10,
                                  },
                                  children: p.map((e) => {
                                    let [a, t] = e;
                                    return (0, n.jsxs)(
                                      "div",
                                      {
                                        className: "summary-row",
                                        children: [
                                          (0, n.jsx)("span", { children: a }),
                                          (0, n.jsx)("b", {
                                            style: {
                                              fontWeight: 400,
                                              color: "var(--text-2)",
                                            },
                                            children: t,
                                          }),
                                        ],
                                      },
                                      a
                                    );
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)(l.kV, {
                              onClick: Z,
                              busy: t,
                              label: "Sign registration",
                              disabled: !Q || 0 === F.length,
                            }),
                            (0, n.jsxs)("span", {
                              className: "tiny faint",
                              children: [
                                "Offering ",
                                F.length
                                  ? F.map((e) => o.EH[e].name).join(", ")
                                  : "no modes",
                                ". Signing registers your node.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(l.qV, { intent: T }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    79140: function (e, a, t) {
      "use strict";
      t.d(a, {
        JO: function () {
          return i;
        },
        S5: function () {
          return l;
        },
        qf: function () {
          return r;
        },
      });
      var n = t(57437);
      let s = {
        arrowRight: "M5 12h14M13 6l6 6-6 6",
        arrowUpRight: "M7 17 17 7M8 7h9v9",
        lock: "M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3",
        cpu: "M7 7h10v10H7zM10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4",
        server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
        shield:
          "M12 3 4.5 6v6c0 4.4 3.2 7.9 7.5 9 4.3-1.1 7.5-4.6 7.5-9V6L12 3zM9 12l2 2 4-4",
        check: "M5 12.5l4.5 4.5L19 7.5",
        x: "M6 6l12 12M18 6 6 18",
        market: "M4 5h16M4 12h16M4 19h16M8 5v14",
        layers: "M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 18l9 5 9-5",
        parallel: "M5 4v16M10 4v16M15 4v16M20 4v16",
        wallet:
          "M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V7zM4 7l12-3v3M16 13.5h.01",
        github:
          "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
        file: "M14 3H6v18h12V7l-4-4zM14 3v4h4M9 13h6M9 17h6",
        copy: "M9 9h11v11H9zM5 15H4V4h11v1",
        chevronDown: "m6 9 6 6 6-6",
        chevronRight: "m9 6 6 6-6 6",
        menu: "M4 7h16M4 12h16M4 17h16",
        plus: "M12 5v14M5 12h14",
        info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01",
        alert: "M12 4 2.5 20h19L12 4zM12 10v4M12 17h.01",
        logout: "M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11",
        external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
        home: "M4 11 12 4l8 7v9h-5v-6H9v6H4z",
        key: "M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12 12v9M12 16h3M12 19h2",
        hash: "M5 9h14M5 15h14M10 4 8 20M16 4l-2 16",
        activity: "M3 12h4l3 8 4-16 3 8h4",
        upload: "M12 16V4M7 9l5-5 5 5M4 16v4h16v-4",
        download: "M12 4v12M7 11l5 5 5-5M4 20h16",
        eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
        eyeOff:
          "M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.8M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2",
        coins:
          "M9 8c3.9 0 7-1.3 7-3s-3.1-3-7-3-7 1.3-7 3 3.1 3 7 3zM2 5v6c0 1.7 3.1 3 7 3M2 11v6c0 1.7 3.1 3 7 3M16 12c3.9 0 6 1 6 2.5S19.9 17 16 17s-6-1-6-2.5 2.1-2.5 6-2.5zM10 14.5v4c0 1.4 2.1 2.5 6 2.5s6-1.1 6-2.5v-4",
        doc: "M7 3h7l5 5v13H7zM14 3v5h5",
        chart: "M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3",
        globe:
          "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
        refresh:
          "M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4",
        play: "M7 5v14l11-7z",
        terminal: "M4 5h16v14H4zM7 9l3 3-3 3M12 15h5",
        search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
        volume:
          "M11 5 6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14",
        mute: "M11 5 6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6",
        pause: "M7 5h3v14H7zM14 5h3v14h-3z",
        expand: "M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",
      };
      function i(e) {
        let { name: a, size: t = 18, strokeWidth: i = 1.7, ...l } = e;
        return (0, n.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: i,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...l,
          children: (0, n.jsx)("path", { d: s[a] }),
        });
      }
      function l(e) {
        let { size: a = 16 } = e;
        return (0, n.jsx)("svg", {
          width: a,
          height: a,
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, n.jsx)("path", {
            d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
          }),
        });
      }
      function r(e) {
        let { size: a = 15 } = e;
        return (0, n.jsx)("img", {
          src: "/robinhood-mark.png",
          alt: "",
          width: a,
          height: a,
          style: {
            width: a,
            height: a,
            borderRadius: "50%",
            display: "block",
            flex: "none",
          },
        });
      }
    },
    8530: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z2: function () {
          return d;
        },
        lz: function () {
          return o;
        },
        v1: function () {
          return c;
        },
      });
      var n = t(90328),
        s = t(25566);
      let i = Number(s.env.NEXT_PUBLIC_CHAIN_ID || 4663),
        l =
          s.env.NEXT_PUBLIC_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        r =
          s.env.NEXT_PUBLIC_EXPLORER_URL ||
          "https://robinhoodchain.blockscout.com",
        c = (0, n.a)({
          id: i,
          name: s.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: [l] } },
          blockExplorers: { default: { name: "Blockscout", url: r } },
        }),
        o = {
          url: s.env.NEXT_PUBLIC_SITE_URL || "https://tasqnetwork.io",
          github:
            s.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tasqProject",
          gitbook: s.env.NEXT_PUBLIC_GITBOOK_URL || "",
          x: s.env.NEXT_PUBLIC_X_URL || "https://x.com/tasq_x",
          email: s.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
          paper: "/tasq-yellow-paper.pdf",
        },
        d = "cmupg0n18016s0cl2cqtup7xb";
    },
    82782: function (e, a, t) {
      "use strict";
      t.d(a, {
        $v: function () {
          return r;
        },
        Dc: function () {
          return d;
        },
        Nc: function () {
          return u;
        },
        Th: function () {
          return o;
        },
        Z8: function () {
          return h;
        },
      });
      var n = t(81154),
        s = t(51712),
        i = t(29272),
        l = t(25884);
      let r = (e) => "0x" + (0, l.ci)(e),
        c = (e) => (0, l.nr)(e.replace(/^0x/, "").trim().toLowerCase());
      async function o(e, a) {
        let t = n.w.create({});
        for (let n = 0; n < e.size; n += 4194304) {
          let s = new Uint8Array(await e.slice(n, n + 4194304).arrayBuffer());
          t.update(s), null == a || a(Math.min(1, (n + 4194304) / e.size));
        }
        return 0 === e.size && (null == a || a(1)), r(t.digest());
      }
      function d(e) {
        if (0 === e.length) return (0, n.w)(new Uint8Array());
        let a = e.map((e) => (0, n.w)(e));
        for (; a.length > 1; ) {
          a.length % 2 && a.push(a[a.length - 1]);
          let e = [];
          for (let t = 0; t < a.length; t += 2)
            e.push((0, n.w)((0, l.eV)(a[t], a[t + 1])));
          a = e;
        }
        return a[0];
      }
      function u(e, a, t) {
        let s = c(e);
        for (let e of a) {
          let a = c(e.sibling);
          s =
            "left" === e.position
              ? (0, n.w)((0, l.eV)(a, s))
              : (0, n.w)((0, l.eV)(s, a));
        }
        return (0, l.ci)(s) === t.replace(/^0x/, "").toLowerCase();
      }
      function h(e, a, t) {
        let n = (0, l.iY)(e.toLowerCase()),
          c = d([n, (0, l.iY)(JSON.stringify(a)), (0, l.iY)(t)]),
          o = (0, s.Di)(
            i.JQ,
            (0, l.eV)(n, c),
            void 0,
            (0, l.iY)("tasq-ledger-id"),
            32
          );
        return { commitment: r(c), ledgerId: r(o) };
      }
    },
    82619: function (e, a, t) {
      "use strict";
      t.d(a, {
        QC: function () {
          return n;
        },
        jn: function () {
          return l;
        },
        u$: function () {
          return s;
        },
      });
      let n = [
          {
            id: "h100",
            name: "H100 80GB",
            vram: 80,
            attestable: !0,
            basePerHour: 2.6,
          },
          {
            id: "h200",
            name: "H200 141GB",
            vram: 141,
            attestable: !0,
            basePerHour: 3.4,
          },
          {
            id: "a100",
            name: "A100 80GB",
            vram: 80,
            attestable: !1,
            basePerHour: 1.5,
          },
          {
            id: "l40s",
            name: "L40S 48GB",
            vram: 48,
            attestable: !1,
            basePerHour: 0.95,
          },
          {
            id: "rtx4090",
            name: "RTX 4090 24GB",
            vram: 24,
            attestable: !1,
            basePerHour: 0.45,
          },
          {
            id: "rtx5090",
            name: "RTX 5090 32GB",
            vram: 32,
            attestable: !1,
            basePerHour: 0.7,
          },
        ],
        s = 2.6,
        i = [
          "North America",
          "Europe",
          "Asia Pacific",
          "Middle East",
          "South America",
        ],
        l = (() => {
          let e;
          let a =
              ((e = 4663),
              () => (e = (1664525 * e + 1013904223) >>> 0) / 4294967296),
            t = [];
          for (let e = 0; e < 36; e++) {
            let s = n[Math.floor(a() * n.length)],
              l = [1, 1, 2, 4, 8][Math.floor(5 * a())],
              r = s.attestable
                ? a() > 0.3
                  ? ["A", "R"]
                  : ["A", "R", "P"]
                : a() > 0.6
                ? ["R", "P"]
                : ["R"];
            t.push({
              id: "TQ-".concat((6699 + 97 * e).toString(16).toUpperCase()),
              gpu: s,
              count: l,
              modes: r,
              attestation: s.attestable
                ? a() > 0.5
                  ? "NVIDIA CC + TDX"
                  : "NVIDIA CC + SEV-SNP"
                : a() > 0.5
                ? "TPM 2.0"
                : "None",
              region: i[Math.floor(a() * i.length)],
              pricePerHour:
                Math.round(s.basePerHour * (0.85 + 0.35 * a()) * 100) / 100,
              reputation: Math.round((0.86 + 0.14 * a()) * 1e3) / 1e3,
              available: Math.max(1, Math.round(l * (0.3 + 0.7 * a()))),
              uptime: Math.round((0.95 + 0.049 * a()) * 1e3) / 10,
            });
          }
          return t;
        })();
    },
    23091: function (e, a, t) {
      "use strict";
      t.d(a, {
        EH: function () {
          return n;
        },
        EV: function () {
          return l;
        },
        I: function () {
          return r;
        },
        Pu: function () {
          return s;
        },
        i7: function () {
          return i;
        },
        mW: function () {
          return c;
        },
        xe: function () {
          return o;
        },
      });
      let n = {
        A: {
          name: "Attested",
          short: "Hardware enclave",
          integrity: "Enclave attestation of the runtime image",
          hidden: !0,
          use: "Confidential inference and fine-tuning",
        },
        R: {
          name: "Redundant",
          short: "Quorum plus hidden audits",
          integrity:
            "q of r independent seats agree, within the admission rule",
          hidden: !1,
          use: "Non-confidential batch inference and data jobs",
        },
        P: {
          name: "Proven",
          short: "Zero-knowledge proof",
          integrity: "zk-STARK proof against the input commitment",
          hidden: !1,
          use: "Small models and deterministic data jobs",
        },
      };
      function s(e, a, t) {
        let n = 0;
        for (let s = t; s <= a; s++)
          n +=
            (function (e, a) {
              let t = 1;
              for (let n = 1; n <= a; n++) t = (t * (e - a + n)) / n;
              return t;
            })(a, s) *
            Math.pow(e, s) *
            Math.pow(1 - e, a - s);
        return n;
      }
      function i(e, a, t, n) {
        return e >= 1 ? 1 / 0 : (e * a * t * n) / (1 - e);
      }
      function l(e, a, t, n) {
        return e / (e + a * t * n);
      }
      let r = { sigma: 0.5, stakePerSeat: 500, enclaveOverhead: 0.05 };
      function c(e) {
        var a, t, n;
        let s = null !== (a = e.units) && void 0 !== a ? a : 1,
          i = e.hours * s;
        if ("A" === e.mode) {
          let a = e.attestedPerHour * (1 + r.enclaveOverhead);
          return {
            perHour: a,
            total: a * i,
            breakdown: [
              { label: "Attested GPU time", value: e.attestedPerHour * i },
              {
                label: "Enclave overhead (5%)",
                value: e.attestedPerHour * r.enclaveOverhead * i,
              },
            ],
          };
        }
        if ("R" === e.mode) {
          let a = null !== (t = e.r) && void 0 !== t ? t : 3,
            s = null !== (n = e.pi) && void 0 !== n ? n : 0.1,
            l = a * e.basePerHour,
            c = s * e.attestedPerHour * (1 + r.enclaveOverhead);
          return {
            perHour: l + c,
            total: (l + c) * i,
            breakdown: [
              { label: "".concat(a, " seats"), value: l * i },
              {
                label: "Hidden audits (".concat(
                  Math.round(100 * s),
                  "% in mode A)"
                ),
                value: c * i,
              },
            ],
          };
        }
        let l = e.basePerHour;
        return {
          perHour: l,
          total: l * i,
          breakdown: [
            { label: "Execution", value: l * i },
            { label: "Proving", value: NaN },
          ],
        };
      }
      let o = (e) =>
        Number.isFinite(e)
          ? e.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: e < 1e3 ? 2 : 0,
              maximumFractionDigits: e < 1e3 ? 2 : 0,
            })
          : "On request";
    },
  },
  function (e) {
    e.O(0, [9912, 3146, 3852, 6513, 2733, 5118, 2971, 2117, 1744], function () {
      return e((e.s = 66381));
    }),
      (_N_E = e.O());
  },
]);

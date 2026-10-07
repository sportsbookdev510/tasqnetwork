(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3089],
  {
    85350: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 35175));
    },
    35175: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return u;
          },
        });
      var n = t(57437),
        s = t(2265),
        l = t(79140),
        i = t(67489),
        r = t(15134),
        o = t(82619),
        c = t(23091),
        d = t(82782),
        h = t(23700);
      function u() {
        let e = (0, r.Os)(),
          { sign: a, busy: t } = (0, i.mx)(),
          [u, p] = (0, s.useState)("ghcr.io/your-org/embed-batch:1.4"),
          [v, x] = (0, s.useState)(
            "python embed.py --shard ${UNIT} --model bge-large"
          ),
          [M, g] = (0, s.useState)(""),
          [f, b] = (0, s.useState)(""),
          [j, N] = (0, s.useState)(0),
          [y, w] = (0, s.useState)(256),
          [C, H] = (0, s.useState)(6),
          [k, P] = (0, s.useState)("l40s"),
          [S, E] = (0, s.useState)(32),
          [z, I] = (0, s.useState)(!1),
          [A, L] = (0, s.useState)("R"),
          [R, _] = (0, s.useState)(3),
          [U, T] = (0, s.useState)(0.1),
          [V, B] = (0, s.useState)(20),
          O = (0, s.useRef)(null),
          q = o.QC.find((e) => e.id === k),
          F = Math.floor(R / 2) + 1;
        (0, s.useEffect)(() => {
          z && (L("A"), q.attestable || P("h100"));
        }, [z, q.attestable]),
          (0, s.useEffect)(() => {
            "A" !== A || q.attestable || P("h100");
          }, [A, q.attestable]);
        let G = (0, c.i7)(U, F, c.I.sigma, c.I.stakePerSeat),
          X = (0, c.EV)(V, F, c.I.sigma, c.I.stakePerSeat),
          D = "R" !== A || V <= G,
          W = (0, c.Pu)(0.1, R, F),
          Y = (y * C) / 60,
          J = (0, c.mW)({
            mode: A,
            basePerHour: q.basePerHour,
            attestedPerHour: q.attestable ? q.basePerHour : o.u$,
            hours: Y,
            r: R,
            pi: U,
          }),
          Q = Math.ceil((y * ("R" === A ? R : 1)) / S) * C;
        async function $(e) {
          b(e.name), g(""), N(0.001), g(await (0, d.Th)(e, N)), N(0);
        }
        let K = /^0x[0-9a-fA-F]{64}$/.test(M.trim());
        async function Z() {
          await a("WorkloadIntent", {
            client: e.address,
            image: u,
            inputCommitment: M.trim(),
            units: y,
            mode: A,
            r: "R" === A ? R : 1,
            q: "R" === A ? F : 1,
            auditRateBps: "R" === A ? Math.round(1e4 * U) : 0,
            declaredValueMicroUsd: BigInt(Math.round(1e6 * V)),
            nonce: (0, h.tf)(),
          });
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.yG, {
              eyebrow: "Parallel workloads",
              title: "Rent private parallel compute",
              desc: "Split a job into units that run across many machines at once. You keep the inputs. The network only sees a commitment until a unit is scheduled on an approved machine.",
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
                            children: "Workload",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, n.jsx)(i.gN, {
                              label: "Container image",
                              help: "Pin by digest. In mode A the enclave attests to this exact image before it gets a key.",
                              children: (0, n.jsx)("input", {
                                className: "input mono",
                                value: u,
                                onChange: (e) => p(e.target.value),
                              }),
                            }),
                            (0, n.jsx)(i.gN, {
                              label: "Command per unit",
                              help: "${UNIT} is replaced with the unit index.",
                              children: (0, n.jsx)("textarea", {
                                className: "textarea mono",
                                rows: 2,
                                value: v,
                                onChange: (e) => x(e.target.value),
                              }),
                            }),
                            (0, n.jsx)(i.gN, {
                              label: "Input commitment",
                              help: "Hash your input bundle locally. The file is not uploaded. Units fetch encrypted shards after scheduling.",
                              children: (0, n.jsxs)("div", {
                                className: "stack",
                                style: { gap: 10 },
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "dropzone",
                                    onClick: () => {
                                      var e;
                                      return null === (e = O.current) ||
                                        void 0 === e
                                        ? void 0
                                        : e.click();
                                    },
                                    style: { padding: 16 },
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: "row",
                                        style: { gap: 8, color: "var(--text)" },
                                        children: [
                                          (0, n.jsx)(l.JO, {
                                            name: "hash",
                                            size: 16,
                                          }),
                                          f || "Choose an input file to hash",
                                        ],
                                      }),
                                      (0, n.jsx)("input", {
                                        ref: O,
                                        type: "file",
                                        hidden: !0,
                                        onChange: (e) => {
                                          var a;
                                          let t =
                                            null === (a = e.target.files) ||
                                            void 0 === a
                                              ? void 0
                                              : a[0];
                                          t && $(t);
                                        },
                                      }),
                                    ],
                                  }),
                                  j > 0 &&
                                    (0, n.jsx)("div", {
                                      className: "progress",
                                      children: (0, n.jsx)("div", {
                                        style: {
                                          width: "".concat(100 * j, "%"),
                                        },
                                      }),
                                    }),
                                  (0, n.jsx)("input", {
                                    className: "input mono",
                                    placeholder: "0x... (32-byte BLAKE3 hash)",
                                    value: M,
                                    onChange: (e) => g(e.target.value),
                                  }),
                                ],
                              }),
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
                            children: "Scale",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "panel-body",
                          children: (0, n.jsxs)("div", {
                            className: "grid g2",
                            children: [
                              (0, n.jsx)(i.gN, {
                                label: "Units",
                                hint: "".concat(y),
                                children: (0, n.jsx)("input", {
                                  className: "input",
                                  type: "number",
                                  min: 1,
                                  max: 1e5,
                                  value: y,
                                  onChange: (e) =>
                                    w(
                                      Math.max(
                                        1,
                                        Math.min(
                                          1e5,
                                          Math.round(+e.target.value || 1)
                                        )
                                      )
                                    ),
                                }),
                              }),
                              (0, n.jsx)(i.gN, {
                                label: "Minutes per unit",
                                hint: "estimate",
                                children: (0, n.jsx)("input", {
                                  className: "input",
                                  type: "number",
                                  min: 1,
                                  max: 600,
                                  value: C,
                                  onChange: (e) =>
                                    H(
                                      Math.max(
                                        1,
                                        Math.min(
                                          600,
                                          Math.round(+e.target.value || 1)
                                        )
                                      )
                                    ),
                                }),
                              }),
                              (0, n.jsx)(i.gN, {
                                label: "GPU class",
                                children: (0, n.jsx)("select", {
                                  className: "select",
                                  value: k,
                                  onChange: (e) => P(e.target.value),
                                  children: o.QC.map((e) =>
                                    (0, n.jsxs)(
                                      "option",
                                      {
                                        value: e.id,
                                        disabled: "A" === A && !e.attestable,
                                        children: [
                                          e.name,
                                          e.attestable ? ", attestable" : "",
                                        ],
                                      },
                                      e.id
                                    )
                                  ),
                                }),
                              }),
                              (0, n.jsx)(i.gN, {
                                label: "Machines at once",
                                children: (0, n.jsx)(i.PG, {
                                  options: [8, 32, 128].map((e) => ({
                                    value: e,
                                    label: String(e),
                                  })),
                                  value: S,
                                  onChange: E,
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
                            children: "Assurance",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, n.jsx)(i.rs, {
                              checked: z,
                              onChange: I,
                              label: "Inputs are private",
                              help: "Forces mode A on attested machines.",
                            }),
                            (0, n.jsx)("div", {
                              className: "choice-grid",
                              children: Object.keys(c.EH).map((e) =>
                                (0, n.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    className: "choice".concat(
                                      A === e ? " on" : ""
                                    ),
                                    disabled: z && "A" !== e,
                                    onClick: () => L(e),
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: "t",
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "chip-mode ".concat(e),
                                            children: e,
                                          }),
                                          c.EH[e].name,
                                        ],
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "d",
                                        children: c.EH[e].short,
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                            "R" === A &&
                              (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "grid g2",
                                    children: [
                                      (0, n.jsx)(i.gN, {
                                        label: "Seats per unit",
                                        hint: "q = ".concat(F, " must agree"),
                                        children: (0, n.jsx)(i.PG, {
                                          options: [3, 5].map((e) => ({
                                            value: e,
                                            label: "r = ".concat(e),
                                          })),
                                          value: R,
                                          onChange: _,
                                        }),
                                      }),
                                      (0, n.jsx)(i.gN, {
                                        label: "Hidden audit rate π",
                                        hint: "".concat(
                                          (100 * U).toFixed(0),
                                          "%"
                                        ),
                                        children: (0, n.jsx)("input", {
                                          type: "range",
                                          min: 0.01,
                                          max: 0.5,
                                          step: 0.01,
                                          value: U,
                                          onChange: (e) => T(+e.target.value),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)(i.gN, {
                                    label: "Value of one correct unit",
                                    help: "What a wrong but accepted unit would cost you. The admission rule caps this for a given audit rate.",
                                    children: (0, n.jsxs)("div", {
                                      className: "input-group",
                                      children: [
                                        (0, n.jsx)("input", {
                                          className: "input",
                                          type: "number",
                                          min: 0,
                                          step: 1,
                                          value: V,
                                          onChange: (e) =>
                                            B(
                                              Math.max(0, +e.target.value || 0)
                                            ),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: "suffix",
                                          children: "credits",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "result ".concat(
                                      D ? "ok" : "bad"
                                    ),
                                    style: { alignItems: "flex-start" },
                                    children: [
                                      (0, n.jsx)(l.JO, {
                                        name: D ? "check" : "alert",
                                        size: 18,
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "stack",
                                        style: { gap: 4 },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: D
                                              ? "Admitted in mode R"
                                              : "Not admitted at this audit rate",
                                          }),
                                          (0, n.jsxs)("span", {
                                            className: "small",
                                            style: {
                                              fontWeight: 400,
                                              color: "var(--text-2)",
                                            },
                                            children: [
                                              "Eq. 7 allows up to ",
                                              G.toFixed(1),
                                              " credits per unit at π = ",
                                              U.toFixed(2),
                                              ", q = ",
                                              F,
                                              ", σ = ",
                                              c.I.sigma,
                                              ", S = ",
                                              c.I.stakePerSeat,
                                              ".",
                                              !D &&
                                                (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    " You need π of at least ",
                                                    (100 * X).toFixed(1),
                                                    "%. ",
                                                  ],
                                                }),
                                            ],
                                          }),
                                          !D &&
                                            (0, n.jsxs)("button", {
                                              className: "btn btn-ghost btn-sm",
                                              style: {
                                                justifySelf: "start",
                                                marginTop: 4,
                                              },
                                              onClick: () =>
                                                T(
                                                  Math.min(
                                                    0.5,
                                                    Math.ceil(100 * X) / 100
                                                  )
                                                ),
                                              children: [
                                                "Use ",
                                                Math.ceil(100 * X),
                                                "%",
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("p", {
                                    className: "field-help",
                                    children: [
                                      "If an adversary holds ",
                                      10,
                                      "% of seats, the chance it controls a quorum on one unit is ",
                                      (100 * W).toFixed(2),
                                      "% (Eq. 6). Hidden audits make that unprofitable when the value is within the rule above.",
                                    ],
                                  }),
                                ],
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
                              children: "Estimate",
                            }),
                            (0, n.jsxs)("span", {
                              className: "row",
                              style: { gap: 6 },
                              children: [
                                (0, n.jsx)("span", {
                                  className: "chip-mode ".concat(A),
                                  children: A,
                                }),
                                (0, n.jsx)("span", {
                                  className: "small muted",
                                  children: c.EH[A].name,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-body",
                          style: { gap: 12 },
                          children: [
                            (0, n.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, n.jsx)("span", {
                                  children: "Unit GPU hours",
                                }),
                                (0, n.jsx)("b", { children: Y.toFixed(1) }),
                              ],
                            }),
                            J.breakdown.map((e) =>
                              (0, n.jsxs)(
                                "div",
                                {
                                  className: "summary-row",
                                  children: [
                                    (0, n.jsx)("span", { children: e.label }),
                                    (0, n.jsx)("b", {
                                      children: (0, c.xe)(e.value),
                                    }),
                                  ],
                                },
                                e.label
                              )
                            ),
                            (0, n.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, n.jsxs)("span", {
                                  children: ["Wall time at ", S, " machines"],
                                }),
                                (0, n.jsx)("b", {
                                  children:
                                    Q < 120
                                      ? "".concat(Q, " min")
                                      : "".concat((Q / 60).toFixed(1), " h"),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "summary-total",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "muted small",
                                  children: "Estimated total",
                                }),
                                (0, n.jsx)("span", {
                                  className: "v",
                                  children: (0, c.xe)(J.total),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "panel-foot",
                          children: [
                            !K &&
                              (0, n.jsx)("span", {
                                className: "tiny",
                                style: { color: "var(--warn)" },
                                children:
                                  "Add a 32-byte input commitment to sign.",
                              }),
                            (0, n.jsx)(i.kV, {
                              onClick: Z,
                              busy: t,
                              label: "Sign workload intent",
                              disabled: !K || !D || !u.trim(),
                            }),
                            (0, n.jsx)("span", {
                              className: "tiny faint",
                              children:
                                "Signing stores the intent in your browser before dispatch.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    K &&
                      (0, n.jsx)("div", {
                        className: "card card-tight",
                        children: (0, n.jsx)(i.pb, {
                          label: "Input commitment",
                          value: M.trim(),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(m, {}),
          ],
        });
      }
      function m() {
        let e = (0, i.Mw)().filter((e) => "WorkloadIntent" === e.kind),
          a = (0, r.Os)(),
          t = e.filter(
            (e) =>
              !a.address ||
              String(e.message.client).toLowerCase() === a.address.toLowerCase()
          );
        return (0, n.jsxs)("div", {
          className: "panel",
          children: [
            (0, n.jsx)("div", {
              className: "panel-head",
              children: (0, n.jsx)("span", {
                className: "h4",
                children: "Your workloads",
              }),
            }),
            0 === t.length
              ? (0, n.jsxs)("div", {
                  className: "empty",
                  children: [
                    (0, n.jsx)(l.JO, { name: "parallel", size: 22 }),
                    (0, n.jsx)("span", {
                      children: "Signed workloads appear here.",
                    }),
                  ],
                })
              : t.slice(0, 6).map((e) => (0, n.jsx)(p, { i: e }, e.signature)),
          ],
        });
      }
      function p(e) {
        let { i: a } = e,
          t = Number(a.message.units),
          s = String(a.message.mode),
          l = Math.min(t, 160);
        return (0, n.jsxs)("div", {
          className: "job",
          children: [
            (0, n.jsxs)("div", {
              className: "row-between wrap",
              children: [
                (0, n.jsxs)("div", {
                  className: "row",
                  style: { gap: 10 },
                  children: [
                    (0, n.jsx)("span", {
                      className: "chip-mode ".concat(s),
                      children: s,
                    }),
                    (0, n.jsx)("span", {
                      className: "mono small",
                      style: {
                        maxWidth: 360,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      },
                      children: String(a.message.image),
                    }),
                  ],
                }),
                (0, n.jsxs)("span", {
                  className: "badge badge-brand",
                  children: [
                    (0, n.jsx)("span", { className: "dot" }),
                    "Signed",
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(10px, 1fr))",
                gap: 3,
              },
              "aria-hidden": "true",
              children: Array.from({ length: l }, (e, a) =>
                (0, n.jsx)(
                  "span",
                  {
                    style: {
                      height: 10,
                      borderRadius: 2,
                      background: "rgba(139,77,255,0.22)",
                    },
                  },
                  a
                )
              ),
            }),
            (0, n.jsxs)("div", {
              className: "row-between tiny muted wrap",
              children: [
                (0, n.jsxs)("span", { children: [t, " units, mode ", s] }),
                (0, n.jsx)("span", {
                  children: new Date(a.createdAt).toLocaleString(),
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
          return l;
        },
        S5: function () {
          return i;
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
      function l(e) {
        let { name: a, size: t = 18, strokeWidth: l = 1.7, ...i } = e;
        return (0, n.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: l,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...i,
          children: (0, n.jsx)("path", { d: s[a] }),
        });
      }
      function i(e) {
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
          return c;
        },
        v1: function () {
          return o;
        },
      });
      var n = t(90328),
        s = t(25566);
      let l = Number(s.env.NEXT_PUBLIC_CHAIN_ID || 4663),
        i =
          s.env.NEXT_PUBLIC_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        r =
          s.env.NEXT_PUBLIC_EXPLORER_URL ||
          "https://robinhoodchain.blockscout.com",
        o = (0, n.a)({
          id: l,
          name: s.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: [i] } },
          blockExplorers: { default: { name: "Blockscout", url: r } },
        }),
        c = {
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
          return h;
        },
        Th: function () {
          return c;
        },
        Z8: function () {
          return u;
        },
      });
      var n = t(81154),
        s = t(51712),
        l = t(29272),
        i = t(25884);
      let r = (e) => "0x" + (0, i.ci)(e),
        o = (e) => (0, i.nr)(e.replace(/^0x/, "").trim().toLowerCase());
      async function c(e, a) {
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
            e.push((0, n.w)((0, i.eV)(a[t], a[t + 1])));
          a = e;
        }
        return a[0];
      }
      function h(e, a, t) {
        let s = o(e);
        for (let e of a) {
          let a = o(e.sibling);
          s =
            "left" === e.position
              ? (0, n.w)((0, i.eV)(a, s))
              : (0, n.w)((0, i.eV)(s, a));
        }
        return (0, i.ci)(s) === t.replace(/^0x/, "").toLowerCase();
      }
      function u(e, a, t) {
        let n = (0, i.iY)(e.toLowerCase()),
          o = d([n, (0, i.iY)(JSON.stringify(a)), (0, i.iY)(t)]),
          c = (0, s.Di)(
            l.JQ,
            (0, i.eV)(n, o),
            void 0,
            (0, i.iY)("tasq-ledger-id"),
            32
          );
        return { commitment: r(o), ledgerId: r(c) };
      }
    },
    82619: function (e, a, t) {
      "use strict";
      t.d(a, {
        QC: function () {
          return n;
        },
        jn: function () {
          return i;
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
        l = [
          "North America",
          "Europe",
          "Asia Pacific",
          "Middle East",
          "South America",
        ],
        i = (() => {
          let e;
          let a =
              ((e = 4663),
              () => (e = (1664525 * e + 1013904223) >>> 0) / 4294967296),
            t = [];
          for (let e = 0; e < 36; e++) {
            let s = n[Math.floor(a() * n.length)],
              i = [1, 1, 2, 4, 8][Math.floor(5 * a())],
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
              count: i,
              modes: r,
              attestation: s.attestable
                ? a() > 0.5
                  ? "NVIDIA CC + TDX"
                  : "NVIDIA CC + SEV-SNP"
                : a() > 0.5
                ? "TPM 2.0"
                : "None",
              region: l[Math.floor(a() * l.length)],
              pricePerHour:
                Math.round(s.basePerHour * (0.85 + 0.35 * a()) * 100) / 100,
              reputation: Math.round((0.86 + 0.14 * a()) * 1e3) / 1e3,
              available: Math.max(1, Math.round(i * (0.3 + 0.7 * a()))),
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
          return i;
        },
        I: function () {
          return r;
        },
        Pu: function () {
          return s;
        },
        i7: function () {
          return l;
        },
        mW: function () {
          return o;
        },
        xe: function () {
          return c;
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
      function l(e, a, t, n) {
        return e >= 1 ? 1 / 0 : (e * a * t * n) / (1 - e);
      }
      function i(e, a, t, n) {
        return e / (e + a * t * n);
      }
      let r = { sigma: 0.5, stakePerSeat: 500, enclaveOverhead: 0.05 };
      function o(e) {
        var a, t, n;
        let s = null !== (a = e.units) && void 0 !== a ? a : 1,
          l = e.hours * s;
        if ("A" === e.mode) {
          let a = e.attestedPerHour * (1 + r.enclaveOverhead);
          return {
            perHour: a,
            total: a * l,
            breakdown: [
              { label: "Attested GPU time", value: e.attestedPerHour * l },
              {
                label: "Enclave overhead (5%)",
                value: e.attestedPerHour * r.enclaveOverhead * l,
              },
            ],
          };
        }
        if ("R" === e.mode) {
          let a = null !== (t = e.r) && void 0 !== t ? t : 3,
            s = null !== (n = e.pi) && void 0 !== n ? n : 0.1,
            i = a * e.basePerHour,
            o = s * e.attestedPerHour * (1 + r.enclaveOverhead);
          return {
            perHour: i + o,
            total: (i + o) * l,
            breakdown: [
              { label: "".concat(a, " seats"), value: i * l },
              {
                label: "Hidden audits (".concat(
                  Math.round(100 * s),
                  "% in mode A)"
                ),
                value: o * l,
              },
            ],
          };
        }
        let i = e.basePerHour;
        return {
          perHour: i,
          total: i * l,
          breakdown: [
            { label: "Execution", value: i * l },
            { label: "Proving", value: NaN },
          ],
        };
      }
      let c = (e) =>
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
      return e((e.s = 85350));
    }),
      (_N_E = e.O());
  },
]);

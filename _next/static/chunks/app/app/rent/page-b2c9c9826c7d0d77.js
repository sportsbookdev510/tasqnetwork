(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4057],
  {
    55802: function (e, a, n) {
      Promise.resolve().then(n.bind(n, 92124));
    },
    92124: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return v;
          },
        });
      var t = n(57437),
        s = n(27648),
        r = n(2265),
        l = n(70304),
        i = n(79140),
        o = n(67489),
        c = n(15134),
        d = n(82619),
        u = n(23091),
        h = n(23700);
      let m = [
        { id: "inference", label: "Inference" },
        { id: "finetune", label: "Fine-tuning" },
        { id: "training", label: "Training" },
        { id: "batch", label: "Batch job" },
      ];
      function v() {
        return (0, t.jsx)(r.Suspense, {
          fallback: null,
          children: (0, t.jsx)(p, {}),
        });
      }
      function p() {
        var e;
        let a = (0, l.useSearchParams)(),
          n = (0, r.useMemo)(
            () => d.jn.find((e) => e.id === a.get("offer")),
            [a]
          ),
          v = (0, c.Os)(),
          { sign: p, busy: M } = (0, o.mx)(),
          [x, b] = (0, r.useState)("inference"),
          [f, j] = (0, r.useState)(!0),
          [g, N] = (0, r.useState)("A"),
          [P, y] = (0, r.useState)(
            null !== (e = null == n ? void 0 : n.gpu.id) && void 0 !== e
              ? e
              : "h100"
          ),
          [H, C] = (0, r.useState)(1),
          [w, k] = (0, r.useState)(8),
          [E, S] = (0, r.useState)(3),
          [z, A] = (0, r.useState)(0.1),
          [R, _] = (0, r.useState)(10),
          [U, L] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          n && (y(n.gpu.id), n.gpu.attestable || (j(!1), N(n.modes[0])));
        }, [n]);
        let T = d.QC.find((e) => e.id === P),
          I = n ? n.modes : T.attestable ? ["A", "R", "P"] : ["R", "P"],
          B = (e) => I.includes(e) && (!f || "A" === e);
        (0, r.useEffect)(() => {
          var e;
          f && "A" !== g && N("A"),
            I.includes(g) ||
              N(
                null !== (e = I.find((e) => !f || "A" === e)) && void 0 !== e
                  ? e
                  : I[0]
              );
        }, [f, P, n]);
        let G = n ? n.pricePerHour : T.basePerHour,
          O = T.attestable ? G : d.u$,
          V = (0, u.mW)({
            mode: g,
            basePerHour: G,
            attestedPerHour: O,
            hours: w * H,
            r: E,
            pi: z,
          }),
          q = V.total * (1 + R / 100),
          X = f && !(n ? n.modes.includes("A") : T.attestable);
        async function D() {
          var e;
          let a = await p("RentIntent", {
            client: v.address,
            offerId:
              null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : "",
            gpuClass: T.id,
            gpuCount: H,
            mode: g,
            confidential: f,
            hours: w,
            maxPriceMicroUsd: Number.isFinite(q)
              ? BigInt(Math.round(1e6 * q))
              : 0n,
            nonce: (0, h.tf)(),
          });
          a && L(a);
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.yG, {
              eyebrow: "Rent",
              title: "Rent compute privately",
              desc: "Pick a GPU and an assurance mode. Confidential jobs only run inside an enclave that proves its code before it receives a key.",
            }),
            (0, t.jsxs)("div", {
              className: "split",
              children: [
                (0, t.jsxs)("div", {
                  className: "stack",
                  style: { gap: 20 },
                  children: [
                    n &&
                      (0, t.jsx)("div", {
                        className: "panel",
                        children: (0, t.jsxs)("div", {
                          className: "panel-body",
                          style: { gap: 10 },
                          children: [
                            (0, t.jsxs)("div", {
                              className: "row-between",
                              children: [
                                (0, t.jsxs)("span", {
                                  className: "row",
                                  style: { gap: 10 },
                                  children: [
                                    (0, t.jsxs)("span", {
                                      className: "badge",
                                      children: ["Offer ", n.id],
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "h4",
                                      children: n.gpu.name,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(s.default, {
                                  className: "link small",
                                  href: "/app/market",
                                  children: "Change",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "row wrap muted small",
                              style: { gap: 16 },
                              children: [
                                (0, t.jsx)("span", { children: n.region }),
                                (0, t.jsx)("span", { children: n.attestation }),
                                (0, t.jsxs)("span", {
                                  children: [
                                    "Reputation ",
                                    n.reputation.toFixed(3),
                                  ],
                                }),
                                (0, t.jsxs)("span", {
                                  children: [
                                    n.available,
                                    " of ",
                                    n.count,
                                    " available",
                                  ],
                                }),
                                (0, t.jsxs)("span", {
                                  className: "mono",
                                  children: [(0, u.xe)(n.pricePerHour), " / h"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    (0, t.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, t.jsx)("div", {
                          className: "panel-head",
                          children: (0, t.jsx)("span", {
                            className: "h4",
                            children: "Job",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, t.jsx)(o.gN, {
                              label: "Workload",
                              children: (0, t.jsx)(o.PG, {
                                options: m.map((e) => ({
                                  value: e.id,
                                  label: e.label,
                                })),
                                value: x,
                                onChange: b,
                              }),
                            }),
                            (0, t.jsx)(o.rs, {
                              checked: f,
                              onChange: j,
                              label: "This job uses private data",
                              help: "Forces mode A. Your inputs, weights and outputs are decrypted only inside an attested enclave.",
                            }),
                            X &&
                              (0, t.jsxs)("div", {
                                className: "notice",
                                children: [
                                  (0, t.jsx)(i.JO, { name: "alert", size: 16 }),
                                  (0, t.jsx)("span", {
                                    children:
                                      "This GPU cannot run attested jobs. Choose an H100 or H200 class, or turn off private data.",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, t.jsx)("div", {
                          className: "panel-head",
                          children: (0, t.jsx)("span", {
                            className: "h4",
                            children: "Assurance mode",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, t.jsx)("div", {
                              className: "choice-grid",
                              children: Object.keys(u.EH).map((e) =>
                                (0, t.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    className: "choice".concat(
                                      g === e ? " on" : ""
                                    ),
                                    disabled: !B(e),
                                    onClick: () => N(e),
                                    children: [
                                      (0, t.jsxs)("span", {
                                        className: "t",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className: "chip-mode ".concat(e),
                                            children: e,
                                          }),
                                          u.EH[e].name,
                                        ],
                                      }),
                                      (0, t.jsxs)("span", {
                                        className: "d",
                                        children: [
                                          u.EH[e].short,
                                          ". ",
                                          u.EH[e].use,
                                          ".",
                                        ],
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                            "R" === g &&
                              (0, t.jsxs)("div", {
                                className: "grid g2",
                                children: [
                                  (0, t.jsx)(o.gN, {
                                    label: "Seats per unit",
                                    hint: "q = ".concat(
                                      Math.floor(E / 2) + 1,
                                      " must agree"
                                    ),
                                    children: (0, t.jsx)(o.PG, {
                                      options: [2, 3, 5].map((e) => ({
                                        value: e,
                                        label: "r = ".concat(e),
                                      })),
                                      value: E,
                                      onChange: S,
                                    }),
                                  }),
                                  (0, t.jsx)(o.gN, {
                                    label: "Hidden audit rate",
                                    hint: "".concat(Math.round(100 * z), "%"),
                                    help: "Share of units re-run in mode A without the seats knowing which.",
                                    children: (0, t.jsx)("input", {
                                      type: "range",
                                      min: 0.05,
                                      max: 0.3,
                                      step: 0.05,
                                      value: z,
                                      onChange: (e) => A(+e.target.value),
                                    }),
                                  }),
                                ],
                              }),
                            "P" === g &&
                              (0, t.jsx)("p", {
                                className: "field-help",
                                children:
                                  "Proving cost depends on the circuit, so mode P jobs are quoted per job. This intent fixes the execution price only.",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, t.jsx)("div", {
                          className: "panel-head",
                          children: (0, t.jsx)("span", {
                            className: "h4",
                            children: "Hardware and time",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "panel-body",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "grid g2",
                              children: [
                                (0, t.jsx)(o.gN, {
                                  label: "GPU class",
                                  children: (0, t.jsx)("select", {
                                    className: "select",
                                    value: P,
                                    onChange: (e) => y(e.target.value),
                                    disabled: !!n,
                                    children: d.QC.map((e) =>
                                      (0, t.jsxs)(
                                        "option",
                                        {
                                          value: e.id,
                                          disabled: f && !e.attestable,
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
                                (0, t.jsx)(o.gN, {
                                  label: "GPUs",
                                  children: (0, t.jsx)(o.PG, {
                                    options: [1, 2, 4, 8].map((e) => ({
                                      value: e,
                                      label: String(e),
                                      disabled: !!n && e > n.available,
                                    })),
                                    value: H,
                                    onChange: C,
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(o.gN, {
                              label: "Duration",
                              hint: "".concat(w, " h"),
                              children: (0, t.jsxs)("div", {
                                className: "grid g2",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      (0, t.jsx)("input", {
                                        className: "input",
                                        type: "number",
                                        min: 1,
                                        max: 720,
                                        value: w,
                                        onChange: (e) =>
                                          k(
                                            Math.max(
                                              1,
                                              Math.min(
                                                720,
                                                Math.round(+e.target.value || 1)
                                              )
                                            )
                                          ),
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "suffix",
                                        children: "hours",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)(o.PG, {
                                    options: [1, 8, 24, 168].map((e) => ({
                                      value: e,
                                      label:
                                        168 === e
                                          ? "1 week"
                                          : "".concat(e, " h"),
                                    })),
                                    value: w,
                                    onChange: k,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(o.gN, {
                              label: "Price ceiling",
                              hint: "quote + ".concat(R, "%"),
                              help: "The most you will pay. A match above this ceiling is rejected.",
                              children: (0, t.jsx)("input", {
                                type: "range",
                                min: 0,
                                max: 50,
                                step: 5,
                                value: R,
                                onChange: (e) => _(+e.target.value),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("aside", {
                  children: [
                    (0, t.jsxs)("div", {
                      className: "panel",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "panel-head",
                          children: [
                            (0, t.jsx)("span", {
                              className: "h4",
                              children: "Estimate",
                            }),
                            (0, t.jsxs)("span", {
                              className: "row",
                              style: { gap: 6 },
                              children: [
                                (0, t.jsx)("span", {
                                  className: "chip-mode ".concat(g),
                                  children: g,
                                }),
                                (0, t.jsx)("span", {
                                  className: "small muted",
                                  children: u.EH[g].name,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "panel-body",
                          style: { gap: 12 },
                          children: [
                            (0, t.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, t.jsx)("span", { children: "GPU" }),
                                (0, t.jsxs)("b", {
                                  children: [H, " x ", T.name],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, t.jsx)("span", { children: "GPU hours" }),
                                (0, t.jsx)("b", { children: w * H }),
                              ],
                            }),
                            V.breakdown.map((e) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className: "summary-row",
                                  children: [
                                    (0, t.jsx)("span", { children: e.label }),
                                    (0, t.jsx)("b", {
                                      children: (0, u.xe)(e.value),
                                    }),
                                  ],
                                },
                                e.label
                              )
                            ),
                            (0, t.jsxs)("div", {
                              className: "summary-total",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "muted small",
                                  children: "Estimated total",
                                }),
                                (0, t.jsx)("span", {
                                  className: "v",
                                  children: (0, u.xe)(V.total),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, t.jsx)("span", {
                                  children: "Your ceiling",
                                }),
                                (0, t.jsx)("b", { children: (0, u.xe)(q) }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "panel-foot",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "stack small",
                              style: { gap: 8 },
                              children: [
                                (0, t.jsxs)("span", {
                                  className: "row",
                                  style: { gap: 8 },
                                  children: [
                                    (0, t.jsx)(i.JO, {
                                      name: "A" === g ? "eyeOff" : "eye",
                                      size: 15,
                                      style: {
                                        color:
                                          "A" === g
                                            ? "var(--ok)"
                                            : "var(--warn)",
                                      },
                                    }),
                                    "A" === g
                                      ? "The machine owner sees ciphertext and an attestation report."
                                      : "R" === g
                                      ? "Each seat sees your input. Use for non-sensitive data."
                                      : "The prover sees your input. You see a proof and commitments.",
                                  ],
                                }),
                                (0, t.jsxs)("span", {
                                  className: "row muted",
                                  style: { gap: 8 },
                                  children: [
                                    (0, t.jsx)(i.JO, {
                                      name: "shield",
                                      size: 15,
                                    }),
                                    u.EH[g].integrity,
                                    ".",
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)(o.kV, {
                              onClick: D,
                              busy: M,
                              label: "Sign rent intent",
                              disabled: X || w < 1,
                            }),
                            (0, t.jsx)("span", {
                              className: "tiny faint",
                              children:
                                "Prices in USD-denominated credits. Signing does not lock funds.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(o.qV, { intent: U }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    79140: function (e, a, n) {
      "use strict";
      n.d(a, {
        JO: function () {
          return r;
        },
        S5: function () {
          return l;
        },
        qf: function () {
          return i;
        },
      });
      var t = n(57437);
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
      function r(e) {
        let { name: a, size: n = 18, strokeWidth: r = 1.7, ...l } = e;
        return (0, t.jsx)("svg", {
          width: n,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...l,
          children: (0, t.jsx)("path", { d: s[a] }),
        });
      }
      function l(e) {
        let { size: a = 16 } = e;
        return (0, t.jsx)("svg", {
          width: a,
          height: a,
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, t.jsx)("path", {
            d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
          }),
        });
      }
      function i(e) {
        let { size: a = 15 } = e;
        return (0, t.jsx)("img", {
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
    8530: function (e, a, n) {
      "use strict";
      n.d(a, {
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
      var t = n(90328),
        s = n(25566);
      let r = Number(s.env.NEXT_PUBLIC_CHAIN_ID || 4663),
        l =
          s.env.NEXT_PUBLIC_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        i =
          s.env.NEXT_PUBLIC_EXPLORER_URL ||
          "https://robinhoodchain.blockscout.com",
        o = (0, t.a)({
          id: r,
          name: s.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: [l] } },
          blockExplorers: { default: { name: "Blockscout", url: i } },
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
    82619: function (e, a, n) {
      "use strict";
      n.d(a, {
        QC: function () {
          return t;
        },
        jn: function () {
          return l;
        },
        u$: function () {
          return s;
        },
      });
      let t = [
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
        r = [
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
            n = [];
          for (let e = 0; e < 36; e++) {
            let s = t[Math.floor(a() * t.length)],
              l = [1, 1, 2, 4, 8][Math.floor(5 * a())],
              i = s.attestable
                ? a() > 0.3
                  ? ["A", "R"]
                  : ["A", "R", "P"]
                : a() > 0.6
                ? ["R", "P"]
                : ["R"];
            n.push({
              id: "TQ-".concat((6699 + 97 * e).toString(16).toUpperCase()),
              gpu: s,
              count: l,
              modes: i,
              attestation: s.attestable
                ? a() > 0.5
                  ? "NVIDIA CC + TDX"
                  : "NVIDIA CC + SEV-SNP"
                : a() > 0.5
                ? "TPM 2.0"
                : "None",
              region: r[Math.floor(a() * r.length)],
              pricePerHour:
                Math.round(s.basePerHour * (0.85 + 0.35 * a()) * 100) / 100,
              reputation: Math.round((0.86 + 0.14 * a()) * 1e3) / 1e3,
              available: Math.max(1, Math.round(l * (0.3 + 0.7 * a()))),
              uptime: Math.round((0.95 + 0.049 * a()) * 1e3) / 10,
            });
          }
          return n;
        })();
    },
    23091: function (e, a, n) {
      "use strict";
      n.d(a, {
        EH: function () {
          return t;
        },
        EV: function () {
          return l;
        },
        I: function () {
          return i;
        },
        Pu: function () {
          return s;
        },
        i7: function () {
          return r;
        },
        mW: function () {
          return o;
        },
        xe: function () {
          return c;
        },
      });
      let t = {
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
      function s(e, a, n) {
        let t = 0;
        for (let s = n; s <= a; s++)
          t +=
            (function (e, a) {
              let n = 1;
              for (let t = 1; t <= a; t++) n = (n * (e - a + t)) / t;
              return n;
            })(a, s) *
            Math.pow(e, s) *
            Math.pow(1 - e, a - s);
        return t;
      }
      function r(e, a, n, t) {
        return e >= 1 ? 1 / 0 : (e * a * n * t) / (1 - e);
      }
      function l(e, a, n, t) {
        return e / (e + a * n * t);
      }
      let i = { sigma: 0.5, stakePerSeat: 500, enclaveOverhead: 0.05 };
      function o(e) {
        var a, n, t;
        let s = null !== (a = e.units) && void 0 !== a ? a : 1,
          r = e.hours * s;
        if ("A" === e.mode) {
          let a = e.attestedPerHour * (1 + i.enclaveOverhead);
          return {
            perHour: a,
            total: a * r,
            breakdown: [
              { label: "Attested GPU time", value: e.attestedPerHour * r },
              {
                label: "Enclave overhead (5%)",
                value: e.attestedPerHour * i.enclaveOverhead * r,
              },
            ],
          };
        }
        if ("R" === e.mode) {
          let a = null !== (n = e.r) && void 0 !== n ? n : 3,
            s = null !== (t = e.pi) && void 0 !== t ? t : 0.1,
            l = a * e.basePerHour,
            o = s * e.attestedPerHour * (1 + i.enclaveOverhead);
          return {
            perHour: l + o,
            total: (l + o) * r,
            breakdown: [
              { label: "".concat(a, " seats"), value: l * r },
              {
                label: "Hidden audits (".concat(
                  Math.round(100 * s),
                  "% in mode A)"
                ),
                value: o * r,
              },
            ],
          };
        }
        let l = e.basePerHour;
        return {
          perHour: l,
          total: l * r,
          breakdown: [
            { label: "Execution", value: l * r },
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
    27648: function (e, a, n) {
      "use strict";
      n.d(a, {
        default: function () {
          return s.a;
        },
      });
      var t = n(72972),
        s = n.n(t);
    },
    70304: function (e, a, n) {
      "use strict";
      var t = n(35475);
      n.o(t, "usePathname") &&
        n.d(a, {
          usePathname: function () {
            return t.usePathname;
          },
        }),
        n.o(t, "useRouter") &&
          n.d(a, {
            useRouter: function () {
              return t.useRouter;
            },
          }),
        n.o(t, "useSearchParams") &&
          n.d(a, {
            useSearchParams: function () {
              return t.useSearchParams;
            },
          });
    },
    93715: function (e, a, n) {
      "use strict";
      n.d(a, {
        P: function () {
          return s;
        },
      });
      var t = n(24250);
      function s(e, a = {}) {
        let {
          key: n = "custom",
          methods: s,
          name: r = "Custom Provider",
          retryDelay: l,
        } = a;
        return ({ retryCount: i }) =>
          (0, t.q)({
            key: n,
            methods: s,
            name: r,
            request: e.request.bind(e),
            retryCount: a.retryCount ?? i,
            retryDelay: l,
            type: "custom",
          });
      }
    },
  },
  function (e) {
    e.O(0, [9912, 3146, 3852, 2972, 6513, 5118, 2971, 2117, 1744], function () {
      return e((e.s = 55802));
    }),
      (_N_E = e.O());
  },
]);

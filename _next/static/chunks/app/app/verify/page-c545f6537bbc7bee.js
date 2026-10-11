(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2862],
  {
    78625: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 86536));
    },
    86536: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var s = a(57437),
        n = a(2265),
        l = a(42727),
        r = a(95267);
      async function i(e) {
        let {
          domain: t,
          message: a,
          primaryType: s,
          signature: n,
          types: i,
        } = e;
        return (0, r.R)({
          hash: (0, l.Jv)({ domain: t, message: a, primaryType: s, types: i }),
          signature: n,
        });
      }
      var o = a(81154),
        c = a(25884),
        h = a(79140),
        u = a(67489),
        d = a(82782),
        m = a(23700);
      function v() {
        let [e, t] = (0, n.useState)("file");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u.yG, {
              eyebrow: "Verify",
              title: "Verify results privately",
              desc: "Check outputs, proofs and signed receipts yourself. Everything on this page runs in your browser and nothing is uploaded.",
            }),
            (0, s.jsx)("div", {
              style: { maxWidth: 520 },
              children: (0, s.jsx)(u.PG, {
                options: [
                  { value: "file", label: "Output file" },
                  { value: "merkle", label: "Merkle proof" },
                  { value: "receipt", label: "Signed receipt" },
                ],
                value: e,
                onChange: t,
              }),
            }),
            "file" === e && (0, s.jsx)(f, {}),
            "merkle" === e && (0, s.jsx)(x, {}),
            "receipt" === e && (0, s.jsx)(g, {}),
            (0, s.jsxs)("div", {
              className: "row muted small",
              style: { gap: 8 },
              children: [
                (0, s.jsx)(h.JO, { name: "lock", size: 14 }),
                "Nothing leaves your browser. You can disconnect from the internet and this page still works.",
              ],
            }),
          ],
        });
      }
      let p = (e) => e.trim().toLowerCase().replace(/^0x/, "");
      function M(e) {
        let { ok: t, yes: a, no: n } = e;
        return null === t
          ? null
          : (0, s.jsxs)("div", {
              className: "result ".concat(t ? "ok" : "bad"),
              children: [
                (0, s.jsx)(h.JO, { name: t ? "check" : "x", size: 18 }),
                t ? a : n,
              ],
            });
      }
      function f() {
        let [e, t] = (0, n.useState)(null),
          [a, l] = (0, n.useState)(0),
          [r, i] = (0, n.useState)(""),
          [o, c] = (0, n.useState)(""),
          [m, v] = (0, n.useState)(!1),
          f = (0, n.useRef)(null);
        async function x(e) {
          t(e), i(""), l(0), i(await (0, d.Th)(e, l));
        }
        let g = r && o.trim() ? p(r) === p(o) : null;
        return (0, s.jsxs)("div", {
          className: "split",
          children: [
            (0, s.jsxs)("div", {
              className: "panel",
              children: [
                (0, s.jsxs)("div", {
                  className: "panel-head",
                  children: [
                    (0, s.jsx)("span", {
                      className: "h4",
                      children: "Hash an output file",
                    }),
                    (0, s.jsx)("span", {
                      className: "badge",
                      children: "BLAKE3",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "panel-body",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "dropzone".concat(m ? " drag" : ""),
                      onClick: () => {
                        var e;
                        return null === (e = f.current) || void 0 === e
                          ? void 0
                          : e.click();
                      },
                      onDragOver: (e) => {
                        e.preventDefault(), v(!0);
                      },
                      onDragLeave: () => v(!1),
                      onDrop: (e) => {
                        e.preventDefault(), v(!1);
                        let t = e.dataTransfer.files[0];
                        t && x(t);
                      },
                      children: [
                        (0, s.jsx)(h.JO, { name: "upload", size: 22 }),
                        (0, s.jsx)("span", {
                          style: { color: "var(--text)" },
                          children: e
                            ? e.name
                            : "Drop a file or click to choose",
                        }),
                        (0, s.jsx)("span", {
                          className: "tiny",
                          children: e
                            ? "".concat((e.size / 1048576).toFixed(2), " MiB")
                            : "Read locally in 4 MiB chunks",
                        }),
                        (0, s.jsx)("input", {
                          ref: f,
                          type: "file",
                          hidden: !0,
                          onChange: (e) => {
                            var t;
                            let a =
                              null === (t = e.target.files) || void 0 === t
                                ? void 0
                                : t[0];
                            a && x(a);
                          },
                        }),
                      ],
                    }),
                    e &&
                      !r &&
                      (0, s.jsx)("div", {
                        className: "progress",
                        children: (0, s.jsx)("div", {
                          style: { width: "".concat(100 * a, "%") },
                        }),
                      }),
                    r &&
                      (0, s.jsx)(u.pb, {
                        label: "Computed commitment",
                        value: r,
                      }),
                    (0, s.jsx)(u.gN, {
                      label: "Expected commitment",
                      help: "From the job receipt. A match means the bytes you hold are the bytes the network committed to.",
                      children: (0, s.jsx)("input", {
                        className: "input mono",
                        placeholder: "0x...",
                        value: o,
                        onChange: (e) => c(e.target.value),
                      }),
                    }),
                    (0, s.jsx)(M, {
                      ok: g,
                      yes: "Match. This file is the committed output.",
                      no: "No match. This file differs from the committed output.",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("aside", {
              children: (0, s.jsxs)("div", {
                className: "card stack small",
                style: { gap: 10 },
                children: [
                  (0, s.jsx)("span", {
                    className: "h4",
                    children: "Why this matters",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "Every result in TasQ is committed by hash before payment is released. Checking the hash yourself means you do not need to trust the coordinator to tell you the result is the one that was verified.",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "BLAKE3 runs at about 5 GiB/s natively. In the browser it is slower but still handles large model outputs.",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function x() {
        let [e, t] = (0, n.useState)(""),
          [a, l] = (0, n.useState)(""),
          [r, i] = (0, n.useState)(""),
          [m, v] = (0, n.useState)(""),
          [p, f] = (0, n.useState)(null),
          [x, g] = (0, n.useState)("");
        return (0, s.jsxs)("div", {
          className: "split",
          children: [
            (0, s.jsxs)("div", {
              className: "panel",
              children: [
                (0, s.jsxs)("div", {
                  className: "panel-head",
                  children: [
                    (0, s.jsx)("span", {
                      className: "h4",
                      children: "Check a Merkle inclusion proof",
                    }),
                    (0, s.jsx)("button", {
                      className: "btn btn-ghost btn-sm",
                      onClick: function () {
                        let e = Array.from({ length: 8 }, (e, t) =>
                          (0, c.iY)(
                            "unit-"
                              .concat(t, ": output chunk ")
                              .concat(Math.random().toString(36).slice(2, 10))
                          )
                        );
                        t(new TextDecoder().decode(e[5])),
                          l(""),
                          i(
                            JSON.stringify(
                              (function (e, t) {
                                let a = e.map((e) => (0, o.w)(e)),
                                  s = [],
                                  n = 5;
                                for (; a.length > 1; ) {
                                  a.length % 2 && a.push(a[a.length - 1]);
                                  let e = n % 2 ? a[n - 1] : a[n + 1];
                                  s.push({
                                    sibling: (0, d.$v)(e),
                                    position: n % 2 ? "left" : "right",
                                  });
                                  let t = [];
                                  for (let e = 0; e < a.length; e += 2)
                                    t.push((0, o.w)((0, c.eV)(a[e], a[e + 1])));
                                  (a = t), (n = Math.floor(n / 2));
                                }
                                return s;
                              })(e, 0),
                              null,
                              2
                            )
                          ),
                          v((0, d.$v)((0, d.Dc)(e))),
                          f(null),
                          g("");
                      },
                      children: "Load example",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "panel-body",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "grid g2",
                      children: [
                        (0, s.jsx)(u.gN, {
                          label: "Leaf data",
                          hint: "hashed with BLAKE3",
                          children: (0, s.jsx)("textarea", {
                            className: "textarea mono",
                            rows: 3,
                            value: e,
                            onChange: (e) => t(e.target.value),
                            placeholder: "Raw unit output",
                          }),
                        }),
                        (0, s.jsx)(u.gN, {
                          label: "Or leaf hash",
                          hint: "overrides data",
                          children: (0, s.jsx)("textarea", {
                            className: "textarea mono",
                            rows: 3,
                            value: a,
                            onChange: (e) => l(e.target.value),
                            placeholder: "0x...",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(u.gN, {
                      label: "Proof",
                      help: 'JSON array of steps: [{"sibling": "0x...", "position": "left" | "right"}], from leaf to root.',
                      children: (0, s.jsx)("textarea", {
                        className: "textarea mono",
                        rows: 7,
                        value: r,
                        onChange: (e) => i(e.target.value),
                        placeholder: "[]",
                      }),
                    }),
                    (0, s.jsx)(u.gN, {
                      label: "Root",
                      children: (0, s.jsx)("input", {
                        className: "input mono",
                        value: m,
                        onChange: (e) => v(e.target.value),
                        placeholder: "0x...",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      className: "btn btn-primary",
                      onClick: function () {
                        g(""), f(null);
                        try {
                          let t = a.trim()
                              ? a.trim()
                              : (0, d.$v)((0, o.w)((0, c.iY)(e))),
                            s = JSON.parse(r);
                          if (!Array.isArray(s))
                            throw Error("Proof must be a JSON array");
                          f((0, d.Nc)(t, s, m));
                        } catch (e) {
                          g(e instanceof Error ? e.message : String(e));
                        }
                      },
                      disabled: !r || !m,
                      children: "Verify inclusion",
                    }),
                    x &&
                      (0, s.jsxs)("div", {
                        className: "result bad",
                        children: [
                          (0, s.jsx)(h.JO, { name: "alert", size: 18 }),
                          x,
                        ],
                      }),
                    (0, s.jsx)(M, {
                      ok: p,
                      yes: "Included. This unit is part of the committed result.",
                      no: "Not included under this root.",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("aside", {
              children: (0, s.jsxs)("div", {
                className: "card stack small",
                style: { gap: 10 },
                children: [
                  (0, s.jsx)("span", {
                    className: "h4",
                    children: "How results are committed",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "A job is split into units. Each unit output is a leaf, and the job result is the Merkle root over all of them, with an odd node paired with itself.",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "A proof lets you check one unit without downloading the rest. Building a root over 65,536 units takes about 60 ms natively.",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function g() {
        let e = Object.keys(m.vK),
          [t, a] = (0, n.useState)("RentIntent"),
          [l, r] = (0, n.useState)(""),
          [o, c] = (0, n.useState)(""),
          [d, v] = (0, n.useState)(""),
          [p, f] = (0, n.useState)(""),
          [x, g] = (0, n.useState)("");
        async function j() {
          g(""), f("");
          try {
            let e = (function (e, t) {
                let a = {};
                for (let s of m.vK[e]) {
                  let e = t[s.name];
                  if (void 0 === e)
                    throw Error("Missing field: ".concat(s.name));
                  a[s.name] = s.type.startsWith("uint")
                    ? BigInt(e)
                    : "bool" === s.type
                    ? !0 === e || "true" === e
                    : e;
                }
                return a;
              })(t, JSON.parse(l)),
              a = {
                domain: m.yK,
                types: { [t]: m.vK[t] },
                primaryType: t,
                message: e,
                signature: o.trim(),
              },
              s = await i(a);
            f(s);
          } catch (e) {
            g(e instanceof Error ? e.message.split("\n")[0] : String(e));
          }
        }
        let y =
          p && d.trim() ? p.toLowerCase() === d.trim().toLowerCase() : null;
        return (0, s.jsxs)("div", {
          className: "split",
          children: [
            (0, s.jsxs)("div", {
              className: "panel",
              children: [
                (0, s.jsxs)("div", {
                  className: "panel-head",
                  children: [
                    (0, s.jsx)("span", {
                      className: "h4",
                      children: "Recover the signer of a receipt",
                    }),
                    (0, s.jsx)("button", {
                      className: "btn btn-ghost btn-sm",
                      onClick: function () {
                        let e = (0, m.kc)()[0];
                        if (!e) {
                          g("No signed intents in this browser yet.");
                          return;
                        }
                        a(e.kind),
                          r(JSON.stringify(e.message, null, 2)),
                          c(e.signature),
                          v(
                            String(e.message.client || e.message.operator || "")
                          ),
                          f(""),
                          g("");
                      },
                      children: "Load my latest intent",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "panel-body",
                  children: [
                    (0, s.jsx)(u.gN, {
                      label: "Type",
                      children: (0, s.jsx)("select", {
                        className: "select",
                        value: t,
                        onChange: (e) => a(e.target.value),
                        children: e.map((e) =>
                          (0, s.jsx)("option", { children: e }, e)
                        ),
                      }),
                    }),
                    (0, s.jsx)(u.gN, {
                      label: "Message",
                      help: "EIP-712 domain: "
                        .concat(m.yK.name, ", version ")
                        .concat(m.yK.version, ", chain ")
                        .concat(m.yK.chainId, "."),
                      children: (0, s.jsx)("textarea", {
                        className: "textarea mono",
                        rows: 9,
                        value: l,
                        onChange: (e) => r(e.target.value),
                        placeholder: "{ ... }",
                      }),
                    }),
                    (0, s.jsx)(u.gN, {
                      label: "Signature",
                      children: (0, s.jsx)("input", {
                        className: "input mono",
                        value: o,
                        onChange: (e) => c(e.target.value),
                        placeholder: "0x...",
                      }),
                    }),
                    (0, s.jsx)(u.gN, {
                      label: "Expected signer",
                      hint: "optional",
                      children: (0, s.jsx)("input", {
                        className: "input mono",
                        value: d,
                        onChange: (e) => v(e.target.value),
                        placeholder: "0x...",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      className: "btn btn-primary",
                      onClick: j,
                      disabled: !l || !o,
                      children: "Recover signer",
                    }),
                    x &&
                      (0, s.jsxs)("div", {
                        className: "result bad",
                        children: [
                          (0, s.jsx)(h.JO, { name: "alert", size: 18 }),
                          x,
                        ],
                      }),
                    p &&
                      (0, s.jsx)(u.pb, { label: "Recovered signer", value: p }),
                    (0, s.jsx)(M, {
                      ok: y,
                      yes: "Signature is valid for the expected address.",
                      no: "Signed by a different address.",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("aside", {
              children: (0, s.jsxs)("div", {
                className: "card stack small",
                style: { gap: 10 },
                children: [
                  (0, s.jsx)("span", {
                    className: "h4",
                    children: "What a receipt proves",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "Intents and receipts are EIP-712 typed data. Recovering the signer proves who agreed to exactly these terms. Change one field and the recovered address changes.",
                  }),
                  (0, s.jsx)("p", {
                    className: "muted",
                    children:
                      "Node identities are moving to hybrid Ed25519 and ML-DSA-65 keys, so node receipts stay verifiable if classical signatures are broken later.",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    79140: function (e, t, a) {
      "use strict";
      a.d(t, {
        JO: function () {
          return l;
        },
        S5: function () {
          return r;
        },
        qf: function () {
          return i;
        },
      });
      var s = a(57437);
      let n = {
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
        let { name: t, size: a = 18, strokeWidth: l = 1.7, ...r } = e;
        return (0, s.jsx)("svg", {
          width: a,
          height: a,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: l,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...r,
          children: (0, s.jsx)("path", { d: n[t] }),
        });
      }
      function r(e) {
        let { size: t = 16 } = e;
        return (0, s.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, s.jsx)("path", {
            d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
          }),
        });
      }
      function i(e) {
        let { size: t = 15 } = e;
        return (0, s.jsx)("img", {
          src: "/robinhood-mark.png",
          alt: "",
          width: t,
          height: t,
          style: {
            width: t,
            height: t,
            borderRadius: "50%",
            display: "block",
            flex: "none",
          },
        });
      }
    },
    8530: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z2: function () {
          return h;
        },
        lz: function () {
          return c;
        },
        v1: function () {
          return o;
        },
      });
      var s = a(90328),
        n = a(25566);
      let l = Number(n.env.NEXT_PUBLIC_CHAIN_ID || 4663),
        r =
          n.env.NEXT_PUBLIC_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        i =
          n.env.NEXT_PUBLIC_EXPLORER_URL ||
          "https://robinhoodchain.blockscout.com",
        o = (0, s.a)({
          id: l,
          name: n.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: [r] } },
          blockExplorers: { default: { name: "Blockscout", url: i } },
        }),
        c = {
          url: n.env.NEXT_PUBLIC_SITE_URL || "https://tasqnetwork.io",
          github:
            n.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tasqProject",
          gitbook: n.env.NEXT_PUBLIC_GITBOOK_URL || "",
          x: n.env.NEXT_PUBLIC_X_URL || "https://x.com/tasq_network",
          email: n.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
          paper: "/tasq-yellow-paper.pdf",
        },
        h = "cmupg0n18016s0cl2cqtup7xb";
    },
    82782: function (e, t, a) {
      "use strict";
      a.d(t, {
        $v: function () {
          return i;
        },
        Dc: function () {
          return h;
        },
        Nc: function () {
          return u;
        },
        Th: function () {
          return c;
        },
        Z8: function () {
          return d;
        },
      });
      var s = a(81154),
        n = a(51712),
        l = a(29272),
        r = a(25884);
      let i = (e) => "0x" + (0, r.ci)(e),
        o = (e) => (0, r.nr)(e.replace(/^0x/, "").trim().toLowerCase());
      async function c(e, t) {
        let a = s.w.create({});
        for (let s = 0; s < e.size; s += 4194304) {
          let n = new Uint8Array(await e.slice(s, s + 4194304).arrayBuffer());
          a.update(n), null == t || t(Math.min(1, (s + 4194304) / e.size));
        }
        return 0 === e.size && (null == t || t(1)), i(a.digest());
      }
      function h(e) {
        if (0 === e.length) return (0, s.w)(new Uint8Array());
        let t = e.map((e) => (0, s.w)(e));
        for (; t.length > 1; ) {
          t.length % 2 && t.push(t[t.length - 1]);
          let e = [];
          for (let a = 0; a < t.length; a += 2)
            e.push((0, s.w)((0, r.eV)(t[a], t[a + 1])));
          t = e;
        }
        return t[0];
      }
      function u(e, t, a) {
        let n = o(e);
        for (let e of t) {
          let t = o(e.sibling);
          n =
            "left" === e.position
              ? (0, s.w)((0, r.eV)(t, n))
              : (0, s.w)((0, r.eV)(n, t));
        }
        return (0, r.ci)(n) === a.replace(/^0x/, "").toLowerCase();
      }
      function d(e, t, a) {
        let s = (0, r.iY)(e.toLowerCase()),
          o = h([s, (0, r.iY)(JSON.stringify(t)), (0, r.iY)(a)]),
          c = (0, n.Di)(
            l.JQ,
            (0, r.eV)(s, o),
            void 0,
            (0, r.iY)("tasq-ledger-id"),
            32
          );
        return { commitment: i(o), ledgerId: i(c) };
      }
    },
  },
  function (e) {
    e.O(0, [9912, 3146, 3852, 6513, 2733, 5118, 2971, 2117, 1744], function () {
      return e((e.s = 78625));
    }),
      (_N_E = e.O());
  },
]);

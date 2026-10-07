(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8667],
  {
    14442: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 15659));
    },
    15659: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a(57437),
        r = a(27648),
        l = a(2265),
        s = a(79140),
        i = a(67489),
        o = a(82619),
        c = a(23091);
      function u() {
        let [e, t] = (0, l.useState)(""),
          [a, u] = (0, l.useState)("all"),
          [d, v] = (0, l.useState)("all"),
          [m, M] = (0, l.useState)("all"),
          [p, f] = (0, l.useState)(!1),
          [x, b] = (0, l.useState)("price"),
          [g, j] = (0, l.useState)(1),
          N = (0, l.useMemo)(
            () => Array.from(new Set(o.jn.map((e) => e.region))).sort(),
            []
          ),
          H = (0, l.useMemo)(() => {
            let t = (e) =>
              "price" === x
                ? e.pricePerHour
                : "reputation" === x
                ? e.reputation
                : "available" === x
                ? e.available
                : e.uptime;
            return o.jn
              .filter(
                (t) =>
                  ("all" === a || t.gpu.id === a) &&
                  ("all" === d || t.modes.includes(d)) &&
                  ("all" === m || t.region === m) &&
                  (!p || t.gpu.attestable) &&
                  (!e ||
                    ""
                      .concat(t.id, " ")
                      .concat(t.gpu.name, " ")
                      .concat(t.region, " ")
                      .concat(t.attestation)
                      .toLowerCase()
                      .includes(e.toLowerCase()))
              )
              .sort((e, a) => (t(e) - t(a)) * g);
          }, [e, a, d, m, p, x, g]),
          P = (e, t) =>
            (0, n.jsxs)("th", {
              className: "num sortable",
              onClick: () => {
                x === e
                  ? j((e) => (1 === e ? -1 : 1))
                  : (b(e), j("price" === e ? 1 : -1));
              },
              children: [t, x === e ? (1 === g ? " ↑" : " ↓") : ""],
            }),
          C = H.reduce((e, t) => e + t.available, 0);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.yG, {
              eyebrow: "Market",
              title: "All compute on TasQ",
              desc: "Every offer lists the assurance modes it can serve. Attested machines can run confidential jobs in mode A. Others serve modes R and P.",
            }),
            (0, n.jsxs)("div", {
              className: "grid g4",
              children: [
                (0, n.jsx)(h, { v: String(H.length), l: "Offers shown" }),
                (0, n.jsx)(h, { v: String(C), l: "GPUs available" }),
                (0, n.jsx)(h, {
                  v: String(H.filter((e) => e.gpu.attestable).length),
                  l: "Offers with enclave attestation",
                }),
                (0, n.jsx)(h, {
                  v: H.length
                    ? (0, c.xe)(
                        ((e) => {
                          let t = [...e].sort((e, t) => e - t);
                          return t.length ? t[Math.floor(t.length / 2)] : NaN;
                        })(H.map((e) => e.pricePerHour))
                      )
                    : "None",
                  l: "Median price per GPU hour",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "panel",
              children: [
                (0, n.jsxs)("div", {
                  className: "panel-head",
                  style: { flexWrap: "wrap" },
                  children: [
                    (0, n.jsxs)("div", {
                      className: "filters",
                      children: [
                        (0, n.jsx)("div", {
                          className: "input-group",
                          style: { flex: "1 1 200px" },
                          children: (0, n.jsx)("input", {
                            className: "input",
                            placeholder: "Search offers",
                            value: e,
                            onChange: (e) => t(e.target.value),
                            "aria-label": "Search offers",
                            style: { height: 38, paddingRight: 14 },
                          }),
                        }),
                        (0, n.jsxs)("select", {
                          className: "select",
                          value: a,
                          onChange: (e) => u(e.target.value),
                          "aria-label": "GPU class",
                          children: [
                            (0, n.jsx)("option", {
                              value: "all",
                              children: "All GPUs",
                            }),
                            o.QC.map((e) =>
                              (0, n.jsx)(
                                "option",
                                { value: e.id, children: e.name },
                                e.id
                              )
                            ),
                          ],
                        }),
                        (0, n.jsxs)("select", {
                          className: "select",
                          value: d,
                          onChange: (e) => v(e.target.value),
                          "aria-label": "Mode",
                          children: [
                            (0, n.jsx)("option", {
                              value: "all",
                              children: "All modes",
                            }),
                            Object.keys(c.EH).map((e) =>
                              (0, n.jsxs)(
                                "option",
                                {
                                  value: e,
                                  children: ["Mode ", e, ", ", c.EH[e].name],
                                },
                                e
                              )
                            ),
                          ],
                        }),
                        (0, n.jsxs)("select", {
                          className: "select",
                          value: m,
                          onChange: (e) => M(e.target.value),
                          "aria-label": "Region",
                          children: [
                            (0, n.jsx)("option", {
                              value: "all",
                              children: "All regions",
                            }),
                            N.map((e) =>
                              (0, n.jsx)("option", { children: e }, e)
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(i.rs, {
                      checked: p,
                      onChange: f,
                      label: "Confidential only",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "table-wrap",
                  style: {
                    border: 0,
                    borderRadius: 0,
                    background: "transparent",
                  },
                  children: (0, n.jsxs)("table", {
                    className: "t",
                    children: [
                      (0, n.jsx)("thead", {
                        children: (0, n.jsxs)("tr", {
                          children: [
                            (0, n.jsx)("th", { children: "Offer" }),
                            (0, n.jsx)("th", { children: "GPU" }),
                            (0, n.jsx)("th", { children: "Modes" }),
                            (0, n.jsx)("th", { children: "Attestation" }),
                            (0, n.jsx)("th", { children: "Region" }),
                            P("reputation", "Reputation"),
                            P("uptime", "Uptime"),
                            P("available", "Available"),
                            P("price", "Per GPU hour"),
                            (0, n.jsx)("th", {}),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("tbody", {
                        children: [
                          H.map((e) =>
                            (0, n.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, n.jsx)("td", {
                                    className: "mono muted",
                                    children: e.id,
                                  }),
                                  (0, n.jsx)("td", {
                                    style: {
                                      color: "var(--text)",
                                      fontWeight: 500,
                                    },
                                    children: e.gpu.name,
                                  }),
                                  (0, n.jsx)("td", {
                                    children: (0, n.jsx)("span", {
                                      className: "row",
                                      style: { gap: 4 },
                                      children: e.modes.map((e) =>
                                        (0, n.jsx)(
                                          "span",
                                          {
                                            title: c.EH[e].name,
                                            className: "chip-mode ".concat(e),
                                            children: e,
                                          },
                                          e
                                        )
                                      ),
                                    }),
                                  }),
                                  (0, n.jsx)("td", {
                                    children: e.gpu.attestable
                                      ? (0, n.jsxs)("span", {
                                          className: "row",
                                          style: { gap: 6 },
                                          children: [
                                            (0, n.jsx)(s.JO, {
                                              name: "lock",
                                              size: 13,
                                              style: {
                                                color: "var(--brand-2)",
                                              },
                                            }),
                                            e.attestation,
                                          ],
                                        })
                                      : (0, n.jsx)("span", {
                                          className: "muted",
                                          children: e.attestation,
                                        }),
                                  }),
                                  (0, n.jsx)("td", {
                                    className: "muted",
                                    children: e.region,
                                  }),
                                  (0, n.jsxs)("td", {
                                    className: "num mono",
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "rep-bar",
                                        children: (0, n.jsx)("i", {
                                          style: {
                                            width: "".concat(
                                              100 * e.reputation,
                                              "%"
                                            ),
                                          },
                                        }),
                                      }),
                                      e.reputation.toFixed(3),
                                    ],
                                  }),
                                  (0, n.jsxs)("td", {
                                    className: "num mono",
                                    children: [e.uptime.toFixed(1), "%"],
                                  }),
                                  (0, n.jsxs)("td", {
                                    className: "num mono",
                                    children: [e.available, " of ", e.count],
                                  }),
                                  (0, n.jsx)("td", {
                                    className: "num mono",
                                    style: { color: "var(--text)" },
                                    children: (0, c.xe)(e.pricePerHour),
                                  }),
                                  (0, n.jsx)("td", {
                                    className: "num",
                                    children: (0, n.jsx)(r.default, {
                                      href: "/app/rent?offer=".concat(e.id),
                                      className: "btn btn-ghost btn-sm",
                                      children: "Rent",
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                          0 === H.length &&
                            (0, n.jsx)("tr", {
                              children: (0, n.jsx)("td", {
                                colSpan: 10,
                                children: (0, n.jsx)("div", {
                                  className: "empty",
                                  children: "No offers match these filters.",
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let { v: t, l: a } = e;
        return (0, n.jsxs)("div", {
          className: "stat",
          style: { padding: 18 },
          children: [
            (0, n.jsx)("span", {
              className: "stat-v",
              style: { fontSize: 26 },
              children: t,
            }),
            (0, n.jsx)("span", { className: "stat-l", children: a }),
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
          return s;
        },
        qf: function () {
          return i;
        },
      });
      var n = a(57437);
      let r = {
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
        let { name: t, size: a = 18, strokeWidth: l = 1.7, ...s } = e;
        return (0, n.jsx)("svg", {
          width: a,
          height: a,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: l,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...s,
          children: (0, n.jsx)("path", { d: r[t] }),
        });
      }
      function s(e) {
        let { size: t = 16 } = e;
        return (0, n.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, n.jsx)("path", {
            d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
          }),
        });
      }
      function i(e) {
        let { size: t = 15 } = e;
        return (0, n.jsx)("img", {
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
          return u;
        },
        lz: function () {
          return c;
        },
        v1: function () {
          return o;
        },
      });
      var n = a(90328),
        r = a(25566);
      let l = Number(r.env.NEXT_PUBLIC_CHAIN_ID || 4663),
        s =
          r.env.NEXT_PUBLIC_RPC_URL ||
          "https://rpc.mainnet.chain.robinhood.com",
        i =
          r.env.NEXT_PUBLIC_EXPLORER_URL ||
          "https://robinhoodchain.blockscout.com",
        o = (0, n.a)({
          id: l,
          name: r.env.NEXT_PUBLIC_CHAIN_NAME || "Robinhood Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: [s] } },
          blockExplorers: { default: { name: "Blockscout", url: i } },
        }),
        c = {
          url: r.env.NEXT_PUBLIC_SITE_URL || "https://tasqnetwork.io",
          github:
            r.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tasqProject",
          gitbook: r.env.NEXT_PUBLIC_GITBOOK_URL || "",
          x: r.env.NEXT_PUBLIC_X_URL || "https://x.com/tasq_x",
          email: r.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
          paper: "/tasq-yellow-paper.pdf",
        },
        u = "cmupg0n18016s0cl2cqtup7xb";
    },
    82619: function (e, t, a) {
      "use strict";
      a.d(t, {
        QC: function () {
          return n;
        },
        jn: function () {
          return s;
        },
        u$: function () {
          return r;
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
        r = 2.6,
        l = [
          "North America",
          "Europe",
          "Asia Pacific",
          "Middle East",
          "South America",
        ],
        s = (() => {
          let e;
          let t =
              ((e = 4663),
              () => (e = (1664525 * e + 1013904223) >>> 0) / 4294967296),
            a = [];
          for (let e = 0; e < 36; e++) {
            let r = n[Math.floor(t() * n.length)],
              s = [1, 1, 2, 4, 8][Math.floor(5 * t())],
              i = r.attestable
                ? t() > 0.3
                  ? ["A", "R"]
                  : ["A", "R", "P"]
                : t() > 0.6
                ? ["R", "P"]
                : ["R"];
            a.push({
              id: "TQ-".concat((6699 + 97 * e).toString(16).toUpperCase()),
              gpu: r,
              count: s,
              modes: i,
              attestation: r.attestable
                ? t() > 0.5
                  ? "NVIDIA CC + TDX"
                  : "NVIDIA CC + SEV-SNP"
                : t() > 0.5
                ? "TPM 2.0"
                : "None",
              region: l[Math.floor(t() * l.length)],
              pricePerHour:
                Math.round(r.basePerHour * (0.85 + 0.35 * t()) * 100) / 100,
              reputation: Math.round((0.86 + 0.14 * t()) * 1e3) / 1e3,
              available: Math.max(1, Math.round(s * (0.3 + 0.7 * t()))),
              uptime: Math.round((0.95 + 0.049 * t()) * 1e3) / 10,
            });
          }
          return a;
        })();
    },
    23091: function (e, t, a) {
      "use strict";
      a.d(t, {
        EH: function () {
          return n;
        },
        EV: function () {
          return s;
        },
        I: function () {
          return i;
        },
        Pu: function () {
          return r;
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
      function r(e, t, a) {
        let n = 0;
        for (let r = a; r <= t; r++)
          n +=
            (function (e, t) {
              let a = 1;
              for (let n = 1; n <= t; n++) a = (a * (e - t + n)) / n;
              return a;
            })(t, r) *
            Math.pow(e, r) *
            Math.pow(1 - e, t - r);
        return n;
      }
      function l(e, t, a, n) {
        return e >= 1 ? 1 / 0 : (e * t * a * n) / (1 - e);
      }
      function s(e, t, a, n) {
        return e / (e + t * a * n);
      }
      let i = { sigma: 0.5, stakePerSeat: 500, enclaveOverhead: 0.05 };
      function o(e) {
        var t, a, n;
        let r = null !== (t = e.units) && void 0 !== t ? t : 1,
          l = e.hours * r;
        if ("A" === e.mode) {
          let t = e.attestedPerHour * (1 + i.enclaveOverhead);
          return {
            perHour: t,
            total: t * l,
            breakdown: [
              { label: "Attested GPU time", value: e.attestedPerHour * l },
              {
                label: "Enclave overhead (5%)",
                value: e.attestedPerHour * i.enclaveOverhead * l,
              },
            ],
          };
        }
        if ("R" === e.mode) {
          let t = null !== (a = e.r) && void 0 !== a ? a : 3,
            r = null !== (n = e.pi) && void 0 !== n ? n : 0.1,
            s = t * e.basePerHour,
            o = r * e.attestedPerHour * (1 + i.enclaveOverhead);
          return {
            perHour: s + o,
            total: (s + o) * l,
            breakdown: [
              { label: "".concat(t, " seats"), value: s * l },
              {
                label: "Hidden audits (".concat(
                  Math.round(100 * r),
                  "% in mode A)"
                ),
                value: o * l,
              },
            ],
          };
        }
        let s = e.basePerHour;
        return {
          perHour: s,
          total: s * l,
          breakdown: [
            { label: "Execution", value: s * l },
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
    27648: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return r.a;
        },
      });
      var n = a(72972),
        r = a.n(n);
    },
    93715: function (e, t, a) {
      "use strict";
      a.d(t, {
        P: function () {
          return r;
        },
      });
      var n = a(24250);
      function r(e, t = {}) {
        let {
          key: a = "custom",
          methods: r,
          name: l = "Custom Provider",
          retryDelay: s,
        } = t;
        return ({ retryCount: i }) =>
          (0, n.q)({
            key: a,
            methods: r,
            name: l,
            request: e.request.bind(e),
            retryCount: t.retryCount ?? i,
            retryDelay: s,
            type: "custom",
          });
      }
    },
  },
  function (e) {
    e.O(0, [9912, 3146, 3852, 2972, 6513, 5118, 2971, 2117, 1744], function () {
      return e((e.s = 14442));
    }),
      (_N_E = e.O());
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6191],
  {
    58226: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 97047));
    },
    97047: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return p;
          },
        });
      var n = a(57437),
        t = a(27648),
        r = a(79140),
        i = a(15134),
        l = a(30657),
        o = a(67489),
        c = a(82619),
        d = a(23091),
        h = a(8530);
      let m = [
          {
            href: "/app/market",
            icon: "market",
            title: "Browse the market",
            desc: "Every GPU offer with its modes, attestation and price.",
          },
          {
            href: "/app/rent",
            icon: "lock",
            title: "Rent privately",
            desc: "Book GPU hours. Confidential jobs only run in attested enclaves.",
          },
          {
            href: "/app/lend",
            icon: "server",
            title: "Lend compute",
            desc: "Register a GPU and see which modes it qualifies for.",
          },
          {
            href: "/app/workloads",
            icon: "parallel",
            title: "Run a parallel workload",
            desc: "Split a job across many machines with an admission check.",
          },
          {
            href: "/app/verify",
            icon: "shield",
            title: "Verify a result",
            desc: "Hash outputs, check proofs and receipts in your browser.",
          },
        ],
        u = {
          RentIntent: "Rent",
          NodeRegistration: "Lend",
          WorkloadIntent: "Workload",
        };
      function p() {
        let e = (0, i.Os)(),
          s = (0, o.Mw)(),
          a = c.jn.filter((e) => e.gpu.attestable),
          p = c.jn.reduce((e, s) => e + s.available, 0),
          x = Math.min(...a.map((e) => e.pricePerHour)),
          j = s.filter((s) => {
            var a;
            return (
              !e.address ||
              String(
                null !== (a = s.message.client || s.message.operator) &&
                  void 0 !== a
                  ? a
                  : ""
              ).toLowerCase() === e.address.toLowerCase()
            );
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.yG, {
              eyebrow: "Overview",
              title: e.connected ? "Welcome back" : "Private AI compute",
              desc: "Rent GPUs without exposing your data, lend yours without seeing anyone else's, and check every result yourself.",
            }),
            (0, n.jsxs)("div", {
              className: "grid g3 wide-first",
              children: [
                (0, n.jsx)("div", {
                  className: "card stack",
                  style: { gap: 16 },
                  children: e.connected
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("div", {
                            className: "row",
                            style: { gap: 12 },
                            children: [
                              (0, n.jsx)(l.q, { address: e.address, size: 40 }),
                              (0, n.jsxs)("div", {
                                className: "stack",
                                children: [
                                  (0, n.jsxs)("span", {
                                    className: "mono",
                                    style: { fontSize: 15 },
                                    children: [
                                      (0, i.jv)(e.address, 6),
                                      " ",
                                      (0, n.jsx)(o.O5, {
                                        text: e.address || "",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: "tiny faint",
                                    children: [
                                      e.walletLabel,
                                      e.email ? ", ".concat(e.email) : "",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "summary-row",
                            children: [
                              (0, n.jsx)("span", { children: "Network" }),
                              (0, n.jsx)("b", {
                                style: {
                                  color: e.onRightChain
                                    ? "var(--ok)"
                                    : "var(--warn)",
                                },
                                children: e.onRightChain
                                  ? h.v1.name
                                  : "Wrong network",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "summary-row",
                            children: [
                              (0, n.jsx)("span", {
                                children: "Signed intents",
                              }),
                              (0, n.jsx)("b", { children: j.length }),
                            ],
                          }),
                          !e.onRightChain &&
                            (0, n.jsxs)("button", {
                              className: "btn btn-ghost btn-sm",
                              onClick: () => e.switchChain().catch(() => {}),
                              children: ["Switch to ", h.v1.name],
                            }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "h3",
                            children: "Connect to get started",
                          }),
                          (0, n.jsx)("p", {
                            className: "muted small",
                            children:
                              "Connect your wallet to get started. Robinhood Chain is selected automatically.",
                          }),
                          (0, n.jsxs)("button", {
                            className: "btn btn-primary",
                            onClick: () => e.login(),
                            disabled: !e.ready,
                            children: [
                              (0, n.jsx)(r.JO, { name: "wallet", size: 16 }),
                              "Connect wallet",
                            ],
                          }),
                        ],
                      }),
                }),
                (0, n.jsxs)("div", {
                  className: "stat",
                  children: [
                    (0, n.jsx)("span", {
                      className: "tiny faint",
                      children: "Market",
                    }),
                    (0, n.jsx)("span", { className: "stat-v", children: p }),
                    (0, n.jsxs)("span", {
                      className: "stat-l",
                      children: [
                        "GPUs available across ",
                        c.jn.length,
                        " offers, ",
                        a.length,
                        " with enclave attestation.",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "stat",
                  children: [
                    (0, n.jsx)("span", {
                      className: "tiny faint",
                      children: "Lowest attested price",
                    }),
                    (0, n.jsxs)("span", {
                      className: "stat-v",
                      children: [
                        (0, d.xe)(x),
                        (0, n.jsx)("span", {
                          className: "muted",
                          style: { fontSize: 16, fontWeight: 400 },
                          children: " / h",
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "stat-l",
                      children: "For mode A, before the 5% enclave overhead.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "grid g3",
              children: [
                m.map((e) =>
                  (0, n.jsxs)(
                    t.default,
                    {
                      href: e.href,
                      className: "card card-hover stack",
                      style: { gap: 12 },
                      children: [
                        (0, n.jsxs)("div", {
                          className: "row-between",
                          children: [
                            (0, n.jsx)("span", {
                              style: {
                                width: 38,
                                height: 38,
                                borderRadius: 10,
                                display: "grid",
                                placeItems: "center",
                                background: "var(--brand-soft)",
                                color: "var(--brand-2)",
                                border: "1px solid var(--brand-line)",
                              },
                              children: (0, n.jsx)(r.JO, {
                                name: e.icon,
                                size: 18,
                              }),
                            }),
                            (0, n.jsx)(r.JO, {
                              name: "arrowUpRight",
                              size: 16,
                              style: { color: "var(--faint)" },
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className: "h4",
                          children: e.title,
                        }),
                        (0, n.jsx)("span", {
                          className: "muted small",
                          children: e.desc,
                        }),
                      ],
                    },
                    e.href
                  )
                ),
                (0, n.jsxs)("a", {
                  href: "/tasq-yellow-paper.pdf",
                  className: "card card-hover stack",
                  style: { gap: 12, borderStyle: "dashed" },
                  children: [
                    (0, n.jsxs)("div", {
                      className: "row-between",
                      children: [
                        (0, n.jsx)("span", {
                          style: {
                            width: 38,
                            height: 38,
                            borderRadius: 10,
                            display: "grid",
                            placeItems: "center",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid var(--line-2)",
                          },
                          children: (0, n.jsx)(r.JO, { name: "doc", size: 18 }),
                        }),
                        (0, n.jsx)(r.JO, {
                          name: "arrowUpRight",
                          size: 16,
                          style: { color: "var(--faint)" },
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "h4",
                      children: "Read the yellow paper",
                    }),
                    (0, n.jsx)("span", {
                      className: "muted small",
                      children:
                        "Threat model, admission rule and open problems.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "panel",
              children: [
                (0, n.jsxs)("div", {
                  className: "panel-head",
                  children: [
                    (0, n.jsx)("span", {
                      className: "h4",
                      children: "Your signed intents",
                    }),
                    (0, n.jsx)("span", {
                      className: "tiny faint",
                      children: "Stored in this browser only",
                    }),
                  ],
                }),
                0 === j.length
                  ? (0, n.jsxs)("div", {
                      className: "empty",
                      children: [
                        (0, n.jsx)(r.JO, { name: "key", size: 22 }),
                        (0, n.jsx)("span", {
                          children:
                            "No intents yet. Rent, lend or start a workload to sign one.",
                        }),
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: "table-wrap",
                      style: { border: 0, borderRadius: 0 },
                      children: (0, n.jsxs)("table", {
                        className: "t",
                        children: [
                          (0, n.jsx)("thead", {
                            children: (0, n.jsxs)("tr", {
                              children: [
                                (0, n.jsx)("th", { children: "Type" }),
                                (0, n.jsx)("th", { children: "Details" }),
                                (0, n.jsx)("th", { children: "Signed" }),
                                (0, n.jsx)("th", {
                                  className: "num",
                                  children: "Signature",
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("tbody", {
                            children: j.slice(0, 12).map((e) => {
                              var s, a;
                              return (0, n.jsxs)(
                                "tr",
                                {
                                  children: [
                                    (0, n.jsx)("td", {
                                      children: (0, n.jsx)("span", {
                                        className: "badge",
                                        children: u[e.kind] || e.kind,
                                      }),
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "muted",
                                      children:
                                        ((s = e.kind),
                                        (a = e.message),
                                        "RentIntent" === s
                                          ? ""
                                              .concat(a.gpuClass, ", mode ")
                                              .concat(a.mode, ", ")
                                              .concat(a.hours, " h")
                                          : "NodeRegistration" === s
                                          ? ""
                                              .concat(a.gpuCount, " x ")
                                              .concat(a.gpuClass, ", modes ")
                                              .concat(a.modes)
                                          : "WorkloadIntent" === s
                                          ? ""
                                              .concat(a.units, " units, mode ")
                                              .concat(a.mode, ", ")
                                              .concat(a.image)
                                          : ""),
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "muted",
                                      children: new Date(
                                        e.createdAt
                                      ).toLocaleString(),
                                    }),
                                    (0, n.jsxs)("td", {
                                      className: "num mono",
                                      children: [
                                        (0, i.jv)(e.signature, 6),
                                        " ",
                                        (0, n.jsx)(o.O5, { text: e.signature }),
                                      ],
                                    }),
                                  ],
                                },
                                e.signature
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          ],
        });
      }
    },
    30657: function (e, s, a) {
      "use strict";
      a.d(s, {
        AppShell: function () {
          return u;
        },
        q: function () {
          return v;
        },
      });
      var n = a(57437),
        t = a(27648),
        r = a(70304),
        i = a(2265),
        l = a(79140),
        o = a(47532),
        c = a(8530),
        d = a(15134),
        h = a(67489);
      let m = [
        { href: "/app", label: "Overview", icon: "home", mobile: "Home" },
        {
          href: "/app/market",
          label: "Market",
          icon: "market",
          mobile: "Market",
        },
        {
          href: "/app/rent",
          label: "Rent privately",
          icon: "lock",
          mobile: "Rent",
        },
        {
          href: "/app/lend",
          label: "Lend compute",
          icon: "server",
          mobile: "Lend",
        },
        {
          href: "/app/workloads",
          label: "Parallel workloads",
          icon: "parallel",
          mobile: "Jobs",
        },
        {
          href: "/app/verify",
          label: "Verify",
          icon: "shield",
          mobile: "Verify",
        },
      ];
      function u(e) {
        let { children: s } = e;
        return (0, n.jsx)(d.nS, {
          children: (0, n.jsx)(h.VW, {
            children: (0, n.jsx)(p, {
              children: (0, n.jsx)(x, { children: s }),
            }),
          }),
        });
      }
      function p(e) {
        let { children: s } = e,
          a = (0, d.Os)(),
          t = (0, r.useRouter)();
        return ((0, i.useEffect)(() => {
          a.ready && !a.authenticated && t.replace("/signup");
        }, [a.ready, a.authenticated, t]),
        a.ready)
          ? a.authenticated
            ? (0, n.jsx)(n.Fragment, { children: s })
            : (0, n.jsxs)("div", {
                className: "app-gate",
                children: [
                  (0, n.jsx)("span", { className: "app-gate-dot" }),
                  "Redirecting to sign in",
                ],
              })
          : (0, n.jsxs)("div", {
              className: "app-gate",
              children: [
                (0, n.jsx)("span", { className: "app-gate-dot" }),
                "Loading your session",
              ],
            });
      }
      function x(e) {
        let { children: s } = e,
          a = (0, r.usePathname)(),
          i = (e) => ("/app" === e ? "/app" === a : a.startsWith(e));
        return (0, n.jsxs)("div", {
          className: "app",
          children: [
            (0, n.jsxs)("aside", {
              className: "app-side",
              children: [
                (0, n.jsx)(o.T, {}),
                (0, n.jsxs)("nav", {
                  className: "app-nav",
                  "aria-label": "App",
                  children: [
                    m.map((e) =>
                      (0, n.jsxs)(
                        t.default,
                        {
                          href: e.href,
                          className: i(e.href) ? "on" : "",
                          children: [
                            (0, n.jsx)(l.JO, { name: e.icon, size: 17 }),
                            e.label,
                          ],
                        },
                        e.href
                      )
                    ),
                    (0, n.jsx)("div", { className: "sep" }),
                    (0, n.jsxs)(t.default, {
                      href: "/benchmark",
                      children: [
                        (0, n.jsx)(l.JO, { name: "chart", size: 17 }),
                        "Benchmarks",
                      ],
                    }),
                    (0, n.jsxs)("a", {
                      href: c.lz.paper,
                      children: [
                        (0, n.jsx)(l.JO, { name: "doc", size: 17 }),
                        "Yellow paper",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "app-side-foot",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "row",
                      style: { gap: 8, color: "var(--muted)", fontWeight: 500 },
                      children: [
                        (0, n.jsx)(l.qf, { size: 15 }),
                        "Robinhood Chain",
                      ],
                    }),
                    (0, n.jsx)("span", {
                      children:
                        "Sign in, price jobs and sign intents directly in your browser.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "app-main",
              children: [
                (0, n.jsxs)("div", {
                  className: "app-top",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mobile-only-logo",
                      children: (0, n.jsx)(j, {}),
                    }),
                    (0, n.jsx)("div", { className: "grow" }),
                    (0, n.jsx)(b, {}),
                    (0, n.jsx)(g, {}),
                  ],
                }),
                !c.Z2 && (0, n.jsx)(f, {}),
                (0, n.jsx)("main", { className: "app-content", children: s }),
              ],
            }),
            (0, n.jsx)("nav", {
              className: "app-tabs-mobile",
              "aria-label": "App",
              children: m.map((e) =>
                (0, n.jsxs)(
                  t.default,
                  {
                    href: e.href,
                    className: i(e.href) ? "on" : "",
                    children: [
                      (0, n.jsx)(l.JO, { name: e.icon, size: 19 }),
                      e.mobile,
                    ],
                  },
                  e.href
                )
              ),
            }),
            (0, n.jsx)("style", {
              children:
                "@media (min-width: 961px) { .mobile-only-logo { display: none; } }",
            }),
          ],
        });
      }
      function j() {
        return (0, n.jsx)(t.default, {
          href: "/",
          className: "logo",
          "aria-label": "TasQ home",
          children: (0, n.jsx)("img", {
            src: "/logo-mark.png",
            alt: "",
            width: 26,
            height: 26,
            style: { width: 26, height: 26, borderRadius: "50%" },
          }),
        });
      }
      function f() {
        return (0, n.jsxs)("div", {
          className: "preview-banner",
          style: {
            background: "var(--brand-soft)",
            borderBottomColor: "var(--brand-line)",
            color: "#d6c6ff",
          },
          children: [
            (0, n.jsx)(l.JO, { name: "key", size: 14 }),
            (0, n.jsxs)("span", {
              children: [
                "Privy is not configured. Set ",
                (0, n.jsx)("code", {
                  className: "code-inline",
                  children: "NEXT_PUBLIC_PRIVY_APP_ID",
                }),
                " to enable wallet sign in. A browser wallet still works.",
              ],
            }),
          ],
        });
      }
      function b() {
        let e = (0, d.Os)();
        return e.connected
          ? e.onRightChain
            ? (0, n.jsxs)("span", {
                className: "net-badge",
                children: [
                  (0, n.jsx)(l.qf, { size: 15 }),
                  (0, n.jsx)("span", {
                    className: "hide-mobile",
                    children: c.v1.name,
                  }),
                  (0, n.jsx)("span", {
                    className: "mono tiny faint",
                    children: c.v1.id,
                  }),
                ],
              })
            : (0, n.jsxs)("button", {
                className: "net-badge wrong",
                onClick: () => e.switchChain().catch(() => {}),
                children: [
                  (0, n.jsx)(l.JO, { name: "alert", size: 14 }),
                  (0, n.jsx)("span", {
                    className: "hide-mobile",
                    children: "Wrong network.",
                  }),
                  " Switch",
                ],
              })
          : (0, n.jsxs)("span", {
              className: "net-badge hide-mobile",
              children: [(0, n.jsx)(l.qf, { size: 15 }), c.v1.name],
            });
      }
      function v(e) {
        let { address: s, size: a = 26 } = e,
          t = s ? parseInt(s.slice(2, 8), 16) : 0,
          r = t % 360;
        return (0, n.jsx)("span", {
          className: "avatar",
          style: {
            width: a,
            height: a,
            background: "linear-gradient(135deg, hsl("
              .concat(r, " 70% 62%), hsl(")
              .concat((r + 50 + ((t >> 8) % 80)) % 360, " 70% 40%))"),
          },
        });
      }
      function g() {
        var e;
        let s = (0, d.Os)(),
          [a, t] = (0, i.useState)(!1),
          r = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
          let e = (e) => {
            r.current && !r.current.contains(e.target) && t(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []),
        s.ready)
          ? s.connected
            ? (0, n.jsxs)("div", {
                ref: r,
                style: { position: "relative" },
                children: [
                  (0, n.jsxs)("button", {
                    className: "wallet-btn",
                    onClick: () => t((e) => !e),
                    "aria-expanded": a,
                    children: [
                      (0, n.jsx)("span", {
                        className: "mono",
                        children: (0, d.jv)(s.address),
                      }),
                      (0, n.jsx)(v, { address: s.address }),
                    ],
                  }),
                  a &&
                    (0, n.jsxs)("div", {
                      className: "menu",
                      role: "menu",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "menu-head",
                          children: [
                            (0, n.jsxs)("span", {
                              className: "row",
                              style: { gap: 10 },
                              children: [
                                (0, n.jsx)(v, { address: s.address, size: 30 }),
                                (0, n.jsx)("span", {
                                  className: "mono small",
                                  children: (0, d.jv)(s.address, 6),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("span", {
                              className: "tiny faint",
                              children: [
                                s.walletLabel,
                                s.email ? ", ".concat(s.email) : "",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            var e;
                            null === (e = navigator.clipboard) ||
                              void 0 === e ||
                              e.writeText(s.address || ""),
                              t(!1);
                          },
                          children: [
                            (0, n.jsx)(l.JO, { name: "copy", size: 15 }),
                            "Copy address",
                          ],
                        }),
                        (0, n.jsxs)("a", {
                          href: ""
                            .concat(
                              null === (e = c.v1.blockExplorers) || void 0 === e
                                ? void 0
                                : e.default.url,
                              "/address/"
                            )
                            .concat(s.address),
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, n.jsx)(l.JO, { name: "external", size: 15 }),
                            "View on explorer",
                          ],
                        }),
                        !s.onRightChain &&
                          (0, n.jsxs)("button", {
                            onClick: () => {
                              s.switchChain().catch(() => {}), t(!1);
                            },
                            children: [
                              (0, n.jsx)(l.JO, { name: "refresh", size: 15 }),
                              "Switch to ",
                              c.v1.name,
                            ],
                          }),
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            s.logout(), t(!1);
                          },
                          children: [
                            (0, n.jsx)(l.JO, { name: "logout", size: 15 }),
                            "Disconnect",
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, n.jsx)("button", {
                className: "btn btn-ghost btn-sm",
                disabled: !0,
                children: "Connecting",
              })
          : (0, n.jsx)("button", {
              className: "btn btn-ghost btn-sm",
              disabled: !0,
              children: "Loading",
            });
      }
    },
    82619: function (e, s, a) {
      "use strict";
      a.d(s, {
        QC: function () {
          return n;
        },
        jn: function () {
          return i;
        },
        u$: function () {
          return t;
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
        t = 2.6,
        r = [
          "North America",
          "Europe",
          "Asia Pacific",
          "Middle East",
          "South America",
        ],
        i = (() => {
          let e;
          let s =
              ((e = 4663),
              () => (e = (1664525 * e + 1013904223) >>> 0) / 4294967296),
            a = [];
          for (let e = 0; e < 36; e++) {
            let t = n[Math.floor(s() * n.length)],
              i = [1, 1, 2, 4, 8][Math.floor(5 * s())],
              l = t.attestable
                ? s() > 0.3
                  ? ["A", "R"]
                  : ["A", "R", "P"]
                : s() > 0.6
                ? ["R", "P"]
                : ["R"];
            a.push({
              id: "TQ-".concat((6699 + 97 * e).toString(16).toUpperCase()),
              gpu: t,
              count: i,
              modes: l,
              attestation: t.attestable
                ? s() > 0.5
                  ? "NVIDIA CC + TDX"
                  : "NVIDIA CC + SEV-SNP"
                : s() > 0.5
                ? "TPM 2.0"
                : "None",
              region: r[Math.floor(s() * r.length)],
              pricePerHour:
                Math.round(t.basePerHour * (0.85 + 0.35 * s()) * 100) / 100,
              reputation: Math.round((0.86 + 0.14 * s()) * 1e3) / 1e3,
              available: Math.max(1, Math.round(i * (0.3 + 0.7 * s()))),
              uptime: Math.round((0.95 + 0.049 * s()) * 1e3) / 10,
            });
          }
          return a;
        })();
    },
    23091: function (e, s, a) {
      "use strict";
      a.d(s, {
        EH: function () {
          return n;
        },
        EV: function () {
          return i;
        },
        I: function () {
          return l;
        },
        Pu: function () {
          return t;
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
      function t(e, s, a) {
        let n = 0;
        for (let t = a; t <= s; t++)
          n +=
            (function (e, s) {
              let a = 1;
              for (let n = 1; n <= s; n++) a = (a * (e - s + n)) / n;
              return a;
            })(s, t) *
            Math.pow(e, t) *
            Math.pow(1 - e, s - t);
        return n;
      }
      function r(e, s, a, n) {
        return e >= 1 ? 1 / 0 : (e * s * a * n) / (1 - e);
      }
      function i(e, s, a, n) {
        return e / (e + s * a * n);
      }
      let l = { sigma: 0.5, stakePerSeat: 500, enclaveOverhead: 0.05 };
      function o(e) {
        var s, a, n;
        let t = null !== (s = e.units) && void 0 !== s ? s : 1,
          r = e.hours * t;
        if ("A" === e.mode) {
          let s = e.attestedPerHour * (1 + l.enclaveOverhead);
          return {
            perHour: s,
            total: s * r,
            breakdown: [
              { label: "Attested GPU time", value: e.attestedPerHour * r },
              {
                label: "Enclave overhead (5%)",
                value: e.attestedPerHour * l.enclaveOverhead * r,
              },
            ],
          };
        }
        if ("R" === e.mode) {
          let s = null !== (a = e.r) && void 0 !== a ? a : 3,
            t = null !== (n = e.pi) && void 0 !== n ? n : 0.1,
            i = s * e.basePerHour,
            o = t * e.attestedPerHour * (1 + l.enclaveOverhead);
          return {
            perHour: i + o,
            total: (i + o) * r,
            breakdown: [
              { label: "".concat(s, " seats"), value: i * r },
              {
                label: "Hidden audits (".concat(
                  Math.round(100 * t),
                  "% in mode A)"
                ),
                value: o * r,
              },
            ],
          };
        }
        let i = e.basePerHour;
        return {
          perHour: i,
          total: i * r,
          breakdown: [
            { label: "Execution", value: i * r },
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
    93715: function (e, s, a) {
      "use strict";
      a.d(s, {
        P: function () {
          return t;
        },
      });
      var n = a(24250);
      function t(e, s = {}) {
        let {
          key: a = "custom",
          methods: t,
          name: r = "Custom Provider",
          retryDelay: i,
        } = s;
        return ({ retryCount: l }) =>
          (0, n.q)({
            key: a,
            methods: t,
            name: r,
            request: e.request.bind(e),
            retryCount: s.retryCount ?? l,
            retryDelay: i,
            type: "custom",
          });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [9912, 3146, 3852, 2972, 6513, 7532, 5118, 2971, 2117, 1744],
      function () {
        return e((e.s = 58226));
      }
    ),
      (_N_E = e.O());
  },
]);

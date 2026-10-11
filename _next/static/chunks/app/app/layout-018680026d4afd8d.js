(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3541],
  {
    26551: function (e, s, n) {
      Promise.resolve().then(n.bind(n, 30657));
    },
    30657: function (e, s, n) {
      "use strict";
      n.d(s, {
        AppShell: function () {
          return p;
        },
        q: function () {
          return v;
        },
      });
      var a = n(57437),
        r = n(27648),
        i = n(70304),
        l = n(2265),
        t = n(79140),
        c = n(47532),
        o = n(8530),
        d = n(15134),
        h = n(67489);
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
      function p(e) {
        let { children: s } = e;
        return (0, a.jsx)(d.nS, {
          children: (0, a.jsx)(h.VW, {
            children: (0, a.jsx)(u, {
              children: (0, a.jsx)(x, { children: s }),
            }),
          }),
        });
      }
      function u(e) {
        let { children: s } = e,
          n = (0, d.Os)(),
          r = (0, i.useRouter)(),
          [t, o] = (0, l.useState)(!1),
          c =
            t &&
            "tasqnetwork.io" !== location.hostname &&
            "www.tasqnetwork.io" !== location.hostname;
        return ((0, l.useEffect)(() => {
          o(!0);
        }, []),
        (0, l.useEffect)(() => {
          c || (n.ready && !n.authenticated && r.replace("/signup"));
        }, [n.ready, n.authenticated, r, c]),
        c)
          ? (0, a.jsx)(a.Fragment, { children: s })
          : n.ready
          ? n.authenticated
            ? (0, a.jsx)(a.Fragment, { children: s })
            : (0, a.jsxs)("div", {
                className: "app-gate",
                children: [
                  (0, a.jsx)("span", { className: "app-gate-dot" }),
                  "Redirecting to sign in",
                ],
              })
          : (0, a.jsxs)("div", {
              className: "app-gate",
              children: [
                (0, a.jsx)("span", { className: "app-gate-dot" }),
                "Loading your session",
              ],
            });
      }
      function x(e) {
        let { children: s } = e,
          n = (0, i.usePathname)(),
          l = (e) => ("/app" === e ? "/app" === n : n.startsWith(e));
        return (0, a.jsxs)("div", {
          className: "app",
          children: [
            (0, a.jsxs)("aside", {
              className: "app-side",
              children: [
                (0, a.jsx)(c.T, {}),
                (0, a.jsxs)("nav", {
                  className: "app-nav",
                  "aria-label": "App",
                  children: [
                    m.map((e) =>
                      (0, a.jsxs)(
                        r.default,
                        {
                          href: e.href,
                          className: l(e.href) ? "on" : "",
                          children: [
                            (0, a.jsx)(t.JO, { name: e.icon, size: 17 }),
                            e.label,
                          ],
                        },
                        e.href
                      )
                    ),
                    (0, a.jsx)("div", { className: "sep" }),
                    (0, a.jsxs)(r.default, {
                      href: "/benchmark",
                      children: [
                        (0, a.jsx)(t.JO, { name: "chart", size: 17 }),
                        "Benchmarks",
                      ],
                    }),
                    (0, a.jsxs)("a", {
                      href: o.lz.paper,
                      children: [
                        (0, a.jsx)(t.JO, { name: "doc", size: 17 }),
                        "Yellow paper",
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "app-side-foot",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "row",
                      style: { gap: 8, color: "var(--muted)", fontWeight: 500 },
                      children: [
                        (0, a.jsx)(t.qf, { size: 15 }),
                        "Robinhood Chain",
                      ],
                    }),
                    (0, a.jsx)("span", {
                      children:
                        "Sign in, price jobs and sign intents directly in your browser.",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "app-main",
              children: [
                (0, a.jsxs)("div", {
                  className: "app-top",
                  children: [
                    (0, a.jsx)("div", {
                      className: "mobile-only-logo",
                      children: (0, a.jsx)(j, {}),
                    }),
                    (0, a.jsx)("div", { className: "grow" }),
                    (0, a.jsx)(f, {}),
                    (0, a.jsx)(g, {}),
                  ],
                }),
                !o.Z2 && (0, a.jsx)(b, {}),
                (0, a.jsx)("main", { className: "app-content", children: s }),
              ],
            }),
            (0, a.jsx)("nav", {
              className: "app-tabs-mobile",
              "aria-label": "App",
              children: m.map((e) =>
                (0, a.jsxs)(
                  r.default,
                  {
                    href: e.href,
                    className: l(e.href) ? "on" : "",
                    children: [
                      (0, a.jsx)(t.JO, { name: e.icon, size: 19 }),
                      e.mobile,
                    ],
                  },
                  e.href
                )
              ),
            }),
            (0, a.jsx)("style", {
              children:
                "@media (min-width: 961px) { .mobile-only-logo { display: none; } }",
            }),
          ],
        });
      }
      function j() {
        return (0, a.jsx)(r.default, {
          href: "/",
          className: "logo",
          "aria-label": "TasQ home",
          children: (0, a.jsx)("img", {
            src: "/logo-mark.png",
            alt: "",
            width: 26,
            height: 26,
            style: { width: 26, height: 26, borderRadius: "50%" },
          }),
        });
      }
      function b() {
        return (0, a.jsxs)("div", {
          className: "preview-banner",
          style: {
            background: "var(--brand-soft)",
            borderBottomColor: "var(--brand-line)",
            color: "#d6c6ff",
          },
          children: [
            (0, a.jsx)(t.JO, { name: "key", size: 14 }),
            (0, a.jsxs)("span", {
              children: [
                "Privy is not configured. Set ",
                (0, a.jsx)("code", {
                  className: "code-inline",
                  children: "NEXT_PUBLIC_PRIVY_APP_ID",
                }),
                " to enable wallet sign in. A browser wallet still works.",
              ],
            }),
          ],
        });
      }
      function f() {
        let e = (0, d.Os)();
        return e.connected
          ? e.onRightChain
            ? (0, a.jsxs)("span", {
                className: "net-badge",
                children: [
                  (0, a.jsx)(t.qf, { size: 15 }),
                  (0, a.jsx)("span", {
                    className: "hide-mobile",
                    children: o.v1.name,
                  }),
                  (0, a.jsx)("span", {
                    className: "mono tiny faint",
                    children: o.v1.id,
                  }),
                ],
              })
            : (0, a.jsxs)("button", {
                className: "net-badge wrong",
                onClick: () => e.switchChain().catch(() => {}),
                children: [
                  (0, a.jsx)(t.JO, { name: "alert", size: 14 }),
                  (0, a.jsx)("span", {
                    className: "hide-mobile",
                    children: "Wrong network.",
                  }),
                  " Switch",
                ],
              })
          : (0, a.jsxs)("span", {
              className: "net-badge hide-mobile",
              children: [(0, a.jsx)(t.qf, { size: 15 }), o.v1.name],
            });
      }
      function v(e) {
        let { address: s, size: n = 26 } = e,
          r = s ? parseInt(s.slice(2, 8), 16) : 0,
          i = r % 360;
        return (0, a.jsx)("span", {
          className: "avatar",
          style: {
            width: n,
            height: n,
            background: "linear-gradient(135deg, hsl("
              .concat(i, " 70% 62%), hsl(")
              .concat((i + 50 + ((r >> 8) % 80)) % 360, " 70% 40%))"),
          },
        });
      }
      function g() {
        var e;
        let s = (0, d.Os)(),
          [n, r] = (0, l.useState)(!1),
          i = (0, l.useRef)(null);
        return ((0, l.useEffect)(() => {
          let e = (e) => {
            i.current && !i.current.contains(e.target) && r(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []),
        s.ready)
          ? s.connected
            ? (0, a.jsxs)("div", {
                ref: i,
                style: { position: "relative" },
                children: [
                  (0, a.jsxs)("button", {
                    className: "wallet-btn",
                    onClick: () => r((e) => !e),
                    "aria-expanded": n,
                    children: [
                      (0, a.jsx)("span", {
                        className: "mono",
                        children: (0, d.jv)(s.address),
                      }),
                      (0, a.jsx)(v, { address: s.address }),
                    ],
                  }),
                  n &&
                    (0, a.jsxs)("div", {
                      className: "menu",
                      role: "menu",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "menu-head",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "row",
                              style: { gap: 10 },
                              children: [
                                (0, a.jsx)(v, { address: s.address, size: 30 }),
                                (0, a.jsx)("span", {
                                  className: "mono small",
                                  children: (0, d.jv)(s.address, 6),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className: "tiny faint",
                              children: [
                                s.walletLabel,
                                s.email ? ", ".concat(s.email) : "",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("button", {
                          onClick: () => {
                            var e;
                            null === (e = navigator.clipboard) ||
                              void 0 === e ||
                              e.writeText(s.address || ""),
                              r(!1);
                          },
                          children: [
                            (0, a.jsx)(t.JO, { name: "copy", size: 15 }),
                            "Copy address",
                          ],
                        }),
                        (0, a.jsxs)("a", {
                          href: ""
                            .concat(
                              null === (e = o.v1.blockExplorers) || void 0 === e
                                ? void 0
                                : e.default.url,
                              "/address/"
                            )
                            .concat(s.address),
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, a.jsx)(t.JO, { name: "external", size: 15 }),
                            "View on explorer",
                          ],
                        }),
                        !s.onRightChain &&
                          (0, a.jsxs)("button", {
                            onClick: () => {
                              s.switchChain().catch(() => {}), r(!1);
                            },
                            children: [
                              (0, a.jsx)(t.JO, { name: "refresh", size: 15 }),
                              "Switch to ",
                              o.v1.name,
                            ],
                          }),
                        (0, a.jsxs)("button", {
                          onClick: () => {
                            s.logout(), r(!1);
                          },
                          children: [
                            (0, a.jsx)(t.JO, { name: "logout", size: 15 }),
                            "Disconnect",
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : (0, a.jsx)("button", {
                className: "btn btn-ghost btn-sm",
                disabled: !0,
                children: "Connecting",
              })
          : (0, a.jsx)("button", {
              className: "btn btn-ghost btn-sm",
              disabled: !0,
              children: "Loading",
            });
      }
    },
    93715: function (e, s, n) {
      "use strict";
      n.d(s, {
        P: function () {
          return r;
        },
      });
      var a = n(24250);
      function r(e, s = {}) {
        let {
          key: n = "custom",
          methods: r,
          name: i = "Custom Provider",
          retryDelay: l,
        } = s;
        return ({ retryCount: t }) =>
          (0, a.q)({
            key: n,
            methods: r,
            name: i,
            request: e.request.bind(e),
            retryCount: s.retryCount ?? t,
            retryDelay: l,
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
        return e((e.s = 26551));
      }
    ),
      (_N_E = e.O());
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5118],
  {
    60798: function () {},
    21490: function () {},
    10554: function () {},
    26346: function () {},
    67489: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mw: function () {
          return h;
        },
        O5: function () {
          return v;
        },
        PG: function () {
          return f;
        },
        VW: function () {
          return d;
        },
        gN: function () {
          return p;
        },
        kV: function () {
          return m;
        },
        mx: function () {
          return u;
        },
        pb: function () {
          return y;
        },
        qV: function () {
          return b;
        },
        rs: function () {
          return g;
        },
        yG: function () {
          return w;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(79140),
        s = n(15134),
        l = n(23700);
      let o = (0, i.createContext)(() => {}),
        c = () => (0, i.useContext)(o);
      function d(e) {
        let { children: t } = e,
          [n, r] = (0, i.useState)([]),
          s = (0, i.useCallback)((e) => {
            let t = Date.now() + Math.random();
            r((n) => [...n, { ...e, id: t }]),
              setTimeout(() => r((e) => e.filter((e) => e.id !== t)), 5200);
          }, []);
        return (0, a.jsxs)(o.Provider, {
          value: s,
          children: [
            t,
            (0, a.jsx)("div", {
              className: "toast-wrap",
              role: "status",
              "aria-live": "polite",
              children: n.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "toast ".concat(e.tone || ""),
                    children: [
                      (0, a.jsx)("b", {
                        style: { fontWeight: 600 },
                        children: e.title,
                      }),
                      e.body &&
                        (0, a.jsx)("span", {
                          className: "muted small",
                          children: e.body,
                        }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        });
      }
      function u() {
        let e = (0, s.Os)(),
          t = c(),
          [n, a] = (0, i.useState)(!1);
        return {
          sign: (0, i.useCallback)(
            async (n, i) => {
              if (!e.connected || !e.address) return e.login(), null;
              a(!0);
              try {
                e.onRightChain || (await e.switchChain());
                let a = await e.getProvider(),
                  r = await (0, l.vE)(a, e.address, n, i);
                return (
                  t({
                    title: "Intent signed",
                    body: "Stored in this browser. Nothing was sent or charged.",
                    tone: "ok",
                  }),
                  window.dispatchEvent(new Event("tasq:intents")),
                  r
                );
              } catch (n) {
                let e =
                  n instanceof Error ? n.message.split("\n")[0] : String(n);
                return (
                  t({
                    title: "Not signed",
                    body: e.length > 140 ? e.slice(0, 140) + "…" : e,
                    tone: "bad",
                  }),
                  null
                );
              } finally {
                a(!1);
              }
            },
            [e, t]
          ),
          busy: n,
          connected: e.connected,
        };
      }
      function h() {
        let [e, t] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            let e = () => t((0, l.kc)());
            return (
              e(),
              window.addEventListener("tasq:intents", e),
              window.addEventListener("storage", e),
              () => {
                window.removeEventListener("tasq:intents", e),
                  window.removeEventListener("storage", e);
              }
            );
          }, []),
          e
        );
      }
      function m(e) {
        let { onClick: t, busy: n, label: i, disabled: l } = e,
          o = (0, s.Os)();
        return o.connected
          ? (0, a.jsxs)("button", {
              className: "btn btn-brand btn-block",
              onClick: t,
              disabled: n || l,
              children: [
                (0, a.jsx)(r.JO, { name: "key", size: 16 }),
                n
                  ? "Waiting for signature"
                  : o.onRightChain
                  ? i
                  : "Switch network and ".concat(i.toLowerCase()),
              ],
            })
          : (0, a.jsxs)("button", {
              className: "btn btn-primary btn-block",
              onClick: () => o.login(),
              disabled: !o.ready,
              children: [
                (0, a.jsx)(r.JO, { name: "wallet", size: 16 }),
                "Connect wallet to sign",
              ],
            });
      }
      function p(e) {
        let { label: t, hint: n, help: i, children: r } = e;
        return (0, a.jsxs)("label", {
          className: "field",
          children: [
            (0, a.jsxs)("span", {
              className: "field-label",
              children: [
                t,
                n && (0, a.jsx)("span", { className: "hint", children: n }),
              ],
            }),
            r,
            i && (0, a.jsx)("span", { className: "field-help", children: i }),
          ],
        });
      }
      function f(e) {
        let { options: t, value: n, onChange: i, disabled: r } = e;
        return (0, a.jsx)("div", {
          className: "seg",
          role: "radiogroup",
          children: t.map((e) =>
            (0, a.jsx)(
              "button",
              {
                type: "button",
                role: "radio",
                "aria-checked": e.value === n,
                className: e.value === n ? "on" : "",
                disabled: r || e.disabled,
                onClick: () => i(e.value),
                children: e.label,
              },
              String(e.value)
            )
          ),
        });
      }
      function g(e) {
        let { checked: t, onChange: n, label: i, help: r } = e;
        return (0, a.jsxs)("label", {
          className: "switch",
          children: [
            (0, a.jsx)("input", {
              type: "checkbox",
              checked: t,
              onChange: (e) => n(e.target.checked),
            }),
            (0, a.jsx)("span", { className: "track" }),
            (0, a.jsxs)("span", {
              className: "stack",
              style: { gap: 2 },
              children: [
                (0, a.jsx)("span", {
                  style: { fontSize: 14, fontWeight: 500 },
                  children: i,
                }),
                r &&
                  (0, a.jsx)("span", { className: "field-help", children: r }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { text: t, label: n } = e,
          [s, l] = (0, i.useState)(!1);
        return (0, a.jsx)("button", {
          type: "button",
          className: "copy-btn",
          "aria-label": n || "Copy",
          onClick: () => {
            var e;
            null === (e = navigator.clipboard) ||
              void 0 === e ||
              e
                .writeText(t)
                .then(() => {
                  l(!0), setTimeout(() => l(!1), 1400);
                })
                .catch(() => {});
          },
          children: (0, a.jsx)(r.JO, { name: s ? "check" : "copy", size: 14 }),
        });
      }
      function y(e) {
        let { label: t, value: n } = e;
        return (0, a.jsxs)("div", {
          className: "field",
          children: [
            (0, a.jsxs)("span", {
              className: "field-label",
              children: [t, (0, a.jsx)(v, { text: n })],
            }),
            (0, a.jsx)("div", { className: "hash", children: n }),
          ],
        });
      }
      function w(e) {
        let { eyebrow: t, title: n, desc: i, right: r } = e;
        return (0, a.jsxs)("div", {
          className: "app-page-head",
          children: [
            (0, a.jsxs)("div", {
              className: "stack",
              style: { gap: 8, maxWidth: 680 },
              children: [
                t &&
                  (0, a.jsx)("p", {
                    className: "eyebrow",
                    style: { margin: 0 },
                    children: t,
                  }),
                (0, a.jsx)("h1", { className: "h1", children: n }),
                i && (0, a.jsx)("p", { className: "muted", children: i }),
              ],
            }),
            r,
          ],
        });
      }
      function b(e) {
        let { intent: t } = e;
        return t
          ? (0, a.jsxs)("div", {
              className: "panel",
              style: { borderColor: "rgba(90,209,154,0.3)" },
              children: [
                (0, a.jsxs)("div", {
                  className: "panel-head",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "row",
                      style: { gap: 8, color: "var(--ok)", fontWeight: 500 },
                      children: [
                        (0, a.jsx)(r.JO, { name: "check", size: 16 }),
                        t.kind,
                        " signed",
                      ],
                    }),
                    (0, a.jsx)("span", {
                      className: "tiny faint",
                      children: new Date(t.createdAt).toLocaleTimeString(),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "panel-body",
                  children: [
                    (0, a.jsx)(y, { label: "Signature", value: t.signature }),
                    (0, a.jsxs)("details", {
                      children: [
                        (0, a.jsx)("summary", {
                          className: "small muted",
                          style: { cursor: "pointer" },
                          children: "Signed message",
                        }),
                        (0, a.jsx)("div", {
                          className: "code-block",
                          style: { marginTop: 10 },
                          children: JSON.stringify(
                            t.message,
                            (e, t) => ("bigint" == typeof t ? t.toString() : t),
                            2
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "field-help",
                      children:
                        "Paste this signature into Verify to recover the signer.",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    15134: function (e, t, n) {
      "use strict";
      n.d(t, {
        Os: function () {
          return d;
        },
        jv: function () {
          return p;
        },
        nS: function () {
          return u;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(66513),
        s = n(93917),
        l = n(76418),
        o = n(8530);
      let c = (0, i.createContext)(null);
      function d() {
        let e = (0, i.useContext)(c);
        if (!e) throw Error("useWallet must be used inside WalletProvider");
        return e;
      }
      function u(e) {
        let { children: t } = e;
        return o.Z2
          ? (0, a.jsx)(r.z, {
              appId: o.Z2,
              config: {
                loginMethods: ["wallet"],
                appearance: {
                  theme: "#0b0a12",
                  accentColor: "#8b4dff",
                  logo: "/logo-mark.png",
                  landingHeader: "Sign in to TasQ",
                  showWalletLoginFirst: !0,
                  walletChainType: "ethereum-only",
                },
                defaultChain: o.v1,
                supportedChains: [o.v1],
                embeddedWallets: { ethereum: { createOnLogin: "off" } },
              },
              children: (0, a.jsx)(h, { children: t }),
            })
          : (0, a.jsx)(m, { children: t });
      }
      function h(e) {
        var t, n, r;
        let { children: d } = e,
          {
            ready: u,
            authenticated: h,
            login: m,
            logout: p,
            user: f,
          } = (0, s.u)(),
          { wallets: g, ready: v } = (0, l.u)(),
          y = (0, i.useMemo)(() => {
            var e, t;
            if (!g.length) return;
            let n =
              null == f
                ? void 0
                : null === (t = f.wallet) || void 0 === t
                ? void 0
                : null === (e = t.address) || void 0 === e
                ? void 0
                : e.toLowerCase();
            return g.find((e) => e.address.toLowerCase() === n) || g[0];
          }, [
            g,
            null == f
              ? void 0
              : null === (t = f.wallet) || void 0 === t
              ? void 0
              : t.address,
          ]),
          w = y ? Number(String(y.chainId).split(":").pop()) : void 0,
          b = {
            backend: "privy",
            ready: u && v,
            authenticated: h,
            connected: h && !!y,
            address: null == y ? void 0 : y.address,
            chainId: w,
            walletLabel: y
              ? "privy" === y.walletClientType
                ? "Embedded wallet"
                : (null === (n = y.meta) || void 0 === n ? void 0 : n.name) ||
                  y.walletClientType
              : void 0,
            email:
              null == f
                ? void 0
                : null === (r = f.email) || void 0 === r
                ? void 0
                : r.address,
            onRightChain: w === o.v1.id,
            login: () => m(),
            logout: async () => {
              await p();
            },
            switchChain: async () => {
              y && (await y.switchChain(o.v1.id));
            },
            getProvider: async () => {
              if (!y) throw Error("No wallet connected");
              return await y.getEthereumProvider();
            },
          };
        return (0, a.jsx)(c.Provider, { value: b, children: d });
      }
      function m(e) {
        let { children: t } = e,
          [n, r] = (0, i.useState)(),
          [s, l] = (0, i.useState)(),
          [d, u] = (0, i.useState)(!1),
          h = window.ethereum;
        (0, i.useEffect)(() => {
          var e, t;
          if (!h) {
            u(!0);
            return;
          }
          let n = (e) => r(e[0]),
            a = (e) => l(parseInt(String(e), 16));
          return (
            h
              .request({ method: "eth_accounts" })
              .then((e) => n(e))
              .catch(() => {}),
            h
              .request({ method: "eth_chainId" })
              .then((e) => a(e))
              .catch(() => {})
              .finally(() => u(!0)),
            null === (e = h.on) ||
              void 0 === e ||
              e.call(h, "accountsChanged", n),
            null === (t = h.on) || void 0 === t || t.call(h, "chainChanged", a),
            () => {
              var e, t;
              null === (e = h.removeListener) ||
                void 0 === e ||
                e.call(h, "accountsChanged", n),
                null === (t = h.removeListener) ||
                  void 0 === t ||
                  t.call(h, "chainChanged", a);
            }
          );
        }, [h]);
        let m = (0, i.useCallback)(() => {
            if (!h) {
              window.alert(
                "No browser wallet found. Set NEXT_PUBLIC_PRIVY_APP_ID to enable Privy login."
              );
              return;
            }
            h.request({ method: "eth_requestAccounts" })
              .then((e) => r(e[0]))
              .catch(() => {});
          }, [h]),
          p = (0, i.useCallback)(async () => {
            if (!h) return;
            let e = "0x".concat(o.v1.id.toString(16));
            try {
              await h.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: e }],
              });
            } catch (t) {
              await h.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: e,
                    chainName: o.v1.name,
                    nativeCurrency: o.v1.nativeCurrency,
                    rpcUrls: [...o.v1.rpcUrls.default.http],
                    blockExplorerUrls: [o.v1.blockExplorers.default.url],
                  },
                ],
              });
            }
          }, [h]),
          f = {
            backend: "injected",
            ready: d,
            authenticated: !!n,
            connected: !!n,
            address: n,
            chainId: s,
            walletLabel: "Browser wallet",
            onRightChain: s === o.v1.id,
            login: m,
            logout: async () => {
              r(void 0);
            },
            switchChain: p,
            getProvider: async () => {
              if (!h) throw Error("No browser wallet");
              return h;
            },
          };
        return (0, a.jsx)(c.Provider, { value: f, children: t });
      }
      let p = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        return e ? "".concat(e.slice(0, 2 + t), "…").concat(e.slice(-t)) : "";
      };
    },
    23700: function (e, t, n) {
      "use strict";
      n.d(t, {
        kc: function () {
          return d;
        },
        tf: function () {
          return u;
        },
        vE: function () {
          return o;
        },
        vK: function () {
          return l;
        },
        yK: function () {
          return s;
        },
      });
      var a = n(78790),
        i = n(93715),
        r = n(8530);
      let s = { name: "TasQ", version: "1", chainId: r.v1.id },
        l = {
          RentIntent: [
            { name: "client", type: "address" },
            { name: "offerId", type: "string" },
            { name: "gpuClass", type: "string" },
            { name: "gpuCount", type: "uint16" },
            { name: "mode", type: "string" },
            { name: "confidential", type: "bool" },
            { name: "hours", type: "uint32" },
            { name: "maxPriceMicroUsd", type: "uint64" },
            { name: "nonce", type: "uint64" },
          ],
          NodeRegistration: [
            { name: "operator", type: "address" },
            { name: "ledgerId", type: "bytes32" },
            { name: "gpuClass", type: "string" },
            { name: "gpuCount", type: "uint16" },
            { name: "modes", type: "string" },
            { name: "stakeCredits", type: "uint64" },
            { name: "minPriceMicroUsd", type: "uint64" },
            { name: "nonce", type: "uint64" },
          ],
          WorkloadIntent: [
            { name: "client", type: "address" },
            { name: "image", type: "string" },
            { name: "inputCommitment", type: "bytes32" },
            { name: "units", type: "uint32" },
            { name: "mode", type: "string" },
            { name: "r", type: "uint8" },
            { name: "q", type: "uint8" },
            { name: "auditRateBps", type: "uint16" },
            { name: "declaredValueMicroUsd", type: "uint64" },
            { name: "nonce", type: "uint64" },
          ],
        };
      async function o(e, t, n, o) {
        let u = (0, a.K)({ account: t, chain: r.v1, transport: (0, i.P)(e) }),
          h = {
            account: t,
            domain: s,
            types: { [n]: l[n] },
            primaryType: n,
            message: o,
          },
          m = await u.signTypedData(h),
          p = { kind: n, createdAt: Date.now(), message: o, signature: m };
        return (
          (function (e) {
            try {
              let t = d();
              t.unshift(e),
                localStorage.setItem(
                  c,
                  JSON.stringify(t.slice(0, 50), (e, t) =>
                    "bigint" == typeof t ? t.toString() : t
                  )
                );
            } catch (e) {}
          })(p),
          p
        );
      }
      let c = "tasq.intents.v1";
      function d() {
        try {
          return JSON.parse(localStorage.getItem(c) || "[]");
        } catch (e) {
          return [];
        }
      }
      let u = () =>
        1000n * BigInt(Date.now()) + BigInt(Math.floor(1e3 * Math.random()));
    },
  },
]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4813],
  {
    74813: function (e, n, t) {
      t.r(n),
        t.d(n, {
          AuthenticateWithWalletScreen: function () {
            return C;
          },
          default: function () {
            return C;
          },
        });
      var l = t(57437),
        a = t(2265),
        c = t(81881),
        r = t(60083),
        o = t(80628),
        s = t(65988),
        i = t(36253),
        u = t(56322);
      t(29155), t(97048), t(35819), t(87336);
      let C = {
        component: () => {
          let {
              setWalletConnectionStatus: e,
              closePrivyModal: n,
              inProgressAuthFlowRef: t,
            } = (0, s.u)(),
            { data: C, navigate: p } = (0, i.u)(),
            d = (0, c.a)(),
            W = (0, o.a)(),
            E = C?.externalConnectWallet?.description,
            w = (0, a.useRef)(
              C?.externalConnectWallet?.walletList ?? d.appearance.walletList
            ),
            S = (0, a.useRef)(
              C?.externalConnectWallet?.walletChainType ??
                d.appearance.walletChainType
            ),
            R = w.current,
            f = S.current,
            h = "link" === t.current ? void 0 : () => p("LandingScreen");
          return (0, l.jsx)(u.i, {
            walletList: R,
            walletChainType: f,
            onClose: n,
            onConnect: (0, a.useCallback)(
              ({ connector: n, wallet: t }) => {
                W("connectWallet", "onSuccess", { wallet: t }),
                  e({
                    status: "connected",
                    connectedWallet: t,
                    connector: n,
                    connectError: null,
                    connectRetry: () => null,
                  }),
                  p(
                    "ConnectionStatusScreen",
                    !C?.externalConnectWallet?.preSelectedWalletId
                  );
              },
              [
                e,
                p,
                C?.login?.disableSignup,
                C?.externalConnectWallet?.preSelectedWalletId,
              ]
            ),
            onConnectError: (e) => {
              e instanceof r.b
                ? (console.warn(e.cause ? e.cause : e.message),
                  W(
                    "connectWallet",
                    "onError",
                    e.privyErrorCode || r.a.GENERIC_CONNECT_WALLET_ERROR
                  ))
                : (console.warn(e),
                  W(
                    "connectWallet",
                    "onError",
                    r.a.UNKNOWN_CONNECT_WALLET_ERROR
                  ));
            },
            onBack: h,
            customDescription: E || "",
            preSelectedWalletId: C?.externalConnectWallet?.preSelectedWalletId,
            app: d,
          });
        },
        isUnauthenticatedScreem: !0,
      };
    },
  },
]);

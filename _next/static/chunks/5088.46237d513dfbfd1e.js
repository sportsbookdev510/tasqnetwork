"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5088],
  {
    15088: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ConnectionStatusScreen: function () {
            return A;
          },
          ConnectionStatusView: function () {
            return W;
          },
          default: function () {
            return A;
          },
          getErrorDetails: function () {
            return k;
          },
        });
      var a = n(57437),
        o = n(2265),
        l = n(97048),
        i = n(83129),
        r = n(87398),
        c = n(66513),
        s = n(18401),
        d = n(81881),
        u = n(80771),
        S = n(74267),
        g = n(93610),
        w = n(31669),
        h = n(60083),
        f = n(40893),
        p = n(65988),
        y = n(36253),
        C = n(77090),
        m = n(4206),
        b = n(93375),
        T = n(25104),
        E = n(73890);
      n(87336), n(60798), n(10120), n(29155);
      let _ = (e) => {
          let t = localStorage
            .getItem("-walletlink:https://www.walletlink.org:Addresses")
            ?.split(" ")
            .filter((e) => g.v(e, { strict: !0 }))
            .map((e) => w.K(e));
          return (
            !!t?.length &&
            !!e?.linkedAccounts.filter(
              (e) => "wallet" == e.type && t.includes(e.address)
            ).length
          );
        },
        v = new Set(["phantom"]),
        R = (e) =>
          e && v.has(e.toLowerCase()) ? "transaction" : "offchain-message",
        k = (e) =>
          e?.privyErrorCode === h.a.LINKED_TO_ANOTHER_USER
            ? S.C.ERROR_USER_EXISTS
            : e instanceof S.P && !e.details.default
            ? e.details
            : e instanceof S.b
            ? S.C.ERROR_TIMED_OUT
            : e?.privyErrorCode === h.a.CANNOT_LINK_MORE_OF_TYPE
            ? S.C.ERROR_USER_LIMIT_REACHED
            : S.C.ERROR_WALLET_CONNECTION,
        W = ({
          walletLogo: e,
          title: t,
          subtitle: n,
          signSuccess: o,
          errorMessage: l,
          connectSuccess: i,
          separateConnectAndSign: r,
          signing: c,
          walletConnectRedirectUri: d,
          walletConnectFallbackUniversalUri: g,
          hasTabbedAway: w,
          showCoinbaseWalletResetCta: h,
          numRetries: f,
          onBack: p,
          onSign: y,
          onRetry: C,
          onCoinbaseReset: m,
          onDifferentWallet: b,
        }) => {
          let { t: E } = (0, u.u)(),
            _ = h
              ? { label: "Use a different wallet", onClick: m, disabled: o }
              : l === S.C.ERROR_USER_EXISTS && p
              ? { label: "Use a different wallet", onClick: b }
              : i && !o && r
              ? {
                  label: c ? "Signing" : "Sign with your wallet",
                  onClick: y,
                  disabled: c,
                }
              : !o && l?.retryable && f < 2
              ? { label: "Retry", onClick: C, disabled: !1 }
              : o || l
              ? void 0
              : {
                  label: E("connectionStatus.connecting"),
                  onClick: () => {},
                  disabled: !0,
                };
          return (0, a.jsx)(T.S, {
            title: t,
            subtitle: n,
            icon: e,
            iconVariant: "loading",
            iconLoadingStatus: { success: o, fail: !!l },
            primaryCta: _,
            onBack: p,
            watermark: !0,
            children:
              !i &&
              d &&
              !w &&
              (0, a.jsxs)(L, {
                children: [
                  E("connectionStatus.stillHere"),
                  " ",
                  (0, a.jsx)(s.L, {
                    href: d,
                    target: "_blank",
                    variant: "underlined",
                    size: "sm",
                    children: E("connectionStatus.tryConnectingAgain"),
                  }),
                  g &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        " ",
                        E("connectionStatus.or"),
                        " ",
                        (0, a.jsx)(s.L, {
                          href: g,
                          target: "_blank",
                          variant: "underlined",
                          size: "sm",
                          children: E("connectionStatus.useDifferentLink"),
                        }),
                      ],
                    }),
                ],
              }),
          });
        },
        A = {
          component: () => {
            var e, t;
            let n,
              i,
              [s, g] = (0, o.useState)(!1),
              [w, T] = (0, o.useState)(!1),
              [v, A] = (0, o.useState)(void 0),
              { authenticated: L, logout: x } = (0, d.u)(),
              {
                navigate: O,
                navigateBack: I,
                lastScreen: U,
                currentScreen: N,
                setModalData: j,
                data: M,
              } = (0, y.u)(),
              D = (0, d.a)(),
              { t: B } = (0, u.u)(),
              {
                getAuthFlow: F,
                walletConnectionStatus: q,
                closePrivyModal: H,
                initLoginWithWallet: z,
                loginWithWallet: X,
                updateWallets: K,
                createAnalyticsEvent: P,
              } = (0, p.u)(),
              { walletConnectors: Q } = (0, d.u)(),
              [Y, V] = (0, o.useState)(0),
              { user: J } = (0, d.u)(),
              [$] = (0, o.useState)(J?.linkedAccounts.length || 0),
              [G, Z] = (0, o.useState)(""),
              [ee, et] = (0, o.useState)(""),
              [en, ea] = (0, o.useState)(!1),
              { hasTabbedAway: eo } = (function () {
                let [e, t] = (0, o.useState)(!1),
                  n = (0, o.useCallback)(() => {
                    document.hidden && t(!0);
                  }, []);
                return (
                  (0, o.useEffect)(
                    () => (
                      document.addEventListener("visibilitychange", n),
                      () => document.removeEventListener("visibilitychange", n)
                    ),
                    [n]
                  ),
                  { hasTabbedAway: e, reset: () => t(!1) }
                );
              })(),
              { enabled: el, token: ei } = (0, c.a)(),
              er = (0, f.k)(q?.connector?.walletClientType || "unknown"),
              ec =
                (l.tq && "wallet_connect_v2" === q?.connector?.connectorType) ||
                (l.tq && "coinbase_wallet" === q?.connector?.connectorType) ||
                (l.tq && "base_account" === q?.connector?.connectorType) ||
                (l.tq &&
                  "injected" === q?.connector?.connectorType &&
                  "phantom" === q?.connector?.walletClientType) ||
                (l.tq &&
                  "solana_adapter" === q?.connector?.connectorType &&
                  "mobile_wallet_adapter" === q.connector.walletClientType),
              es = "connected" === q?.status,
              ed = "switching_to_supported_chain" === q?.status;
            (0, o.useEffect)(() => {
              let e = F(),
                t = e instanceof r.S || e instanceof c.S ? e : void 0;
              es &&
              "solana" === q.connector?.chainType &&
              (0, m.g)(b.a) &&
              void 0 === M?.login?.isSigningInWithLedgerSolana
                ? O("ConnectLedgerScreen", !1)
                : (es &&
                    !t &&
                    (!el || ei || L
                      ? z(
                          q.connectedWallet,
                          ei,
                          M?.login?.disableSignup,
                          M?.login?.isSigningInWithLedgerSolana
                            ? R(q.connector?.walletClientType)
                            : "plain"
                        ).then(() => {
                          ea(!0);
                        })
                      : (j({
                          captchaModalData: {
                            callback: (e) =>
                              z(
                                q.connectedWallet,
                                e,
                                M?.login?.disableSignup,
                                M?.login?.isSigningInWithLedgerSolana
                                  ? R(q.connector?.walletClientType)
                                  : "plain"
                              ).then(() => {
                                ea(!0);
                              }),
                            userIntentRequired: !1,
                            onSuccessNavigateTo: "ConnectionStatusScreen",
                            onErrorNavigateTo: "ErrorScreen",
                          },
                        }),
                        O("CaptchaScreen", !1))),
                  t instanceof c.S &&
                    M?.login?.isSigningInWithLedgerSolana &&
                    (t.messageType = R(t.meta.walletClientType)),
                  t && ec && es && !t.preparedMessage
                    ? t.buildMessage()
                    : t &&
                      !ec &&
                      es &&
                      (w ||
                        (async () => {
                          T(!0), A(void 0);
                          try {
                            "wallet_connect_v2" ===
                              q?.connector?.connectorType &&
                              "metamask" === q?.connector?.walletClientType &&
                              (await (0, E.a)(2500)),
                              await eS();
                          } catch (e) {
                            console.warn("Auto-prompted signature failed", e);
                          } finally {
                            T(!1);
                          }
                        })()));
            }, [Y, es, en]),
              (0, o.useEffect)(() => {
                if (J && s) {
                  let e = d.Q - 500;
                  if (D?.legal.requireUsersAcceptTerms && !J.hasAcceptedTerms) {
                    let t = setTimeout(() => {
                      O("AffirmativeConsentScreen");
                    }, e);
                    return () => clearTimeout(t);
                  }
                  if ((0, C.s)(J, D.embeddedWallets)) {
                    let t = setTimeout(() => {
                      j({
                        createWallet: {
                          onSuccess: () => {},
                          onFailure: (e) => {
                            console.error(e),
                              P({
                                eventName:
                                  "embedded_wallet_creation_failure_logout",
                                payload: {
                                  error: e,
                                  screen: "ConnectionStatusScreen",
                                },
                              }),
                              x();
                          },
                          callAuthOnSuccessOnClose: !0,
                        },
                      }),
                        O("EmbeddedWalletOnAccountCreateScreen");
                    }, e);
                    return () => clearTimeout(t);
                  }
                  K();
                  let t = setTimeout(
                    () => H({ shouldCallAuthOnSuccess: !0, isSuccess: !0 }),
                    d.Q
                  );
                  return () => clearTimeout(t);
                }
              }, [J, s]);
            let eu = (e) => {
              if (e?.privyErrorCode !== h.a.ALLOWLIST_REJECTED) {
                if (e?.privyErrorCode === h.a.USER_LIMIT_REACHED)
                  return (
                    console.error(new h.j(e).toString()),
                    void O("UserLimitReachedScreen")
                  );
                if (e?.privyErrorCode !== h.a.USER_DOES_NOT_EXIST)
                  return e?.privyErrorCode === h.a.ACCOUNT_TRANSFER_REQUIRED &&
                    e.data?.data?.nonce
                    ? (j({
                        accountTransfer: {
                          nonce: e.data?.data?.nonce,
                          account: F()?.meta.address,
                          displayName: e.data?.data?.account?.displayName,
                          externalWalletMetadata: {
                            walletClientType: F()?.meta.walletClientType,
                            chainId: F()?.meta.chainId,
                            connectorType: F()?.meta.connectorType,
                          },
                          linkMethod: F() instanceof r.S ? "siwe" : "siws",
                          embeddedWalletAddress:
                            e.data?.data?.otherUser?.embeddedWalletAddress,
                        },
                      }),
                      void O("LinkConflictScreen"))
                    : void A(k(e));
                O("AccountNotFoundScreen");
              } else O("AllowlistRejectionScreen");
            };
            async function eS() {
              try {
                await X(), g(!0);
              } catch (e) {
                eu(e);
              } finally {
                T(!1);
              }
            }
            (0, o.useEffect)(() => {
              q?.connectError && eu(q?.connectError);
            }, [q]),
              (e = () => {
                let e =
                  "wallet_connect_v2" === eg && q?.connector instanceof r.W
                    ? q.connector.redirectUri
                    : void 0;
                e && Z(e);
                let t =
                  "wallet_connect_v2" === eg && q?.connector instanceof r.W
                    ? q.connector.fallbackUniversalRedirectUri
                    : void 0;
                t && et(t);
              }),
              (t = q?.connector instanceof r.W && !G ? 500 : null),
              (n = (0, o.useRef)(() => {})),
              (0, o.useEffect)(() => {
                n.current = e;
              }),
              (0, o.useEffect)(() => {
                if (null !== t) {
                  let e = setInterval(() => n.current(), t || 0);
                  return () => clearInterval(e);
                }
              }, [t]);
            let eg = q?.connector?.connectorType || "injected",
              ew = q?.connector?.walletClientType || "unknown",
              eh =
                er?.metadata?.shortName ||
                er?.name ||
                q?.connector?.walletBranding.name ||
                "Browser Extension",
              ef =
                er?.image_url?.md ||
                q?.connector?.walletBranding.icon ||
                ((e) => (0, a.jsx)(r.B, { ...e })),
              ep = "Browser Extension" === eh ? eh.toLowerCase() : eh;
            i = s
              ? B("connectionStatus.successfullyConnected", { walletName: ep })
              : v
              ? B("connectionStatus.errorTitle", { errorMessage: v.message })
              : ed
              ? "Switching networks"
              : es
              ? w && ec
                ? "Signing"
                : "Sign to verify"
              : `Waiting for ${ep}`;
            let ey = B("connectionStatus.checkOtherWindows");
            s
              ? (ey =
                  $ === (J?.linkedAccounts.length || 0)
                    ? "Wallet was already linked."
                    : "coinbase_wallet" === eg
                    ? B("coinbaseWallet.successSubtitle")
                    : "You're good to go!")
              : Y >= 2 && v
              ? (ey = "Unable to connect wallet")
              : v
              ? (ey = v.detail)
              : ed
              ? (ey = "Switch your wallet to the requested network.")
              : es && ec
              ? (ey =
                  "Sign the message in your wallet to verify it belongs to you.")
              : "metamask" === ew && l.tq
              ? (ey = "Click continue to open and connect MetaMask.")
              : "metamask" === ew
              ? (ey =
                  "For the best experience, connect only one wallet at a time.")
              : "wallet_connect" === eg
              ? (ey = "Open your mobile wallet app to continue")
              : "coinbase_wallet" === eg
              ? (ey = B(
                  _(J)
                    ? "coinbaseWallet.connectingSubtitleReset"
                    : "coinbaseWallet.connectingSubtitle"
                ))
              : M?.login?.isSigningInWithLedgerSolana &&
                (ey =
                  "Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");
            let eC = Q?.walletConnectors?.find(
                (e) => "coinbase_wallet" === e.walletClientType
              ),
              em =
                "coinbase_wallet" === ew &&
                (_(J) || v === S.C.ERROR_USER_EXISTS);
            return (0, a.jsx)(W, {
              walletLogo: ef,
              title: i,
              subtitle: ey,
              signSuccess: s,
              errorMessage: v,
              connectSuccess: es,
              separateConnectAndSign: ec,
              signing: w,
              walletConnectRedirectUri: G,
              walletConnectFallbackUniversalUri: ee,
              hasTabbedAway: eo,
              showCoinbaseWalletResetCta: em,
              numRetries: Y,
              onBack: U && N !== U ? I : void 0,
              onSign: () => {
                T(!0), eS();
              },
              onRetry: () => {
                V(Y + 1), A(void 0), es ? (T(!0), eS()) : q?.connectRetry();
              },
              onCoinbaseReset: () => {
                eC && eC?.disconnect();
              },
              onDifferentWallet: I,
            });
          },
        },
        L = i.zo.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`;
    },
    25104: function (e, t, n) {
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var a = n(57437),
        o = n(26911),
        l = n(35977);
      let i = ({
        primaryCta: e,
        secondaryCta: t,
        helpText: n,
        footerText: i,
        watermark: r = !0,
        children: c,
        ...s
      }) => {
        let d =
          e || t
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  e &&
                    (() => {
                      let { label: t, ...n } = e,
                        l = n.variant || "primary";
                      return (0, a.jsx)(o.B, {
                        ...n,
                        variant: l,
                        style: { width: "100%", ...n.style },
                        children: t,
                      });
                    })(),
                  t &&
                    (() => {
                      let { label: e, ...n } = t,
                        l = n.variant || "secondary";
                      return (0, a.jsx)(o.B, {
                        ...n,
                        variant: l,
                        style: { width: "100%", ...n.style },
                        children: e,
                      });
                    })(),
                ],
              })
            : null;
        return (0, a.jsxs)(l.S, {
          id: s.id,
          className: s.className,
          children: [
            (0, a.jsx)(l.S.Header, { ...s }),
            c ? (0, a.jsx)(l.S.Body, { children: c }) : null,
            n || d || r
              ? (0, a.jsxs)(l.S.Footer, {
                  children: [
                    n ? (0, a.jsx)(l.S.HelpText, { children: n }) : null,
                    d ? (0, a.jsx)(l.S.Actions, { children: d }) : null,
                    r ? (0, a.jsx)(l.S.Watermark, {}) : null,
                  ],
                })
              : null,
            i ? (0, a.jsx)(l.S.FooterText, { children: i }) : null,
          ],
        });
      };
    },
    77090: function (e, t, n) {
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var a = n(66513);
      let o = (e, t) =>
        (0, a.s)(e, t.ethereum.createOnLogin) ||
        (0, a.g)(e, t.solana.createOnLogin);
    },
  },
]);

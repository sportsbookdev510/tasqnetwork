"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8566],
  {
    89345: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(79205).Z)("mail", [
        [
          "path",
          { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" },
        ],
        [
          "rect",
          { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
        ],
      ]);
    },
    33388: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(79205).Z)("smartphone", [
        [
          "rect",
          {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3",
          },
        ],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ]);
    },
    91804: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, a(79205).Z)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
    },
    7361: function (e, t, a) {
      var i = a(2265);
      let r = i.forwardRef(function (e, t) {
        let { title: a, titleId: r, ...l } = e;
        return i.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: t,
              "aria-labelledby": r,
            },
            l
          ),
          a ? i.createElement("title", { id: r }, a) : null,
          i.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33",
          })
        );
      });
      t.Z = r;
    },
    5493: function (e, t, a) {
      a.d(t, {
        C: function () {
          return n;
        },
      });
      var i = a(57437),
        r = a(83129),
        l = a(52266);
      let n = ({ children: e, color: t, isLoading: a, isPulsing: r, ...l }) =>
          (0, i.jsx)(o, {
            $color: t,
            $isLoading: a,
            $isPulsing: r,
            ...l,
            children: e,
          }),
        o = r.zo.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${(e) => {
    let t, a;
    "green" === e.$color &&
      ((t = "var(--privy-color-success-dark)"),
      (a = "var(--privy-color-success-light)")),
      "red" === e.$color &&
        ((t = "var(--privy-color-error)"),
        (a = "var(--privy-color-error-light)")),
      "gray" === e.$color &&
        ((t = "var(--privy-color-foreground-2)"),
        (a = "var(--privy-color-background-2)"));
    let i = (0, r.F4)`
      from, to {
        background-color: ${a};
      }

      50% {
        background-color: rgba(${a}, 0.8);
      }
    `;
    return (0, r.iv)`
      color: ${t};
      background-color: ${a};
      ${
        e.$isPulsing &&
        (0, r.iv)`
        animation: ${i} 3s linear infinite;
      `
      };
    `;
  }}

  ${l.L}
`;
    },
    19784: function (e, t, a) {
      a.d(t, {
        C: function () {
          return x;
        },
      });
      var i = a(57437),
        r = a(89345),
        l = a(2265),
        n = a(83129),
        o = a(81881),
        s = a(66513),
        c = a(65988),
        d = a(36253),
        u = a(9287),
        p = a(73890),
        h = a(26911),
        g = a(5493),
        f = a(7977),
        m = a(70547);
      let x = (0, l.forwardRef)((e, t) => {
          let [a, n] = (0, l.useState)(e.defaultValue || ""),
            [f, x] = (0, l.useState)(""),
            [j, b] = (0, l.useState)(!1),
            { authenticated: k } = (0, o.u)(),
            { initLoginWithEmail: C } = (0, c.u)(),
            {
              navigate: S,
              setModalData: M,
              currentScreen: T,
              data: L,
            } = (0, d.u)(),
            { enabled: E, token: A } = (0, s.a)(),
            [P, N] = (0, l.useState)(!1),
            { accountType: W } = (0, u.h)(),
            V = (0, o.a)(),
            $ =
              (0, p.v)(a) &&
              (V.disablePlusEmails && a.includes("+")
                ? (f || x("Please enter a valid email address without a '+'."),
                  !1)
                : (f && x(""), !0)),
            D = j || !$,
            H = () => {
              D ||
                (M({ login: L?.login, inlineError: void 0 }),
                !E || A || k
                  ? (b(!0),
                    C({
                      email: a,
                      captchaToken: A,
                      disableSignup: L?.login?.disableSignup,
                      withPrivyUi: !0,
                    })
                      .then(() => {
                        S("AwaitingPasswordlessCodeScreen");
                      })
                      .catch((e) => {
                        M({
                          errorModalData: {
                            error: e,
                            previousScreen: T || "LandingScreen",
                          },
                        }),
                          S("ErrorScreen");
                      })
                      .finally(() => {
                        b(!1);
                      }))
                  : (M({
                      captchaModalData: {
                        callback: (e) =>
                          C({ email: a, captchaToken: e, withPrivyUi: !0 }),
                        userIntentRequired: !1,
                        onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen",
                        onErrorNavigateTo: "ErrorScreen",
                      },
                    }),
                    S("CaptchaScreen")));
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(y, {
                children: [
                  f &&
                    (0, i.jsx)(m.E, {
                      style: {
                        display: "block",
                        marginTop: "0.25rem",
                        textAlign: "left",
                      },
                      children: f,
                    }),
                  (0, i.jsxs)(v, {
                    stacked: e.stacked,
                    $error: !!f,
                    children: [
                      (0, i.jsx)(w, { children: (0, i.jsx)(r.Z, {}) }),
                      (0, i.jsx)("input", {
                        ref: t,
                        id: "email-input",
                        className: "login-method-button",
                        type: "email",
                        placeholder: "your@email.com",
                        onFocus: () => N(!0),
                        onChange: (e) => n(e.target.value),
                        onKeyUp: (e) => {
                          "Enter" === e.key && H();
                        },
                        value: a,
                        autoComplete: "email",
                      }),
                      "email" !== W || P
                        ? e.stacked
                          ? (0, i.jsx)("span", {})
                          : (0, i.jsx)(h.E, {
                              isSubmitting: j,
                              onClick: H,
                              disabled: D,
                              children: "Submit",
                            })
                        : (0, i.jsx)(g.C, {
                            color: "gray",
                            children: "Recent",
                          }),
                    ],
                  }),
                ],
              }),
              e.stacked
                ? (0, i.jsx)(h.P, {
                    loadingText: null,
                    loading: j,
                    disabled: D,
                    onClick: H,
                    style: { width: "100%" },
                    children: "Submit",
                  })
                : null,
            ],
          });
        }),
        y = f.I,
        v = f.a,
        w = (0, n.zo)(u.m)`
  display: inline-flex;
`;
    },
    82270: function (e, t, a) {
      a.d(t, {
        C: function () {
          return h;
        },
      });
      var i = a(57437),
        r = a(2265),
        l = a(83129),
        n = a(56743),
        o = a(19368),
        s = a(81881),
        c = a(9287),
        d = a(26911),
        u = a(5493);
      let p = ({ value: e, onChange: t }) =>
          (0, i.jsx)("select", {
            value: e,
            onChange: t,
            children: n.s5.map((e) =>
              (0, i.jsxs)(
                "option",
                { value: e.code, children: [e.code, " +", e.callCode] },
                e.code
              )
            ),
          }),
        h = (0, r.forwardRef)((e, t) => {
          let a = (0, s.a)(),
            [l, h] = (0, r.useState)(!1),
            { accountType: m } = (0, c.h)(),
            [x, y] = (0, r.useState)(""),
            [v, w] = (0, r.useState)(
              e.defaultCountry ?? a?.intl.defaultCountry ?? "US"
            ),
            j = (0, n.Y0)(x, v),
            b = (0, n.KX)(v),
            k = (0, n.g6)(v),
            C = (0, o.G)(v),
            S = !j,
            [M, T] = (0, r.useState)(!1),
            L = C.length,
            E = (t) => {
              let a = t.target.value;
              w(a),
                y(""),
                e.onChange &&
                  e.onChange({
                    rawPhoneNumber: x,
                    qualifiedPhoneNumber: (0, n.un)(x, a),
                    countryCode: a,
                    isValid: (0, n.Y0)(x, v),
                  });
            },
            A = (t, a) => {
              try {
                let i =
                  t.replace(/\D/g, "") === x.replace(/\D/g, "")
                    ? t
                    : b.input(t);
                y(i),
                  e.onChange &&
                    e.onChange({
                      rawPhoneNumber: i,
                      qualifiedPhoneNumber: (0, n.un)(t, a),
                      countryCode: a,
                      isValid: (0, n.Y0)(t, a),
                    });
              } catch (e) {
                console.error("Error processing phone number:", e);
              }
            },
            P = () => {
              T(!0);
              let t = (0, n.un)(x, v);
              e.onSubmit({
                rawPhoneNumber: x,
                qualifiedPhoneNumber: t,
                countryCode: v,
                isValid: (0, n.Y0)(x, v),
              }).finally(() => T(!1));
            };
          return (
            (0, r.useEffect)(() => {
              if (e.defaultValue) {
                let t = (0, n.IS)(e.defaultValue);
                b.reset(),
                  E({ target: { value: t.countryCode } }),
                  A(t.phone, t.countryCode);
              }
            }, [e.defaultValue]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(g, {
                  children: (0, i.jsxs)(f, {
                    $callingCodeLength: L,
                    $stacked: e.stacked,
                    children: [
                      (0, i.jsx)(p, { value: v, onChange: E }),
                      (0, i.jsx)("input", {
                        ref: t,
                        id: "phone-number-input",
                        className: "login-method-button",
                        type: "tel",
                        placeholder: k,
                        onFocus: () => h(!0),
                        onChange: (e) => {
                          A(e.target.value, v);
                        },
                        onKeyUp: (e) => {
                          "Enter" === e.key && P();
                        },
                        value: x,
                        autoComplete: "tel",
                      }),
                      "phone" !== m || l || e.hideRecent
                        ? e.stacked || e.noIncludeSubmitButton
                          ? (0, i.jsx)("span", {})
                          : (0, i.jsx)(d.E, {
                              isSubmitting: M,
                              onClick: P,
                              disabled: S,
                              children: "Submit",
                            })
                        : (0, i.jsx)(u.C, {
                            color: "gray",
                            children: "Recent",
                          }),
                    ],
                  }),
                }),
                e.stacked && !e.noIncludeSubmitButton
                  ? (0, i.jsx)(d.P, {
                      loading: M,
                      loadingText: null,
                      onClick: P,
                      disabled: S,
                      children: "Submit",
                    })
                  : null,
              ],
            })
          );
        }),
        g = l.zo.div`
  width: 100%;
`,
        f = l.zo.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${(e) =>
    e.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${(e) =>
    e.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${(e) =>
      e.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${(e) => (e.$stacked ? "16px" : "88px")};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;
    },
    28566: function (e, t, a) {
      a.d(t, {
        C: function () {
          return el;
        },
        L: function () {
          return J;
        },
      });
      var i = a(57437),
        r = a(2265);
      let l = r.forwardRef(function (e, t) {
        let { title: a, titleId: i, ...l } = e;
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: t,
              "aria-labelledby": i,
            },
            l
          ),
          a ? r.createElement("title", { id: i }, a) : null,
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
          })
        );
      });
      var n = a(83129),
        o = a(29873),
        s = a(26911),
        c = a(81881),
        d = a(40893),
        u = a(65988),
        p = a(36253),
        h = a(66513),
        g = a(56322),
        f = a(9287),
        m = a(73890),
        x = a(3873),
        y = a(93917),
        v = a(89345),
        w = a(33388);
      let j = (0, a(79205).Z)("circle-user", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
        [
          "path",
          {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
            key: "154egf",
          },
        ],
      ]);
      var b = a(19784),
        k = a(5493),
        C = a(48684),
        S = a(56743),
        M = a(23167),
        T = a(7361),
        L = a(18401),
        E = a(82270),
        A = a(50233),
        P = a(2324),
        N = a(24942),
        W = a(74577),
        V = a(25104);
      let $ = () => {
          let e = (0, c.a)(),
            t = e?.appearance?.logo,
            a = `${e?.name} logo`,
            l = { maxHeight: "90px", maxWidth: "180px" };
          return t
            ? "string" == typeof t
              ? (0, i.jsx)("img", { src: t, alt: a, style: l })
              : "svg" === t.type || "img" === t.type
              ? r.cloneElement(t, { alt: a, style: l })
              : (console.warn(
                  "`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."
                ),
                null)
            : null;
        },
        D = n.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`,
        H = ({ name: e, logoUrl: t, size: a = "38px" }) =>
          "string" == typeof t
            ? (0, i.jsx)("img", {
                src: t,
                alt: `${e ?? "Provider app"} logo`,
                style: {
                  width: a,
                  height: a,
                  maxHeight: "90px",
                  maxWidth: "180px",
                  borderRadius: "8px",
                },
              })
            : (0, i.jsx)("span", {}),
        I = ({ appId: e }) => {
          let [t, a] = (0, r.useState)(void 0),
            { startCrossAppAuthFlow: l } = (0, y.d)(),
            { authenticated: n } = (0, c.u)(),
            { data: o } = (0, p.u)(),
            { client: s } = (0, u.u)();
          return (
            (0, r.useEffect)(() => {
              (async () => {
                s && a(await s.getCrossAppProviderDetails(e));
              })();
            }, [s]),
            (0, i.jsx)(f.L, {
              onClick: () =>
                l({
                  appId: e,
                  action: n ? "link" : "login",
                  disableSignup: o?.login?.disableSignup,
                }),
              disabled: !t,
              children: t
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(f.m, {
                        $fullSize: !0,
                        children: (0, i.jsx)(H, {
                          name: t.name,
                          logoUrl: t.icon_url || void 0,
                          size: "32px",
                        }),
                      }),
                      t.name,
                    ],
                  })
                : (0, i.jsx)(x.B, {}),
            })
          );
        },
        z = ({ isEditable: e, setIsEditable: t, defaultValue: a }) => {
          let l = (0, r.useRef)(null);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(f.H, {
                $if: !e,
                children: (0, i.jsx)(b.C, { ref: l, defaultValue: a }),
              }),
              (0, i.jsx)(f.H, {
                $if: e,
                children: (0, i.jsxs)(f.L, {
                  onClick: () => {
                    t(),
                      setTimeout(() => {
                        l.current?.focus();
                      }, 0);
                  },
                  children: [
                    (0, i.jsx)(f.m, { children: (0, i.jsx)(v.Z, {}) }),
                    "Continue with Email",
                  ],
                }),
              }),
            ],
          });
        },
        F = () => {
          let [e, t] = (0, r.useState)(!1),
            {
              currentScreen: a,
              navigate: l,
              setModalData: n,
              data: o,
            } = (0, p.u)(),
            { enabled: s, token: c } = (0, h.a)(),
            { initLoginWithFarcaster: d } = (0, u.u)(),
            { accountType: g } = (0, f.h)();
          return (0, i.jsxs)(f.L, {
            onClick: async () => {
              t(!0);
              try {
                s && !c
                  ? (n({
                      captchaModalData: {
                        callback: (e) => d(e, o?.login?.disableSignup),
                        userIntentRequired: !0,
                        onSuccessNavigateTo: "FarcasterConnectStatusScreen",
                        onErrorNavigateTo: "ErrorScreen",
                      },
                    }),
                    l("CaptchaScreen"))
                  : (await d(c, o?.login?.disableSignup),
                    l("FarcasterConnectStatusScreen"));
              } catch (e) {
                n({
                  errorModalData: {
                    error: e,
                    previousScreen: a || "LandingScreen",
                  },
                }),
                  l("ErrorScreen");
              } finally {
                t(!1);
              }
            },
            disabled: !1,
            children: [
              (0, i.jsx)(C.F, { width: 32, height: 32 }),
              " Farcaster",
              e && (0, i.jsx)(x.B, {}),
              "farcaster" === g &&
                (0, i.jsx)(R, { color: "gray", children: "Recent" }),
            ],
          });
        },
        R = (0, n.zo)(k.C)`
  margin-left: auto;
`,
        O = ({ ...e }) =>
          (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            ...e,
            children: [
              (0, i.jsxs)("g", {
                clipPath: "url(#clip0_2856_1743)",
                children: [
                  (0, i.jsx)("path", {
                    d: "M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, i.jsx)("path", {
                    d: "M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
              (0, i.jsx)("defs", {
                children: (0, i.jsx)("clipPath", {
                  id: "clip0_2856_1743",
                  children: (0, i.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "24",
                    height: "24",
                    rx: "6",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        _ = ({ chainType: e, withPadding: t }) => {
          let a = "";
          return (
            (a =
              "ethereum-only" === e || "ethereum-and-solana" === e
                ? "Rainbow, Phantom, or Coinbase Wallet"
                : "Phantom or Solflare"),
            (0, i.jsx)(
              f.E,
              {
                $withPadding: t,
                children: (0, i.jsxs)(f.n, {
                  children: [
                    (0, i.jsx)(M.Z, {
                      style: {
                        color: "var(--privy-color-warn)",
                        height: 48,
                        width: 48,
                      },
                    }),
                    (0, i.jsx)("h3", { children: "No wallets available" }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Please download an external wallet provider, like ",
                        a,
                        ".",
                      ],
                    }),
                  ],
                }),
              },
              "empty-wallet-state"
            )
          );
        },
        Z = () => {
          let { enabled: e, token: t } = (0, h.a)(),
            { navigate: a, setModalData: l, data: n } = (0, p.u)(),
            o = (0, c.a)(),
            { initLoginWithPasskey: s } = (0, u.u)(),
            d = () => {
              o.loginConfig.passkeysForSignupEnabled
                ? a("PasskeySelectSignupOrLogin")
                : (async () => {
                    e && !t
                      ? (l({
                          passkeyAuthModalData: { passkeySignupFlow: !1 },
                          captchaModalData: {
                            callback: (e) =>
                              s({ captchaToken: e, withPrivyUi: !0 }),
                            userIntentRequired: !1,
                            onSuccessNavigateTo: "PasskeyStatusScreen",
                            onErrorNavigateTo: "ErrorScreen",
                          },
                        }),
                        a("CaptchaScreen"))
                      : (await s({ withPrivyUi: !0, captchaToken: t }),
                        l({ passkeyAuthModalData: { passkeySignupFlow: !1 } }),
                        a("PasskeyStatusScreen"));
                  })();
            };
          return 0 ===
            (0, r.useMemo)(() => {
              let e = n?.login?.loginMethods;
              return e
                ? e.filter((e) => "passkey" !== e).length
                : Object.entries(o.loginMethods)
                    .filter(([e, t]) => t)
                    .filter(([e]) => "passkey" !== e).length;
            }, [o.loginMethods, n?.login])
            ? (0, i.jsxs)(f.L, {
                onClick: d,
                children: [(0, i.jsx)(T.Z, {}), " Continue with passkey"],
              })
            : (0, i.jsx)(L.L, {
                as: "button",
                onClick: d,
                size: "sm",
                variant: "navigation",
                style: { width: "100%", justifyContent: "center" },
                children: "I have a passkey",
              });
        },
        U = ({ isEditable: e, setIsEditable: t, defaultValue: a }) => {
          let l = (0, r.useRef)(null),
            { authenticated: n } = (0, c.u)(),
            {
              navigate: o,
              setModalData: s,
              currentScreen: d,
              data: g,
            } = (0, p.u)(),
            { initLoginWithSms: m } = (0, u.u)(),
            { enabled: x, token: y } = (0, h.a)(),
            { whatsAppEnabled: v } = (0, c.a)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(f.H, {
                $if: !e,
                children: (0, i.jsx)(E.C, {
                  ref: l,
                  onSubmit: async function ({ qualifiedPhoneNumber: e }) {
                    if (!x || y || n)
                      try {
                        await m({
                          phoneNumber: e,
                          captchaToken: y,
                          withPrivyUi: !0,
                          disableSignup: g?.login?.disableSignup,
                        }),
                          o("AwaitingPasswordlessCodeScreen");
                      } catch (e) {
                        s({
                          errorModalData: {
                            error: e,
                            previousScreen: d || "LandingScreen",
                          },
                        }),
                          o("ErrorScreen");
                      }
                    else
                      s({
                        captchaModalData: {
                          callback: (t) =>
                            m({
                              phoneNumber: e,
                              captchaToken: t,
                              withPrivyUi: !0,
                              disableSignup: g?.login?.disableSignup,
                            }),
                          userIntentRequired: !1,
                          onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen",
                          onErrorNavigateTo: "ErrorScreen",
                        },
                      }),
                        o("CaptchaScreen");
                  },
                  defaultValue: a,
                }),
              }),
              (0, i.jsx)(f.H, {
                $if: e,
                children: (0, i.jsxs)(f.L, {
                  onClick: () => {
                    t(),
                      setTimeout(() => {
                        l.current?.focus();
                      }, 0);
                  },
                  children: [
                    (0, i.jsx)(f.m, { children: (0, i.jsx)(w.Z, {}) }),
                    "Continue with ",
                    v ? "WhatsApp" : "SMS",
                  ],
                }),
              }),
            ],
          });
        },
        q = {
          apple: { logo: A.A, displayName: "Apple" },
          discord: { logo: A.D, displayName: "Discord" },
          github: { logo: A.b, displayName: "GitHub" },
          google: { logo: A.G, displayName: "Google" },
          linkedin: { logo: A.L, displayName: "LinkedIn" },
          spotify: { logo: A.S, displayName: "Spotify" },
          instagram: { logo: A.I, displayName: "Instagram" },
          telegram: { logo: N.T, displayName: "Telegram" },
          twitter: { logo: A.a, displayName: "Twitter" },
          tiktok: { logo: A.T, displayName: "TikTok" },
          line: { logo: P.L, displayName: "LINE" },
          twitch: { logo: P.T, displayName: "Twitch" },
        },
        B = ({ provider: e }) => {
          let { enabled: t, token: a } = (0, h.a)(),
            {
              currentScreen: l,
              navigate: n,
              setModalData: o,
              data: s,
            } = (0, p.u)(),
            [d, g] = (0, r.useState)(!1),
            m = (0, c.a)(),
            { initLoginWithOAuth: x } = (0, u.u)(),
            { accountType: y } = (0, f.h)(),
            v = (0, r.useMemo)(
              () =>
                y &&
                "guest" !== y &&
                "authorization_key" !== y &&
                "cross_app" !== y
                  ? (0, h.t)(y)
                  : null,
              [y]
            ),
            { displayName: w, logo: j } = (0, r.useMemo)(() => {
              if ((0, c.i)(e)) {
                let t = m.customOAuthProviders.find((t) => t.provider === e),
                  a = t.provider_icon_url,
                  r = t.provider_display_name;
                return {
                  displayName: r,
                  logo: ({ style: e }) =>
                    (0, i.jsx)("img", { alt: `${r} logo`, src: a, style: e }),
                };
              }
              return q[e];
            }, [e, m.customOAuthProviders]);
          return (0, i.jsxs)(f.L, {
            onClick: () => {
              g(!0),
                setTimeout(() => {
                  g(!1);
                }, 2e3),
                t && !a
                  ? (o({
                      captchaModalData: {
                        callback: (t) => x(e, t, s?.login?.disableSignup),
                        userIntentRequired: !0,
                        onSuccessNavigateTo: null,
                        onErrorNavigateTo: "ErrorScreen",
                      },
                    }),
                    n("CaptchaScreen"))
                  : x(e, void 0, s?.login?.disableSignup).catch((e) => {
                      g(!1),
                        o({
                          errorModalData: {
                            error: e,
                            previousScreen: l || "LandingScreen",
                          },
                        }),
                        n("ErrorScreen");
                    });
            },
            disabled: d,
            children: [
              (0, i.jsx)(f.m, {
                $fullSize: !0,
                children: (0, i.jsx)(j, {
                  style: { width: "32px", height: "32px" },
                }),
              }),
              w,
              v?.loginMethod === e &&
                (0, i.jsx)(G, { color: "gray", children: "Recent" }),
            ],
          });
        },
        G = (0, n.zo)(k.C)`
  margin-left: auto;
`,
        K = () => {
          let { enabled: e, token: t } = (0, h.a)(),
            { navigate: a, setModalData: l, data: n } = (0, p.u)(),
            [o, s] = (0, r.useState)(!1),
            { initLoginWithTelegram: c } = (0, u.u)(),
            { accountType: d } = (0, f.h)();
          async function g(e) {
            try {
              await c(e, n?.login?.disableSignup),
                l({ telegramAuthModalData: { seamlessAuth: !1 } }),
                a("TelegramAuthScreen");
            } catch (e) {
              console.error(e), s(!1);
            }
          }
          return (0, i.jsxs)(f.L, {
            onClick: async function () {
              if ((s(!0), e && !t))
                return (
                  l({
                    captchaModalData: {
                      callback: g,
                      userIntentRequired: !0,
                      onSuccessNavigateTo: null,
                      onErrorNavigateTo: "ErrorScreen",
                    },
                  }),
                  void a("CaptchaScreen")
                );
              await g(t);
            },
            disabled: o,
            children: [
              (0, i.jsx)(N.T, { width: 32, height: 32 }),
              "Telegram",
              "telegram" === d &&
                (0, i.jsx)(Y, { color: "gray", children: "Recent" }),
            ],
          });
        },
        Y = (0, n.zo)(k.C)`
  margin-left: auto;
`,
        X = ({ onClick: e, text: t, icon: a }) =>
          (0, i.jsxs)(f.L, {
            onClick: e,
            children: [
              (0, i.jsx)(f.m, { children: a }),
              (0, i.jsx)(f.G, { children: t }),
            ],
          }),
        J = ({ connectOnly: e }) => {
          let { closePrivyModal: t } = (0, u.u)(),
            {
              data: a,
              setModalData: l,
              onUserCloseViaDialogOrKeybindRef: n,
              navigate: s,
            } = (0, p.u)(),
            m = (0, c.a)(),
            x = a?.login,
            y = m.appearance.walletList,
            v = x?.walletChainType ?? m.appearance.walletChainType,
            { accountType: w, walletClientType: j, chainType: b } = (0, f.h)(),
            k = (0, r.useMemo)(
              () =>
                w &&
                "guest" !== w &&
                "authorization_key" !== w &&
                "cross_app" !== w
                  ? (0, h.t)(w)
                  : null,
              [w]
            ),
            {
              email: C,
              sms: M,
              google: T,
              twitter: L,
              discord: E,
              github: A,
              spotify: P,
              instagram: N,
              tiktok: D,
              line: H,
              twitch: R,
              linkedin: O,
              apple: q,
              wallet: G,
              farcaster: Y,
              telegram: J,
            } = (0, r.useMemo)(
              () => (x?.loginMethods ? (0, S.Wx)(x.loginMethods, !0) : null),
              [x]
            ) ?? m.loginMethods,
            { wallets: el } = (0, g.u)({
              enabled: (0, d.s)(G ? y : []),
              walletList: y,
              walletChainType: v,
            }),
            en = m.customOAuthProviders,
            eo = m.crossAppProviders,
            { passkey: es } = m.loginMethods,
            ec = [
              C && "email",
              M && "sms",
              T && "google",
              L && "twitter",
              E && "discord",
              A && "github",
              P && "spotify",
              N && "instagram",
              D && "tiktok",
              H && "line",
              R && "twitch",
              O && "linkedin",
              q && "apple",
              Y && "farcaster",
              J && "telegram",
              ...en.map((e) => e.provider),
              ...eo,
            ].filter((e) => !!e),
            ed = ec.length > 0,
            eu = (0, r.useMemo)(
              () =>
                G && !ed
                  ? "web3-first"
                  : (G && m?.appearance.loginGroupPriority) || "web2-first",
              [G, ed, m?.appearance.loginGroupPriority]
            ),
            ep = m?.appearance.hideDirectWeb2Inputs,
            [eh, eg] = (0, r.useState)("default"),
            [ef, em] = (0, r.useState)(
              er({
                mostRecentlyUsedAccountType: w,
                smsAvailable: M,
                emailAvailable: C,
                prefilledType: x?.prefill?.type,
              })
            );
          (0, r.useEffect)(() => {
            em(
              er({
                mostRecentlyUsedAccountType: w,
                smsAvailable: M,
                emailAvailable: C,
                prefilledType: x?.prefill?.type,
              })
            );
          }, [C, M, w]);
          let ex = () => {
            t({ shouldCallAuthOnSuccess: !0 }),
              setTimeout(() => {
                eg("default");
              }, 150);
          };
          n.current = ex;
          let ey = [];
          j && G
            ? ey.push(j)
            : k?.loginMethod &&
              ec.includes(k.loginMethod) &&
              ey.push(k.loginMethod);
          let ev = (t) => {
              if ("email" === t)
                return (0, i.jsx)(
                  z,
                  {
                    isEditable: "email" === ef,
                    setIsEditable: () => {
                      em("email");
                    },
                    defaultValue:
                      "email" === x?.prefill?.type ? x.prefill.value : void 0,
                  },
                  t
                );
              if ("sms" === t)
                return (0, i.jsx)(
                  U,
                  {
                    isEditable: "sms" === ef,
                    setIsEditable: () => {
                      em("sms");
                    },
                    defaultValue:
                      "phone" === x?.prefill?.type ? x.prefill.value : void 0,
                  },
                  t
                );
              if ("apple" === t) return (0, i.jsx)(B, { provider: "apple" }, t);
              if ("discord" === t)
                return (0, i.jsx)(B, { provider: "discord" }, t);
              if ("farcaster" === t) return (0, i.jsx)(F, {}, t);
              if ("github" === t)
                return (0, i.jsx)(B, { provider: "github" }, t);
              if ("google" === t)
                return (0, i.jsx)(B, { provider: "google" }, t);
              if ("linkedin" === t)
                return (0, i.jsx)(B, { provider: "linkedin" }, t);
              if ("tiktok" === t)
                return (0, i.jsx)(B, { provider: "tiktok" }, t);
              if ("line" === t) return (0, i.jsx)(B, { provider: "line" }, t);
              if ("twitch" === t)
                return (0, i.jsx)(B, { provider: "twitch" }, t);
              if ("spotify" === t)
                return (0, i.jsx)(B, { provider: "spotify" }, t);
              if ("instagram" === t)
                return (0, i.jsx)(B, { provider: "instagram" }, t);
              if ("twitter" === t)
                return (0, i.jsx)(B, { provider: "twitter" }, t);
              if ("telegram" === t)
                return m.loginConfig.telegramHasHmacCredentials
                  ? (0, i.jsx)(K, {}, t)
                  : (0, i.jsx)(B, { provider: "telegram" }, t);
              if ((0, c.i)(t)) return (0, i.jsx)(B, { provider: t }, t);
              if (t.startsWith("privy:")) {
                let e = t.split(":")[1];
                if (!e)
                  throw Error(
                    "Invalid cross-app provider format. App ID missing."
                  );
                return (0, i.jsx)(I, { appId: e }, t);
              }
              let a = el.findIndex(({ id: e }) => e === g.W.normalize(t)),
                r = "solana" === b ? "solana-only" : "ethereum-only";
              return (0, i.jsx)(g.a, {
                recent: !0,
                index: a,
                data: {
                  wallets: el,
                  walletChainType: r,
                  handleWalletClick(t) {
                    l((e) => ({
                      ...e,
                      externalConnectWallet: {
                        walletList: y,
                        walletChainType: r,
                        preSelectedWalletId: t.id,
                      },
                    })),
                      s(
                        e
                          ? "ConnectOnlyLandingScreen"
                          : "AuthenticateWithWalletScreen"
                      );
                  },
                },
              });
            },
            ew = el.filter((e) => e.id !== g.W.normalize(j || "")),
            ej = ew.map((t, a) =>
              (0, i.jsx)(
                g.a,
                {
                  index: a,
                  data: {
                    walletChainType: v,
                    wallets: ew,
                    handleWalletClick(t) {
                      l((e) => ({
                        ...e,
                        externalConnectWallet: {
                          walletList: y,
                          walletChainType: v,
                          preSelectedWalletId: t.id,
                        },
                      })),
                        s(
                          e
                            ? "ConnectOnlyLandingScreen"
                            : "AuthenticateWithWalletScreen"
                        );
                    },
                  },
                },
                t.id
              )
            ),
            eb = ec.filter((e) => e !== k?.loginMethod).flatMap(ev),
            ek = ey.flatMap(ev);
          "web3-first" === eu && "default" === eh
            ? ej.unshift(...ek)
            : "web2-first" === eu && eb.unshift(...ek);
          let eC = "web2-overflow" === eh ? () => eg("default") : void 0,
            eS = ec.filter((e) => "email" !== e && "sms" !== e),
            eM = et({ priority: eu, email: C, sms: M, social: eS }),
            eT = ea({ priority: eu, email: C, sms: M, social: eS }),
            eL = (0, i.jsx)(W.W, {
              text: ei({ priority: eu }),
              onClick: () => {
                l({
                  ...a,
                  externalConnectWallet: {
                    walletChainType:
                      x?.walletChainType ?? m.appearance.walletChainType,
                  },
                }),
                  s(
                    e
                      ? "ConnectOnlyLandingScreen"
                      : "AuthenticateWithWalletScreen"
                  );
              },
            }),
            eE = (0, i.jsx)(X, {
              text: eM,
              icon: eT,
              onClick: () => eg("web2-overflow"),
            }),
            eA = ep ? 0 : 1,
            eP = G && ej.length > 0,
            eN = 0 === eb.length && G && 0 === ej.length,
            eW = 5 - (eP ? 1 : 0),
            eV = "default" === eh && m?.appearance.logo,
            e$ = "default" === eh && m.appearance.loginMessage;
          return (0, i.jsxs)(V.S, {
            title: m.appearance.landingHeader,
            icon: eV ? (0, i.jsx)($, {}) : void 0,
            iconVariant: eV ? "logo" : void 0,
            onClose: ex,
            showClose: !0,
            onBack: eC,
            showBack: !!eC,
            helpText:
              m || (es && "default" === eh)
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      es &&
                        "default" === eh &&
                        !m.globalDisablePasskeys &&
                        (0, i.jsx)(Z, {}),
                      m && (0, i.jsx)(o.T, { app: m }),
                    ],
                  })
                : void 0,
            watermark: !0,
            children: [
              e$ &&
                ("string" == typeof m.appearance.loginMessage
                  ? (0, i.jsx)(Q, { children: m.appearance.loginMessage })
                  : (0, i.jsx)(ee, { children: m.appearance.loginMessage })),
              (0, i.jsx)(f.o, {
                $colorScheme: m.appearance.palette.colorScheme,
                children:
                  "default" === eh && "web2-first" === eu
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          eb.length > eW ? eb.slice(0, eW - 1) : eb,
                          eb.length > eW && eE,
                          eP && eL,
                          eN &&
                            (0, i.jsx)(_, {
                              chainType: m.appearance.walletChainType,
                            }),
                        ],
                      })
                    : "default" === eh && "web3-first" === eu
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          G &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                ej.length > eW ? ej.slice(0, eW - 1) : ej,
                                ej.length > eW && eL,
                              ],
                            }),
                          eb.length > eA && eE,
                          eb.length === eA && eb[0],
                          eN &&
                            (0, i.jsx)(_, {
                              chainType: m.appearance.walletChainType,
                            }),
                        ],
                      })
                    : "web2-overflow" === eh
                    ? (0, i.jsx)(i.Fragment, {
                        children: "web3-first" === eu ? eb : eb.slice(3),
                      })
                    : null,
              }),
            ],
          });
        },
        Q = n.zo.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,
        ee = n.zo.div`
  margin-bottom: 24px;
`,
        et = ({ priority: e, email: t, sms: a, social: i }) =>
          "web2-first" === e
            ? "Other socials"
            : (t && a && i.length > 0) || (t && i.length > 0)
            ? "Log in with email or socials"
            : a && i.length > 0
            ? "Log in with sms or socials"
            : t && a
            ? "Continue with email or sms"
            : t
            ? "Continue with email"
            : a
            ? "Continue with sms"
            : "Log in with a social account",
        ea = ({ priority: e, email: t, sms: a, social: r }) =>
          "web2-first" === e || r.length > 0
            ? (0, i.jsx)(j, {})
            : t && a
            ? (0, i.jsx)(O, {})
            : t
            ? (0, i.jsx)(v.Z, {})
            : a
            ? (0, i.jsx)(w.Z, {})
            : null,
        ei = ({ priority: e }) =>
          "web2-first" === e ? "Continue with a wallet" : "Other wallets",
        er = ({
          mostRecentlyUsedAccountType: e,
          smsAvailable: t,
          emailAvailable: a,
          prefilledType: i,
        }) =>
          (a && (("email" === e && "phone" !== i) || "email" === i)) ||
          !t ||
          ("phone" !== e && "phone" !== i)
            ? "email"
            : "sms",
        el = ({ connectOnly: e }) => {
          let { closePrivyModal: t, connectors: a } = (0, u.u)(),
            {
              data: n,
              setModalData: x,
              onUserCloseViaDialogOrKeybindRef: y,
              navigate: v,
            } = (0, p.u)(),
            w = (0, c.a)(),
            j = w.appearance.palette.colorScheme,
            { accountType: b, walletClientType: k } = (0, f.h)(),
            C = (0, r.useMemo)(
              () =>
                b &&
                "guest" !== b &&
                "authorization_key" !== b &&
                "cross_app" !== b
                  ? (0, h.t)(b)
                  : null,
              [b]
            ),
            S = w.loginMethodsAndOrder?.primary ?? [],
            M = w.loginMethodsAndOrder?.overflow ?? [],
            T = (0, r.useMemo)(() => [...S, ...M], [S, M]),
            L = w.loginMethods.passkey,
            E = n?.login,
            A = [];
          k && T.includes(k)
            ? A.push(k)
            : b && T.includes(C?.loginMethod) && A.push(C?.loginMethod);
          let [P, N] = (0, r.useState)("default"),
            [W, V] = (0, r.useState)(
              er({
                mostRecentlyUsedAccountType: b,
                smsAvailable: T.includes("sms"),
                emailAvailable: T.includes("email"),
                prefilledType: E?.prefill?.type,
              })
            );
          (0, r.useEffect)(() => {
            V(
              er({
                mostRecentlyUsedAccountType: b,
                smsAvailable: T.includes("sms"),
                emailAvailable: T.includes("email"),
                prefilledType: E?.prefill?.type,
              })
            );
          }, [T, b]),
            (0, r.useEffect)(() => {
              "phone" === b && V("sms");
              let e = T.indexOf("sms"),
                t = T.indexOf("email");
              e > -1 && e < t && V("sms");
            }, [b, S, M]);
          let $ = () => {
            t({ shouldCallAuthOnSuccess: !0 }),
              setTimeout(() => {
                N("default");
              }, 150);
          };
          y.current = $;
          let { listings: D } = (0, d.u)(),
            H = (t) => {
              if ("email" === t)
                return (0, i.jsx)(
                  z,
                  {
                    isEditable: "email" === W,
                    setIsEditable: () => {
                      V("email");
                    },
                    defaultValue:
                      "email" === E?.prefill?.type ? E.prefill.value : void 0,
                  },
                  t
                );
              if ("sms" === t)
                return (0, i.jsx)(
                  U,
                  {
                    isEditable: "sms" === W,
                    setIsEditable: () => {
                      V("sms");
                    },
                    defaultValue:
                      "phone" === E?.prefill?.type ? E.prefill.value : void 0,
                  },
                  t
                );
              if ("apple" === t) return (0, i.jsx)(B, { provider: "apple" }, t);
              if ("discord" === t)
                return (0, i.jsx)(B, { provider: "discord" }, t);
              if ("farcaster" === t) return (0, i.jsx)(F, {}, t);
              if ("github" === t)
                return (0, i.jsx)(B, { provider: "github" }, t);
              if ("google" === t)
                return (0, i.jsx)(B, { provider: "google" }, t);
              if ("linkedin" === t)
                return (0, i.jsx)(B, { provider: "linkedin" }, t);
              if ("spotify" === t)
                return (0, i.jsx)(B, { provider: "spotify" }, t);
              if ("instagram" === t)
                return (0, i.jsx)(B, { provider: "instagram" }, t);
              if ("tiktok" === t)
                return (0, i.jsx)(B, { provider: "tiktok" }, t);
              if ("line" === t) return (0, i.jsx)(B, { provider: "line" }, t);
              if ("twitch" === t)
                return (0, i.jsx)(B, { provider: "twitch" }, t);
              if ("twitter" === t)
                return (0, i.jsx)(B, { provider: "twitter" }, t);
              if ("telegram" === t)
                return w.loginConfig.telegramHasHmacCredentials
                  ? (0, i.jsx)(K, {}, t)
                  : (0, i.jsx)(B, { provider: "telegram" }, t);
              if (t.startsWith("privy:"))
                return (0, i.jsx)(I, { appId: t.replace("privy:", "") }, t);
              let r = w.appearance.walletChainType,
                l = new g.W(r, [t]).getWallets(a, D);
              return l.wallets.map((t, a) =>
                (0, i.jsx)(
                  g.a,
                  {
                    index: a,
                    data: {
                      wallets: l.wallets,
                      walletChainType: r,
                      handleWalletClick(t) {
                        x((e) => ({
                          ...e,
                          externalConnectWallet: {
                            walletList: T,
                            walletChainType: r,
                            preSelectedWalletId: t.id,
                          },
                        })),
                          v(
                            e
                              ? "ConnectOnlyLandingScreen"
                              : "AuthenticateWithWalletScreen"
                          );
                      },
                    },
                  },
                  t.id + a
                )
              );
            },
            R = A.flatMap(H),
            O = S.filter((e) => e !== k && e !== C?.loginMethod).flatMap(H),
            _ = M.filter((e) => e !== k && e !== C?.loginMethod).flatMap(H),
            [q, G] = (0, m.k)(
              [...R, ...O, ..._],
              en({ primary: O.length + R.length, overflow: _.length })
            );
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.M, {
                title: w.appearance.landingHeader,
                onClose: $,
                backFn:
                  "default" === P
                    ? void 0
                    : () => {
                        N("default");
                      },
              }),
              "default" === P && (0, i.jsx)(eo, {}),
              "default" === P &&
                ("string" == typeof w.appearance.loginMessage
                  ? (0, i.jsx)(f.S, { children: w.appearance.loginMessage })
                  : w.appearance.loginMessage),
              (0, i.jsx)(f.A, {
                style: { overflow: "hidden" },
                children: (0, i.jsxs)(f.o, {
                  $colorScheme: j,
                  children: [
                    "default" === P &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          q,
                          G.length > 0 &&
                            (0, i.jsx)(X, {
                              text: "More options",
                              icon: (0, i.jsx)(l, {}),
                              onClick: () => N("overflow"),
                            }),
                        ],
                      }),
                    "overflow" === P && (0, i.jsx)(i.Fragment, { children: G }),
                    L && "default" === P && (0, i.jsx)(Z, {}),
                  ],
                }),
              }),
              w && (0, i.jsx)(o.T, { app: w }),
              (0, i.jsx)(o.B, {}),
            ],
          });
        },
        en = ({ primary: e, overflow: t }) =>
          e < 5 ? e : 5 === e && 0 === t ? 5 : 4,
        eo = (0, n.zo)((e) => {
          let t = (0, c.a)();
          return t?.appearance.logo
            ? (0, i.jsx)(D, { ...e, children: (0, i.jsx)($, {}) })
            : null;
        })`
  margin-bottom: 16px;
`;
    },
    52266: function (e, t, a) {
      a.d(t, {
        L: function () {
          return l;
        },
      });
      var i = a(83129);
      let r = (0, i.F4)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,
        l = (0, i.iv)`
  ${(e) =>
    e.$isLoading
      ? (0, i.iv)`
          width: 35%;
          animation: ${r} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `
      : ""}
`;
    },
    74577: function (e, t, a) {
      a.d(t, {
        W: function () {
          return n;
        },
      });
      var i = a(57437),
        r = a(91804),
        l = a(9287);
      let n = ({ onClick: e, text: t }) =>
        (0, i.jsxs)(l.L, {
          onClick: e,
          children: [
            (0, i.jsx)(l.m, { children: (0, i.jsx)(r.Z, {}) }),
            (0, i.jsx)(l.G, { children: t }),
          ],
        });
    },
    48684: function (e, t, a) {
      a.d(t, {
        F: function () {
          return r;
        },
      });
      var i = a(57437);
      let r = (e) =>
        (0, i.jsxs)("svg", {
          width: "33",
          height: "32",
          viewBox: "0 0 33 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("rect", {
              x: "0.5",
              width: "32",
              height: "32",
              rx: "4",
              fill: "#855DCD",
            }),
            (0, i.jsxs)("g", {
              "clip-path": "url(#clip0_1715_1960)",
              children: [
                (0, i.jsx)("path", {
                  d: "M4.5 4H28.5V28H4.5V4Z",
                  fill: "#855DCD",
                }),
                (0, i.jsx)("path", {
                  d: "M11.1072 8.42105H21.6983V23.5789H20.1437V16.6357H20.1284C19.9566 14.7167 18.3542 13.2129 16.4028 13.2129C14.4514 13.2129 12.849 14.7167 12.6771 16.6357H12.6619V23.5789H11.1072V8.42105Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M8.28943 10.5725L8.92101 12.7239H9.45542V21.4275C9.1871 21.4275 8.96959 21.6464 8.96959 21.9165V22.5032H8.87242C8.60411 22.5032 8.38659 22.7221 8.38659 22.9922V23.5789H13.8279V22.9922C13.8279 22.7221 13.6104 22.5032 13.3421 22.5032H13.2449V21.9165C13.2449 21.6464 13.0274 21.4275 12.7591 21.4275H12.1761V10.5725H8.28943Z",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M20.2408 21.4275C19.9725 21.4275 19.755 21.6464 19.755 21.9165V22.5032H19.6579C19.3895 22.5032 19.172 22.7221 19.172 22.9922V23.5789H24.6133V22.9922C24.6133 22.7221 24.3958 22.5032 24.1275 22.5032H24.0303V21.9165C24.0303 21.6464 23.8128 21.4275 23.5445 21.4275V12.7239H24.0789L24.7105 10.5725H20.8238V21.4275H20.2408Z",
                  fill: "white",
                }),
              ],
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsx)("clipPath", {
                id: "clip0_1715_1960",
                children: (0, i.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "white",
                  transform: "translate(4.5 4)",
                }),
              }),
            }),
          ],
        });
    },
  },
]);

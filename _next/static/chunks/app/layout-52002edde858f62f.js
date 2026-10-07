(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    1517: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 88291)),
        Promise.resolve().then(t.t.bind(t, 80856, 23)),
        Promise.resolve().then(t.t.bind(t, 18313, 23)),
        Promise.resolve().then(t.t.bind(t, 15044, 23)),
        Promise.resolve().then(t.t.bind(t, 47960, 23));
    },
    47960: function () {},
    80856: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Space_Grotesk_5dce4b', '__Space_Grotesk_Fallback_5dce4b'",
          fontStyle: "normal",
        },
        className: "__className_5dce4b",
        variable: "__variable_5dce4b",
      };
    },
    15044: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__GeistMono_46451f', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace",
        },
        className: "__className_46451f",
        variable: "__variable_46451f",
      };
    },
    18313: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__GeistSans_8adcd2', '__GeistSans_Fallback_8adcd2'",
        },
        className: "__className_8adcd2",
        variable: "__variable_8adcd2",
      };
    },
    25566: function (e) {
      var n,
        t,
        o,
        r = (e.exports = {});
      function i() {
        throw Error("setTimeout has not been defined");
      }
      function a() {
        throw Error("clearTimeout has not been defined");
      }
      function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          t = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          t = a;
        }
      })();
      var s = [],
        u = !1,
        l = -1;
      function d() {
        u &&
          o &&
          ((u = !1), o.length ? (s = o.concat(s)) : (l = -1), s.length && f());
      }
      function f() {
        if (!u) {
          var e = c(d);
          u = !0;
          for (var n = s.length; n; ) {
            for (o = s, s = []; ++l < n; ) o && o[l].run();
            (l = -1), (n = s.length);
          }
          (o = null),
            (u = !1),
            (function (e) {
              if (t === clearTimeout) return clearTimeout(e);
              if ((t === a || !t) && clearTimeout)
                return (t = clearTimeout), clearTimeout(e);
              try {
                t(e);
              } catch (n) {
                try {
                  return t.call(null, e);
                } catch (n) {
                  return t.call(this, e);
                }
              }
            })(e);
        }
      }
      function v(e, n) {
        (this.fun = e), (this.array = n);
      }
      function p() {}
      (r.nextTick = function (e) {
        var n = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        s.push(new v(e, n)), 1 !== s.length || u || c(f);
      }),
        (v.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = p),
        (r.addListener = p),
        (r.once = p),
        (r.off = p),
        (r.removeListener = p),
        (r.removeAllListeners = p),
        (r.emit = p),
        (r.prependListener = p),
        (r.prependOnceListener = p),
        (r.listeners = function (e) {
          return [];
        }),
        (r.binding = function (e) {
          throw Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (e) {
          throw Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    88291: function (e, n, t) {
      "use strict";
      t.d(n, {
        Analytics: function () {
          return l;
        },
      });
      var o = t(2265),
        r = t(25566),
        i = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                n[t] = arguments[t];
              window.vaq || (window.vaq = []), window.vaq.push(n);
            });
        };
      function a() {
        return "undefined" != typeof window;
      }
      function c() {
        return "production";
      }
      function s() {
        return "development" === ((a() ? window.vam : c()) || "production");
      }
      function u(e) {
        return e.startsWith("http://") ||
          e.startsWith("https://") ||
          e.startsWith("/")
          ? e
          : "/".concat(e);
      }
      function l(e) {
        return (
          (0, o.useEffect)(() => {
            var n;
            e.beforeSend &&
              (null == (n = window.va) ||
                n.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, o.useEffect)(() => {
            var n, t;
            !(function () {
              var e;
              let n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { debug: !0 },
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (!a()) return;
              let {
                beforeSend: o,
                src: r,
                dataset: l,
              } = (function (e, n) {
                var t, o;
                let r = e;
                if (n)
                  try {
                    r = {
                      ...(null == (t = JSON.parse(n)) ? void 0 : t.analytics),
                      ...e,
                    };
                  } catch (e) {}
                !(function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "auto";
                  if ("auto" === e) {
                    window.vam = c();
                    return;
                  }
                  window.vam = e;
                })(r.mode);
                let i = {
                  sdkn:
                    "@vercel/analytics" +
                    (r.framework ? "/".concat(r.framework) : ""),
                  sdkv: "2.0.1",
                };
                return (
                  r.disableAutoTrack && (i.disableAutoTrack = "1"),
                  r.viewEndpoint && (i.viewEndpoint = u(r.viewEndpoint)),
                  r.eventEndpoint && (i.eventEndpoint = u(r.eventEndpoint)),
                  r.sessionEndpoint &&
                    (i.sessionEndpoint = u(r.sessionEndpoint)),
                  s() && !1 === r.debug && (i.debug = "false"),
                  r.dsn && (i.dsn = r.dsn),
                  r.endpoint
                    ? (i.endpoint = r.endpoint)
                    : r.basePath &&
                      (i.endpoint = u("".concat(r.basePath, "/insights"))),
                  {
                    beforeSend: r.beforeSend,
                    src: (o = r).scriptSrc
                      ? u(o.scriptSrc)
                      : s()
                      ? "https://va.vercel-scripts.com/v1/script.debug.js"
                      : o.basePath
                      ? u("".concat(o.basePath, "/insights/script.js"))
                      : "/_vercel/insights/script.js",
                    dataset: i,
                  }
                );
              })(n, t);
              if (
                (i(),
                o &&
                  (null == (e = window.va) || e.call(window, "beforeSend", o)),
                document.head.querySelector('script[src*="'.concat(r, '"]')))
              )
                return;
              let d = document.createElement("script");
              for (let [e, n] of ((d.src = r), Object.entries(l)))
                d.dataset[e] = n;
              (d.defer = !0),
                (d.onerror = () => {
                  let e = s()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(r, ". ")
                      .concat(e)
                  );
                }),
                document.head.appendChild(d);
            })(
              {
                framework: e.framework || "react",
                basePath:
                  null !== (n = e.basePath) && void 0 !== n
                    ? n
                    : (function () {
                        if (void 0 !== r && void 0 !== r.env)
                          return r.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                      })(),
                ...(void 0 !== e.route && { disableAutoTrack: !0 }),
                ...e,
              },
              null !== (t = e.configString) && void 0 !== t
                ? t
                : (function () {
                    if (void 0 !== r && void 0 !== r.env)
                      return r.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
                  })()
            );
          }, []),
          (0, o.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var n;
                let { route: t, path: o } = e;
                null == (n = window.va) ||
                  n.call(window, "pageview", { route: t, path: o });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
    },
  },
  function (e) {
    e.O(0, [7235, 2971, 2117, 1744], function () {
      return e((e.s = 1517));
    }),
      (_N_E = e.O());
  },
]);

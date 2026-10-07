(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9681],
  {
    33811: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 78599)),
        Promise.resolve().then(n.bind(n, 47532));
    },
    78599: function (e, t, n) {
      "use strict";
      n.d(t, {
        BenchNav: function () {
          return c;
        },
      });
      var r = n(57437),
        i = n(27648),
        u = n(70304);
      let o = [
        { slug: "crypto", title: "Cryptography", kind: "Measured" },
        { slug: "quorum", title: "Quorum and audits", kind: "Simulated" },
        { slug: "reputation", title: "Reputation", kind: "Simulated" },
        { slug: "scheduler", title: "Scheduler", kind: "Simulated" },
        { slug: "gpu-model", title: "GPU and enclave model", kind: "Modelled" },
      ];
      function c() {
        let e = (0, u.usePathname)();
        return (0, r.jsxs)("nav", {
          className: "bench-nav",
          "aria-label": "Benchmarks",
          children: [
            (0, r.jsx)("span", { className: "label", children: "Benchmarks" }),
            (0, r.jsx)(i.default, {
              href: "/benchmark",
              className: "/benchmark" === e ? "on" : "",
              children: "Overview",
            }),
            o.map((t) =>
              (0, r.jsx)(
                i.default,
                {
                  href: "/benchmark/".concat(t.slug),
                  className: e === "/benchmark/".concat(t.slug) ? "on" : "",
                  children: t.title,
                },
                t.slug
              )
            ),
          ],
        });
      }
    },
    25566: function (e) {
      var t,
        n,
        r,
        i = (e.exports = {});
      function u() {
        throw Error("setTimeout has not been defined");
      }
      function o() {
        throw Error("clearTimeout has not been defined");
      }
      function c(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === u || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : u;
        } catch (e) {
          t = u;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          n = o;
        }
      })();
      var s = [],
        a = !1,
        l = -1;
      function f() {
        a &&
          r &&
          ((a = !1), r.length ? (s = r.concat(s)) : (l = -1), s.length && h());
      }
      function h() {
        if (!a) {
          var e = c(f);
          a = !0;
          for (var t = s.length; t; ) {
            for (r = s, s = []; ++l < t; ) r && r[l].run();
            (l = -1), (t = s.length);
          }
          (r = null),
            (a = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function d(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (i.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new d(e, t)), 1 !== s.length || a || c(h);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = m),
        (i.addListener = m),
        (i.once = m),
        (i.off = m),
        (i.removeListener = m),
        (i.removeAllListeners = m),
        (i.emit = m),
        (i.prependListener = m),
        (i.prependOnceListener = m),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    90328: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
        return Object.assign(t, {
          extend: (function e(t) {
            return (n) => {
              let r = "function" == typeof n ? n(t) : n,
                i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(t),
        });
      }
      function i() {
        return {};
      }
      n.d(t, {
        W: function () {
          return i;
        },
        a: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [2972, 7532, 2971, 2117, 1744], function () {
      return e((e.s = 33811));
    }),
      (_N_E = e.O());
  },
]);

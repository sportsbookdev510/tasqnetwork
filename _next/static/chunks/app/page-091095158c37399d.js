(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    88985: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 65786)),
        Promise.resolve().then(n.bind(n, 78370)),
        Promise.resolve().then(n.bind(n, 47532)),
        Promise.resolve().then(n.bind(n, 44213)),
        Promise.resolve().then(n.t.bind(n, 72972, 23));
    },
    65786: function (e, t, n) {
      "use strict";
      n.d(t, {
        CtaScene: function () {
          return a;
        },
      });
      var r = n(57437),
        i = n(2265);
      let o = [
        {
          hue: "139,77,255",
          ax: 0.28,
          ay: 0.42,
          sx: 16e-5,
          sy: 21e-5,
          px: 0,
          py: 1.2,
          r: 0.62,
        },
        {
          hue: "179,145,255",
          ax: 0.32,
          ay: 0.3,
          sx: 12e-5,
          sy: 1e-4,
          px: 2.3,
          py: 0.4,
          r: 0.52,
        },
        {
          hue: "118,66,214",
          ax: 0.22,
          ay: 0.38,
          sx: 9e-5,
          sy: 15e-5,
          px: 4.1,
          py: 3,
          r: 0.7,
        },
      ];
      function a() {
        let e = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let t = e.current,
              n = null == t ? void 0 : t.parentElement;
            if (!t || !n) return;
            let r = t.getContext("2d");
            if (!r) return;
            let i = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches,
              a = Math.min(2, window.devicePixelRatio || 1),
              s = 0,
              c = 0,
              l = 0,
              u = !0,
              d = () => {
                let e = n.getBoundingClientRect();
                (s = e.width),
                  (c = e.height),
                  (t.width = Math.max(1, s * a)),
                  (t.height = Math.max(1, c * a)),
                  (t.style.width = s + "px"),
                  (t.style.height = c + "px"),
                  r.setTransform(a, 0, 0, a, 0, 0);
              };
            d();
            let h = new ResizeObserver(d);
            h.observe(n);
            let m = new IntersectionObserver(
              (e) => {
                let [t] = e;
                u = t.isIntersecting;
              },
              { threshold: 0 }
            );
            m.observe(n);
            let f = (e) => {
                r.clearRect(0, 0, s, c),
                  (r.globalCompositeOperation = "lighter");
                let t = Math.max(s, c);
                for (let n of o) {
                  let i = 0.5 * s + Math.sin(e * n.sx + n.px) * s * n.ax,
                    o = 0.5 * c + Math.cos(e * n.sy + n.py) * c * n.ay,
                    a = t * n.r,
                    l = r.createRadialGradient(i, o, 0, i, o, a);
                  l.addColorStop(0, "rgba(".concat(n.hue, ",0.3)")),
                    l.addColorStop(0.45, "rgba(".concat(n.hue, ",0.08)")),
                    l.addColorStop(1, "rgba(".concat(n.hue, ",0)")),
                    (r.fillStyle = l),
                    r.beginPath(),
                    r.arc(i, o, a, 0, 2 * Math.PI),
                    r.fill();
                }
                r.globalCompositeOperation = "source-over";
              },
              v = (e) => {
                (l = requestAnimationFrame(v)), u && f(e);
              };
            return (
              i ? f(6e3) : (l = requestAnimationFrame(v)),
              () => {
                cancelAnimationFrame(l), h.disconnect(), m.disconnect();
              }
            );
          }, []),
          (0, r.jsx)("canvas", {
            ref: e,
            className: "cta-canvas",
            "aria-hidden": "true",
          })
        );
      }
    },
    44213: function (e, t, n) {
      "use strict";
      n.d(t, {
        VideoSection: function () {
          return c;
        },
      });
      var r = n(57437),
        i = n(2265),
        o = n(79140),
        a = n(47532);
      let s = "https://ddptpansivgjru9t.public.blob.vercel-storage.com/media";
      function c() {
        let e = (0, i.useRef)(null),
          [t, n] = (0, i.useState)(!1),
          [c, l] = (0, i.useState)(!1),
          [u, d] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          n(window.matchMedia("(max-width: 640px)").matches);
        }, []),
          (0, i.useEffect)(() => {
            e.current && (e.current.muted = c);
          }, [c]);
        let h = () => {
          let t = e.current;
          t &&
            !u &&
            t.play().catch(() => {
              (t.muted = !0), l(!0), t.play().catch(() => {});
            });
        };
        (0, i.useEffect)(() => {
          let t = e.current;
          if (!t) return;
          let n = new IntersectionObserver(
            (e) => {
              let [n] = e;
              n.isIntersecting ? h() : t.pause();
            },
            { threshold: 0.35 }
          );
          return n.observe(t), () => n.disconnect();
        }, [u]);
        let m = () => {
          let t = e.current;
          t &&
            (t.paused ? (d(!1), t.play().catch(() => {})) : (t.pause(), d(!0)));
        };
        return (0, r.jsx)("section", {
          className: "section video-section",
          id: "in-action",
          children: (0, r.jsxs)("div", {
            className: "container",
            children: [
              (0, r.jsxs)(a.Reveal, {
                className: "section-head video-head",
                children: [
                  (0, r.jsx)("p", {
                    className: "eyebrow",
                    children: "In action",
                  }),
                  (0, r.jsx)("h2", {
                    className: "h1",
                    children: "See a job run, end to end",
                  }),
                  (0, r.jsx)("p", {
                    className: "lead",
                    children:
                      "Submit an encrypted job, watch it attest, run and return a result you can verify. No raw data ever leaves your control.",
                  }),
                ],
              }),
              (0, r.jsxs)(a.Reveal, {
                className: "video-wrap",
                children: [
                  (0, r.jsx)("div", {
                    className: "video-glow",
                    "aria-hidden": "true",
                  }),
                  (0, r.jsx)("video", {
                    ref: e,
                    className: "video-el",
                    src: t
                      ? "".concat(s, "/explainer-square.mp4")
                      : "".concat(s, "/explainer-16x9.mp4"),
                    loop: !0,
                    playsInline: !0,
                    preload: "metadata",
                    onClick: m,
                  }),
                  (0, r.jsxs)("div", {
                    className: "video-controls",
                    children: [
                      (0, r.jsx)("button", {
                        type: "button",
                        className: "vctl",
                        onClick: m,
                        "aria-label": u ? "Play" : "Pause",
                        children: (0, r.jsx)(o.JO, {
                          name: u ? "play" : "pause",
                          size: 15,
                        }),
                      }),
                      (0, r.jsx)("button", {
                        type: "button",
                        className: "vctl",
                        onClick: () => l((e) => !e),
                        "aria-label": c ? "Unmute" : "Mute",
                        children: (0, r.jsx)(o.JO, {
                          name: c ? "mute" : "volume",
                          size: 15,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    78370: function (e, t, n) {
      "use strict";
      n.d(t, {
        HeroScene: function () {
          return o;
        },
      });
      var r = n(57437),
        i = n(2265);
      function o(e) {
        let { background: t = "#0b0a12", className: o = "" } = e,
          a = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          [c, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = a.current,
              r = s.current;
            if (!e || !r) return;
            let i = null,
              o = !1,
              c = [];
            if (
              !(() => {
                try {
                  return !!document
                    .createElement("canvas")
                    .getContext("webgl2");
                } catch (e) {
                  return !1;
                }
              })()
            )
              return;
            let u = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches,
              d = window.matchMedia("(max-width: 720px)").matches,
              h = 4 >= (navigator.hardwareConcurrency || 8),
              m = () =>
                Promise.all([n.e(5870), n.e(6689), n.e(1297)])
                  .then(n.bind(n, 91297))
                  .then((n) => {
                    var a, s;
                    let { createScene: m } = n;
                    if (o) return;
                    (i = m(r, {
                      background: t,
                      anchor:
                        null !==
                          (s =
                            null === (a = e.parentElement) || void 0 === a
                              ? void 0
                              : a.querySelector("[data-hero-mark]")) &&
                        void 0 !== s
                          ? s
                          : null,
                      still: u,
                      lite: d || h,
                    })),
                      l(!0);
                    let f = (t) => {
                        let n = e.getBoundingClientRect();
                        null == i ||
                          i.setPointer(
                            ((t.clientX - n.left) / n.width) * 2 - 1,
                            -(((t.clientY - n.top) / n.height) * 2 - 1)
                          );
                      },
                      v = () => {
                        let t = e.getBoundingClientRect();
                        null == i ||
                          i.setScroll(
                            Math.min(
                              1,
                              Math.max(0, -t.top / Math.max(1, t.height))
                            )
                          );
                      },
                      p = new ResizeObserver(() =>
                        null == i ? void 0 : i.resize()
                      );
                    p.observe(e);
                    let w = new IntersectionObserver(
                      (e) => {
                        let [t] = e;
                        return null == i
                          ? void 0
                          : i.setActive(t.isIntersecting && !document.hidden);
                      },
                      { threshold: 0 }
                    );
                    w.observe(e);
                    let b = () =>
                      null == i ? void 0 : i.setActive(!document.hidden);
                    u ||
                      (window.addEventListener("pointermove", f, {
                        passive: !0,
                      }),
                      window.addEventListener("scroll", v, { passive: !0 })),
                      document.addEventListener("visibilitychange", b),
                      c.push(() => {
                        window.removeEventListener("pointermove", f),
                          window.removeEventListener("scroll", v),
                          document.removeEventListener("visibilitychange", b),
                          p.disconnect(),
                          w.disconnect();
                      });
                  })
                  .catch(() => {}),
              f = window.requestIdleCallback,
              v = f ? f(m, { timeout: 600 }) : window.setTimeout(m, 120);
            return () => {
              o = !0;
              let e = window.cancelIdleCallback;
              f && e ? e(v) : clearTimeout(v),
                c.forEach((e) => e()),
                null == i || i.dispose();
            };
          }, [t]),
          (0, r.jsxs)("div", {
            ref: a,
            className: "hero-scene".concat(c ? " is-ready" : "", " ").concat(o),
            "aria-hidden": "true",
            children: [
              (0, r.jsx)("canvas", { ref: s }),
              (0, r.jsx)("div", { className: "hero-scene-scrim" }),
            ],
          })
        );
      }
    },
    25566: function (e) {
      var t,
        n,
        r,
        i = (e.exports = {});
      function o() {
        throw Error("setTimeout has not been defined");
      }
      function a() {
        throw Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout)
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
          t = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          t = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          n = a;
        }
      })();
      var c = [],
        l = !1,
        u = -1;
      function d() {
        l &&
          r &&
          ((l = !1), r.length ? (c = r.concat(c)) : (u = -1), c.length && h());
      }
      function h() {
        if (!l) {
          var e = s(d);
          l = !0;
          for (var t = c.length; t; ) {
            for (r = c, c = []; ++u < t; ) r && r[u].run();
            (u = -1), (t = c.length);
          }
          (r = null),
            (l = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout)
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
      function m(e, t) {
        (this.fun = e), (this.array = t);
      }
      function f() {}
      (i.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new m(e, t)), 1 !== c.length || l || s(h);
      }),
        (m.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = f),
        (i.addListener = f),
        (i.once = f),
        (i.off = f),
        (i.removeListener = f),
        (i.removeAllListeners = f),
        (i.emit = f),
        (i.prependListener = f),
        (i.prependOnceListener = f),
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
      return e((e.s = 88985));
    }),
      (_N_E = e.O());
  },
]);

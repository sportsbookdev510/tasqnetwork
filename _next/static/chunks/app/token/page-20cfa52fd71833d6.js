(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4612],
  {
    50603: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 24893, 23)),
        Promise.resolve().then(s.bind(s, 47532)),
        Promise.resolve().then(s.bind(s, 68085)),
        Promise.resolve().then(s.bind(s, 69150)),
        Promise.resolve().then(s.bind(s, 31509)),
        Promise.resolve().then(s.t.bind(s, 72972, 23));
    },
    68085: function (e, t, s) {
      "use strict";
      s.d(t, {
        CoinStage: function () {
          return a;
        },
      });
      var n = s(57437),
        r = s(2265);
      function a(e) {
        let {
            variant: t = "hero",
            background: a = "#0b0a12",
            focusX: i,
            className: c = "",
          } = e,
          o = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          [h, u] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = o.current,
              n = d.current;
            if (
              !e ||
              !n ||
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
            let r = null,
              c = !1,
              h = [],
              x = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
              m = window.matchMedia("(max-width: 720px)").matches,
              j = 4 >= (navigator.hardwareConcurrency || 8),
              k = new URLSearchParams(location.search).has("capture"),
              f = () =>
                Promise.all([s.e(5870), s.e(6689), s.e(3221), s.e(4165)])
                  .then(s.bind(s, 4165))
                  .then((s) => {
                    var o;
                    let { createCoinStage: d } = s;
                    if (
                      c ||
                      ((r = d(n, {
                        background: a,
                        variant: t,
                        still: x,
                        lite: m || j,
                        focusX: i,
                      })),
                      ((o = window).__tasqCoin || (o.__tasqCoin = [])).push(r),
                      u(!0),
                      k)
                    )
                      return;
                    let f = (t) => {
                        let s = e.getBoundingClientRect();
                        null == r ||
                          r.setPointer(
                            l(((t.clientX - s.left) / s.width) * 2 - 1),
                            l(-(((t.clientY - s.top) / s.height) * 2 - 1))
                          );
                      },
                      p = () => {
                        let t = e.getBoundingClientRect();
                        null == r ||
                          r.setScroll(
                            Math.min(
                              1,
                              Math.max(0, -t.top / Math.max(1, t.height))
                            )
                          );
                      },
                      v = new ResizeObserver(() =>
                        null == r ? void 0 : r.resize()
                      );
                    v.observe(e);
                    let y = new IntersectionObserver(
                      (e) => {
                        let [t] = e;
                        return null == r
                          ? void 0
                          : r.setActive(t.isIntersecting && !document.hidden);
                      },
                      { threshold: 0 }
                    );
                    y.observe(e);
                    let g = () =>
                      null == r ? void 0 : r.setActive(!document.hidden);
                    x ||
                      (window.addEventListener("pointermove", f, {
                        passive: !0,
                      }),
                      window.addEventListener("scroll", p, { passive: !0 })),
                      document.addEventListener("visibilitychange", g),
                      h.push(() => {
                        window.removeEventListener("pointermove", f),
                          window.removeEventListener("scroll", p),
                          document.removeEventListener("visibilitychange", g),
                          v.disconnect(),
                          y.disconnect();
                      });
                  })
                  .catch(() => {}),
              p = window.requestIdleCallback,
              v = p ? p(f, { timeout: 500 }) : window.setTimeout(f, 100);
            return () => {
              c = !0;
              let e = window.cancelIdleCallback;
              p && e ? e(v) : clearTimeout(v),
                h.forEach((e) => e()),
                null == r || r.dispose();
            };
          }, [a, t, i]),
          (0, n.jsx)("div", {
            ref: o,
            className: "tk-stage".concat(h ? " is-ready" : "", " ").concat(c),
            "aria-hidden": "true",
            children: (0, n.jsx)("canvas", { ref: d }),
          })
        );
      }
      let l = (e) => Math.max(-1, Math.min(1, e));
    },
    69150: function (e, t, s) {
      "use strict";
      s.d(t, {
        AllocationPie: function () {
          return l;
        },
        EmissionChart: function () {
          return c;
        },
        TaxSplit: function () {
          return o;
        },
      });
      var n = s(57437),
        r = s(2265),
        a = s(69324);
      function l() {
        let e = (0, r.useRef)(null),
          t = (0, r.useRef)(null),
          l = (0, r.useRef)({}),
          i = (0, r.useRef)({}),
          c = (0, r.useRef)({}),
          [o, d] = (0, r.useState)(null),
          [h, u] = (0, r.useState)(!1),
          x = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let n = e.current,
              r = t.current;
            if (
              !n ||
              !r ||
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
            let o = !1,
              d = [],
              h = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
              m = () => {
                var e;
                let t =
                  null === (e = x.current) || void 0 === e
                    ? void 0
                    : e.anchors();
                if (!t) return;
                let s = n.getBoundingClientRect(),
                  r = a.Tr.filter((e) => e.value < 8)
                    .map((e) => ({ k: e.key, ...t[e.key] }))
                    .sort((e, t) => e.y - t.y),
                  o = s.width < 520 ? 34 : 40,
                  d = Math.max(
                    ...r.map((e) => {
                      var t;
                      return (
                        (null === (t = l.current[e.k]) || void 0 === t
                          ? void 0
                          : t.offsetWidth) || 120
                      );
                    })
                  ),
                  h = Math.min(
                    s.width - d - 12,
                    Math.max(...r.map((e) => e.x)) + (s.width < 520 ? 28 : 56)
                  ),
                  u = -1e9,
                  m = r.map((e) => (u = Math.max(e.y, u + o))),
                  j = Math.max(0, m[m.length - 1] - (s.height - 30));
                for (let e of (r.forEach((e, t) => {
                  let s = m[t] - j,
                    n = l.current[e.k];
                  n &&
                    (n.style.transform = "translate("
                      .concat(h, "px, ")
                      .concat(s, "px) translate(0, -50%)"));
                  let r = i.current[e.k];
                  r &&
                    r.setAttribute(
                      "points",
                      ""
                        .concat(e.x, ",")
                        .concat(e.y, " ")
                        .concat(h - 14, ",")
                        .concat(s, " ")
                        .concat(h - 2, ",")
                        .concat(s)
                    );
                  let a = c.current[e.k];
                  a &&
                    (a.setAttribute("cx", String(e.x)),
                    a.setAttribute("cy", String(e.y)));
                }),
                a.Tr))
                  if (e.value >= 8) {
                    let s = l.current[e.key];
                    s &&
                      (s.style.transform = "translate("
                        .concat(t[e.key].x, "px, ")
                        .concat(t[e.key].y, "px) translate(-50%, -50%)"));
                  }
              },
              j = () =>
                Promise.all([s.e(5870), s.e(6689), s.e(7951)])
                  .then(s.bind(s, 77951))
                  .then((e) => {
                    var t;
                    let { createPie: s } = e;
                    if (o) return;
                    (x.current = s(
                      r,
                      a.Tr.map((e) => ({
                        key: e.key,
                        value: e.value,
                        color: e.color,
                      })),
                      {
                        background: "#110f1a",
                        still: h,
                        lite: window.innerWidth < 720,
                        onFrame: m,
                      }
                    )),
                      ((t = window).__tasqPie || (t.__tasqPie = [])).push(
                        x.current
                      ),
                      u(!0);
                    let l = new ResizeObserver(() => {
                      var e;
                      return null === (e = x.current) || void 0 === e
                        ? void 0
                        : e.resize();
                    });
                    l.observe(n);
                    let i = new IntersectionObserver(
                      (e) => {
                        var t;
                        let [s] = e;
                        return null === (t = x.current) || void 0 === t
                          ? void 0
                          : t.setActive(s.isIntersecting);
                      },
                      { threshold: 0 }
                    );
                    i.observe(n),
                      d.push(() => {
                        l.disconnect(), i.disconnect();
                      });
                  })
                  .catch(() => {}),
              k = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && (k.disconnect(), j());
                },
                { rootMargin: "300px" }
              );
            return (
              k.observe(n),
              () => {
                var e;
                (o = !0),
                  k.disconnect(),
                  d.forEach((e) => e()),
                  null === (e = x.current) || void 0 === e || e.dispose();
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            var e;
            null === (e = x.current) || void 0 === e || e.setHover(o);
          }, [o]),
          (0, n.jsxs)("div", {
            className: "tk-pie",
            children: [
              (0, n.jsxs)("div", {
                ref: e,
                className: "tk-pie-stage".concat(h ? " is-ready" : ""),
                onPointerMove: (t) => {
                  var s, n;
                  let r = e.current.getBoundingClientRect();
                  d(
                    null !==
                      (n =
                        null === (s = x.current) || void 0 === s
                          ? void 0
                          : s.pick(t.clientX - r.left, t.clientY - r.top)) &&
                      void 0 !== n
                      ? n
                      : null
                  );
                },
                onPointerLeave: () => d(null),
                children: [
                  (0, n.jsx)("canvas", { ref: t, "aria-hidden": "true" }),
                  (0, n.jsx)("svg", {
                    className: "tk-pie-lines",
                    "aria-hidden": "true",
                    children: a.Tr.filter((e) => e.value < 8).map((e) =>
                      (0, n.jsxs)(
                        "g",
                        {
                          children: [
                            (0, n.jsx)("polyline", {
                              ref: (t) => {
                                i.current[e.key] = t;
                              },
                              fill: "none",
                              stroke: "rgba(255,255,255,.45)",
                              strokeWidth: "1",
                            }),
                            (0, n.jsx)("circle", {
                              ref: (t) => {
                                c.current[e.key] = t;
                              },
                              r: "3",
                              fill: "#fff",
                            }),
                          ],
                        },
                        e.key
                      )
                    ),
                  }),
                  a.Tr.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        ref: (t) => {
                          l.current[e.key] = t;
                        },
                        className: "tk-pie-tag".concat(
                          o === e.key ? " on" : ""
                        ),
                        "aria-hidden": "true",
                        children: [
                          (0, n.jsx)("i", { style: { background: e.color } }),
                          e.value,
                          "%",
                          e.value < 8 &&
                            (0, n.jsx)("span", {
                              className: "tk-pie-tag-l",
                              children: e.short,
                            }),
                        ],
                      },
                      e.key
                    )
                  ),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "tk-legend-wrap",
                children: [
                  (0, n.jsx)("p", {
                    className: "tk-pie-cap",
                    children:
                      "All of the supply is seeded to the pool at launch. The team then buys 10% on the open market and splits it as shown. The rest stays with the market.",
                  }),
                  (0, n.jsx)("ul", {
                    className: "tk-legend",
                    "aria-label": "Token allocation",
                    children: a.Tr.map((e) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className: o === e.key ? "on" : "",
                          onPointerEnter: () => d(e.key),
                          onPointerLeave: () => d(null),
                          children: [
                            (0, n.jsx)("i", { style: { background: e.color } }),
                            (0, n.jsxs)("span", {
                              className: "tk-legend-l",
                              children: [
                                e.label,
                                (0, n.jsx)("small", { children: e.note }),
                              ],
                            }),
                            (0, n.jsxs)("span", {
                              className: "tk-legend-v tnum",
                              children: [e.value, "%"],
                            }),
                          ],
                        },
                        e.key
                      )
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      }
      let i = [
        { key: "mkt", label: "Marketing", color: a.Tr[3].color },
        { key: "team", label: "Team", color: a.Tr[1].color },
        { key: "ledger", label: "Ledger rewards", color: a.Tr[2].color },
      ];
      function c() {
        let [e, t] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = window.matchMedia("(max-width: 640px)"),
            s = () => t(e.matches);
          return (
            s(),
            e.addEventListener("change", s),
            () => e.removeEventListener("change", s)
          );
        }, []);
        let s = e ? 360 : 640,
          l = e ? 260 : 300,
          c = e ? 36 : 44,
          o = e ? 92 : 132,
          d = (e) => c + (e / a.BH) * (s - c - o),
          h = (e) => 18 + (1 - e / 10) * (l - 18 - 34),
          u = (0, r.useMemo)(
            () => Array.from({ length: a.BH + 1 }, (e, t) => t),
            []
          ),
          [x, m] = (0, r.useState)(null),
          j = (0, r.useRef)(null),
          k = u.map((e) => {
            let t = (0, a.lh)(e);
            return [t.mkt, t.mkt + t.team, t.mkt + t.team + t.ledger];
          }),
          f = (e) => {
            let t = u
                .map((t, s) => "".concat(d(t), ",").concat(h(k[s][e])))
                .join(" L"),
              s = u
                .slice()
                .reverse()
                .map((t) => "".concat(d(t), ",").concat(h(e ? k[t][e - 1] : 0)))
                .join(" L");
            return "M".concat(t, " L").concat(s, " Z");
          },
          p = (e) =>
            "M".concat(
              u
                .map((t, s) => "".concat(d(t), ",").concat(h(k[s][e])))
                .join(" L")
            ),
          v = null !== x ? (0, a.lh)(x) : null,
          y = (0, a.lh)(a.BH);
        return (0, n.jsxs)("div", {
          className: "tk-chart",
          children: [
            (0, n.jsxs)("div", {
              className: "tk-chart-head",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "tk-chart-t",
                      children: "Team held 10%: unlocks and emissions",
                    }),
                    (0, n.jsx)("div", {
                      className: "tk-chart-s",
                      children: "Share of total supply, days after launch",
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: "tk-chart-legend",
                  children: i
                    .slice()
                    .reverse()
                    .map((e) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          children: [
                            (0, n.jsx)("i", { style: { background: e.color } }),
                            e.label,
                          ],
                        },
                        e.key
                      )
                    ),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tk-chart-plot",
              children: [
                (0, n.jsxs)("svg", {
                  ref: j,
                  viewBox: "0 0 ".concat(s, " ").concat(l),
                  className: e ? "narrow" : "",
                  onPointerMove: (e) => {
                    let t = j.current.getBoundingClientRect(),
                      n = ((e.clientX - t.left) / t.width) * s;
                    m(
                      Math.round(
                        Math.min(
                          a.BH,
                          Math.max(0, ((n - c) / (s - c - o)) * a.BH)
                        )
                      )
                    );
                  },
                  onPointerLeave: () => m(null),
                  role: "img",
                  "aria-label":
                    "Stacked area chart: marketing 2.5% liquid from day 0, team 5% and ledger rewards 2.5% unlocking over 90 days, reaching 10% of supply.",
                  children: [
                    [0, 2.5, 5, 7.5, 10].map((e) =>
                      (0, n.jsxs)(
                        "g",
                        {
                          children: [
                            (0, n.jsx)("line", {
                              x1: c,
                              x2: s - o,
                              y1: h(e),
                              y2: h(e),
                              className: "tk-grid",
                            }),
                            (0, n.jsxs)("text", {
                              x: c - 10,
                              y: h(e) + 4,
                              textAnchor: "end",
                              className: "tk-axis",
                              children: [e, "%"],
                            }),
                          ],
                        },
                        e
                      )
                    ),
                    [0, 30, 60, 90].map((t) =>
                      (0, n.jsx)(
                        "text",
                        {
                          x: d(t),
                          y: l - 10,
                          textAnchor: "middle",
                          className: "tk-axis",
                          children:
                            0 === t
                              ? e
                                ? "0"
                                : "Launch"
                              : e
                              ? "".concat(t, "d")
                              : "Day ".concat(t),
                        },
                        t
                      )
                    ),
                    (0, n.jsx)("g", {
                      className: "tk-areas",
                      children: i.map((e, t) =>
                        (0, n.jsxs)(
                          "g",
                          {
                            children: [
                              (0, n.jsx)("path", {
                                d: f(t),
                                fill: e.color,
                                fillOpacity: 0.22,
                              }),
                              (0, n.jsx)("path", {
                                d: p(t),
                                fill: "none",
                                stroke: e.color,
                                strokeWidth: 2,
                                strokeLinejoin: "round",
                              }),
                            ],
                          },
                          e.key
                        )
                      ),
                    }),
                    i.map((t, r) => {
                      y.mkt, y.mkt, y.team, y.mkt, y.team, y.ledger;
                      let a = [
                        y.mkt / 2,
                        y.mkt + y.team / 2,
                        y.mkt + y.team + y.ledger / 2,
                      ][r];
                      return (0, n.jsxs)(
                        "text",
                        {
                          x: s - o + 10,
                          y: h(a) + 4,
                          className: "tk-dlabel",
                          children: [
                            e ? ["Mkt", "Team", "Ledger"][r] : t.label,
                            " ",
                            [y.mkt, y.team, y.ledger][r],
                            "%",
                          ],
                        },
                        t.key
                      );
                    }),
                    null !== x &&
                      v &&
                      (0, n.jsxs)("g", {
                        children: [
                          (0, n.jsx)("line", {
                            x1: d(x),
                            x2: d(x),
                            y1: 18,
                            y2: l - 34,
                            className: "tk-cross",
                          }),
                          i.map((e, t) =>
                            (0, n.jsx)(
                              "circle",
                              {
                                cx: d(x),
                                cy: h(k[x][t]),
                                r: 4.5,
                                fill: e.color,
                                stroke: "#110f1a",
                                strokeWidth: 2,
                              },
                              e.key
                            )
                          ),
                        ],
                      }),
                  ],
                }),
                null !== x &&
                  v &&
                  (0, n.jsxs)("div", {
                    className: "tk-tip",
                    style: { left: "".concat((d(x) / s) * 100, "%") },
                    children: [
                      (0, n.jsx)("b", {
                        children: 0 === x ? "Launch" : "Day ".concat(x),
                      }),
                      (0, n.jsxs)("span", {
                        children: [
                          (0, n.jsx)("i", {
                            style: { background: i[2].color },
                          }),
                          "Ledger rewards ",
                          (0, n.jsxs)("em", {
                            className: "tnum",
                            children: [v.ledger.toFixed(2), "%"],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        children: [
                          (0, n.jsx)("i", {
                            style: { background: i[1].color },
                          }),
                          "Team ",
                          (0, n.jsxs)("em", {
                            className: "tnum",
                            children: [v.team.toFixed(2), "%"],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        children: [
                          (0, n.jsx)("i", {
                            style: { background: i[0].color },
                          }),
                          "Marketing ",
                          (0, n.jsxs)("em", {
                            className: "tnum",
                            children: [v.mkt.toFixed(2), "%"],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        className: "tot",
                        children: [
                          "Unlocked ",
                          (0, n.jsxs)("em", {
                            className: "tnum",
                            children: [
                              (v.mkt + v.team + v.ledger).toFixed(2),
                              "%",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, n.jsxs)("details", {
              className: "tk-chart-table",
              children: [
                (0, n.jsx)("summary", { children: "View as table" }),
                (0, n.jsxs)("table", {
                  children: [
                    (0, n.jsx)("thead", {
                      children: (0, n.jsxs)("tr", {
                        children: [
                          (0, n.jsx)("th", { children: "Day" }),
                          (0, n.jsx)("th", { children: "Marketing" }),
                          (0, n.jsx)("th", { children: "Team" }),
                          (0, n.jsx)("th", { children: "Ledger rewards" }),
                          (0, n.jsx)("th", { children: "Unlocked" }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("tbody", {
                      children: [0, 15, 30, 45, 60, 75, 90].map((e) => {
                        let t = (0, a.lh)(e);
                        return (0, n.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, n.jsx)("td", { children: e }),
                              (0, n.jsxs)("td", {
                                children: [t.mkt.toFixed(2), "%"],
                              }),
                              (0, n.jsxs)("td", {
                                children: [t.team.toFixed(2), "%"],
                              }),
                              (0, n.jsxs)("td", {
                                children: [t.ledger.toFixed(2), "%"],
                              }),
                              (0, n.jsxs)("td", {
                                children: [
                                  (t.mkt + t.team + t.ledger).toFixed(2),
                                  "%",
                                ],
                              }),
                            ],
                          },
                          e
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function o() {
        return (0, n.jsxs)("div", {
          className: "tk-tax",
          children: [
            (0, n.jsxs)("div", {
              className: "tk-tax-top",
              children: [
                (0, n.jsxs)("div", {
                  className: "tk-tax-big",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "tnum",
                      children: [a.AQ.buy, "%"],
                    }),
                    (0, n.jsx)("small", { children: "buy" }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "tk-tax-slash",
                  "aria-hidden": "true",
                  children: "/",
                }),
                (0, n.jsxs)("div", {
                  className: "tk-tax-big",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "tnum",
                      children: [a.AQ.sell, "%"],
                    }),
                    (0, n.jsx)("small", { children: "sell" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tk-tax-bar",
              role: "img",
              "aria-label":
                "Of every 2% tax, two thirds funds development, marketing and growth, and one third funds buybacks for ledger rewards and burns.",
              children: [
                (0, n.jsx)("i", {
                  style: { flex: a.AQ.growth, background: "#7346e6" },
                  children: (0, n.jsx)("span", { children: "2/3" }),
                }),
                (0, n.jsx)("i", {
                  style: { flex: a.AQ.buyback, background: "#d4703a" },
                  children: (0, n.jsx)("span", { children: "1/3" }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tk-tax-split",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("i", { style: { background: "#7346e6" } }),
                    (0, n.jsx)("b", {
                      children: "Development, marketing and growth",
                    }),
                    (0, n.jsx)("span", {
                      children:
                        "Two thirds of the tax funds building and growing TasQ.",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("i", { style: { background: "#d4703a" } }),
                    (0, n.jsx)("b", { children: "Buybacks" }),
                    (0, n.jsx)("span", {
                      children:
                        "One third buys $TasQ back, to reward ledger nodes and to burn.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    31509: function (e, t, s) {
      "use strict";
      s.d(t, {
        ContractCard: function () {
          return x;
        },
        FeeCalc: function () {
          return h;
        },
        FeeTable: function () {
          return u;
        },
        JoinTrack: function () {
          return c;
        },
        LedgerArt: function () {
          return d;
        },
        LendArt: function () {
          return o;
        },
      });
      var n = s(57437),
        r = s(2265);
      let a = {
        wallet: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("rect", {
              x: "3",
              y: "6",
              width: "18",
              height: "13",
              rx: "3",
            }),
            (0, n.jsx)("path", { d: "M3 9.5h13.5a2.5 2.5 0 0 1 0 5H15" }),
            (0, n.jsx)("path", { d: "M6 6l9-2.6a1.5 1.5 0 0 1 1.9 1.4V6" }),
            (0, n.jsx)("circle", {
              cx: "16.2",
              cy: "12",
              r: ".9",
              fill: "currentColor",
              stroke: "none",
            }),
          ],
        }),
        shield: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("path", {
              d: "M12 3l7.5 3v5.6c0 4.6-3.2 8.2-7.5 9.4-4.3-1.2-7.5-4.8-7.5-9.4V6z",
            }),
            (0, n.jsx)("path", { d: "M8.6 12.1l2.3 2.3 4.5-4.6" }),
          ],
        }),
        server: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("rect", {
              x: "4",
              y: "4",
              width: "16",
              height: "7",
              rx: "2",
            }),
            (0, n.jsx)("rect", {
              x: "4",
              y: "13",
              width: "16",
              height: "7",
              rx: "2",
            }),
            (0, n.jsx)("path", {
              d: "M8 7.5h.01M8 16.5h.01",
              strokeWidth: "2.6",
            }),
            (0, n.jsx)("path", { d: "M12 7.5h4M12 16.5h4" }),
          ],
        }),
        chip: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("rect", {
              x: "6",
              y: "6",
              width: "12",
              height: "12",
              rx: "2.5",
            }),
            (0, n.jsx)("rect", {
              x: "9.5",
              y: "9.5",
              width: "5",
              height: "5",
              rx: "1",
            }),
            (0, n.jsx)("path", {
              d: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3",
            }),
          ],
        }),
        nodes: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("circle", { cx: "12", cy: "12", r: "2.6" }),
            (0, n.jsx)("circle", { cx: "12", cy: "3.8", r: "1.6" }),
            (0, n.jsx)("circle", { cx: "19.1", cy: "16.1", r: "1.6" }),
            (0, n.jsx)("circle", { cx: "4.9", cy: "16.1", r: "1.6" }),
            (0, n.jsx)("path", {
              d: "M12 5.4v4M17.7 15.3l-3.4-2M6.3 15.3l3.4-2",
            }),
          ],
        }),
        coin: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("ellipse", { cx: "12", cy: "12", rx: "8.5", ry: "8.5" }),
            (0, n.jsx)("ellipse", { cx: "12", cy: "12", rx: "5.6", ry: "5.6" }),
            (0, n.jsx)("path", { d: "M13.6 13.6l2 2" }),
          ],
        }),
        percent: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("path", { d: "M18 6L6 18" }),
            (0, n.jsx)("circle", { cx: "7.5", cy: "7.5", r: "2.3" }),
            (0, n.jsx)("circle", { cx: "16.5", cy: "16.5", r: "2.3" }),
          ],
        }),
        copy: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("rect", {
              x: "8",
              y: "8",
              width: "12",
              height: "12",
              rx: "2.5",
            }),
            (0, n.jsx)("path", {
              d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2",
            }),
          ],
        }),
        warn: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("path", { d: "M12 3.5l9 16H3z" }),
            (0, n.jsx)("path", { d: "M12 10v4.2M12 17.2v.3" }),
          ],
        }),
        bolt: (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("path", {
            d: "M13 3L5 13.5h6L10 21l8-10.5h-6z",
          }),
        }),
        arrow: (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }),
        }),
        down: (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("path", { d: "M12 5v14M6 13l6 6 6-6" }),
        }),
        ledger: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("path", { d: "M12 3l8 4.5v9L12 21l-8-4.5v-9z" }),
            (0, n.jsx)("path", { d: "M4 7.5l8 4.5 8-4.5M12 12v9" }),
          ],
        }),
      };
      function l(e) {
        let { name: t, size: s = 20, strokeWidth: r = 1.6, ...l } = e;
        return (0, n.jsx)("svg", {
          width: s,
          height: s,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          ...l,
          children: a[t],
        });
      }
      var i = s(69324);
      function c() {
        return (0, n.jsxs)("div", {
          className: "tk-track",
          children: [
            (0, n.jsxs)("div", {
              className: "tk-track-line",
              "aria-hidden": "true",
              children: [(0, n.jsx)("i", {}), (0, n.jsx)("b", {})],
            }),
            [
              {
                icon: "wallet",
                n: "01",
                t: "Hold $TasQ",
                d: "Keep the required amount in your wallet. The amount is published at launch.",
              },
              {
                icon: "shield",
                n: "02",
                t: "Verify in the app",
                d: "Sign in with Privy. The app checks your balance on Robinhood Chain and verifies the wallet.",
              },
              {
                icon: "server",
                n: "03",
                t: "Connect your machine",
                d: "Your verified wallet authorizes your computer to join the network and take work.",
              },
            ].map((e, t) =>
              (0, n.jsxs)(
                "div",
                {
                  className: "tk-step",
                  style: { "--i": t },
                  children: [
                    (0, n.jsxs)("div", {
                      className: "tk-step-node",
                      children: [
                        (0, n.jsx)("span", { className: "tk-step-ring" }),
                        (0, n.jsx)(l, { name: e.icon, size: 26 }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "tk-step-n",
                      children: e.n,
                    }),
                    (0, n.jsx)("h3", { className: "tk-step-t", children: e.t }),
                    (0, n.jsx)("p", { className: "tk-step-d", children: e.d }),
                  ],
                },
                e.n
              )
            ),
          ],
        });
      }
      function o() {
        return (0, n.jsxs)("svg", {
          className: "tk-art",
          viewBox: "0 0 520 240",
          "aria-hidden": "true",
          children: [
            (0, n.jsxs)("defs", {
              children: [
                (0, n.jsxs)("linearGradient", {
                  id: "tkLane",
                  x1: "0",
                  x2: "1",
                  children: [
                    (0, n.jsx)("stop", {
                      offset: "0",
                      stopColor: "#8b4dff",
                      stopOpacity: "0",
                    }),
                    (0, n.jsx)("stop", {
                      offset: "1",
                      stopColor: "#8b4dff",
                      stopOpacity: ".7",
                    }),
                  ],
                }),
                (0, n.jsxs)("radialGradient", {
                  id: "tkDie",
                  children: [
                    (0, n.jsx)("stop", { offset: "0", stopColor: "#d9c6ff" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#8b4dff" }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("path", {
              d: "M24 120H190",
              stroke: "url(#tkLane)",
              strokeWidth: "1.5",
              strokeDasharray: "3 7",
              className: "tk-dash",
            }),
            (0, n.jsx)("path", {
              d: "M330 120H496",
              stroke: "#5ad19a",
              strokeOpacity: ".45",
              strokeWidth: "1.5",
              strokeDasharray: "3 7",
              className: "tk-dash",
            }),
            (0, n.jsx)("text", {
              x: "24",
              y: "98",
              className: "tk-art-label",
              children: "Tasks in",
            }),
            (0, n.jsx)("text", {
              x: "496",
              y: "98",
              textAnchor: "end",
              className: "tk-art-label",
              children: "Paid out",
            }),
            [0, 1, 2].map((e) =>
              (0, n.jsxs)(
                "g",
                {
                  className: "tk-unit",
                  style: { animationDelay: "".concat(1 * e, "s") },
                  children: [
                    (0, n.jsx)("rect", {
                      x: "22",
                      y: "111",
                      width: "18",
                      height: "18",
                      rx: "4",
                      fill: "rgba(139,77,255,.25)",
                      stroke: "#b391ff",
                      strokeWidth: "1.4",
                    }),
                    (0, n.jsx)("rect", {
                      x: "27",
                      y: "116",
                      width: "8",
                      height: "8",
                      rx: "1.5",
                      fill: "#d9c6ff",
                    }),
                  ],
                },
                e
              )
            ),
            (0, n.jsxs)("g", {
              children: [
                (0, n.jsx)("rect", {
                  x: "200",
                  y: "60",
                  width: "120",
                  height: "120",
                  rx: "18",
                  fill: "#141020",
                  stroke: "rgba(179,145,255,.5)",
                  strokeWidth: "1.5",
                }),
                [0, 1, 2, 3].map((e) =>
                  (0, n.jsxs)(
                    "g",
                    {
                      stroke: "rgba(179,145,255,.45)",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      children: [
                        (0, n.jsx)("path", {
                          d: "M".concat(222 + 25 * e, " 60v-12"),
                        }),
                        (0, n.jsx)("path", {
                          d: "M".concat(222 + 25 * e, " 180v12"),
                        }),
                        (0, n.jsx)("path", {
                          d: "M200 ".concat(82 + 25 * e, "h-12"),
                        }),
                        (0, n.jsx)("path", {
                          d: "M320 ".concat(82 + 25 * e, "h12"),
                        }),
                      ],
                    },
                    e
                  )
                ),
                (0, n.jsx)("rect", {
                  x: "230",
                  y: "90",
                  width: "60",
                  height: "60",
                  rx: "8",
                  fill: "url(#tkDie)",
                  className: "tk-die",
                }),
                (0, n.jsx)("rect", {
                  x: "230",
                  y: "90",
                  width: "60",
                  height: "60",
                  rx: "8",
                  fill: "none",
                  stroke: "#efe6ff",
                  strokeOpacity: ".6",
                }),
              ],
            }),
            [0, 1, 2].map((e) =>
              (0, n.jsxs)(
                "g",
                {
                  className: "tk-coin",
                  style: { animationDelay: "".concat(0.55 + 1 * e, "s") },
                  children: [
                    (0, n.jsx)("circle", {
                      cx: "344",
                      cy: "120",
                      r: "10",
                      fill: "#1d1730",
                      stroke: "#b391ff",
                      strokeWidth: "1.6",
                    }),
                    (0, n.jsx)("circle", {
                      cx: "344",
                      cy: "120",
                      r: "5.5",
                      fill: "none",
                      stroke: "#d9c6ff",
                      strokeWidth: "1.2",
                    }),
                  ],
                },
                e
              )
            ),
          ],
        });
      }
      function d() {
        let e = Array.from({ length: 8 }, (e, t) => {
          let s = -Math.PI / 2 + (t / 8) * Math.PI * 2;
          return { x: 260 + 190 * Math.cos(s), y: 120 + 88 * Math.sin(s) };
        });
        return (0, n.jsxs)("svg", {
          className: "tk-art",
          viewBox: "0 0 520 240",
          "aria-hidden": "true",
          children: [
            (0, n.jsx)("ellipse", {
              cx: "260",
              cy: "120",
              rx: "190",
              ry: "88",
              fill: "none",
              stroke: "rgba(179,145,255,.18)",
              strokeDasharray: "2 6",
            }),
            e.map((e, t) =>
              (0, n.jsx)(
                "line",
                {
                  x1: "260",
                  y1: "120",
                  x2: e.x,
                  y2: e.y,
                  className: "tk-vline",
                  style: { animationDelay: "".concat(0.5 * t, "s") },
                },
                "l".concat(t)
              )
            ),
            (0, n.jsxs)("g", {
              className: "tk-core",
              children: [
                (0, n.jsx)("path", {
                  d: "M260 84l32 18v36l-32 18-32-18v-36z",
                  fill: "#16112a",
                  stroke: "#b391ff",
                  strokeWidth: "1.6",
                }),
                (0, n.jsx)("path", {
                  d: "M228 102l32 18 32-18M260 120v36",
                  fill: "none",
                  stroke: "rgba(179,145,255,.55)",
                  strokeWidth: "1.3",
                }),
              ],
            }),
            (0, n.jsx)("circle", {
              cx: "260",
              cy: "120",
              r: "46",
              fill: "none",
              stroke: "#b391ff",
              className: "tk-core-ring",
            }),
            e.map((e, t) =>
              (0, n.jsxs)(
                "g",
                {
                  className: "tk-vnode",
                  style: { animationDelay: "".concat(0.5 * t, "s") },
                  children: [
                    (0, n.jsx)("circle", { cx: e.x, cy: e.y, r: "14" }),
                    (0, n.jsx)("path", {
                      d: "M"
                        .concat(e.x - 5, " ")
                        .concat(e.y + 0.5, "l3.4 3.4 6.4-6.6"),
                      fill: "none",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                },
                "n".concat(t)
              )
            ),
          ],
        });
      }
      function h() {
        let [e, t] = (0, r.useState)("lend"),
          [s, a] = (0, r.useState)(1e3),
          c = (0, r.useMemo)(() => {
            if ("lend" === e) {
              let e = (0, i.X8)(s, !1),
                t = (0, i.X8)(s, !0);
              return {
                a: { main: e.keep, fee: e.fee, rate: e.rate },
                b: { main: t.keep, fee: t.fee, rate: t.rate },
                scale: s,
                save: t.keep - e.keep,
              };
            }
            let t = (0, i.zf)(s, !1),
              n = (0, i.zf)(s, !0);
            return {
              a: { main: s, fee: t.fee, rate: t.rate, total: t.total },
              b: { main: s, fee: n.fee, rate: n.rate, total: n.total },
              scale: t.total,
              save: t.total - n.total,
            };
          }, [e, s]),
          o = "lend" === e,
          d = [
            { k: "Without $TasQ", v: c.a, holder: !1 },
            { k: "Holding $TasQ", v: c.b, holder: !0 },
          ];
        return (0, n.jsxs)("div", {
          className: "tk-calc",
          children: [
            (0, n.jsxs)("div", {
              className: "tk-calc-top",
              children: [
                (0, n.jsxs)("div", {
                  className: "tk-seg",
                  role: "tablist",
                  "aria-label": "Fee type",
                  children: [
                    (0, n.jsx)("button", {
                      role: "tab",
                      "aria-selected": o,
                      className: o ? "on" : "",
                      onClick: () => t("lend"),
                      children: "I lend compute",
                    }),
                    (0, n.jsx)("button", {
                      role: "tab",
                      "aria-selected": !o,
                      className: o ? "" : "on",
                      onClick: () => t("rent"),
                      children: "I rent compute",
                    }),
                    (0, n.jsx)("span", {
                      className: "tk-seg-thumb",
                      style: {
                        transform: "translateX(".concat(o ? 0 : 100, "%)"),
                      },
                    }),
                  ],
                }),
                (0, n.jsxs)("label", {
                  className: "tk-amount",
                  children: [
                    (0, n.jsx)("span", {
                      className: "tk-amount-l",
                      children: o ? "Earned from tasks" : "Job price",
                    }),
                    (0, n.jsx)("span", {
                      className: "tk-amount-v tnum",
                      children: (0, i.TE)(s),
                    }),
                    (0, n.jsx)("input", {
                      type: "range",
                      min: 50,
                      max: 1e4,
                      step: 50,
                      value: s,
                      onChange: (e) => a(+e.target.value),
                      "aria-label": o ? "Amount earned" : "Job price",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "tk-bars",
              children: d.map((e) => {
                let { k: t, v: s, holder: r } = e;
                return (0, n.jsxs)(
                  "div",
                  {
                    className: "tk-bar-row".concat(r ? " holder" : ""),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "tk-bar-head",
                        children: [
                          (0, n.jsx)("span", { children: t }),
                          (0, n.jsxs)("span", {
                            className: "tk-bar-fee tnum",
                            children: [
                              "fee ",
                              (0, i.hd)(s.rate),
                              " \xb7 ",
                              (0, i.TE)(s.fee),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "tk-bar",
                        children: [
                          (0, n.jsx)("i", {
                            className: "tk-bar-main",
                            style: {
                              width: "".concat((s.main / c.scale) * 100, "%"),
                            },
                          }),
                          (0, n.jsx)("i", {
                            className: "tk-bar-cut",
                            style: {
                              width: "".concat((s.fee / c.scale) * 100, "%"),
                            },
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "tk-bar-foot tnum",
                        children: o
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                "You keep ",
                                (0, n.jsx)("b", {
                                  children: (0, i.TE)(s.main),
                                }),
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                "You pay ",
                                (0, n.jsx)("b", {
                                  children: (0, i.TE)(s.total),
                                }),
                              ],
                            }),
                      }),
                    ],
                  },
                  t
                );
              }),
            }),
            (0, n.jsxs)("div", {
              className: "tk-calc-foot",
              children: [
                (0, n.jsxs)("span", {
                  className: "tk-save tnum",
                  children: [
                    (0, n.jsx)(l, { name: "percent", size: 16 }),
                    "Holders ",
                    o ? "keep" : "save",
                    " ",
                    (0, i.TE)(c.save),
                    " more on ",
                    (0, i.TE)(s),
                  ],
                }),
                (0, n.jsx)("span", {
                  className: "tk-note",
                  children:
                    "Indicative rates. Final fees are set in the contracts at launch.",
                }),
              ],
            }),
          ],
        });
      }
      function u() {
        return (0, n.jsxs)("div", {
          className: "tk-feetable",
          children: [
            (0, n.jsxs)("div", {
              className: "tk-ft-row head",
              children: [
                (0, n.jsx)("span", {}),
                (0, n.jsx)("span", { children: "Standard" }),
                (0, n.jsx)("span", { children: "Holding $TasQ" }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tk-ft-row",
              children: [
                (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsx)(l, { name: "chip", size: 18 }),
                    "Lending compute",
                    (0, n.jsx)("small", { children: "share of what you earn" }),
                  ],
                }),
                (0, n.jsx)("span", {
                  className: "tnum",
                  children: (0, i.hd)(i.JG.lendBase),
                }),
                (0, n.jsx)("span", {
                  className: "tnum brand",
                  children: (0, i.hd)((0, i.IX)(i.JG.lendBase)),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "tk-ft-row",
              children: [
                (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsx)(l, { name: "bolt", size: 18 }),
                    "Renting and workloads",
                    (0, n.jsx)("small", { children: "added to the job price" }),
                  ],
                }),
                (0, n.jsx)("span", {
                  className: "tnum",
                  children: (0, i.hd)(i.JG.rentBase),
                }),
                (0, n.jsx)("span", {
                  className: "tnum brand",
                  children: (0, i.hd)((0, i.IX)(i.JG.rentBase)),
                }),
              ],
            }),
          ],
        });
      }
      function x() {
        let [e, t] = (0, r.useState)(!1),
          s = !!i.r.address;
        return (0, n.jsxs)("div", {
          className: "tk-ca",
          children: [
            (0, n.jsx)("div", {
              className: "tk-ca-icon",
              children: (0, n.jsx)(l, { name: "shield", size: 24 }),
            }),
            (0, n.jsxs)("div", {
              className: "tk-ca-body",
              children: [
                (0, n.jsx)("div", {
                  className: "tk-ca-l",
                  children: "Official contract address \xb7 Robinhood Chain",
                }),
                s
                  ? (0, n.jsxs)("button", {
                      className: "tk-ca-v mono",
                      onClick: () => {
                        var e;
                        null === (e = navigator.clipboard) ||
                          void 0 === e ||
                          e.writeText(i.r.address),
                          t(!0),
                          setTimeout(() => t(!1), 1600);
                      },
                      children: [
                        i.r.address,
                        (0, n.jsx)(l, { name: "copy", size: 16 }),
                        (0, n.jsx)("span", {
                          className: "tk-ca-copied",
                          children: e ? "Copied" : "",
                        }),
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: "tk-ca-v mono pending",
                      children: "Not published yet",
                    }),
                (0, n.jsxs)("p", {
                  className: "tk-ca-warn",
                  children: [
                    (0, n.jsx)(l, { name: "warn", size: 16 }),
                    "Beware of fake contract addresses. The only official address will appear here and on official TasQ channels.",
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    24893: function () {},
    25566: function (e) {
      var t,
        s,
        n,
        r = (e.exports = {});
      function a() {
        throw Error("setTimeout has not been defined");
      }
      function l() {
        throw Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === a || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (s) {
          try {
            return t.call(null, e, 0);
          } catch (s) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          t = a;
        }
        try {
          s = "function" == typeof clearTimeout ? clearTimeout : l;
        } catch (e) {
          s = l;
        }
      })();
      var c = [],
        o = !1,
        d = -1;
      function h() {
        o &&
          n &&
          ((o = !1), n.length ? (c = n.concat(c)) : (d = -1), c.length && u());
      }
      function u() {
        if (!o) {
          var e = i(h);
          o = !0;
          for (var t = c.length; t; ) {
            for (n = c, c = []; ++d < t; ) n && n[d].run();
            (d = -1), (t = c.length);
          }
          (n = null),
            (o = !1),
            (function (e) {
              if (s === clearTimeout) return clearTimeout(e);
              if ((s === l || !s) && clearTimeout)
                return (s = clearTimeout), clearTimeout(e);
              try {
                s(e);
              } catch (t) {
                try {
                  return s.call(null, e);
                } catch (t) {
                  return s.call(this, e);
                }
              }
            })(e);
        }
      }
      function x(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (r.nextTick = function (e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
        c.push(new x(e, t)), 1 !== c.length || o || i(u);
      }),
        (x.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = m),
        (r.addListener = m),
        (r.once = m),
        (r.off = m),
        (r.removeListener = m),
        (r.removeAllListeners = m),
        (r.emit = m),
        (r.prependListener = m),
        (r.prependOnceListener = m),
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
    90328: function (e, t, s) {
      "use strict";
      function n(e) {
        let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
        return Object.assign(t, {
          extend: (function e(t) {
            return (s) => {
              let n = "function" == typeof s ? s(t) : s,
                r = { ...t, ...n };
              return Object.assign(r, { extend: e(r) });
            };
          })(t),
        });
      }
      function r() {
        return {};
      }
      s.d(t, {
        W: function () {
          return r;
        },
        a: function () {
          return n;
        },
      });
    },
  },
  function (e) {
    e.O(0, [6473, 2972, 7532, 2971, 2117, 1744], function () {
      return e((e.s = 50603));
    }),
      (_N_E = e.O());
  },
]);

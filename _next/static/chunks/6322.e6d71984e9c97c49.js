"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6322],
  {
    79205: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = i(2265);
      let l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, i) =>
            i ? i.toUpperCase() : t.toLowerCase()
          ),
        o = (e) => {
          let t = s(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        r = function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return t
            .filter((e, t, i) => !!e && "" !== e.trim() && i.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        a = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let h = (0, n.forwardRef)((e, t) => {
          let {
            color: i = "currentColor",
            size: l = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: h = "",
            children: d,
            iconNode: u,
            ...f
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: l,
              height: l,
              stroke: i,
              strokeWidth: o ? (24 * Number(s)) / Number(l) : s,
              className: r("lucide", h),
              ...(!d && !a(f) && { "aria-hidden": "true" }),
              ...f,
            },
            [
              ...u.map((e) => {
                let [t, i] = e;
                return (0, n.createElement)(t, i);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        d = (e, t) => {
          let i = (0, n.forwardRef)((i, s) => {
            let { className: a, ...c } = i;
            return (0, n.createElement)(h, {
              ref: s,
              iconNode: t,
              className: r("lucide-".concat(l(o(e))), "lucide-".concat(e), a),
              ...c,
            });
          });
          return (i.displayName = o(e)), i;
        };
    },
    30401: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, i(79205).Z)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    78867: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, i(79205).Z)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    56322: function (e, t, i) {
      let n;
      i.d(t, {
        W: function () {
          return P;
        },
        a: function () {
          return Q;
        },
        i: function () {
          return Y;
        },
        u: function () {
          return Z;
        },
      });
      var l = i(57437),
        s = i(2265);
      let o = s.forwardRef(function (e, t) {
        let { title: i, titleId: n, ...l } = e;
        return s.createElement(
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
              "aria-labelledby": n,
            },
            l
          ),
          i ? s.createElement("title", { id: n }, i) : null,
          s.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
          })
        );
      });
      var r = i(54887);
      function a(e, t, i) {
        let n,
          l = i.initialDeps ?? [],
          s = !0;
        function o() {
          let o = e();
          return (
            (o.length !== l.length || o.some((e, t) => l[t] !== e)) &&
              ((l = o),
              (n = t(...o)),
              (null == i ? void 0 : i.onChange) &&
                !(s && i.skipInitialOnChange) &&
                i.onChange(n),
              (s = !1)),
            n
          );
        }
        return (
          (o.updateDeps = (e) => {
            l = e;
          }),
          o
        );
      }
      function c(e, t) {
        if (void 0 !== e) return e;
        throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
      }
      let h = (e, t) => 1.01 > Math.abs(e - t),
        d = (e, t, i) => {
          let n;
          return Object.assign(
            function (...l) {
              e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, l), i));
            },
            {
              cancel: () => {
                e.clearTimeout(n);
              },
            }
          );
        },
        u = () => {
          if (void 0 !== n) return n;
          if ("undefined" == typeof navigator) return (n = !1);
          if (/iP(hone|od|ad)/.test(navigator.userAgent)) return (n = !0);
          let e = navigator.maxTouchPoints;
          return (n =
            "MacIntel" === navigator.platform && void 0 !== e && e > 0);
        },
        f = (e) => {
          let { offsetWidth: t, offsetHeight: i } = e;
          return { width: t, height: i };
        },
        m = (e) => e,
        g = (e) => {
          let t = Math.max(e.startIndex - e.overscan, 0),
            i = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1,
            n = Array(i);
          for (let e = 0; e < i; e++) n[e] = t + e;
          return n;
        },
        p = (e, t) => {
          let i = e.scrollElement;
          if (!i) return;
          let n = e.targetWindow;
          if (!n) return;
          let l = (e) => {
            let { width: i, height: n } = e;
            t({ width: Math.round(i), height: Math.round(n) });
          };
          if ((l(f(i)), !n.ResizeObserver)) return () => {};
          let s = new n.ResizeObserver((t) => {
            let n = () => {
              let e = t[0];
              if (null == e ? void 0 : e.borderBoxSize) {
                let t = e.borderBoxSize[0];
                if (t) {
                  l({ width: t.inlineSize, height: t.blockSize });
                  return;
                }
              }
              l(f(i));
            };
            e.options.useAnimationFrameWithResizeObserver
              ? requestAnimationFrame(n)
              : n();
          });
          return (
            s.observe(i, { box: "border-box" }),
            () => {
              s.unobserve(i);
            }
          );
        },
        v = { passive: !0 },
        w = "undefined" == typeof window || "onscrollend" in window,
        y = (e, t, i) => {
          let n = e.scrollElement;
          if (!n) return;
          let l = e.targetWindow;
          if (!l) return;
          let s = e.options.useScrollendEvent && w,
            o = 0,
            r = s
              ? null
              : d(l, () => t(i(n), !1), e.options.isScrollingResetDelay),
            a = (e) => () => {
              (o = i(n)), null == r || r(), t(o, e);
            },
            c = a(!0),
            h = a(!1);
          return (
            n.addEventListener("scroll", c, v),
            s && n.addEventListener("scrollend", h, v),
            () => {
              n.removeEventListener("scroll", c),
                s && n.removeEventListener("scrollend", h),
                null == r || r.cancel();
            }
          );
        },
        x = (e, t) =>
          y(e, t, (t) => {
            let { horizontal: i, isRtl: n } = e.options;
            return i ? t.scrollLeft * ((n && -1) || 1) : t.scrollTop;
          }),
        b = (e, t, i) => {
          if (i.options.useCachedMeasurements) {
            let t = i.indexFromElement(e),
              n = i.options.getItemKey(t);
            return i.itemSizeCache.get(n) ?? i.options.estimateSize(t);
          }
          if (null == t ? void 0 : t.borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e)
              return Math.round(
                e[i.options.horizontal ? "inlineSize" : "blockSize"]
              );
          }
          if (!t) {
            let t = i.indexFromElement(e),
              n = i.options.getItemKey(t),
              l = i.itemSizeCache.get(n);
            if (void 0 !== l) return l;
          }
          return e[i.options.horizontal ? "offsetWidth" : "offsetHeight"];
        },
        S = (e, { adjustments: t = 0, behavior: i }, n) => {
          var l, s;
          null == (s = null == (l = n.scrollElement) ? void 0 : l.scrollTo) ||
            s.call(l, {
              [n.options.horizontal ? "left" : "top"]: e + t,
              behavior: i,
            });
        };
      class C {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollState = null),
            (this.measurementsCache = []),
            (this._singleLaneMeasurements = null),
            (this.itemSizeCache = new Map()),
            (this.itemSizeCacheVersion = 0),
            (this.laneAssignments = new Map()),
            (this.pendingMin = null),
            (this.prevLanes = void 0),
            (this.lanesChangedFlag = !1),
            (this.lanesSettling = !1),
            (this.pendingScrollAnchor = null),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this._iosDeferredAdjustment = 0),
            (this._iosTouching = !1),
            (this._iosJustTouchEnded = !1),
            (this._iosTouchEndTimerId = null),
            (this._intendedScrollOffset = null),
            (this._clampedAdjustment = null),
            (this.elementsCache = new Map()),
            (this.now = () => {
              var e, t, i;
              return (
                (null ==
                (i =
                  null ==
                  (t = null == (e = this.targetWindow) ? void 0 : e.performance)
                    ? void 0
                    : t.now)
                  ? void 0
                  : i.call(t)) ?? Date.now()
              );
            }),
            (this.observer = (() => {
              let e = null,
                t = () =>
                  e ||
                  (this.targetWindow && this.targetWindow.ResizeObserver
                    ? (e = new this.targetWindow.ResizeObserver((e) => {
                        e.forEach((e) => {
                          let t = () => {
                            let t = e.target,
                              i = this.indexFromElement(t);
                            if (!t.isConnected) {
                              for (let [e, i] of (this.observer.unobserve(t),
                              this.elementsCache))
                                if (i === t) {
                                  this.elementsCache.delete(e);
                                  break;
                                }
                              return;
                            }
                            this.isIndexInRange(i) &&
                              this.shouldMeasureDuringScroll(i) &&
                              this.resizeItem(
                                i,
                                this.options.measureElement(t, e, this)
                              );
                          };
                          this.options.useAnimationFrameWithResizeObserver
                            ? requestAnimationFrame(t)
                            : t();
                        });
                      }))
                    : null);
              return {
                disconnect: () => {
                  var i;
                  null == (i = t()) || i.disconnect(), (e = null);
                },
                observe: (e) => {
                  var i;
                  return null == (i = t())
                    ? void 0
                    : i.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var i;
                  return null == (i = t()) ? void 0 : i.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              var t;
              let i = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: m,
                rangeExtractor: g,
                onChange: () => {},
                measureElement: b,
                initialRect: { width: 0, height: 0 },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                anchorTo: "start",
                followOnAppend: !1,
                scrollEndThreshold: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                useScrollendEvent: !1,
                useAnimationFrameWithResizeObserver: !1,
                laneAssignmentMode: "estimate",
                useCachedMeasurements: !1,
              };
              for (let t in e) {
                let n = e[t];
                void 0 !== n && (i[t] = n);
              }
              let n = this.options,
                l = null,
                s = null,
                o = !1;
              if (
                void 0 !== n &&
                n.enabled &&
                i.enabled &&
                "end" === i.anchorTo &&
                null !== this.scrollElement
              ) {
                let e = n.count,
                  r = i.count,
                  a = this.getMeasurements(),
                  c =
                    (null == (t = this._singleLaneMeasurements)
                      ? void 0
                      : t.items) ?? a,
                  h = (e) => {
                    var t;
                    return "object" == typeof (t = c[e]) ? t.key : t;
                  },
                  d = e > 0 ? h(0) : null,
                  u = e > 0 ? h(e - 1) : null;
                if (
                  r !== e ||
                  (e > 0 &&
                    r > 0 &&
                    (i.getItemKey(0) !== d || i.getItemKey(r - 1) !== u))
                ) {
                  o = !0;
                  let t =
                    e > 0
                      ? this.getVirtualItemForOffset(this.getScrollOffset()) ??
                        a[0]
                      : null;
                  t && (l = [t.key, this.getScrollOffset() - t.start]);
                  let c =
                    !0 === i.followOnAppend ? "auto" : i.followOnAppend || null;
                  c &&
                    r > 0 &&
                    this.isAtEnd(n.scrollEndThreshold) &&
                    (0 === e || i.getItemKey(r - 1) !== u) &&
                    (r > e ||
                      (function (e, t, i, n) {
                        if (0 === t) return !1;
                        let l = n(0),
                          s = new Set(),
                          o = 0;
                        for (; o < e; ) {
                          let e = i(o);
                          if (e === l) break;
                          s.add(e), o++;
                        }
                        let r = e - o;
                        if (0 === r || r >= t) return !1;
                        for (let e = 0; e < r; e++)
                          if (n(e) !== i(o + e)) return !1;
                        for (let e = r; e < t; e++) if (s.has(n(e))) return !1;
                        return !0;
                      })(e, r, h, i.getItemKey)) &&
                    (s = c);
                }
              }
              (this.options = i),
                o && ((this.pendingMin = 0), this.itemSizeCacheVersion++);
              let r = !1,
                a = 0;
              if (l && null !== this.scrollOffset) {
                let [e, t] = l,
                  i = this.getMeasurements(),
                  { count: n, getItemKey: o } = this.options,
                  c = 0;
                for (; c < n && o(c) !== e; ) c++;
                if (c < n) {
                  let e = i[c];
                  if (e) {
                    let i = Math.max(0, e.start + t);
                    s ||
                      i === this.scrollOffset ||
                      ((a = i - this.scrollOffset),
                      (this.scrollOffset = i),
                      (r = !0));
                  }
                }
              }
              (r || s) &&
                (this.pendingScrollAnchor = [
                  r ? l[0] : null,
                  r ? l[1] : 0,
                  s,
                  a,
                ]);
            }),
            (this.notify = (e) => {
              var t, i;
              null == (i = (t = this.options).onChange) || i.call(t, this, e);
            }),
            (this.maybeNotify = a(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              }
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                this.observer.disconnect(),
                null != this.rafId &&
                  this.targetWindow &&
                  (this.targetWindow.cancelAnimationFrame(this.rafId),
                  (this.rafId = null)),
                (this.scrollState = null),
                (this.isScrolling = !1),
                (this.scrollDirection = null),
                (this._iosDeferredAdjustment = 0),
                (this._iosTouching = !1),
                (this._iosJustTouchEnded = !1),
                (this._clampedAdjustment = null),
                (this.scrollElement = null),
                (this.targetWindow = null);
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e, t;
              let i = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== i) {
                if ((this.cleanup(), !i)) {
                  this.maybeNotify();
                  return;
                }
                if (
                  ((this.scrollElement = i),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this.elementsCache.forEach((e) => {
                    this.observer.observe(e);
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    })
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      if (
                        t &&
                        null === this._intendedScrollOffset &&
                        e === this.scrollOffset
                      )
                        return;
                      null !== this._intendedScrollOffset &&
                        1.5 > Math.abs(e - this._intendedScrollOffset) &&
                        (e = this._intendedScrollOffset),
                        (this._intendedScrollOffset = null),
                        null !== this._clampedAdjustment &&
                          Math.abs(e - this._clampedAdjustment.maxAtWrite) >=
                            1.5 &&
                          (this._clampedAdjustment = null),
                        (this.scrollAdjustments = 0);
                      let i = this.getScrollOffset();
                      (this.scrollDirection = t
                        ? i === e
                          ? this.scrollDirection
                          : i < e
                          ? "forward"
                          : "backward"
                        : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this._flushIosDeferredIfReady(),
                        this.scrollState && this.scheduleScrollReconcile(),
                        this.maybeNotify();
                    })
                  ),
                  "addEventListener" in this.scrollElement)
                ) {
                  let e = this.scrollElement,
                    t = () => {
                      (this._iosTouching = !0),
                        (this._iosJustTouchEnded = !1),
                        null !== this._iosTouchEndTimerId &&
                          null != this.targetWindow &&
                          (this.targetWindow.clearTimeout(
                            this._iosTouchEndTimerId
                          ),
                          (this._iosTouchEndTimerId = null));
                    },
                    i = () => {
                      (this._iosTouching = !1),
                        u() &&
                          null != this.targetWindow &&
                          ((this._iosJustTouchEnded = !0),
                          (this._iosTouchEndTimerId =
                            this.targetWindow.setTimeout(() => {
                              (this._iosJustTouchEnded = !1),
                                (this._iosTouchEndTimerId = null),
                                this._flushIosDeferredIfReady();
                            }, 150)));
                    };
                  e.addEventListener("touchstart", t, v),
                    e.addEventListener("touchend", i, v),
                    this.unsubs.push(() => {
                      e.removeEventListener("touchstart", t),
                        e.removeEventListener("touchend", i),
                        null !== this._iosTouchEndTimerId &&
                          null != this.targetWindow &&
                          (this.targetWindow.clearTimeout(
                            this._iosTouchEndTimerId
                          ),
                          (this._iosTouchEndTimerId = null));
                    });
                }
                this._scrollToOffset(this.getScrollOffset(), {
                  adjustments: void 0,
                  behavior: void 0,
                });
              }
              let n = this.pendingScrollAnchor;
              if (
                ((this.pendingScrollAnchor = null),
                n && this.scrollElement && this.options.enabled)
              ) {
                let [e, i, l, s] = n;
                null !== e &&
                  !l &&
                  (u() &&
                  (this.isScrolling ||
                    this._iosTouching ||
                    this._iosJustTouchEnded)
                    ? 0 !== s && (this._iosDeferredAdjustment += s)
                    : ((null == (t = this.scrollState)
                        ? void 0
                        : t.behavior) !== "smooth" ||
                        h(
                          this.getScrollOffset() - s,
                          this.scrollState.lastTargetOffset
                        )) &&
                      this._scrollToOffset(this.getScrollOffset(), {
                        adjustments: void 0,
                        behavior: void 0,
                      })),
                  l && this.scrollToEnd({ behavior: l });
              }
              this._retryClampedAdjustment();
            }),
            (this._retryClampedAdjustment = () => {
              if (
                null === this._clampedAdjustment ||
                !this.scrollElement ||
                !this.options.enabled
              )
                return;
              let { target: e, maxAtWrite: t } = this._clampedAdjustment,
                i = this.getMaxScrollOffset();
              i > t + 0.5 &&
                ((this._clampedAdjustment =
                  e > i + 0.5 ? { target: e, maxAtWrite: i } : null),
                this._scrollToOffset(e, {
                  adjustments: void 0,
                  behavior: void 0,
                }));
            }),
            (this._flushIosDeferredIfReady = () => {
              if (
                0 === this._iosDeferredAdjustment ||
                this.isScrolling ||
                this._iosTouching ||
                this._iosJustTouchEnded
              )
                return;
              let e = this.getScrollOffset(),
                t = this.getMaxScrollOffset();
              if (e < 0 || e > t) return;
              if (this._iosDeferredAdjustment < 0 && e >= t - 1) {
                this._iosDeferredAdjustment = 0;
                return;
              }
              let i = this._iosDeferredAdjustment;
              (this._iosDeferredAdjustment = 0),
                this._scrollToOffset(e, {
                  adjustments: (this.scrollAdjustments += i),
                  behavior: void 0,
                });
            }),
            (this.rafId = null),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getMeasurementOptions = a(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
                this.options.lanes,
                this.options.laneAssignmentMode,
                this.options.gap,
              ],
              (e, t, i, n, l, s, o, r) => (
                void 0 !== this.prevLanes &&
                  this.prevLanes !== s &&
                  (this.lanesChangedFlag = !0),
                (this.prevLanes = s),
                (this.pendingMin = null),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: i,
                  getItemKey: n,
                  enabled: l,
                  lanes: s,
                  laneAssignmentMode: o,
                  gap: r,
                }
              ),
              { key: !1 }
            )),
            (this.isIndexInRange = (e) => e >= 0 && e < this.options.count),
            (this.getMeasurements = a(
              () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: i,
                  getItemKey: n,
                  enabled: l,
                  lanes: s,
                  laneAssignmentMode: o,
                  gap: r,
                },
                a
              ) => {
                var c;
                let h = this.itemSizeCache;
                if (!l)
                  return (
                    (this.measurementsCache = []),
                    (this._singleLaneMeasurements = null),
                    this.itemSizeCache.clear(),
                    this.laneAssignments.clear(),
                    []
                  );
                if (this.laneAssignments.size > e)
                  for (let t of this.laneAssignments.keys())
                    t >= e && this.laneAssignments.delete(t);
                this.lanesChangedFlag &&
                  ((this.lanesChangedFlag = !1),
                  (this.lanesSettling = !0),
                  (this.measurementsCache = []),
                  (this._singleLaneMeasurements = null),
                  this.itemSizeCache.clear(),
                  this.laneAssignments.clear(),
                  (this.pendingMin = null)),
                  0 !== this.measurementsCache.length ||
                    this.lanesSettling ||
                    ((this.measurementsCache =
                      this.options.initialMeasurementsCache),
                    this.measurementsCache.forEach((e) => {
                      this.itemSizeCache.set(e.key, e.size);
                    }));
                let d = this.lanesSettling ? 0 : this.pendingMin ?? 0;
                if (
                  ((this.pendingMin = null),
                  this.lanesSettling &&
                    this.measurementsCache.length === e &&
                    (this.lanesSettling = !1),
                  1 === s)
                ) {
                  let l;
                  let s = 2 * e,
                    o =
                      null == (c = this._singleLaneMeasurements)
                        ? void 0
                        : c.flat;
                  if (!o || o.length < s) {
                    let e = new Float64Array(s);
                    o && d > 0 && e.set(o.subarray(0, 2 * d)), (o = e);
                  }
                  let a =
                    0 === d
                      ? Array(e)
                      : this._singleLaneMeasurements.items.slice();
                  if (0 === d) l = t + i;
                  else {
                    let e = d - 1;
                    l = o[2 * e] + o[2 * e + 1] + r;
                  }
                  for (let t = d; t < e; t++) {
                    let e = n(t);
                    a[t] = e;
                    let i = h.get(e),
                      s =
                        "number" == typeof i ? i : this.options.estimateSize(t);
                    (o[2 * t] = l), (o[2 * t + 1] = s), (l += s + r);
                  }
                  this._singleLaneMeasurements = { flat: o, items: a };
                  let u = (function (e, t) {
                    let i = e.length;
                    return new Proxy(e, {
                      get(e, n, l) {
                        if ("string" == typeof n) {
                          let l = n.charCodeAt(0);
                          if (l >= 48 && l <= 57) {
                            let l = +n;
                            if (Number.isInteger(l) && l >= 0 && l < i) {
                              let i = e[l];
                              if ("object" != typeof i) {
                                let n = t[2 * l];
                                i = e[l] = {
                                  index: l,
                                  key: i,
                                  start: n,
                                  size: t[2 * l + 1],
                                  end: n + t[2 * l + 1],
                                  lane: 0,
                                };
                              }
                              return i;
                            }
                          }
                          if ("length" === n) return i;
                        }
                        return Reflect.get(e, n, l);
                      },
                    });
                  })(a, o);
                  return (this.measurementsCache = u), u;
                }
                let u = this.measurementsCache.slice(0, d),
                  f = Array(s).fill(void 0),
                  m = new Float64Array(s),
                  g = 0;
                for (let e = 0; e < d; e++) {
                  let t = u[e];
                  t &&
                    (void 0 === f[t.lane] && g++,
                    (f[t.lane] = e),
                    (m[t.lane] = t.end));
                }
                for (let l = d; l < e; l++) {
                  let e, a;
                  let c = n(l),
                    d = this.laneAssignments.get(l),
                    p = "estimate" === o || h.has(c);
                  if (void 0 !== d && this.options.lanes > 1) {
                    let n = f[(e = d)],
                      l = void 0 !== n ? u[n] : void 0;
                    a = l ? l.end + r : t + i;
                  } else if (g === s) {
                    let t = 0,
                      i = m[0],
                      n = f[0];
                    for (let e = 1; e < s; e++) {
                      let l = m[e];
                      (l < i || (l === i && f[e] < n)) &&
                        ((t = e), (i = l), (n = f[e]));
                    }
                    (e = t), (a = i + r), p && this.laneAssignments.set(l, e);
                  } else
                    (e = l % this.options.lanes),
                      (a = t + i),
                      p && this.laneAssignments.set(l, e);
                  let v = h.get(c),
                    w = "number" == typeof v ? v : this.options.estimateSize(l),
                    y = a + w;
                  (u[l] = {
                    index: l,
                    start: a,
                    size: w,
                    end: y,
                    key: c,
                    lane: e,
                  }),
                    void 0 === f[e] && g++,
                    (f[e] = l),
                    (m[e] = y);
                }
                return (this.measurementsCache = u), u;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.calculateRange = a(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes,
              ],
              (e, t, i, n) =>
                0 === e.length || 0 === t
                  ? ((this.range = null), null)
                  : ((this.range = (function (e, t, i, n, l) {
                      let s = e.length - 1;
                      if (e.length <= n) return { startIndex: 0, endIndex: s };
                      if (1 === n && null !== l) {
                        let e = (function (e, t, i) {
                            let n = 0;
                            for (; n <= t; ) {
                              let l = ((n + t) / 2) | 0,
                                s = e[2 * l];
                              if (s < i) n = l + 1;
                              else {
                                if (!(s > i)) return l;
                                t = l - 1;
                              }
                            }
                            return n > 0 ? n - 1 : 0;
                          })(l, s, i),
                          n = e,
                          o = i + t;
                        for (; n < s && l[2 * n] + l[2 * n + 1] < o; ) n++;
                        return { startIndex: e, endIndex: n };
                      }
                      let o = z(0, s, (t) => e[t].start, i),
                        r = o;
                      if (1 === n) for (; r < s && e[r].end < i + t; ) r++;
                      else if (n > 1) {
                        let l = Array(n).fill(0);
                        for (; r < s && l.some((e) => e < i + t); ) {
                          let t = e[r];
                          (l[t.lane] = t.end), r++;
                        }
                        let a = Array(n).fill(i + t);
                        for (; o >= 0 && a.some((e) => e >= i); ) {
                          let t = e[o];
                          (a[t.lane] = t.start), o--;
                        }
                        (o = Math.max(0, o - (o % n))),
                          (r = Math.min(s, r + (n - 1 - (r % n))));
                      }
                      return { startIndex: o, endIndex: r };
                    })(
                      e,
                      t,
                      i,
                      n,
                      1 === n && null !== this._singleLaneMeasurements
                        ? this._singleLaneMeasurements.flat
                        : null
                    )),
                    this.range),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getVirtualIndexes = a(
              () => {
                let e = null,
                  t = null,
                  i = this.calculateRange();
                return (
                  i && ((e = i.startIndex), (t = i.endIndex)),
                  this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                  [
                    this.options.rangeExtractor,
                    this.options.overscan,
                    this.options.count,
                    e,
                    t,
                  ]
                );
              },
              (e, t, i, n, l) =>
                null === n || null === l
                  ? []
                  : e({ startIndex: n, endIndex: l, overscan: t, count: i }),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.indexFromElement = (e) => {
              let t = this.options.indexAttribute,
                i = e.getAttribute(t);
              return i
                ? parseInt(i, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`
                  ),
                  -1);
            }),
            (this.shouldMeasureDuringScroll = (e) => {
              var t;
              if (!this.scrollState || "smooth" !== this.scrollState.behavior)
                return !0;
              let i =
                this.scrollState.index ??
                (null ==
                (t = this.getVirtualItemForOffset(
                  this.scrollState.lastTargetOffset
                ))
                  ? void 0
                  : t.index);
              if (void 0 !== i && this.range) {
                let t = Math.max(
                    this.options.overscan,
                    Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
                  ),
                  n = Math.min(this.options.count - 1, i + t);
                return e >= Math.max(0, i - t) && e <= n;
              }
              return !0;
            }),
            (this.measureElement = (e) => {
              if (!e) {
                this.elementsCache.forEach((e, t) => {
                  e.isConnected ||
                    (this.observer.unobserve(e), this.elementsCache.delete(t));
                });
                return;
              }
              let t = this.indexFromElement(e);
              if (!this.isIndexInRange(t)) return;
              let i = this.options.getItemKey(t),
                n = this.elementsCache.get(i);
              n !== e &&
                (n && this.observer.unobserve(n),
                this.observer.observe(e),
                this.elementsCache.set(i, e)),
                (!this.isScrolling || this.scrollState) &&
                  this.shouldMeasureDuringScroll(t) &&
                  this.resizeItem(
                    t,
                    this.options.measureElement(e, void 0, this)
                  );
            }),
            (this.resizeItem = (e, t) => {
              var i, n, l;
              let s, o, r;
              if (!this.isIndexInRange(e)) return;
              let a =
                null == (i = this._singleLaneMeasurements) ? void 0 : i.flat;
              if (1 === this.options.lanes && null != a)
                (r = this.options.getItemKey(e)),
                  (o = a[2 * e]),
                  (s = a[2 * e + 1]);
              else {
                let t = this.measurementsCache[e];
                if (!t) return;
                (r = t.key), (o = t.start), (s = t.size);
              }
              let c = this.itemSizeCache.get(r) ?? s,
                h = t - c;
              if (0 !== h) {
                let i =
                    "end" === this.options.anchorTo &&
                    (null == (n = this.scrollState) ? void 0 : n.behavior) !==
                      "smooth" &&
                    this.getVirtualDistanceFromEnd() <=
                      this.options.scrollEndThreshold,
                  a = i ? this.getTotalSize() : 0,
                  d = this.getScrollOffset() + this.scrollAdjustments,
                  u = this.itemSizeCache.has(r)
                    ? o + c <= d && "backward" !== this.scrollDirection
                    : o < d,
                  f =
                    (null == (l = this.scrollState) ? void 0 : l.behavior) !==
                      "smooth" &&
                    (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                      ? this.shouldAdjustScrollPositionOnItemSizeChange(
                          this.measurementsCache[e] ?? {
                            index: e,
                            key: r,
                            start: o,
                            size: s,
                            end: o + s,
                            lane: 0,
                          },
                          h,
                          this
                        )
                      : u);
                (null === this.pendingMin || e < this.pendingMin) &&
                  (this.pendingMin = e),
                  this.itemSizeCache.set(r, t),
                  this.itemSizeCacheVersion++;
                let m = !1;
                i
                  ? (m = this.applyScrollAdjustment(this.getTotalSize() - a))
                  : f && (m = this.applyScrollAdjustment(h)),
                  this.notify(m),
                  this._retryClampedAdjustment();
              }
            }),
            (this.getVirtualItems = a(
              () => [this.getVirtualIndexes(), this.getMeasurements()],
              (e, t) => {
                let i = [];
                for (let n = 0, l = e.length; n < l; n++) {
                  let l = t[e[n]];
                  i.push(l);
                }
                return i;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getVirtualItemForOffset = (e) => {
              var t;
              let i = this.getMeasurements();
              if (0 === i.length) return;
              let n =
                  null == (t = this._singleLaneMeasurements) ? void 0 : t.flat,
                l = 1 === this.options.lanes && null != n,
                s = z(
                  0,
                  i.length - 1,
                  l ? (e) => n[2 * e] : (e) => c(i[e]).start,
                  e
                );
              return c(i[s]);
            }),
            (this.getMaxScrollOffset = () => {
              if (!this.scrollElement) return 0;
              if ("scrollHeight" in this.scrollElement)
                return this.options.horizontal
                  ? this.scrollElement.scrollWidth -
                      this.scrollElement.clientWidth
                  : this.scrollElement.scrollHeight -
                      this.scrollElement.clientHeight;
              {
                let e = this.scrollElement.document.documentElement;
                return this.options.horizontal
                  ? e.scrollWidth - this.scrollElement.innerWidth
                  : e.scrollHeight - this.scrollElement.innerHeight;
              }
            }),
            (this.getVirtualDistanceFromEnd = () =>
              Math.max(
                this.getTotalSize() - this.getSize() - this.getScrollOffset(),
                0
              )),
            (this.getDistanceFromEnd = () =>
              Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0)),
            (this.isAtEnd = (e = this.options.scrollEndThreshold) =>
              this.getDistanceFromEnd() <= e),
            (this.getOffsetForAlignment = (e, t, i = 0) => {
              if (!this.scrollElement) return 0;
              let n = this.getSize(),
                l = this.getScrollOffset();
              return (
                "auto" === t && (t = e >= l + n ? "end" : "start"),
                "center" === t ? (e += (i - n) / 2) : "end" === t && (e -= n),
                Math.max(Math.min(this.getMaxScrollOffset(), e), 0)
              );
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              let i = this.getSize(),
                n = this.getScrollOffset(),
                l = this.measurementsCache[e];
              if (!l) return;
              if ("auto" === t) {
                if (l.end >= n + i - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(l.start <= n + this.options.scrollPaddingStart))
                    return [n, t];
                  t = "start";
                }
              }
              if ("end" === t && e === this.options.count - 1)
                return [this.getMaxScrollOffset(), t];
              let s =
                "end" === t
                  ? l.end + this.options.scrollPaddingEnd
                  : l.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(s, t, l.size), t];
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: i = "auto" } = {}
            ) => {
              this._iosDeferredAdjustment = 0;
              let n = this.getOffsetForAlignment(e, t),
                l = this.now();
              (this.scrollState = {
                index: null,
                align: t,
                behavior: i,
                startedAt: l,
                lastTargetOffset: n,
                stableFrames: 0,
              }),
                this._scrollToOffset(n, { adjustments: void 0, behavior: i }),
                this.scheduleScrollReconcile();
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: i = "auto" } = {}
            ) => {
              (this._iosDeferredAdjustment = 0),
                (e = Math.max(0, Math.min(e, this.options.count - 1)));
              let n = this.getOffsetForIndex(e, t);
              if (!n) return;
              let [l, s] = n,
                o = this.now();
              (this.scrollState = {
                index: e,
                align: s,
                behavior: i,
                startedAt: o,
                lastTargetOffset: l,
                stableFrames: 0,
              }),
                this._scrollToOffset(l, { adjustments: void 0, behavior: i }),
                this.scheduleScrollReconcile();
            }),
            (this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
              let i = this.getScrollOffset() + e,
                n = this.now();
              (this.scrollState = {
                index: null,
                align: "start",
                behavior: t,
                startedAt: n,
                lastTargetOffset: i,
                stableFrames: 0,
              }),
                this._scrollToOffset(i, { adjustments: void 0, behavior: t }),
                this.scheduleScrollReconcile();
            }),
            (this.scrollToEnd = ({ behavior: e = "auto" } = {}) => {
              if (this.options.count > 0) {
                this.scrollToIndex(this.options.count - 1, {
                  align: "end",
                  behavior: e,
                });
                return;
              }
              this.scrollToOffset(
                Math.max(this.getTotalSize() - this.getSize(), 0),
                { behavior: e }
              );
            }),
            (this.getTotalSize = () => {
              var e, t;
              let i;
              let n = this.getMeasurements();
              if (0 === n.length) i = this.options.paddingStart;
              else if (1 === this.options.lanes) {
                let l = n.length - 1,
                  s =
                    null == (e = this._singleLaneMeasurements)
                      ? void 0
                      : e.flat;
                i =
                  null != s
                    ? s[2 * l] + s[2 * l + 1]
                    : (null == (t = n[l]) ? void 0 : t.end) ?? 0;
              } else {
                let e = Array(this.options.lanes).fill(null),
                  t = n.length - 1;
                for (; t >= 0 && e.some((e) => null === e); ) {
                  let i = n[t];
                  null === e[i.lane] && (e[i.lane] = i.end), t--;
                }
                i = Math.max(...e.filter((e) => null !== e));
              }
              return Math.max(
                i - this.options.scrollMargin + this.options.paddingEnd,
                0
              );
            }),
            (this.takeSnapshot = () => {
              let e = [];
              if (0 === this.itemSizeCache.size) return e;
              for (let t of this.getMeasurements())
                t &&
                  this.itemSizeCache.has(t.key) &&
                  e.push({
                    index: t.index,
                    key: t.key,
                    start: t.start,
                    size: t.size,
                    end: t.end,
                    lane: t.lane,
                  });
              return e;
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: i }) => {
              (this._intendedScrollOffset = e + (t ?? 0)),
                this.options.scrollToFn(
                  e,
                  { behavior: i, adjustments: t },
                  this
                );
            }),
            (this.measure = () => {
              (this.pendingMin = null),
                this.itemSizeCache.clear(),
                this.laneAssignments.clear(),
                this.itemSizeCacheVersion++,
                this.notify(!1);
            }),
            this.setOptions(e);
        }
        applyScrollAdjustment(e, t) {
          if (0 === e) return !1;
          if (
            u() &&
            (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
          )
            return (this._iosDeferredAdjustment += e), !1;
          {
            let i = this.getScrollOffset() + this.scrollAdjustments + e,
              n = this.scrollElement,
              l =
                null !== n && ("scrollHeight" in n || "document" in n)
                  ? this.getMaxScrollOffset()
                  : null;
            return (
              (this._clampedAdjustment =
                null !== l && i > l + 0.5
                  ? { target: i, maxAtWrite: l }
                  : null),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += e),
                behavior: t,
              }),
              null !== this.scrollOffset &&
                ((this.scrollOffset += this.scrollAdjustments),
                this.scrollOffset < 0 && (this.scrollOffset = 0),
                (this.scrollAdjustments = 0)),
              !0
            );
          }
        }
        scheduleScrollReconcile() {
          if (!this.targetWindow) {
            this.scrollState = null;
            return;
          }
          null == this.rafId &&
            (this.rafId = this.targetWindow.requestAnimationFrame(() => {
              (this.rafId = null), this.reconcileScroll();
            }));
        }
        reconcileScroll() {
          if (!this.scrollState || !this.scrollElement) return;
          if (this.now() - this.scrollState.startedAt > 5e3) {
            this.scrollState = null;
            return;
          }
          let e =
              null != this.scrollState.index
                ? this.getOffsetForIndex(
                    this.scrollState.index,
                    this.scrollState.align
                  )
                : void 0,
            t = e ? e[0] : this.scrollState.lastTargetOffset,
            i = t !== this.scrollState.lastTargetOffset;
          if (!i && h(t, this.getScrollOffset())) {
            if (
              (this.scrollState.stableFrames++,
              this.scrollState.stableFrames >= 1)
            ) {
              this.getScrollOffset() !== t &&
                this._scrollToOffset(t, {
                  adjustments: void 0,
                  behavior: "auto",
                }),
                (this.scrollState = null);
              return;
            }
          } else if (((this.scrollState.stableFrames = 0), i)) {
            let e = this.getSize() || 600,
              i = Math.abs(t - this.getScrollOffset()),
              n = "smooth" === this.scrollState.behavior && i > e;
            (this.scrollState.lastTargetOffset = t),
              n || (this.scrollState.behavior = "auto"),
              this._scrollToOffset(t, {
                adjustments: void 0,
                behavior: n ? "smooth" : "auto",
              });
          }
          this.scheduleScrollReconcile();
        }
      }
      let z = (e, t, i, n) => {
          for (; e <= t; ) {
            let l = ((e + t) / 2) | 0,
              s = i(l);
            if (s < n) e = l + 1;
            else {
              if (!(s > n)) return l;
              t = l - 1;
            }
          }
          return e > 0 ? e - 1 : 0;
        },
        j = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;
      var T = i(97048),
        _ = i(83129),
        E = i(26911),
        k = i(70283),
        A = i(18401),
        O = i(29873),
        M = i(54772),
        W = i(7977),
        L = i(81881),
        I = i(80771),
        F = i(40893),
        R = i(74267),
        D = i(60083),
        $ = i(65988),
        q = i(24370),
        B = i(9287),
        K = i(48619),
        N = i(35977);
      let U = {
        phantom: {
          mobile: {
            native: "phantom://",
            universal: "https://phantom.app/ul/",
          },
        },
        solflare: {
          mobile: { native: void 0, universal: "https://solflare.com/ul/v1/" },
        },
        metamask: { image_url: { sm: F.M, md: F.M } },
        "okx-wallet": {
          mobile: { native: "okex://main", universal: "okex://main" },
        },
        "okx-wallet-1": {
          mobile: { native: "okxwallet://main", universal: "okxwallet://main" },
        },
      };
      class P {
        static normalize(e) {
          return e
            .replace(/[-_]wallet$/, "")
            .replace(/[-_]extension$/, "")
            .toLowerCase();
        }
        isEth(e) {
          return e.chains.some((e) => e.includes("eip155:"));
        }
        isSol(e) {
          return e.chains.some((e) => e.includes("solana:"));
        }
        inAllowList(e, t) {
          if (
            !this.normalizedAllowList ||
            0 === this.normalizedAllowList.length ||
            ("listing" === t && this.includeWalletConnect)
          )
            return !0;
          let i = P.normalize(e);
          return this.normalizedAllowList.some((e) => i === P.normalize(e));
        }
        inDenyList(e, t) {
          return ("listing" === t && "rabby" === e) || "agw" === P.normalize(e);
        }
        chainMatches(e) {
          return "ethereum-only" === this.chainFilter
            ? "ethereum" === e
            : "solana-only" !== this.chainFilter || "solana" === e;
        }
        getAllowListKey(e, t, i, n) {
          let l = P.normalize(e);
          for (let e of this.normalizedAllowList || [])
            if (l === P.normalize(e)) return e;
          if ("connector" === t) {
            if (
              ("injected" === i || "solana_adapter" === i) &&
              "ethereum" === n &&
              this.detectedEth
            )
              return "detected_ethereum_wallets";
            if (
              ("injected" === i || "solana_adapter" === i) &&
              "solana" === n &&
              this.detectedSol
            )
              return "detected_solana_wallets";
          }
          if ("listing" === t && this.includeWalletConnect)
            return "wallet_connect";
        }
        connectorOk(e) {
          return !!(
            "null" !== e.connectorType &&
            "walletconnect_solana" !== e.walletBranding.id &&
            this.chainMatches(e.chainType) &&
            (this.inAllowList(e.walletClientType, "connector") ||
              (("injected" === e.connectorType ||
                "solana_adapter" === e.connectorType) &&
                (("ethereum" === e.chainType && this.detectedEth) ||
                  ("solana" === e.chainType && this.detectedSol))))
          );
        }
        listingOk(e) {
          if (e.slug.includes("coinbase")) return !1;
          if ("ethereum-only" === this.chainFilter) {
            if (!this.isEth(e)) return !1;
          } else if ("solana-only" === this.chainFilter && !this.isSol(e))
            return !1;
          return !(
            !this.inAllowList(e.slug, "listing") ||
            this.inDenyList(e.slug, "listing")
          );
        }
        getWallets(e, t) {
          let i = new Map(),
            n = (e) => {
              let t = i.get(e.id);
              if (t) {
                t.chainType !== e.chainType && (t.chainType = "multi");
                let i = new Set(t.chains);
                e.chains.forEach((e) => i.add(e)),
                  (t.chains = Array.from(i)),
                  !t.icon && e.icon && (t.icon = e.icon),
                  !t.url && e.url && (t.url = e.url),
                  !t.listing && e.listing && (t.listing = e.listing),
                  !t.allowListKey &&
                    e.allowListKey &&
                    (t.allowListKey = e.allowListKey);
              } else i.set(e.id, e);
            };
          e.filter((e) => this.connectorOk(e)).forEach((e) => {
            let t = P.normalize(e.walletClientType);
            n({
              id: t,
              label: e.walletBranding?.name ?? t,
              source: "connector",
              connector: e,
              chainType: e.chainType,
              icon: e.walletBranding?.icon,
              url: void 0,
              chains: ["ethereum" === e.chainType ? "eip155" : "solana"],
              allowListKey: this.getAllowListKey(
                e.walletClientType,
                "connector",
                e.connectorType,
                e.chainType
              ),
            });
          });
          let l = e.find((e) => "wallet_connect_v2" === e.connectorType),
            s = e.find((e) => "walletconnect_solana" === e.walletBranding.id);
          t
            .filter((e) => this.listingOk(e))
            .forEach((t) => {
              let i = [...t.chains].filter(
                (e) => e.includes("eip155:") || e.includes("solana:")
              );
              if (
                (e.some(
                  (e) =>
                    P.normalize(e.walletClientType) === P.normalize(t.slug) &&
                    "ethereum" === e.chainType &&
                    "null" !== e.connectorType
                ) ||
                  l ||
                  t.mobile.native ||
                  t.mobile.universal ||
                  F.m[t.slug]?.chainTypes.includes("ethereum") ||
                  (i = i.filter((e) => !e.includes("eip155:"))),
                e.some(
                  (e) =>
                    P.normalize(e.walletClientType) === P.normalize(t.slug) &&
                    "solana" === e.chainType &&
                    "null" !== e.connectorType
                ) ||
                  s ||
                  t.mobile.native ||
                  t.mobile.universal ||
                  F.m[t.slug]?.chainTypes.includes("solana") ||
                  (i = i.filter((e) => !e.includes("solana:"))),
                !i.length)
              )
                return;
              let o = P.normalize(t.slug),
                r = U[t.slug],
                a = r?.image_url?.sm || t.image_url?.sm;
              i.some((e) => e.includes("eip155:")) &&
                n({
                  id: o,
                  label: t.name || o,
                  source: "listing",
                  listing: t,
                  chainType: "ethereum",
                  icon: a,
                  url: t.homepage,
                  chains: i,
                  allowListKey: this.getAllowListKey(t.slug, "listing"),
                }),
                i.some((e) => e.includes("solana:")) &&
                  n({
                    id: o,
                    label: t.name || o,
                    source: "listing",
                    listing: t,
                    chainType: "solana",
                    icon: a,
                    url: t.homepage,
                    chains: i,
                    allowListKey: this.getAllowListKey(t.slug, "listing"),
                  });
            }),
            this.includeWalletConnectQr &&
              l &&
              n({
                id: "wallet_connect_qr",
                label: "WalletConnect",
                source: "connector",
                connector: l,
                chainType: "ethereum",
                icon: R.a,
                url: void 0,
                chains: ["eip155"],
                allowListKey: "wallet_connect_qr",
              }),
            this.includeWalletConnectQrSolana &&
              s &&
              n({
                id: "wallet_connect_qr_solana",
                label: "WalletConnect",
                source: "connector",
                connector: s,
                chainType: "solana",
                icon: R.a,
                url: void 0,
                chains: ["solana"],
                allowListKey: "wallet_connect_qr_solana",
              });
          let o = Array.from(i.values());
          o.forEach((e) => {
            let t = U[e.listing?.slug || e.id];
            t?.image_url?.sm && (e.icon = t.image_url.sm);
          });
          let r = new Map();
          return (
            this.normalizedAllowList?.forEach((e, t) => {
              r.set(P.normalize(e), t);
            }),
            {
              wallets: o.slice().sort((e, t) => {
                if (e.allowListKey && t.allowListKey) {
                  let i =
                      this.normalizedAllowList?.findIndex(
                        (t) => P.normalize(t) === P.normalize(e.allowListKey)
                      ) ?? -1,
                    n =
                      this.normalizedAllowList?.findIndex(
                        (e) => P.normalize(e) === P.normalize(t.allowListKey)
                      ) ?? -1;
                  if (i !== n && i >= 0 && n >= 0) return i - n;
                }
                if (e.allowListKey && !t.allowListKey) return -1;
                if (!e.allowListKey && t.allowListKey) return 1;
                let i = P.normalize(e.id),
                  n = P.normalize(t.id);
                "binance-defi" === i
                  ? (i = "binance")
                  : "universalprofiles" === i
                  ? (i = "universal_profile")
                  : "cryptocom-defi" === i
                  ? (i = "cryptocom")
                  : "bitkeep" === i && (i = "bitget_wallet"),
                  "binance-defi" === n
                    ? (n = "binance")
                    : "universalprofiles" === n
                    ? (n = "universal_profile")
                    : "cryptocom-defi" === n
                    ? (n = "cryptocom")
                    : "bitkeep" === n && (n = "bitget_wallet");
                let l = r.has(i),
                  s = r.has(n);
                return l && s
                  ? r.get(i) - r.get(n)
                  : l
                  ? -1
                  : s
                  ? 1
                  : "connector" === e.source && "listing" === t.source
                  ? -1
                  : "listing" === e.source && "connector" === t.source
                  ? 1
                  : e.label.toLowerCase().localeCompare(t.label.toLowerCase());
              }),
              walletCount: o.length,
            }
          );
        }
        constructor(e, t) {
          if (((this.chainFilter = e), t && t.length > 0)) {
            if (
              ((this.normalizedAllowList = t.map(String)),
              this.normalizedAllowList.includes("binance"))
            ) {
              let e = this.normalizedAllowList.indexOf("binance");
              this.normalizedAllowList.splice(e + 1, 0, "binance-defi-wallet");
            }
            if (this.normalizedAllowList.includes("bitget_wallet")) {
              let e = this.normalizedAllowList.indexOf("bitget_wallet");
              this.normalizedAllowList.splice(e + 1, 0, "bitkeep");
            }
          }
          (this.detectedEth =
            this.normalizedAllowList?.includes("detected_ethereum_wallets") ??
            !1),
            (this.detectedSol =
              this.normalizedAllowList?.includes("detected_solana_wallets") ??
              !1),
            (this.includeWalletConnect =
              this.normalizedAllowList?.includes("wallet_connect") ?? !1),
            (this.includeWalletConnectQr =
              this.normalizedAllowList?.includes("wallet_connect_qr") ?? !1),
            (this.includeWalletConnectQrSolana =
              this.normalizedAllowList?.includes("wallet_connect_qr_solana") ??
              !1);
        }
      }
      var V = (e) =>
          (0, l.jsxs)("svg", {
            viewBox: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("path", { d: "m0 0h32v32h-32z", fill: "#5469d4" }),
              (0, l.jsx)("path", {
                d: "m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z",
                fill: "#c2ccf4",
              }),
              (0, l.jsx)("path", {
                d: "m15.996 5.333-6.548 10.865 6.548 3.87z",
                fill: "#fff",
              }),
              (0, l.jsx)("path", {
                d: "m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z",
                fill: "#c2ccf4",
              }),
              (0, l.jsx)("path", {
                d: "m15.996 26.665v-5.36l-6.548-3.867z",
                fill: "#fff",
              }),
              (0, l.jsx)("path", {
                d: "m15.995 20.07 6.548-3.87-6.548-2.976v6.847z",
                fill: "#8698e8",
              }),
              (0, l.jsx)("path", {
                d: "m9.448 16.2 6.548 3.87v-6.846z",
                fill: "#c2ccf4",
              }),
            ],
          }),
        H = (e) =>
          (0, l.jsxs)("svg", {
            viewBox: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsxs)("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: "7.233",
                x2: "24.766",
                y1: "24.766",
                y2: "7.234",
                children: [
                  (0, l.jsx)("stop", { offset: "0", stopColor: "#9945ff" }),
                  (0, l.jsx)("stop", { offset: ".2", stopColor: "#7962e7" }),
                  (0, l.jsx)("stop", { offset: "1", stopColor: "#00d18c" }),
                ],
              }),
              (0, l.jsx)("path", { d: "m0 0h32v32h-32z", fill: "#10111a" }),
              (0, l.jsx)("path", {
                clipRule: "evenodd",
                d: "m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z",
                fill: "url(#a)",
                fillRule: "evenodd",
              }),
            ],
          });
      function Z({ enabled: e = !0, walletList: t, walletChainType: i }) {
        let n = (0, L.a)(),
          { connectors: l } = (0, $.u)(),
          { listings: o, loading: r } = (0, F.u)(e),
          a = i ?? n.appearance.walletChainType,
          c = t ?? n.appearance?.walletList,
          h = (0, s.useMemo)(() => new P(a, c), [a, c]),
          { wallets: d, walletCount: u } = (0, s.useMemo)(
            () => h.getWallets(l, o),
            [h, l, o]
          ),
          [f, m] = (0, s.useState)(""),
          g = (0, s.useMemo)(
            () =>
              f
                ? d.filter((e) =>
                    e.label.toLowerCase().includes(f.toLowerCase())
                  )
                : d,
            [f, d]
          ),
          [p, v] = (0, s.useState)();
        return {
          selected: p,
          setSelected: v,
          search: f,
          setSearch: m,
          loadingListings: r,
          wallets: g,
          walletCount: u,
        };
      }
      let J = (e) =>
          !e ||
          ("string" != typeof e && (e instanceof F.j || e instanceof F.S)),
        Q = ({ index: e, style: t, data: i, recent: n }) => {
          let s = i.wallets[e],
            { walletChainType: o, handleWalletClick: r } = i,
            { t: a } = (0, I.u)(),
            c = { ...t, boxSizing: "border-box" };
          return s
            ? (0, l.jsxs)(ee, {
                style: c,
                onClick: () => r(s),
                children: [
                  s.icon &&
                    (s.connector && !J(s.connector)
                      ? (0, l.jsx)(K.b, {
                          children:
                            "string" == typeof s.icon
                              ? (0, l.jsx)(K.W, { src: s.icon })
                              : (0, l.jsx)(s.icon, {
                                  style: { width: "32px", height: "32px" },
                                }),
                        })
                      : "string" == typeof s.icon
                      ? (0, l.jsx)(K.W, { src: s.icon })
                      : (0, l.jsx)(s.icon, {
                          style: { width: "32px", height: "32px" },
                        })),
                  (0, l.jsx)(en, { children: s.label }),
                  n
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(K.C, {
                            children: a("connectWallet.lastUsed"),
                          }),
                          (0, l.jsx)(et, {
                            children: (0, l.jsxs)(l.Fragment, {
                              children: [
                                "ethereum-only" === o && (0, l.jsx)(V, {}),
                                "solana-only" === o && (0, l.jsx)(H, {}),
                              ],
                            }),
                          }),
                        ],
                      })
                    : (0, l.jsx)(et, {
                        children:
                          !("ethereum-only" === o || "solana-only" === o) &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              s.chains?.some((e) => e.startsWith("eip155")) &&
                                (0, l.jsx)(V, {}),
                              s.chains?.some((e) => e.startsWith("solana")) &&
                                (0, l.jsx)(H, {}),
                            ],
                          }),
                      }),
                ],
              })
            : null;
        };
      var Y = ({
        className: e,
        customDescription: t,
        connectOnly: i,
        preSelectedWalletId: n,
        hideHeader: a,
        ...c
      }) => {
        let h = (0, L.a)(),
          { t: d } = (0, I.u)(),
          { connectors: u } = (0, $.u)(),
          f = c.walletChainType || h.appearance.walletChainType,
          m = c.walletList || h.appearance?.walletList,
          { onBack: g, onClose: v, app: w } = c,
          {
            selected: y,
            setSelected: b,
            qrUrl: z,
            setQrUrl: _,
            connecting: k,
            uiState: Y,
            errorCode: eo,
            wallets: er,
            walletCount: ea,
            handleConnect: ec,
            handleBack: eh,
            showSearchBar: ed,
            isInitialConnectView: eu,
            title: ef,
            search: em,
            setSearch: eg,
          } = (function ({
            onConnect: e,
            onBack: t,
            onClose: i,
            onConnectError: n,
            walletList: l,
            walletChainType: o,
            app: r,
          }) {
            let a = (0, L.a)(),
              { connectors: c } = (0, $.u)(),
              { t: h } = (0, I.u)(),
              {
                wallets: d,
                walletCount: u,
                search: f,
                setSearch: m,
                selected: g,
                setSelected: p,
              } = Z({
                enabled: (0, F.s)(l ?? []),
                walletList: l,
                walletChainType: o,
              }),
              [v, w] = (0, s.useState)(),
              [y, x] = (0, s.useState)(),
              [b, S] = (0, s.useState)(),
              [C, z] = (0, s.useState)(),
              j = !g && !b && !C,
              _ = j && (u > 6 || f.length > 0),
              E = c.find((e) => "wallet_connect_v2" === e.connectorType),
              k = (0, s.useCallback)(
                async (t, i) => {
                  if (!t) return;
                  let l = i?.name ?? "Wallet";
                  if (C?.connector !== t || "loading" !== v) {
                    if ((w("loading"), "string" == typeof t))
                      return (
                        R.c.debug("Connecting wallet via deeplink", {
                          wallet: l,
                          url: t.length > 80 ? `${t.slice(0, 80)}...` : t,
                        }),
                        z({
                          connector: t,
                          name: l,
                          icon: i?.icon,
                          id: i?.id,
                          url: i?.url,
                        }),
                        void window.open(t, "_blank")
                      );
                    R.c.debug("Connecting wallet via connector", {
                      wallet: l,
                      connectorType: t.connectorType,
                    }),
                      z({
                        connector: t,
                        name: i?.name ?? t.walletBranding.name ?? "Wallet",
                        icon: i?.icon ?? t.walletBranding.icon,
                        id: i?.id,
                        url: i?.url,
                      });
                    try {
                      let i = await t.connect({ showPrompt: !0 });
                      if (!i)
                        return (
                          R.c.warn("Wallet connection returned null", {
                            wallet: l,
                            connectorType: t.connectorType,
                          }),
                          w("error"),
                          x(void 0),
                          void n?.(new D.e("Unable to connect wallet"))
                        );
                      R.c.debug("Wallet connection successful", {
                        wallet: l,
                        connectorType: t.connectorType,
                      }),
                        (0, F.i)(i) && (await (0, B.e)(i, a)),
                        w("success"),
                        x(void 0),
                        (0, B.s)({
                          address: i.address,
                          client: i.walletClientType,
                          appId: a.id,
                        }),
                        setTimeout(() => {
                          e({ connector: t, wallet: i });
                        }, L.Q);
                    } catch (i) {
                      if (
                        i?.message?.includes("already pending for origin") ||
                        i?.message?.includes("wallet_requestPermissions")
                      )
                        return void R.c.debug(
                          "Connection request already pending, maintaining loading state",
                          { wallet: l }
                        );
                      let e =
                        i instanceof Error
                          ? i.message
                          : String(i?.message || "Unknown error");
                      R.c.error("Wallet connection failed", i, {
                        wallet: l,
                        connectorType: t.connectorType,
                        errorCode: i?.privyErrorCode,
                      }),
                        w("error"),
                        x(i?.privyErrorCode),
                        n?.(
                          i instanceof Error
                            ? i
                            : new D.e(e || "Unable to connect wallet")
                        );
                    }
                  } else
                    R.c.debug("Duplicate connection attempt prevented", {
                      wallet: l,
                    });
                },
                [a.id, e, C, v]
              ),
              A = (0, s.useCallback)(
                () =>
                  b
                    ? (w(void 0), x(void 0), z(void 0), void S(void 0))
                    : C
                    ? (w(void 0), x(void 0), void z(void 0))
                    : g
                    ? (w(void 0), x(void 0), z(void 0), void p(void 0))
                    : "error" === v || "loading" === v
                    ? (w(void 0), x(void 0), void z(void 0))
                    : void t?.(),
                [b, C, g, v, t]
              ),
              O = (0, s.useMemo)(
                () =>
                  C?.connector === E && b && T.tq && C?.name
                    ? h("connectWallet.goToWallet", { walletName: C.name })
                    : C?.connector === E && b && C?.name
                    ? h("connectWallet.scanToConnect", { walletName: C.name })
                    : b && C?.name
                    ? h(
                        T.tq
                          ? "connectWallet.goToWallet"
                          : "connectWallet.scanToConnect",
                        { walletName: C.name }
                      )
                    : "string" == typeof C?.connector
                    ? h("connectWallet.openOrInstall", { walletName: C.name })
                    : g && !C
                    ? h("connectWallet.selectNetwork")
                    : C
                    ? null
                    : h("connectWallet.selectYourWallet"),
                [C, b, g, E, h]
              );
            return {
              selected: g,
              setSelected: p,
              qrUrl: b,
              setQrUrl: S,
              connecting: C,
              uiState: v,
              errorCode: y,
              search: f,
              setSearch: m,
              wallets: d,
              walletCount: u,
              wc: E,
              isInitialConnectView: j,
              showSearchBar: _,
              title: O,
              handleConnect: k,
              handleBack: A,
              onClose: i,
              onConnect: e,
              app: r,
            };
          })({ ...c, walletList: m, walletChainType: f }),
          ep = u.find((e) => "wallet_connect_v2" === e.connectorType),
          ev = u.find((e) => "walletconnect_solana" === e.walletBranding.id),
          ew = (0, s.useRef)(null),
          ey = (function ({
            useFlushSync: e = !0,
            directDomUpdates: t = !1,
            directDomUpdatesMode: i = "transform",
            ...n
          }) {
            let l = s.useReducer((e) => e + 1, 0)[1],
              o = s.useRef({
                enabled: t,
                mode: i,
                container: null,
                lastSize: null,
                lastPositions: new WeakMap(),
                prevRange: null,
              });
            (o.current.enabled = t), (o.current.mode = i);
            let a = s.useRef(!1),
              c = (e) => {
                let t = o.current;
                if (!t.enabled || !t.container) return;
                let i = e.getTotalSize();
                if (i !== t.lastSize) {
                  t.lastSize = i;
                  let n = e.options.horizontal ? "width" : "height";
                  t.container.style[n] = `${i}px`;
                }
              },
              h = (e) => {
                let t = o.current;
                if (!t.enabled || !t.container) return;
                c(e);
                let i = !!e.options.horizontal,
                  n = "transform" === t.mode,
                  l = i ? "left" : "top",
                  s = e.options.scrollMargin;
                for (let o of e.getVirtualItems()) {
                  let r = o.start - s,
                    a = e.elementsCache.get(o.key);
                  a &&
                    t.lastPositions.get(a) !== r &&
                    (t.lastPositions.set(a, r),
                    n
                      ? (a.style.transform = i
                          ? `translate3d(${r}px, 0, 0)`
                          : `translate3d(0, ${r}px, 0)`)
                      : (a.style[l] = `${r}px`));
                }
              },
              d = {
                ...n,
                onChange: (t, i) => {
                  var s;
                  let c = o.current,
                    d = !0;
                  if (c.enabled) {
                    h(t);
                    let e = t.range,
                      i = c.prevRange;
                    (d =
                      !i ||
                      i.isScrolling !== t.isScrolling ||
                      i.startIndex !== (null == e ? void 0 : e.startIndex) ||
                      i.endIndex !== (null == e ? void 0 : e.endIndex)) &&
                      (c.prevRange = e
                        ? {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex,
                            isScrolling: t.isScrolling,
                          }
                        : null);
                  }
                  d && (e && i && !a.current ? (0, r.flushSync)(l) : l()),
                    null == (s = n.onChange) || s.call(n, t, i);
                },
              },
              [u] = s.useState(() => {
                let e = new C(d),
                  t = e.measureElement;
                return (
                  (e.measureElement = (e) => {
                    a.current = !0;
                    try {
                      t(e);
                    } finally {
                      a.current = !1;
                    }
                  }),
                  Object.assign(e, {
                    containerRef: (t) => {
                      let i = o.current;
                      if (
                        ((i.container = t), (i.lastSize = null), t && i.enabled)
                      ) {
                        let n = e.getTotalSize();
                        i.lastSize = n;
                        let l = e.options.horizontal ? "width" : "height";
                        t.style[l] = `${n}px`;
                      }
                    },
                  })
                );
              });
            return (
              u.setOptions(d),
              j(() => u._didMount(), []),
              j(() => (c(u), u._willUpdate())),
              j(() => {
                h(u);
              }),
              u
            );
          })({
            observeElementRect: p,
            observeElementOffset: x,
            scrollToFn: S,
            count: er.length,
            getScrollElement: () => ew.current,
            estimateSize: () => 56,
            overscan: 6,
            gap: 5,
          }),
          ex = (0, s.useCallback)(
            async (e) => {
              let t;
              let n =
                  "solana-only" !== f &&
                  e.chains?.some((e) => e.startsWith("eip155")),
                l =
                  "ethereum-only" !== f &&
                  e.chains?.some((e) => e.startsWith("solana")),
                s = ((t = e.id), F.m[t] || F.m[`${t}_wallet`]),
                o = (t) => {
                  let i = P.normalize(e.id);
                  return u.find(
                    (e) =>
                      P.normalize(e.walletClientType) === i &&
                      e.chainType === t &&
                      "wallet_connect_v2" !== e.connectorType &&
                      !(
                        ("ethereum" === e.chainType && e instanceof F.j) ||
                        ("solana" === e.chainType && e instanceof F.S)
                      )
                  );
                },
                r = n ? o("ethereum") : void 0,
                a = l ? o("solana") : void 0;
              if (
                s &&
                (0, F.l)({ isMobile: T.tq, walletConfig: s }) &&
                !r &&
                !a
              )
                return (
                  R.c.debug(
                    "Using install flow for wallets that do not support WalletConnect.",
                    { wallet: e.id }
                  ),
                  void (await ec(s.installLink, {
                    name: e.label,
                    icon: e.icon,
                    id: e.id,
                    url: e.url,
                  }))
                );
              let c = async () => {
                  if (!ep || !e.listing) return !1;
                  let t = U[e.listing.slug]
                    ? { ...e.listing, ...U[e.listing.slug] }
                    : e.listing;
                  return (
                    ep.setWalletEntry(t, _),
                    await ep.resetConnection(e.id),
                    await ec(ep, {
                      name: e.label,
                      icon: e.icon,
                      id: e.id,
                      url: e.url,
                    }),
                    !0
                  );
                },
                h = async () =>
                  !!ev &&
                  !!e.listing &&
                  (await ev.disconnect(),
                  ev.wallet.setWalletEntry(e.listing, _),
                  await new Promise((e) => setTimeout(e, 100)),
                  await ec(ev, {
                    name: e.label,
                    icon: e.icon,
                    id: e.id,
                    url: e.url,
                  }),
                  !0),
                d = async (t) => {
                  let n = ((e) => {
                    if (s)
                      return s.getMobileRedirect({
                        isSolana: e,
                        connectOnly: !!i,
                        useUniversalLink: !1,
                      });
                  })(t);
                  return (
                    !!n &&
                    (await ec(n, {
                      name: e.label,
                      icon: e.icon,
                      id: e.id,
                      url: e.url,
                    }),
                    !0)
                  );
                };
              if (n && l) b(e);
              else {
                if (n && !l) {
                  if (r && !J(r))
                    return (
                      R.c.debug("Attempting injected EVM connection", {
                        wallet: e.id,
                        connectorType: r.connectorType,
                      }),
                      void (await ec(r, {
                        name: e.label,
                        icon: e.icon,
                        id: e.id,
                        url: e.url,
                      }))
                    );
                  if (T.tq && s) {
                    if ((await d(!1)) || (await c())) return;
                  } else if ((await c()) || (await d(!1))) return;
                }
                if (l && !n) {
                  if (a && !J(a))
                    return (
                      R.c.debug("Attempting injected Solana connection", {
                        wallet: e.id,
                        connectorType: a.connectorType,
                      }),
                      void (await ec(a, {
                        name: e.label,
                        icon: e.icon,
                        id: e.id,
                        url: e.url,
                      }))
                    );
                  if (T.tq) {
                    if ((await d(!0)) || (await h())) return;
                  } else if ((await h()) || (await d(!0))) return;
                }
                if (!J(e.connector)) {
                  if (
                    (R.c.debug("Using fallback direct connector", {
                      wallet: e.id,
                      connectorType: e.connector?.connectorType,
                    }),
                    ep && "wallet_connect_v2" === e.connector?.connectorType)
                  ) {
                    if (
                      (await ep.resetConnection(e.id),
                      "wallet_connect_qr" !== e.id && e.listing)
                    ) {
                      let t = U[e.listing.slug]
                        ? { ...e.listing, ...U[e.listing.slug] }
                        : e.listing;
                      ep.setWalletEntry(t, _);
                    } else
                      ep.setWalletEntry(
                        {
                          id: "wallet_connect_qr",
                          name: "WalletConnect",
                          rdns: "",
                          slug: "wallet-connect",
                          homepage: "",
                          chains: ["eip155"],
                          mobile: { native: "", universal: void 0 },
                        },
                        _
                      );
                  }
                  return (
                    ev &&
                      "walletconnect_solana" ===
                        e.connector?.walletBranding.id &&
                      (await ev.disconnect(),
                      "wallet_connect_qr_solana" !== e.id && e.listing
                        ? ev.wallet.setWalletEntry(e.listing, _)
                        : ev.wallet.setWalletEntry(
                            {
                              id: "wallet_connect_solana_qr",
                              name: "WalletConnect",
                              rdns: "",
                              slug: "wallet-connect-solana",
                              homepage: "",
                              chains: ["solana"],
                              mobile: { native: "", universal: void 0 },
                            },
                            _
                          ),
                      await new Promise((e) => setTimeout(e, 100))),
                    void (await ec(e.connector, {
                      name: e.label,
                      icon: e.icon,
                      id: e.id,
                      url: e.url,
                    }))
                  );
                }
                e.url
                  ? await ec(e.url, {
                      name: e.label,
                      icon: e.icon,
                      id: e.id,
                      url: e.url,
                    })
                  : R.c.warn("No available connection method for wallet", {
                      wallet: e.id,
                    });
              }
            },
            [ep, ev, ec, b, _, f, i, u]
          );
        return (
          (0, s.useEffect)(() => {
            if (!n) return;
            let e = er.find(({ id: e }) => e === n);
            e && ex(e).catch(console.error);
          }, [n]),
          (0, l.jsxs)(N.S, {
            className: e,
            children: [
              (0, l.jsx)(N.S.Header, {
                icon:
                  a && eu
                    ? void 0
                    : (k && !z) || (z && T.tq && k?.icon)
                    ? k.icon
                    : k
                    ? void 0
                    : q.W,
                iconVariant: (k && !z) || (z && T.tq) ? "loading" : void 0,
                iconLoadingStatus:
                  (k && !z) || (z && T.tq)
                    ? { success: "success" === Y, fail: "error" === Y }
                    : void 0,
                title:
                  a && eu
                    ? void 0
                    : k && !z
                    ? d("connectWallet.waitingForWallet", {
                        walletName: k.name,
                      })
                    : z && T.tq
                    ? d("connectWallet.waitingForWallet", {
                        walletName: k?.name ?? "connection",
                      })
                    : ef,
                subtitle:
                  a && eu
                    ? void 0
                    : k && !z && "string" == typeof k.connector
                    ? d("connectWallet.installAndConnect", {
                        walletName: k.name,
                      })
                    : k && !z && "string" != typeof k.connector
                    ? "error" === Y
                      ? eo === D.a.NO_SOLANA_ACCOUNTS
                        ? `The connected wallet has no Solana accounts. Please add a Solana account in ${k.name} and try again.`
                        : d("connectWallet.tryConnectingAgain")
                      : d(
                          "coinbase_wallet" === k.connector.connectorType
                            ? "coinbaseWallet.connectingSubtitle"
                            : "connectionStatus.connectOneWallet"
                        )
                    : eu
                    ? t ??
                      (w
                        ? d("connectWallet.connectToAccount", {
                            appName: w.name,
                          })
                        : null)
                    : null,
                showBack: !!g || !eu,
                showClose: !0,
                onBack: g || eh,
                onClose: v,
              }),
              (0, l.jsxs)(N.S.Body, {
                ref: ew,
                $colorScheme: h.appearance.palette.colorScheme,
                style: { marginBottom: z ? "0.5rem" : void 0 },
                children: [
                  ed &&
                    (0, l.jsx)(G, {
                      children: (0, l.jsxs)(W.E, {
                        style: { background: "transparent" },
                        children: [
                          (0, l.jsx)(B.m, { children: (0, l.jsx)(o, {}) }),
                          (0, l.jsx)("input", {
                            className: "login-method-button",
                            type: "text",
                            placeholder: d("connectWallet.searchPlaceholder", {
                              count: String(ea),
                            }),
                            onChange: (e) => eg(e.target.value),
                            value: em,
                          }),
                        ],
                      }),
                    }),
                  z &&
                    T.tq &&
                    "loading" === Y &&
                    (0, l.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                      },
                      children: [
                        (0, l.jsx)(E.B, {
                          variant: "primary",
                          onClick: () =>
                            window.open(z.universal ?? z.native, "_blank"),
                          style: { width: "100%" },
                          children: d("connectWallet.openInApp"),
                        }),
                        (0, l.jsx)(el, {
                          value: z.universal ?? z.native,
                          iconOnly: !0,
                          children: "Copy link",
                        }),
                      ],
                    }),
                  z &&
                    !T.tq &&
                    "loading" === Y &&
                    (0, l.jsx)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                      },
                      children: (0, l.jsx)(el, {
                        value: z.universal ?? z.native,
                        iconOnly: !0,
                        children: d("connectWallet.copyLink"),
                      }),
                    }),
                  z &&
                    !T.tq &&
                    (0, l.jsx)(M.Q, {
                      size: 280,
                      url: z.universal ?? z.native,
                      squareLogoElement: k?.icon
                        ? "string" == typeof k.icon
                          ? (e) =>
                              (0, l.jsx)("svg", {
                                ...e,
                                children: (0, l.jsx)("image", {
                                  href: k.icon,
                                  height: e.height,
                                  width: e.width,
                                }),
                              })
                          : k.icon
                        : R.d,
                    }),
                  z &&
                    !T.tq &&
                    k?.url &&
                    ("binance" === k.id ||
                      "binanceus" === k.id ||
                      "binance-defi" === k.id ||
                      "robinhood" === k.id) &&
                    (0, l.jsxs)(es, {
                      children: [
                        (0, l.jsxs)("span", {
                          children: ["Don't have ", k.name, "? "],
                        }),
                        (0, l.jsx)(A.L, {
                          href: k.url,
                          target: "_blank",
                          size: "sm",
                          children: "Download here",
                        }),
                      ],
                    }),
                  (0, l.jsxs)(X, {
                    children: [
                      k &&
                        !z &&
                        "string" == typeof k.connector &&
                        (0, l.jsxs)(ee, {
                          onClick: () => window.open(k.connector, "_blank"),
                          children: [
                            k.icon &&
                              ("string" == typeof k.icon
                                ? (0, l.jsx)(K.W, { src: k.icon })
                                : (0, l.jsx)(k.icon, {})),
                            (0, l.jsx)(en, { children: k.name }),
                          ],
                        }),
                      y?.chains.some((e) => e.startsWith("eip155")) &&
                        !k &&
                        (0, l.jsxs)(ee, {
                          onClick: () =>
                            ex({
                              ...y,
                              chains: y.chains.filter((e) =>
                                e.startsWith("eip155")
                              ),
                            }),
                          children: [
                            y.icon &&
                              ("string" == typeof y.icon
                                ? (0, l.jsx)(K.W, { src: y.icon })
                                : (0, l.jsx)(y.icon, {})),
                            (0, l.jsx)(en, { children: y.label }),
                            (0, l.jsx)(et, { children: (0, l.jsx)(V, {}) }),
                          ],
                        }),
                      y?.chains.some((e) => e.startsWith("solana")) &&
                        !k &&
                        (0, l.jsxs)(ee, {
                          onClick: () =>
                            ex({
                              ...y,
                              chains: y.chains.filter((e) =>
                                e.startsWith("solana")
                              ),
                            }),
                          children: [
                            y.icon &&
                              ("string" == typeof y.icon
                                ? (0, l.jsx)(K.W, { src: y.icon })
                                : (0, l.jsx)(y.icon, {})),
                            (0, l.jsx)(en, { children: y.label }),
                            (0, l.jsx)(et, { children: (0, l.jsx)(H, {}) }),
                          ],
                        }),
                      eu &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            !(ea > 0) &&
                              (0, l.jsx)(ei, {
                                children: d("connectWallet.noWalletsFound"),
                              }),
                            ea > 0 &&
                              !z &&
                              (0, l.jsx)("div", {
                                style: {
                                  maxHeight: 56 * Math.min(er.length, 5) + 5,
                                  width: "100%",
                                },
                                children: (0, l.jsx)("div", {
                                  style: {
                                    height: `${ey.getTotalSize()}px`,
                                    width: "100%",
                                    position: "relative",
                                  },
                                  children: ey
                                    .getVirtualItems()
                                    .map((e) =>
                                      (0, l.jsx)(
                                        Q,
                                        {
                                          index: e.index,
                                          style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: `${e.size}px`,
                                            transform: `translateY(${e.start}px)`,
                                          },
                                          data: {
                                            wallets: er,
                                            walletChainType: f,
                                            handleWalletClick: ex,
                                          },
                                        },
                                        e.key
                                      )
                                    ),
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)(N.S.Footer, {
                children: [
                  k &&
                    !z &&
                    "string" != typeof k.connector &&
                    "error" === Y &&
                    (0, l.jsx)(N.S.Actions, {
                      children: (0, l.jsx)(E.B, {
                        style: { width: "100%", alignItems: "center" },
                        variant: "error",
                        onClick: () =>
                          ec(k.connector, {
                            name: k.name,
                            icon: k.icon,
                            id: k.id,
                            url: k.url,
                          }),
                        children: d("connectWallet.retry"),
                      }),
                    }),
                  !!(
                    w &&
                    w.legal.privacyPolicyUrl &&
                    w.legal.termsAndConditionsUrl
                  ) &&
                    (0, l.jsx)(O.T, { app: w, alwaysShowImplicitConsent: !0 }),
                  (0, l.jsx)(N.S.Watermark, {}),
                ],
              }),
            ],
          })
        );
      };
      let G = _.zo.div`
  position: sticky;
  /* Offset by negative margin to account for focus outline */
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`,
        X = _.zo.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`,
        ee = _.zo.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`,
        et = _.zo.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`,
        ei = _.zo.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,
        en = _.zo.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`,
        el = (0, _.zo)(k.C)`
  && {
    margin: 0.5rem auto 0;
  }
`,
        es = _.zo.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`;
    },
    70283: function (e, t, i) {
      i.d(t, {
        C: function () {
          return u;
        },
        a: function () {
          return f;
        },
      });
      var n = i(57437),
        l = i(30401),
        s = i(78867),
        o = i(2265),
        r = i(83129);
      let a = r.zo.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,
        c = r.zo.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,
        h = (0, r.zo)(l.Z)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,
        d = (0, r.zo)(s.Z)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;
      function u({
        children: e,
        iconOnly: t,
        value: i,
        hideCopyIcon: l,
        onCopy: s,
        iconSize: r = 14,
        ...u
      }) {
        let [f, m] = (0, o.useState)(!1);
        return (0, n.jsxs)(a, {
          ...u,
          onClick: () => {
            navigator.clipboard
              .writeText(i || ("string" == typeof e ? e : ""))
              .then(() => s?.())
              .catch(console.error),
              m(!0),
              setTimeout(() => m(!1), 1500);
          },
          children: [
            e,
            " ",
            f
              ? (0, n.jsxs)(c, {
                  children: [(0, n.jsx)(h, { size: r }), " ", !t && "Copied"],
                })
              : !l && (0, n.jsx)(d, { size: r }),
          ],
        });
      }
      let f = ({ value: e, includeChildren: t, children: i, ...l }) => {
        let [s, r] = (0, o.useState)(!1),
          u = () => {
            navigator.clipboard.writeText(e).catch(console.error),
              r(!0),
              setTimeout(() => r(!1), 1500);
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t
              ? (0, n.jsx)(a, { ...l, onClick: u, children: i })
              : (0, n.jsx)(n.Fragment, { children: i }),
            (0, n.jsx)(a, {
              ...l,
              onClick: u,
              children: s
                ? (0, n.jsx)(c, { children: (0, n.jsx)(h, {}) })
                : (0, n.jsx)(d, {}),
            }),
          ],
        });
      };
    },
    7977: function (e, t, i) {
      i.d(t, {
        E: function () {
          return o;
        },
        I: function () {
          return a;
        },
        a: function () {
          return r;
        },
      });
      var n = i(83129),
        l = i(70547);
      let s = n.zo.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${({ $error: e }) =>
        e
          ? "var(--privy-color-error) !important"
          : "var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${({ $error: e }) =>
        e
          ? "var(--privy-color-error) !important"
          : "var(--privy-color-accent-light)"};
      box-shadow: ${({ $error: e }) =>
        e ? "none" : "0 0 0 1px var(--privy-color-accent-light)"};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 16px 17px;
    /* matches the border radius of the input only on the right side where we touch the radius */
    border-radius: 0 var(--privy-border-radius-md) var(--privy-border-radius-md) 0;

    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`,
        o = (0, n.zo)(s)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;
`,
        r = (0, n.zo)(s)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${(e) => (e.$stacked ? "16px" : "88px")};

    border: 1px solid
      ${({ $error: e }) =>
        e
          ? "var(--privy-color-error) !important"
          : "var(--privy-color-foreground-4)"};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
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
    padding: 16px 17px;

    :focus {
      outline: none;
    }
  }
`,
        a = n.zo.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${l.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`;
    },
    70547: function (e, t, i) {
      i.d(t, {
        E: function () {
          return l;
        },
      });
      var n = i(83129);
      let l = n.zo.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`;
    },
    24370: function (e, t, i) {
      i.d(t, {
        W: function () {
          return l;
        },
      });
      var n = i(57437);
      let l = ({ ...e }) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          ...e,
          children: [
            (0, n.jsx)("rect", {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
            }),
            (0, n.jsx)("path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }),
            (0, n.jsx)("path", {
              d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
            }),
          ],
        });
    },
    48619: function (e, t, i) {
      i.d(t, {
        C: function () {
          return o;
        },
        S: function () {
          return r;
        },
        W: function () {
          return s;
        },
        b: function () {
          return l;
        },
      });
      var n = i(83129);
      n.zo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
        n.zo.button`
  padding: 0.25rem;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background: var(--privy-color-background-2);
`;
      let l = n.zo.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: ' ';
    border-radius: var(--privy-border-radius-full);
    height: 6px;
    width: 6px;
    background-color: var(--privy-color-icon-success);
    position: absolute;
    right: -3px;
    top: -3px;
  }
`,
        s = n.zo.img`
  width: 32px;
  height: 32px;
  border-radius: 0.25rem;
  object-fit: contain;
`,
        o = n.zo.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);
  background-color: var(--privy-color-background-2);

  svg {
    width: 100%;
    max-width: 1rem;
    max-height: 1rem;
    stroke-width: 2;
  }
`,
        r = n.zo.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 24rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${(e) =>
    "light" === e.$colorScheme
      ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;"
      : "dark" === e.$colorScheme
      ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;"
      : void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`;
    },
  },
]);

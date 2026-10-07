"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1297],
  {
    28835: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a;
        },
      });
      let a = [
        [
          ["M", -0.0863, 0.5293],
          ["C", -0.2688, 0.4949, -0.4, 0.3512, -0.4191, 0.1652],
          ["C", -0.4422, -0.0629, -0.2816, -0.2609, -0.0555, -0.2836],
          ["C", -0.0398, -0.2848, -0.0273, -0.2867, -0.0273, -0.2879],
          ["C", -0.0273, -0.2887, -0.0816, -0.3496, -0.148, -0.4234],
          ["L", -0.2691, -0.5578],
          ["L", -0.2215, -0.6],
          ["C", -0.1953, -0.6234, -0.1695, -0.6465, -0.1641, -0.6512],
          ["L", -0.1539, -0.6594],
          ["L", 0.041, -0.4414],
          ["C", 0.1484, -0.3215, 0.2375, -0.223, 0.2391, -0.223],
          ["C", 0.2406, -0.2227, 0.2754, -0.2531, 0.3168, -0.2898],
          ["C", 0.3578, -0.327, 0.3938, -0.3574, 0.3961, -0.3574],
          ["C", 0.4004, -0.3574, 0.4926, -0.2578, 0.4953, -0.25],
          ["C", 0.4961, -0.248, 0.3531, -0.1156, 0.3406, -0.107],
          ["C", 0.3398, -0.1066, 0.3473, -0.0926, 0.357, -0.0754],
          ["C", 0.3941, -0.0113, 0.4133, 0.0715, 0.409, 0.1504],
          ["C", 0.3992, 0.3301, 0.2805, 0.4766, 0.1074, 0.5219],
          ["C", 0.0586, 0.5348, -0.0379, 0.5383, -0.0863, 0.5293],
        ],
        [
          ["M", 0.0664, 0.398],
          ["C", 0.1566, 0.3738, 0.227, 0.3016, 0.2547, 0.2051],
          ["C", 0.2715, 0.1453, 0.2645, 0.0473, 0.2398, -0.0004],
          ["L", 0.234, -0.0117],
          ["L", 0.157, 0.0574],
          ["C", 0.1145, 0.0957, 0.0762, 0.1301, 0.0719, 0.134],
          ["C", 0.0641, 0.1406, 0.0629, 0.1395, 0.0145, 0.0855],
          ["C", -0.0129, 0.0551, -0.0352, 0.0293, -0.0352, 0.0277],
          ["C", -0.0352, 0.0266, 8e-4, -0.007, 0.0449, -0.0465],
          ["C", 0.1328, -0.1246, 0.1309, -0.1219, 0.1008, -0.1371],
          ["C", 0.0629, -0.1566, -0.0156, -0.1629, -0.0684, -0.1504],
          ["C", -0.2461, -0.1094, -0.3328, 0.109, -0.2379, 0.2766],
          ["C", -0.2219, 0.3051, -0.1684, 0.3582, -0.1406, 0.3738],
          ["C", -0.0801, 0.4082, -0.0039, 0.4168, 0.0664, 0.398],
        ],
      ];
    },
    91297: function (e, t, n) {
      n.r(t),
        n.d(t, {
          createScene: function () {
            return p;
          },
        });
      var a = n(72079),
        i = n(51448),
        o = n(79825),
        s = n(28835);
      let l = (e, t) => e + Math.random() * (t - e),
        r = (e, t, n) => e + (t - e) * n,
        d = (e) => 1 - Math.pow(1 - e, 3),
        c = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2);
      function p(e, t) {
        var n;
        let p = new a.Ilk(
            null !== (n = t.accent) && void 0 !== n ? n : "#8b4dff"
          ),
          h = new a.Ilk("#b391ff"),
          M = new a.Ilk(t.background),
          u = !!t.lite,
          f = new i.CP7({
            canvas: e,
            antialias: !0,
            alpha: !0,
            powerPreference: "high-performance",
          });
        f.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, u ? 1.25 : 1.75)
        ),
          f.setClearColor(0, 0),
          (f.outputColorSpace = a.KI_),
          (f.toneMapping = a.LY2),
          (f.toneMappingExposure = 1.05);
        let x = new a.xsS();
        x.fog = new a.ybr(M, 7.5, 19.5);
        let m = [],
          g = (e) => (m.push(e), e),
          y = g(new i.anP(f)),
          v = g(y.fromScene(new o.C(), 0.04).texture);
        x.environment = v;
        let C = new a.cPb(26, 1, 0.1, 80),
          b = new a.Pa4(0, 3.3, 9.4),
          P = new a.Pa4(0, 1.3, 0);
        x.add(new a.Mig(8943530, 0.3));
        let S = new a.Ox3(15854591, 1.5);
        S.position.set(-3, 6, 6), x.add(S);
        let z = new a.cek(p, 26, 8, 2);
        x.add(z);
        let A = new a.cek(p, 10, 7, 2);
        x.add(A);
        let k = u ? 26 : 38,
          W = u ? 18 : 26,
          I = new a.Pa4(0, 0, 0),
          j = [];
        for (let e = 0; e < W; e++)
          for (let t = 0; t < k; t++) {
            let n = (t - (k - 1) / 2) * 0.5,
              a = 4.25 - (W - 1 - e) * 0.5,
              i = 0.9 > Math.hypot(n - I.x, a - I.z),
              o = 0.06 > Math.random() ? l(0.1, 0.3) : 0;
            j.push({
              x: n,
              z: a,
              h: i ? 0 : l(0.05, 0.16) + o,
              attested: !i && 0.16 > Math.random(),
            });
          }
        let J = j.length,
          K = g(new a.DvJ(0.4, 1, 0.4));
        K.translate(0, 0.5, 0);
        let B = g(
            new a.Wid({
              color: new a.Ilk("#141020"),
              metalness: 0.4,
              roughness: 0.55,
              envMapIntensity: 0.35,
            })
          ),
          F = new a.SPe(K, B, J),
          E = g(new a._12(0.32, 0.32));
        E.rotateX(-Math.PI / 2);
        let R = g(new a.vBJ({ color: 16777215, toneMapped: !1 })),
          _ = new a.SPe(E, R, J),
          L = new a.yGw(),
          T = [],
          U = new a.Ilk("#19142b"),
          V = new a.Ilk("#2c2056");
        j.forEach((e, t) => {
          let n = e.h || 1e-4;
          L.makeScale(1, n, 1).setPosition(e.x, 0, e.z),
            F.setMatrixAt(t, L),
            L.makeTranslation(e.x, n + 0.002, e.z),
            _.setMatrixAt(t, L);
          let i = e.h ? (e.attested ? V : U).clone() : new a.Ilk(0, 0, 0);
          T.push(i), _.setColorAt(t, i);
        }),
          (F.instanceMatrix.needsUpdate = !0),
          (_.instanceMatrix.needsUpdate = !0),
          x.add(F, _);
        let D = [],
          O = -((k / 2) * 0.5),
          X = (k / 2) * 0.5,
          G = 4.25 - (W - 0.5) * 0.5;
        for (let e = 0; e <= W; e++) {
          let t = G + 0.5 * e;
          D.push(O, 0.001, t, X, 0.001, t);
        }
        for (let e = 0; e <= k; e++) {
          let t = O + 0.5 * e;
          D.push(t, 0.001, G, t, 0.001, 4.5);
        }
        let Y = g(new a.u9r());
        Y.setAttribute("position", new a.a$l(D, 3));
        let q = g(new a.nls({ color: p, transparent: !0, opacity: 0.09 }));
        x.add(new a.ejS(Y, q));
        let Q = g(w(p)),
          $ = g(w(h)),
          H = new a.Kj0(
            g(new a._12(7, 7)),
            g(
              new a.vBJ({
                map: Q,
                transparent: !0,
                opacity: 0.75,
                blending: a.WMw,
                depthWrite: !1,
              })
            )
          );
        (H.rotation.x = -Math.PI / 2), H.position.set(I.x, 0.01, I.z), x.add(H);
        let N = g(new a.o8S(0.42, 0.45, 96));
        N.rotateX(-Math.PI / 2);
        let Z = g(
            new a.vBJ({
              color: h,
              transparent: !0,
              opacity: 0.6,
              blending: a.WMw,
              depthWrite: !1,
            })
          ),
          ee = new a.Kj0(N, Z);
        ee.position.set(I.x, 0.015, I.z), x.add(ee);
        let et = g(new a.o8S(0.97, 1, 128));
        et.rotateX(-Math.PI / 2);
        let en = [];
        for (let e = 0; e < 4; e++) {
          let e = g(
              new a.vBJ({
                color: h,
                transparent: !0,
                opacity: 0,
                blending: a.WMw,
                depthWrite: !1,
              })
            ),
            t = new a.Kj0(et, e);
          t.position.set(I.x, 0.02, I.z),
            (t.visible = !1),
            x.add(t),
            en.push({ mesh: t, mat: e, t0: -99 });
        }
        let ea = g(new a._12(0.08, 1));
        ea.translate(0, 0.5, 0);
        let ei = 0.6,
          eo = g(
            new a.vBJ({
              map: g(
                (function (e) {
                  let t = document.createElement("canvas");
                  (t.width = 32), (t.height = 256);
                  let n = t.getContext("2d"),
                    i = ""
                      .concat(Math.round(255 * e.r), ",")
                      .concat(Math.round(255 * e.g), ",")
                      .concat(Math.round(255 * e.b)),
                    o = n.createLinearGradient(0, 0, 0, 256);
                  o.addColorStop(0, "rgba(".concat(i, ",0.15)")),
                    o.addColorStop(0.6, "rgba(".concat(i, ",0.35)")),
                    o.addColorStop(1, "rgba(".concat(i, ",0.9)")),
                    (n.fillStyle = o),
                    n.fillRect(0, 0, 32, 256);
                  let s = n.createLinearGradient(0, 0, 32, 0);
                  s.addColorStop(0, "rgba(0,0,0,1)"),
                    s.addColorStop(0.5, "rgba(0,0,0,0)"),
                    s.addColorStop(1, "rgba(0,0,0,1)"),
                    (n.globalCompositeOperation = "destination-out"),
                    (n.fillStyle = s),
                    n.fillRect(0, 0, 32, 256);
                  let l = new a.ROQ(t);
                  return (l.colorSpace = a.KI_), l;
                })(h)
              ),
              transparent: !0,
              opacity: 0.55,
              blending: a.WMw,
              depthWrite: !1,
              side: a.ehD,
            })
          ),
          es = new a.Kj0(ea, eo);
        es.position.copy(I), x.add(es);
        let el = new a.jyi(
          g(
            new a.xeV({
              map: $,
              transparent: !0,
              blending: a.WMw,
              depthWrite: !1,
              opacity: 0,
            })
          )
        );
        el.scale.set(0.5, 0.5, 1), x.add(el);
        let er = u ? 28 : 56,
          ed = g(new a.DvJ(1, 0.028, 0.028)),
          ec = g(
            new a.vBJ({
              color: h,
              transparent: !0,
              opacity: 0.95,
              blending: a.WMw,
              depthWrite: !1,
            })
          ),
          ep = new a.SPe(ed, ec, er);
        ep.instanceMatrix.setUsage(a.dj0), x.add(ep);
        let ew = Array.from({ length: er }, () => ({
            alive: !1,
            path: [],
            seg: [],
            len: 0,
            t0: 0,
            speed: 3,
            target: -1,
            audit: !1,
          })),
          eh = g(new a.DvJ(0.018, 1, 0.018));
        eh.translate(0, 0.5, 0);
        let eM = g(
            new a.vBJ({
              color: 16777215,
              transparent: !0,
              opacity: 0.75,
              blending: a.WMw,
              depthWrite: !1,
            })
          ),
          eu = new a.SPe(eh, eM, 48);
        eu.instanceMatrix.setUsage(a.dj0), x.add(eu);
        let ef = Array.from({ length: 48 }, () => ({
            alive: !1,
            x: 0,
            y: 0,
            z: 0,
            t0: 0,
          })),
          ex = new Map(),
          em = j
            .map((e, t) => ({ c: e, k: t }))
            .filter((e) => {
              let { c: t } = e;
              return t.h > 0 && t.z > -5 && t.z < 3.4 && 6.5 > Math.abs(t.x);
            }),
          eg = new a.ZAu();
        x.add(eg);
        let ey = new a.bnF(),
          ev = new a.y$t();
        s.w.forEach((e, t) => {
          let n = 0 === t ? ey : ev;
          for (let t of e) {
            let e = t.slice(1);
            "M" === t[0]
              ? n.moveTo(e[0], e[1])
              : "L" === t[0]
              ? n.lineTo(e[0], e[1])
              : n.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
          }
        }),
          ey.holes.push(ev);
        let eC = g(
          new a.O7d([ey], {
            depth: 0.16,
            bevelEnabled: !0,
            bevelThickness: 0.035,
            bevelSize: 0.022,
            bevelSegments: 5,
            curveSegments: 28,
          })
        );
        eC.computeBoundingBox(),
          eC.translate(
            0,
            0,
            -(eC.boundingBox.min.z + eC.boundingBox.max.z) / 2
          );
        let eb = g(
            new a.EJi({
              color: p,
              emissive: new a.Ilk("#3a1e8c"),
              emissiveIntensity: 0.55,
              metalness: 0.25,
              roughness: 0.22,
              clearcoat: 1,
              clearcoatRoughness: 0.12,
              envMapIntensity: 1.1,
            })
          ),
          eP = new a.Kj0(eC, eb);
        (eP.position.z = 0.15), eg.add(eP);
        let eS = [new a.FM8(0, -0.1)];
        for (let e = 0; e <= 8; e++) {
          let t = -Math.PI / 2 + (e / 8) * (Math.PI / 2);
          eS.push(
            new a.FM8(1 - 0.07 + 0.07 * Math.cos(t), -0.03 + 0.07 * Math.sin(t))
          );
        }
        for (let e = 0; e <= 8; e++) {
          let t = (e / 8) * (Math.PI / 2);
          eS.push(
            new a.FM8(1 - 0.07 + 0.07 * Math.cos(t), 0.03 + 0.07 * Math.sin(t))
          );
        }
        eS.push(new a.FM8(0, 0.1));
        let ez = g(new a.p7y(eS, 96));
        ez.rotateX(Math.PI / 2);
        let eA = g(
          new a.EJi({
            color: new a.Ilk("#0b0912"),
            metalness: 0.55,
            roughness: 0.28,
            clearcoat: 1,
            clearcoatRoughness: 0.08,
            envMapIntensity: 0.55,
          })
        );
        eg.add(new a.Kj0(ez, eA));
        let ek = g(new a.XvJ(1.01, 0.011, 12, 180)),
          eW = g(
            new a.vBJ({
              color: h,
              transparent: !0,
              opacity: 0.8,
              blending: a.WMw,
              depthWrite: !1,
            })
          );
        eg.add(new a.Kj0(ek, eW));
        let eI = new a.jyi(
          g(
            new a.xeV({
              map: Q,
              transparent: !0,
              opacity: 0.5,
              blending: a.WMw,
              depthWrite: !1,
            })
          )
        );
        eI.scale.set(5.2, 5.2, 1), (eI.position.z = -0.5), eg.add(eI);
        let ej = new a.ZAu();
        ej.add(
          new a.Kj0(
            g(new a.XvJ(1.55, 0.004, 6, 220)),
            g(
              new a.vBJ({
                color: h,
                transparent: !0,
                opacity: 0.3,
                blending: a.WMw,
                depthWrite: !1,
              })
            )
          )
        );
        let eJ = new a.Kj0(
            g(new a.xo$(0.032, 16, 16)),
            g(new a.vBJ({ color: 16777215 }))
          ),
          eK = new a.jyi(
            g(
              new a.xeV({
                map: $,
                transparent: !0,
                opacity: 0.9,
                blending: a.WMw,
                depthWrite: !1,
              })
            )
          );
        eK.scale.set(0.4, 0.4, 1),
          eJ.add(eK),
          ej.add(eJ),
          ej.rotation.set(1.18, 0, 0.32),
          eg.add(ej);
        let eB = new a.Pa4(0, 1.7, 0).clone(),
          eF = 1,
          eE = u ? 120 : 240,
          eR = new Float32Array(3 * eE);
        for (let e = 0; e < eE; e++)
          (eR[3 * e] = l(-10, 10)),
            (eR[3 * e + 1] = l(0, 6)),
            (eR[3 * e + 2] = l(-14, 4));
        let e_ = g(new a.u9r());
        e_.setAttribute("position", new a.TlE(eR, 3));
        let eL = new a.woe(
          e_,
          g(
            new a.UY4({
              color: h,
              size: 0.022,
              transparent: !0,
              opacity: 0.4,
              depthWrite: !1,
            })
          )
        );
        x.add(eL);
        let eT = new a.FM8(),
          eU = new a.FM8(),
          eV = 0,
          eD = 0,
          eO = 0.4,
          eX = -99,
          eG = !0,
          eY = new a.Ilk(),
          eq = new a.Ilk(16777215),
          eQ = new a.Ilk("#a273ff"),
          e$ = new a.Pa4(),
          eH = new a.Pa4(),
          eN = new a.Pa4(),
          eZ = new a._fP(),
          e0 = new a.Pa4(),
          e1 = new a.Pa4(),
          e2 = new a.Pa4(1, 0, 0),
          e5 = new a.yGw().makeScale(0, 0, 0);
        function e3(e) {
          var t;
          let n =
            null !== (t = en.find((t) => e - t.t0 > 2.4)) && void 0 !== t
              ? t
              : en[0];
          (n.t0 = e), (n.mesh.visible = !0);
          let i = Math.floor(l(5, u ? 7 : 11));
          for (let t = 0; t < i; t++) {
            let n = ew.find((e) => !e.alive);
            if (!n) break;
            let i = null;
            for (let e = 0; e < 24 && !i; e++) {
              let e = em[Math.floor(Math.random() * em.length)];
              ex.has(e.k) || (i = e);
            }
            if (!i) continue;
            let o = i.c,
              s = 0.5 > Math.random() ? -1 : 1;
            (n.path =
              0.5 > Math.random()
                ? [
                    new a.Pa4(I.x, 0.03, I.z),
                    new a.Pa4(I.x, 0.03, o.z + (0.5 * s) / 2),
                    new a.Pa4(o.x, 0.03, o.z + (0.5 * s) / 2),
                  ]
                : [
                    new a.Pa4(I.x, 0.03, I.z),
                    new a.Pa4(o.x + (0.5 * s) / 2, 0.03, I.z),
                    new a.Pa4(o.x + (0.5 * s) / 2, 0.03, o.z),
                  ]),
              (n.seg = [
                n.path[0].distanceTo(n.path[1]),
                n.path[1].distanceTo(n.path[2]),
              ]),
              (n.len = n.seg[0] + n.seg[1]),
              (n.t0 = e + 0.07 * t),
              (n.speed = l(3.2, 4.6)),
              (n.target = i.k),
              (n.audit = 0.12 > Math.random()),
              (n.alive = !0),
              ex.set(i.k, {
                start: 1 / 0,
                end: 1 / 0,
                audit: n.audit,
                sparked: !1,
              });
          }
        }
        function e4(e, t, n) {
          return t <= e.seg[0]
            ? n.lerpVectors(e.path[0], e.path[1], e.seg[0] ? t / e.seg[0] : 1)
            : n.lerpVectors(
                e.path[1],
                e.path[2],
                e.seg[1] ? (t - e.seg[0]) / e.seg[1] : 1
              );
        }
        function e6() {
          C.position.set(
            b.x + 0.32 * eU.x,
            b.y + 0.16 * eU.y + 0.5 * eD,
            b.z - 1.2 * eD
          ),
            C.lookAt(P.x + 0.08 * eU.x, P.y + 0.15 * eD, P.z);
        }
        function e8(e, t) {
          let n = t > 0 ? 1 - Math.pow(0.002, t) : 1;
          eU.lerp(eT, n),
            (eD = r(eD, eV, n)),
            e6(),
            eg.position.set(eB.x, eB.y + 0.05 * Math.sin(0.9 * e) * eF, eB.z),
            eg.scale.setScalar(eF),
            (eg.rotation.y = 0.38 * Math.sin(0.3 * e) + 0.3 * eU.x),
            (eg.rotation.x = -0.06 + 0.05 * Math.sin(0.47 * e) - 0.14 * eU.y),
            eJ.position.set(
              1.55 * Math.cos(0.85 * e),
              1.55 * Math.sin(0.85 * e),
              0
            ),
            (ej.rotation.z = 0.3 + 0.05 * e),
            (eW.opacity = 0.62 + 0.16 * Math.sin(2 * e)),
            z.position.set(
              eB.x + 1.6 * eF + 0.5 * Math.sin(0.4 * e) * eF,
              eB.y + 1.2 * eF,
              eB.z - 2 * eF
            ),
            (z.distance = 8 * Math.max(0.5, eF)),
            (ei = Math.max(0.05, eg.position.y - 1 * eF * 1.02)),
            es.scale.set(1, ei, 1),
            es.lookAt(C.position.x, es.position.y, C.position.z),
            e > eO && ((eX = e), (eG = !1), (eO = e + l(1.5, 2.3)));
          let a = (e - eX) / 0.55,
            i = el.material;
          a >= 0 && a <= 1
            ? (el.position.set(I.x, r(ei, 0.05, c(a)), I.z),
              (i.opacity = 0.9 * Math.sin(a * Math.PI) + 0.1))
            : (i.opacity = 0),
            !eG && a >= 1 && ((eG = !0), e3(e));
          let o = 0;
          for (let t of en) {
            let n = (e - t.t0) / 2.4;
            if (n < 0 || n > 1) {
              t.mesh.visible = !1;
              continue;
            }
            let a = 0.9 + 6.5 * d(n);
            t.mesh.scale.set(a, 1, a),
              (t.mat.opacity = (1 - n) * 0.55),
              (o = Math.max(o, 1 - n));
          }
          A.position.set(I.x, 0.55, I.z + 0.4),
            (A.intensity = 12 + 14 * o),
            (Z.opacity = 0.45 + 0.5 * o),
            (eo.opacity = 0.38 + 0.3 * o);
          for (let t = 0; t < er; t++) {
            let n = ew[t];
            if (!n.alive) {
              ep.setMatrixAt(t, e5);
              continue;
            }
            let a = (e - n.t0) * n.speed;
            if (a < 0) {
              ep.setMatrixAt(t, e5);
              continue;
            }
            if (a >= n.len) {
              (n.alive = !1), ep.setMatrixAt(t, e5);
              let a = ex.get(n.target);
              a && ((a.start = e), (a.end = e + l(1.1, 2.6)));
              continue;
            }
            e4(n, a, e$), e4(n, Math.max(0, a - 0.6), eH);
            let i = Math.max(0.001, e$.distanceTo(eH));
            e1.subVectors(e$, eH),
              1e-8 > e1.lengthSq() ? e1.set(1, 0, 0) : e1.normalize(),
              eZ.setFromUnitVectors(e2, e1),
              e0.set(i, 1, 1),
              eN.addVectors(e$, eH).multiplyScalar(0.5),
              L.compose(eN, eZ, e0),
              ep.setMatrixAt(t, L);
          }
          (ep.instanceMatrix.needsUpdate = !0),
            ex.size &&
              (ex.forEach((t, n) => {
                if (!isFinite(t.start)) return;
                let a = j[n];
                if (e < t.end) {
                  let a = Math.min(1, (e - t.start) / 0.25),
                    i = 0.5 + 0.5 * Math.sin((e - t.start) * 8);
                  eY.copy(T[n]).lerp(eQ, a * (0.6 + 0.4 * i)),
                    _.setColorAt(n, eY);
                } else if (e < t.end + 1) {
                  let i = e - t.end;
                  if (!t.sparked) {
                    t.sparked = !0;
                    let n = ef.find((e) => !e.alive);
                    n &&
                      ((n.alive = !0),
                      (n.x = a.x),
                      (n.z = a.z),
                      (n.y = a.h),
                      (n.t0 = e));
                  }
                  eY.copy(t.audit ? eq : h).lerp(T[n], d(i)),
                    _.setColorAt(n, eY);
                } else _.setColorAt(n, T[n]), ex.delete(n);
              }),
              _.instanceColor && (_.instanceColor.needsUpdate = !0));
          for (let t = 0; t < 48; t++) {
            let n = ef[t];
            if (!n.alive) {
              eu.setMatrixAt(t, e5);
              continue;
            }
            let a = e - n.t0;
            if (a > 1) {
              (n.alive = !1), eu.setMatrixAt(t, e5);
              continue;
            }
            L.makeScale(1, Math.max(0.001, 0.55 * (1 - a)), 1).setPosition(
              n.x,
              n.y + 1.3 * d(a),
              n.z
            ),
              eu.setMatrixAt(t, L);
          }
          if (((eu.instanceMatrix.needsUpdate = !0), t > 0)) {
            let e = e_.attributes.position;
            for (let n = 0; n < eE; n++) {
              let a = e.getY(n) + 0.05 * t;
              a > 6 && (a = 0), e.setY(n, a);
            }
            e.needsUpdate = !0;
          }
        }
        let e7 = new a.iMs(),
          e9 = new a.JOQ(new a.Pa4(0, 0, 1), 0),
          te = 0,
          tt = !0,
          tn = performance.now(),
          ta = 0;
        function ti(e) {
          if (((te = 0), !tt)) return;
          let t = Math.min(0.05, (e - tn) / 1e3);
          (tn = e),
            e8((ta += t), t),
            f.render(x, C),
            (te = requestAnimationFrame(ti));
        }
        function to() {
          let n = e.clientWidth,
            i = e.clientHeight;
          if (!n || !i) return;
          f.setSize(n, i, !1), (C.aspect = n / i);
          let o = Math.max(0, 1.3 - C.aspect);
          b.set(0, 3.3 + 0.9 * o, 9.4 + 5.5 * o),
            C.updateProjectionMatrix(),
            (function () {
              let n = e.clientWidth,
                i = e.clientHeight,
                o = t.anchor;
              if (!o || !o.isConnected || !n || !i) return;
              let s = eU.clone(),
                l = eD;
              eU.set(0, 0), (eD = 0), e6(), C.updateMatrixWorld();
              let r = e.getBoundingClientRect(),
                d = o.getBoundingClientRect(),
                c = ((d.left + d.width / 2 - r.left) / n) * 2 - 1,
                p = -(((d.top + d.height / 2 - r.top) / i) * 2 - 1);
              e7.setFromCamera(new a.FM8(c, p), C);
              let w = e7.ray.intersectPlane(e9, new a.Pa4());
              if (w) {
                eB.copy(w);
                let e =
                  (2 *
                    w
                      .clone()
                      .sub(C.position)
                      .dot(C.getWorldDirection(new a.Pa4())) *
                    Math.tan(a.M8C.degToRad(C.fov / 2))) /
                  i;
                eF = (Math.min(d.width, d.height) * e) / 2;
              }
              eU.copy(s), (eD = l);
            })(),
            te || (e8(ta, 0), f.render(x, C));
        }
        return (
          to(),
          t.still
            ? (e3(0), e8((ta = 1.6), 0.016), f.render(x, C), (tt = !1))
            : (te = requestAnimationFrame(ti)),
          {
            setPointer: (e, t) => eT.set(e, t),
            setScroll: (e) => {
              eV = e;
            },
            setActive: (e) => {
              t.still ||
                (!e ||
                  tt ||
                  ((tt = !0),
                  (tn = performance.now()),
                  te || (te = requestAnimationFrame(ti))),
                e || ((tt = !1), te && cancelAnimationFrame(te), (te = 0)));
            },
            advance: (e) => {
              for (let t = 0; t < Math.round(30 * e); t++)
                e8((ta += 1 / 30), 1 / 30);
              f.render(x, C);
            },
            resize: to,
            dispose: () => {
              (tt = !1),
                te && cancelAnimationFrame(te),
                F.dispose(),
                _.dispose(),
                ep.dispose(),
                eu.dispose(),
                m.forEach((e) => e.dispose()),
                f.dispose();
            },
          }
        );
      }
      function w(e) {
        let t = document.createElement("canvas");
        t.width = t.height = 256;
        let n = t.getContext("2d"),
          i = n.createRadialGradient(128, 128, 0, 128, 128, 128),
          o = ""
            .concat(Math.round(255 * e.r), ",")
            .concat(Math.round(255 * e.g), ",")
            .concat(Math.round(255 * e.b));
        i.addColorStop(0, "rgba(".concat(o, ",0.6)")),
          i.addColorStop(0.3, "rgba(".concat(o, ",0.18)")),
          i.addColorStop(1, "rgba(".concat(o, ",0)")),
          (n.fillStyle = i),
          n.fillRect(0, 0, 256, 256);
        let s = new a.ROQ(t);
        return (s.colorSpace = a.KI_), s;
      }
    },
    79825: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var a = n(72079);
      class i extends a.xsS {
        constructor() {
          super();
          let e = new a.DvJ();
          e.deleteAttribute("uv");
          let t = new a.Wid({ side: a._Li }),
            n = new a.Wid(),
            i = new a.cek(16777215, 900, 28, 2);
          i.position.set(0.418, 16.199, 0.3), this.add(i);
          let s = new a.Kj0(e, t);
          s.position.set(-0.757, 13.219, 0.717),
            s.scale.set(31.713, 28.305, 28.591),
            this.add(s);
          let l = new a.SPe(e, n, 6),
            r = new a.Tme();
          r.position.set(-10.906, 2.009, 1.846),
            r.rotation.set(0, -0.195, 0),
            r.scale.set(2.328, 7.905, 4.651),
            r.updateMatrix(),
            l.setMatrixAt(0, r.matrix),
            r.position.set(-5.607, -0.754, -0.758),
            r.rotation.set(0, 0.994, 0),
            r.scale.set(1.97, 1.534, 3.955),
            r.updateMatrix(),
            l.setMatrixAt(1, r.matrix),
            r.position.set(6.167, 0.857, 7.803),
            r.rotation.set(0, 0.561, 0),
            r.scale.set(3.927, 6.285, 3.687),
            r.updateMatrix(),
            l.setMatrixAt(2, r.matrix),
            r.position.set(-2.017, 0.018, 6.124),
            r.rotation.set(0, 0.333, 0),
            r.scale.set(2.002, 4.566, 2.064),
            r.updateMatrix(),
            l.setMatrixAt(3, r.matrix),
            r.position.set(2.291, -0.756, -2.621),
            r.rotation.set(0, -0.286, 0),
            r.scale.set(1.546, 1.552, 1.496),
            r.updateMatrix(),
            l.setMatrixAt(4, r.matrix),
            r.position.set(-2.193, -0.369, -5.547),
            r.rotation.set(0, 0.516, 0),
            r.scale.set(3.875, 3.487, 2.986),
            r.updateMatrix(),
            l.setMatrixAt(5, r.matrix),
            this.add(l);
          let d = new a.Kj0(e, o(50));
          d.position.set(-16.116, 14.37, 8.208),
            d.scale.set(0.1, 2.428, 2.739),
            this.add(d);
          let c = new a.Kj0(e, o(50));
          c.position.set(-16.109, 18.021, -8.207),
            c.scale.set(0.1, 2.425, 2.751),
            this.add(c);
          let p = new a.Kj0(e, o(17));
          p.position.set(14.904, 12.198, -1.832),
            p.scale.set(0.15, 4.265, 6.331),
            this.add(p);
          let w = new a.Kj0(e, o(43));
          w.position.set(-0.462, 8.89, 14.52),
            w.scale.set(4.38, 5.441, 0.088),
            this.add(w);
          let h = new a.Kj0(e, o(20));
          h.position.set(3.235, 11.486, -12.541),
            h.scale.set(2.5, 2, 0.1),
            this.add(h);
          let M = new a.Kj0(e, o(100));
          M.position.set(0, 20, 0), M.scale.set(1, 0.1, 1), this.add(M);
        }
        dispose() {
          let e = new Set();
          for (let t of (this.traverse((t) => {
            t.isMesh && (e.add(t.geometry), e.add(t.material));
          }),
          e))
            t.dispose();
        }
      }
      function o(e) {
        return new a.YBo({
          color: 0,
          emissive: 16777215,
          emissiveIntensity: e,
        });
      }
    },
  },
]);

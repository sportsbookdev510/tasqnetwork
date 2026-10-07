"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4165],
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
    4165: function (e, t, n) {
      n.r(t),
        n.d(t, {
          createCoinStage: function () {
            return y;
          },
        });
      var a = n(72079),
        o = n(51448),
        l = n(13946),
        s = n(49520),
        i = n(34364),
        r = n(11610),
        h = n(79825),
        w = n(28835);
      let c = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(n, Math.max(t, e));
        },
        p = (e, t, n) => c((e - t) / (n - t)),
        d = (e) => 1 - Math.pow(1 - e, 3),
        M = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
        u = (e) => 1 + 2.5 * Math.pow(e - 1, 3) + 1.5 * Math.pow(e - 1, 2),
        m = (e, t, n) => Math.exp(-Math.pow((e - t) / n, 2)),
        x = (e, t, n) => new a.Pa4(e, t, n);
      function f(e) {
        let t = e >>> 0;
        return () => (t = (1664525 * t + 1013904223) >>> 0) / 4294967296;
      }
      function y(e, t) {
        let n = "hero" === t.variant,
          c = !!t.lite,
          y = new o.CP7({
            canvas: e,
            antialias: !c,
            powerPreference: "high-performance",
          });
        y.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, c ? 1.25 : 1.75)
        ),
          (y.outputColorSpace = a.KI_),
          (y.toneMapping = a.LY2);
        let C = new a.Ilk(t.background),
          g = new a.xsS();
        (g.background = C), (g.fog = new a.ybr(C, 11, 26));
        let P = new o.anP(y),
          v = P.fromScene(new h.C(), 0.04).texture;
        g.environment = v;
        let I = new a.cPb(30, 1, 0.1, 100);
        g.add(new a.Mig(9075904, 0.3));
        let S = new a.Ox3(15788799, 1.1);
        S.position.set(-4, 6, 8), g.add(S);
        let k = new a.cek(9129471, 16, 12, 2);
        k.position.set(0, 2.4, -1.6), g.add(k);
        let b = new l.x(y);
        b.addPass(new s.C(g, I));
        let A = new i.m(new a.FM8(256, 256), 0.7, 0.55, 0.7);
        b.addPass(A), b.addPass(new r.v());
        let z = [v, P, b],
          E = (e) => (z.push(e), e),
          R = (e, t, n) =>
            E(
              new a.vBJ({
                color: new a.Ilk(e, t, n),
                toneMapped: !1,
                transparent: !0,
              })
            ),
          F = new a.yGw(),
          J = new a.yGw().makeScale(0, 0, 0),
          j = x(0, 0, 0),
          T = n ? 1.2 : 0,
          B = new a.ZAu();
        g.add(B);
        let K = new a.bnF(),
          _ = new a.y$t();
        w.w.forEach((e, t) => {
          let n = 0 === t ? K : _;
          for (let t of e) {
            let e = t.slice(1);
            "M" === t[0]
              ? n.moveTo(e[0], e[1])
              : "L" === t[0]
              ? n.lineTo(e[0], e[1])
              : n.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
          }
        }),
          K.holes.push(_);
        let W = E(
          new a.O7d([K], {
            depth: 0.14,
            bevelEnabled: !0,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelSegments: c ? 3 : 5,
            curveSegments: c ? 18 : 32,
          })
        );
        W.computeBoundingBox(),
          W.translate(0, 0, -(W.boundingBox.min.z + W.boundingBox.max.z) / 2);
        let L = E(
            new a.EJi({
              color: 9129471,
              emissive: 3808908,
              emissiveIntensity: 0.6,
              metalness: 0.25,
              roughness: 0.2,
              clearcoat: 1,
              clearcoatRoughness: 0.08,
            })
          ),
          U = new a.Kj0(W, L);
        (U.position.z = 0.13), U.scale.setScalar(0.86);
        let O = new a.Kj0(W, L);
        (O.position.z = -0.13),
          (O.rotation.y = Math.PI),
          O.scale.setScalar(0.86);
        let V = [new a.FM8(0, -0.09)];
        for (let e = 0; e <= 8; e++) {
          let t = -Math.PI / 2 + (e / 8) * (Math.PI / 2);
          V.push(
            new a.FM8(0.93 + 0.07 * Math.cos(t), -0.02 + 0.07 * Math.sin(t))
          );
        }
        for (let e = 0; e <= 8; e++) {
          let t = (e / 8) * (Math.PI / 2);
          V.push(
            new a.FM8(0.93 + 0.07 * Math.cos(t), 0.02 + 0.07 * Math.sin(t))
          );
        }
        V.push(new a.FM8(0, 0.09));
        let X = new a.Kj0(
            E(new a.p7y(V, c ? 72 : 128).rotateX(Math.PI / 2)),
            E(
              new a.EJi({
                color: 723218,
                metalness: 0.6,
                roughness: 0.26,
                clearcoat: 1,
                envMapIntensity: 0.6,
              })
            )
          ),
          G = R(1.4, 1.1, 2.3),
          D = new a.Kj0(E(new a.XvJ(1, 0.013, 10, 200)), G),
          H = c ? 72 : 120,
          Y = new a.SPe(
            E(new a.DvJ(0.012, 0.03, 0.15)),
            E(new a.Wid({ color: 2761792, metalness: 0.9, roughness: 0.3 })),
            H
          );
        for (let e = 0; e < H; e++) {
          let t = (e / H) * Math.PI * 2;
          F.makeRotationZ(t).setPosition(Math.cos(t), Math.sin(t), 0),
            Y.setMatrixAt(e, F);
        }
        B.add(X, U, O, D, Y);
        let Z = document.createElement("canvas");
        Z.width = Z.height = 128;
        {
          let e = Z.getContext("2d"),
            t = e.createRadialGradient(64, 64, 0, 64, 64, 64);
          t.addColorStop(0, "rgba(190,160,255,1)"),
            t.addColorStop(0.3, "rgba(190,160,255,.35)"),
            t.addColorStop(1, "rgba(190,160,255,0)"),
            (e.fillStyle = t),
            e.fillRect(0, 0, 128, 128);
        }
        let $ = E(new a.ROQ(Z)),
          q = new a.jyi(
            E(
              new a.xeV({
                map: $,
                transparent: !0,
                blending: a.WMw,
                depthWrite: !1,
                opacity: 0.45,
              })
            )
          );
        q.scale.set(n ? 7.5 : 5.2, n ? 7.5 : 5.2, 1), g.add(q);
        let N = [0, 1].map((e) => {
            let t = new a.ZAu();
            t.rotation.set(Math.PI / 2 - 0.32 + 0.12 * e, 0, e ? 0.5 : -0.35),
              g.add(t);
            let n = new a.Kj0(
                E(new a.XvJ(1.55 + 0.32 * e, 0.006, 8, 220)),
                R(0.9, 0.7, 1.8)
              ),
              o = new a.Kj0(E(new a.xo$(0.045, 12, 12)), R(2.4, 2.2, 2.8));
            return (
              t.add(n, o),
              { g: t, ring: n, dot: o, r: 1.55 + 0.32 * e, sp: e ? -0.55 : 0.8 }
            );
          }),
          Q = [],
          ee = null,
          et = [],
          en = null,
          ea = null,
          eo = null,
          el = null,
          es = n ? 1.25 : 1;
        if (n) {
          let e = document.createElement("canvas");
          e.width = e.height = 256;
          {
            let n = e.getContext("2d");
            (n.fillStyle = t.background),
              n.fillRect(0, 0, 256, 256),
              (n.strokeStyle = "rgba(139,77,255,0.16)"),
              (n.lineWidth = 2),
              n.strokeRect(0, 0, 256, 256);
          }
          let n = E(new a.ROQ(e));
          (n.colorSpace = a.KI_),
            (n.wrapS = n.wrapT = a.rpg),
            n.repeat.set(80, 80),
            (n.anisotropy = 4);
          let o = new a.Kj0(E(new a._12(160, 160)), E(new a.vBJ({ map: n })));
          (o.rotation.x = -Math.PI / 2), (o.position.y = -1.251), g.add(o);
          let l = f(11),
            s = c ? 10 : 16;
          for (let e = -s; e <= s; e++)
            for (let t = -12; t <= 3; t++) {
              let n = 0.8 * e,
                a = 0.8 * t;
              2.2 > Math.hypot(n, a + 0.4) ||
                e % 6 == 3 ||
                t % 5 == 2 ||
                Q.push({
                  x: n,
                  z: a,
                  d: Math.hypot(n, a),
                  ph: 100 * l(),
                  sp: 0.5 + 1.4 * l(),
                });
            }
          let i = new a.SPe(
            E(new a.DvJ(0.58, 0.12, 0.58).translate(0, 0.06, 0)),
            E(
              new a.Wid({
                color: 854805,
                metalness: 0.55,
                roughness: 0.5,
                envMapIntensity: 0.3,
              })
            ),
            Q.length
          );
          (ee = new a.SPe(
            E(new a._12(0.26, 0.26).rotateX(-Math.PI / 2)),
            E(new a.vBJ({ color: 16777215, toneMapped: !1 })),
            Q.length
          )),
            Q.forEach((e, t) => {
              F.makeTranslation(e.x, -1.25, e.z),
                i.setMatrixAt(t, F),
                F.makeTranslation(e.x, -1.25 + 0.122, e.z),
                ee.setMatrixAt(t, F),
                ee.setColorAt(t, new a.Ilk(0, 0, 0));
            }),
            g.add(i, ee);
          let r = new a.Kj0(
            E(new a.fHI(1.6, 1.7, 0.16, 96)),
            E(new a.Wid({ color: 526093, metalness: 0.3, roughness: 0.8 }))
          );
          (r.position.y = -1.17), g.add(r);
          let h = new a.Kj0(
            E(new a.XvJ(1.62, 0.012, 8, 160)),
            R(0.8, 0.55, 1.6)
          );
          (h.rotation.x = Math.PI / 2), (h.position.y = -1.08), g.add(h);
          for (let e = 0; e < 12; e++) {
            let t = Math.PI + 0.3 + (e / 11) * (Math.PI - 0.6);
            et.push(x(3.565 * Math.cos(t), -1.25, 2.17 * Math.sin(t) - 0.6));
          }
          let w = new a.SPe(
            E(new a.DvJ(0.62, 0.16, 0.62).translate(0, 0.08, 0)),
            E(new a.Wid({ color: 1380639, metalness: 0.6, roughness: 0.4 })),
            12
          );
          (en = new a.SPe(
            E(new a._12(0.3, 0.3).rotateX(-Math.PI / 2)),
            E(new a.vBJ({ color: 16777215, toneMapped: !1 })),
            12
          )),
            et.forEach((e, t) => {
              F.makeTranslation(e.x, e.y, e.z),
                w.setMatrixAt(t, F),
                F.makeTranslation(e.x, e.y + 0.165, e.z),
                en.setMatrixAt(t, F),
                en.setColorAt(t, new a.Ilk(0, 0, 0));
            }),
            (ea = new a.SPe(
              E(new a.fHI(0.012, 0.012, 1, 6).translate(0, 0.5, 0)),
              R(1.6, 1.3, 2.6),
              12
            )),
            (eo = new a.SPe(E(new a.xo$(0.06, 12, 12)), R(2.2, 2, 2.8), 12)),
            (el = new a.SPe(
              E(new a.fHI(0.075, 0.075, 0.025, 20)),
              E(new a.vBJ({ color: new a.Ilk(2, 1.8, 2.6), toneMapped: !1 })),
              12
            )),
            [ea, eo, el].forEach((e) => e.instanceMatrix.setUsage(a.dj0)),
            g.add(w, en, ea, eo, el);
        }
        let ei = f(5),
          er = c ? 120 : 240,
          eh = new Float32Array(3 * er);
        for (let e = 0; e < er; e++)
          (eh[3 * e] = -9 + 18 * ei()),
            (eh[3 * e + 1] = 7 * ei() - 1.2),
            (eh[3 * e + 2] = -7 + 9 * ei());
        let ew = E(new a.u9r());
        ew.setAttribute("position", new a.TlE(eh.slice(), 3)),
          g.add(
            new a.woe(
              ew,
              E(
                new a.UY4({
                  color: 11768319,
                  size: 0.03,
                  transparent: !0,
                  opacity: 0.5,
                  depthWrite: !1,
                })
              )
            )
          ),
          g.traverse((e) => (e.frustumCulled = !1));
        let ec = 1,
          ep = 1,
          ed = 1,
          eM = { x: 0, y: 0, tx: 0, ty: 0 },
          eu = 0;
        function em() {
          let a = e.parentElement.getBoundingClientRect();
          (ec = Math.max(1, Math.round(a.width))),
            (ep = Math.max(1, Math.round(a.height))),
            y.setSize(ec, ep, !1),
            b.setPixelRatio(y.getPixelRatio()),
            b.setSize(ec, ep),
            (I.aspect = ec / ep);
          let o = ec / ep > 1.15;
          if (n && o) {
            var l;
            let e =
              ((null !== (l = t.focusX) && void 0 !== l ? l : 0.66) - 0.5) *
              2 *
              ec;
            (I.fov = 30),
              (I.aspect = (ec + Math.abs(e)) / ep),
              I.setViewOffset(
                ec + Math.abs(e),
                ep,
                e > 0 ? 0 : Math.abs(e),
                0,
                ec,
                ep
              );
          } else if (n) {
            I.fov = 40;
            let e = ec / ep,
              t = Math.tan((I.fov * Math.PI) / 360);
            ed = Math.max(1, 2.6 / (1.28 * t * e) / 9.8);
            let n =
                (0.5 -
                  (Math.min(0.5, (0.5 * Math.min(0.78 * ec, 340)) / ep) +
                    0.065)) *
                ep,
              a = ep + 2 * n;
            (I.aspect = ec / a),
              (I.fov = (2 * Math.atan((t * a) / ep) * 180) / Math.PI),
              I.setViewOffset(ec, a, 0, 2 * n, ec, ep);
          } else (I.fov = 26), I.clearViewOffset();
          (o || !n) && (ed = 1), I.updateProjectionMatrix(), eS(eA);
        }
        let ex = new a.Ilk(),
          ef = new a.Ilk("#1a1430"),
          ey = new a.Ilk("#4a32a0"),
          eC = new a.Ilk(1.5, 1.4, 2.1),
          eg = new a.Ilk(1.1, 0.55, 2.4),
          eP = (e, t, n, a, o) => {
            let l = 1 - a;
            return o.set(
              l * l * e.x + 2 * l * a * t.x + a * a * n.x,
              l * l * e.y + 2 * l * a * t.y + a * a * n.y,
              l * l * e.z + 2 * l * a * t.z + a * a * n.z
            );
          },
          ev = new a._fP(),
          eI = x(0, 1, 0);
        function eS(e) {
          (eM.x += (eM.tx - eM.x) * 0.06), (eM.y += (eM.ty - eM.y) * 0.06);
          let t = M(p(e, 0, 2.4));
          if (n) {
            let n = 0.55 + (1 - t) * 0.2;
            I.position.set(
              0.3 * Math.sin(0.22 * e) + 0.45 * eM.x,
              1.25 + (1 - t) * 1 + 0.25 * eM.y,
              10.6 - 0.8 * t + 1.5 * eu
            ),
              I.position.sub(j.set(0, n, 0)).multiplyScalar(ed).add(j),
              I.lookAt(0, n, 0);
          } else I.position.set(0.3 * eM.x, 0.2 * eM.y, 7.2), I.lookAt(0, 0, 0);
          I.updateMatrixWorld();
          let o = d(p(e, 0.2, 1.8));
          B.position.set(0, T - (1 - o) * 1.4 + 0.05 * Math.sin(0.9 * e), 0),
            B.rotation.set(
              -0.06 + 0.04 * Math.sin(0.5 * e) - 0.12 * eM.y,
              (1 - d(p(e, 0.2, 2.2))) * Math.PI * 2 +
                0.32 * Math.sin(0.45 * e) +
                0.35 * eM.x +
                1.2 * eu,
              0
            ),
            B.scale.setScalar(
              es * Math.max(0.001, 0.55 + 0.45 * u(p(e, 0.2, 1.7)))
            ),
            q.position.copy(B.position).add(x(0, 0, -0.6)),
            (q.material.opacity =
              (0.4 + 0.12 * Math.sin(1.3 * e)) * p(e, 0.3, 1.4)),
            N.forEach((t, n) => {
              let a = d(p(e, 0.9 + 0.2 * n, 1.8 + 0.2 * n));
              t.g.position.copy(B.position),
                t.g.scale.setScalar(es * Math.max(0.001, 0.6 + 0.4 * a)),
                (t.ring.material.opacity = 0.8 * a);
              let o = e * t.sp;
              t.dot.position.set(Math.cos(o) * t.r, Math.sin(o) * t.r, 0),
                (t.dot.material.opacity = a);
            });
          let l = 0;
          if (n && ee && en && ea && eo && el) {
            for (let t = 0; t < Q.length; t++) {
              let n = Q[t],
                a = p(e, 0.1 + 0.05 * n.d, 0.5 + 0.05 * n.d),
                o = 0.7 * Math.pow(Math.max(0, Math.sin(n.ph + e * n.sp)), 10);
              ex.copy(ef)
                .multiplyScalar(a)
                .lerp(ey, o * a)
                .lerp(eC, 0.7 * m(e, 0.4 + 0.05 * n.d, 0.12) * a);
              let l = ((e - 3) * 2.2) % 18;
              ex.lerp(
                ey,
                0.5 * Math.exp(-Math.pow(n.d - l, 2) / 0.8) * p(e, 3, 4)
              ),
                ee.setColorAt(t, ex);
            }
            ee.instanceColor.needsUpdate = !0;
            let t = B.position.clone().add(x(0, -0.5, 0));
            for (let n = 0; n < 12; n++) {
              let o = et[n],
                s = ((5 * n) % 12) * 0.55,
                i = e - 2.6 - s,
                r =
                  i < 0
                    ? -99
                    : 2.6 +
                      s +
                      6.6000000000000005 * Math.floor(i / 6.6000000000000005),
                h = x(o.x, o.y + 0.17, o.z),
                w = p(e, r, r + 0.45),
                c = p(e, r + 0.55, r + 1.35);
              if ((e >= r && e < r + 1 ? 1 - p(e, r + 0.6, r + 1) : 0) > 0.01) {
                let e = h.distanceTo(t) * d(Math.min(1, 1.3 * w));
                j.subVectors(t, h).normalize(),
                  ev.setFromUnitVectors(eI, j),
                  F.compose(h, ev, x(1, Math.max(0.001, e), 1)),
                  ea.setMatrixAt(n, F);
              } else ea.setMatrixAt(n, J);
              w > 0 && w < 1
                ? (j.lerpVectors(h, t, M(w)),
                  F.makeTranslation(j.x, j.y, j.z),
                  eo.setMatrixAt(n, F))
                : eo.setMatrixAt(n, J),
                c > 0 && c < 1
                  ? (eP(
                      t,
                      x((t.x + h.x) / 2, t.y + 0.9, (t.z + h.z) / 2),
                      h.clone().add(x(0, 0.15, 0)),
                      M(c),
                      j
                    ),
                    F.makeRotationFromEuler(
                      new a.USm(Math.PI / 2, 5 * e + n, 0)
                    ).setPosition(j),
                    el.setMatrixAt(n, F))
                  : el.setMatrixAt(n, J),
                (l = Math.max(l, m(e, r + 0.45, 0.12))),
                ex
                  .copy(ef)
                  .lerp(ey, 0.5 * p(e, 1.2, 2))
                  .lerp(eg, m(e, r + 0.15, 0.25))
                  .lerp(eC, m(e, r + 1.35, 0.2)),
                en.setColorAt(n, ex);
            }
            (en.instanceColor.needsUpdate = !0),
              [ea, eo, el].forEach((e) => (e.instanceMatrix.needsUpdate = !0));
          } else l = (0.5 + 0.5 * Math.sin(1.4 * e)) * 0.4;
          G.color.setRGB(1.4 + 0.8 * l, 1.1 + 0.9 * l, 2.3 + 0.4 * l),
            (k.intensity = 14 + 16 * l);
          let s = ew.attributes.position;
          for (let t = 0; t < er; t++)
            s.setY(t, ((eh[3 * t + 1] + 1.2 + 0.12 * e) % 7) - 1.2);
          (s.needsUpdate = !0), b.render();
        }
        let ek = !0,
          eb = 0,
          eA = 0,
          ez = performance.now(),
          eE = !!t.still,
          eR = (e) => {
            eb = requestAnimationFrame(eR);
            let t = Math.min(0.05, (e - ez) / 1e3);
            (ez = e), ek && eS((eA += t));
          };
        return (
          em(),
          eE ? eS((eA = 6)) : (eb = requestAnimationFrame(eR)),
          {
            resize: em,
            setPointer: (e, t) => {
              (eM.tx = e), (eM.ty = t);
            },
            setScroll: (e) => {
              (eu = e), eE && eS(eA);
            },
            setActive: (e) => {
              (ek = e), (ez = performance.now());
            },
            renderAt: (e) => {
              cancelAnimationFrame(eb),
                (eA = e),
                (eM.x = eM.tx),
                (eM.y = eM.ty),
                eS(e);
            },
            dispose: () => {
              cancelAnimationFrame(eb),
                z.forEach((e) => e.dispose()),
                y.dispose();
            },
          }
        );
      }
    },
  },
]);

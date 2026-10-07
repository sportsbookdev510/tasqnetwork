"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7951],
  {
    77951: function (e, t, a) {
      a.r(t),
        a.d(t, {
          createPie: function () {
            return l;
          },
        });
      var n = a(51448),
        s = a(72079),
        i = a(79825);
      let o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(a, Math.max(t, e));
        },
        r = (e) => 1 - Math.pow(1 - e, 3);
      function l(e, t, a) {
        let l = new n.CP7({ canvas: e, antialias: !0, alpha: !1 });
        l.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, a.lite ? 1.5 : 2)
        ),
          (l.outputColorSpace = s.KI_),
          (l.toneMapping = s.uL9);
        let c = new s.xsS();
        c.background = new s.Ilk(a.background);
        let d = new n.anP(l),
          h = d.fromScene(new i.C(), 0.04).texture;
        c.environment = h;
        let p = new s.cPb(30, 1, 0.1, 50);
        c.add(new s.Mig(11575551, 0.32));
        let u = new s.Ox3(16777215, 0.6);
        u.position.set(-3, 6, 4), c.add(u);
        let m = new s.cek(9129471, 8, 10, 2);
        m.position.set(2.5, 1.5, 2.5), c.add(m);
        let w = [h, d],
          M = new s.ZAu();
        c.add(M), (M.rotation.x = -1.02);
        let x = t.reduce((e, t) => e + t.value, 0),
          v = [],
          f =
            -Math.PI / 3 +
            (t
              .filter((e) => e.value / x < 0.08)
              .reduce((e, t) => e + t.value, 0) /
              x) *
              Math.PI;
        for (let e of t) {
          let t = (e.value / x) * Math.PI * 2,
            a = f - t,
            n = new s.bnF(),
            i = f - 0.016129032258064516,
            o = a + 0.016129032258064516,
            r = f - 0.040322580645161296,
            l = a + 0.040322580645161296;
          n.moveTo(1.55 * Math.cos(i), 1.55 * Math.sin(i)),
            n.absarc(0, 0, 1.55, i, o, !0),
            n.lineTo(0.62 * Math.cos(l), 0.62 * Math.sin(l)),
            n.absarc(0, 0, 0.62, l, r, !1),
            n.closePath();
          let c = e.value / x < 0.08,
            d = 0.34 * (c ? 1.6 : 1),
            h = new s.O7d(n, {
              depth: d,
              bevelEnabled: !0,
              bevelThickness: 0.025,
              bevelSize: 0.02,
              bevelSegments: 3,
              curveSegments: Math.max(8, Math.round(40 * t)),
            }),
            p = new s.Ilk(e.color),
            u = new s.EJi({
              color: p,
              metalness: 0.05,
              roughness: 0.42,
              clearcoat: 0.6,
              clearcoatRoughness: 0.25,
              envMapIntensity: 0.35,
              emissive: p.clone().multiplyScalar(0.12),
            }),
            m = new s.Kj0(h, u),
            k = new s.Kj0(
              new s.oa8(n, 24),
              new s.vBJ({
                color: p.clone().lerp(new s.Ilk("#ffffff"), 0.35),
                transparent: !0,
                opacity: 0.08,
                toneMapped: !1,
              })
            );
          k.position.z = d + 0.03;
          let g = new s.ZAu();
          g.add(m, k), M.add(g);
          let b = (f + a) / 2;
          v.push({
            key: e.key,
            mesh: g,
            mid: b,
            lift: c ? 0.3 : 0,
            hover: 0,
            base: new s.Pa4(Math.cos(b), Math.sin(b), 0),
            top: k,
          }),
            w.push(h, u, k.geometry, k.material),
            (f = a);
        }
        let k = new s.Kj0(
          new s.fHI(1.9, 1.97, 0.06, 96).rotateX(Math.PI / 2),
          new s.Wid({ color: 986138, metalness: 0.5, roughness: 0.6 })
        );
        (k.position.z = -0.06), M.add(k);
        let g = new s.Kj0(
          new s.XvJ(1.55 + 0.36, 0.008, 8, 200),
          new s.vBJ({ color: new s.Ilk(0.55, 0.42, 0.95), toneMapped: !1 })
        );
        M.add(g), w.push(k.geometry, k.material, g.geometry, g.material);
        let b = 1,
          y = 1,
          A = null,
          P = !0,
          j = 0,
          S = 0,
          I = performance.now();
        function K() {
          let t = e.parentElement.getBoundingClientRect();
          (b = Math.max(1, Math.round(t.width))),
            (y = Math.max(1, Math.round(t.height))),
            l.setSize(b, y, !1),
            (p.aspect = b / y);
          let a = b / y < 1 ? (9.6 / (b / y)) * 0.82 : 9.6,
            n = b < 600;
          (M.position.x = n ? 0 : -0.55),
            p.position.set(0, 0.2, n ? 0.86 * a : a),
            p.lookAt(0, n ? 0.42 : -0.15, 0),
            p.updateProjectionMatrix(),
            C(S);
        }
        function C(e) {
          var t;
          let n = r(o(e / 1.6));
          (M.rotation.z = 0.06 * Math.sin(0.35 * e) + (1 - n) * 1.4),
            (M.rotation.x = -1.02 + 0.03 * Math.sin(0.5 * e)),
            M.scale.setScalar(0.8 + 0.2 * n),
            v.forEach((t, a) => {
              let n = t.key === A ? 1 : 0;
              t.hover += (n - t.hover) * 0.18;
              let s = r(o((e - 0.2 - 0.12 * a) / 0.8)),
                i = t.lift + 0.14 * t.hover;
              t.mesh.position.set(
                t.base.x * i,
                t.base.y * i,
                (1 - s) * 0.8 + 0.12 * t.hover
              ),
                t.mesh.scale.setScalar(Math.max(0.001, s));
            }),
            l.render(c, p),
            null === (t = a.onFrame) || void 0 === t || t.call(a);
        }
        let E = (e) => {
          j = requestAnimationFrame(E);
          let t = Math.min(0.05, (e - I) / 1e3);
          (I = e), P && C((S += t));
        };
        K(), a.still ? C((S = 4)) : (j = requestAnimationFrame(E));
        let F = new s.iMs(),
          _ = new s.FM8(),
          z = new s.Pa4();
        return {
          resize: K,
          setActive: (e) => {
            (P = e), (I = performance.now());
          },
          setHover: (e) => {
            (A = e), a.still && C(S);
          },
          anchors: () => {
            let e = {};
            return (
              v.forEach((t) => {
                let a = t.lift > 0,
                  n = a ? 1.55 : 1.135;
                z.set(
                  Math.cos(t.mid) * n,
                  Math.sin(t.mid) * n,
                  0.34 * (a ? 1.6 : 1) + 0.04
                ),
                  t.mesh.updateWorldMatrix(!0, !1),
                  z.applyMatrix4(t.mesh.matrixWorld).project(p),
                  (e[t.key] = {
                    x: ((z.x + 1) / 2) * b,
                    y: ((1 - z.y) / 2) * y,
                  });
              }),
              e
            );
          },
          pick: (e, t) => {
            for (let a of (_.set((e / b) * 2 - 1, -((t / y) * 2) + 1),
            F.setFromCamera(_, p),
            v))
              if (F.intersectObject(a.mesh, !0).length) return a.key;
            return null;
          },
          renderAt: (e) => {
            cancelAnimationFrame(j), (S = e), C(e);
          },
          dispose: () => {
            cancelAnimationFrame(j), w.forEach((e) => e.dispose()), l.dispose();
          },
        };
      }
    },
    79825: function (e, t, a) {
      a.d(t, {
        C: function () {
          return s;
        },
      });
      var n = a(72079);
      class s extends n.xsS {
        constructor() {
          super();
          let e = new n.DvJ();
          e.deleteAttribute("uv");
          let t = new n.Wid({ side: n._Li }),
            a = new n.Wid(),
            s = new n.cek(16777215, 900, 28, 2);
          s.position.set(0.418, 16.199, 0.3), this.add(s);
          let o = new n.Kj0(e, t);
          o.position.set(-0.757, 13.219, 0.717),
            o.scale.set(31.713, 28.305, 28.591),
            this.add(o);
          let r = new n.SPe(e, a, 6),
            l = new n.Tme();
          l.position.set(-10.906, 2.009, 1.846),
            l.rotation.set(0, -0.195, 0),
            l.scale.set(2.328, 7.905, 4.651),
            l.updateMatrix(),
            r.setMatrixAt(0, l.matrix),
            l.position.set(-5.607, -0.754, -0.758),
            l.rotation.set(0, 0.994, 0),
            l.scale.set(1.97, 1.534, 3.955),
            l.updateMatrix(),
            r.setMatrixAt(1, l.matrix),
            l.position.set(6.167, 0.857, 7.803),
            l.rotation.set(0, 0.561, 0),
            l.scale.set(3.927, 6.285, 3.687),
            l.updateMatrix(),
            r.setMatrixAt(2, l.matrix),
            l.position.set(-2.017, 0.018, 6.124),
            l.rotation.set(0, 0.333, 0),
            l.scale.set(2.002, 4.566, 2.064),
            l.updateMatrix(),
            r.setMatrixAt(3, l.matrix),
            l.position.set(2.291, -0.756, -2.621),
            l.rotation.set(0, -0.286, 0),
            l.scale.set(1.546, 1.552, 1.496),
            l.updateMatrix(),
            r.setMatrixAt(4, l.matrix),
            l.position.set(-2.193, -0.369, -5.547),
            l.rotation.set(0, 0.516, 0),
            l.scale.set(3.875, 3.487, 2.986),
            l.updateMatrix(),
            r.setMatrixAt(5, l.matrix),
            this.add(r);
          let c = new n.Kj0(e, i(50));
          c.position.set(-16.116, 14.37, 8.208),
            c.scale.set(0.1, 2.428, 2.739),
            this.add(c);
          let d = new n.Kj0(e, i(50));
          d.position.set(-16.109, 18.021, -8.207),
            d.scale.set(0.1, 2.425, 2.751),
            this.add(d);
          let h = new n.Kj0(e, i(17));
          h.position.set(14.904, 12.198, -1.832),
            h.scale.set(0.15, 4.265, 6.331),
            this.add(h);
          let p = new n.Kj0(e, i(43));
          p.position.set(-0.462, 8.89, 14.52),
            p.scale.set(4.38, 5.441, 0.088),
            this.add(p);
          let u = new n.Kj0(e, i(20));
          u.position.set(3.235, 11.486, -12.541),
            u.scale.set(2.5, 2, 0.1),
            this.add(u);
          let m = new n.Kj0(e, i(100));
          m.position.set(0, 20, 0), m.scale.set(1, 0.1, 1), this.add(m);
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
      function i(e) {
        return new n.YBo({
          color: 0,
          emissive: 16777215,
          emissiveIntensity: e,
        });
      }
    },
  },
]);

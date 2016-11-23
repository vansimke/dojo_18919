//>>built
define("dojo/_base/declare", ["./kernel", "../has", "./lang"], function(w, v, z) {
  function t(e, c) {
    throw Error("declare" + (c ? " " + c : "") + ": " + e);
  }
  function E(e, c, a) {
    var b, d, f, h, k, g, l, p = this._inherited = this._inherited || {};
    "string" == typeof e && (b = e, e = c, c = a);
    a = 0;
    h = e.callee;
    (b = b || h.nom) || t("can't deduce a name to call inherited()", this.declaredClass);
    k = this.constructor._meta;
    f = k.bases;
    l = p.p;
    if ("constructor" != b) {
      if (p.c !== h && (l = 0, g = f[0], k = g._meta, k.hidden[b] !== h)) {
        (d = k.chains) && "string" == typeof d[b] && t("calling chained method with inherited: " + b, this.declaredClass);
        do {
          if (k = g._meta, d = g.prototype, k && (d[b] === h && d.hasOwnProperty(b) || k.hidden[b] === h)) {
            break;
          }
        } while (g = f[++l]);
        l = g ? l : -1;
      }
      if (g = f[++l]) {
        if (d = g.prototype, g._meta && d.hasOwnProperty(b)) {
          a = d[b];
        } else {
          h = u[b];
          do {
            if (d = g.prototype, (a = d[b]) && (g._meta ? d.hasOwnProperty(b) : a !== h)) {
              break;
            }
          } while (g = f[++l]);
        }
      }
      a = g && a || u[b];
    } else {
      if (p.c !== h && (l = 0, (k = f[0]._meta) && k.ctor !== h)) {
        for ((d = k.chains) && "manual" === d.constructor || t("calling chained constructor with inherited", this.declaredClass);(g = f[++l]) && (!(k = g._meta) || k.ctor !== h);) {
        }
        l = g ? l : -1;
      }
      for (;(g = f[++l]) && !(a = (k = g._meta) ? k.ctor : g);) {
      }
      a = g && a;
    }
    p.c = a;
    p.p = l;
    if (a) {
      return !0 === c ? a : a.apply(this, c || e);
    }
  }
  function G(e, c) {
    return "string" == typeof e ? this.__inherited(e, c, !0) : this.__inherited(e, !0);
  }
  function H(e, c, a) {
    var b = this.getInherited(e, c);
    if (b) {
      return b.apply(this, a || c || e);
    }
  }
  function I(e) {
    for (var c = this.constructor._meta.bases, a = 0, b = c.length;a < b;++a) {
      if (c[a] === e) {
        return !0;
      }
    }
    return this instanceof e;
  }
  function J(e, c) {
    for (var a in c) {
      "constructor" != a && c.hasOwnProperty(a) && (e[a] = c[a]);
    }
    if (v("bug-for-in-skips-shadowed")) {
      for (var b = z._extraNames, d = b.length;d;) {
        a = b[--d], "constructor" != a && c.hasOwnProperty(a) && (e[a] = c[a]);
      }
    }
  }
  function K(e) {
    x.safeMixin(this.prototype, e);
    return this;
  }
  function L(e, c) {
    e instanceof Array || "function" == typeof e || (c = e, e = void 0);
    c = c || {};
    e = e || [];
    return x([this].concat(e), c);
  }
  function M(e, c) {
    return function() {
      var a = arguments, b = a, d = a[0], f, h;
      h = e.length;
      var k;
      if (!(this instanceof a.callee)) {
        return C(a);
      }
      if (c && (d && d.preamble || this.preamble)) {
        for (k = Array(e.length), k[0] = a, f = 0;;) {
          (d = a[0]) && (d = d.preamble) && (a = d.apply(this, a) || a);
          d = e[f].prototype;
          (d = d.hasOwnProperty("preamble") && d.preamble) && (a = d.apply(this, a) || a);
          if (++f == h) {
            break;
          }
          k[f] = a;
        }
      }
      for (f = h - 1;0 <= f;--f) {
        d = e[f], (d = (h = d._meta) ? h.ctor : d) && d.apply(this, k ? k[f] : a);
      }
      (d = this.postscript) && d.apply(this, b);
    };
  }
  function N(e, c) {
    return function() {
      var a = arguments, b = a, d = a[0];
      if (!(this instanceof a.callee)) {
        return C(a);
      }
      c && (d && (d = d.preamble) && (b = d.apply(this, b) || b), (d = this.preamble) && d.apply(this, b));
      e && e.apply(this, a);
      (d = this.postscript) && d.apply(this, a);
    };
  }
  function O(e) {
    return function() {
      var c = arguments, a = 0, b, d;
      if (!(this instanceof c.callee)) {
        return C(c);
      }
      for (;b = e[a];++a) {
        if (b = (d = b._meta) ? d.ctor : b) {
          b.apply(this, c);
          break;
        }
      }
      (b = this.postscript) && b.apply(this, c);
    };
  }
  function P(e, c, a) {
    return function() {
      var b, d, f = 0, h = 1;
      a && (f = c.length - 1, h = -1);
      for (;b = c[f];f += h) {
        d = b._meta, (b = (d ? d.hidden : b.prototype)[e]) && b.apply(this, arguments);
      }
    };
  }
  function F(e) {
    e = new D;
    D.prototype = null;
    return e;
  }
  function C(e) {
    var c = e.callee, a = F(c);
    c.apply(a, e);
    return a;
  }
  function x(e, c, a) {
    "string" != typeof e && (a = c, c = e, e = "");
    a = a || {};
    var b, d, f, h, k, g, l, p = 1, w = c;
    if ("[object Array]" == y.call(c)) {
      p = e;
      d = [];
      f = [{cls:0, refs:[]}];
      h = {};
      g = 1;
      for (var v = c.length, r = 0, n, A, m, q;r < v;++r) {
        (n = c[r]) ? "[object Function]" != y.call(n) && t("mixin #" + r + " is not a callable constructor.", p) : t("mixin #" + r + " is unknown. Did you use dojo.require to pull it in?", p);
        A = n._meta ? n._meta.bases : [n];
        m = 0;
        for (n = A.length - 1;0 <= n;--n) {
          q = A[n].prototype, q.hasOwnProperty("declaredClass") || (q.declaredClass = "uniqName_" + Q++), q = q.declaredClass, h.hasOwnProperty(q) || (h[q] = {count:0, refs:[], cls:A[n]}, ++g), q = h[q], m && m !== q && (q.refs.push(m), ++m.count), m = q;
        }
        ++m.count;
        f[0].refs.push(m);
      }
      for (;f.length;) {
        m = f.pop();
        d.push(m.cls);
        for (--g;b = m.refs, 1 == b.length;) {
          m = b[0];
          if (!m || --m.count) {
            m = 0;
            break;
          }
          d.push(m.cls);
          --g;
        }
        if (m) {
          for (r = 0, v = b.length;r < v;++r) {
            m = b[r], --m.count || f.push(m);
          }
        }
      }
      g && t("can't build consistent linearization", p);
      n = c[0];
      d[0] = n ? n._meta && n === d[d.length - n._meta.bases.length] ? n._meta.bases.length : 1 : 0;
      g = d;
      f = g[0];
      p = g.length - f;
      c = g[p];
    } else {
      g = [0], c ? "[object Function]" == y.call(c) ? (f = c._meta, g = g.concat(f ? f.bases : c)) : t("base class is not a callable constructor.", e) : null !== c && t("unknown base class. Did you use dojo.require to pull it in?", e);
    }
    if (c) {
      for (d = p - 1;;--d) {
        b = F(c);
        if (!d) {
          break;
        }
        f = g[d];
        (f._meta ? J : B)(b, f.prototype);
        h = new Function;
        h.superclass = c;
        h.prototype = b;
        c = b.constructor = h;
      }
    } else {
      b = {};
    }
    x.safeMixin(b, a);
    f = a.constructor;
    f !== u.constructor && (f.nom = "constructor", b.constructor = f);
    for (d = p - 1;d;--d) {
      (f = g[d]._meta) && f.chains && (l = B(l || {}, f.chains));
    }
    b["-chains-"] && (l = B(l || {}, b["-chains-"]));
    c && c.prototype && c.prototype["-chains-"] && (l = B(l || {}, c.prototype["-chains-"]));
    f = !l || !l.hasOwnProperty("constructor");
    g[0] = h = l && "manual" === l.constructor ? O(g) : 1 == g.length ? N(a.constructor, f) : M(g, f);
    h._meta = {bases:g, hidden:a, chains:l, parents:w, ctor:a.constructor};
    h.superclass = c && c.prototype;
    h.extend = K;
    h.createSubclass = L;
    h.prototype = b;
    b.constructor = h;
    b.getInherited = G;
    b.isInstanceOf = I;
    b.inherited = R;
    b.__inherited = E;
    e && (b.declaredClass = e, z.setObject(e, h));
    if (l) {
      for (k in l) {
        b[k] && "string" == typeof l[k] && "constructor" != k && (f = b[k] = P(k, g, "after" === l[k]), f.nom = k);
      }
    }
    return h;
  }
  var B = z.mixin, u = Object.prototype, y = u.toString, D, Q = 0;
  D = v("csp-restrictions") ? function() {
  } : new Function;
  var R = w.config.isDebug ? H : E;
  w.safeMixin = x.safeMixin = function(e, c) {
    var a, b;
    for (a in c) {
      b = c[a], b === u[a] && a in u || "constructor" == a || ("[object Function]" == y.call(b) && (b.nom = a), e[a] = b);
    }
    if (v("bug-for-in-skips-shadowed") && c) {
      for (var d = z._extraNames, f = d.length;f;) {
        a = d[--f], b = c[a], b === u[a] && a in u || "constructor" == a || ("[object Function]" == y.call(b) && (b.nom = a), e[a] = b);
      }
    }
    return e;
  };
  return w.declare = x;
});

//# sourceMappingURL=declare.js.map
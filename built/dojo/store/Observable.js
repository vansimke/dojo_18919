//>>built
define("dojo/store/Observable", ["../_base/kernel", "../_base/lang", "../when", "../_base/array"], function(a, n, p, u) {
  a = function(b) {
    function a(q, g) {
      var c = b[q];
      c && (b[q] = function(e) {
        var f;
        "put" === q && (f = b.getIdentity(e));
        if (r) {
          return c.apply(this, arguments);
        }
        r = !0;
        try {
          var a = c.apply(this, arguments);
          p(a, function(b) {
            g("object" == typeof b && b || e, f);
          });
          return a;
        } finally {
          r = !1;
        }
      });
    }
    var l = [], v = 0;
    b = n.delegate(b);
    b.notify = function(b, g) {
      v++;
      for (var c = l.slice(), a = 0, f = c.length;a < f;a++) {
        c[a](b, g);
      }
    };
    var y = b.query;
    b.query = function(a, g) {
      g = g || {};
      var c = y.apply(this, arguments);
      if (c && c.forEach) {
        var e = n.mixin({}, g);
        delete e.start;
        delete e.count;
        var f = b.queryEngine && b.queryEngine(a, e), r = v, t = [], x;
        c.observe = function(a, q) {
          1 == t.push(a) && l.push(x = function(a, e) {
            p(c, function(d) {
              var c = d.length != g.count, h, l;
              if (++r != v) {
                throw Error("Query is out of date, you must observe() the query prior to any data modifications");
              }
              var n, m = -1, k = -1;
              if (void 0 !== e) {
                var p = [].concat(d);
                f && !a && (p = f(d));
                h = 0;
                for (l = d.length;h < l;h++) {
                  var w = d[h];
                  if (b.getIdentity(w) == e && !(0 > p.indexOf(w))) {
                    n = w;
                    m = h;
                    !f && a || d.splice(h, 1);
                    break;
                  }
                }
              }
              f ? a && (f.matches ? f.matches(a) : f([a]).length) && (h = -1 < m ? m : d.length, d.splice(h, 0, a), k = u.indexOf(f(d), a), d.splice(h, 1), g.start && 0 == k || !c && k == d.length ? k = -1 : d.splice(k, 0, a)) : a && (void 0 !== e ? k = m : g.start || (k = b.defaultIndex || 0, d.splice(k, 0, a)));
              if ((-1 < m || -1 < k) && (q || !f || m != k)) {
                for (c = t.slice(), h = 0;d = c[h];h++) {
                  d(a || n, m, k);
                }
              }
            });
          });
          var e = {};
          e.remove = e.cancel = function() {
            var b = u.indexOf(t, a);
            -1 < b && (t.splice(b, 1), t.length || l.splice(u.indexOf(l, x), 1));
          };
          return e;
        };
      }
      return c;
    };
    var r;
    a("put", function(a, g) {
      b.notify(a, g);
    });
    a("add", function(a) {
      b.notify(a);
    });
    a("remove", function(a) {
      b.notify(void 0, a);
    });
    return b;
  };
  n.setObject("dojo.store.Observable", a);
  return a;
});

//# sourceMappingURL=Observable.js.map
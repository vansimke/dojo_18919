//>>built
define("dojo/i18n", "./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "), function(k, l, m, p, F, n, z, G, H) {
  m.add("dojo-preload-i18n-Api", 1);
  var q = k.i18n = {}, I = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, J = function(a, b, d, c) {
    var f = [d + c];
    b = b.split("-");
    for (var h = "", g = 0;g < b.length;g++) {
      if (h += (h ? "-" : "") + b[g], !a || a[h]) {
        f.push(d + h + "/" + c), f.specificity = h;
      }
    }
    return f;
  }, h = {}, B = function(a, b, d) {
    d = d ? d.toLowerCase() : k.locale;
    a = a.replace(/\./g, "/");
    b = b.replace(/\./g, "/");
    return /root/i.test(d) ? a + "/nls/" + b : a + "/nls/" + d + "/" + b;
  }, K = k.getL10nName = function(a, b, d) {
    return H.id + "!" + B(a, b, d);
  }, M = function(a, b, d, c, f, l) {
    a([b], function(g) {
      var e = n.clone(g.root || g.ROOT), r = J(!g._v1x && g, f, d, c);
      a(r, function() {
        for (var a = 1;a < r.length;a++) {
          e = n.mixin(n.clone(e), arguments[a]);
        }
        h[b + "/" + f] = e;
        e.$locale = r.specificity;
        l();
      });
    });
  }, N = function(a) {
    var b = F.extraLocale || [], b = n.isArray(b) ? b : [b];
    b.push(a);
    return b;
  }, w = function(a, b, d) {
    var c = I.exec(a), f = c[1] + "/", l = c[5] || c[4], g = f + l, e = (c = c[5] && c[4]) || k.locale || "", r = g + "/" + e, c = c ? [e] : N(e), L = c.length, C = function() {
      --L || d(n.delegate(h[r]));
    };
    if (m("dojo-preload-i18n-Api")) {
      var e = a.split("*"), D = "preload" == e[1];
      D && (h[a] || (h[a] = 1, O(e[2], G.parse(e[3]), 1, b)), d(1));
      (e = D) || (t && v.push([a, b, d]), e = t && !h[r]);
      if (e) {
        return;
      }
    }
    p.forEach(c, function(a) {
      var c = g + "/" + a;
      m("dojo-preload-i18n-Api") && u(c);
      h[c] ? C() : M(b, g, f, l, a, C);
    });
  };
  m("dojo-preload-i18n-Api");
  var P = q.normalizeLocale = function(a) {
    a = a ? a.toLowerCase() : k.locale;
    return "root" == a ? "ROOT" : a;
  }, t = 0, v = [], O = q._preloadLocalizations = function(a, b, d, c) {
    function f(a, b) {
      c.isXdUrl(l.toUrl(a + ".js")) || d ? c([a], b) : E([a], b, c);
    }
    function A(a, b) {
      for (var c = a.split("-");c.length;) {
        if (b(c.join("-"))) {
          return;
        }
        c.pop();
      }
      b("ROOT");
    }
    function g() {
      for (--t;!t && v.length;) {
        w.apply(null, v.shift());
      }
    }
    function e(d) {
      d = P(d);
      A(d, function(e) {
        if (0 <= p.indexOf(b, e)) {
          var k = a.replace(/\./g, "/") + "_" + e;
          t++;
          f(k, function(a) {
            for (var b in a) {
              var f = a[b], k = b.match(/(.+)\/([^\/]+)$/), m;
              if (k && (m = k[2], k = k[1] + "/", f._localized)) {
                var p;
                if ("ROOT" === e) {
                  var q = p = f._localized;
                  delete f._localized;
                  q.root = f;
                  h[l.toAbsMid(b)] = q;
                } else {
                  p = f._localized, h[l.toAbsMid(k + m + "/" + e)] = f;
                }
                e !== d && function(a, b, f, e) {
                  var k = [], m = [];
                  A(d, function(c) {
                    e[c] && (k.push(l.toAbsMid(a + c + "/" + b)), m.push(l.toAbsMid(a + b + "/" + c)));
                  });
                  k.length ? (t++, c(k, function() {
                    for (var c = k.length - 1;0 <= c;c--) {
                      f = n.mixin(n.clone(f), arguments[c]), h[m[c]] = f;
                    }
                    h[l.toAbsMid(a + b + "/" + d)] = n.clone(f);
                    g();
                  })) : h[l.toAbsMid(a + b + "/" + d)] = f;
                }(k, m, f, p);
              }
            }
            g();
          });
          return !0;
        }
        return !1;
      });
    }
    c = c || l;
    e();
    p.forEach(k.config.extraLocale, e);
  }, u = function() {
  }, x = {}, y, E = function(a, b, d) {
    var c = [];
    p.forEach(a, function(a) {
      function b(d) {
        y || (y = new Function("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"));
        d = y(d, u, a, x);
        d === x ? c.push(h[g] = x.result) : (d instanceof Error && (console.error("failed to evaluate i18n bundle; url\x3d" + g, d), d = {}), c.push(h[g] = /nls\/[^\/]+\/[^\/]+$/.test(g) ? d : {root:d, _v1x:1}));
      }
      var g = d.toUrl(a + ".js");
      if (h[g]) {
        c.push(h[g]);
      } else {
        var e = d.syncLoadNls(a);
        e || (e = u(a.replace(/nls\/([^\/]*)\/([^\/]*)$/, "nls/$2/$1")));
        if (e) {
          c.push(e);
        } else {
          if (z) {
            z.get({url:g, sync:!0, load:b, error:function() {
              c.push(h[g] = {});
            }});
          } else {
            try {
              d.getText(g, !0, b);
            } catch (k) {
              c.push(h[g] = {});
            }
          }
        }
      }
    });
    b && b.apply(null, c);
  }, u = function(a) {
    for (var b, d = a.split("/"), c = k.global[d[0]], f = 1;c && f < d.length - 1;c = c[d[f++]]) {
    }
    c && ((b = c[d[f]]) || (b = c[d[f].replace(/-/g, "_")]), b && (h[a] = b));
    return b;
  };
  q.getLocalization = function(a, b, d) {
    var c;
    a = B(a, b, d);
    w(a, l.isXdUrl(l.toUrl(a + ".js")) ? l : function(a, b) {
      E(a, b, l);
    }, function(a) {
      c = a;
    });
    return c;
  };
  return n.mixin(q, {dynamic:!0, normalize:function(a, b) {
    return /^\./.test(a) ? b(a) : a;
  }, load:w, cache:h, getL10nName:K});
});

//# sourceMappingURL=i18n.js.map
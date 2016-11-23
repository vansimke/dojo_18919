//>>built
define("dojo/_base/loader", "./kernel ../has require module ../json ./lang ./array".split(" "), function(e, w, h, J, x, m, y) {
  var r = function(a) {
    return a.replace(/\./g, "/");
  }, K = /\/\/>>built/, u = [], L = [], t = function(a, c, b) {
    u.push(b);
    y.forEach(a.split(","), function(a) {
      a = q(a, c.module);
      L.push(a);
      z(a);
    });
    A();
  }, A = function() {
    var a, c;
    for (c in B) {
      if (a = B[c], void 0 === a.noReqPluginCheck && (a.noReqPluginCheck = /loadInit\!/.test(c) || /require\!/.test(c) ? 1 : 0), !a.executed && !a.noReqPluginCheck && a.injected == M) {
        return;
      }
    }
    N(function() {
      var a = u;
      u = [];
      y.forEach(a, function(a) {
        a(1);
      });
    });
  }, O = function(a, c, b) {
    var f = /\(|\)/g, g = 1;
    for (f.lastIndex = c;(c = f.exec(a)) && (g = ")" == c[0] ? g - 1 : g + 1, 0 != g);) {
    }
    if (0 != g) {
      throw "unmatched paren around character " + f.lastIndex + " in: " + a;
    }
    return [e.trim(a.substring(b, f.lastIndex)) + ";\n", f.lastIndex];
  }, P = /(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, k = /(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg, v = /(^|\s)(require|define)\s*\(/m, D = function(a, c) {
    var b, f, g, C = [], d = [];
    b = [];
    for (c = c || a.replace(P, function(a) {
      k.lastIndex = v.lastIndex = 0;
      return k.test(a) || v.test(a) ? "" : a;
    });b = k.exec(c);) {
      f = k.lastIndex, g = f - b[0].length, f = O(c, f, g), "loadInit" == b[2] ? C.push(f[0]) : d.push(f[0]), k.lastIndex = f[1];
    }
    b = C.concat(d);
    return b.length || !v.test(c) ? [a.replace(/(^|\s)dojo\.loadInit\s*\(/g, "\n0 \x26\x26 dojo.loadInit("), b.join(""), b] : 0;
  }, d = h.initSyncLoader(t, A, function(a, c) {
    var b, f, g = [], d = [];
    if (K.test(c) || !(b = D(c))) {
      return 0;
    }
    f = a.mid + "-*loadInit";
    for (var e in q("dojo", a).result.scopeMap) {
      g.push(e), d.push('"' + e + '"');
    }
    return "// xdomain rewrite of " + a.mid + "\ndefine('" + f + "',{\n\tnames:" + x.stringify(g) + ",\n\tdef:function(" + g.join(",") + "){" + b[1] + "}});\n\ndefine(" + x.stringify(g.concat(["dojo/loadInit!" + f])) + ", function(" + g.join(",") + "){\n" + b[0] + "});";
  }), Q = d.sync, M = d.requested, R = d.arrived, E = d.nonmodule, S = d.executing, F = d.executed, l = d.syncExecStack, B = d.modules, G = d.execQ, q = d.getModule, z = d.injectModule, H = d.setArrived, T = d.signal, U = d.finishExec, V = d.execModule, I = d.getLegacyMode, N = d.guardCheckComplete, t = d.dojoRequirePlugin;
  e.provide = function(a) {
    var c = l[0], b = m.mixin(q(r(a), h.module), {executed:S, result:m.getObject(a, !0)});
    H(b);
    c && (c.provides || (c.provides = [])).push(function() {
      b.result = m.getObject(a);
      delete b.provides;
      b.executed !== F && U(b);
    });
    return b.result;
  };
  w.add("config-publishRequireResult", 1, 0, 0);
  e.require = function(a, c) {
    var b = function(a, c) {
      var b = q(r(a), h.module);
      if (l.length && l[0].finish) {
        l[0].finish.push(a);
      } else {
        if (b.executed) {
          return b.result;
        }
        c && (b.result = E);
        var e = I();
        z(b);
        e = I();
        b.executed !== F && b.injected === R && d.guardCheckComplete(function() {
          V(b);
        });
        if (b.executed) {
          return b.result;
        }
        e == Q ? b.cjs ? G.unshift(b) : l.length && (l[0].finish = [a]) : G.push(b);
      }
    }(a, c);
    w("config-publishRequireResult") && !m.exists(a) && void 0 !== b && m.setObject(a, b);
    return b;
  };
  e.loadInit = function(a) {
    a();
  };
  e.registerModulePath = function(a, c) {
    var b = {};
    b[a.replace(/\./g, "/")] = c;
    h({paths:b});
  };
  e.platformRequire = function(a) {
    a = (a.common || []).concat(a[e._name] || a["default"] || []);
    for (var c;a.length;) {
      m.isArray(c = a.shift()) ? e.require.apply(e, c) : e.require(c);
    }
  };
  e.requireIf = e.requireAfterIf = function(a, c, b) {
    a && e.require(c, b);
  };
  e.requireLocalization = function(a, c, b) {
    h(["../i18n"], function(e) {
      e.getLocalization(a, c, b);
    });
  };
  return {extractLegacyApiApplications:D, require:t, loadInit:function(a, c, b) {
    c([a], function(a) {
      c(a.names, function() {
        for (var d = "", m = [], n = 0;n < arguments.length;n++) {
          d += "var " + a.names[n] + "\x3d arguments[" + n + "]; ", m.push(arguments[n]);
        }
        eval(d);
        var l = c.module, h = [], k, d = {provide:function(a) {
          a = r(a);
          a = q(a, l);
          a !== l && H(a);
        }, require:function(a, b) {
          a = r(a);
          b && (q(a, l).result = E);
          h.push(a);
        }, requireLocalization:function(a, b, c) {
          k || (k = ["dojo/i18n"]);
          c = (c || e.locale).toLowerCase();
          a = r(a) + "/nls/" + (/root/i.test(c) ? "" : c + "/") + r(b);
          q(a, l).isXd && k.push("dojo/i18n!" + a);
        }, loadInit:function(a) {
          a();
        }}, n = {}, p;
        try {
          for (p in d) {
            n[p] = e[p], e[p] = d[p];
          }
          a.def.apply(null, m);
        } catch (W) {
          T("error", [{src:J.id, id:"failedDojoLoadInit"}, W]);
        } finally {
          for (p in d) {
            e[p] = n[p];
          }
        }
        k && (h = h.concat(k));
        h.length ? t(h.join(","), c, b) : b();
      });
    });
  }};
});

//# sourceMappingURL=loader.js.map
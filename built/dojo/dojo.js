//>>built
(function(a, n) {
  var f, p = function() {
  }, m = function(b) {
    for (var c in b) {
      return 0;
    }
    return 1;
  }, e = {}.toString, q = function(b) {
    return "[object Function]" == e.call(b);
  }, l = function(b) {
    return "[object String]" == e.call(b);
  }, k = function(b) {
    return "[object Array]" == e.call(b);
  }, b = function(b, c) {
    if (b) {
      for (var a = 0;a < b.length;) {
        c(b[a++]);
      }
    }
  }, h = function(b, c) {
    for (var a in c) {
      b[a] = c[a];
    }
    return b;
  }, d = function(b, c) {
    return h(Error(b), {src:"dojoLoader", info:c});
  }, c = 1, r = function() {
    return "_" + c++;
  }, t = function(b, c, a) {
    return Ma(b, c, a, 0, t);
  }, g = this, v = g.document, x = v && v.createElement("DiV"), u = t.has = function(b) {
    return q(y[b]) ? y[b] = y[b](g, v, x) : y[b];
  }, y = u.cache = n.hasCache;
  u.add = function(b, c, a, d) {
    (void 0 === y[b] || d) && (y[b] = c);
    return a && u(b);
  };
  u.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
  u("host-webworker") && (h(n.hasCache, {"host-browser":0, dom:0, "dojo-dom-ready-api":0, "dojo-sniff":0, "dojo-inject-api":1, "host-webworker":1, "dojo-guarantee-console":0}), n.loaderPatch = {injectUrl:function(b, c) {
    try {
      importScripts(b), c();
    } catch (a) {
      console.error(a);
    }
  }});
  for (var C in a.has) {
    u.add(C, a.has[C], 0, 1);
  }
  var w = 0, E = [], J = 0, U = p, Q = p, I;
  t.isXdUrl = p;
  t.initSyncLoader = function(b, c, a) {
    J || (J = b, U = c, Q = a);
    return {sync:"sync", requested:1, arrived:2, nonmodule:3, executing:4, executed:5, syncExecStack:E, modules:z, execQ:K, getModule:S, injectModule:na, setArrived:Y, signal:A, finishExec:da, execModule:ea, dojoRequirePlugin:J, getLegacyMode:function() {
      return w;
    }, guardCheckComplete:fa};
  };
  var R = location.protocol, N = location.host;
  t.isXdUrl = function(b) {
    return /^\./.test(b) ? !1 : /^\/\//.test(b) ? !0 : (b = b.match(/^([^\/\:]+\:)\/+([^\/]+)/)) && (b[1] != R || N && b[2] != N);
  };
  u.add("dojo-force-activex-xhr", !v.addEventListener && "file:" == window.location.protocol);
  u.add("native-xhr", "undefined" != typeof XMLHttpRequest);
  if (u("native-xhr") && !u("dojo-force-activex-xhr")) {
    I = function() {
      return new XMLHttpRequest;
    };
  } else {
    var B = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], H;
    for (f = 0;3 > f;) {
      try {
        H = B[f++];
        new ActiveXObject(H);
        break;
      } catch (jb) {
      }
    }
    I = function() {
      return new ActiveXObject(H);
    };
  }
  t.getXhr = I;
  u.add("dojo-gettext-api", 1);
  t.getText = function(b, c, a) {
    var h = I();
    h.open("GET", oa(b), !1);
    h.send(null);
    if (200 == h.status || !location.host && !h.status) {
      a && a(h.responseText, c);
    } else {
      throw d("xhrFailed", h.status);
    }
    return h.responseText;
  };
  var O = u("csp-restrictions") ? function() {
  } : new Function("return eval(arguments[0]);");
  t.eval = function(b, c) {
    return O(b + "\r\n//# sourceURL\x3d" + c);
  };
  var D = {}, A = t.signal = function(c, a) {
    var h = D[c];
    b(h && h.slice(0), function(b) {
      b.apply(null, k(a) ? a : [a]);
    });
  }, L = t.on = function(b, c) {
    var a = D[b] || (D[b] = []);
    a.push(c);
    return {remove:function() {
      for (var b = 0;b < a.length;b++) {
        if (a[b] === c) {
          a.splice(b, 1);
          break;
        }
      }
    }};
  }, Z = [], ga = {}, P = [], F = {}, X = t.map = {}, G = [], z = {}, Ca = "", V = {}, pa = {}, qa = {}, aa = 0, ra = function(b, c) {
    c = !1 !== c;
    var a, h, d, g;
    for (a in pa) {
      h = pa[a], (d = a.match(/^url\:(.+)/)) ? V["url:" + Na(d[1], b)] = h : "*now" == a ? g = h : "*noref" != a && (d = ha(a, b, !0), V[d.mid] = V["url:" + d.url] = h);
    }
    g && g(Da(b));
    c && (pa = {});
  }, Oa = function(b) {
    return b.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(b) {
      return "\\" + b;
    });
  }, Ea = function(b, c) {
    c.splice(0, c.length);
    for (var a in b) {
      c.push([a, b[a], new RegExp("^" + Oa(a) + "(/|$)"), a.length]);
    }
    c.sort(function(b, c) {
      return c[3] - b[3];
    });
    return c;
  }, ab = function(c, a) {
    b(c, function(b) {
      a.push([l(b[0]) ? new RegExp("^" + Oa(b[0]) + "$") : b[0], b[1]]);
    });
  }, Pa = function(b) {
    var c = b.name;
    c || (c = b, b = {name:c});
    b = h({main:"main"}, b);
    b.location = b.location ? b.location : c;
    b.packageMap && (X[c] = b.packageMap);
    b.main.indexOf("./") || (b.main = b.main.substring(2));
    F[c] = b;
  }, Qa = [], ia = function(c, a, d) {
    for (var g in c) {
      "waitSeconds" == g && (t.waitms = 1E3 * (c[g] || 0));
      "cacheBust" == g && (Ca = c[g] ? l(c[g]) ? c[g] : (new Date).getTime() + "" : "");
      if ("baseUrl" == g || "combo" == g) {
        t[g] = c[g];
      }
      if ("async" == g) {
        var r = c[g];
        t.legacyMode = w = l(r) && /sync|legacyAsync/.test(r) ? r : r ? !1 : "sync";
        t.async = !w;
      }
      c[g] !== y && (t.rawConfig[g] = c[g], "has" != g && u.add("config-" + g, c[g], 0, a));
    }
    t.baseUrl || (t.baseUrl = "./");
    /\/$/.test(t.baseUrl) || (t.baseUrl += "/");
    for (g in c.has) {
      u.add(g, c.has[g], 0, a);
    }
    b(c.packages, Pa);
    for (var k in c.packagePaths) {
      b(c.packagePaths[k], function(b) {
        var c = k + "/" + b;
        l(b) && (b = {name:b});
        b.location = c;
        Pa(b);
      });
    }
    Ea(h(X, c.map), G);
    b(G, function(b) {
      b[1] = Ea(b[1], []);
      "*" == b[0] && (G.star = b);
    });
    Ea(h(ga, c.paths), P);
    ab(c.aliases, Z);
    if (a) {
      Qa.push({config:c.config});
    } else {
      for (g in c.config) {
        a = S(g, d), a.config = h(a.config || {}, c.config[g]);
      }
    }
    c.cache && (ra(), pa = c.cache, ra(0, !!c.cache["*noref"]));
    A("config", [c, t.rawConfig]);
  };
  u("dojo-cdn");
  var sa = v.getElementsByTagName("script");
  f = 0;
  for (var T, ba, ta, ja;f < sa.length;) {
    if (T = sa[f++], (ta = T.getAttribute("src")) && (ja = ta.match(/(((.*)\/)|^)dojo\.js(\W|$)/i)) && (ba = ja[3] || "", n.baseUrl = n.baseUrl || ba, aa = T), ta = T.getAttribute("data-dojo-config") || T.getAttribute("djConfig")) {
      qa = t.eval("({ " + ta + " })", "data-dojo-config"), aa = T;
    }
  }
  t.rawConfig = {};
  ia(n, 1);
  u("dojo-cdn") && ((F.dojo.location = ba) && (ba += "/"), F.dijit.location = ba + "../dijit/", F.dojox.location = ba + "../dojox/");
  ia(a, 1);
  ia(qa, 1);
  var ka = function(c) {
    fa(function() {
      b(c.deps, na);
    });
  }, Ma = function(b, c, a, g, u) {
    var e;
    if (l(b)) {
      if ((e = S(b, g, !0)) && e.executed) {
        return e.result;
      }
      throw d("undefinedModule", b);
    }
    k(b) || (ia(b, 0, g), b = c, c = a);
    if (k(b)) {
      if (b.length) {
        a = "require*" + r();
        for (var f, q = [], m = 0;m < b.length;) {
          f = b[m++], q.push(S(f, g));
        }
        e = h(ua("", a, 0, ""), {injected:2, deps:q, def:c || p, require:g ? g.require : t, gc:1});
        z[e.mid] = e;
        ka(e);
        var v = la && "sync" != w;
        fa(function() {
          ea(e, v);
        });
        e.executed || K.push(e);
        ca();
      } else {
        c && c();
      }
    }
    return u;
  }, Da = function(b) {
    if (!b) {
      return t;
    }
    var c = b.require;
    c || (c = function(a, h, d) {
      return Ma(a, h, d, b, c);
    }, b.require = h(c, t), c.module = b, c.toUrl = function(c) {
      return Na(c, b);
    }, c.toAbsMid = function(c) {
      return Fa(c, b);
    }, c.syncLoadNls = function(c) {
      c = ha(c, b);
      var a = z[c.mid];
      if (!a || !a.executed) {
        if (W = V[c.mid] || V["url:" + c.url]) {
          va(W), a = z[c.mid];
        }
      }
      return a && a.executed && a.result;
    });
    return c;
  }, K = [], wa = [], M = {}, bb = function(b) {
    b.injected = 1;
    M[b.mid] = 1;
    b.url && (M[b.url] = b.pack || 1);
    Ra();
  }, Y = function(b) {
    b.injected = 2;
    delete M[b.mid];
    b.url && delete M[b.url];
    m(M) && (xa(), "xd" == w && (w = "sync"));
  }, cb = t.idle = function() {
    return !wa.length && m(M) && !K.length && !la;
  }, ya = function(b, c) {
    if (c) {
      for (var a = 0;a < c.length;a++) {
        if (c[a][2].test(b)) {
          return c[a];
        }
      }
    }
    return 0;
  }, Sa = function(b) {
    var c = [], a, h;
    for (b = b.replace(/\\/g, "/").split("/");b.length;) {
      a = b.shift(), ".." == a && c.length && ".." != h ? (c.pop(), h = c[c.length - 1]) : "." != a && c.push(h = a);
    }
    return c.join("/");
  }, ua = function(b, c, a, h) {
    var d = t.isXdUrl(h);
    return {pid:b, mid:c, pack:a, url:h, executed:0, def:0, isXd:d, isAmd:!!(d || F[b] && F[b].isAmd)};
  }, Ta = function(c, a, h, g, t, r, e, k, l, f) {
    var m, p, v, J;
    J = /^\./.test(c);
    if (/(^\/)|(\:)|(\.js$)/.test(c) || J && !a) {
      return ua(0, c, 0, c);
    }
    c = Sa(J ? a.mid + "/../" + c : c);
    if (/^\./.test(c)) {
      throw d("irrationalPath", c);
    }
    f || J || !r.star || (v = ya(c, r.star[1]));
    !v && a && (v = (v = ya(a.mid, r)) && ya(c, v[1]));
    v && (c = v[1] + c.substring(v[3]));
    a = (ja = c.match(/^([^\/]+)(\/(.+))?$/)) ? ja[1] : "";
    (m = h[a]) ? c = a + "/" + (p = ja[3] || m.main) : a = "";
    var y = 0;
    b(k, function(b) {
      var a = c.match(b[0]);
      a && 0 < a.length && (y = q(b[1]) ? c.replace(b[0], b[1]) : b[1]);
    });
    if (y) {
      return Ta(y, 0, h, g, t, r, e, k, l);
    }
    if (h = g[c]) {
      return l ? ua(h.pid, h.mid, h.pack, h.url) : g[c];
    }
    g = (v = ya(c, e)) ? v[1] + c.substring(v[3]) : a ? m.location + "/" + p : u("config-tlmSiblingOfDojo") ? "../" + c : c;
    /(^\/)|(\:)/.test(g) || (g = t + g);
    return ua(a, c, m, Sa(g + ".js"));
  }, ha = function(b, c, a) {
    return Ta(b, c, F, z, t.baseUrl, G, P, Z, void 0, a);
  }, Ua = function(b, c, a) {
    return b.normalize ? b.normalize(c, function(b) {
      return Fa(b, a);
    }) : Fa(c, a);
  }, Va = 0, S = function(b, c, a) {
    var h, d;
    (h = b.match(/^(.+?)\!(.*)$/)) ? (d = S(h[1], c, a), "sync" != w || d.executed || (na(d), 2 !== d.injected || d.executed || fa(function() {
      ea(d);
    }), d.executed ? za(d) : K.unshift(d)), 5 !== d.executed || d.load || za(d), d.load ? (h = Ua(d, h[2], c), b = d.mid + "!" + (d.dynamic ? ++Va + "!" : "") + h) : (h = h[2], b = d.mid + "!" + ++Va + "!waitingForPlugin"), b = {plugin:d, mid:b, req:Da(c), prid:h}) : b = ha(b, c);
    return z[b.mid] || !a && (z[b.mid] = b);
  }, Fa = t.toAbsMid = function(b, c) {
    return ha(b, c).mid;
  }, Na = t.toUrl = function(b, c) {
    var a = ha(b + "/x", c), h = a.url;
    return oa(0 === a.pid ? b : h.substring(0, h.length - 5));
  }, Wa = {injected:2, executed:5, def:3, result:3}, Ga = function(b) {
    return z[b] = h({mid:b}, Wa);
  }, db = Ga("require"), eb = Ga("exports"), fb = Ga("module"), Aa = {}, Ha = 0, za = function(b) {
    var c = b.result;
    b.dynamic = c.dynamic;
    b.normalize = c.normalize;
    b.load = c.load;
    return b;
  }, gb = function(c) {
    var a = {};
    b(c.loadQ, function(b) {
      var d = Ua(c, b.prid, b.req.module), g = c.dynamic ? b.mid.replace(/waitingForPlugin$/, d) : c.mid + "!" + d, d = h(h({}, b), {mid:g, prid:d, injected:0});
      z[g] && z[g].injected || Xa(z[g] = d);
      a[b.mid] = z[g];
      Y(b);
      delete z[b.mid];
    });
    c.loadQ = 0;
    var d = function(b) {
      for (var c = b.deps || [], d = 0;d < c.length;d++) {
        (b = a[c[d].mid]) && (c[d] = b);
      }
    }, g;
    for (g in z) {
      d(z[g]);
    }
    b(K, d);
  }, da = function(c) {
    t.trace("loader-finish-exec", [c.mid]);
    c.executed = 5;
    c.defOrder = Ha++;
    b(c.provides, function(b) {
      b();
    });
    c.loadQ && (za(c), gb(c));
    for (f = 0;f < K.length;) {
      K[f] === c ? K.splice(f, 1) : f++;
    }
    /^require\*/.test(c.mid) && delete z[c.mid];
  }, hb = [], ea = function(b, c) {
    if (4 === b.executed) {
      return t.trace("loader-circular-dependency", [hb.concat(b.mid).join("-\x3e")]), !b.def || c ? Aa : b.cjs && b.cjs.exports;
    }
    if (!b.executed) {
      if (!b.def) {
        return Aa;
      }
      var a = b.mid, h = b.deps || [], g, r = [], e = 0;
      for (b.executed = 4;g = h[e++];) {
        g = g === db ? Da(b) : g === eb ? b.cjs.exports : g === fb ? b.cjs : ea(g, c);
        if (g === Aa) {
          return b.executed = 0, t.trace("loader-exec-module", ["abort", a]), Aa;
        }
        r.push(g);
      }
      t.trace("loader-run-factory", [b.mid]);
      var a = b.def, k;
      E.unshift(b);
      if (u("config-dojo-loader-catches")) {
        try {
          k = q(a) ? a.apply(null, r) : a;
        } catch (l) {
          A("error", b.result = d("factoryThrew", [b, l]));
        }
      } else {
        k = q(a) ? a.apply(null, r) : a;
      }
      b.result = void 0 === k && b.cjs ? b.cjs.exports : k;
      E.shift(b);
      da(b);
    }
    return b.result;
  }, la = 0, fa = function(b) {
    try {
      la++, b();
    } catch (c) {
      throw c;
    } finally {
      la--;
    }
    cb() && A("idle", []);
  }, ca = function() {
    la || fa(function() {
      U();
      for (var b, c, a = 0;a < K.length;) {
        b = Ha, c = K[a], ea(c), b != Ha ? (U(), a = 0) : a++;
      }
    });
  };
  void 0 === u("dojo-loader-eval-hint-url") && u.add("dojo-loader-eval-hint-url", 1);
  var oa = "function" == typeof a.fixupUrl ? a.fixupUrl : function(b) {
    b += "";
    return b + (Ca ? (/\?/.test(b) ? "\x26" : "?") + Ca : "");
  }, Xa = function(b) {
    var c = b.plugin;
    5 !== c.executed || c.load || za(c);
    var a = function(c) {
      b.result = c;
      Y(b);
      da(b);
      ca();
    };
    c.load ? c.load(b.prid, b.req, a) : c.loadQ ? c.loadQ.push(b) : (c.loadQ = [b], K.unshift(c), na(c));
  }, W = 0, ma = 0, Ia = 0, va = function(b, c) {
    u("config-stripStrict") && (b = b.replace(/(["'])use strict\1/g, ""));
    Ia = 1;
    if (u("config-dojo-loader-catches")) {
      try {
        b === W ? W.call(null) : t.eval(b, u("dojo-loader-eval-hint-url") ? c.url : c.mid);
      } catch (a) {
        A("error", d("evalModuleThrew", c));
      }
    } else {
      b === W ? W.call(null) : t.eval(b, u("dojo-loader-eval-hint-url") ? c.url : c.mid);
    }
    Ia = 0;
  }, na = function(c) {
    var a = c.mid, g = c.url;
    if (!(c.executed || c.injected || M[a] || c.url && (c.pack && M[c.url] === c.pack || 1 == M[c.url]))) {
      if (bb(c), c.plugin) {
        Xa(c);
      } else {
        var r = function() {
          Ya(c);
          if (2 !== c.injected) {
            if (u("dojo-enforceDefine")) {
              A("error", d("noDefine", c));
              return;
            }
            Y(c);
            h(c, Wa);
            t.trace("loader-define-nonmodule", [c.url]);
          }
          w ? !E.length && ca() : ca();
        };
        if (W = V[a] || V["url:" + c.url]) {
          t.trace("loader-inject", ["cache", c.mid, g]), va(W, c), r();
        } else {
          if (w) {
            if (c.isXd) {
              "sync" == w && (w = "xd");
            } else {
              if (!c.isAmd || "sync" == w) {
                var e = function(d) {
                  if ("sync" == w) {
                    E.unshift(c);
                    va(d, c);
                    E.shift();
                    Ya(c);
                    c.cjs || (Y(c), da(c));
                    if (c.finish) {
                      d = a + "*finish";
                      var h = c.finish;
                      delete c.finish;
                      Ja(d, ["dojo", ("dojo/require!" + h.join(",")).replace(/\./g, "/")], function(c) {
                        b(h, function(b) {
                          c.require(b);
                        });
                      });
                      K.unshift(S(d));
                    }
                    r();
                  } else {
                    (d = Q(c, d)) ? (va(d, c), r()) : (ma = c, t.injectUrl(oa(g), r, c), ma = 0);
                  }
                };
                t.trace("loader-inject", ["xhr", c.mid, g, "sync" != w]);
                if (u("config-dojo-loader-catches")) {
                  try {
                    t.getText(g, "sync" != w, e);
                  } catch (k) {
                    A("error", d("xhrInjectFailed", [c, k]));
                  }
                } else {
                  t.getText(g, "sync" != w, e);
                }
                return;
              }
            }
          }
          t.trace("loader-inject", ["script", c.mid, g]);
          ma = c;
          t.injectUrl(oa(g), r, c);
          ma = 0;
        }
      }
    }
  }, Ka = function(b, c, a) {
    t.trace("loader-define-module", [b.mid, c]);
    var g = b.mid;
    if (2 === b.injected) {
      return A("error", d("multipleDefine", b)), b;
    }
    h(b, {deps:c, def:a, cjs:{id:b.mid, uri:b.url, exports:b.result = {}, setExports:function(c) {
      b.cjs.exports = c;
    }, config:function() {
      return b.config;
    }}});
    for (var r = 0;c[r];r++) {
      c[r] = S(c[r], b);
    }
    w && !M[g] && (ka(b), K.push(b), ca());
    Y(b);
    q(a) || c.length || (b.result = a, da(b));
    return b;
  }, Ya = function(c, a) {
    for (var d = [], h, g;wa.length;) {
      g = wa.shift(), a && (g[0] = a.shift()), h = g[0] && S(g[0]) || c, d.push([h, g[1], g[2]]);
    }
    ra(c);
    b(d, function(b) {
      ka(Ka.apply(null, b));
    });
  }, Ba = 0, xa = p, Ra = p, xa = function() {
    Ba && clearTimeout(Ba);
    Ba = 0;
  }, Ra = function() {
    xa();
    t.waitms && (Ba = g.setTimeout(function() {
      xa();
      A("error", d("timeout", M));
    }, t.waitms));
  };
  u.add("ie-event-behavior", v.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
  var La = function(b, c, a, d) {
    if (u("ie-event-behavior")) {
      return b.attachEvent(a, d), function() {
        b.detachEvent(a, d);
      };
    }
    b.addEventListener(c, d, !1);
    return function() {
      b.removeEventListener(c, d, !1);
    };
  }, ib = La(window, "load", "onload", function() {
    t.pageLoaded = 1;
    try {
      "complete" != v.readyState && (v.readyState = "complete");
    } catch (b) {
    }
    ib();
  }), sa = v.getElementsByTagName("script");
  for (f = 0;!aa;) {
    /^dojo/.test((T = sa[f++]) && T.type) || (aa = T);
  }
  t.injectUrl = function(b, c, a) {
    a = a.node = v.createElement("script");
    var h = La(a, "load", "onreadystatechange", function(b) {
      b = b || window.event;
      var a = b.target || b.srcElement;
      if ("load" === b.type || /complete|loaded/.test(a.readyState)) {
        h(), g(), c && c();
      }
    }), g = La(a, "error", "onerror", function(c) {
      h();
      g();
      A("error", d("scriptError", [b, c]));
    });
    a.type = "text/javascript";
    a.charset = "utf-8";
    a.src = b;
    aa.parentNode.insertBefore(a, aa);
    return a;
  };
  t.log = function() {
    try {
      for (var b = 0;b < arguments.length;b++) {
      }
    } catch (c) {
    }
  };
  t.trace = p;
  var Ja = function(b, c, a) {
    var h = arguments.length, g = ["require", "exports", "module"], r = [0, b, c];
    1 == h ? r = [0, q(b) ? g : [], b] : 2 == h && l(b) ? r = [b, q(c) ? g : [], c] : 3 == h && (r = [b, c, a]);
    t.trace("loader-define", r.slice(0, 2));
    if ((h = r[0] && S(r[0])) && !M[h.mid]) {
      ka(Ka(h, r[1], r[2]));
    } else {
      if (!u("ie-event-behavior") || Ia) {
        wa.push(r);
      } else {
        h = h || ma;
        if (!h) {
          for (b in M) {
            if ((g = z[b]) && g.node && "interactive" === g.node.readyState) {
              h = g;
              break;
            }
          }
        }
        h ? (ra(h), ka(Ka(h, r[1], r[2]))) : A("error", d("ieDefineFailed", r[0]));
        ca();
      }
    }
  };
  Ja.amd = {vendor:"dojotoolkit.org"};
  h(h(t, n.loaderPatch), a.loaderPatch);
  L("error", function(b) {
    try {
      if (console.error(b), b instanceof Error) {
        for (var c in b) {
        }
      }
    } catch (a) {
    }
  });
  h(t, {uid:r, cache:V, packs:F});
  if (g.define) {
    A("error", d("defineAlreadyDefined", 0));
  } else {
    g.define = Ja;
    g.require = t;
    b(Qa, function(b) {
      ia(b);
    });
    var Za = qa.deps || a.deps || n.deps, $a = qa.callback || a.callback || n.callback;
    t.boot = Za || $a ? [Za || [], $a] : 0;
  }
})(this.dojoConfig || this.djConfig || this.require || {}, {async:0, hasCache:{"config-selectorEngine":"acme", "config-tlmSiblingOfDojo":1, "dojo-built":1, "dojo-loader":1, dom:1, "host-browser":1}, packages:[{location:".", name:"dojo"}, {location:"../dijit", name:"dijit"}]});
require({cache:{"dojo/main":function() {
  define("./_base/kernel ./has require ./sniff ./_base/lang ./_base/array ./_base/config ./ready ./_base/declare ./_base/connect ./_base/Deferred ./_base/json ./_base/Color ./has!dojo-firebug?./_firebug/firebug ./_base/browser ./_base/loader".split(" "), function(a, n, f, p, m, e, q, l) {
    q.isDebug && f(["./_firebug/firebug"]);
    var k = q.require;
    k && (k = e.map(m.isArray(k) ? k : [k], function(b) {
      return b.replace(/\./g, "/");
    }), a.isAsync ? f(k) : l(1, function() {
      f(k);
    }));
    return a;
  });
}, "dojo/_base/kernel":function() {
  define(["../has", "./config", "require", "module"], function(a, n, f, p) {
    var m, e;
    m = function() {
      return this;
    }();
    var q = {}, l = {}, k = {config:n, global:m, dijit:q, dojox:l}, q = {dojo:["dojo", k], dijit:["dijit", q], dojox:["dojox", l]};
    p = f.map && f.map[p.id.match(/[^\/]+/)[0]];
    for (e in p) {
      q[e] ? q[e][0] = p[e] : q[e] = [p[e], {}];
    }
    for (e in q) {
      p = q[e], p[1]._scopeName = p[0], n.noGlobals || (m[p[0]] = p[1]);
    }
    k.scopeMap = q;
    k.baseUrl = k.config.baseUrl = f.baseUrl;
    k.isAsync = f.async;
    k.locale = n.locale;
    m = "$Rev$".match(/[0-9a-f]{7,}/);
    k.version = {major:1, minor:12, patch:0, flag:"-pre", revision:m ? m[0] : NaN, toString:function() {
      var b = k.version;
      return b.major + "." + b.minor + "." + b.patch + b.flag + " (" + b.revision + ")";
    }};
    a("csp-restrictions") || Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(k);
    k.exit = function() {
    };
    a("host-webworker");
    a.add("console-as-object", function() {
      return Function.prototype.bind && console && "object" === typeof console.log;
    });
    "undefined" != typeof console || (console = {});
    p = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
    var b;
    for (m = 0;b = p[m++];) {
      console[b] ? a("console-as-object") && (console[b] = Function.prototype.bind.call(console[b], console)) : function() {
        var a = b + "";
        console[a] = "log" in console ? function() {
          var b = Array.prototype.slice.call(arguments);
          b.unshift(a + ":");
          console.log(b.join(" "));
        } : function() {
        };
        console[a]._fake = !0;
      }();
    }
    a.add("dojo-debug-messages", !!n.isDebug);
    k.deprecated = k.experimental = function() {
    };
    a("dojo-debug-messages") && (k.deprecated = function(b, a, c) {
      b = "DEPRECATED: " + b;
      a && (b += " " + a);
      c && (b += " -- will be removed in version: " + c);
      console.warn(b);
    }, k.experimental = function(b, a) {
      var c = "EXPERIMENTAL: " + b + " -- APIs subject to change without notice.";
      a && (c += " " + a);
      console.warn(c);
    });
    if (n.modulePaths) {
      k.deprecated("dojo.modulePaths", "use paths configuration");
      a = {};
      for (e in n.modulePaths) {
        a[e.replace(/\./g, "/")] = n.modulePaths[e];
      }
      f({paths:a});
    }
    k.moduleUrl = function(b, a) {
      k.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
      var c = null;
      b && (c = f.toUrl(b.replace(/\./g, "/") + (a ? "/" + a : "") + "/*.*").replace(/\/\*\.\*/, "") + (a ? "" : "/"));
      return c;
    };
    k._hasResource = {};
    return k;
  });
}, "dojo/has":function() {
  define(["require", "module"], function(a, n) {
    var f = a.has || function() {
    };
    f.add("dom-addeventlistener", !!document.addEventListener);
    f.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints);
    f.add("touch-events", "ontouchstart" in document);
    f.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window);
    f.add("MSPointer", window.navigator.msPointerEnabled);
    f.add("device-width", screen.availWidth || innerWidth);
    var p = document.createElement("form");
    f.add("dom-attributes-explicit", 0 == p.attributes.length);
    f.add("dom-attributes-specified-flag", 0 < p.attributes.length && 40 > p.attributes.length);
    f.clearElement = function(a) {
      a.innerHTML = "";
      return a;
    };
    f.normalize = function(a, e) {
      var q = a.match(/[\?:]|[^:\?]*/g), l = 0, k = function(b) {
        var a = q[l++];
        if (":" == a) {
          return 0;
        }
        if ("?" == q[l++]) {
          if (!b && f(a)) {
            return k();
          }
          k(!0);
          return k(b);
        }
        return a || 0;
      };
      return (a = k()) && e(a);
    };
    f.load = function(a, e, f) {
      a ? e([a], f) : f();
    };
    return f;
  });
}, "dojo/_base/config":function() {
  define(["../has", "require"], function(a, n) {
    var f = {}, p = n.rawConfig, m;
    for (m in p) {
      f[m] = p[m];
    }
    !f.locale && "undefined" != typeof navigator && (p = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage) && (f.locale = p.toLowerCase());
    return f;
  });
}, "dojo/sniff":function() {
  define(["./has"], function(a) {
    var n = navigator, f = n.userAgent, n = n.appVersion, p = parseFloat(n);
    a.add("air", 0 <= f.indexOf("AdobeAIR"));
    a.add("wp", parseFloat(f.split("Windows Phone")[1]) || void 0);
    a.add("msapp", parseFloat(f.split("MSAppHost/")[1]) || void 0);
    a.add("khtml", 0 <= n.indexOf("Konqueror") ? p : void 0);
    a.add("edge", parseFloat(f.split("Edge/")[1]) || void 0);
    a.add("opr", parseFloat(f.split("OPR/")[1]) || void 0);
    a.add("webkit", !a("wp") && !a("edge") && parseFloat(f.split("WebKit/")[1]) || void 0);
    a.add("chrome", !a("edge") && !a("opr") && parseFloat(f.split("Chrome/")[1]) || void 0);
    a.add("android", !a("wp") && parseFloat(f.split("Android ")[1]) || void 0);
    a.add("safari", !(0 <= n.indexOf("Safari")) || a("wp") || a("chrome") || a("android") || a("edge") || a("opr") ? void 0 : parseFloat(n.split("Version/")[1]));
    a.add("mac", 0 <= n.indexOf("Macintosh"));
    a.add("quirks", "BackCompat" == document.compatMode);
    if (!a("wp") && f.match(/(iPhone|iPod|iPad)/)) {
      var m = RegExp.$1.replace(/P/, "p"), e = f.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", e = parseFloat(e.replace(/_/, ".").replace(/_/g, ""));
      a.add(m, e);
      a.add("ios", e);
    }
    a.add("bb", (0 <= f.indexOf("BlackBerry") || 0 <= f.indexOf("BB10")) && parseFloat(f.split("Version/")[1]) || void 0);
    a.add("trident", parseFloat(n.split("Trident/")[1]) || void 0);
    a.add("svg", "undefined" !== typeof SVGAngle);
    a("webkit") || (0 <= f.indexOf("Opera") && a.add("opera", 9.8 <= p ? parseFloat(f.split("Version/")[1]) || p : p), !(0 <= f.indexOf("Gecko")) || a("wp") || a("khtml") || a("trident") || a("edge") || a.add("mozilla", p), a("mozilla") && a.add("ff", parseFloat(f.split("Firefox/")[1] || f.split("Minefield/")[1]) || void 0), document.all && !a("opera") && (f = parseFloat(n.split("MSIE ")[1]) || void 0, (n = document.documentMode) && 5 != n && Math.floor(f) != n && (f = n), a.add("ie", f)), a.add("wii", 
    "undefined" != typeof opera && opera.wiiremote));
    return a;
  });
}, "dojo/_base/lang":function() {
  define(["./kernel", "../has", "../sniff"], function(a, n) {
    n.add("bug-for-in-skips-shadowed", function() {
      for (var b in{toString:1}) {
        return 0;
      }
      return 1;
    });
    var f = n("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], p = f.length, m = function(b, h, d) {
      d || (d = b[0] && a.scopeMap[b[0]] ? a.scopeMap[b.shift()][1] : a.global);
      try {
        for (var c = 0;c < b.length;c++) {
          var r = b[c];
          if (!(r in d)) {
            if (h) {
              d[r] = {};
            } else {
              return;
            }
          }
          d = d[r];
        }
        return d;
      } catch (t) {
      }
    }, e = Object.prototype.toString, q = function(b, a, d) {
      return (d || []).concat(Array.prototype.slice.call(b, a || 0));
    }, l = /\{([^\}]+)\}/g, k = {_extraNames:f, _mixin:function(b, a, d) {
      var c, r, t, g = {};
      for (c in a) {
        r = a[c], c in b && (b[c] === r || c in g && g[c] === r) || (b[c] = d ? d(r) : r);
      }
      if (n("bug-for-in-skips-shadowed") && a) {
        for (t = 0;t < p;++t) {
          c = f[t], r = a[c], c in b && (b[c] === r || c in g && g[c] === r) || (b[c] = d ? d(r) : r);
        }
      }
      return b;
    }, mixin:function(b, a) {
      b || (b = {});
      for (var d = 1, c = arguments.length;d < c;d++) {
        k._mixin(b, arguments[d]);
      }
      return b;
    }, setObject:function(b, a, d) {
      var c = b.split(".");
      b = c.pop();
      return (d = m(c, !0, d)) && b ? d[b] = a : void 0;
    }, getObject:function(b, a, d) {
      return b ? m(b.split("."), a, d) : d;
    }, exists:function(b, a) {
      return void 0 !== k.getObject(b, !1, a);
    }, isString:function(b) {
      return "string" == typeof b || b instanceof String;
    }, isArray:Array.isArray || function(b) {
      return "[object Array]" == e.call(b);
    }, isFunction:function(b) {
      return "[object Function]" === e.call(b);
    }, isObject:function(b) {
      return void 0 !== b && (null === b || "object" == typeof b || k.isArray(b) || k.isFunction(b));
    }, isArrayLike:function(b) {
      return !!b && !k.isString(b) && !k.isFunction(b) && !(b.tagName && "form" == b.tagName.toLowerCase()) && (k.isArray(b) || isFinite(b.length));
    }, isAlien:function(b) {
      return b && !k.isFunction(b) && /\{\s*\[native code\]\s*\}/.test(String(b));
    }, extend:function(b, a) {
      for (var d = 1, c = arguments.length;d < c;d++) {
        k._mixin(b.prototype, arguments[d]);
      }
      return b;
    }, _hitchArgs:function(b, h) {
      var d = k._toArray(arguments, 2), c = k.isString(h);
      return function() {
        var r = k._toArray(arguments), t = c ? (b || a.global)[h] : h;
        return t && t.apply(b || this, d.concat(r));
      };
    }, hitch:function(b, h) {
      if (2 < arguments.length) {
        return k._hitchArgs.apply(a, arguments);
      }
      h || (h = b, b = null);
      if (k.isString(h)) {
        b = b || a.global;
        if (!b[h]) {
          throw ['lang.hitch: scope["', h, '"] is null (scope\x3d"', b, '")'].join("");
        }
        return function() {
          return b[h].apply(b, arguments || []);
        };
      }
      return b ? function() {
        return h.apply(b, arguments || []);
      } : h;
    }, delegate:function() {
      function b() {
      }
      return function(a, d) {
        b.prototype = a;
        var c = new b;
        b.prototype = null;
        d && k._mixin(c, d);
        return c;
      };
    }(), _toArray:n("ie") ? function() {
      function b(b, a, c) {
        c = c || [];
        for (a = a || 0;a < b.length;a++) {
          c.push(b[a]);
        }
        return c;
      }
      return function(a) {
        return (a.item ? b : q).apply(this, arguments);
      };
    }() : q, partial:function(b) {
      return k.hitch.apply(a, [null].concat(k._toArray(arguments)));
    }, clone:function(b) {
      if (!b || "object" != typeof b || k.isFunction(b)) {
        return b;
      }
      if (b.nodeType && "cloneNode" in b) {
        return b.cloneNode(!0);
      }
      if (b instanceof Date) {
        return new Date(b.getTime());
      }
      if (b instanceof RegExp) {
        return new RegExp(b);
      }
      var a, d, c;
      if (k.isArray(b)) {
        for (a = [], d = 0, c = b.length;d < c;++d) {
          d in b && (a[d] = k.clone(b[d]));
        }
      } else {
        a = b.constructor ? new b.constructor : {};
      }
      return k._mixin(a, b, k.clone);
    }, trim:String.prototype.trim ? function(b) {
      return b.trim();
    } : function(b) {
      return b.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }, replace:function(b, a, d) {
      return b.replace(d || l, k.isFunction(a) ? a : function(b, d) {
        return k.getObject(d, !1, a);
      });
    }};
    k.mixin(a, k);
    return k;
  });
}, "dojo/_base/array":function() {
  define(["./kernel", "../has", "./lang"], function(a, n, f) {
    function p(b) {
      return q[b] = new Function("item", "index", "array", b);
    }
    function m(b) {
      var a = !b;
      return function(d, c, r) {
        var t = 0, g = d && d.length || 0, e;
        g && "string" == typeof d && (d = d.split(""));
        "string" == typeof c && (c = q[c] || p(c));
        if (r) {
          for (;t < g;++t) {
            if (e = !c.call(r, d[t], t, d), b ^ e) {
              return !e;
            }
          }
        } else {
          for (;t < g;++t) {
            if (e = !c(d[t], t, d), b ^ e) {
              return !e;
            }
          }
        }
        return a;
      };
    }
    function e(b) {
      var a = 1, d = 0, c = 0;
      b || (a = d = c = -1);
      return function(r, t, g, e) {
        if (e && 0 < a) {
          return k.lastIndexOf(r, t, g);
        }
        e = r && r.length || 0;
        var f = b ? e + c : d;
        g === l ? g = b ? d : e + c : 0 > g ? (g = e + g, 0 > g && (g = d)) : g = g >= e ? e + c : g;
        for (e && "string" == typeof r && (r = r.split(""));g != f;g += a) {
          if (r[g] == t) {
            return g;
          }
        }
        return -1;
      };
    }
    var q = {}, l, k = {every:m(!1), some:m(!0), indexOf:e(!0), lastIndexOf:e(!1), forEach:function(b, a, d) {
      var c = 0, r = b && b.length || 0;
      r && "string" == typeof b && (b = b.split(""));
      "string" == typeof a && (a = q[a] || p(a));
      if (d) {
        for (;c < r;++c) {
          a.call(d, b[c], c, b);
        }
      } else {
        for (;c < r;++c) {
          a(b[c], c, b);
        }
      }
    }, map:function(b, a, d, c) {
      var r = 0, e = b && b.length || 0;
      c = new (c || Array)(e);
      e && "string" == typeof b && (b = b.split(""));
      "string" == typeof a && (a = q[a] || p(a));
      if (d) {
        for (;r < e;++r) {
          c[r] = a.call(d, b[r], r, b);
        }
      } else {
        for (;r < e;++r) {
          c[r] = a(b[r], r, b);
        }
      }
      return c;
    }, filter:function(b, a, d) {
      var c = 0, r = b && b.length || 0, e = [], g;
      r && "string" == typeof b && (b = b.split(""));
      "string" == typeof a && (a = q[a] || p(a));
      if (d) {
        for (;c < r;++c) {
          g = b[c], a.call(d, g, c, b) && e.push(g);
        }
      } else {
        for (;c < r;++c) {
          g = b[c], a(g, c, b) && e.push(g);
        }
      }
      return e;
    }, clearCache:function() {
      q = {};
    }};
    f.mixin(a, k);
    return k;
  });
}, "dojo/ready":function() {
  define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(a, n, f, p, m) {
    var e = 0, q = [], l = 0;
    n = function() {
      e = 1;
      a._postLoad = a.config.afterOnLoad = !0;
      k();
    };
    var k = function() {
      if (!l) {
        for (l = 1;e && (!p || 0 == p._Q.length) && (f.idle ? f.idle() : 1) && q.length;) {
          var b = q.shift();
          try {
            b();
          } catch (c) {
            if (c.info = c.message, f.signal) {
              f.signal("error", c);
            } else {
              throw c;
            }
          }
        }
        l = 0;
      }
    };
    f.on && f.on("idle", k);
    p && (p._onQEmpty = k);
    var b = a.ready = a.addOnLoad = function(b, c, h) {
      var e = m._toArray(arguments);
      "number" != typeof b ? (h = c, c = b, b = 1E3) : e.shift();
      h = h ? m.hitch.apply(a, e) : function() {
        c();
      };
      h.priority = b;
      for (e = 0;e < q.length && b >= q[e].priority;e++) {
      }
      q.splice(e, 0, h);
      k();
    }, h = a.config.addOnLoad;
    if (h) {
      b[m.isArray(h) ? "apply" : "call"](a, h);
    }
    a.config.parseOnLoad && !a.isAsync && b(99, function() {
      a.parser || (a.deprecated("Add explicit require(['dojo/parser']);", "", "2.0"), f(["dojo/parser"]));
    });
    p ? p(n) : n();
    return b;
  });
}, "dojo/domReady":function() {
  define(["./has"], function(a) {
    function n(b) {
      k.push(b);
      l && f();
    }
    function f() {
      if (!b) {
        for (b = !0;k.length;) {
          try {
            k.shift()(m);
          } catch (c) {
            console.error(c, "in domReady callback", c.stack);
          }
        }
        b = !1;
        n._onQEmpty();
      }
    }
    var p = function() {
      return this;
    }(), m = document, e = {loaded:1, complete:1}, q = "string" != typeof m.readyState, l = !!e[m.readyState], k = [], b;
    n.load = function(b, c, a) {
      n(a);
    };
    n._Q = k;
    n._onQEmpty = function() {
    };
    q && (m.readyState = "loading");
    if (!l) {
      var h = [], d = function(b) {
        b = b || p.event;
        l || "readystatechange" == b.type && !e[m.readyState] || (q && (m.readyState = "complete"), l = 1, f());
      }, c = function(b, c) {
        b.addEventListener(c, d, !1);
        k.push(function() {
          b.removeEventListener(c, d, !1);
        });
      };
      if (!a("dom-addeventlistener")) {
        var c = function(b, c) {
          c = "on" + c;
          b.attachEvent(c, d);
          k.push(function() {
            b.detachEvent(c, d);
          });
        }, r = m.createElement("div");
        try {
          r.doScroll && null === p.frameElement && h.push(function() {
            try {
              return r.doScroll("left"), 1;
            } catch (b) {
            }
          });
        } catch (g) {
        }
      }
      c(m, "DOMContentLoaded");
      c(p, "load");
      "onreadystatechange" in m ? c(m, "readystatechange") : q || h.push(function() {
        return e[m.readyState];
      });
      if (h.length) {
        var t = function() {
          if (!l) {
            for (var b = h.length;b--;) {
              if (h[b]()) {
                d("poller");
                return;
              }
            }
            setTimeout(t, 30);
          }
        };
        t();
      }
    }
    return n;
  });
}, "dojo/_base/declare":function() {
  define(["./kernel", "../has", "./lang"], function(a, n, f) {
    function p(b, c) {
      throw Error("declare" + (c ? " " + c : "") + ": " + b);
    }
    function m(b, c, a) {
      var d, g, h, e, r, k, u, t = this._inherited = this._inherited || {};
      "string" == typeof b && (d = b, b = c, c = a);
      a = 0;
      e = b.callee;
      (d = d || e.nom) || p("can't deduce a name to call inherited()", this.declaredClass);
      r = this.constructor._meta;
      h = r.bases;
      u = t.p;
      if ("constructor" != d) {
        if (t.c !== e && (u = 0, k = h[0], r = k._meta, r.hidden[d] !== e)) {
          (g = r.chains) && "string" == typeof g[d] && p("calling chained method with inherited: " + d, this.declaredClass);
          do {
            if (r = k._meta, g = k.prototype, r && (g[d] === e && g.hasOwnProperty(d) || r.hidden[d] === e)) {
              break;
            }
          } while (k = h[++u]);
          u = k ? u : -1;
        }
        if (k = h[++u]) {
          if (g = k.prototype, k._meta && g.hasOwnProperty(d)) {
            a = g[d];
          } else {
            e = y[d];
            do {
              if (g = k.prototype, (a = g[d]) && (k._meta ? g.hasOwnProperty(d) : a !== e)) {
                break;
              }
            } while (k = h[++u]);
          }
        }
        a = k && a || y[d];
      } else {
        if (t.c !== e && (u = 0, (r = h[0]._meta) && r.ctor !== e)) {
          for ((g = r.chains) && "manual" === g.constructor || p("calling chained constructor with inherited", this.declaredClass);(k = h[++u]) && (!(r = k._meta) || r.ctor !== e);) {
          }
          u = k ? u : -1;
        }
        for (;(k = h[++u]) && !(a = (r = k._meta) ? r.ctor : k);) {
        }
        a = k && a;
      }
      t.c = a;
      t.p = u;
      if (a) {
        return !0 === c ? a : a.apply(this, c || b);
      }
    }
    function e(b, c) {
      return "string" == typeof b ? this.__inherited(b, c, !0) : this.__inherited(b, !0);
    }
    function q(b, c, a) {
      var d = this.getInherited(b, c);
      if (d) {
        return d.apply(this, a || c || b);
      }
    }
    function l(b) {
      for (var c = this.constructor._meta.bases, a = 0, d = c.length;a < d;++a) {
        if (c[a] === b) {
          return !0;
        }
      }
      return this instanceof b;
    }
    function k(b, c) {
      for (var a in c) {
        "constructor" != a && c.hasOwnProperty(a) && (b[a] = c[a]);
      }
      if (n("bug-for-in-skips-shadowed")) {
        for (var d = f._extraNames, g = d.length;g;) {
          a = d[--g], "constructor" != a && c.hasOwnProperty(a) && (b[a] = c[a]);
        }
      }
    }
    function b(b) {
      x.safeMixin(this.prototype, b);
      return this;
    }
    function h(b, c) {
      b instanceof Array || "function" == typeof b || (c = b, b = void 0);
      c = c || {};
      b = b || [];
      return x([this].concat(b), c);
    }
    function d(b, c) {
      return function() {
        var a = arguments, d = a, g = a[0], h, e;
        e = b.length;
        var r;
        if (!(this instanceof a.callee)) {
          return v(a);
        }
        if (c && (g && g.preamble || this.preamble)) {
          for (r = Array(b.length), r[0] = a, h = 0;;) {
            (g = a[0]) && (g = g.preamble) && (a = g.apply(this, a) || a);
            g = b[h].prototype;
            (g = g.hasOwnProperty("preamble") && g.preamble) && (a = g.apply(this, a) || a);
            if (++h == e) {
              break;
            }
            r[h] = a;
          }
        }
        for (h = e - 1;0 <= h;--h) {
          g = b[h], (g = (e = g._meta) ? e.ctor : g) && g.apply(this, r ? r[h] : a);
        }
        (g = this.postscript) && g.apply(this, d);
      };
    }
    function c(b, c) {
      return function() {
        var a = arguments, d = a, g = a[0];
        if (!(this instanceof a.callee)) {
          return v(a);
        }
        c && (g && (g = g.preamble) && (d = g.apply(this, d) || d), (g = this.preamble) && g.apply(this, d));
        b && b.apply(this, a);
        (g = this.postscript) && g.apply(this, a);
      };
    }
    function r(b) {
      return function() {
        var c = arguments, a = 0, d, g;
        if (!(this instanceof c.callee)) {
          return v(c);
        }
        for (;d = b[a];++a) {
          if (d = (g = d._meta) ? g.ctor : d) {
            d.apply(this, c);
            break;
          }
        }
        (d = this.postscript) && d.apply(this, c);
      };
    }
    function t(b, c, a) {
      return function() {
        var d, g, h = 0, e = 1;
        a && (h = c.length - 1, e = -1);
        for (;d = c[h];h += e) {
          g = d._meta, (d = (g ? g.hidden : d.prototype)[b]) && d.apply(this, arguments);
        }
      };
    }
    function g(b) {
      b = new w;
      w.prototype = null;
      return b;
    }
    function v(b) {
      var c = b.callee, a = g(c);
      c.apply(a, b);
      return a;
    }
    function x(a, q, v) {
      "string" != typeof a && (v = q, q = a, a = "");
      v = v || {};
      var n, w, B, H, O, D, A, L = 1, Z = q;
      if ("[object Array]" == C.call(q)) {
        L = a;
        w = [];
        B = [{cls:0, refs:[]}];
        H = {};
        D = 1;
        for (var ga = q.length, P = 0, F, X, G, z;P < ga;++P) {
          (F = q[P]) ? "[object Function]" != C.call(F) && p("mixin #" + P + " is not a callable constructor.", L) : p("mixin #" + P + " is unknown. Did you use dojo.require to pull it in?", L);
          X = F._meta ? F._meta.bases : [F];
          G = 0;
          for (F = X.length - 1;0 <= F;--F) {
            z = X[F].prototype, z.hasOwnProperty("declaredClass") || (z.declaredClass = "uniqName_" + E++), z = z.declaredClass, H.hasOwnProperty(z) || (H[z] = {count:0, refs:[], cls:X[F]}, ++D), z = H[z], G && G !== z && (z.refs.push(G), ++G.count), G = z;
          }
          ++G.count;
          B[0].refs.push(G);
        }
        for (;B.length;) {
          G = B.pop();
          w.push(G.cls);
          for (--D;n = G.refs, 1 == n.length;) {
            G = n[0];
            if (!G || --G.count) {
              G = 0;
              break;
            }
            w.push(G.cls);
            --D;
          }
          if (G) {
            for (P = 0, ga = n.length;P < ga;++P) {
              G = n[P], --G.count || B.push(G);
            }
          }
        }
        D && p("can't build consistent linearization", L);
        F = q[0];
        w[0] = F ? F._meta && F === w[w.length - F._meta.bases.length] ? F._meta.bases.length : 1 : 0;
        D = w;
        B = D[0];
        L = D.length - B;
        q = D[L];
      } else {
        D = [0], q ? "[object Function]" == C.call(q) ? (B = q._meta, D = D.concat(B ? B.bases : q)) : p("base class is not a callable constructor.", a) : null !== q && p("unknown base class. Did you use dojo.require to pull it in?", a);
      }
      if (q) {
        for (w = L - 1;;--w) {
          n = g(q);
          if (!w) {
            break;
          }
          B = D[w];
          (B._meta ? k : u)(n, B.prototype);
          H = new Function;
          H.superclass = q;
          H.prototype = n;
          q = n.constructor = H;
        }
      } else {
        n = {};
      }
      x.safeMixin(n, v);
      B = v.constructor;
      B !== y.constructor && (B.nom = "constructor", n.constructor = B);
      for (w = L - 1;w;--w) {
        (B = D[w]._meta) && B.chains && (A = u(A || {}, B.chains));
      }
      n["-chains-"] && (A = u(A || {}, n["-chains-"]));
      q && q.prototype && q.prototype["-chains-"] && (A = u(A || {}, q.prototype["-chains-"]));
      B = !A || !A.hasOwnProperty("constructor");
      D[0] = H = A && "manual" === A.constructor ? r(D) : 1 == D.length ? c(v.constructor, B) : d(D, B);
      H._meta = {bases:D, hidden:v, chains:A, parents:Z, ctor:v.constructor};
      H.superclass = q && q.prototype;
      H.extend = b;
      H.createSubclass = h;
      H.prototype = n;
      n.constructor = H;
      n.getInherited = e;
      n.isInstanceOf = l;
      n.inherited = J;
      n.__inherited = m;
      a && (n.declaredClass = a, f.setObject(a, H));
      if (A) {
        for (O in A) {
          n[O] && "string" == typeof A[O] && "constructor" != O && (B = n[O] = t(O, D, "after" === A[O]), B.nom = O);
        }
      }
      return H;
    }
    var u = f.mixin, y = Object.prototype, C = y.toString, w, E = 0;
    w = n("csp-restrictions") ? function() {
    } : new Function;
    var J = a.config.isDebug ? q : m;
    a.safeMixin = x.safeMixin = function(b, c) {
      var a, d;
      for (a in c) {
        d = c[a], d === y[a] && a in y || "constructor" == a || ("[object Function]" == C.call(d) && (d.nom = a), b[a] = d);
      }
      if (n("bug-for-in-skips-shadowed") && c) {
        for (var g = f._extraNames, h = g.length;h;) {
          a = g[--h], d = c[a], d === y[a] && a in y || "constructor" == a || ("[object Function]" == C.call(d) && (d.nom = a), b[a] = d);
        }
      }
      return b;
    };
    return a.declare = x;
  });
}, "dojo/_base/connect":function() {
  define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function(a, n, f, p, m, e, q, l) {
    function k(b, c, d, h, k) {
      h = l.hitch(d, h);
      if (!b || !b.addEventListener && !b.attachEvent) {
        return p.after(b || a.global, c, h, !0);
      }
      "string" == typeof c && "on" == c.substring(0, 2) && (c = c.substring(2));
      b || (b = a.global);
      if (!k) {
        switch(c) {
          case "keypress":
            c = r;
            break;
          case "mouseenter":
            c = e.enter;
            break;
          case "mouseleave":
            c = e.leave;
        }
      }
      return n(b, c, h, k);
    }
    function b(b) {
      b.keyChar = b.charCode ? String.fromCharCode(b.charCode) : "";
      b.charOrCode = b.keyChar || b.keyCode;
    }
    q.add("events-keypress-typed", function() {
      var b = {charCode:0};
      try {
        b = document.createEvent("KeyboardEvent"), (b.initKeyboardEvent || b.initKeyEvent).call(b, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3);
      } catch (c) {
      }
      return 0 == b.charCode && !q("opera");
    });
    var h = {106:42, 111:47, 186:59, 187:43, 188:44, 189:45, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 229:113}, d = q("mac") ? "metaKey" : "ctrlKey", c = function(c, a) {
      var d = l.mixin({}, c, a);
      b(d);
      d.preventDefault = function() {
        c.preventDefault();
      };
      d.stopPropagation = function() {
        c.stopPropagation();
      };
      return d;
    }, r;
    r = q("events-keypress-typed") ? function(b, a) {
      var d = n(b, "keydown", function(b) {
        var d = b.keyCode, g = 13 != d && 32 != d && (27 != d || !q("ie")) && (48 > d || 90 < d) && (96 > d || 111 < d) && (186 > d || 192 < d) && (219 > d || 222 < d) && 229 != d;
        if (g || b.ctrlKey) {
          g = g ? 0 : d;
          if (b.ctrlKey) {
            if (3 == d || 13 == d) {
              return a.call(b.currentTarget, b);
            }
            g = 95 < g && 106 > g ? g - 48 : !b.shiftKey && 65 <= g && 90 >= g ? g + 32 : h[g] || g;
          }
          d = c(b, {type:"keypress", faux:!0, charCode:g});
          a.call(b.currentTarget, d);
          if (q("ie")) {
            try {
              b.keyCode = d.keyCode;
            } catch (e) {
            }
          }
        }
      }), e = n(b, "keypress", function(b) {
        var d = b.charCode;
        b = c(b, {charCode:32 <= d ? d : 0, faux:!0});
        return a.call(this, b);
      });
      return {remove:function() {
        d.remove();
        e.remove();
      }};
    } : q("opera") ? function(b, a) {
      return n(b, "keypress", function(b) {
        var d = b.which;
        3 == d && (d = 99);
        d = 32 > d && !b.shiftKey ? 0 : d;
        b.ctrlKey && !b.shiftKey && 65 <= d && 90 >= d && (d += 32);
        return a.call(this, c(b, {charCode:d}));
      });
    } : function(c, a) {
      return n(c, "keypress", function(c) {
        b(c);
        return a.call(this, c);
      });
    };
    var t = {_keypress:r, connect:function(b, c, a, d, h) {
      var e = arguments, r = [], t = 0;
      r.push("string" == typeof e[0] ? null : e[t++], e[t++]);
      var q = e[t + 1];
      r.push("string" == typeof q || "function" == typeof q ? e[t++] : null, e[t++]);
      for (q = e.length;t < q;t++) {
        r.push(e[t]);
      }
      return k.apply(this, r);
    }, disconnect:function(b) {
      b && b.remove();
    }, subscribe:function(b, c, a) {
      return f.subscribe(b, l.hitch(c, a));
    }, publish:function(b, c) {
      return f.publish.apply(f, [b].concat(c));
    }, connectPublisher:function(b, c, a) {
      var d = function() {
        t.publish(b, arguments);
      };
      return a ? t.connect(c, a, d) : t.connect(c, d);
    }, isCopyKey:function(b) {
      return b[d];
    }};
    t.unsubscribe = t.disconnect;
    l.mixin(a, t);
    return t;
  });
}, "dojo/on":function() {
  define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(a, n, f) {
    function p(b, c, a, g, h) {
      if (g = c.match(/(.*):(.*)/)) {
        return c = g[2], g = g[1], l.selector(g, c).call(h, b, a);
      }
      f("touch") && (k.test(c) && (a = E(a)), f("event-orientationchange") || "orientationchange" != c || (c = "resize", b = window, a = E(a)));
      r && (a = r(a));
      if (b.addEventListener) {
        var e = c in d, t = e ? d[c] : c;
        b.addEventListener(t, a, e);
        return {remove:function() {
          b.removeEventListener(t, a, e);
        }};
      }
      if (x && b.attachEvent) {
        return x(b, "on" + c, a);
      }
      throw Error("Target must be an event emitter");
    }
    function m() {
      this.cancelable = !1;
      this.defaultPrevented = !0;
    }
    function e() {
      this.bubbles = !1;
    }
    var q = window.ScriptEngineMajorVersion;
    f.add("jscript", q && q() + ScriptEngineMinorVersion() / 10);
    f.add("event-orientationchange", f("touch") && !f("android"));
    f.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
    f.add("event-focusin", function(b, c, a) {
      return "onfocusin" in a;
    });
    f("touch") && f.add("touch-can-modify-event-delegate", function() {
      var b = function() {
      };
      b.prototype = document.createEvent("MouseEvents");
      try {
        var c = new b;
        c.target = null;
        return null === c.target;
      } catch (a) {
        return !1;
      }
    });
    var l = function(b, c, a, d) {
      return "function" != typeof b.on || "function" == typeof c || b.nodeType ? l.parse(b, c, a, p, d, this) : b.on(c, a);
    };
    l.pausable = function(b, c, a, d) {
      var g;
      b = l(b, c, function() {
        if (!g) {
          return a.apply(this, arguments);
        }
      }, d);
      b.pause = function() {
        g = !0;
      };
      b.resume = function() {
        g = !1;
      };
      return b;
    };
    l.once = function(b, c, a, d) {
      var g = l(b, c, function() {
        g.remove();
        return a.apply(this, arguments);
      });
      return g;
    };
    l.parse = function(b, c, a, d, g, h) {
      var e;
      if (c.call) {
        return c.call(h, b, a);
      }
      c instanceof Array ? e = c : -1 < c.indexOf(",") && (e = c.split(/\s*,\s*/));
      if (e) {
        var r = [];
        c = 0;
        for (var k;k = e[c++];) {
          r.push(l.parse(b, k, a, d, g, h));
        }
        r.remove = function() {
          for (var b = 0;b < r.length;b++) {
            r[b].remove();
          }
        };
        return r;
      }
      return d(b, c, a, g, h);
    };
    var k = /^touch/;
    l.matches = function(b, c, a, d, g) {
      g = g && "function" == typeof g.matches ? g : n.query;
      d = !1 !== d;
      1 != b.nodeType && (b = b.parentNode);
      for (;!g.matches(b, c, a);) {
        if (b == a || !1 === d || !(b = b.parentNode) || 1 != b.nodeType) {
          return !1;
        }
      }
      return b;
    };
    l.selector = function(b, c, a) {
      return function(d, g) {
        function h(c) {
          return l.matches(c, b, d, a, e);
        }
        var e = "function" == typeof b ? {matches:b} : this, r = c.bubble;
        return r ? l(d, r(h), g) : l(d, c, function(b) {
          var c = h(b.target);
          if (c) {
            return b.selectorTarget = c, g.call(c, b);
          }
        });
      };
    };
    var b = [].slice, h = l.emit = function(c, a, d) {
      var g = b.call(arguments, 2), h = "on" + a;
      if ("parentNode" in c) {
        var r = g[0] = {}, k;
        for (k in d) {
          r[k] = d[k];
        }
        r.preventDefault = m;
        r.stopPropagation = e;
        r.target = c;
        r.type = a;
        d = r;
      }
      do {
        c[h] && c[h].apply(c, g);
      } while (d && d.bubbles && (c = c.parentNode));
      return d && d.cancelable && d;
    }, d = f("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
    if (!f("event-stopimmediatepropagation")) {
      var c = function() {
        this.modified = this.immediatelyStopped = !0;
      }, r = function(b) {
        return function(a) {
          if (!a.immediatelyStopped) {
            return a.stopImmediatePropagation = c, b.apply(this, arguments);
          }
        };
      }
    }
    if (f("dom-addeventlistener")) {
      l.emit = function(b, c, a) {
        if (b.dispatchEvent && document.createEvent) {
          var d = (b.ownerDocument || document).createEvent("HTMLEvents");
          d.initEvent(c, !!a.bubbles, !!a.cancelable);
          for (var g in a) {
            g in d || (d[g] = a[g]);
          }
          return b.dispatchEvent(d) && d;
        }
        return h.apply(l, arguments);
      };
    } else {
      l._fixEvent = function(b, c) {
        b || (b = (c && (c.ownerDocument || c.document || c).parentWindow || window).event);
        if (!b) {
          return b;
        }
        try {
          t && b.type == t.type && b.srcElement == t.target && (b = t);
        } catch (a) {
        }
        if (!b.target) {
          switch(b.target = b.srcElement, b.currentTarget = c || b.srcElement, "mouseover" == b.type && (b.relatedTarget = b.fromElement), "mouseout" == b.type && (b.relatedTarget = b.toElement), b.stopPropagation || (b.stopPropagation = u, b.preventDefault = y), b.type) {
            case "keypress":
              var d = "charCode" in b ? b.charCode : b.keyCode;
              10 == d ? (d = 0, b.keyCode = 13) : 13 == d || 27 == d ? d = 0 : 3 == d && (d = 99);
              b.charCode = d;
              d = b;
              d.keyChar = d.charCode ? String.fromCharCode(d.charCode) : "";
              d.charOrCode = d.keyChar || d.keyCode;
          }
        }
        return b;
      };
      var t, g = function(b) {
        this.handle = b;
      };
      g.prototype.remove = function() {
        delete _dojoIEListeners_[this.handle];
      };
      var v = function(b) {
        return function(c) {
          c = l._fixEvent(c, this);
          var a = b.call(this, c);
          c.modified && (t || setTimeout(function() {
            t = null;
          }), t = c);
          return a;
        };
      }, x = function(b, c, d) {
        d = v(d);
        if (((b.ownerDocument ? b.ownerDocument.parentWindow : b.parentWindow || b.window || window) != top || 5.8 > f("jscript")) && !f("config-_allow_leaks")) {
          "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
          var h = b[c];
          if (!h || !h.listeners) {
            var e = h, h = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
            h.listeners = [];
            b[c] = h;
            h.global = this;
            e && h.listeners.push(_dojoIEListeners_.push(e) - 1);
          }
          h.listeners.push(b = h.global._dojoIEListeners_.push(d) - 1);
          return new g(b);
        }
        return a.after(b, c, d, !0);
      }, u = function() {
        this.cancelBubble = !0;
      }, y = l._preventDefault = function() {
        this.bubbledKeyCode = this.keyCode;
        if (this.ctrlKey) {
          try {
            this.keyCode = 0;
          } catch (b) {
          }
        }
        this.defaultPrevented = !0;
        this.returnValue = !1;
        this.modified = !0;
      };
    }
    if (f("touch")) {
      var C = function() {
      }, w = window.orientation, E = function(b) {
        return function(c) {
          var a = c.corrected;
          if (!a) {
            var d = c.type;
            try {
              delete c.type;
            } catch (g) {
            }
            if (c.type) {
              if (f("touch-can-modify-event-delegate")) {
                C.prototype = c, a = new C;
              } else {
                var a = {}, h;
                for (h in c) {
                  a[h] = c[h];
                }
              }
              a.preventDefault = function() {
                c.preventDefault();
              };
              a.stopPropagation = function() {
                c.stopPropagation();
              };
            } else {
              a = c, a.type = d;
            }
            c.corrected = a;
            if ("resize" == d) {
              if (w == window.orientation) {
                return null;
              }
              w = window.orientation;
              a.type = "orientationchange";
              return b.call(this, a);
            }
            "rotation" in a || (a.rotation = 0, a.scale = 1);
            var d = a.changedTouches[0], e;
            for (e in d) {
              delete a[e], a[e] = d[e];
            }
          }
          return b.call(this, a);
        };
      }
    }
    return l;
  });
}, "dojo/topic":function() {
  define(["./Evented"], function(a) {
    var n = new a;
    return {publish:function(a, p) {
      return n.emit.apply(n, arguments);
    }, subscribe:function(a, p) {
      return n.on.apply(n, arguments);
    }};
  });
}, "dojo/Evented":function() {
  define(["./aspect", "./on"], function(a, n) {
    function f() {
    }
    var p = a.after;
    f.prototype = {on:function(a, e) {
      return n.parse(this, a, e, function(a, l) {
        return p(a, "on" + l, e, !0);
      });
    }, emit:function(a, e) {
      var q = [this];
      q.push.apply(q, arguments);
      return n.emit.apply(n, q);
    }};
    return f;
  });
}, "dojo/aspect":function() {
  define([], function() {
    function a(a, e, k, b) {
      var h = a[e], d = "around" == e, c;
      if (d) {
        var r = k(function() {
          return h.advice(this, arguments);
        });
        c = {remove:function() {
          r && (r = a = k = null);
        }, advice:function(b, c) {
          return r ? r.apply(b, c) : h.advice(b, c);
        }};
      } else {
        c = {remove:function() {
          if (c.advice) {
            var b = c.previous, d = c.next;
            d || b ? (b ? b.next = d : a[e] = d, d && (d.previous = b)) : delete a[e];
            a = k = c.advice = null;
          }
        }, id:a.nextId++, advice:k, receiveArguments:b};
      }
      if (h && !d) {
        if ("after" == e) {
          for (;h.next && (h = h.next);) {
          }
          h.next = c;
          c.previous = h;
        } else {
          "before" == e && (a[e] = c, c.next = h, h.previous = c);
        }
      } else {
        a[e] = c;
      }
      return c;
    }
    function n(e) {
      return function(l, k, b, h) {
        var d = l[k], c;
        d && d.target == l || (l[k] = c = function() {
          for (var b = c.nextId, a = arguments, d = c.before;d;) {
            d.advice && (a = d.advice.apply(this, a) || a), d = d.next;
          }
          if (c.around) {
            var h = c.around.advice(this, a)
          }
          for (d = c.after;d && d.id < b;) {
            if (d.advice) {
              if (d.receiveArguments) {
                var e = d.advice.apply(this, a), h = e === f ? h : e
              } else {
                h = d.advice.call(this, h, a);
              }
            }
            d = d.next;
          }
          return h;
        }, d && (c.around = {advice:function(b, c) {
          return d.apply(b, c);
        }}), c.target = l, c.nextId = c.nextId || 0);
        l = a(c || d, e, b, h);
        b = null;
        return l;
      };
    }
    var f, p = n("after"), m = n("before"), e = n("around");
    return {before:m, around:e, after:p};
  });
}, "dojo/_base/event":function() {
  define(["./kernel", "../on", "../has", "../dom-geometry"], function(a, n, f, p) {
    if (n._fixEvent) {
      var m = n._fixEvent;
      n._fixEvent = function(a, e) {
        (a = m(a, e)) && p.normalizeEvent(a);
        return a;
      };
    }
    var e = {fix:function(a, e) {
      return n._fixEvent ? n._fixEvent(a, e) : a;
    }, stop:function(a) {
      f("dom-addeventlistener") || a && a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : (a = a || window.event, a.cancelBubble = !0, n._preventDefault.call(a));
    }};
    a.fixEvent = e.fix;
    a.stopEvent = e.stop;
    return e;
  });
}, "dojo/dom-geometry":function() {
  define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(a, n, f, p) {
    function m(b, a, d, c, e, k) {
      k = k || "px";
      b = b.style;
      isNaN(a) || (b.left = a + k);
      isNaN(d) || (b.top = d + k);
      0 <= c && (b.width = c + k);
      0 <= e && (b.height = e + k);
    }
    function e(b) {
      return "button" == b.tagName.toLowerCase() || "input" == b.tagName.toLowerCase() && "button" == (b.getAttribute("type") || "").toLowerCase();
    }
    function q(b) {
      return "border-box" == l.boxModel || "table" == b.tagName.toLowerCase() || e(b);
    }
    var l = {boxModel:"content-box"};
    a("ie") && (l.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
    l.getPadExtents = function(b, a) {
      b = f.byId(b);
      var d = a || p.getComputedStyle(b), c = p.toPixelValue, e = c(b, d.paddingLeft), k = c(b, d.paddingTop), g = c(b, d.paddingRight), d = c(b, d.paddingBottom);
      return {l:e, t:k, r:g, b:d, w:e + g, h:k + d};
    };
    l.getBorderExtents = function(b, a) {
      b = f.byId(b);
      var d = p.toPixelValue, c = a || p.getComputedStyle(b), e = "none" != c.borderLeftStyle ? d(b, c.borderLeftWidth) : 0, k = "none" != c.borderTopStyle ? d(b, c.borderTopWidth) : 0, g = "none" != c.borderRightStyle ? d(b, c.borderRightWidth) : 0, d = "none" != c.borderBottomStyle ? d(b, c.borderBottomWidth) : 0;
      return {l:e, t:k, r:g, b:d, w:e + g, h:k + d};
    };
    l.getPadBorderExtents = function(b, a) {
      b = f.byId(b);
      var d = a || p.getComputedStyle(b), c = l.getPadExtents(b, d), d = l.getBorderExtents(b, d);
      return {l:c.l + d.l, t:c.t + d.t, r:c.r + d.r, b:c.b + d.b, w:c.w + d.w, h:c.h + d.h};
    };
    l.getMarginExtents = function(b, a) {
      b = f.byId(b);
      var d = a || p.getComputedStyle(b), c = p.toPixelValue, e = c(b, d.marginLeft), k = c(b, d.marginTop), g = c(b, d.marginRight), d = c(b, d.marginBottom);
      return {l:e, t:k, r:g, b:d, w:e + g, h:k + d};
    };
    l.getMarginBox = function(b, h) {
      b = f.byId(b);
      var d = h || p.getComputedStyle(b), c = l.getMarginExtents(b, d), e = b.offsetLeft - c.l, k = b.offsetTop - c.t, g = b.parentNode, q = p.toPixelValue;
      if (a("mozilla")) {
        var m = parseFloat(d.left), d = parseFloat(d.top);
        isNaN(m) || isNaN(d) ? g && g.style && (g = p.getComputedStyle(g), "visible" != g.overflow && (e += "none" != g.borderLeftStyle ? q(b, g.borderLeftWidth) : 0, k += "none" != g.borderTopStyle ? q(b, g.borderTopWidth) : 0)) : (e = m, k = d);
      } else {
        (a("opera") || 8 == a("ie") && !a("quirks")) && g && (g = p.getComputedStyle(g), e -= "none" != g.borderLeftStyle ? q(b, g.borderLeftWidth) : 0, k -= "none" != g.borderTopStyle ? q(b, g.borderTopWidth) : 0);
      }
      return {l:e, t:k, w:b.offsetWidth + c.w, h:b.offsetHeight + c.h};
    };
    l.getContentBox = function(b, h) {
      b = f.byId(b);
      var d = h || p.getComputedStyle(b), c = b.clientWidth, e = l.getPadExtents(b, d), k = l.getBorderExtents(b, d);
      c ? (d = b.clientHeight, k.w = k.h = 0) : (c = b.offsetWidth, d = b.offsetHeight);
      a("opera") && (e.l += k.l, e.t += k.t);
      return {l:e.l, t:e.t, w:c - e.w - k.w, h:d - e.h - k.h};
    };
    l.setContentSize = function(b, a, d) {
      b = f.byId(b);
      var c = a.w;
      a = a.h;
      q(b) && (d = l.getPadBorderExtents(b, d), 0 <= c && (c += d.w), 0 <= a && (a += d.h));
      m(b, NaN, NaN, c, a);
    };
    var k = {l:0, t:0, w:0, h:0};
    l.setMarginBox = function(b, h, d) {
      b = f.byId(b);
      var c = d || p.getComputedStyle(b);
      d = h.w;
      var r = h.h, t = q(b) ? k : l.getPadBorderExtents(b, c), c = l.getMarginExtents(b, c);
      if (a("webkit") && e(b)) {
        var g = b.style;
        0 <= d && !g.width && (g.width = "4px");
        0 <= r && !g.height && (g.height = "4px");
      }
      0 <= d && (d = Math.max(d - t.w - c.w, 0));
      0 <= r && (r = Math.max(r - t.h - c.h, 0));
      m(b, h.l, h.t, d, r);
    };
    l.isBodyLtr = function(b) {
      b = b || n.doc;
      return "ltr" == (n.body(b).dir || b.documentElement.dir || "ltr").toLowerCase();
    };
    l.docScroll = function(b) {
      b = b || n.doc;
      var e = n.doc.parentWindow || n.doc.defaultView;
      return "pageXOffset" in e ? {x:e.pageXOffset, y:e.pageYOffset} : (e = a("quirks") ? n.body(b) : b.documentElement) && {x:l.fixIeBiDiScrollLeft(e.scrollLeft || 0, b), y:e.scrollTop || 0};
    };
    l.getIeDocumentElementOffset = function(b) {
      return {x:0, y:0};
    };
    l.fixIeBiDiScrollLeft = function(b, e) {
      e = e || n.doc;
      var d = a("ie");
      if (d && !l.isBodyLtr(e)) {
        var c = a("quirks"), k = c ? n.body(e) : e.documentElement, f = n.global;
        6 == d && !c && f.frameElement && k.scrollHeight > k.clientHeight && (b += k.clientLeft);
        return 8 > d || c ? b + k.clientWidth - k.scrollWidth : -b;
      }
      return b;
    };
    l.position = function(b, e) {
      b = f.byId(b);
      var d = n.body(b.ownerDocument), c = b.getBoundingClientRect(), c = {x:c.left, y:c.top, w:c.right - c.left, h:c.bottom - c.top};
      9 > a("ie") && (c.x -= a("quirks") ? d.clientLeft + d.offsetLeft : 0, c.y -= a("quirks") ? d.clientTop + d.offsetTop : 0);
      e && (d = l.docScroll(b.ownerDocument), c.x += d.x, c.y += d.y);
      return c;
    };
    l.getMarginSize = function(b, a) {
      b = f.byId(b);
      var d = l.getMarginExtents(b, a || p.getComputedStyle(b)), c = b.getBoundingClientRect();
      return {w:c.right - c.left + d.w, h:c.bottom - c.top + d.h};
    };
    l.normalizeEvent = function(b) {
      "layerX" in b || (b.layerX = b.offsetX, b.layerY = b.offsetY);
      if (!("pageX" in b)) {
        var e = b.target, e = e && e.ownerDocument || document, d = a("quirks") ? e.body : e.documentElement;
        b.pageX = b.clientX + l.fixIeBiDiScrollLeft(d.scrollLeft || 0, e);
        b.pageY = b.clientY + (d.scrollTop || 0);
      }
    };
    return l;
  });
}, "dojo/_base/window":function() {
  define(["./kernel", "./lang", "../sniff"], function(a, n, f) {
    var p = {global:a.global, doc:a.global.document || null, body:function(f) {
      f = f || a.doc;
      return f.body || f.getElementsByTagName("body")[0];
    }, setContext:function(f, e) {
      a.global = p.global = f;
      a.doc = p.doc = e;
    }, withGlobal:function(f, e, q, l) {
      var k = a.global;
      try {
        return a.global = p.global = f, p.withDoc.call(null, f.document, e, q, l);
      } finally {
        a.global = p.global = k;
      }
    }, withDoc:function(m, e, q, l) {
      var k = p.doc, b = f("quirks"), h = f("ie"), d, c, r;
      try {
        return a.doc = p.doc = m, a.isQuirks = f.add("quirks", "BackCompat" == a.doc.compatMode, !0, !0), f("ie") && (r = m.parentWindow) && r.navigator && (d = parseFloat(r.navigator.appVersion.split("MSIE ")[1]) || void 0, (c = m.documentMode) && 5 != c && Math.floor(d) != c && (d = c), a.isIE = f.add("ie", d, !0, !0)), q && "string" == typeof e && (e = q[e]), e.apply(q, l || []);
      } finally {
        a.doc = p.doc = k, a.isQuirks = f.add("quirks", b, !0, !0), a.isIE = f.add("ie", h, !0, !0);
      }
    }};
    n.mixin(a, p);
    return p;
  });
}, "dojo/dom":function() {
  define(["./sniff", "./_base/window", "./_base/kernel"], function(a, n, f) {
    if (7 >= a("ie")) {
      try {
        document.execCommand("BackgroundImageCache", !1, !0);
      } catch (e) {
      }
    }
    var p = {};
    a("ie") ? p.byId = function(a, f) {
      if ("string" != typeof a) {
        return a;
      }
      var l = f || n.doc, k = a && l.getElementById(a);
      if (!k || k.attributes.id.value != a && k.id != a) {
        l = l.all[a];
        if (!l || l.nodeName) {
          l = [l];
        }
        for (var b = 0;k = l[b++];) {
          if (k.attributes && k.attributes.id && k.attributes.id.value == a || k.id == a) {
            return k;
          }
        }
      } else {
        return k;
      }
    } : p.byId = function(a, f) {
      return ("string" == typeof a ? (f || n.doc).getElementById(a) : a) || null;
    };
    f = f.global.document || null;
    a.add("dom-contains", !(!f || !f.contains));
    p.isDescendant = a("dom-contains") ? function(a, f) {
      return !(!(f = p.byId(f)) || !f.contains(p.byId(a)));
    } : function(a, f) {
      try {
        for (a = p.byId(a), f = p.byId(f);a;) {
          if (a == f) {
            return !0;
          }
          a = a.parentNode;
        }
      } catch (l) {
      }
      return !1;
    };
    a.add("css-user-select", function(a, f, l) {
      if (!l) {
        return !1;
      }
      a = l.style;
      f = ["Khtml", "O", "Moz", "Webkit"];
      l = f.length;
      var k = "userSelect";
      do {
        if ("undefined" !== typeof a[k]) {
          return k;
        }
      } while (l-- && (k = f[l] + "UserSelect"));
      return !1;
    });
    var m = a("css-user-select");
    p.setSelectable = m ? function(a, f) {
      p.byId(a).style[m] = f ? "" : "none";
    } : function(a, f) {
      a = p.byId(a);
      var l = a.getElementsByTagName("*"), k = l.length;
      if (f) {
        for (a.removeAttribute("unselectable");k--;) {
          l[k].removeAttribute("unselectable");
        }
      } else {
        for (a.setAttribute("unselectable", "on");k--;) {
          l[k].setAttribute("unselectable", "on");
        }
      }
    };
    return p;
  });
}, "dojo/dom-style":function() {
  define(["./sniff", "./dom"], function(a, n) {
    function f(a, d, k) {
      d = d.toLowerCase();
      if ("auto" == k) {
        if ("height" == d) {
          return a.offsetHeight;
        }
        if ("width" == d) {
          return a.offsetWidth;
        }
      }
      if ("fontweight" == d) {
        switch(k) {
          case 700:
            return "bold";
          default:
            return "normal";
        }
      }
      d in b || (b[d] = h.test(d));
      return b[d] ? e(a, k) : k;
    }
    var p, m = {};
    p = a("webkit") ? function(b) {
      var a;
      if (1 == b.nodeType) {
        var d = b.ownerDocument.defaultView;
        a = d.getComputedStyle(b, null);
        !a && b.style && (b.style.display = "", a = d.getComputedStyle(b, null));
      }
      return a || {};
    } : a("ie") && (9 > a("ie") || a("quirks")) ? function(b) {
      return 1 == b.nodeType && b.currentStyle ? b.currentStyle : {};
    } : function(b) {
      return 1 == b.nodeType ? b.ownerDocument.defaultView.getComputedStyle(b, null) : {};
    };
    m.getComputedStyle = p;
    var e;
    e = a("ie") ? function(b, a) {
      if (!a) {
        return 0;
      }
      if ("medium" == a) {
        return 4;
      }
      if (a.slice && "px" == a.slice(-2)) {
        return parseFloat(a);
      }
      var d = b.style, g = b.runtimeStyle, e = d.left, h = g.left;
      g.left = b.currentStyle.left;
      try {
        d.left = a, a = d.pixelLeft;
      } catch (k) {
        a = 0;
      }
      d.left = e;
      g.left = h;
      return a;
    } : function(b, a) {
      return parseFloat(a) || 0;
    };
    m.toPixelValue = e;
    var q = function(b, a) {
      try {
        return b.filters.item("DXImageTransform.Microsoft.Alpha");
      } catch (d) {
        return a ? {} : null;
      }
    }, l = 9 > a("ie") || 10 > a("ie") && a("quirks") ? function(b) {
      try {
        return q(b).Opacity / 100;
      } catch (a) {
        return 1;
      }
    } : function(b) {
      return p(b).opacity;
    }, k = 9 > a("ie") || 10 > a("ie") && a("quirks") ? function(b, a) {
      "" === a && (a = 1);
      var d = 100 * a;
      1 === a ? (b.style.zoom = "", q(b) && (b.style.filter = b.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (b.style.zoom = 1, q(b) ? q(b, 1).Opacity = d : b.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + d + ")", q(b, 1).Enabled = !0);
      if ("tr" == b.tagName.toLowerCase()) {
        for (d = b.firstChild;d;d = d.nextSibling) {
          "td" == d.tagName.toLowerCase() && k(d, a);
        }
      }
      return a;
    } : function(b, a) {
      return b.style.opacity = a;
    }, b = {left:!0, top:!0}, h = /margin|padding|width|height|max|min|offset/, d = {cssFloat:1, styleFloat:1, "float":1};
    m.get = function(b, a) {
      var e = n.byId(b), g = arguments.length;
      if (2 == g && "opacity" == a) {
        return l(e);
      }
      a = d[a] ? "cssFloat" in e.style ? "cssFloat" : "styleFloat" : a;
      var h = m.getComputedStyle(e);
      return 1 == g ? h : f(e, a, h[a] || e.style[a]);
    };
    m.set = function(b, a, e) {
      var g = n.byId(b), h = arguments.length, f = "opacity" == a;
      a = d[a] ? "cssFloat" in g.style ? "cssFloat" : "styleFloat" : a;
      if (3 == h) {
        return f ? k(g, e) : g.style[a] = e;
      }
      for (var u in a) {
        m.set(b, u, a[u]);
      }
      return m.getComputedStyle(g);
    };
    return m;
  });
}, "dojo/mouse":function() {
  define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(a, n, f, p, m) {
    function e(a, f) {
      var k = function(b, e) {
        return n(b, a, function(a) {
          if (f) {
            return f(a, e);
          }
          if (!p.isDescendant(a.relatedTarget, b)) {
            return e.call(this, a);
          }
        });
      };
      k.bubble = function(b) {
        return e(a, function(a, d) {
          var c = b(a.target), e = a.relatedTarget;
          if (c && c != (e && 1 == e.nodeType && b(e))) {
            return d.call(c, a);
          }
        });
      };
      return k;
    }
    f.add("dom-quirks", m.doc && "BackCompat" == m.doc.compatMode);
    f.add("events-mouseenter", m.doc && "onmouseenter" in m.doc.createElement("div"));
    f.add("events-mousewheel", m.doc && "onmousewheel" in m.doc);
    m = f("dom-quirks") && f("ie") || !f("dom-addeventlistener") ? {LEFT:1, MIDDLE:4, RIGHT:2, isButton:function(a, e) {
      return a.button & e;
    }, isLeft:function(a) {
      return a.button & 1;
    }, isMiddle:function(a) {
      return a.button & 4;
    }, isRight:function(a) {
      return a.button & 2;
    }} : {LEFT:0, MIDDLE:1, RIGHT:2, isButton:function(a, e) {
      return a.button == e;
    }, isLeft:function(a) {
      return 0 == a.button;
    }, isMiddle:function(a) {
      return 1 == a.button;
    }, isRight:function(a) {
      return 2 == a.button;
    }};
    a.mouseButtons = m;
    a = f("events-mousewheel") ? "mousewheel" : function(a, e) {
      return n(a, "DOMMouseScroll", function(a) {
        a.wheelDelta = -a.detail;
        e.call(this, a);
      });
    };
    return {_eventHandler:e, enter:e("mouseover"), leave:e("mouseout"), wheel:a, isLeft:m.isLeft, isMiddle:m.isMiddle, isRight:m.isRight};
  });
}, "dojo/_base/sniff":function() {
  define(["./kernel", "./lang", "../sniff"], function(a, n, f) {
    a._name = "browser";
    n.mixin(a, {isBrowser:!0, isFF:f("ff"), isIE:f("ie"), isKhtml:f("khtml"), isWebKit:f("webkit"), isMozilla:f("mozilla"), isMoz:f("mozilla"), isOpera:f("opera"), isSafari:f("safari"), isChrome:f("chrome"), isMac:f("mac"), isIos:f("ios"), isAndroid:f("android"), isWii:f("wii"), isQuirks:f("quirks"), isAir:f("air")});
    return f;
  });
}, "dojo/keys":function() {
  define(["./_base/kernel", "./sniff"], function(a, n) {
    return a.keys = {BACKSPACE:8, TAB:9, CLEAR:12, ENTER:13, SHIFT:16, CTRL:17, ALT:18, META:n("webkit") ? 91 : 224, PAUSE:19, CAPS_LOCK:20, ESCAPE:27, SPACE:32, PAGE_UP:33, PAGE_DOWN:34, END:35, HOME:36, LEFT_ARROW:37, UP_ARROW:38, RIGHT_ARROW:39, DOWN_ARROW:40, INSERT:45, DELETE:46, HELP:47, LEFT_WINDOW:91, RIGHT_WINDOW:92, SELECT:93, NUMPAD_0:96, NUMPAD_1:97, NUMPAD_2:98, NUMPAD_3:99, NUMPAD_4:100, NUMPAD_5:101, NUMPAD_6:102, NUMPAD_7:103, NUMPAD_8:104, NUMPAD_9:105, NUMPAD_MULTIPLY:106, NUMPAD_PLUS:107, 
    NUMPAD_ENTER:108, NUMPAD_MINUS:109, NUMPAD_PERIOD:110, NUMPAD_DIVIDE:111, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, F13:124, F14:125, F15:126, NUM_LOCK:144, SCROLL_LOCK:145, UP_DPAD:175, DOWN_DPAD:176, LEFT_DPAD:177, RIGHT_DPAD:178, copyKey:n("mac") && !n("air") ? n("safari") ? 91 : 224 : 17};
  });
}, "dojo/_base/Deferred":function() {
  define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(a, n, f, p, m, e, q) {
    var l = function() {
    }, k = Object.freeze || function() {
    }, b = a.Deferred = function(a) {
      function d(b) {
        if (t) {
          throw Error("This deferred has already been resolved");
        }
        r = b;
        t = !0;
        c();
      }
      function c() {
        for (var b;!b && y;) {
          var a = y;
          y = y.next;
          if (b = a.progress == l) {
            t = !1;
          }
          var c = x ? a.error : a.resolved;
          m("config-useDeferredInstrumentation") && x && n.instrumentRejected && n.instrumentRejected(r, !!c);
          if (c) {
            try {
              var d = c(r);
              d && "function" === typeof d.then ? d.then(e.hitch(a.deferred, "resolve"), e.hitch(a.deferred, "reject"), e.hitch(a.deferred, "progress")) : (c = b && void 0 === d, b && !c && (x = d instanceof Error), a.deferred[c && x ? "reject" : "resolve"](c ? r : d));
            } catch (g) {
              a.deferred.reject(g);
            }
          } else {
            x ? a.deferred.reject(r) : a.deferred.resolve(r);
          }
        }
      }
      var r, t, g, q, x, u, y, C = this.promise = new f;
      this.isResolved = C.isResolved = function() {
        return 0 == q;
      };
      this.isRejected = C.isRejected = function() {
        return 1 == q;
      };
      this.isFulfilled = C.isFulfilled = function() {
        return 0 <= q;
      };
      this.isCanceled = C.isCanceled = function() {
        return g;
      };
      this.resolve = this.callback = function(b) {
        this.fired = q = 0;
        this.results = [b, null];
        d(b);
      };
      this.reject = this.errback = function(b) {
        x = !0;
        this.fired = q = 1;
        m("config-useDeferredInstrumentation") && n.instrumentRejected && n.instrumentRejected(b, !!y);
        d(b);
        this.results = [null, b];
      };
      this.progress = function(b) {
        for (var a = y;a;) {
          var c = a.progress;
          c && c(b);
          a = a.next;
        }
      };
      this.addCallbacks = function(b, a) {
        this.then(b, a, l);
        return this;
      };
      C.then = this.then = function(a, d, e) {
        var g = e == l ? this : new b(C.cancel);
        a = {resolved:a, error:d, progress:e, deferred:g};
        y ? u = u.next = a : y = u = a;
        t && c();
        return g.promise;
      };
      var w = this;
      C.cancel = this.cancel = function() {
        if (!t) {
          var b = a && a(w);
          t || (b instanceof Error || (b = new p(b)), b.log = !1, w.reject(b));
        }
        g = !0;
      };
      k(C);
    };
    e.extend(b, {addCallback:function(b) {
      return this.addCallbacks(e.hitch.apply(a, arguments));
    }, addErrback:function(b) {
      return this.addCallbacks(null, e.hitch.apply(a, arguments));
    }, addBoth:function(b) {
      var d = e.hitch.apply(a, arguments);
      return this.addCallbacks(d, d);
    }, fired:-1});
    b.when = a.when = q;
    return b;
  });
}, "dojo/Deferred":function() {
  define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "./promise/instrumentation"], function(a, n, f, p, m) {
    var e = Object.freeze || function() {
    }, q = function(b, a, e, k, g) {
      2 === a && h.instrumentRejected && 0 === b.length && h.instrumentRejected(e, !1, k, g);
      for (g = 0;g < b.length;g++) {
        l(b[g], a, e, k);
      }
    }, l = function(a, c, e, f) {
      var g = a[c], l = a.deferred;
      if (g) {
        try {
          var m = g(e);
          if (0 === c) {
            "undefined" !== typeof m && b(l, c, m);
          } else {
            if (m && "function" === typeof m.then) {
              a.cancel = m.cancel;
              m.then(k(l, 1), k(l, 2), k(l, 0));
              return;
            }
            b(l, 1, m);
          }
        } catch (u) {
          b(l, 2, u);
        }
      } else {
        b(l, c, e);
      }
      2 === c && h.instrumentRejected && h.instrumentRejected(e, !!g, f, l.promise);
    }, k = function(a, c) {
      return function(e) {
        b(a, c, e);
      };
    }, b = function(b, a, e) {
      if (!b.isCanceled()) {
        switch(a) {
          case 0:
            b.progress(e);
            break;
          case 1:
            b.resolve(e);
            break;
          case 2:
            b.reject(e);
        }
      }
    }, h = function(b) {
      var a = this.promise = new p, k = this, m, g, n, x = !1, u = [];
      Error.captureStackTrace && (Error.captureStackTrace(k, h), Error.captureStackTrace(a, h));
      this.isResolved = a.isResolved = function() {
        return 1 === m;
      };
      this.isRejected = a.isRejected = function() {
        return 2 === m;
      };
      this.isFulfilled = a.isFulfilled = function() {
        return !!m;
      };
      this.isCanceled = a.isCanceled = function() {
        return x;
      };
      this.progress = function(b, d) {
        if (m) {
          if (!0 === d) {
            throw Error("This deferred has already been fulfilled.");
          }
          return a;
        }
        q(u, 0, b, null, k);
        return a;
      };
      this.resolve = function(b, d) {
        if (m) {
          if (!0 === d) {
            throw Error("This deferred has already been fulfilled.");
          }
          return a;
        }
        q(u, m = 1, g = b, null, k);
        u = null;
        return a;
      };
      var y = this.reject = function(b, d) {
        if (m) {
          if (!0 === d) {
            throw Error("This deferred has already been fulfilled.");
          }
          return a;
        }
        Error.captureStackTrace && Error.captureStackTrace(n = {}, y);
        q(u, m = 2, g = b, n, k);
        u = null;
        return a;
      };
      this.then = a.then = function(b, d, e) {
        var k = [e, b, d];
        k.cancel = a.cancel;
        k.deferred = new h(function(b) {
          return k.cancel && k.cancel(b);
        });
        m && !u ? l(k, m, g, n) : u.push(k);
        return k.deferred.promise;
      };
      this.cancel = a.cancel = function(a, c) {
        if (!m) {
          if (b) {
            var e = b(a);
            a = "undefined" === typeof e ? a : e;
          }
          x = !0;
          if (!m) {
            return "undefined" === typeof a && (a = new f), y(a), a;
          }
          if (2 === m && g === a) {
            return a;
          }
        } else {
          if (!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
        }
      };
      e(a);
    };
    h.prototype.toString = function() {
      return "[object Deferred]";
    };
    m && m(h);
    return h;
  });
}, "dojo/errors/CancelError":function() {
  define(["./create"], function(a) {
    return a("CancelError", null, null, {dojoType:"cancel", log:!1});
  });
}, "dojo/errors/create":function() {
  define(["../_base/lang"], function(a) {
    return function(n, f, p, m) {
      p = p || Error;
      var e = function(a) {
        if (p === Error) {
          Error.captureStackTrace && Error.captureStackTrace(this, e);
          var l = Error.call(this, a), k;
          for (k in l) {
            l.hasOwnProperty(k) && (this[k] = l[k]);
          }
          this.message = a;
          this.stack = l.stack;
        } else {
          p.apply(this, arguments);
        }
        f && f.apply(this, arguments);
      };
      e.prototype = a.delegate(p.prototype, m);
      e.prototype.name = n;
      return e.prototype.constructor = e;
    };
  });
}, "dojo/promise/Promise":function() {
  define(["../_base/lang"], function(a) {
    function n() {
      throw new TypeError("abstract");
    }
    return a.extend(function() {
    }, {then:function(a, p, m) {
      n();
    }, cancel:function(a, p) {
      n();
    }, isResolved:function() {
      n();
    }, isRejected:function() {
      n();
    }, isFulfilled:function() {
      n();
    }, isCanceled:function() {
      n();
    }, always:function(a) {
      return this.then(a, a);
    }, otherwise:function(a) {
      return this.then(null, a);
    }, trace:function() {
      return this;
    }, traceRejected:function() {
      return this;
    }, toString:function() {
      return "[object Promise]";
    }});
  });
}, "dojo/promise/instrumentation":function() {
  define(["./tracer", "../has", "../_base/lang", "../_base/array"], function(a, n, f, p) {
    function m(b, a, e) {
      if (!b || !1 !== b.log) {
        var h = "";
        b && b.stack && (h += b.stack);
        a && a.stack && (h += "\n    ----------------------------------------\n    rejected" + a.stack.split("\n").slice(1).join("\n").replace(/^\s+/, " "));
        e && e.stack && (h += "\n    ----------------------------------------\n" + e.stack);
        console.error(b, h);
      }
    }
    function e(b, a, e, h) {
      a || m(b, e, h);
    }
    function q(a, c, e, f) {
      p.some(k, function(b) {
        if (b.error === a) {
          return c && (b.handled = !0), !0;
        }
      }) || k.push({error:a, rejection:e, handled:c, deferred:f, timestamp:(new Date).getTime()});
      b || (b = setTimeout(l, h));
    }
    function l() {
      var a = (new Date).getTime(), c = a - h;
      k = p.filter(k, function(b) {
        return b.timestamp < c ? (b.handled || m(b.error, b.rejection, b.deferred), !1) : !0;
      });
      b = k.length ? setTimeout(l, k[0].timestamp + h - a) : !1;
    }
    n.add("config-useDeferredInstrumentation", "report-unhandled-rejections");
    var k = [], b = !1, h = 1E3;
    return function(b) {
      var c = n("config-useDeferredInstrumentation");
      if (c) {
        a.on("resolved", f.hitch(console, "log", "resolved"));
        a.on("rejected", f.hitch(console, "log", "rejected"));
        a.on("progress", f.hitch(console, "log", "progress"));
        var k = [];
        "string" === typeof c && (k = c.split(","), c = k.shift());
        if ("report-rejections" === c) {
          b.instrumentRejected = e;
        } else {
          if ("report-unhandled-rejections" === c || !0 === c || 1 === c) {
            b.instrumentRejected = q, h = parseInt(k[0], 10) || h;
          } else {
            throw Error("Unsupported instrumentation usage \x3c" + c + "\x3e");
          }
        }
      }
    };
  });
}, "dojo/promise/tracer":function() {
  define(["../_base/lang", "./Promise", "../Evented"], function(a, n, f) {
    function p(a) {
      setTimeout(function() {
        e.apply(m, a);
      }, 0);
    }
    var m = new f, e = m.emit;
    m.emit = null;
    n.prototype.trace = function() {
      var e = a._toArray(arguments);
      this.then(function(a) {
        p(["resolved", a].concat(e));
      }, function(a) {
        p(["rejected", a].concat(e));
      }, function(a) {
        p(["progress", a].concat(e));
      });
      return this;
    };
    n.prototype.traceRejected = function() {
      var e = a._toArray(arguments);
      this.otherwise(function(a) {
        p(["rejected", a].concat(e));
      });
      return this;
    };
    return m;
  });
}, "dojo/when":function() {
  define(["./Deferred", "./promise/Promise"], function(a, n) {
    return function(f, p, m, e) {
      var q = f && "function" === typeof f.then, l = q && f instanceof n;
      if (!q) {
        return 1 < arguments.length ? p ? p(f) : f : (new a).resolve(f);
      }
      l || (q = new a(f.cancel), f.then(q.resolve, q.reject, q.progress), f = q.promise);
      return p || m || e ? f.then(p, m, e) : f;
    };
  });
}, "dojo/_base/json":function() {
  define(["./kernel", "../json"], function(a, n) {
    a.fromJson = function(a) {
      return eval("(" + a + ")");
    };
    a._escapeString = n.stringify;
    a.toJsonIndentStr = "\t";
    a.toJson = function(f, p) {
      return n.stringify(f, function(a, e) {
        if (e) {
          var f = e.__json__ || e.json;
          if ("function" == typeof f) {
            return f.call(e);
          }
        }
        return e;
      }, p && a.toJsonIndentStr);
    };
    return a;
  });
}, "dojo/json":function() {
  define(["./has"], function(a) {
    var n = "undefined" != typeof JSON;
    a.add("json-parse", n);
    a.add("json-stringify", n && '{"a":1}' == JSON.stringify({a:0}, function(a, f) {
      return f || 1;
    }));
    if (a("json-stringify")) {
      return JSON;
    }
    var f = function(a) {
      return ('"' + a.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
    };
    return {parse:a("json-parse") ? JSON.parse : function(a, f) {
      if (f && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(a)) {
        throw new SyntaxError("Invalid characters in JSON");
      }
      return eval("(" + a + ")");
    }, stringify:function(a, m, e) {
      function n(a, b, h) {
        m && (a = m(h, a));
        var d;
        d = typeof a;
        if ("number" == d) {
          return isFinite(a) ? a + "" : "null";
        }
        if ("boolean" == d) {
          return a + "";
        }
        if (null === a) {
          return "null";
        }
        if ("string" == typeof a) {
          return f(a);
        }
        if ("function" == d || "undefined" == d) {
          return l;
        }
        if ("function" == typeof a.toJSON) {
          return n(a.toJSON(h), b, h);
        }
        if (a instanceof Date) {
          return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(b, c, d) {
            b = a["getUTC" + c]() + (d ? 1 : 0);
            return 10 > b ? "0" + b : b;
          });
        }
        if (a.valueOf() !== a) {
          return n(a.valueOf(), b, h);
        }
        var c = e ? b + e : "", r = e ? " " : "", p = e ? "\n" : "";
        if (a instanceof Array) {
          var r = a.length, g = [];
          for (h = 0;h < r;h++) {
            d = n(a[h], c, h), "string" != typeof d && (d = "null"), g.push(p + c + d);
          }
          return "[" + g.join(",") + p + b + "]";
        }
        g = [];
        for (h in a) {
          var v;
          if (a.hasOwnProperty(h)) {
            if ("number" == typeof h) {
              v = '"' + h + '"';
            } else {
              if ("string" == typeof h) {
                v = f(h);
              } else {
                continue;
              }
            }
            d = n(a[h], c, h);
            "string" == typeof d && g.push(p + c + v + ":" + r + d);
          }
        }
        return "{" + g.join(",") + p + b + "}";
      }
      var l;
      "string" == typeof m && (e = m, m = null);
      return n(a, "", "");
    }};
  });
}, "dojo/_base/Color":function() {
  define(["./kernel", "./lang", "./array", "./config"], function(a, n, f, p) {
    var m = a.Color = function(a) {
      a && this.setColor(a);
    };
    m.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:p.transparentColor || [0, 0, 0, 0]};
    n.extend(m, {r:255, g:255, b:255, a:1, _set:function(a, f, l, k) {
      this.r = a;
      this.g = f;
      this.b = l;
      this.a = k;
    }, setColor:function(a) {
      n.isString(a) ? m.fromString(a, this) : n.isArray(a) ? m.fromArray(a, this) : (this._set(a.r, a.g, a.b, a.a), a instanceof m || this.sanitize());
      return this;
    }, sanitize:function() {
      return this;
    }, toRgb:function() {
      return [this.r, this.g, this.b];
    }, toRgba:function() {
      return [this.r, this.g, this.b, this.a];
    }, toHex:function() {
      return "#" + f.map(["r", "g", "b"], function(a) {
        a = this[a].toString(16);
        return 2 > a.length ? "0" + a : a;
      }, this).join("");
    }, toCss:function(a) {
      var f = this.r + ", " + this.g + ", " + this.b;
      return (a ? "rgba(" + f + ", " + this.a : "rgb(" + f) + ")";
    }, toString:function() {
      return this.toCss(!0);
    }});
    m.blendColors = a.blendColors = function(a, n, l, k) {
      var b = k || new m;
      f.forEach(["r", "g", "b", "a"], function(h) {
        b[h] = a[h] + (n[h] - a[h]) * l;
        "a" != h && (b[h] = Math.round(b[h]));
      });
      return b.sanitize();
    };
    m.fromRgb = a.colorFromRgb = function(a, f) {
      var l = a.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
      return l && m.fromArray(l[1].split(/\s*,\s*/), f);
    };
    m.fromHex = a.colorFromHex = function(a, n) {
      var l = n || new m, k = 4 == a.length ? 4 : 8, b = (1 << k) - 1;
      a = Number("0x" + a.substr(1));
      if (isNaN(a)) {
        return null;
      }
      f.forEach(["b", "g", "r"], function(h) {
        var d = a & b;
        a >>= k;
        l[h] = 4 == k ? 17 * d : d;
      });
      l.a = 1;
      return l;
    };
    m.fromArray = a.colorFromArray = function(a, f) {
      var l = f || new m;
      l._set(Number(a[0]), Number(a[1]), Number(a[2]), Number(a[3]));
      isNaN(l.a) && (l.a = 1);
      return l.sanitize();
    };
    m.fromString = a.colorFromString = function(a, f) {
      var l = m.named[a];
      return l && m.fromArray(l, f) || m.fromRgb(a, f) || m.fromHex(a, f);
    };
    return m;
  });
}, "dojo/_base/browser":function() {
  require.has && require.has.add("config-selectorEngine", "acme");
  define("../ready ./kernel ./connect ./unload ./window ./event ./html ./NodeList ../query ./xhr ./fx".split(" "), function(a) {
    return a;
  });
}, "dojo/_base/unload":function() {
  define(["./kernel", "./lang", "../on"], function(a, n, f) {
    var p = window, m = {addOnWindowUnload:function(e, m) {
      a.windowUnloaded || f(p, "unload", a.windowUnloaded = function() {
      });
      f(p, "unload", n.hitch(e, m));
    }, addOnUnload:function(a, m) {
      f(p, "beforeunload", n.hitch(a, m));
    }};
    a.addOnWindowUnload = m.addOnWindowUnload;
    a.addOnUnload = m.addOnUnload;
    return m;
  });
}, "dojo/_base/html":function() {
  define("./kernel ../dom ../dom-style ../dom-attr ../dom-prop ../dom-class ../dom-construct ../dom-geometry".split(" "), function(a, n, f, p, m, e, q, l) {
    a.byId = n.byId;
    a.isDescendant = n.isDescendant;
    a.setSelectable = n.setSelectable;
    a.getAttr = p.get;
    a.setAttr = p.set;
    a.hasAttr = p.has;
    a.removeAttr = p.remove;
    a.getNodeProp = p.getNodeProp;
    a.attr = function(a, b, e) {
      return 2 == arguments.length ? p["string" == typeof b ? "get" : "set"](a, b) : p.set(a, b, e);
    };
    a.hasClass = e.contains;
    a.addClass = e.add;
    a.removeClass = e.remove;
    a.toggleClass = e.toggle;
    a.replaceClass = e.replace;
    a._toDom = a.toDom = q.toDom;
    a.place = q.place;
    a.create = q.create;
    a.empty = function(a) {
      q.empty(a);
    };
    a._destroyElement = a.destroy = function(a) {
      q.destroy(a);
    };
    a._getPadExtents = a.getPadExtents = l.getPadExtents;
    a._getBorderExtents = a.getBorderExtents = l.getBorderExtents;
    a._getPadBorderExtents = a.getPadBorderExtents = l.getPadBorderExtents;
    a._getMarginExtents = a.getMarginExtents = l.getMarginExtents;
    a._getMarginSize = a.getMarginSize = l.getMarginSize;
    a._getMarginBox = a.getMarginBox = l.getMarginBox;
    a.setMarginBox = l.setMarginBox;
    a._getContentBox = a.getContentBox = l.getContentBox;
    a.setContentSize = l.setContentSize;
    a._isBodyLtr = a.isBodyLtr = l.isBodyLtr;
    a._docScroll = a.docScroll = l.docScroll;
    a._getIeDocumentElementOffset = a.getIeDocumentElementOffset = l.getIeDocumentElementOffset;
    a._fixIeBiDiScrollLeft = a.fixIeBiDiScrollLeft = l.fixIeBiDiScrollLeft;
    a.position = l.position;
    a.marginBox = function(a, b) {
      return b ? l.setMarginBox(a, b) : l.getMarginBox(a);
    };
    a.contentBox = function(a, b) {
      return b ? l.setContentSize(a, b) : l.getContentBox(a);
    };
    a.coords = function(e, b) {
      a.deprecated("dojo.coords()", "Use dojo.position() or dojo.marginBox().");
      e = n.byId(e);
      var h = f.getComputedStyle(e), h = l.getMarginBox(e, h), d = l.position(e, b);
      h.x = d.x;
      h.y = d.y;
      return h;
    };
    a.getProp = m.get;
    a.setProp = m.set;
    a.prop = function(a, b, e) {
      return 2 == arguments.length ? m["string" == typeof b ? "get" : "set"](a, b) : m.set(a, b, e);
    };
    a.getStyle = f.get;
    a.setStyle = f.set;
    a.getComputedStyle = f.getComputedStyle;
    a.__toPixelValue = a.toPixelValue = f.toPixelValue;
    a.style = function(a, b, e) {
      switch(arguments.length) {
        case 1:
          return f.get(a);
        case 2:
          return f["string" == typeof b ? "get" : "set"](a, b);
      }
      return f.set(a, b, e);
    };
    return a;
  });
}, "dojo/dom-attr":function() {
  define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "), function(a, n, f, p, m, e) {
    function q(a, e) {
      var d = a.getAttributeNode && a.getAttributeNode(e);
      return !!d && d.specified;
    }
    var l = {innerHTML:1, textContent:1, className:1, htmlFor:n("ie"), value:1}, k = {classname:"class", htmlfor:"for", tabindex:"tabIndex", readonly:"readOnly"};
    a.has = function(a, h) {
      var d = h.toLowerCase();
      return l[e.names[d] || h] || q(p.byId(a), k[d] || h);
    };
    a.get = function(a, h) {
      a = p.byId(a);
      var d = h.toLowerCase(), c = e.names[d] || h, m = a[c];
      if (l[c] && "undefined" != typeof m) {
        return m;
      }
      if ("textContent" == c) {
        return e.get(a, c);
      }
      if ("href" != c && ("boolean" == typeof m || f.isFunction(m))) {
        return m;
      }
      d = k[d] || h;
      return q(a, d) ? a.getAttribute(d) : null;
    };
    a.set = function(b, h, d) {
      b = p.byId(b);
      if (2 == arguments.length) {
        for (var c in h) {
          a.set(b, c, h[c]);
        }
        return b;
      }
      c = h.toLowerCase();
      var n = e.names[c] || h, t = l[n];
      if ("style" == n && "string" != typeof d) {
        return m.set(b, d), b;
      }
      if (t || "boolean" == typeof d || f.isFunction(d)) {
        return e.set(b, h, d);
      }
      b.setAttribute(k[c] || h, d);
      return b;
    };
    a.remove = function(a, e) {
      p.byId(a).removeAttribute(k[e.toLowerCase()] || e);
    };
    a.getNodeProp = function(a, h) {
      a = p.byId(a);
      var d = h.toLowerCase(), c = e.names[d] || h;
      if (c in a && "href" != c) {
        return a[c];
      }
      d = k[d] || h;
      return q(a, d) ? a.getAttribute(d) : null;
    };
  });
}, "dojo/dom-prop":function() {
  define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function(a, n, f, p, m, e, q, l) {
    function k(a) {
      var b = "";
      a = a.childNodes;
      for (var d = 0, e;e = a[d];d++) {
        8 != e.nodeType && (b = 1 == e.nodeType ? b + k(e) : b + e.nodeValue);
      }
      return b;
    }
    var b = {}, h = 1, d = n._scopeName + "attrid";
    f.add("dom-textContent", function(a, b, d) {
      return "textContent" in d;
    });
    a.names = {"class":"className", "for":"htmlFor", tabindex:"tabIndex", readonly:"readOnly", colspan:"colSpan", frameborder:"frameBorder", rowspan:"rowSpan", textcontent:"textContent", valuetype:"valueType"};
    a.get = function(b, d) {
      b = m.byId(b);
      var e = d.toLowerCase(), e = a.names[e] || d;
      return "textContent" != e || f("dom-textContent") ? b[e] : k(b);
    };
    a.set = function(c, k, n) {
      c = m.byId(c);
      if (2 == arguments.length && "string" != typeof k) {
        for (var g in k) {
          a.set(c, g, k[g]);
        }
        return c;
      }
      g = k.toLowerCase();
      g = a.names[g] || k;
      if ("style" == g && "string" != typeof n) {
        return e.set(c, n), c;
      }
      if ("innerHTML" == g) {
        return f("ie") && c.tagName.toLowerCase() in {col:1, colgroup:1, table:1, tbody:1, tfoot:1, thead:1, tr:1, title:1} ? (q.empty(c), c.appendChild(q.toDom(n, c.ownerDocument))) : c[g] = n, c;
      }
      if ("textContent" == g && !f("dom-textContent")) {
        return q.empty(c), c.appendChild(c.ownerDocument.createTextNode(n)), c;
      }
      if (p.isFunction(n)) {
        var v = c[d];
        v || (v = h++, c[d] = v);
        b[v] || (b[v] = {});
        var x = b[v][g];
        if (x) {
          l.disconnect(x);
        } else {
          try {
            delete c[g];
          } catch (u) {
          }
        }
        n ? b[v][g] = l.connect(c, g, n) : c[g] = null;
        return c;
      }
      c[g] = n;
      return c;
    };
  });
}, "dojo/dom-construct":function() {
  define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function(a, n, f, p, m, e) {
    function q(a, b) {
      var c = b.parentNode;
      c && c.insertBefore(a, b);
    }
    function l(a) {
      if ("innerHTML" in a) {
        try {
          a.innerHTML = "";
          return;
        } catch (b) {
        }
      }
      for (var c;c = a.lastChild;) {
        a.removeChild(c);
      }
    }
    var k = {option:["select"], tbody:["table"], thead:["table"], tfoot:["table"], tr:["table", "tbody"], td:["table", "tbody", "tr"], th:["table", "thead", "tr"], legend:["fieldset"], caption:["table"], colgroup:["table"], col:["table", "colgroup"], li:["ul"]}, b = /<\s*([\w\:]+)/, h = {}, d = 0, c = "__" + n._scopeName + "ToDomId", r;
    for (r in k) {
      k.hasOwnProperty(r) && (n = k[r], n.pre = "option" == r ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + n.join("\x3e\x3c") + "\x3e", n.post = "\x3c/" + n.reverse().join("\x3e\x3c/") + "\x3e");
    }
    var t;
    8 >= f("ie") && (t = function(a) {
      a.__dojo_html5_tested = "yes";
      var b = g("div", {innerHTML:"\x3cnav\x3ea\x3c/nav\x3e", style:{visibility:"hidden"}}, a.body);
      1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g, function(b) {
        a.createElement(b);
      });
      v(b);
    });
    a.toDom = function(a, e) {
      e = e || p.doc;
      var g = e[c];
      g || (e[c] = g = ++d + "", h[g] = e.createElement("div"));
      8 >= f("ie") && !e.__dojo_html5_tested && e.body && t(e);
      a += "";
      var m = a.match(b), l = m ? m[1].toLowerCase() : "", g = h[g];
      if (m && k[l]) {
        for (m = k[l], g.innerHTML = m.pre + a + m.post, m = m.length;m;--m) {
          g = g.firstChild;
        }
      } else {
        g.innerHTML = a;
      }
      if (1 == g.childNodes.length) {
        return g.removeChild(g.firstChild);
      }
      for (l = e.createDocumentFragment();m = g.firstChild;) {
        l.appendChild(m);
      }
      return l;
    };
    a.place = function(b, c, d) {
      c = m.byId(c);
      "string" == typeof b && (b = /^\s*</.test(b) ? a.toDom(b, c.ownerDocument) : m.byId(b));
      if ("number" == typeof d) {
        var e = c.childNodes;
        !e.length || e.length <= d ? c.appendChild(b) : q(b, e[0 > d ? 0 : d]);
      } else {
        switch(d) {
          case "before":
            q(b, c);
            break;
          case "after":
            d = b;
            (e = c.parentNode) && (e.lastChild == c ? e.appendChild(d) : e.insertBefore(d, c.nextSibling));
            break;
          case "replace":
            c.parentNode.replaceChild(b, c);
            break;
          case "only":
            a.empty(c);
            c.appendChild(b);
            break;
          case "first":
            if (c.firstChild) {
              q(b, c.firstChild);
              break;
            }
          ;
          default:
            c.appendChild(b);
        }
      }
      return b;
    };
    var g = a.create = function(b, c, d, g) {
      var h = p.doc;
      d && (d = m.byId(d), h = d.ownerDocument);
      "string" == typeof b && (b = h.createElement(b));
      c && e.set(b, c);
      d && a.place(b, d, g);
      return b;
    };
    a.empty = function(a) {
      l(m.byId(a));
    };
    var v = a.destroy = function(a) {
      if (a = m.byId(a)) {
        var b = a;
        a = a.parentNode;
        b.firstChild && l(b);
        a && (f("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b));
      }
    };
  });
}, "dojo/dom-class":function() {
  define(["./_base/lang", "./_base/array", "./dom"], function(a, n, f) {
    function p(a) {
      if ("string" == typeof a || a instanceof String) {
        if (a && !e.test(a)) {
          return q[0] = a, q;
        }
        a = a.split(e);
        a.length && !a[0] && a.shift();
        a.length && !a[a.length - 1] && a.pop();
        return a;
      }
      return a ? n.filter(a, function(a) {
        return a;
      }) : [];
    }
    var m, e = /\s+/, q = [""], l = {};
    return m = {contains:function(a, b) {
      return 0 <= (" " + f.byId(a).className + " ").indexOf(" " + b + " ");
    }, add:function(a, b) {
      a = f.byId(a);
      b = p(b);
      var e = a.className, d, e = e ? " " + e + " " : " ";
      d = e.length;
      for (var c = 0, m = b.length, l;c < m;++c) {
        (l = b[c]) && 0 > e.indexOf(" " + l + " ") && (e += l + " ");
      }
      d < e.length && (a.className = e.substr(1, e.length - 2));
    }, remove:function(e, b) {
      e = f.byId(e);
      var h;
      if (void 0 !== b) {
        b = p(b);
        h = " " + e.className + " ";
        for (var d = 0, c = b.length;d < c;++d) {
          h = h.replace(" " + b[d] + " ", " ");
        }
        h = a.trim(h);
      } else {
        h = "";
      }
      e.className != h && (e.className = h);
    }, replace:function(a, b, e) {
      a = f.byId(a);
      l.className = a.className;
      m.remove(l, e);
      m.add(l, b);
      a.className !== l.className && (a.className = l.className);
    }, toggle:function(a, b, e) {
      a = f.byId(a);
      if (void 0 === e) {
        b = p(b);
        for (var d = 0, c = b.length, l;d < c;++d) {
          l = b[d], m[m.contains(a, l) ? "remove" : "add"](a, l);
        }
      } else {
        m[e ? "add" : "remove"](a, b);
      }
      return e;
    }};
  });
}, "dojo/_base/NodeList":function() {
  define(["./kernel", "../query", "./array", "./html", "../NodeList-dom"], function(a, n, f) {
    n = n.NodeList;
    var p = n.prototype;
    p.connect = n._adaptAsForEach(function() {
      return a.connect.apply(this, arguments);
    });
    p.coords = n._adaptAsMap(a.coords);
    n.events = "blur focus change click error keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup submit".split(" ");
    f.forEach(n.events, function(a) {
      var e = "on" + a;
      p[e] = function(a, f) {
        return this.connect(e, a, f);
      };
    });
    return a.NodeList = n;
  });
}, "dojo/query":function() {
  define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function(a, n, f, p, m, e, q, l) {
    function k(a, b) {
      var c = function(c, d) {
        if ("string" == typeof d && (d = f.byId(d), !d)) {
          return new b([]);
        }
        var e = "string" == typeof c ? a(c, d) : c ? c.end && c.on ? c : [c] : [];
        return e.end && e.on ? e : new b(e);
      };
      c.matches = a.match || function(a, b, d) {
        return 0 < c.filter([a], b, d).length;
      };
      c.filter = a.filter || function(a, b, d) {
        return c(b, d).filter(function(b) {
          return -1 < m.indexOf(a, b);
        });
      };
      if ("function" != typeof a) {
        var d = a.search;
        a = function(a, b) {
          return d(b || document, a);
        };
      }
      return c;
    }
    n.add("array-extensible", function() {
      return 1 == e.delegate([], {length:1}).length && !n("bug-for-in-skips-shadowed");
    });
    var b = Array.prototype, h = b.slice, d = b.concat, c = m.forEach, r = function(b, c, d) {
      c = [0].concat(h.call(c, 0));
      d = d || a.global;
      return function(a) {
        c[0] = a;
        return b.apply(d, c);
      };
    }, t = function(a) {
      var b = this instanceof g && n("array-extensible");
      "number" == typeof a && (a = Array(a));
      var c = a && "length" in a ? a : arguments;
      if (b || !c.sort) {
        for (var d = b ? this : [], h = d.length = c.length, f = 0;f < h;f++) {
          d[f] = c[f];
        }
        if (b) {
          return d;
        }
        c = d;
      }
      e._mixin(c, v);
      c._NodeListCtor = function(a) {
        return g(a);
      };
      return c;
    }, g = t, v = g.prototype = n("array-extensible") ? [] : {};
    g._wrap = v._wrap = function(a, b, c) {
      a = new (c || this._NodeListCtor || g)(a);
      return b ? a._stash(b) : a;
    };
    g._adaptAsMap = function(a, b) {
      return function() {
        return this.map(r(a, arguments, b));
      };
    };
    g._adaptAsForEach = function(a, b) {
      return function() {
        this.forEach(r(a, arguments, b));
        return this;
      };
    };
    g._adaptAsFilter = function(a, b) {
      return function() {
        return this.filter(r(a, arguments, b));
      };
    };
    g._adaptWithCondition = function(b, c, d) {
      return function() {
        var e = arguments, g = r(b, e, d);
        if (c.call(d || a.global, e)) {
          return this.map(g);
        }
        this.forEach(g);
        return this;
      };
    };
    c(["slice", "splice"], function(a) {
      var c = b[a];
      v[a] = function() {
        return this._wrap(c.apply(this, arguments), "slice" == a ? this : null);
      };
    });
    c(["indexOf", "lastIndexOf", "every", "some"], function(b) {
      var c = m[b];
      v[b] = function() {
        return c.apply(a, [this].concat(h.call(arguments, 0)));
      };
    });
    e.extend(t, {constructor:g, _NodeListCtor:g, toString:function() {
      return this.join(",");
    }, _stash:function(a) {
      this._parent = a;
      return this;
    }, on:function(a, b) {
      var c = this.map(function(c) {
        return p(c, a, b);
      });
      c.remove = function() {
        for (var a = 0;a < c.length;a++) {
          c[a].remove();
        }
      };
      return c;
    }, end:function() {
      return this._parent ? this._parent : new this._NodeListCtor(0);
    }, concat:function(a) {
      var b = h.call(this, 0), c = m.map(arguments, function(a) {
        return h.call(a, 0);
      });
      return this._wrap(d.apply(b, c), this);
    }, map:function(a, b) {
      return this._wrap(m.map(this, a, b), this);
    }, forEach:function(a, b) {
      c(this, a, b);
      return this;
    }, filter:function(a) {
      var b = arguments, c = this, d = 0;
      if ("string" == typeof a) {
        c = x._filterResult(this, b[0]);
        if (1 == b.length) {
          return c._stash(this);
        }
        d = 1;
      }
      return this._wrap(m.filter(c, b[d], b[d + 1]), this);
    }, instantiate:function(a, b) {
      var c = e.isFunction(a) ? a : e.getObject(a);
      b = b || {};
      return this.forEach(function(a) {
        new c(b, a);
      });
    }, at:function() {
      var a = new this._NodeListCtor(0);
      c(arguments, function(b) {
        0 > b && (b = this.length + b);
        this[b] && a.push(this[b]);
      }, this);
      return a._stash(this);
    }});
    var x = k(l, t);
    a.query = k(l, function(a) {
      return t(a);
    });
    x.load = function(a, b, c) {
      q.load(a, b, function(a) {
        c(k(a, t));
      });
    };
    a._filterQueryResult = x._filterResult = function(a, b, c) {
      return new t(x.filter(a, b, c));
    };
    a.NodeList = x.NodeList = t;
    return x;
  });
}, "dojo/selector/_loader":function() {
  define(["../has", "require"], function(a, n) {
    if ("undefined" !== typeof document) {
      var f = document.createElement("div");
      a.add("dom-qsa2.1", !!f.querySelectorAll);
      a.add("dom-qsa3", function() {
        try {
          return f.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == f.querySelectorAll(".TEST:empty").length;
        } catch (a) {
        }
      });
    }
    var p;
    return {load:function(f, e, q, l) {
      if (l && l.isBuild) {
        q();
      } else {
        l = n;
        f = "default" == f ? a("config-selectorEngine") || "css3" : f;
        f = "css2" == f || "lite" == f ? "./lite" : "css2.1" == f ? a("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == f ? a("dom-qsa3") ? "./lite" : "./acme" : "acme" == f ? "./acme" : (l = e) && f;
        if ("?" == f.charAt(f.length - 1)) {
          f = f.substring(0, f.length - 1);
          var k = !0;
        }
        if (k && (a("dom-compliant-qsa") || p)) {
          return q(p);
        }
        l([f], function(a) {
          "./lite" != f && (p = a);
          q(a);
        });
      }
    }};
  });
}, "dojo/NodeList-dom":function() {
  define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function(a, n, f, p, m, e, q, l, k) {
    function b(a) {
      return function(b, c, d) {
        return 2 == arguments.length ? a["string" == typeof c ? "get" : "set"](b, c) : a.set(b, c, d);
      };
    }
    var h = function(a) {
      return 1 == a.length && "string" == typeof a[0];
    }, d = function(a) {
      var b = a.parentNode;
      b && b.removeChild(a);
    }, c = n.NodeList, r = c._adaptWithCondition, t = c._adaptAsForEach, g = c._adaptAsMap;
    p.extend(c, {_normalize:function(b, c) {
      var d = !0 === b.parse;
      if ("string" == typeof b.template) {
        var g = b.templateFunc || a.string && a.string.substitute;
        b = g ? g(b.template, b) : b;
      }
      g = typeof b;
      "string" == g || "number" == g ? (b = e.toDom(b, c && c.ownerDocument), b = 11 == b.nodeType ? p._toArray(b.childNodes) : [b]) : p.isArrayLike(b) ? p.isArray(b) || (b = p._toArray(b)) : b = [b];
      d && (b._runParse = !0);
      return b;
    }, _cloneNode:function(a) {
      return a.cloneNode(!0);
    }, _place:function(b, c, d, g) {
      if (1 == c.nodeType || "only" != d) {
        for (var h, f = b.length, k = f - 1;0 <= k;k--) {
          var l = g ? this._cloneNode(b[k]) : b[k];
          if (b._runParse && a.parser && a.parser.parse) {
            for (h || (h = c.ownerDocument.createElement("div")), h.appendChild(l), a.parser.parse(h), l = h.firstChild;h.firstChild;) {
              h.removeChild(h.firstChild);
            }
          }
          k == f - 1 ? e.place(l, c, d) : c.parentNode.insertBefore(l, c);
          c = l;
        }
      }
    }, position:g(q.position), attr:r(b(l), h), style:r(b(k), h), addClass:t(m.add), removeClass:t(m.remove), toggleClass:t(m.toggle), replaceClass:t(m.replace), empty:t(e.empty), removeAttr:t(l.remove), marginBox:g(q.getMarginBox), place:function(a, b) {
      var c = n(a)[0];
      return this.forEach(function(a) {
        e.place(a, c, b);
      });
    }, orphan:function(a) {
      return (a ? n._filterResult(this, a) : this).forEach(d);
    }, adopt:function(a, b) {
      return n(a).place(this[0], b)._stash(this);
    }, query:function(a) {
      if (!a) {
        return this;
      }
      var b = new c;
      this.map(function(c) {
        n(a, c).forEach(function(a) {
          void 0 !== a && b.push(a);
        });
      });
      return b._stash(this);
    }, filter:function(a) {
      var b = arguments, c = this, d = 0;
      if ("string" == typeof a) {
        c = n._filterResult(this, b[0]);
        if (1 == b.length) {
          return c._stash(this);
        }
        d = 1;
      }
      return this._wrap(f.filter(c, b[d], b[d + 1]), this);
    }, addContent:function(a, b) {
      a = this._normalize(a, this[0]);
      for (var c = 0, d;d = this[c];c++) {
        a.length ? this._place(a, d, b, 0 < c) : e.empty(d);
      }
      return this;
    }});
    return c;
  });
}, "dojo/_base/xhr":function() {
  define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function(a, n, f, p, m, e, q, l, k, b, h, d, c, r, t, g) {
    a._xhrObj = t._create;
    var v = a.config;
    a.objectToQuery = p.objectToQuery;
    a.queryToObject = p.queryToObject;
    a.fieldToObject = e.fieldToObject;
    a.formToObject = e.toObject;
    a.formToQuery = e.toQuery;
    a.formToJson = e.toJson;
    a._blockAsync = !1;
    var x = a._contentHandlers = a.contentHandlers = {text:function(a) {
      return a.responseText;
    }, json:function(a) {
      return k.fromJson(a.responseText || null);
    }, "json-comment-filtered":function(a) {
      l.useCommentedJson || console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}\x26\x26\nUse djConfig.useCommentedJson\x3dtrue to turn off this message.");
      a = a.responseText;
      var b = a.indexOf("/*"), c = a.lastIndexOf("*/");
      if (-1 == b || -1 == c) {
        throw Error("JSON was not comment filtered");
      }
      return k.fromJson(a.substring(b + 2, c));
    }, javascript:function(b) {
      return a.eval(b.responseText);
    }, xml:function(a) {
      var b = a.responseXML;
      b && n("dom-qsa2.1") && !b.querySelectorAll && n("dom-parser") && (b = (new DOMParser).parseFromString(a.responseText, "application/xml"));
      if (n("ie") && (!b || !b.documentElement)) {
        var c = function(a) {
          return "MSXML" + a + ".DOMDocument";
        }, c = ["Microsoft.XMLDOM", c(6), c(4), c(3), c(2)];
        h.some(c, function(c) {
          try {
            var d = new ActiveXObject(c);
            d.async = !1;
            d.loadXML(a.responseText);
            b = d;
          } catch (e) {
            return !1;
          }
          return !0;
        });
      }
      return b;
    }, "json-comment-optional":function(a) {
      return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? x["json-comment-filtered"](a) : x.json(a);
    }};
    a._ioSetArgs = function(c, d, g, h) {
      var f = {args:c, url:c.url}, k = null;
      if (c.form) {
        var k = m.byId(c.form), l = k.getAttributeNode("action");
        f.url = f.url || (l ? l.value : a.doc ? a.doc.URL : null);
        k = e.toObject(k);
      }
      l = [{}];
      k && l.push(k);
      c.content && l.push(c.content);
      c.preventCache && l.push({"dojo.preventCache":(new Date).valueOf()});
      f.query = p.objectToQuery(b.mixin.apply(null, l));
      f.handleAs = c.handleAs || "text";
      var n = new q(function(a) {
        a.canceled = !0;
        d && d(a);
        var b = a.ioArgs.error;
        b || (b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b);
        return b;
      });
      n.addCallback(g);
      var r = c.load;
      r && b.isFunction(r) && n.addCallback(function(a) {
        return r.call(c, a, f);
      });
      var t = c.error;
      t && b.isFunction(t) && n.addErrback(function(a) {
        return t.call(c, a, f);
      });
      var u = c.handle;
      u && b.isFunction(u) && n.addBoth(function(a) {
        return u.call(c, a, f);
      });
      n.addErrback(function(a) {
        return h(a, n);
      });
      v.ioPublish && a.publish && !1 !== f.args.ioPublish && (n.addCallbacks(function(b) {
        a.publish("/dojo/io/load", [n, b]);
        return b;
      }, function(b) {
        a.publish("/dojo/io/error", [n, b]);
        return b;
      }), n.addBoth(function(b) {
        a.publish("/dojo/io/done", [n, b]);
        return b;
      }));
      n.ioArgs = f;
      return n;
    };
    var u = function(a) {
      a = x[a.ioArgs.handleAs](a.ioArgs.xhr);
      return void 0 === a ? null : a;
    }, y = function(a, b) {
      b.ioArgs.args.failOk || console.error(a);
      return a;
    }, C = function(b) {
      0 >= w && (w = 0, v.ioPublish && a.publish && (!b || b && !1 !== b.ioArgs.args.ioPublish) && a.publish("/dojo/io/stop"));
    }, w = 0;
    c.after(r, "_onAction", function() {
      --w;
    });
    c.after(r, "_onInFlight", C);
    a._ioCancelAll = r.cancelAll;
    a._ioNotifyStart = function(b) {
      v.ioPublish && a.publish && !1 !== b.ioArgs.args.ioPublish && (w || a.publish("/dojo/io/start"), w += 1, a.publish("/dojo/io/send", [b]));
    };
    a._ioWatch = function(a, c, d, e) {
      a.ioArgs.options = a.ioArgs.args;
      b.mixin(a, {response:a.ioArgs, isValid:function(b) {
        return c(a);
      }, isReady:function(b) {
        return d(a);
      }, handleResponse:function(b) {
        return e(a);
      }});
      r(a);
      C(a);
    };
    a._ioAddQueryToUrl = function(a) {
      a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null);
    };
    a.xhr = function(b, c, d) {
      var e, g = a._ioSetArgs(c, function(a) {
        e && e.cancel();
      }, u, y), h = g.ioArgs;
      "postData" in c ? h.query = c.postData : "putData" in c ? h.query = c.putData : "rawBody" in c ? h.query = c.rawBody : (2 < arguments.length && !d || -1 === "POST|PUT".indexOf(b.toUpperCase())) && a._ioAddQueryToUrl(h);
      var f = {method:b, handleAs:"text", timeout:c.timeout, withCredentials:c.withCredentials, ioArgs:h};
      "undefined" !== typeof c.headers && (f.headers = c.headers);
      "undefined" !== typeof c.contentType && (f.headers || (f.headers = {}), f.headers["Content-Type"] = c.contentType);
      "undefined" !== typeof h.query && (f.data = h.query);
      "undefined" !== typeof c.sync && (f.sync = c.sync);
      a._ioNotifyStart(g);
      try {
        e = t(h.url, f, !0);
      } catch (k) {
        return g.cancel(), g;
      }
      g.ioArgs.xhr = e.response.xhr;
      e.then(function() {
        g.resolve(g);
      }).otherwise(function(a) {
        h.error = a;
        a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
        g.reject(a);
      });
      return g;
    };
    a.xhrGet = function(b) {
      return a.xhr("GET", b);
    };
    a.rawXhrPost = a.xhrPost = function(b) {
      return a.xhr("POST", b, !0);
    };
    a.rawXhrPut = a.xhrPut = function(b) {
      return a.xhr("PUT", b, !0);
    };
    a.xhrDelete = function(b) {
      return a.xhr("DELETE", b);
    };
    a._isDocumentOk = function(a) {
      return g.checkStatus(a.status);
    };
    a._getText = function(b) {
      var c;
      a.xhrGet({url:b, sync:!0, load:function(a) {
        c = a;
      }});
      return c;
    };
    b.mixin(a.xhr, {_xhrObj:a._xhrObj, fieldToObject:e.fieldToObject, formToObject:e.toObject, objectToQuery:p.objectToQuery, formToQuery:e.toQuery, formToJson:e.toJson, queryToObject:p.queryToObject, contentHandlers:x, _ioSetArgs:a._ioSetArgs, _ioCancelAll:a._ioCancelAll, _ioNotifyStart:a._ioNotifyStart, _ioWatch:a._ioWatch, _ioAddQueryToUrl:a._ioAddQueryToUrl, _isDocumentOk:a._isDocumentOk, _getText:a._getText, get:a.xhrGet, post:a.xhrPost, put:a.xhrPut, del:a.xhrDelete});
    return a.xhr;
  });
}, "dojo/io-query":function() {
  define(["./_base/lang"], function(a) {
    var n = {};
    return {objectToQuery:function(f) {
      var p = encodeURIComponent, m = [], e;
      for (e in f) {
        var q = f[e];
        if (q != n[e]) {
          var l = p(e) + "\x3d";
          if (a.isArray(q)) {
            for (var k = 0, b = q.length;k < b;++k) {
              m.push(l + p(q[k]));
            }
          } else {
            m.push(l + p(q));
          }
        }
      }
      return m.join("\x26");
    }, queryToObject:function(f) {
      var n = decodeURIComponent;
      f = f.split("\x26");
      for (var m = {}, e, q, l = 0, k = f.length;l < k;++l) {
        if (q = f[l], q.length) {
          var b = q.indexOf("\x3d");
          0 > b ? (e = n(q), q = "") : (e = n(q.slice(0, b)), q = n(q.slice(b + 1)));
          "string" == typeof m[e] && (m[e] = [m[e]]);
          a.isArray(m[e]) ? m[e].push(q) : m[e] = q;
        }
      }
      return m;
    }};
  });
}, "dojo/dom-form":function() {
  define(["./_base/lang", "./dom", "./io-query", "./json"], function(a, n, f, p) {
    var m = {fieldToObject:function(a) {
      var f = null;
      if (a = n.byId(a)) {
        var l = a.name, k = (a.type || "").toLowerCase();
        if (l && k && !a.disabled) {
          if ("radio" == k || "checkbox" == k) {
            a.checked && (f = a.value);
          } else {
            if (a.multiple) {
              for (f = [], a = [a.firstChild];a.length;) {
                for (l = a.pop();l;l = l.nextSibling) {
                  if (1 == l.nodeType && "option" == l.tagName.toLowerCase()) {
                    l.selected && f.push(l.value);
                  } else {
                    l.nextSibling && a.push(l.nextSibling);
                    l.firstChild && a.push(l.firstChild);
                    break;
                  }
                }
              }
            } else {
              f = a.value;
            }
          }
        }
      }
      return f;
    }, toObject:function(e) {
      var f = {};
      e = n.byId(e).elements;
      for (var l = 0, k = e.length;l < k;++l) {
        var b = e[l], h = b.name, d = (b.type || "").toLowerCase();
        if (h && d && 0 > "file|submit|image|reset|button".indexOf(d) && !b.disabled) {
          var c = f, p = h, b = m.fieldToObject(b);
          if (null !== b) {
            var t = c[p];
            "string" == typeof t ? c[p] = [t, b] : a.isArray(t) ? t.push(b) : c[p] = b;
          }
          "image" == d && (f[h + ".x"] = f[h + ".y"] = f[h].x = f[h].y = 0);
        }
      }
      return f;
    }, toQuery:function(a) {
      return f.objectToQuery(m.toObject(a));
    }, toJson:function(a, f) {
      return p.stringify(m.toObject(a), null, f ? 4 : 0);
    }};
    return m;
  });
}, "dojo/request/watch":function() {
  define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(a, n, f, p, m, e) {
    function q() {
      for (var a = +new Date, d = 0, c;d < b.length && (c = b[d]);d++) {
        var e = c.response, f = e.options;
        c.isCanceled && c.isCanceled() || c.isValid && !c.isValid(e) ? (b.splice(d--, 1), l._onAction && l._onAction()) : c.isReady && c.isReady(e) ? (b.splice(d--, 1), c.handleResponse(e), l._onAction && l._onAction()) : c.startTime && c.startTime + (f.timeout || 0) < a && (b.splice(d--, 1), c.cancel(new n("Timeout exceeded", e)), l._onAction && l._onAction());
      }
      l._onInFlight && l._onInFlight(c);
      b.length || (clearInterval(k), k = null);
    }
    function l(a) {
      a.response.options.timeout && (a.startTime = +new Date);
      a.isFulfilled() || (b.push(a), k || (k = setInterval(q, 50)), a.response.options.sync && q());
    }
    var k = null, b = [];
    l.cancelAll = function() {
      try {
        p.forEach(b, function(a) {
          try {
            a.cancel(new f("All requests canceled."));
          } catch (b) {
          }
        });
      } catch (a) {
      }
    };
    m && e && m.doc.attachEvent && e(m.global, "unload", function() {
      l.cancelAll();
    });
    return l;
  });
}, "dojo/request/util":function() {
  define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(a, n, f, p, m, e, q, l) {
    function k(a) {
      return h(a);
    }
    function b(a) {
      return void 0 !== a.data ? a.data : a.text;
    }
    a.deepCopy = function(b, c) {
      for (var e in c) {
        var f = b[e], g = c[e];
        f !== g && (f && "object" === typeof f && g && "object" === typeof g ? a.deepCopy(f, g) : b[e] = g);
      }
      return b;
    };
    a.deepCreate = function(b, c) {
      c = c || {};
      var e = q.delegate(b), f, g;
      for (f in b) {
        (g = b[f]) && "object" === typeof g && (e[f] = a.deepCreate(g, c[f]));
      }
      return a.deepCopy(e, c);
    };
    var h = Object.freeze || function(a) {
      return a;
    };
    a.deferred = function(d, c, e, m, g, v) {
      var x = new p(function(a) {
        c && c(x, d);
        return a && (a instanceof n || a instanceof f) ? a : new f("Request canceled", d);
      });
      x.response = d;
      x.isValid = e;
      x.isReady = m;
      x.handleResponse = g;
      e = x.then(k).otherwise(function(a) {
        a.response = d;
        throw a;
      });
      a.notify && e.then(q.hitch(a.notify, "emit", "load"), q.hitch(a.notify, "emit", "error"));
      m = e.then(b);
      g = new l;
      for (var u in m) {
        m.hasOwnProperty(u) && (g[u] = m[u]);
      }
      g.response = e;
      h(g);
      v && x.then(function(a) {
        v.call(x, a);
      }, function(a) {
        v.call(x, d, a);
      });
      x.promise = g;
      x.then = g.then;
      return x;
    };
    a.addCommonMethods = function(a, b) {
      e.forEach(b || ["GET", "POST", "PUT", "DELETE"], function(b) {
        a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function(c, e) {
          e = q.delegate(e || {});
          e.method = b;
          return a(c, e);
        };
      });
    };
    a.parseArgs = function(a, b, e) {
      var f = b.data, g = b.query;
      !f || e || "object" !== typeof f || f instanceof ArrayBuffer || f instanceof Blob || (b.data = m.objectToQuery(f));
      g ? ("object" === typeof g && (g = m.objectToQuery(g)), b.preventCache && (g += (g ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : b.preventCache && (g = "request.preventCache\x3d" + +new Date);
      a && g && (a += (~a.indexOf("?") ? "\x26" : "?") + g);
      return {url:a, options:b, getHeader:function(a) {
        return null;
      }};
    };
    a.checkStatus = function(a) {
      a = a || 0;
      return 200 <= a && 300 > a || 304 === a || 1223 === a || !a;
    };
  });
}, "dojo/errors/RequestError":function() {
  define(["./create"], function(a) {
    return a("RequestError", function(a, f) {
      this.response = f;
    });
  });
}, "dojo/errors/RequestTimeoutError":function() {
  define(["./create", "./RequestError"], function(a, n) {
    return a("RequestTimeoutError", null, n, {dojoType:"timeout"});
  });
}, "dojo/request/xhr":function() {
  define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(a, n, f, p, m) {
    function e(b, c) {
      var d = b.xhr;
      b.status = b.xhr.status;
      try {
        b.text = d.responseText;
      } catch (e) {
      }
      "xml" === b.options.handleAs && (b.data = d.responseXML);
      if (!c) {
        try {
          f(b);
        } catch (e) {
          c = e;
        }
      }
      var h;
      if (c) {
        this.reject(c);
      } else {
        try {
          f(b);
        } catch (e) {
          h = e;
        }
        p.checkStatus(d.status) ? h ? this.reject(h) : this.resolve(b) : (c = h ? new a("Unable to load " + b.url + " status: " + d.status + " and an error in handleAs: transformation of response", b) : new a("Unable to load " + b.url + " status: " + d.status, b), this.reject(c));
      }
    }
    function q(a) {
      return this.xhr.getResponseHeader(a);
    }
    function l(g, f, x) {
      var u = m("native-formdata") && f && f.data && f.data instanceof FormData, y = p.parseArgs(g, p.deepCreate(t, f), u);
      g = y.url;
      f = y.options;
      var C, w = p.deferred(y, c, b, h, e, function() {
        C && C();
      }), E = y.xhr = l._create();
      if (!E) {
        return w.cancel(new a("XHR was not created")), x ? w : w.promise;
      }
      y.getHeader = q;
      d && (C = d(E, w, y));
      var J = "undefined" === typeof f.data ? null : f.data, U = !f.sync, Q = f.method;
      try {
        E.open(Q, g, U, f.user || r, f.password || r);
        f.withCredentials && (E.withCredentials = f.withCredentials);
        m("native-response-type") && f.handleAs in k && (E.responseType = k[f.handleAs]);
        var I = f.headers;
        g = u ? !1 : "application/x-www-form-urlencoded";
        if (I) {
          for (var R in I) {
            "content-type" === R.toLowerCase() ? g = I[R] : I[R] && E.setRequestHeader(R, I[R]);
          }
        }
        g && !1 !== g && E.setRequestHeader("Content-Type", g);
        I && "X-Requested-With" in I || E.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        p.notify && p.notify.emit("send", y, w.promise.cancel);
        E.send(J);
      } catch (N) {
        w.reject(N);
      }
      n(w);
      E = null;
      return x ? w : w.promise;
    }
    m.add("native-xhr", function() {
      return "undefined" !== typeof XMLHttpRequest;
    });
    m.add("dojo-force-activex-xhr", function() {
      return m("activex") && "file:" === window.location.protocol;
    });
    m.add("native-xhr2", function() {
      if (m("native-xhr") && !m("dojo-force-activex-xhr")) {
        var a = new XMLHttpRequest;
        return "undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload);
      }
    });
    m.add("native-formdata", function() {
      return "undefined" !== typeof FormData;
    });
    m.add("native-response-type", function() {
      return m("native-xhr") && "undefined" !== typeof(new XMLHttpRequest).responseType;
    });
    m.add("native-xhr2-blob", function() {
      if (m("native-response-type")) {
        var a = new XMLHttpRequest;
        a.open("GET", "/", !0);
        a.responseType = "blob";
        var b = a.responseType;
        a.abort();
        return "blob" === b;
      }
    });
    var k = {blob:m("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, b, h, d, c;
    m("native-xhr2") ? (b = function(a) {
      return !this.isFulfilled();
    }, c = function(a, b) {
      b.xhr.abort();
    }, d = function(b, c, d) {
      function e(a) {
        c.handleResponse(d);
      }
      function f(b) {
        b = new a("Unable to load " + d.url + " status: " + b.target.status, d);
        c.handleResponse(d, b);
      }
      function h(a) {
        a.lengthComputable ? (d.loaded = a.loaded, d.total = a.total, c.progress(d)) : 3 === d.xhr.readyState && (d.loaded = "loaded" in a ? a.loaded : a.position, c.progress(d));
      }
      b.addEventListener("load", e, !1);
      b.addEventListener("error", f, !1);
      b.addEventListener("progress", h, !1);
      return function() {
        b.removeEventListener("load", e, !1);
        b.removeEventListener("error", f, !1);
        b.removeEventListener("progress", h, !1);
        b = null;
      };
    }) : (b = function(a) {
      return a.xhr.readyState;
    }, h = function(a) {
      return 4 === a.xhr.readyState;
    }, c = function(a, b) {
      var c = b.xhr, d = typeof c.abort;
      "function" !== d && "object" !== d && "unknown" !== d || c.abort();
    });
    var r, t = {data:null, query:null, sync:!1, method:"GET"};
    l._create = function() {
      throw Error("XMLHTTP not available");
    };
    if (m("native-xhr") && !m("dojo-force-activex-xhr")) {
      l._create = function() {
        return new XMLHttpRequest;
      };
    } else {
      if (m("activex")) {
        try {
          new ActiveXObject("Msxml2.XMLHTTP"), l._create = function() {
            return new ActiveXObject("Msxml2.XMLHTTP");
          };
        } catch (g) {
          try {
            new ActiveXObject("Microsoft.XMLHTTP"), l._create = function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            };
          } catch (v) {
          }
        }
      }
    }
    p.addCommonMethods(l);
    return l;
  });
}, "dojo/request/handlers":function() {
  define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(a, n, f, p) {
    function m(a) {
      var d = b[a.options.handleAs];
      a.data = d ? d(a) : a.data || a.text;
      return a;
    }
    p.add("activex", "undefined" !== typeof ActiveXObject);
    p.add("dom-parser", function(a) {
      return "DOMParser" in a;
    });
    var e;
    if (p("activex")) {
      var q = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], l;
      e = function(a) {
        function b(a) {
          try {
            var d = new ActiveXObject(a);
            d.async = !1;
            d.loadXML(e);
            c = d;
            l = a;
          } catch (f) {
            return !1;
          }
          return !0;
        }
        var c = a.data, e = a.text;
        c && p("dom-qsa2.1") && !c.querySelectorAll && p("dom-parser") && (c = (new DOMParser).parseFromString(e, "application/xml"));
        c && c.documentElement || l && b(l) || f.some(q, b);
        return c;
      };
    }
    var k = function(a) {
      return p("native-xhr2-blob") || "blob" !== a.options.handleAs || "undefined" === typeof Blob ? a.xhr.response : new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")});
    }, b = {javascript:function(a) {
      return n.eval(a.text || "");
    }, json:function(b) {
      return a.parse(b.text || null);
    }, xml:e, blob:k, arraybuffer:k, document:k};
    m.register = function(a, d) {
      b[a] = d;
    };
    return m;
  });
}, "dojo/_base/fx":function() {
  define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function(a, n, f, p, m, e, q, l, k) {
    var b = f.mixin, h = {}, d = h._Line = function(a, b) {
      this.start = a;
      this.end = b;
    };
    d.prototype.getValue = function(a) {
      return (this.end - this.start) * a + this.start;
    };
    var c = h.Animation = function(a) {
      b(this, a);
      f.isArray(this.curve) && (this.curve = new d(this.curve[0], this.curve[1]));
    };
    c.prototype = new p;
    f.extend(c, {duration:350, repeat:0, rate:20, _percent:0, _startRepeatCount:0, _getStep:function() {
      var a = this._percent, b = this.easing;
      return b ? b(a) : a;
    }, _fire:function(a, b) {
      var c = b || [];
      if (this[a]) {
        if (n.debugAtAllCosts) {
          this[a].apply(this, c);
        } else {
          try {
            this[a].apply(this, c);
          } catch (d) {
            console.error("exception in animation handler for:", a), console.error(d);
          }
        }
      }
      return this;
    }, play:function(a, b) {
      this._delayTimer && this._clearTimer();
      if (b) {
        this._stopTimer(), this._active = this._paused = !1, this._percent = 0;
      } else {
        if (this._active && !this._paused) {
          return this;
        }
      }
      this._fire("beforeBegin", [this.node]);
      var c = a || this.delay, d = f.hitch(this, "_play", b);
      if (0 < c) {
        return this._delayTimer = setTimeout(d, c), this;
      }
      d();
      return this;
    }, _play:function(a) {
      this._delayTimer && this._clearTimer();
      this._startTime = (new Date).valueOf();
      this._paused && (this._startTime -= this.duration * this._percent);
      this._active = !0;
      this._paused = !1;
      a = this.curve.getValue(this._getStep());
      this._percent || (this._startRepeatCount || (this._startRepeatCount = this.repeat), this._fire("onBegin", [a]));
      this._fire("onPlay", [a]);
      this._cycle();
      return this;
    }, pause:function() {
      this._delayTimer && this._clearTimer();
      this._stopTimer();
      if (!this._active) {
        return this;
      }
      this._paused = !0;
      this._fire("onPause", [this.curve.getValue(this._getStep())]);
      return this;
    }, gotoPercent:function(a, b) {
      this._stopTimer();
      this._active = this._paused = !0;
      this._percent = a;
      b && this.play();
      return this;
    }, stop:function(a) {
      this._delayTimer && this._clearTimer();
      if (!this._timer) {
        return this;
      }
      this._stopTimer();
      a && (this._percent = 1);
      this._fire("onStop", [this.curve.getValue(this._getStep())]);
      this._active = this._paused = !1;
      return this;
    }, destroy:function() {
      this.stop();
    }, status:function() {
      return this._active ? this._paused ? "paused" : "playing" : "stopped";
    }, _cycle:function() {
      if (this._active) {
        var a = (new Date).valueOf(), a = 0 === this.duration ? 1 : (a - this._startTime) / this.duration;
        1 <= a && (a = 1);
        this._percent = a;
        this.easing && (a = this.easing(a));
        this._fire("onAnimate", [this.curve.getValue(a)]);
        1 > this._percent ? this._startTimer() : (this._active = !1, 0 < this.repeat ? (this.repeat--, this.play(null, !0)) : -1 == this.repeat ? this.play(null, !0) : this._startRepeatCount && (this.repeat = this._startRepeatCount, this._startRepeatCount = 0), this._percent = 0, this._fire("onEnd", [this.node]), !this.repeat && this._stopTimer());
      }
      return this;
    }, _clearTimer:function() {
      clearTimeout(this._delayTimer);
      delete this._delayTimer;
    }});
    var r = 0, t = null, g = {run:function() {
    }};
    f.extend(c, {_startTimer:function() {
      this._timer || (this._timer = e.after(g, "run", f.hitch(this, "_cycle"), !0), r++);
      t || (t = setInterval(f.hitch(g, "run"), this.rate));
    }, _stopTimer:function() {
      this._timer && (this._timer.remove(), this._timer = null, r--);
      0 >= r && (clearInterval(t), t = null, r = 0);
    }});
    var v = q("ie") ? function(a) {
      var b = a.style;
      b.width.length || "auto" != k.get(a, "width") || (b.width = "auto");
    } : function() {
    };
    h._fade = function(a) {
      a.node = l.byId(a.node);
      var c = b({properties:{}}, a);
      a = c.properties.opacity = {};
      a.start = "start" in c ? c.start : function() {
        return +k.get(c.node, "opacity") || 0;
      };
      a.end = c.end;
      a = h.animateProperty(c);
      e.after(a, "beforeBegin", f.partial(v, c.node), !0);
      return a;
    };
    h.fadeIn = function(a) {
      return h._fade(b({end:1}, a));
    };
    h.fadeOut = function(a) {
      return h._fade(b({end:0}, a));
    };
    h._defaultEasing = function(a) {
      return .5 + Math.sin((a + 1.5) * Math.PI) / 2;
    };
    var x = function(a) {
      this._properties = a;
      for (var b in a) {
        var c = a[b];
        c.start instanceof m && (c.tempColor = new m);
      }
    };
    x.prototype.getValue = function(a) {
      var b = {}, c;
      for (c in this._properties) {
        var d = this._properties[c], e = d.start;
        e instanceof m ? b[c] = m.blendColors(e, d.end, a, d.tempColor).toCss() : f.isArray(e) || (b[c] = (d.end - e) * a + e + ("opacity" != c ? d.units || "px" : 0));
      }
      return b;
    };
    h.animateProperty = function(d) {
      var g = d.node = l.byId(d.node);
      d.easing || (d.easing = a._defaultEasing);
      d = new c(d);
      e.after(d, "beforeBegin", f.hitch(d, function() {
        var a = {}, c;
        for (c in this.properties) {
          var d = function(a, b) {
            var c = {height:a.offsetHeight, width:a.offsetWidth}[b];
            if (void 0 !== c) {
              return c;
            }
            c = k.get(a, b);
            return "opacity" == b ? +c : h ? c : parseFloat(c);
          };
          if ("width" == c || "height" == c) {
            this.node.display = "block";
          }
          var e = this.properties[c];
          f.isFunction(e) && (e = e(g));
          e = a[c] = b({}, f.isObject(e) ? e : {end:e});
          f.isFunction(e.start) && (e.start = e.start(g));
          f.isFunction(e.end) && (e.end = e.end(g));
          var h = 0 <= c.toLowerCase().indexOf("color");
          "end" in e ? "start" in e || (e.start = d(g, c)) : e.end = d(g, c);
          h ? (e.start = new m(e.start), e.end = new m(e.end)) : e.start = "opacity" == c ? +e.start : parseFloat(e.start);
        }
        this.curve = new x(a);
      }), !0);
      e.after(d, "onAnimate", f.hitch(k, "set", d.node), !0);
      return d;
    };
    h.anim = function(a, b, d, e, f, g) {
      return h.animateProperty({node:a, duration:d || c.prototype.duration, properties:b, easing:e, onEnd:f}).play(g || 0);
    };
    b(a, h);
    a._Animation = c;
    return h;
  });
}, "dojo/_base/loader":function() {
  define("./kernel ../has require module ../json ./lang ./array".split(" "), function(a, n, f, p, m, e, q) {
    var l = function(a) {
      return a.replace(/\./g, "/");
    }, k = /\/\/>>built/, b = [], h = [], d = function(a, d, e) {
      b.push(e);
      q.forEach(a.split(","), function(a) {
        a = N(a, d.module);
        h.push(a);
        B(a);
      });
      c();
    }, c = function() {
      var a, c;
      for (c in I) {
        if (a = I[c], void 0 === a.noReqPluginCheck && (a.noReqPluginCheck = /loadInit\!/.test(c) || /require\!/.test(c) ? 1 : 0), !a.executed && !a.noReqPluginCheck && a.injected == C) {
          return;
        }
      }
      Z(function() {
        var a = b;
        b = [];
        q.forEach(a, function(a) {
          a(1);
        });
      });
    }, r = function(b, c, d) {
      var e = /\(|\)/g, f = 1;
      for (e.lastIndex = c;(c = e.exec(b)) && (f = ")" == c[0] ? f - 1 : f + 1, 0 != f);) {
      }
      if (0 != f) {
        throw "unmatched paren around character " + e.lastIndex + " in: " + b;
      }
      return [a.trim(b.substring(d, e.lastIndex)) + ";\n", e.lastIndex];
    }, t = /(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, g = /(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg, v = /(^|\s)(require|define)\s*\(/m, x = function(a, b) {
      var c, d, e, f = [], h = [];
      c = [];
      for (b = b || a.replace(t, function(a) {
        g.lastIndex = v.lastIndex = 0;
        return g.test(a) || v.test(a) ? "" : a;
      });c = g.exec(b);) {
        d = g.lastIndex, e = d - c[0].length, d = r(b, d, e), "loadInit" == c[2] ? f.push(d[0]) : h.push(d[0]), g.lastIndex = d[1];
      }
      c = f.concat(h);
      return c.length || !v.test(b) ? [a.replace(/(^|\s)dojo\.loadInit\s*\(/g, "\n0 \x26\x26 dojo.loadInit("), c.join(""), c] : 0;
    }, u = f.initSyncLoader(d, c, function(a, b) {
      var c, d, e = [], f = [];
      if (k.test(b) || !(c = x(b))) {
        return 0;
      }
      d = a.mid + "-*loadInit";
      for (var g in N("dojo", a).result.scopeMap) {
        e.push(g), f.push('"' + g + '"');
      }
      return "// xdomain rewrite of " + a.mid + "\ndefine('" + d + "',{\n\tnames:" + m.stringify(e) + ",\n\tdef:function(" + e.join(",") + "){" + c[1] + "}});\n\ndefine(" + m.stringify(e.concat(["dojo/loadInit!" + d])) + ", function(" + e.join(",") + "){\n" + c[0] + "});";
    }), y = u.sync, C = u.requested, w = u.arrived, E = u.nonmodule, J = u.executing, U = u.executed, Q = u.syncExecStack, I = u.modules, R = u.execQ, N = u.getModule, B = u.injectModule, H = u.setArrived, O = u.signal, D = u.finishExec, A = u.execModule, L = u.getLegacyMode, Z = u.guardCheckComplete, d = u.dojoRequirePlugin;
    a.provide = function(a) {
      var b = Q[0], c = e.mixin(N(l(a), f.module), {executed:J, result:e.getObject(a, !0)});
      H(c);
      b && (b.provides || (b.provides = [])).push(function() {
        c.result = e.getObject(a);
        delete c.provides;
        c.executed !== U && D(c);
      });
      return c.result;
    };
    n.add("config-publishRequireResult", 1, 0, 0);
    a.require = function(a, b) {
      var c = function(a, b) {
        var c = N(l(a), f.module);
        if (Q.length && Q[0].finish) {
          Q[0].finish.push(a);
        } else {
          if (c.executed) {
            return c.result;
          }
          b && (c.result = E);
          var d = L();
          B(c);
          d = L();
          c.executed !== U && c.injected === w && u.guardCheckComplete(function() {
            A(c);
          });
          if (c.executed) {
            return c.result;
          }
          d == y ? c.cjs ? R.unshift(c) : Q.length && (Q[0].finish = [a]) : R.push(c);
        }
      }(a, b);
      n("config-publishRequireResult") && !e.exists(a) && void 0 !== c && e.setObject(a, c);
      return c;
    };
    a.loadInit = function(a) {
      a();
    };
    a.registerModulePath = function(a, b) {
      var c = {};
      c[a.replace(/\./g, "/")] = b;
      f({paths:c});
    };
    a.platformRequire = function(b) {
      b = (b.common || []).concat(b[a._name] || b["default"] || []);
      for (var c;b.length;) {
        e.isArray(c = b.shift()) ? a.require.apply(a, c) : a.require(c);
      }
    };
    a.requireIf = a.requireAfterIf = function(b, c, d) {
      b && a.require(c, d);
    };
    a.requireLocalization = function(a, b, c) {
      f(["../i18n"], function(d) {
        d.getLocalization(a, b, c);
      });
    };
    return {extractLegacyApiApplications:x, require:d, loadInit:function(b, c, e) {
      c([b], function(b) {
        c(b.names, function() {
          for (var f = "", g = [], h = 0;h < arguments.length;h++) {
            f += "var " + b.names[h] + "\x3d arguments[" + h + "]; ", g.push(arguments[h]);
          }
          eval(f);
          var k = c.module, m = [], n, f = {provide:function(a) {
            a = l(a);
            a = N(a, k);
            a !== k && H(a);
          }, require:function(a, b) {
            a = l(a);
            b && (N(a, k).result = E);
            m.push(a);
          }, requireLocalization:function(b, c, d) {
            n || (n = ["dojo/i18n"]);
            d = (d || a.locale).toLowerCase();
            b = l(b) + "/nls/" + (/root/i.test(d) ? "" : d + "/") + l(c);
            N(b, k).isXd && n.push("dojo/i18n!" + b);
          }, loadInit:function(a) {
            a();
          }}, h = {}, q;
          try {
            for (q in f) {
              h[q] = a[q], a[q] = f[q];
            }
            b.def.apply(null, g);
          } catch (r) {
            O("error", [{src:p.id, id:"failedDojoLoadInit"}, r]);
          } finally {
            for (q in f) {
              a[q] = h[q];
            }
          }
          n && (m = m.concat(n));
          m.length ? d(m.join(","), c, e) : e();
        });
      });
    }};
  });
}}});
(function() {
  var a = this.require;
  a({cache:{}});
  !a.async && a(["dojo"]);
  a.boot && a.apply(null, a.boot);
})();

//# sourceMappingURL=dojo.js.map
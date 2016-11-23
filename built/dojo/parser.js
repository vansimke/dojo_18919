//>>built
define("dojo/parser", "require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(E, y, t, x, M, N, O, P, K, Q, R, F, G, L, S, T) {
  function H(b) {
    return eval("(" + b + ")");
  }
  function U(b) {
    var a = b._nameCaseMap, e = b.prototype;
    if (!a || a._extendCnt < A) {
      var a = b._nameCaseMap = {}, g;
      for (g in e) {
        "_" !== g.charAt(0) && (a[g.toLowerCase()] = g);
      }
      a._extendCnt = A;
    }
    return a;
  }
  function I(b, a) {
    a || (a = E);
    var e = a._dojoParserCtorMap || (a._dojoParserCtorMap = {}), g = b.join();
    if (!e[g]) {
      for (var d = [], f = 0, w = b.length;f < w;f++) {
        var m = b[f];
        d[d.length] = e[m] = e[m] || t.getObject(m) || ~m.indexOf("/") && a(m);
      }
      f = d.shift();
      e[g] = d.length ? f.createSubclass ? f.createSubclass(d) : f.extend.apply(f, d) : f;
    }
    return e[g];
  }
  new Date("X");
  var A = 0;
  K.after(t, "extend", function() {
    A++;
  }, !0);
  var J = {_clearCache:function() {
    A++;
    _ctorMap = {};
  }, _functionFromScript:function(b, a) {
    var e = "", g = "", d = b.getAttribute(a + "args") || b.getAttribute("args"), f = b.getAttribute("with"), d = (d || "").split(/\s*,\s*/);
    f && f.length && x.forEach(f.split(/\s*,\s*/), function(a) {
      e += "with(" + a + "){";
      g += "}";
    });
    return new Function(d, e + b.innerHTML + g);
  }, instantiate:function(b, a, e) {
    a = a || {};
    e = e || {};
    var g = (e.scope || y._scopeName) + "Type", d = "data-" + (e.scope || y._scopeName) + "-", f = d + "type", w = d + "mixins", m = [];
    x.forEach(b, function(b) {
      var d = g in a ? a[g] : b.getAttribute(f) || b.getAttribute(g);
      if (d) {
        var e = b.getAttribute(w), d = e ? [d].concat(e.split(/\s*,\s*/)) : [d];
        m.push({node:b, types:d});
      }
    });
    return this._instantiate(m, a, e);
  }, _instantiate:function(b, a, e, g) {
    function d(b) {
      a._started || e.noStart || x.forEach(b, function(a) {
        "function" !== typeof a.startup || a._started || a.startup();
      });
      return b;
    }
    b = x.map(b, function(b) {
      var d = b.ctor || I(b.types, e.contextRequire);
      if (!d) {
        throw Error("Unable to resolve constructor for: '" + b.types.join() + "'");
      }
      return this.construct(d, b.node, a, e, b.scripts, b.inherited);
    }, this);
    return g ? Q(b).then(d) : d(b);
  }, construct:function(b, a, e, g, d, f) {
    function w(a) {
      v && t.setObject(v, a);
      for (l = 0;l < z.length;l++) {
        K[z[l].advice || "after"](a, z[l].method, t.hitch(a, z[l].func), !0);
      }
      for (l = 0;l < B.length;l++) {
        B[l].call(a);
      }
      for (l = 0;l < C.length;l++) {
        a.watch(C[l].prop, C[l].func);
      }
      for (l = 0;l < D.length;l++) {
        S(a, D[l].event, D[l].func);
      }
      return a;
    }
    var m = b && b.prototype;
    g = g || {};
    var p = {};
    g.defaults && t.mixin(p, g.defaults);
    f && t.mixin(p, f);
    var r;
    G("dom-attributes-explicit") ? r = a.attributes : G("dom-attributes-specified-flag") ? r = x.filter(a.attributes, function(a) {
      return a.specified;
    }) : (f = (/^input$|^img$/i.test(a.nodeName) ? a : a.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), r = x.map(f.split(/\s+/), function(b) {
      var d = b.toLowerCase();
      return {name:b, value:"LI" == a.nodeName && "value" == b || "enctype" == d ? a.getAttribute(d) : a.getAttributeNode(d).value};
    }));
    var k = g.scope || y._scopeName;
    f = "data-" + k + "-";
    var c = {};
    "dojo" !== k && (c[f + "props"] = "data-dojo-props", c[f + "type"] = "data-dojo-type", c[f + "mixins"] = "data-dojo-mixins", c[k + "type"] = "dojotype", c[f + "id"] = "data-dojo-id");
    for (var l = 0, h, k = [], v, q;h = r[l++];) {
      var n = h.name, u = n.toLowerCase();
      h = h.value;
      switch(c[u] || u) {
        case "data-dojo-type":
        ;
        case "dojotype":
        ;
        case "data-dojo-mixins":
          break;
        case "data-dojo-props":
          q = h;
          break;
        case "data-dojo-id":
        ;
        case "jsid":
          v = h;
          break;
        case "data-dojo-attach-point":
        ;
        case "dojoattachpoint":
          p.dojoAttachPoint = h;
          break;
        case "data-dojo-attach-event":
        ;
        case "dojoattachevent":
          p.dojoAttachEvent = h;
          break;
        case "class":
          p["class"] = a.className;
          break;
        case "style":
          p.style = a.style && a.style.cssText;
          break;
        default:
          if (n in m || (n = U(b)[u] || n), n in m) {
            switch(typeof m[n]) {
              case "string":
                p[n] = h;
                break;
              case "number":
                p[n] = h.length ? Number(h) : NaN;
                break;
              case "boolean":
                p[n] = "false" != h.toLowerCase();
                break;
              case "function":
                "" === h || -1 != h.search(/[^\w\.]+/i) ? p[n] = new Function(h) : p[n] = t.getObject(h, !1) || new Function(h);
                k.push(n);
                break;
              default:
                u = m[n], p[n] = u && "length" in u ? h ? h.split(/\s*,\s*/) : [] : u instanceof Date ? "" == h ? new Date("") : "now" == h ? new Date : R.fromISOString(h) : u instanceof P ? y.baseUrl + h : H(h);
            }
          } else {
            p[n] = h;
          }
        ;
      }
    }
    for (r = 0;r < k.length;r++) {
      c = k[r].toLowerCase(), a.removeAttribute(c), a[c] = null;
    }
    if (q) {
      try {
        q = H.call(g.propsThis, "{" + q + "}"), t.mixin(p, q);
      } catch (V) {
        throw Error(V.toString() + " in data-dojo-props\x3d'" + q + "'");
      }
    }
    t.mixin(p, e);
    d || (d = b && (b._noScript || m._noScript) ? [] : L("\x3e script[type^\x3d'dojo/']", a));
    var z = [], B = [], C = [], D = [];
    if (d) {
      for (l = 0;l < d.length;l++) {
        c = d[l], a.removeChild(c), e = c.getAttribute(f + "event") || c.getAttribute("event"), g = c.getAttribute(f + "prop"), q = c.getAttribute(f + "method"), k = c.getAttribute(f + "advice"), r = c.getAttribute("type"), c = this._functionFromScript(c, f), e ? "dojo/connect" == r ? z.push({method:e, func:c}) : "dojo/on" == r ? D.push({event:e, func:c}) : p[e] = c : "dojo/aspect" == r ? z.push({method:q, advice:k, func:c}) : "dojo/watch" == r ? C.push({prop:g, func:c}) : B.push(c);
      }
    }
    b = (d = b.markupFactory || m.markupFactory) ? d(p, a, b) : new b(p, a);
    return b.then ? b.then(w) : w(b);
  }, scan:function(b, a) {
    function e(a) {
      if (!a.inherited) {
        a.inherited = {};
        var b = a.node, d = e(a.parent), b = {dir:b.getAttribute("dir") || d.dir, lang:b.getAttribute("lang") || d.lang, textDir:b.getAttribute(r) || d.textDir}, c;
        for (c in b) {
          b[c] && (a.inherited[c] = b[c]);
        }
      }
      return a.inherited;
    }
    var g = [], d = [], f = {}, w = (a.scope || y._scopeName) + "Type", m = "data-" + (a.scope || y._scopeName) + "-", p = m + "type", r = m + "textdir", m = m + "mixins", k = b.firstChild, c = a.inherited;
    if (!c) {
      var l = function(a, b) {
        return a.getAttribute && a.getAttribute(b) || a.parentNode && l(a.parentNode, b);
      }, c = {dir:l(b, "dir"), lang:l(b, "lang"), textDir:l(b, r)}, h;
      for (h in c) {
        c[h] || delete c[h];
      }
    }
    for (var c = {inherited:c}, v, q;;) {
      if (k) {
        if (1 != k.nodeType) {
          k = k.nextSibling;
        } else {
          if (v && "script" == k.nodeName.toLowerCase()) {
            (n = k.getAttribute("type")) && /^dojo\/\w/i.test(n) && v.push(k), k = k.nextSibling;
          } else {
            if (q) {
              k = k.nextSibling;
            } else {
              var n = k.getAttribute(p) || k.getAttribute(w);
              h = k.firstChild;
              if (n || h && (3 != h.nodeType || h.nextSibling)) {
                q = null;
                if (n) {
                  var u = k.getAttribute(m);
                  v = u ? [n].concat(u.split(/\s*,\s*/)) : [n];
                  try {
                    q = I(v, a.contextRequire);
                  } catch (B) {
                  }
                  q || x.forEach(v, function(a) {
                    ~a.indexOf("/") && !f[a] && (f[a] = !0, d[d.length] = a);
                  });
                  u = q && !q.prototype._noScript ? [] : null;
                  c = {types:v, ctor:q, parent:c, node:k, scripts:u};
                  c.inherited = e(c);
                  g.push(c);
                } else {
                  c = {node:k, scripts:v, parent:c};
                }
                v = u;
                q = k.stopParser || q && q.prototype.stopParser && !a.template;
                k = h;
              } else {
                k = k.nextSibling;
              }
            }
          }
        }
      } else {
        if (!c || !c.node) {
          break;
        }
        k = c.node.nextSibling;
        q = !1;
        c = c.parent;
        v = c.scripts;
      }
    }
    var t = new F;
    d.length ? (G("dojo-debug-messages") && console.warn("WARNING: Modules being Auto-Required: " + d.join(", ")), (a.contextRequire || E)(d, function() {
      t.resolve(x.filter(g, function(b) {
        if (!b.ctor) {
          try {
            b.ctor = I(b.types, a.contextRequire);
          } catch (d) {
          }
        }
        for (var c = b.parent;c && !c.types;) {
          c = c.parent;
        }
        var f = b.ctor && b.ctor.prototype;
        b.instantiateChildren = !(f && f.stopParser && !a.template);
        b.instantiate = !c || c.instantiate && c.instantiateChildren;
        return b.instantiate;
      }));
    })) : t.resolve(g);
    return t.promise;
  }, _require:function(b, a) {
    var e = H("{" + b.innerHTML + "}"), g = [], d = [], f = new F, w = a && a.contextRequire || E, m;
    for (m in e) {
      g.push(m), d.push(e[m]);
    }
    w(d, function() {
      for (var a = 0;a < g.length;a++) {
        t.setObject(g[a], arguments[a]);
      }
      f.resolve(arguments);
    });
    return f.promise;
  }, _scanAmd:function(b, a) {
    var e = new F, g = e.promise;
    e.resolve(!0);
    var d = this;
    L("script[type\x3d'dojo/require']", b).forEach(function(b) {
      g = g.then(function() {
        return d._require(b, a);
      });
      b.parentNode.removeChild(b);
    });
    return g;
  }, parse:function(b, a) {
    !b || "string" == typeof b || "nodeType" in b || (a = b, b = a.rootNode);
    var e = b ? N.byId(b) : O.body();
    a = a || {};
    var g = a.template ? {template:!0} : {}, d = [], f = this, w = this._scanAmd(e, a).then(function() {
      return f.scan(e, a);
    }).then(function(b) {
      return f._instantiate(b, g, a, !0);
    }).then(function(a) {
      return d = d.concat(a);
    }).otherwise(function(a) {
      console.error("dojo/parser::parse() error", a);
      throw a;
    });
    t.mixin(d, w);
    return d;
  }};
  y.parser = J;
  M.parseOnLoad && T(100, J, "parse");
  return J;
});

//# sourceMappingURL=parser.js.map
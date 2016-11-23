//>>built
define("dojo/selector/acme", ["../dom", "../sniff", "../_base/array", "../_base/lang", "../_base/window"], function(O, m, F, G, y) {
  var P = G.trim, L = F.forEach, Q = "BackCompat" == y.doc.compatMode, u = !1, z = function() {
    return !0;
  }, M = function(b) {
    b = 0 <= "\x3e~+".indexOf(b.slice(-1)) ? b + " * " : b + " ";
    for (var a = function(a, c) {
      return P(b.slice(a, c));
    }, c = [], d = -1, f = -1, e = -1, g = -1, n = -1, r = -1, A = -1, H, B = "", l = "", m, k = 0, t = b.length, h = null, p = null, q = function() {
      0 <= r && (h.id = a(r, k).replace(/\\/g, ""), r = -1);
      if (0 <= A) {
        var b = A == k ? null : a(A, k);
        h[0 > "\x3e~+".indexOf(b) ? "tag" : "oper"] = b;
        A = -1;
      }
      0 <= n && (h.classes.push(a(n + 1, k).replace(/\\/g, "")), n = -1);
    };B = l, l = b.charAt(k), k < t;k++) {
      "\\" != B && (h || (m = k, h = {query:null, pseudos:[], attrs:[], classes:[], tag:null, oper:null, id:null, getTag:function() {
        return u ? this.otag : this.tag;
      }}, A = k), H ? l == H && (H = null) : "'" == l || '"' == l ? H = l : 0 <= d ? "]" == l ? (p.attr ? p.matchFor = a(e || d + 1, k) : p.attr = a(d + 1, k), !(d = p.matchFor) || '"' != d.charAt(0) && "'" != d.charAt(0) || (p.matchFor = d.slice(1, -1)), p.matchFor && (p.matchFor = p.matchFor.replace(/\\/g, "")), h.attrs.push(p), p = null, d = e = -1) : "\x3d" == l && (e = 0 <= "|~^$*".indexOf(B) ? B : "", p.type = e + l, p.attr = a(d + 1, k - e.length), e = k + 1) : 0 <= f ? ")" == l && (0 <= g && 
      (p.value = a(f + 1, k)), g = f = -1) : "#" == l ? (q(), r = k + 1) : "." == l ? (q(), n = k) : ":" == l ? (q(), g = k) : "[" == l ? (q(), d = k, p = {}) : "(" == l ? (0 <= g && (p = {name:a(g + 1, k), value:null}, h.pseudos.push(p)), f = k) : " " == l && B != l && (q(), 0 <= g && h.pseudos.push({name:a(g + 1, k)}), h.loops = h.pseudos.length || h.attrs.length || h.classes.length, h.oquery = h.query = a(m, k), h.otag = h.tag = h.oper ? null : h.tag || "*", h.tag && (h.tag = h.tag.toUpperCase()), 
      c.length && c[c.length - 1].oper && (h.infixOper = c.pop(), h.query = h.infixOper.query + " " + h.query), c.push(h), h = null));
    }
    return c;
  }, v = function(b, a) {
    return b ? a ? function() {
      return b.apply(window, arguments) && a.apply(window, arguments);
    } : b : a;
  }, C = function(b, a) {
    var c = a || [];
    b && c.push(b);
    return c;
  }, I = function(b) {
    return 1 == b.nodeType;
  }, w = function(b, a) {
    return b ? "class" == a ? b.className || "" : "for" == a ? b.htmlFor || "" : "style" == a ? b.style.cssText || "" : (u ? b.getAttribute(a) : b.getAttribute(a, 2)) || "" : "";
  }, R = {"*\x3d":function(b, a) {
    return function(c) {
      return 0 <= w(c, b).indexOf(a);
    };
  }, "^\x3d":function(b, a) {
    return function(c) {
      return 0 == w(c, b).indexOf(a);
    };
  }, "$\x3d":function(b, a) {
    return function(c) {
      c = " " + w(c, b);
      var d = c.lastIndexOf(a);
      return -1 < d && d == c.length - a.length;
    };
  }, "~\x3d":function(b, a) {
    var c = " " + a + " ";
    return function(a) {
      return 0 <= (" " + w(a, b) + " ").indexOf(c);
    };
  }, "|\x3d":function(b, a) {
    var c = a + "-";
    return function(d) {
      d = w(d, b);
      return d == a || 0 == d.indexOf(c);
    };
  }, "\x3d":function(b, a) {
    return function(c) {
      return w(c, b) == a;
    };
  }};
  G = y.doc.documentElement;
  var J = !(G.nextElementSibling || "nextElementSibling" in G), D = J ? "nextSibling" : "nextElementSibling", ea = J ? "previousSibling" : "previousElementSibling", E = J ? I : z, S = function(b) {
    for (;b = b[ea];) {
      if (E(b)) {
        return !1;
      }
    }
    return !0;
  }, T = function(b) {
    for (;b = b[D];) {
      if (E(b)) {
        return !1;
      }
    }
    return !0;
  }, K = function(b) {
    var a = b.parentNode, a = 7 != a.nodeType ? a : a.nextSibling, c = 0, d = a.children || a.childNodes, f = b._i || b.getAttribute("_i") || -1, e = a._l || ("undefined" !== typeof a.getAttribute ? a.getAttribute("_l") : -1);
    if (!d) {
      return -1;
    }
    d = d.length;
    if (e == d && 0 <= f && 0 <= e) {
      return f;
    }
    m("ie") && "undefined" !== typeof a.setAttribute ? a.setAttribute("_l", d) : a._l = d;
    f = -1;
    for (a = a.firstElementChild || a.firstChild;a;a = a[D]) {
      E(a) && (m("ie") ? a.setAttribute("_i", ++c) : a._i = ++c, b === a && (f = c));
    }
    return f;
  }, fa = function(b) {
    return !(K(b) % 2);
  }, ga = function(b) {
    return K(b) % 2;
  }, U = {checked:function(b, a) {
    return function(a) {
      return !("checked" in a ? !a.checked : !a.selected);
    };
  }, disabled:function(b, a) {
    return function(a) {
      return a.disabled;
    };
  }, enabled:function(b, a) {
    return function(a) {
      return !a.disabled;
    };
  }, "first-child":function() {
    return S;
  }, "last-child":function() {
    return T;
  }, "only-child":function(b, a) {
    return function(a) {
      return S(a) && T(a);
    };
  }, empty:function(b, a) {
    return function(a) {
      var b = a.childNodes;
      for (a = a.childNodes.length - 1;0 <= a;a--) {
        var f = b[a].nodeType;
        if (1 === f || 3 == f) {
          return !1;
        }
      }
      return !0;
    };
  }, contains:function(b, a) {
    var c = a.charAt(0);
    if ('"' == c || "'" == c) {
      a = a.slice(1, -1);
    }
    return function(b) {
      return 0 <= b.innerHTML.indexOf(a);
    };
  }, not:function(b, a) {
    var c = M(a)[0], d = {el:1};
    "*" != c.tag && (d.tag = 1);
    c.classes.length || (d.classes = 1);
    var f = t(c, d);
    return function(a) {
      return !f(a);
    };
  }, "nth-child":function(b, a) {
    var c = parseInt;
    if ("odd" == a) {
      return ga;
    }
    if ("even" == a) {
      return fa;
    }
    if (-1 != a.indexOf("n")) {
      var d = a.split("n", 2), f = d[0] ? "-" == d[0] ? -1 : c(d[0]) : 1, e = d[1] ? c(d[1]) : 0, g = 0, n = -1;
      0 < f ? 0 > e ? e = e % f && f + e % f : 0 < e && (e >= f && (g = e - e % f), e %= f) : 0 > f && (f *= -1, 0 < e && (n = e, e %= f));
      if (0 < f) {
        return function(a) {
          a = K(a);
          return a >= g && (0 > n || a <= n) && a % f == e;
        };
      }
      a = e;
    }
    var r = c(a);
    return function(a) {
      return K(a) == r;
    };
  }}, ha = 9 > m("ie") || 9 == m("ie") && m("quirks") ? function(b) {
    var a = b.toLowerCase();
    "class" == a && (b = "className");
    return function(c) {
      return u ? c.getAttribute(b) : c[b] || c[a];
    };
  } : function(b) {
    return function(a) {
      return a && a.getAttribute && a.hasAttribute(b);
    };
  }, t = function(b, a) {
    if (!b) {
      return z;
    }
    a = a || {};
    var c = null;
    "el" in a || (c = v(c, I));
    "tag" in a || "*" != b.tag && (c = v(c, function(a) {
      return a && (u ? a.tagName : a.tagName.toUpperCase()) == b.getTag();
    }));
    "classes" in a || L(b.classes, function(a, b, e) {
      var g = new RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = v(c, function(a) {
        return g.test(a.className);
      });
      c.count = b;
    });
    "pseudos" in a || L(b.pseudos, function(a) {
      var b = a.name;
      U[b] && (c = v(c, U[b](b, a.value)));
    });
    "attrs" in a || L(b.attrs, function(a) {
      var b, e = a.attr;
      a.type && R[a.type] ? b = R[a.type](e, a.matchFor) : e.length && (b = ha(e));
      b && (c = v(c, b));
    });
    "id" in a || b.id && (c = v(c, function(a) {
      return !!a && a.id == b.id;
    }));
    c || "default" in a || (c = z);
    return c;
  }, ia = function(b) {
    return function(a, c, d) {
      for (;a = a[D];) {
        if (!J || I(a)) {
          d && !x(a, d) || !b(a) || c.push(a);
          break;
        }
      }
      return c;
    };
  }, ja = function(b) {
    return function(a, c, d) {
      for (a = a[D];a;) {
        if (E(a)) {
          if (d && !x(a, d)) {
            break;
          }
          b(a) && c.push(a);
        }
        a = a[D];
      }
      return c;
    };
  }, V = function(b, a) {
    var c = function(a) {
      var b = [];
      try {
        b = Array.prototype.slice.call(a);
      } catch (c) {
        for (var e = 0, g = a.length;e < g;e++) {
          b.push(a[e]);
        }
      }
      return b;
    };
    b = b || z;
    return function(d, f, e) {
      var g = 0, n = [], n = c(d.children || d.childNodes);
      for (a && F.forEach(n, function(a) {
        1 === a.nodeType && (n = n.concat(c(a.getElementsByTagName("*"))));
      });d = n[g++];) {
        E(d) && (!e || x(d, e)) && b(d, g) && f.push(d);
      }
      return f;
    };
  }, W = function(b, a) {
    for (var c = b.parentNode;c && c != a;) {
      c = c.parentNode;
    }
    return !!c;
  }, X = {}, Y = function(b) {
    var a = X[b.query];
    if (a) {
      return a;
    }
    var c = b.infixOper, c = c ? c.oper : "", d = t(b, {el:1}), f = "*" == b.tag, e = y.doc.getElementsByClassName;
    if (c) {
      e = {el:1}, f && (e.tag = 1), d = t(b, e), "+" == c ? a = ia(d) : "~" == c ? a = ja(d) : "\x3e" == c && (a = V(d));
    } else {
      if (b.id) {
        d = !b.loops && f ? z : t(b, {el:1, id:1}), a = function(a, c) {
          var e = O.byId(b.id, a.ownerDocument || a);
          a.ownerDocument && !W(a, a.ownerDocument) && F.some(11 === a.nodeType ? a.childNodes : [a], function(a) {
            a = V(function(a) {
              return a.id === b.id;
            }, !0)(a, []);
            if (a.length) {
              return e = a[0], !1;
            }
          });
          if (e && d(e) && (9 == a.nodeType || W(e, a))) {
            return C(e, c);
          }
        };
      } else {
        if (e && /\{\s*\[native code\]\s*\}/.test(String(e)) && b.classes.length && !Q) {
          var d = t(b, {el:1, classes:1, id:1}), g = b.classes.join(" "), a = function(a, b, c) {
            b = C(0, b);
            for (var e, f = 0, l = a.getElementsByClassName(g);e = l[f++];) {
              d(e, a) && x(e, c) && b.push(e);
            }
            return b;
          }
        } else {
          f || b.loops ? (d = t(b, {el:1, tag:1, id:1}), a = function(a, c, e) {
            c = C(0, c);
            for (var f, g = 0, l = (f = b.getTag()) ? a.getElementsByTagName(f) : [];f = l[g++];) {
              d(f, a) && x(f, e) && c.push(f);
            }
            return c;
          }) : a = function(a, c, d) {
            c = C(0, c);
            for (var e = 0, f = b.getTag(), f = f ? a.getElementsByTagName(f) : [];a = f[e++];) {
              x(a, d) && c.push(a);
            }
            return c;
          };
        }
      }
    }
    return X[b.query] = a;
  }, Z = {}, aa = {}, ba = function(b) {
    var a = M(P(b));
    if (1 == a.length) {
      var c = Y(a[0]);
      return function(a) {
        if (a = c(a, [])) {
          a.nozip = !0;
        }
        return a;
      };
    }
    return function(b) {
      b = C(b);
      for (var c, e, g = a.length, n, r, m = 0;m < g;m++) {
        r = [];
        c = a[m];
        e = b.length - 1;
        0 < e && (n = {}, r.nozip = !0);
        e = Y(c);
        for (var q = 0;c = b[q];q++) {
          e(c, r, n);
        }
        if (!r.length) {
          break;
        }
        b = r;
      }
      return r;
    };
  }, ka = m("ie") ? "commentStrip" : "nozip", ca = !!y.doc.querySelectorAll, la = /\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g, ma = function(b, a, c, d) {
    return c ? (a ? a + " " : "") + c + (d ? " " + d : "") : b;
  }, na = /([^[]*)([^\]]*])?/g, oa = function(b, a, c) {
    return a.replace(la, ma) + (c || "");
  }, da = function(b, a) {
    b = b.replace(na, oa);
    if (ca) {
      var c = aa[b];
      if (c && !a) {
        return c;
      }
    }
    if (c = Z[b]) {
      return c;
    }
    var c = b.charAt(0), d = -1 == b.indexOf(" ");
    0 <= b.indexOf("#") && d && (a = !0);
    if (!ca || a || -1 != "\x3e~+".indexOf(c) || m("ie") && -1 != b.indexOf(":") || Q && 0 <= b.indexOf(".") || -1 != b.indexOf(":contains") || -1 != b.indexOf(":checked") || -1 != b.indexOf("|\x3d")) {
      var f = b.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);
      return Z[b] = 2 > f.length ? ba(b) : function(a) {
        for (var b = 0, c = [], d;d = f[b++];) {
          c = c.concat(ba(d)(a));
        }
        return c;
      };
    }
    var e = 0 <= "\x3e~+".indexOf(b.charAt(b.length - 1)) ? b + " *" : b;
    return aa[b] = function(a) {
      if (9 == a.nodeType || d) {
        try {
          var c = a.querySelectorAll(e);
          c[ka] = !0;
          return c;
        } catch (f) {
        }
      }
      return da(b, !0)(a);
    };
  }, q = 0, pa = m("ie") ? function(b) {
    return u ? b.getAttribute("_uid") || b.setAttribute("_uid", ++q) || q : b.uniqueID;
  } : function(b) {
    return b._uid || (b._uid = ++q);
  }, x = function(b, a) {
    if (!a) {
      return 1;
    }
    var c = pa(b);
    return a[c] ? 0 : a[c] = 1;
  }, qa = function(b) {
    if (b && b.nozip) {
      return b;
    }
    if (!b || !b.length) {
      return [];
    }
    if (2 > b.length) {
      return [b[0]];
    }
    var a = [];
    q++;
    var c, d;
    if (m("ie") && u) {
      var f = q + "";
      for (c = 0;c < b.length;c++) {
        (d = b[c]) && d.getAttribute("_zipIdx") != f && (a.push(d), d.setAttribute("_zipIdx", f));
      }
    } else {
      if (m("ie") && b.commentStrip) {
        try {
          for (c = 0;c < b.length;c++) {
            (d = b[c]) && I(d) && a.push(d);
          }
        } catch (e) {
        }
      } else {
        for (c = 0;c < b.length;c++) {
          (d = b[c]) && d._zipIdx != q && (a.push(d), d._zipIdx = q);
        }
      }
    }
    return a;
  }, N = function(b, a) {
    a = a || y.doc;
    u = "div" === (a.ownerDocument || a).createElement("div").tagName;
    var c = da(b)(a);
    return c && c.nozip ? c : qa(c);
  };
  N.filter = function(b, a, c) {
    for (var d = [], f = M(a), f = 1 != f.length || /[^\w#\.]/.test(a) ? function(b) {
      return -1 != F.indexOf(N(a, O.byId(c)), b);
    } : t(f[0]), e = 0, g;g = b[e];e++) {
      f(g) && d.push(g);
    }
    return d;
  };
  return N;
});

//# sourceMappingURL=acme.js.map
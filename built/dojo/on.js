//>>built
define("dojo/on", ["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(y, z, f) {
  function A(a, c, b, d, e) {
    if (d = c.match(/(.*):(.*)/)) {
      return c = d[2], d = d[1], g.selector(d, c).call(e, a, b);
    }
    f("touch") && (B.test(c) && (b = n(b)), f("event-orientationchange") || "orientationchange" != c || (c = "resize", a = window, b = n(b)));
    p && (b = p(b));
    if (a.addEventListener) {
      var h = c in q, m = h ? q[c] : c;
      a.addEventListener(m, b, h);
      return {remove:function() {
        a.removeEventListener(m, b, h);
      }};
    }
    if (r && a.attachEvent) {
      return r(a, "on" + c, b);
    }
    throw Error("Target must be an event emitter");
  }
  function C() {
    this.cancelable = !1;
    this.defaultPrevented = !0;
  }
  function D() {
    this.bubbles = !1;
  }
  var t = window.ScriptEngineMajorVersion;
  f.add("jscript", t && t() + ScriptEngineMinorVersion() / 10);
  f.add("event-orientationchange", f("touch") && !f("android"));
  f.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
  f.add("event-focusin", function(a, c, b) {
    return "onfocusin" in b;
  });
  f("touch") && f.add("touch-can-modify-event-delegate", function() {
    var a = function() {
    };
    a.prototype = document.createEvent("MouseEvents");
    try {
      var c = new a;
      c.target = null;
      return null === c.target;
    } catch (b) {
      return !1;
    }
  });
  var g = function(a, c, b, d) {
    return "function" != typeof a.on || "function" == typeof c || a.nodeType ? g.parse(a, c, b, A, d, this) : a.on(c, b);
  };
  g.pausable = function(a, c, b, d) {
    var e;
    a = g(a, c, function() {
      if (!e) {
        return b.apply(this, arguments);
      }
    }, d);
    a.pause = function() {
      e = !0;
    };
    a.resume = function() {
      e = !1;
    };
    return a;
  };
  g.once = function(a, c, b, d) {
    var e = g(a, c, function() {
      e.remove();
      return b.apply(this, arguments);
    });
    return e;
  };
  g.parse = function(a, c, b, d, e, h) {
    var f;
    if (c.call) {
      return c.call(h, a, b);
    }
    c instanceof Array ? f = c : -1 < c.indexOf(",") && (f = c.split(/\s*,\s*/));
    if (f) {
      var k = [];
      c = 0;
      for (var u;u = f[c++];) {
        k.push(g.parse(a, u, b, d, e, h));
      }
      k.remove = function() {
        for (var a = 0;a < k.length;a++) {
          k[a].remove();
        }
      };
      return k;
    }
    return d(a, c, b, e, h);
  };
  var B = /^touch/;
  g.matches = function(a, c, b, d, e) {
    e = e && "function" == typeof e.matches ? e : z.query;
    d = !1 !== d;
    1 != a.nodeType && (a = a.parentNode);
    for (;!e.matches(a, c, b);) {
      if (a == b || !1 === d || !(a = a.parentNode) || 1 != a.nodeType) {
        return !1;
      }
    }
    return a;
  };
  g.selector = function(a, c, b) {
    return function(d, e) {
      function f(c) {
        return g.matches(c, a, d, b, m);
      }
      var m = "function" == typeof a ? {matches:a} : this, k = c.bubble;
      return k ? g(d, k(f), e) : g(d, c, function(a) {
        var b = f(a.target);
        if (b) {
          return a.selectorTarget = b, e.call(b, a);
        }
      });
    };
  };
  var E = [].slice, F = g.emit = function(a, c, b) {
    var d = E.call(arguments, 2), e = "on" + c;
    if ("parentNode" in a) {
      var f = d[0] = {}, g;
      for (g in b) {
        f[g] = b[g];
      }
      f.preventDefault = C;
      f.stopPropagation = D;
      f.target = a;
      f.type = c;
      b = f;
    }
    do {
      a[e] && a[e].apply(a, d);
    } while (b && b.bubbles && (a = a.parentNode));
    return b && b.cancelable && b;
  }, q = f("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
  if (!f("event-stopimmediatepropagation")) {
    var G = function() {
      this.modified = this.immediatelyStopped = !0;
    }, p = function(a) {
      return function(c) {
        if (!c.immediatelyStopped) {
          return c.stopImmediatePropagation = G, a.apply(this, arguments);
        }
      };
    }
  }
  if (f("dom-addeventlistener")) {
    g.emit = function(a, c, b) {
      if (a.dispatchEvent && document.createEvent) {
        var d = (a.ownerDocument || document).createEvent("HTMLEvents");
        d.initEvent(c, !!b.bubbles, !!b.cancelable);
        for (var e in b) {
          e in d || (d[e] = b[e]);
        }
        return a.dispatchEvent(d) && d;
      }
      return F.apply(g, arguments);
    };
  } else {
    g._fixEvent = function(a, c) {
      a || (a = (c && (c.ownerDocument || c.document || c).parentWindow || window).event);
      if (!a) {
        return a;
      }
      try {
        l && a.type == l.type && a.srcElement == l.target && (a = l);
      } catch (d) {
      }
      if (!a.target) {
        switch(a.target = a.srcElement, a.currentTarget = c || a.srcElement, "mouseover" == a.type && (a.relatedTarget = a.fromElement), "mouseout" == a.type && (a.relatedTarget = a.toElement), a.stopPropagation || (a.stopPropagation = H, a.preventDefault = I), a.type) {
          case "keypress":
            var b = "charCode" in a ? a.charCode : a.keyCode;
            10 == b ? (b = 0, a.keyCode = 13) : 13 == b || 27 == b ? b = 0 : 3 == b && (b = 99);
            a.charCode = b;
            b = a;
            b.keyChar = b.charCode ? String.fromCharCode(b.charCode) : "";
            b.charOrCode = b.keyChar || b.keyCode;
        }
      }
      return a;
    };
    var l, v = function(a) {
      this.handle = a;
    };
    v.prototype.remove = function() {
      delete _dojoIEListeners_[this.handle];
    };
    var J = function(a) {
      return function(c) {
        c = g._fixEvent(c, this);
        var b = a.call(this, c);
        c.modified && (l || setTimeout(function() {
          l = null;
        }), l = c);
        return b;
      };
    }, r = function(a, c, b) {
      b = J(b);
      if (((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > f("jscript")) && !f("config-_allow_leaks")) {
        "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
        var d = a[c];
        if (!d || !d.listeners) {
          var e = d, d = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
          d.listeners = [];
          a[c] = d;
          d.global = this;
          e && d.listeners.push(_dojoIEListeners_.push(e) - 1);
        }
        d.listeners.push(a = d.global._dojoIEListeners_.push(b) - 1);
        return new v(a);
      }
      return y.after(a, c, b, !0);
    }, H = function() {
      this.cancelBubble = !0;
    }, I = g._preventDefault = function() {
      this.bubbledKeyCode = this.keyCode;
      if (this.ctrlKey) {
        try {
          this.keyCode = 0;
        } catch (a) {
        }
      }
      this.defaultPrevented = !0;
      this.returnValue = !1;
      this.modified = !0;
    };
  }
  if (f("touch")) {
    var w = function() {
    }, x = window.orientation, n = function(a) {
      return function(c) {
        var b = c.corrected;
        if (!b) {
          var d = c.type;
          try {
            delete c.type;
          } catch (g) {
          }
          if (c.type) {
            if (f("touch-can-modify-event-delegate")) {
              w.prototype = c, b = new w;
            } else {
              var b = {}, e;
              for (e in c) {
                b[e] = c[e];
              }
            }
            b.preventDefault = function() {
              c.preventDefault();
            };
            b.stopPropagation = function() {
              c.stopPropagation();
            };
          } else {
            b = c, b.type = d;
          }
          c.corrected = b;
          if ("resize" == d) {
            if (x == window.orientation) {
              return null;
            }
            x = window.orientation;
            b.type = "orientationchange";
            return a.call(this, b);
          }
          "rotation" in b || (b.rotation = 0, b.scale = 1);
          var d = b.changedTouches[0], h;
          for (h in d) {
            delete b[h], b[h] = d[h];
          }
        }
        return a.call(this, b);
      };
    }
  }
  return g;
});

//# sourceMappingURL=on.js.map
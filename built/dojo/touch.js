//>>built
define("dojo/touch", "./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(G, x, y, q, H, g, l, n, z, d) {
  function k(a, c, b) {
    return v && b ? function(a, c) {
      return g(a, b, c);
    } : I ? function(b, d) {
      var m = g(b, c, function(m) {
        d.call(this, m);
        p = (new Date).getTime();
      }), f = g(b, a, function(m) {
        (!p || (new Date).getTime() > p + 1E3) && d.call(this, m);
      });
      return {remove:function() {
        m.remove();
        f.remove();
      }};
    } : function(c, b) {
      return g(c, a, b);
    };
  }
  function J(a) {
    do {
      if (void 0 !== a.dojoClick) {
        return a;
      }
    } while (a = a.parentNode);
  }
  function A(a, c, b) {
    if (!n.isRight(a)) {
      var e = J(a.target);
      if (f = !a.target.disabled && e && e.dojoClick) {
        if (t = (r = "useTarget" == f) ? e : a.target, r && a.preventDefault(), B = a.changedTouches ? a.changedTouches[0].pageX - d.global.pageXOffset : a.clientX, C = a.changedTouches ? a.changedTouches[0].pageY - d.global.pageYOffset : a.clientY, D = ("object" == typeof f ? f.x : "number" == typeof f ? f : 0) || 4, E = ("object" == typeof f ? f.y : "number" == typeof f ? f : 0) || 4, !F) {
          a = function(m) {
            d.doc.addEventListener(m, function(c) {
              var a = c.target;
              f && !c._dojo_click && (new Date).getTime() <= w + 1E3 && ("INPUT" != a.tagName || !q.contains(a, "dijitOffScreen")) && (c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), "click" == m && ("INPUT" != a.tagName || "radio" == a.type && (q.contains(a, "dijitCheckBoxInput") || q.contains(a, "mblRadioButton")) || "checkbox" == a.type && (q.contains(a, "dijitCheckBoxInput") || q.contains(a, "mblCheckBox"))) && "TEXTAREA" != a.tagName && "AUDIO" != a.tagName && 
              "VIDEO" != a.tagName && c.preventDefault());
            }, !0);
          };
          var h = function(a) {
            f = r ? y.isDescendant(d.doc.elementFromPoint(a.changedTouches ? a.changedTouches[0].pageX - d.global.pageXOffset : a.clientX, a.changedTouches ? a.changedTouches[0].pageY - d.global.pageYOffset : a.clientY), t) : f && (a.changedTouches ? a.changedTouches[0].target : a.target) == t && Math.abs((a.changedTouches ? a.changedTouches[0].pageX - d.global.pageXOffset : a.clientX) - B) <= D && Math.abs((a.changedTouches ? a.changedTouches[0].pageY - d.global.pageYOffset : a.clientY) - C) <= 
            E;
          };
          F = !0;
          d.doc.addEventListener(c, function(a) {
            n.isRight(a) || (h(a), r && a.preventDefault());
          }, !0);
          d.doc.addEventListener(b, function(a) {
            if (!n.isRight(a) && (h(a), f)) {
              var c = function(c) {
                var b = document.createEvent("MouseEvents");
                b._dojo_click = !0;
                b.initMouseEvent(c, !0, !0, a.view, a.detail, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                return b;
              };
              w = (new Date).getTime();
              var b = r ? t : a.target;
              "LABEL" === b.tagName && (b = y.byId(b.getAttribute("for")) || b);
              var d = a.changedTouches ? a.changedTouches[0] : a, e = c("mousedown"), k = c("mouseup"), l = c("click");
              setTimeout(function() {
                g.emit(b, "mousedown", e);
                g.emit(b, "mouseup", k);
                g.emit(b, "click", l);
                w = (new Date).getTime();
              }, 0);
            }
          }, !0);
          a("click");
          a("mousedown");
          a("mouseup");
        }
      }
    }
  }
  var u = 5 > l("ios"), v = l("pointer-events") || l("MSPointer"), e = function() {
    var a = {}, c;
    for (c in{down:1, move:1, up:1, cancel:1, over:1, out:1}) {
      a[c] = l("MSPointer") ? "MSPointer" + c.charAt(0).toUpperCase() + c.slice(1) : "pointer" + c;
    }
    return a;
  }(), I = l("touch-events"), F, f, r = !1, t, B, C, D, E, w, p, h;
  l("touch") && (v ? z(function() {
    d.doc.addEventListener(e.down, function(a) {
      A(a, e.move, e.up);
    }, !0);
  }) : z(function() {
    function a(a) {
      var b = H.delegate(a, {bubbles:!0});
      6 <= l("ios") && (b.touches = a.touches, b.altKey = a.altKey, b.changedTouches = a.changedTouches, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.targetTouches = a.targetTouches);
      return b;
    }
    h = d.body();
    d.doc.addEventListener("touchstart", function(a) {
      p = (new Date).getTime();
      var b = h;
      h = a.target;
      g.emit(b, "dojotouchout", {relatedTarget:h, bubbles:!0});
      g.emit(h, "dojotouchover", {relatedTarget:b, bubbles:!0});
      A(a, "touchmove", "touchend");
    }, !0);
    g(d.doc, "touchmove", function(c) {
      p = (new Date).getTime();
      var b = d.doc.elementFromPoint(c.pageX - (u ? 0 : d.global.pageXOffset), c.pageY - (u ? 0 : d.global.pageYOffset));
      b && (h !== b && (g.emit(h, "dojotouchout", {relatedTarget:b, bubbles:!0}), g.emit(b, "dojotouchover", {relatedTarget:h, bubbles:!0}), h = b), g.emit(b, "dojotouchmove", a(c)) || c.preventDefault());
    });
    g(d.doc, "touchend", function(c) {
      p = (new Date).getTime();
      var b = d.doc.elementFromPoint(c.pageX - (u ? 0 : d.global.pageXOffset), c.pageY - (u ? 0 : d.global.pageYOffset)) || d.body();
      g.emit(b, "dojotouchend", a(c));
    });
  }));
  x = {press:k("mousedown", "touchstart", e.down), move:k("mousemove", "dojotouchmove", e.move), release:k("mouseup", "dojotouchend", e.up), cancel:k(n.leave, "touchcancel", v ? e.cancel : null), over:k("mouseover", "dojotouchover", e.over), out:k("mouseout", "dojotouchout", e.out), enter:n._eventHandler(k("mouseover", "dojotouchover", e.over)), leave:n._eventHandler(k("mouseout", "dojotouchout", e.out))};
  return G.touch = x;
});

//# sourceMappingURL=touch.js.map
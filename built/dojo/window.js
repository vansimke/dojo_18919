//>>built
define("dojo/window", "./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(A, f, t, I, q, D, m) {
  f.add("rtl-adjust-position-for-verticalScrollBar", function(b, f) {
    var d = t.body(f), e = m.create("div", {style:{overflow:"scroll", overflowX:"visible", direction:"rtl", visibility:"hidden", position:"absolute", left:"0", top:"0", width:"64px", height:"64px"}}, d, "last"), g = m.create("div", {style:{overflow:"hidden", direction:"ltr"}}, e, "last"), l = 0 != q.position(g).x;
    e.removeChild(g);
    d.removeChild(e);
    return l;
  });
  f.add("position-fixed-support", function(b, f) {
    var d = t.body(f), e = m.create("span", {style:{visibility:"hidden", position:"fixed", left:"1px", top:"1px"}}, d, "last"), g = m.create("span", {style:{position:"fixed", left:"0", top:"0"}}, e, "last"), l = q.position(g).x != q.position(e).x;
    e.removeChild(g);
    d.removeChild(e);
    return l;
  });
  var n = {getBox:function(b) {
    b = b || t.doc;
    var h = "BackCompat" == b.compatMode ? t.body(b) : b.documentElement, d = q.docScroll(b);
    if (f("touch")) {
      var e = n.get(b);
      b = e.innerWidth || h.clientWidth;
      h = e.innerHeight || h.clientHeight;
    } else {
      b = h.clientWidth, h = h.clientHeight;
    }
    return {l:d.x, t:d.y, w:b, h:h};
  }, get:function(b) {
    if (f("ie") && n !== document.parentWindow) {
      b.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
      var h = b._parentWindow;
      b._parentWindow = null;
      return h;
    }
    return b.parentWindow || b.defaultView;
  }, scrollIntoView:function(b, h) {
    try {
      b = I.byId(b);
      var d = b.ownerDocument || t.doc, e = t.body(d), g = d.documentElement || e.parentNode, l = f("ie") || f("trident"), u = f("webkit");
      if (b != e && b != g) {
        if (!(f("mozilla") || l || u || f("opera") || f("trident") || f("edge")) && "scrollIntoView" in b) {
          b.scrollIntoView(!1);
        } else {
          var m = "BackCompat" == d.compatMode, n = Math.min(e.clientWidth || g.clientWidth, g.clientWidth || e.clientWidth), B = Math.min(e.clientHeight || g.clientHeight, g.clientHeight || e.clientHeight), d = u || m ? e : g, p = h || q.position(b), c = b.parentNode, u = function(a) {
            return 6 >= l || 7 == l && m ? !1 : f("position-fixed-support") && "fixed" == D.get(a, "position").toLowerCase();
          }, A = this, E = function(a, b, c) {
            "BODY" == a.tagName || "HTML" == a.tagName ? A.get(a.ownerDocument).scrollBy(b, c) : (b && (a.scrollLeft += b), c && (a.scrollTop += c));
          };
          if (!u(b)) {
            for (;c;) {
              c == e && (c = d);
              var a = q.position(c), F = u(c), C = "rtl" == D.getComputedStyle(c).direction.toLowerCase();
              if (c == d) {
                a.w = n, a.h = B, d == g && (l || f("trident")) && C && (a.x += d.offsetWidth - a.w), a.x = 0, a.y = 0;
              } else {
                var v = q.getPadBorderExtents(c);
                a.w -= v.w;
                a.h -= v.h;
                a.x += v.l;
                a.y += v.t;
                var r = c.clientWidth, w = a.w - r;
                0 < r && 0 < w && (C && f("rtl-adjust-position-for-verticalScrollBar") && (a.x += w), a.w = r);
                r = c.clientHeight;
                w = a.h - r;
                0 < r && 0 < w && (a.h = r);
              }
              F && (0 > a.y && (a.h += a.y, a.y = 0), 0 > a.x && (a.w += a.x, a.x = 0), a.y + a.h > B && (a.h = B - a.y), a.x + a.w > n && (a.w = n - a.x));
              var x = p.x - a.x, y = p.y - a.y, G = x + p.w - a.w, H = y + p.h - a.h, k, z;
              0 < G * x && (c.scrollLeft || c == d || c.scrollWidth > c.offsetHeight) && (k = Math[0 > x ? "max" : "min"](x, G), C && (8 == l && !m || 5 <= f("trident")) && (k = -k), z = c.scrollLeft, E(c, k, 0), k = c.scrollLeft - z, p.x -= k);
              0 < H * y && (c.scrollTop || c == d || c.scrollHeight > c.offsetHeight) && (k = Math.ceil(Math[0 > y ? "max" : "min"](y, H)), z = c.scrollTop, E(c, 0, k), k = c.scrollTop - z, p.y -= k);
              c = c != d && !F && c.parentNode;
            }
          }
        }
      }
    } catch (J) {
      console.error("scrollIntoView: " + J), b.scrollIntoView(!1);
    }
  }};
  A.setObject("dojo.window", n);
  return n;
});

//# sourceMappingURL=window.js.map
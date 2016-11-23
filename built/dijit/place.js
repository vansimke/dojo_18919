//>>built
define("dijit/place", "dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "), function(x, t, v, z, w, A, B) {
  function y(f, a, l, n) {
    var d = A.getEffectiveBox(f.ownerDocument);
    f.parentNode && "body" == String(f.parentNode.tagName).toLowerCase() || w.body(f.ownerDocument).appendChild(f);
    var c = null;
    x.some(a, function(b) {
      var a = b.corner, g = b.pos, e = 0, r = {w:{L:d.l + d.w - g.x, R:g.x - d.l, M:d.w}[a.charAt(1)], h:{T:d.t + d.h - g.y, B:g.y - d.t, M:d.h}[a.charAt(0)]}, h = f.style;
      h.left = h.right = "auto";
      l && (e = l(f, b.aroundCorner, a, r, n), e = "undefined" == typeof e ? 0 : e);
      var k = f.style, m = k.display, q = k.visibility;
      "none" == k.display && (k.visibility = "hidden", k.display = "");
      h = t.position(f);
      k.display = m;
      k.visibility = q;
      m = {L:g.x, R:g.x - h.w, M:Math.max(d.l, Math.min(d.l + d.w, g.x + (h.w >> 1)) - h.w)}[a.charAt(1)];
      q = {T:g.y, B:g.y - h.h, M:Math.max(d.t, Math.min(d.t + d.h, g.y + (h.h >> 1)) - h.h)}[a.charAt(0)];
      g = Math.max(d.l, m);
      k = Math.max(d.t, q);
      m = Math.min(d.l + d.w, m + h.w) - g;
      q = Math.min(d.t + d.h, q + h.h) - k;
      e += h.w - m + (h.h - q);
      if (null == c || e < c.overflow) {
        c = {corner:a, aroundCorner:b.aroundCorner, x:g, y:k, w:m, h:q, overflow:e, spaceAvailable:r};
      }
      return !e;
    });
    c.overflow && l && l(f, c.aroundCorner, c.corner, c.spaceAvailable, n);
    a = c.y;
    var b = c.x, e = w.body(f.ownerDocument);
    /relative|absolute/.test(v.get(e, "position")) && (a -= v.get(e, "marginTop"), b -= v.get(e, "marginLeft"));
    e = f.style;
    e.top = a + "px";
    e.left = b + "px";
    e.right = "auto";
    return c;
  }
  var C = {TL:"BR", TR:"BL", BL:"TR", BR:"TL"};
  return B.place = {at:function(f, a, l, n, d) {
    l = x.map(l, function(c) {
      var b = {corner:c, aroundCorner:C[c], pos:{x:a.x, y:a.y}};
      n && (b.pos.x += "L" == c.charAt(1) ? n.x : -n.x, b.pos.y += "T" == c.charAt(0) ? n.y : -n.y);
      return b;
    });
    return y(f, l, d);
  }, around:function(f, a, l, n, d) {
    function c(b, a) {
      q.push({aroundCorner:b, corner:a, pos:{x:{L:r, R:r + k, M:r + (k >> 1)}[b.charAt(1)], y:{T:h, B:h + m, M:h + (m >> 1)}[b.charAt(0)]}});
    }
    var b;
    if ("string" == typeof a || "offsetWidth" in a || "ownerSVGElement" in a) {
      if (b = t.position(a, !0), /^(above|below)/.test(l[0])) {
        var e = t.getBorderExtents(a), p = a.firstChild ? t.getBorderExtents(a.firstChild) : {t:0, l:0, b:0, r:0}, u = t.getBorderExtents(f), g = f.firstChild ? t.getBorderExtents(f.firstChild) : {t:0, l:0, b:0, r:0};
        b.y += Math.min(e.t + p.t, u.t + g.t);
        b.h -= Math.min(e.t + p.t, u.t + g.t) + Math.min(e.b + p.b, u.b + g.b);
      }
    } else {
      b = a;
    }
    if (a.parentNode) {
      for (e = "absolute" == v.getComputedStyle(a).position, a = a.parentNode;a && 1 == a.nodeType && "BODY" != a.nodeName;) {
        p = t.position(a, !0);
        u = v.getComputedStyle(a);
        /relative|absolute/.test(u.position) && (e = !1);
        if (!e && /hidden|auto|scroll/.test(u.overflow)) {
          var g = Math.min(b.y + b.h, p.y + p.h), w = Math.min(b.x + b.w, p.x + p.w);
          b.x = Math.max(b.x, p.x);
          b.y = Math.max(b.y, p.y);
          b.h = g - b.y;
          b.w = w - b.x;
        }
        "absolute" == u.position && (e = !0);
        a = a.parentNode;
      }
    }
    var r = b.x, h = b.y, k = "w" in b ? b.w : b.w = b.width, m = "h" in b ? b.h : (z.deprecated("place.around: dijit/place.__Rectangle: { x:" + r + ", y:" + h + ", height:" + b.height + ", width:" + k + " } has been deprecated.  Please use { x:" + r + ", y:" + h + ", h:" + b.height + ", w:" + k + " }", "", "2.0"), b.h = b.height), q = [];
    x.forEach(l, function(b) {
      var a = n;
      switch(b) {
        case "above-centered":
          c("TM", "BM");
          break;
        case "below-centered":
          c("BM", "TM");
          break;
        case "after-centered":
          a = !a;
        case "before-centered":
          c(a ? "ML" : "MR", a ? "MR" : "ML");
          break;
        case "after":
          a = !a;
        case "before":
          c(a ? "TL" : "TR", a ? "TR" : "TL");
          c(a ? "BL" : "BR", a ? "BR" : "BL");
          break;
        case "below-alt":
          a = !a;
        case "below":
          c(a ? "BL" : "BR", a ? "TL" : "TR");
          c(a ? "BR" : "BL", a ? "TR" : "TL");
          break;
        case "above-alt":
          a = !a;
        case "above":
          c(a ? "TL" : "TR", a ? "BL" : "BR");
          c(a ? "TR" : "TL", a ? "BR" : "BL");
          break;
        default:
          c(b.aroundCorner, b.corner);
      }
    });
    f = y(f, q, d, {w:k, h:m});
    f.aroundNodePos = b;
    return f;
  }};
});

//# sourceMappingURL=place.js.map
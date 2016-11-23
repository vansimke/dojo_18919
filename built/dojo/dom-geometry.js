//>>built
define("dojo/dom-geometry", ["./sniff", "./_base/window", "./dom", "./dom-style"], function(l, k, n, m) {
  function p(a, d, b, c, f, g) {
    g = g || "px";
    a = a.style;
    isNaN(d) || (a.left = d + g);
    isNaN(b) || (a.top = b + g);
    0 <= c && (a.width = c + g);
    0 <= f && (a.height = f + g);
  }
  function q(a) {
    return "button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase();
  }
  function r(a) {
    return "border-box" == e.boxModel || "table" == a.tagName.toLowerCase() || q(a);
  }
  var e = {boxModel:"content-box"};
  l("ie") && (e.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
  e.getPadExtents = function(a, d) {
    a = n.byId(a);
    var b = d || m.getComputedStyle(a), c = m.toPixelValue, f = c(a, b.paddingLeft), g = c(a, b.paddingTop), e = c(a, b.paddingRight), b = c(a, b.paddingBottom);
    return {l:f, t:g, r:e, b:b, w:f + e, h:g + b};
  };
  e.getBorderExtents = function(a, d) {
    a = n.byId(a);
    var b = m.toPixelValue, c = d || m.getComputedStyle(a), f = "none" != c.borderLeftStyle ? b(a, c.borderLeftWidth) : 0, e = "none" != c.borderTopStyle ? b(a, c.borderTopWidth) : 0, h = "none" != c.borderRightStyle ? b(a, c.borderRightWidth) : 0, b = "none" != c.borderBottomStyle ? b(a, c.borderBottomWidth) : 0;
    return {l:f, t:e, r:h, b:b, w:f + h, h:e + b};
  };
  e.getPadBorderExtents = function(a, d) {
    a = n.byId(a);
    var b = d || m.getComputedStyle(a), c = e.getPadExtents(a, b), b = e.getBorderExtents(a, b);
    return {l:c.l + b.l, t:c.t + b.t, r:c.r + b.r, b:c.b + b.b, w:c.w + b.w, h:c.h + b.h};
  };
  e.getMarginExtents = function(a, d) {
    a = n.byId(a);
    var b = d || m.getComputedStyle(a), c = m.toPixelValue, e = c(a, b.marginLeft), g = c(a, b.marginTop), h = c(a, b.marginRight), b = c(a, b.marginBottom);
    return {l:e, t:g, r:h, b:b, w:e + h, h:g + b};
  };
  e.getMarginBox = function(a, d) {
    a = n.byId(a);
    var b = d || m.getComputedStyle(a), c = e.getMarginExtents(a, b), f = a.offsetLeft - c.l, g = a.offsetTop - c.t, h = a.parentNode, k = m.toPixelValue;
    if (l("mozilla")) {
      var p = parseFloat(b.left), b = parseFloat(b.top);
      isNaN(p) || isNaN(b) ? h && h.style && (h = m.getComputedStyle(h), "visible" != h.overflow && (f += "none" != h.borderLeftStyle ? k(a, h.borderLeftWidth) : 0, g += "none" != h.borderTopStyle ? k(a, h.borderTopWidth) : 0)) : (f = p, g = b);
    } else {
      (l("opera") || 8 == l("ie") && !l("quirks")) && h && (h = m.getComputedStyle(h), f -= "none" != h.borderLeftStyle ? k(a, h.borderLeftWidth) : 0, g -= "none" != h.borderTopStyle ? k(a, h.borderTopWidth) : 0);
    }
    return {l:f, t:g, w:a.offsetWidth + c.w, h:a.offsetHeight + c.h};
  };
  e.getContentBox = function(a, d) {
    a = n.byId(a);
    var b = d || m.getComputedStyle(a), c = a.clientWidth, f = e.getPadExtents(a, b), g = e.getBorderExtents(a, b);
    c ? (b = a.clientHeight, g.w = g.h = 0) : (c = a.offsetWidth, b = a.offsetHeight);
    l("opera") && (f.l += g.l, f.t += g.t);
    return {l:f.l, t:f.t, w:c - f.w - g.w, h:b - f.h - g.h};
  };
  e.setContentSize = function(a, d, b) {
    a = n.byId(a);
    var c = d.w;
    d = d.h;
    r(a) && (b = e.getPadBorderExtents(a, b), 0 <= c && (c += b.w), 0 <= d && (d += b.h));
    p(a, NaN, NaN, c, d);
  };
  var t = {l:0, t:0, w:0, h:0};
  e.setMarginBox = function(a, d, b) {
    a = n.byId(a);
    var c = b || m.getComputedStyle(a);
    b = d.w;
    var f = d.h, g = r(a) ? t : e.getPadBorderExtents(a, c), c = e.getMarginExtents(a, c);
    if (l("webkit") && q(a)) {
      var h = a.style;
      0 <= b && !h.width && (h.width = "4px");
      0 <= f && !h.height && (h.height = "4px");
    }
    0 <= b && (b = Math.max(b - g.w - c.w, 0));
    0 <= f && (f = Math.max(f - g.h - c.h, 0));
    p(a, d.l, d.t, b, f);
  };
  e.isBodyLtr = function(a) {
    a = a || k.doc;
    return "ltr" == (k.body(a).dir || a.documentElement.dir || "ltr").toLowerCase();
  };
  e.docScroll = function(a) {
    a = a || k.doc;
    var d = k.doc.parentWindow || k.doc.defaultView;
    return "pageXOffset" in d ? {x:d.pageXOffset, y:d.pageYOffset} : (d = l("quirks") ? k.body(a) : a.documentElement) && {x:e.fixIeBiDiScrollLeft(d.scrollLeft || 0, a), y:d.scrollTop || 0};
  };
  e.getIeDocumentElementOffset = function(a) {
    return {x:0, y:0};
  };
  e.fixIeBiDiScrollLeft = function(a, d) {
    d = d || k.doc;
    var b = l("ie");
    if (b && !e.isBodyLtr(d)) {
      var c = l("quirks"), f = c ? k.body(d) : d.documentElement, g = k.global;
      6 == b && !c && g.frameElement && f.scrollHeight > f.clientHeight && (a += f.clientLeft);
      return 8 > b || c ? a + f.clientWidth - f.scrollWidth : -a;
    }
    return a;
  };
  e.position = function(a, d) {
    a = n.byId(a);
    var b = k.body(a.ownerDocument), c = a.getBoundingClientRect(), c = {x:c.left, y:c.top, w:c.right - c.left, h:c.bottom - c.top};
    9 > l("ie") && (c.x -= l("quirks") ? b.clientLeft + b.offsetLeft : 0, c.y -= l("quirks") ? b.clientTop + b.offsetTop : 0);
    d && (b = e.docScroll(a.ownerDocument), c.x += b.x, c.y += b.y);
    return c;
  };
  e.getMarginSize = function(a, d) {
    a = n.byId(a);
    var b = e.getMarginExtents(a, d || m.getComputedStyle(a)), c = a.getBoundingClientRect();
    return {w:c.right - c.left + b.w, h:c.bottom - c.top + b.h};
  };
  e.normalizeEvent = function(a) {
    "layerX" in a || (a.layerX = a.offsetX, a.layerY = a.offsetY);
    if (!("pageX" in a)) {
      var d = a.target, d = d && d.ownerDocument || document, b = l("quirks") ? d.body : d.documentElement;
      a.pageX = a.clientX + e.fixIeBiDiScrollLeft(b.scrollLeft || 0, d);
      a.pageY = a.clientY + (b.scrollTop || 0);
    }
  };
  return e;
});

//# sourceMappingURL=dom-geometry.js.map
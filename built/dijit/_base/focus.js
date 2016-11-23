//>>built
define("dijit/_base/focus", "dojo/_base/array dojo/dom dojo/_base/lang dojo/topic dojo/_base/window ../focus ../selection ../main".split(" "), function(m, k, l, g, e, d, h, f) {
  d.focus = function(a) {
    if (a) {
      var b = "node" in a ? a.node : a, c = a.bookmark;
      a = a.openedForWindow;
      var h = c ? c.isCollapsed : !1;
      if (b) {
        var g = "iframe" == b.tagName.toLowerCase() ? b.contentWindow : b;
        if (g && g.focus) {
          try {
            g.focus();
          } catch (k) {
          }
        }
        d._onFocusNode(b);
      }
      if (c && e.withGlobal(a || e.global, f.isCollapsed) && !h) {
        a && a.focus();
        try {
          e.withGlobal(a || e.global, f.moveToBookmark, null, [c]);
        } catch (k) {
        }
      }
    }
  };
  d.watch("curNode", function(a, b, c) {
    f._curFocus = c;
    f._prevFocus = b;
    c && g.publish("focusNode", c);
  });
  d.watch("activeStack", function(a, b, c) {
    f._activeStack = c;
  });
  d.on("widget-blur", function(a, b) {
    g.publish("widgetBlur", a, b);
  });
  d.on("widget-focus", function(a, b) {
    g.publish("widgetFocus", a, b);
  });
  l.mixin(f, {_curFocus:null, _prevFocus:null, isCollapsed:function() {
    return f.getBookmark().isCollapsed;
  }, getBookmark:function() {
    return (e.global == window ? h : new h.SelectionManager(e.global)).getBookmark();
  }, moveToBookmark:function(a) {
    return (e.global == window ? h : new h.SelectionManager(e.global)).moveToBookmark(a);
  }, getFocus:function(a, b) {
    var c = !d.curNode || a && k.isDescendant(d.curNode, a.domNode) ? f._prevFocus : d.curNode;
    return {node:c, bookmark:c && c == d.curNode && e.withGlobal(b || e.global, f.getBookmark), openedForWindow:b};
  }, _activeStack:[], registerIframe:function(a) {
    return d.registerIframe(a);
  }, unregisterIframe:function(a) {
    a && a.remove();
  }, registerWin:function(a, b) {
    return d.registerWin(a, b);
  }, unregisterWin:function(a) {
    a && a.remove();
  }});
  return f;
});

//# sourceMappingURL=focus.js.map
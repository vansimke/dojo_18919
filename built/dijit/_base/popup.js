//>>built
define("dijit/_base/popup", ["dojo/dom-class", "dojo/_base/window", "../popup", "../BackgroundIframe"], function(d, e, b) {
  var f = b._createWrapper;
  b._createWrapper = function(a) {
    a.declaredClass || (a = {_popupWrapper:a.parentNode && d.contains(a.parentNode, "dijitPopup") ? a.parentNode : null, domNode:a, destroy:function() {
    }, ownerDocument:a.ownerDocument, ownerDocumentBody:e.body(a.ownerDocument)});
    return f.call(this, a);
  };
  var g = b.open;
  b.open = function(a) {
    if (a.orient && "string" != typeof a.orient && !("length" in a.orient)) {
      var b = [], c;
      for (c in a.orient) {
        b.push({aroundCorner:c, corner:a.orient[c]});
      }
      a.orient = b;
    }
    return g.call(this, a);
  };
  return b;
});

//# sourceMappingURL=popup.js.map
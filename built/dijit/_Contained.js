//>>built
define("dijit/_Contained", ["dojo/_base/declare", "./registry"], function(c, d) {
  return c("dijit._Contained", null, {_getSibling:function(a) {
    var b = this.getParent();
    return b && b._getSiblingOfChild && b._getSiblingOfChild(this, "previous" == a ? -1 : 1) || null;
  }, getPreviousSibling:function() {
    return this._getSibling("previous");
  }, getNextSibling:function() {
    return this._getSibling("next");
  }, getIndexInParent:function() {
    var a = this.getParent();
    return a && a.getIndexOfChild ? a.getIndexOfChild(this) : -1;
  }});
});

//# sourceMappingURL=_Contained.js.map
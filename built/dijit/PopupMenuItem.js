//>>built
define("dijit/PopupMenuItem", "dojo/_base/declare dojo/dom-style dojo/_base/lang dojo/query ./popup ./registry ./MenuItem ./hccss".split(" "), function(e, f, g, b, c, h, k) {
  return e("dijit.PopupMenuItem", k, {baseClass:"dijitMenuItem dijitPopupMenuItem", _fillContent:function() {
    if (this.srcNodeRef) {
      var a = b("*", this.srcNodeRef);
      this.inherited(arguments, [a[0]]);
      this.dropDownContainer = this.srcNodeRef;
    }
  }, _openPopup:function(a, b) {
    var d = this.popup;
    c.open(g.delegate(a, {popup:this.popup, around:this.domNode}));
    b && d.focus && d.focus();
  }, _closePopup:function() {
    c.close(this.popup);
    this.popup.parentMenu = null;
  }, startup:function() {
    if (!this._started) {
      this.inherited(arguments);
      if (!this.popup) {
        var a = b("[widgetId]", this.dropDownContainer)[0];
        this.popup = h.byNode(a);
      }
      this.ownerDocumentBody.appendChild(this.popup.domNode);
      this.popup.domNode.setAttribute("aria-labelledby", this.containerNode.id);
      this.popup.startup();
      this.popup.domNode.style.display = "none";
      this.arrowWrapper && f.set(this.arrowWrapper, "visibility", "");
      this.focusNode.setAttribute("aria-haspopup", "true");
    }
  }, destroyDescendants:function(a) {
    this.popup && (this.popup._destroyed || this.popup.destroyRecursive(a), delete this.popup);
    this.inherited(arguments);
  }});
});

//# sourceMappingURL=PopupMenuItem.js.map
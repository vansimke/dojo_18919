//>>built
define("dijit/form/MultiSelect", "dojo/_base/array dojo/_base/declare dojo/dom-geometry dojo/sniff dojo/query ./_FormValueWidget dojo/NodeList-dom".split(" "), function(f, h, k, g, c, d) {
  d = h("dijit.form.MultiSelect" + (g("dojo-bidi") ? "_NoBidi" : ""), d, {size:7, baseClass:"dijitMultiSelect", templateString:"\x3cselect multiple\x3d'multiple' ${!nameAttrSetting} data-dojo-attach-point\x3d'containerNode,focusNode' data-dojo-attach-event\x3d'onchange: _onChange'\x3e\x3c/select\x3e", addSelected:function(b) {
    b.getSelected().forEach(function(a) {
      this.containerNode.appendChild(a);
      this.domNode.scrollTop = this.domNode.offsetHeight;
      b.domNode.scrollTop = b.domNode.scrollTop;
    }, this);
    this._set("value", this.get("value"));
  }, getSelected:function() {
    return c("option", this.containerNode).filter(function(b) {
      return b.selected;
    });
  }, _getValueAttr:function() {
    return f.map(this.getSelected(), function(b) {
      return b.value;
    });
  }, multiple:!0, _setMultipleAttr:function(b) {
  }, _setValueAttr:function(b) {
    g("android") ? c("option", this.containerNode).orphan().forEach(function(a) {
      var e = a.ownerDocument.createElement("option");
      e.value = a.value;
      e.selected = -1 != f.indexOf(b, a.value);
      e.text = a.text;
      e.originalText = a.originalText;
      this.containerNode.appendChild(e);
    }, this) : c("option", this.containerNode).forEach(function(a) {
      a.selected = -1 != f.indexOf(b, a.value);
    });
    this.inherited(arguments);
  }, invertSelection:function(b) {
    var a = [];
    c("option", this.containerNode).forEach(function(b) {
      b.selected || a.push(b.value);
    });
    this._setValueAttr(a, !(!1 === b || null == b));
  }, _onChange:function() {
    this._handleOnChange(this.get("value"), !0);
  }, resize:function(b) {
    b && k.setMarginBox(this.domNode, b);
  }, postCreate:function() {
    this._set("value", this.get("value"));
    this.inherited(arguments);
  }});
  g("dojo-bidi") && (d = h("dijit.form.MultiSelect", d, {addSelected:function(b) {
    b.getSelected().forEach(function(a) {
      a.text = this.enforceTextDirWithUcc(this.restoreOriginalText(a), a.text);
    }, this);
    this.inherited(arguments);
  }, _setTextDirAttr:function(b) {
    this.textDir == b && this._created || !this.enforceTextDirWithUcc || (this._set("textDir", b), c("option", this.containerNode).forEach(function(a) {
      this._created || a.value !== a.text || (a.value = a.text);
      a.text = this.enforceTextDirWithUcc(a, a.originalText || a.text);
    }, this));
  }}));
  return d;
});

//# sourceMappingURL=MultiSelect.js.map
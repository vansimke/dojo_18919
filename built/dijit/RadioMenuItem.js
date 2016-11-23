//>>built
define("dijit/RadioMenuItem", "dojo/_base/array dojo/_base/declare dojo/dom-class dojo/query!css2 ./CheckedMenuItem ./registry".split(" "), function(c, d, h, e, f, g) {
  return d("dijit.RadioButtonMenuItem", f, {baseClass:"dijitMenuItem dijitRadioMenuItem", role:"menuitemradio", checkedChar:"*", group:"", _setGroupAttr:"domNode", _setCheckedAttr:function(b) {
    this.inherited(arguments);
    this._created && b && this.group && c.forEach(this._getRelatedWidgets(), function(a) {
      a != this && a.checked && a.set("checked", !1);
    }, this);
  }, _onClick:function(b) {
    this.disabled || this.checked || (this.set("checked", !0), this.onChange(!0));
    this.onClick(b);
  }, _getRelatedWidgets:function() {
    var b = [];
    e("[group\x3d" + this.group + "][role\x3d" + this.role + "]").forEach(function(a) {
      (a = g.getEnclosingWidget(a)) && b.push(a);
    });
    return b;
  }});
});

//# sourceMappingURL=RadioMenuItem.js.map
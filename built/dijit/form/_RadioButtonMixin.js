//>>built
define("dijit/form/_RadioButtonMixin", "dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(d, f, g, e, h, k) {
  return f("dijit.form._RadioButtonMixin", null, {type:"radio", _getRelatedWidgets:function() {
    var a = [];
    h("input[type\x3dradio]", this.focusNode.form || this.ownerDocument).forEach(e.hitch(this, function(b) {
      b.name == this.name && b.form == this.focusNode.form && (b = k.getEnclosingWidget(b)) && a.push(b);
    }));
    return a;
  }, _setCheckedAttr:function(a) {
    this.inherited(arguments);
    this._created && a && d.forEach(this._getRelatedWidgets(), e.hitch(this, function(a) {
      a != this && a.checked && a.set("checked", !1);
    }));
  }, _getSubmitValue:function(a) {
    return null == a ? "on" : a;
  }, _onClick:function(a) {
    if (this.checked || this.disabled) {
      return a.stopPropagation(), a.preventDefault(), !1;
    }
    if (this.readOnly) {
      return a.stopPropagation(), a.preventDefault(), d.forEach(this._getRelatedWidgets(), e.hitch(this, function(a) {
        g.set(this.focusNode || this.domNode, "checked", a.checked);
      })), !1;
    }
    var b = !1, c;
    d.some(this._getRelatedWidgets(), function(a) {
      return a.checked ? (c = a, !0) : !1;
    });
    this.checked = !0;
    c && (c.checked = !1);
    if (!1 === this.onClick(a) || a.defaultPrevented) {
      b = !0;
    }
    this.checked = !1;
    c && (c.checked = !0);
    b ? a.preventDefault() : this.set("checked", !0);
    return !b;
  }});
});

//# sourceMappingURL=_RadioButtonMixin.js.map
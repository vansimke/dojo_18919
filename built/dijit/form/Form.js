//>>built
define("dijit/form/Form", "dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/sniff ../_Widget ../_TemplatedMixin ./_FormMixin ../layout/_ContentPaneResizeMixin".split(" "), function(c, d, e, f, g, h, k, l) {
  return c("dijit.form.Form", [g, h, k, l], {name:"", action:"", method:"", encType:"", "accept-charset":"", accept:"", target:"", templateString:"\x3cform data-dojo-attach-point\x3d'containerNode' data-dojo-attach-event\x3d'onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}\x3e\x3c/form\x3e", postMixInProperties:function() {
    this.nameAttrSetting = this.name ? "name\x3d'" + this.name + "'" : "";
    this.inherited(arguments);
  }, execute:function() {
  }, onExecute:function() {
  }, _setEncTypeAttr:function(a) {
    d.set(this.domNode, "encType", a);
    f("ie") && (this.domNode.encoding = a);
    this._set("encType", a);
  }, reset:function(a) {
    var b = {returnValue:!0, preventDefault:function() {
      this.returnValue = !1;
    }, stopPropagation:function() {
    }, currentTarget:a ? a.target : this.domNode, target:a ? a.target : this.domNode};
    !1 !== this.onReset(b) && b.returnValue && this.inherited(arguments, []);
  }, onReset:function() {
    return !0;
  }, _onReset:function(a) {
    this.reset(a);
    a.stopPropagation();
    a.preventDefault();
    return !1;
  }, _onSubmit:function(a) {
    var b = this.constructor.prototype;
    if (this.execute != b.execute || this.onExecute != b.onExecute) {
      e.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0"), this.onExecute(), this.execute(this.getValues());
    }
    !1 === this.onSubmit(a) && (a.stopPropagation(), a.preventDefault());
  }, onSubmit:function() {
    return this.isValid();
  }, submit:function() {
    !1 !== this.onSubmit() && this.containerNode.submit();
  }});
});

//# sourceMappingURL=Form.js.map
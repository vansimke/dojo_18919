//>>built
define("dijit/form/MappedTextBox", ["dojo/_base/declare", "dojo/sniff", "dojo/dom-construct", "./ValidationTextBox"], function(b, c, d, e) {
  return b("dijit.form.MappedTextBox", e, {postMixInProperties:function() {
    this.inherited(arguments);
    this.nameAttrSetting = "";
  }, _setNameAttr:"valueNode", serialize:function(a) {
    return a.toString ? a.toString() : "";
  }, toString:function() {
    var a = this.filter(this.get("value"));
    return null != a ? "string" == typeof a ? a : this.serialize(a, this.constraints) : "";
  }, validate:function() {
    this.valueNode.value = this.toString();
    return this.inherited(arguments);
  }, buildRendering:function() {
    this.inherited(arguments);
    this.valueNode = d.place("\x3cinput type\x3d'hidden'" + (this.name && !c("msapp") ? ' name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "") + "/\x3e", this.textbox, "after");
  }, reset:function() {
    this.valueNode.value = "";
    this.inherited(arguments);
  }});
});

//# sourceMappingURL=MappedTextBox.js.map
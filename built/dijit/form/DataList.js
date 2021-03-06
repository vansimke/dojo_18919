//>>built
define("dijit/form/DataList", "dojo/_base/declare dojo/dom dojo/_base/lang dojo/query dojo/store/Memory ../registry".split(" "), function(b, g, d, c, h, e) {
  function f(a) {
    return {id:a.value, value:a.value, name:d.trim(a.innerText || a.textContent || "")};
  }
  return b("dijit.form.DataList", h, {constructor:function(a, b) {
    this.domNode = g.byId(b);
    d.mixin(this, a);
    this.id && e.add(this);
    this.domNode.style.display = "none";
    this.inherited(arguments, [{data:c("option", this.domNode).map(f)}]);
  }, destroy:function() {
    e.remove(this.id);
  }, fetchSelectedItem:function() {
    var a = c("\x3e option[selected]", this.domNode)[0] || c("\x3e option", this.domNode)[0];
    return a && f(a);
  }});
});

//# sourceMappingURL=DataList.js.map
//>>built
require({cache:{"url:dijit/templates/MenuSeparator.html":'\x3ctr class\x3d"dijitMenuSeparator" role\x3d"separator"\x3e\n\t\x3ctd class\x3d"dijitMenuSeparatorIconCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3ctd colspan\x3d"3" class\x3d"dijitMenuSeparatorLabelCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop dijitMenuSeparatorLabel"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\x3c/tr\x3e\n'}});
define("dijit/MenuSeparator", "dojo/_base/declare dojo/dom ./_WidgetBase ./_TemplatedMixin ./_Contained dojo/text!./templates/MenuSeparator.html".split(" "), function(a, b, c, d, e, f) {
  return a("dijit.MenuSeparator", [c, d, e], {templateString:f, buildRendering:function() {
    this.inherited(arguments);
    b.setSelectable(this.domNode, !1);
  }, isFocusable:function() {
    return !1;
  }});
});

//# sourceMappingURL=MenuSeparator.js.map
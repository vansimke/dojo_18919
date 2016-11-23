//>>built
define("dijit/form/NumberSpinner", ["dojo/_base/declare", "dojo/keys", "./_Spinner", "./NumberTextBox"], function(h, c, k, l) {
  return h("dijit.form.NumberSpinner", [k, l.Mixin], {baseClass:"dijitTextBox dijitSpinner dijitNumberTextBox", adjust:function(a, d) {
    var b = this.constraints, c = isNaN(a), f = !isNaN(b.max), g = !isNaN(b.min);
    c && 0 != d && (a = 0 < d ? g ? b.min : f ? b.max : 0 : f ? this.constraints.max : g ? b.min : 0);
    var e = a + d;
    if (c || isNaN(e)) {
      return a;
    }
    f && e > b.max && (e = b.max);
    g && e < b.min && (e = b.min);
    return e;
  }, _onKeyDown:function(a) {
    if (!(this.disabled || this.readOnly || a.keyCode != c.HOME && a.keyCode != c.END || a.ctrlKey || a.altKey || a.metaKey || "undefined" == typeof this.get("value"))) {
      var d = this.constraints[a.keyCode == c.HOME ? "min" : "max"];
      "number" == typeof d && this._setValueAttr(d, !1);
      a.stopPropagation();
      a.preventDefault();
    }
  }});
});

//# sourceMappingURL=NumberSpinner.js.map
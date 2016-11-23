//>>built
define("dijit/form/RangeBoundTextBox", ["dojo/_base/declare", "dojo/i18n", "./MappedTextBox", "dojo/i18n!./nls/validate"], function(c, d, e) {
  return c("dijit.form.RangeBoundTextBox", e, {rangeMessage:"", rangeCheck:function(b, a) {
    return ("min" in a ? 0 <= this.compare(b, a.min) : !0) && ("max" in a ? 0 >= this.compare(b, a.max) : !0);
  }, isInRange:function() {
    return this.rangeCheck(this.get("value"), this.constraints);
  }, _isDefinitelyOutOfRange:function() {
    var b = this.get("value");
    if (null == b) {
      return !1;
    }
    var a = !1;
    "min" in this.constraints && (a = this.constraints.min, a = 0 > this.compare(b, "number" == typeof a && 0 <= a && 0 != b ? 0 : a));
    !a && "max" in this.constraints && (a = this.constraints.max, a = 0 < this.compare(b, "number" != typeof a || 0 < a ? a : 0));
    return a;
  }, _isValidSubset:function() {
    return this.inherited(arguments) && !this._isDefinitelyOutOfRange();
  }, isValid:function(b) {
    return this.inherited(arguments) && (this._isEmpty(this.textbox.value) && !this.required || this.isInRange(b));
  }, getErrorMessage:function(b) {
    var a = this.get("value");
    return null == a || "" === a || "number" == typeof a && isNaN(a) || this.isInRange(b) ? this.inherited(arguments) : this.rangeMessage;
  }, postMixInProperties:function() {
    this.inherited(arguments);
    this.rangeMessage || (this.messages = d.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage);
  }});
});

//# sourceMappingURL=RangeBoundTextBox.js.map
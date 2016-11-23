//>>built
require({cache:{"url:dijit/form/templates/DropDownBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}"\n\trole\x3d"combobox"\n\taria-haspopup\x3d"true"\n\tdata-dojo-attach-point\x3d"_popupStateNode"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n\t\tdata-dojo-attach-point\x3d"_buttonNode" role\x3d"presentation"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"button presentation" aria-hidden\x3d"true"\n\t\t\t${_buttonInputDisabled}\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' ${!nameAttrSetting} type\x3d"${type}" autocomplete\x3d"off"\n\t\t\tdata-dojo-attach-point\x3d"textbox,focusNode" role\x3d"textbox"\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dijit/form/_DateTimeTextBox", "dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(g, h, f, k, e, l, m, n) {
  new Date("X");
  return k("dijit.form._DateTimeTextBox", [l, m], {templateString:n, hasDownArrow:!0, cssStateNodes:{_buttonNode:"dijitDownArrowButton"}, _unboundedConstraints:{}, pattern:h.regexp, datePackage:"", postMixInProperties:function() {
    this.inherited(arguments);
    this._set("type", "text");
  }, compare:function(a, b) {
    var c = this._isInvalidDate(a), d = this._isInvalidDate(b);
    if (c || d) {
      return c && d ? 0 : c ? -1 : 1;
    }
    var c = this.format(a, this._unboundedConstraints), d = this.format(b, this._unboundedConstraints), e = this.parse(c, this._unboundedConstraints), f = this.parse(d, this._unboundedConstraints);
    return c == d ? 0 : g.compare(e, f, this._selector);
  }, autoWidth:!0, format:function(a, b) {
    return a ? this.dateLocaleModule.format(a, b) : "";
  }, parse:function(a, b) {
    return this.dateLocaleModule.parse(a, b) || (this._isEmpty(a) ? null : void 0);
  }, serialize:function(a, b) {
    a.toGregorian && (a = a.toGregorian());
    return f.toISOString(a, b);
  }, dropDownDefaultValue:new Date, value:new Date(""), _blankValue:null, popupClass:"", _selector:"", constructor:function(a) {
    a = a || {};
    this.dateModule = a.datePackage ? e.getObject(a.datePackage, !1) : g;
    this.dateClassObj = this.dateModule.Date || Date;
    this.dateClassObj instanceof Date || (this.value = new this.dateClassObj(this.value));
    this.dateLocaleModule = a.datePackage ? e.getObject(a.datePackage + ".locale", !1) : h;
    this._set("pattern", this.dateLocaleModule.regexp);
    this._invalidDate = this.constructor.prototype.value.toString();
  }, buildRendering:function() {
    this.inherited(arguments);
    this.hasDownArrow || (this._buttonNode.style.display = "none");
    this.hasDownArrow || (this._buttonNode = this.domNode, this.baseClass += " dijitComboBoxOpenOnClick");
  }, _setConstraintsAttr:function(a) {
    a.selector = this._selector;
    a.fullYear = !0;
    var b = f.fromISOString;
    "string" == typeof a.min && (a.min = b(a.min), this.dateClassObj instanceof Date || (a.min = new this.dateClassObj(a.min)));
    "string" == typeof a.max && (a.max = b(a.max), this.dateClassObj instanceof Date || (a.max = new this.dateClassObj(a.max)));
    this.inherited(arguments);
    this._unboundedConstraints = e.mixin({}, this.constraints, {min:null, max:null});
  }, _isInvalidDate:function(a) {
    return !a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate;
  }, _setValueAttr:function(a, b, c) {
    void 0 !== a && ("string" == typeof a && (a = f.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
    this.inherited(arguments, [a, b, c]);
    this.value instanceof Date && (this.filterString = "");
    !1 !== b && this.dropDown && this.dropDown.set("value", a, !1);
  }, _set:function(a, b) {
    if ("value" == a) {
      b instanceof Date && !(this.dateClassObj instanceof Date) && (b = new this.dateClassObj(b));
      var c = this._get("value");
      if (c instanceof this.dateClassObj && 0 == this.compare(b, c)) {
        return;
      }
    }
    this.inherited(arguments);
  }, _setDropDownDefaultValueAttr:function(a) {
    this._isInvalidDate(a) && (a = new this.dateClassObj);
    this._set("dropDownDefaultValue", a);
  }, openDropDown:function(a) {
    this.dropDown && this.dropDown.destroy();
    var b = e.isString(this.popupClass) ? e.getObject(this.popupClass, !1) : this.popupClass, c = this, d = this.get("value");
    this.dropDown = new b({onChange:function(a) {
      c.set("value", a, !0);
    }, id:this.id + "_popup", dir:c.dir, lang:c.lang, value:d, textDir:c.textDir, currentFocus:this._isInvalidDate(d) ? this.dropDownDefaultValue : d, constraints:c.constraints, filterString:c.filterString, datePackage:c.datePackage, isDisabledDate:function(a) {
      return !c.rangeCheck(a, c.constraints);
    }});
    this.inherited(arguments);
  }, _getDisplayedValueAttr:function() {
    return this.textbox.value;
  }, _setDisplayedValueAttr:function(a, b) {
    this._setValueAttr(this.parse(a, this.constraints), b, a);
  }});
});

//# sourceMappingURL=_DateTimeTextBox.js.map
//>>built
require({cache:{"url:dijit/form/templates/Spinner.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d"dijitReset dijitButtonNode dijitSpinnerButtonContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitSpinnerButtonInner" type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t/\x3e\x3cdiv class\x3d"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton"\n\t\t\tdata-dojo-attach-point\x3d"upArrowNode"\n\t\t\t\x3e\x3cdiv class\x3d"dijitArrowButtonInner"\n\t\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField" value\x3d"\x26#9650; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/\x3e\x3c/div\n\t\t\x3e\x3c/div\n\t\t\x3e\x3cdiv class\x3d"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton"\n\t\t\tdata-dojo-attach-point\x3d"downArrowNode"\n\t\t\t\x3e\x3cdiv class\x3d"dijitArrowButtonInner"\n\t\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/\x3e\x3c/div\n\t\t\x3e\x3c/div\n\t\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' data-dojo-attach-point\x3d"textbox,focusNode" type\x3d"${type}" data-dojo-attach-event\x3d"onkeydown:_onKeyDown"\n\t\t\trole\x3d"spinbutton" autocomplete\x3d"off" ${!nameAttrSetting}\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dijit/form/_Spinner", "dojo/_base/declare dojo/keys dojo/_base/lang dojo/sniff dojo/mouse dojo/on ../typematic ./RangeBoundTextBox dojo/text!./templates/Spinner.html ./_TextBoxMixin".split(" "), function(f, c, g, p, h, k, d, l, m, n) {
  return f("dijit.form._Spinner", l, {defaultTimeout:500, minimumTimeout:10, timeoutChangeRate:.9, smallDelta:1, largeDelta:10, templateString:m, baseClass:"dijitTextBox dijitSpinner", cssStateNodes:{upArrowNode:"dijitUpArrowButton", downArrowNode:"dijitDownArrowButton"}, adjust:function(a) {
    return a;
  }, _arrowPressed:function(a, b, c) {
    this.disabled || this.readOnly || (this._setValueAttr(this.adjust(this.get("value"), b * c), !1), n.selectInputText(this.textbox, this.textbox.value.length));
  }, _arrowReleased:function() {
    this._wheelTimer = null;
  }, _typematicCallback:function(a, b, d) {
    var e = this.smallDelta;
    b == this.textbox && (b = d.keyCode, e = b == c.PAGE_UP || b == c.PAGE_DOWN ? this.largeDelta : this.smallDelta, b = b == c.UP_ARROW || b == c.PAGE_UP ? this.upArrowNode : this.downArrowNode);
    -1 == a ? this._arrowReleased(b) : this._arrowPressed(b, b == this.upArrowNode ? 1 : -1, e);
  }, _wheelTimer:null, _mouseWheeled:function(a) {
    if (this.focused) {
      a.stopPropagation();
      a.preventDefault();
      var b = a.wheelDelta / 120;
      Math.floor(b) != b && (b = 0 < a.wheelDelta ? 1 : -1);
      a = a.detail ? -1 * a.detail : b;
      if (0 !== a) {
        var c = this[0 < a ? "upArrowNode" : "downArrowNode"];
        this._arrowPressed(c, a, this.smallDelta);
        this._wheelTimer && this._wheelTimer.remove();
        this._wheelTimer = this.defer(function() {
          this._arrowReleased(c);
        }, 50);
      }
    }
  }, _setConstraintsAttr:function(a) {
    this.inherited(arguments);
    this.focusNode && (void 0 !== this.constraints.min ? this.focusNode.setAttribute("aria-valuemin", this.constraints.min) : this.focusNode.removeAttribute("aria-valuemin"), void 0 !== this.constraints.max ? this.focusNode.setAttribute("aria-valuemax", this.constraints.max) : this.focusNode.removeAttribute("aria-valuemax"));
  }, _setValueAttr:function(a, b) {
    this.focusNode.setAttribute("aria-valuenow", a);
    this.inherited(arguments);
  }, postCreate:function() {
    this.inherited(arguments);
    this.own(k(this.domNode, h.wheel, g.hitch(this, "_mouseWheeled")), d.addListener(this.upArrowNode, this.textbox, {keyCode:c.UP_ARROW, ctrlKey:!1, altKey:!1, shiftKey:!1, metaKey:!1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), d.addListener(this.downArrowNode, this.textbox, {keyCode:c.DOWN_ARROW, ctrlKey:!1, altKey:!1, shiftKey:!1, metaKey:!1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), d.addListener(this.upArrowNode, 
    this.textbox, {keyCode:c.PAGE_UP, ctrlKey:!1, altKey:!1, shiftKey:!1, metaKey:!1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), d.addListener(this.downArrowNode, this.textbox, {keyCode:c.PAGE_DOWN, ctrlKey:!1, altKey:!1, shiftKey:!1, metaKey:!1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout));
  }});
});

//# sourceMappingURL=_Spinner.js.map
//>>built
define("dijit/form/_AutoCompleterMixin", "dojo/aspect dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/query dojo/regexp dojo/sniff ./DataList ./_TextBoxMixin ./_SearchMixin".split(" "), function(l, g, m, e, f, n, p, k, q, h, r) {
  g = g("dijit.form._AutoCompleterMixin", r, {item:null, autoComplete:!0, highlightMatch:"first", labelAttr:"", labelType:"text", maxHeight:-1, _stopClickEvents:!1, _getCaretPos:function(a) {
    var b = 0;
    if ("number" == typeof a.selectionStart) {
      b = a.selectionStart;
    } else {
      if (k("ie")) {
        var c = a.ownerDocument.selection.createRange().duplicate();
        a = a.createTextRange();
        c.move("character", 0);
        a.move("character", 0);
        try {
          a.setEndPoint("EndToEnd", c), b = String(a.text).replace(/\r/g, "").length;
        } catch (d) {
        }
      }
    }
    return b;
  }, _setCaretPos:function(a, b) {
    b = parseInt(b);
    h.selectInputText(a, b, b);
  }, _setDisabledAttr:function(a) {
    this.inherited(arguments);
    this.domNode.setAttribute("aria-disabled", a ? "true" : "false");
  }, _onKey:function(a) {
    if (!(32 <= a.charCode)) {
      var b = a.charCode || a.keyCode;
      if (b != e.ALT && b != e.CTRL && b != e.META && b != e.SHIFT) {
        var c = this.dropDown, d = null;
        this._abortQuery();
        this.inherited(arguments);
        if (!(a.altKey || a.ctrlKey || a.metaKey)) {
          switch(this._opened && (d = c.getHighlightedOption()), b) {
            case e.PAGE_DOWN:
            ;
            case e.DOWN_ARROW:
            ;
            case e.PAGE_UP:
            ;
            case e.UP_ARROW:
              this._opened && this._announceOption(d);
              a.stopPropagation();
              a.preventDefault();
              break;
            case e.ENTER:
              if (d) {
                if (d == c.nextButton) {
                  this._nextSearch(1);
                  a.stopPropagation();
                  a.preventDefault();
                  break;
                } else {
                  if (d == c.previousButton) {
                    this._nextSearch(-1);
                    a.stopPropagation();
                    a.preventDefault();
                    break;
                  }
                }
                a.stopPropagation();
                a.preventDefault();
              } else {
                this._setBlurValue(), this._setCaretPos(this.focusNode, this.focusNode.value.length);
              }
            ;
            case e.TAB:
              b = this.get("displayedValue");
              if (c && (b == c._messages.previousMessage || b == c._messages.nextMessage)) {
                break;
              }
              d && this._selectOption(d);
            case e.ESCAPE:
              this._opened && (this._lastQuery = null, this.closeDropDown());
          }
        }
      }
    }
  }, _autoCompleteText:function(a) {
    var b = this.focusNode;
    h.selectInputText(b, b.value.length);
    var c = this.ignoreCase ? "toLowerCase" : "substr";
    0 == a[c](0).indexOf(this.focusNode.value[c](0)) ? (c = this.autoComplete ? this._getCaretPos(b) : b.value.length, c + 1 > b.value.length && (b.value = a, h.selectInputText(b, c))) : (b.value = a, h.selectInputText(b));
  }, _openResultList:function(a, b, c) {
    var d = this.dropDown.getHighlightedOption();
    this.dropDown.clearResultList();
    a.length || 0 != c.start ? (this._nextSearch = this.dropDown.onPage = f.hitch(this, function(b) {
      a.nextPage(-1 !== b);
      this.focus();
    }), this.dropDown.createOptions(a, c, f.hitch(this, "_getMenuLabelFromItem")), this._showResultList(), "direction" in c ? (c.direction ? this.dropDown.highlightFirstOption() : c.direction || this.dropDown.highlightLastOption(), d && this._announceOption(this.dropDown.getHighlightedOption())) : !this.autoComplete || this._prev_key_backspace || /^[*]+$/.test(b[this.searchAttr].toString()) || this._announceOption(this.dropDown.containerNode.firstChild.nextSibling)) : this.closeDropDown();
  }, _showResultList:function() {
    this.closeDropDown(!0);
    this.openDropDown();
    this.domNode.setAttribute("aria-expanded", "true");
  }, loadDropDown:function() {
    this._startSearchAll();
  }, isLoaded:function() {
    return !1;
  }, closeDropDown:function() {
    this._abortQuery();
    this._opened && (this.inherited(arguments), this.domNode.setAttribute("aria-expanded", "false"));
  }, _setBlurValue:function() {
    var a = this.get("displayedValue"), b = this.dropDown;
    !b || a != b._messages.previousMessage && a != b._messages.nextMessage ? "undefined" == typeof this.item ? (this.item = null, this.set("displayedValue", a)) : (this.value != this._lastValueReported && this._handleOnChange(this.value, !0), this._refreshState()) : this._setValueAttr(this._lastValueReported, !0);
    this.focusNode.removeAttribute("aria-activedescendant");
  }, _setItemAttr:function(a, b, c) {
    var d = "";
    a && (c || (c = this.store._oldAPI ? this.store.getValue(a, this.searchAttr) : a[this.searchAttr]), d = this._getValueField() != this.searchAttr ? this.store.getIdentity(a) : c);
    this.set("value", d, b, c, a);
  }, _announceOption:function(a) {
    if (a) {
      var b;
      if (a == this.dropDown.nextButton || a == this.dropDown.previousButton) {
        b = a.innerHTML, this.item = void 0, this.value = "";
      } else {
        var c = this.dropDown.items[a.getAttribute("item")];
        b = (this.store._oldAPI ? this.store.getValue(c, this.searchAttr) : c[this.searchAttr]).toString();
        this.set("item", c, !1, b);
      }
      this.focusNode.value = this.focusNode.value.substring(0, this._lastInput.length);
      this.focusNode.setAttribute("aria-activedescendant", m.get(a, "id"));
      this._autoCompleteText(b);
    }
  }, _selectOption:function(a) {
    this.closeDropDown();
    a && this._announceOption(a);
    this._setCaretPos(this.focusNode, this.focusNode.value.length);
    this._handleOnChange(this.value, !0);
    this.focusNode.removeAttribute("aria-activedescendant");
  }, _startSearchAll:function() {
    this._startSearch("");
  }, _startSearchFromInput:function() {
    this.item = void 0;
    this.inherited(arguments);
  }, _startSearch:function(a) {
    if (!this.dropDown) {
      var b = this.id + "_popup";
      this.dropDown = new (f.isString(this.dropDownClass) ? f.getObject(this.dropDownClass, !1) : this.dropDownClass)({onChange:f.hitch(this, this._selectOption), id:b, dir:this.dir, textDir:this.textDir});
    }
    this._lastInput = a;
    this.inherited(arguments);
  }, _getValueField:function() {
    return this.searchAttr;
  }, postMixInProperties:function() {
    this.inherited(arguments);
    if (!this.store && this.srcNodeRef && (this.store = new q({}, this.srcNodeRef), !("value" in this.params))) {
      var a = this.item = this.store.fetchSelectedItem();
      if (a) {
        var b = this._getValueField();
        this.value = this.store._oldAPI ? this.store.getValue(a, b) : a[b];
      }
    }
  }, postCreate:function() {
    var a = n('label[for\x3d"' + this.id + '"]');
    a.length && (a[0].id || (a[0].id = this.id + "_label"), this.domNode.setAttribute("aria-labelledby", a[0].id));
    this.inherited(arguments);
    l.after(this, "onSearch", f.hitch(this, "_openResultList"), !0);
  }, _getMenuLabelFromItem:function(a) {
    a = this.labelFunc(a, this.store);
    var b = this.labelType;
    "none" != this.highlightMatch && "text" == this.labelType && this._lastInput && (a = this.doHighlight(a, this._lastInput), b = "html");
    return {html:"html" == b, label:a};
  }, doHighlight:function(a, b) {
    var c = (this.ignoreCase ? "i" : "") + ("all" == this.highlightMatch ? "g" : ""), d = this.queryExpr.indexOf("${0}");
    b = p.escapeString(b);
    return this._escapeHtml(a.replace(new RegExp((0 == d ? "^" : "") + "(" + b + ")" + (d == this.queryExpr.length - 4 ? "$" : ""), c), "\uffff$1\uffff")).replace(/\uFFFF([^\uFFFF]+)\uFFFF/g, '\x3cspan class\x3d"dijitComboBoxHighlightMatch"\x3e$1\x3c/span\x3e');
  }, _escapeHtml:function(a) {
    return a = String(a).replace(/&/gm, "\x26amp;").replace(/</gm, "\x26lt;").replace(/>/gm, "\x26gt;").replace(/"/gm, "\x26quot;");
  }, reset:function() {
    this.item = null;
    this.inherited(arguments);
  }, labelFunc:function(a, b) {
    return (b._oldAPI ? b.getValue(a, this.labelAttr || this.searchAttr) : a[this.labelAttr || this.searchAttr]).toString();
  }, _setValueAttr:function(a, b, c, d) {
    this._set("item", d || null);
    null == a && (a = "");
    this.inherited(arguments);
  }});
  k("dojo-bidi") && g.extend({_setTextDirAttr:function(a) {
    this.inherited(arguments);
    this.dropDown && this.dropDown._set("textDir", a);
  }});
  return g;
});

//# sourceMappingURL=_AutoCompleterMixin.js.map
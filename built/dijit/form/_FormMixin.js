//>>built
define("dijit/form/_FormMixin", "dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/on dojo/window".split(" "), function(e, k, h, f, l, m) {
  return k("dijit.form._FormMixin", null, {state:"", _getDescendantFormWidgets:function(a) {
    var b = [];
    e.forEach(a || this.getChildren(), function(a) {
      "value" in a ? b.push(a) : b = b.concat(this._getDescendantFormWidgets(a.getChildren()));
    }, this);
    return b;
  }, reset:function() {
    e.forEach(this._getDescendantFormWidgets(), function(a) {
      a.reset && a.reset();
    });
  }, validate:function() {
    var a = !1;
    return e.every(e.map(this._getDescendantFormWidgets(), function(b) {
      b._hasBeenBlurred = !0;
      var c = b.disabled || !b.validate || b.validate();
      c || a || (m.scrollIntoView(b.containerNode || b.domNode), b.focus(), a = !0);
      return c;
    }), function(b) {
      return b;
    });
  }, setValues:function(a) {
    h.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
    return this.set("value", a);
  }, _setValueAttr:function(a) {
    var b = {};
    e.forEach(this._getDescendantFormWidgets(), function(a) {
      a.name && (b[a.name] || (b[a.name] = [])).push(a);
    });
    for (var c in b) {
      if (b.hasOwnProperty(c)) {
        var d = b[c], g = f.getObject(c, !1, a);
        void 0 !== g && (g = [].concat(g), "boolean" == typeof d[0].checked ? e.forEach(d, function(a) {
          a.set("value", -1 != e.indexOf(g, a._get("value")));
        }) : d[0].multiple ? d[0].set("value", g) : e.forEach(d, function(a, b) {
          a.set("value", g[b]);
        }));
      }
    }
  }, getValues:function() {
    h.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
    return this.get("value");
  }, _getValueAttr:function() {
    var a = {};
    e.forEach(this._getDescendantFormWidgets(), function(b) {
      var c = b.name;
      if (c && !b.disabled) {
        var d = b.get("value");
        "boolean" == typeof b.checked ? /Radio/.test(b.declaredClass) ? !1 !== d ? f.setObject(c, d, a) : (d = f.getObject(c, !1, a), void 0 === d && f.setObject(c, null, a)) : (b = f.getObject(c, !1, a), b || (b = [], f.setObject(c, b, a)), !1 !== d && b.push(d)) : (b = f.getObject(c, !1, a), "undefined" != typeof b ? f.isArray(b) ? b.push(d) : f.setObject(c, [b, d], a) : f.setObject(c, d, a));
      }
    });
    return a;
  }, isValid:function() {
    return "" == this.state;
  }, onValidStateChange:function() {
  }, _getState:function() {
    var a = e.map(this._descendants, function(a) {
      return a.get("state") || "";
    });
    return 0 <= e.indexOf(a, "Error") ? "Error" : 0 <= e.indexOf(a, "Incomplete") ? "Incomplete" : "";
  }, disconnectChildren:function() {
  }, connectChildren:function(a) {
    this._descendants = this._getDescendantFormWidgets();
    e.forEach(this._descendants, function(a) {
      a._started || a.startup();
    });
    a || this._onChildChange();
  }, _onChildChange:function(a) {
    a && "state" != a && "disabled" != a || this._set("state", this._getState());
    a && "value" != a && "disabled" != a && "checked" != a || (this._onChangeDelayTimer && this._onChangeDelayTimer.remove(), this._onChangeDelayTimer = this.defer(function() {
      delete this._onChangeDelayTimer;
      this._set("value", this.get("value"));
    }, 10));
  }, startup:function() {
    this.inherited(arguments);
    this._descendants = this._getDescendantFormWidgets();
    this.value = this.get("value");
    this.state = this._getState();
    var a = this;
    this.own(l(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function(b) {
      b.target != a.domNode && a._onChildChange(b.type.replace("attrmodified-", ""));
    }));
    this.watch("state", function(a, c, d) {
      this.onValidStateChange("" == d);
    });
  }, destroy:function() {
    this.inherited(arguments);
  }});
});

//# sourceMappingURL=_FormMixin.js.map
//>>built
define("dijit/_editor/_Plugin", ["dojo/_base/connect", "dojo/_base/declare", "dojo/_base/lang", "../Destroyable", "../form/Button"], function(g, e, f, h, k) {
  e = e("dijit._editor._Plugin", h, {constructor:function(a) {
    this.params = a || {};
    f.mixin(this, this.params);
    this._attrPairNames = {};
  }, editor:null, iconClassPrefix:"dijitEditorIcon", button:null, command:"", useDefaultCommand:!0, buttonClass:k, disabled:!1, getLabel:function(a) {
    return this.editor.commands[a];
  }, _initButton:function() {
    if (this.command.length) {
      var a = this.getLabel(this.command), b = this.editor, c = this.iconClassPrefix + " " + this.iconClassPrefix + this.command.charAt(0).toUpperCase() + this.command.substr(1);
      this.button || (a = f.mixin({label:a, ownerDocument:b.ownerDocument, dir:b.dir, lang:b.lang, showLabel:!1, iconClass:c, dropDown:this.dropDown, tabIndex:"-1"}, this.params || {}), delete a.name, this.button = new this.buttonClass(a));
    }
    this.get("disabled") && this.button && this.button.set("disabled", this.get("disabled"));
  }, destroy:function() {
    this.dropDown && this.dropDown.destroyRecursive();
    this.inherited(arguments);
  }, connect:function(a, b, c) {
    this.own(g.connect(a, b, this, c));
  }, updateState:function() {
    var a = this.editor, b = this.command, c, d;
    if (a && a.isLoaded && b.length) {
      var e = this.get("disabled");
      if (this.button) {
        try {
          d = !e && a.queryCommandEnabled(b), this.enabled !== d && (this.enabled = d, this.button.set("disabled", !d)), d && "boolean" == typeof this.button.checked && (c = a.queryCommandState(b), this.checked !== c && (this.checked = c, this.button.set("checked", a.queryCommandState(b))));
        } catch (f) {
        }
      }
    }
  }, setEditor:function(a) {
    this.editor = a;
    this._initButton();
    this.button && this.useDefaultCommand && (this.editor.queryCommandAvailable(this.command) ? this.own(this.button.on("click", f.hitch(this.editor, "execCommand", this.command, this.commandArg))) : this.button.domNode.style.display = "none");
    this.own(this.editor.on("NormalizedDisplayChanged", f.hitch(this, "updateState")));
  }, setToolbar:function(a) {
    this.button && a.addChild(this.button);
  }, set:function(a, b) {
    if ("object" === typeof a) {
      for (var c in a) {
        this.set(c, a[c]);
      }
      return this;
    }
    c = this._getAttrNames(a);
    if (this[c.s]) {
      var d = this[c.s].apply(this, Array.prototype.slice.call(arguments, 1))
    } else {
      this._set(a, b);
    }
    return d || this;
  }, get:function(a) {
    var b = this._getAttrNames(a);
    return this[b.g] ? this[b.g]() : this[a];
  }, _setDisabledAttr:function(a) {
    this._set("disabled", a);
    this.updateState();
  }, _getAttrNames:function(a) {
    var b = this._attrPairNames;
    if (b[a]) {
      return b[a];
    }
    var c = a.charAt(0).toUpperCase() + a.substr(1);
    return b[a] = {s:"_set" + c + "Attr", g:"_get" + c + "Attr"};
  }, _set:function(a, b) {
    this[a] = b;
  }});
  e.registry = {};
  return e;
});

//# sourceMappingURL=_Plugin.js.map
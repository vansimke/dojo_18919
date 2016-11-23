//>>built
define("dijit/_editor/plugins/LinkDialog", "require dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dojo/sniff dojo/query dojo/string ../_Plugin ../../form/DropDownButton ../range".split(" "), function(u, n, k, v, d, l, p, w, q, m, x, r) {
  var h = n("dijit._editor.plugins.LinkDialog", m, {buttonClass:x, useDefaultCommand:!1, urlRegExp:"((https?|ftps?|file)\\://|./|../|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?", 
  emailRegExp:"\x3c?(mailto\\:)([!#-'*+\\-\\/-9\x3d?A-Z^-~]+[.])*[!#-'*+\\-\\/-9\x3d?A-Z^-~]+@((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*\x3e?", htmlTemplate:'\x3ca href\x3d"${urlInput}" _djrealurl\x3d"${urlInput}" target\x3d"${targetSelect}"\x3e${textInput}\x3c/a\x3e', tag:"a", _hostRxp:/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, _userAtRxp:/^([!#-'*+\-\/-9=?A-Z^-~]+[.])*[!#-'*+\-\/-9=?A-Z^-~]+@/i, 
  linkDialogTemplate:"\x3ctable role\x3d'presentation'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_urlInput'\x3e${url}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'true' id\x3d'${id}_urlInput' name\x3d'urlInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_textInput'\x3e${text}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'true' id\x3d'${id}_textInput' name\x3d'textInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_targetSelect'\x3e${target}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cselect id\x3d'${id}_targetSelect' name\x3d'targetSelect' data-dojo-type\x3d'dijit.form.Select'\x3e\x3coption selected\x3d'selected' value\x3d'_self'\x3e${currentWindow}\x3c/option\x3e\x3coption value\x3d'_blank'\x3e${newWindow}\x3c/option\x3e\x3coption value\x3d'_top'\x3e${topWindow}\x3c/option\x3e\x3coption value\x3d'_parent'\x3e${parentWindow}\x3c/option\x3e\x3c/select\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'submit' id\x3d'${id}_setButton'\x3e${set}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'button' id\x3d'${id}_cancelButton'\x3e${buttonCancel}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", 
  _initButton:function() {
    this.inherited(arguments);
    this.button.loadDropDown = d.hitch(this, "_loadDropDown");
    this._connectTagEvents();
  }, _loadDropDown:function(a) {
    u("dojo/i18n ../../TooltipDialog ../../registry ../../form/Button ../../form/Select ../../form/ValidationTextBox dojo/i18n!../../nls/common dojo/i18n!../nls/LinkDialog".split(" "), d.hitch(this, function(b, c, e) {
      var g = this;
      this.tag = "insertImage" == this.command ? "img" : "a";
      b = d.delegate(b.getLocalization("dijit", "common", this.lang), b.getLocalization("dijit._editor", "LinkDialog", this.lang));
      var f = this.dropDown = this.button.dropDown = new c({title:b[this.command + "Title"], ownerDocument:this.editor.ownerDocument, dir:this.editor.dir, execute:d.hitch(this, "setValue"), onOpen:function() {
        g._onOpenDialog();
        c.prototype.onOpen.apply(this, arguments);
      }, onCancel:function() {
        setTimeout(d.hitch(g, "_onCloseDialog"), 0);
      }});
      b.urlRegExp = this.urlRegExp;
      b.id = e.getUniqueId(this.editor.id);
      this._uniqueId = b.id;
      this._setContent(f.title + "\x3cdiv style\x3d'border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'\x3e\x3c/div\x3e" + q.substitute(this.linkDialogTemplate, b));
      f.startup();
      this._urlInput = e.byId(this._uniqueId + "_urlInput");
      this._textInput = e.byId(this._uniqueId + "_textInput");
      this._setButton = e.byId(this._uniqueId + "_setButton");
      this.own(e.byId(this._uniqueId + "_cancelButton").on("click", d.hitch(this.dropDown, "onCancel")));
      this._urlInput && this.own(this._urlInput.on("change", d.hitch(this, "_checkAndFixInput")));
      this._textInput && this.own(this._textInput.on("change", d.hitch(this, "_checkAndFixInput")));
      this._urlRegExp = new RegExp("^" + this.urlRegExp + "$", "i");
      this._emailRegExp = new RegExp("^" + this.emailRegExp + "$", "i");
      this._urlInput.isValid = d.hitch(this, function() {
        var a = this._urlInput.get("value");
        return this._urlRegExp.test(a) || this._emailRegExp.test(a);
      });
      this.own(l(f.domNode, "keydown", d.hitch(this, d.hitch(this, function(a) {
        !a || a.keyCode != v.ENTER || a.shiftKey || a.metaKey || a.ctrlKey || a.altKey || this._setButton.get("disabled") || (f.onExecute(), f.execute(f.get("value")));
      }))));
      a();
    }));
  }, _checkAndFixInput:function() {
    var a = this, b = this._urlInput.get("value");
    this._delayedCheck && (clearTimeout(this._delayedCheck), this._delayedCheck = null);
    this._delayedCheck = setTimeout(function() {
      var c = b, e = !1, g = !1;
      c && 1 < c.length && (c = d.trim(c), 0 !== c.indexOf("mailto:") && (0 < c.indexOf("/") ? -1 === c.indexOf("://") && "/" !== c.charAt(0) && c.indexOf("./") && 0 !== c.indexOf("../") && a._hostRxp.test(c) && (e = !0) : a._userAtRxp.test(c) && (g = !0)));
      e && a._urlInput.set("value", "http://" + c);
      g && a._urlInput.set("value", "mailto:" + c);
      a._setButton.set("disabled", !a._isValid());
    }, 250);
  }, _connectTagEvents:function() {
    this.editor.onLoadDeferred.then(d.hitch(this, function() {
      this.own(l(this.editor.editNode, "dblclick", d.hitch(this, "_onDblClick")));
    }));
  }, _isValid:function() {
    return this._urlInput.isValid() && this._textInput.isValid();
  }, _setContent:function(a) {
    this.dropDown.set({parserScope:"dojo", content:a});
  }, _checkValues:function(a) {
    a && a.urlInput && (a.urlInput = a.urlInput.replace(/"/g, "\x26quot;"));
    return a;
  }, setValue:function(a) {
    this._onCloseDialog();
    if (9 > p("ie")) {
      var b = r.getSelection(this.editor.window).getRangeAt(0).endContainer;
      3 === b.nodeType && (b = b.parentNode);
      b && b.nodeName && b.nodeName.toLowerCase() !== this.tag && (b = this.editor.selection.getSelectedElement(this.tag));
      b && b.nodeName && b.nodeName.toLowerCase() === this.tag && this.editor.queryCommandEnabled("unlink") && (this.editor.selection.selectElementChildren(b), this.editor.execCommand("unlink"));
    }
    a = this._checkValues(a);
    this.editor.execCommand("inserthtml", q.substitute(this.htmlTemplate, a));
    w("a", this.editor.document).forEach(function(a) {
      a.innerHTML || k.has(a, "name") || a.parentNode.removeChild(a);
    }, this);
  }, _onCloseDialog:function() {
    this.editor.focused && this.editor.focus();
  }, _getCurrentValues:function(a) {
    var b, c, d;
    a && a.tagName.toLowerCase() === this.tag ? (b = a.getAttribute("_djrealurl") || a.getAttribute("href"), d = a.getAttribute("target") || "_self", c = a.textContent || a.innerText, this.editor.selection.selectElement(a, !0)) : c = this.editor.selection.getSelectedText();
    return {urlInput:b || "", textInput:c || "", targetSelect:d || ""};
  }, _onOpenDialog:function() {
    var a, b;
    if (p("ie")) {
      if (b = r.getSelection(this.editor.window), b.rangeCount) {
        var c = b.getRangeAt(0);
        a = c.endContainer;
        3 === a.nodeType && (a = a.parentNode);
        a && a.nodeName && a.nodeName.toLowerCase() !== this.tag && (a = this.editor.selection.getSelectedElement(this.tag));
        if (!a || a.nodeName && a.nodeName.toLowerCase() !== this.tag) {
          (b = this.editor.selection.getAncestorElement(this.tag)) && b.nodeName && b.nodeName.toLowerCase() == this.tag ? (a = b, this.editor.selection.selectElement(a)) : c.startContainer === c.endContainer && (b = c.startContainer.firstChild) && b.nodeName && b.nodeName.toLowerCase() == this.tag && (a = b, this.editor.selection.selectElement(a));
        }
      }
    } else {
      a = this.editor.selection.getAncestorElement(this.tag);
    }
    this.dropDown.reset();
    this._setButton.set("disabled", !0);
    this.dropDown.set("value", this._getCurrentValues(a));
  }, _onDblClick:function(a) {
    if (a && a.target && (a = a.target, (a.tagName ? a.tagName.toLowerCase() : "") === this.tag && k.get(a, "href"))) {
      var b = this.editor;
      this.editor.selection.selectElement(a);
      b.onDisplayChanged();
      b._updateTimer && (b._updateTimer.remove(), delete b._updateTimer);
      b.onNormalizedDisplayChanged();
      var c = this.button;
      setTimeout(function() {
        c.set("disabled", !1);
        c.loadAndOpenDropDown().then(function() {
          c.dropDown.focus && c.dropDown.focus();
        });
      }, 10);
    }
  }}), t = n("dijit._editor.plugins.ImgLinkDialog", [h], {linkDialogTemplate:"\x3ctable role\x3d'presentation'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_urlInput'\x3e${url}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput dojoType\x3d'dijit.form.ValidationTextBox' regExp\x3d'${urlRegExp}' required\x3d'true' id\x3d'${id}_urlInput' name\x3d'urlInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_textInput'\x3e${text}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'false' id\x3d'${id}_textInput' name\x3d'textInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'submit' id\x3d'${id}_setButton'\x3e${set}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'button' id\x3d'${id}_cancelButton'\x3e${buttonCancel}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", 
  htmlTemplate:'\x3cimg src\x3d"${urlInput}" _djrealurl\x3d"${urlInput}" alt\x3d"${textInput}" /\x3e', tag:"img", _getCurrentValues:function(a) {
    var b, c;
    a && a.tagName.toLowerCase() === this.tag ? (b = a.getAttribute("_djrealurl") || a.getAttribute("src"), c = a.getAttribute("alt"), this.editor.selection.selectElement(a, !0)) : c = this.editor.selection.getSelectedText();
    return {urlInput:b || "", textInput:c || ""};
  }, _isValid:function() {
    return this._urlInput.isValid();
  }, _connectTagEvents:function() {
    this.inherited(arguments);
    this.editor.onLoadDeferred.then(d.hitch(this, function() {
      this.own(l(this.editor.editNode, "mousedown", d.hitch(this, "_selectTag")));
    }));
  }, _selectTag:function(a) {
    a && a.target && (a = a.target, (a.tagName ? a.tagName.toLowerCase() : "") === this.tag && this.editor.selection.selectElement(a));
  }, _checkValues:function(a) {
    a && a.urlInput && (a.urlInput = a.urlInput.replace(/"/g, "\x26quot;"));
    a && a.textInput && (a.textInput = a.textInput.replace(/"/g, "\x26quot;"));
    return a;
  }, _onDblClick:function(a) {
    if (a && a.target && (a = a.target, (a.tagName ? a.tagName.toLowerCase() : "") === this.tag && k.get(a, "src"))) {
      var b = this.editor;
      this.editor.selection.selectElement(a);
      b.onDisplayChanged();
      b._updateTimer && (b._updateTimer.remove(), delete b._updateTimer);
      b.onNormalizedDisplayChanged();
      var c = this.button;
      setTimeout(function() {
        c.set("disabled", !1);
        c.loadAndOpenDropDown().then(function() {
          c.dropDown.focus && c.dropDown.focus();
        });
      }, 10);
    }
  }});
  m.registry.createLink = function() {
    return new h({command:"createLink"});
  };
  m.registry.insertImage = function() {
    return new t({command:"insertImage"});
  };
  h.ImgLinkDialog = t;
  return h;
});

//# sourceMappingURL=LinkDialog.js.map
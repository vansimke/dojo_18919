//>>built
define("dijit/_editor/plugins/Print", "dojo/_base/declare dojo/i18n dojo/_base/lang dojo/sniff ../../focus ../_Plugin ../../form/Button dojo/i18n!../nls/commands".split(" "), function(h, k, e, f, l, d, m) {
  var g = h("dijit._editor.plugins.Print", d, {_initButton:function() {
    var a = k.getLocalization("dijit._editor", "commands"), b = this.editor;
    this.button = new m({label:a.print, ownerDocument:b.ownerDocument, dir:b.dir, lang:b.lang, showLabel:!1, iconClass:this.iconClassPrefix + " " + this.iconClassPrefix + "Print", tabIndex:"-1", onClick:e.hitch(this, "_print")});
  }, setEditor:function(a) {
    this.editor = a;
    this._initButton();
    this.editor.onLoadDeferred.then(e.hitch(this, function() {
      this.editor.iframe.contentWindow.print || this.button.set("disabled", !0);
    }));
  }, updateState:function() {
    var a = this.get("disabled");
    this.editor.iframe.contentWindow.print || (a = !0);
    this.button.set("disabled", a);
  }, _print:function() {
    var a = this.editor.iframe;
    if (a.contentWindow.print) {
      if (f("opera") || f("chrome")) {
        var b = this.editor.document, c = this.editor.get("value"), c = "\x3chtml\x3e\x3chead\x3e\x3cmeta http-equiv\x3d'Content-Type' content\x3d'text/html; charset\x3d'UTF-8'\x3e\x3c/head\x3e\x3cbody\x3e" + c + "\x3c/body\x3e\x3c/html\x3e", a = window.open("javascript: ''", "", "status\x3d0,menubar\x3d0,location\x3d0,toolbar\x3d0,width\x3d1,height\x3d1,resizable\x3d0,scrollbars\x3d0");
        a.document.open();
        a.document.write(c);
        a.document.close();
        if (b = b.getElementsByTagName("style")) {
          for (c = 0;c < b.length;c++) {
            var e = b[c].innerHTML, d = a.document.createElement("style");
            d.appendChild(a.document.createTextNode(e));
            a.document.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        a.print();
        a.close();
      } else {
        l.focus(a), a.contentWindow.print();
      }
    }
  }});
  d.registry.print = function() {
    return new g({command:"print"});
  };
  return g;
});

//# sourceMappingURL=Print.js.map
//>>built
define("dijit/_TemplatedMixin", "dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(m, n, g, h, p, q, l, r) {
  var e = n("dijit._TemplatedMixin", r, {templateString:null, templatePath:null, _skipNodeCache:!1, searchContainerNode:!0, _stringRepl:function(a) {
    var b = this.declaredClass, d = this;
    return l.substitute(a, this, function(a, c) {
      "!" == c.charAt(0) && (a = h.getObject(c.substr(1), !1, d));
      if ("undefined" == typeof a) {
        throw Error(b + " template:" + c);
      }
      return null == a ? "" : "!" == c.charAt(0) ? a : this._escapeValue("" + a);
    }, this);
  }, _escapeValue:function(a) {
    return a.replace(/["'<>&]/g, function(a) {
      return {"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;"}[a];
    });
  }, buildRendering:function() {
    if (!this._rendered) {
      this.templateString || (this.templateString = m(this.templatePath, {sanitize:!0}));
      var a = e.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), b;
      if (h.isString(a)) {
        if (b = g.toDom(this._stringRepl(a), this.ownerDocument), 1 != b.nodeType) {
          throw Error("Invalid template: " + a);
        }
      } else {
        b = a.cloneNode(!0);
      }
      this.domNode = b;
    }
    this.inherited(arguments);
    this._rendered || this._fillContent(this.srcNodeRef);
    this._rendered = !0;
  }, _fillContent:function(a) {
    var b = this.containerNode;
    if (a && b) {
      for (;a.hasChildNodes();) {
        b.appendChild(a.firstChild);
      }
    }
  }});
  e._templateCache = {};
  e.getCachedTemplate = function(a, b, d) {
    var k = e._templateCache, c = a, f = k[c];
    if (f) {
      try {
        if (!f.ownerDocument || f.ownerDocument == (d || document)) {
          return f;
        }
      } catch (h) {
      }
      g.destroy(f);
    }
    a = l.trim(a);
    if (b || a.match(/\$\{([^\}]+)\}/g)) {
      return k[c] = a;
    }
    b = g.toDom(a, d);
    if (1 != b.nodeType) {
      throw Error("Invalid template: " + a);
    }
    return k[c] = b;
  };
  q("ie") && p(window, "unload", function() {
    var a = e._templateCache, b;
    for (b in a) {
      var d = a[b];
      "object" == typeof d && g.destroy(d);
      delete a[b];
    }
  });
  return e;
});

//# sourceMappingURL=_TemplatedMixin.js.map
//>>built
define("dijit/Declaration", "dojo/_base/array dojo/aspect dojo/_base/declare dojo/_base/lang dojo/parser dojo/query ./_Widget ./_TemplatedMixin ./_WidgetsInTemplateMixin dojo/NodeList-dom".split(" "), function(c, g, h, p, e, f, k, q, r) {
  return h("dijit.Declaration", k, {_noScript:!0, stopParser:!0, widgetClass:"", defaults:null, mixins:[], buildRendering:function() {
    var b = this.srcNodeRef.parentNode.removeChild(this.srcNodeRef), t = f("\x3e script[type\x3d'dojo/method']", b).orphan(), u = f("\x3e script[type\x3d'dojo/connect']", b).orphan(), l = f("\x3e script[type\x3d'dojo/aspect']", b).orphan(), m = b.nodeName, d = this.defaults || {};
    c.forEach(t, function(a) {
      var b = a.getAttribute("event") || a.getAttribute("data-dojo-event"), c = e._functionFromScript(a, "data-dojo-");
      b ? d[b] = c : l.push(a);
    });
    this.mixins = this.mixins.length ? c.map(this.mixins, function(a) {
      return p.getObject(a);
    }) : [k, q, r];
    d._skipNodeCache = !0;
    d.templateString = "\x3c" + m + " class\x3d'" + b.className + "' data-dojo-attach-point\x3d'" + (b.getAttribute("data-dojo-attach-point") || b.getAttribute("dojoAttachPoint") || "") + "' data-dojo-attach-event\x3d'" + (b.getAttribute("data-dojo-attach-event") || b.getAttribute("dojoAttachEvent") || "") + "' \x3e" + b.innerHTML.replace(/\%7B/g, "{").replace(/\%7D/g, "}") + "\x3c/" + m + "\x3e";
    var n = h(this.widgetClass, this.mixins, d);
    c.forEach(l, function(a) {
      a.getAttribute("data-dojo-advice");
      var b = a.getAttribute("data-dojo-method") || "postscript";
      a = e._functionFromScript(a);
      g.after(n.prototype, b, a, !0);
    });
    c.forEach(u, function(a) {
      var b = a.getAttribute("event") || a.getAttribute("data-dojo-event");
      a = e._functionFromScript(a);
      g.after(n.prototype, b, a, !0);
    });
  }});
});

//# sourceMappingURL=Declaration.js.map
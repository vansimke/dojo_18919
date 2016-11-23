//>>built
define("dijit/form/_ExpandingTextAreaMixin", "dojo/_base/declare dojo/dom-construct dojo/has dojo/_base/lang dojo/on dojo/_base/window ../Viewport".split(" "), function(g, l, k, e, m, n, p) {
  k.add("textarea-needs-help-shrinking", function() {
    var b = n.body(), a = l.create("textarea", {rows:"5", cols:"20", value:" ", style:{zoom:1, fontSize:"12px", height:"96px", overflow:"hidden", visibility:"hidden", position:"absolute", border:"5px solid white", margin:"0", padding:"0", boxSizing:"border-box", MsBoxSizing:"border-box", WebkitBoxSizing:"border-box", MozBoxSizing:"border-box"}}, b, "last"), c = a.scrollHeight >= a.clientHeight;
    b.removeChild(a);
    return c;
  });
  return g("dijit.form._ExpandingTextAreaMixin", null, {_setValueAttr:function() {
    this.inherited(arguments);
    this.resize();
  }, postCreate:function() {
    this.inherited(arguments);
    var b = this.textbox;
    b.style.overflowY = "hidden";
    this.own(m(b, "focus, resize", e.hitch(this, "_resizeLater")));
  }, startup:function() {
    this.inherited(arguments);
    this.own(p.on("resize", e.hitch(this, "_resizeLater")));
    this._resizeLater();
  }, _onInput:function(b) {
    this.inherited(arguments);
    this.resize();
  }, _estimateHeight:function() {
    var b = this.textbox;
    b.rows = (b.value.match(/\n/g) || []).length + 1;
  }, _resizeLater:function() {
    this.defer("resize");
  }, resize:function() {
    function b() {
      var b = !1;
      "" === a.value && (a.value = " ", b = !0);
      var c = a.scrollHeight;
      b && (a.value = "");
      return c;
    }
    var a = this.textbox;
    "hidden" == a.style.overflowY && (a.scrollTop = 0);
    if (!this.busyResizing) {
      this.busyResizing = !0;
      if (b() || a.offsetHeight) {
        var c = b() + Math.max(a.offsetHeight - a.clientHeight, 0), d = c + "px";
        d != a.style.height && (a.style.height = d, a.rows = 1);
        if (k("textarea-needs-help-shrinking")) {
          var f = b(), e = a.style.minHeight, h = 4, g = a.scrollTop;
          a.style.minHeight = d;
          for (a.style.height = "auto";0 < c;) {
            a.style.minHeight = Math.max(c - h, 4) + "px";
            d = b();
            f -= d;
            c -= f;
            if (f < h) {
              break;
            }
            f = d;
            h <<= 1;
          }
          a.style.height = c + "px";
          a.style.minHeight = e;
          a.scrollTop = g;
        }
        a.style.overflowY = b() > a.clientHeight ? "auto" : "hidden";
        "hidden" == a.style.overflowY && (a.scrollTop = 0);
      } else {
        this._estimateHeight();
      }
      this.busyResizing = !1;
    }
  }});
});

//# sourceMappingURL=_ExpandingTextAreaMixin.js.map
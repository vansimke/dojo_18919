//>>built
define("dijit/_editor/plugins/AlwaysShowToolbar", "dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/_base/lang dojo/on dojo/sniff dojo/_base/window ../_Plugin".split(" "), function(l, h, k, d, e, m, g, p, n) {
  return l("dijit._editor.plugins.AlwaysShowToolbar", n, {_handleScroll:!0, setEditor:function(b) {
    b.iframe && (this.editor = b, b.onLoadDeferred.then(e.hitch(this, this.enable)));
  }, enable:function(b) {
    this._updateHeight();
    this.own(m(window, "scroll", e.hitch(this, "globalOnScrollHandler")), this.editor.on("NormalizedDisplayChanged", e.hitch(this, "_updateHeight")));
    return b;
  }, _updateHeight:function() {
    var b = this.editor;
    if (b.isLoaded && !b.height) {
      var a = d.getMarginSize(b.editNode).h;
      g("opera") && (a = b.editNode.scrollHeight);
      a || (a = d.getMarginSize(b.document.body).h);
      this._fixEnabled && (a += d.getMarginSize(this.editor.header).h);
      if (0 != a) {
        if (7 >= g("ie") && this.editor.minHeight) {
          var f = parseInt(this.editor.minHeight);
          a < f && (a = f);
        }
        a != this._lastHeight && (this._lastHeight = a, d.setMarginBox(b.iframe, {h:this._lastHeight}));
      }
    }
  }, _lastHeight:0, globalOnScrollHandler:function() {
    var b = 7 > g("ie");
    if (this._handleScroll) {
      var a = this.editor.header;
      this._scrollSetUp || (this._scrollSetUp = !0, this._scrollThreshold = d.position(a, !0).y);
      var f = d.docScroll(this.editor.ownerDocument).y, c = a.style;
      if (f > this._scrollThreshold && f < this._scrollThreshold + this._lastHeight) {
        if (!this._fixEnabled) {
          var e = d.getMarginSize(a);
          this.editor.iframe.style.marginTop = e.h + "px";
          b ? (c.left = d.position(a).x, this._IEOriginalPos = a.previousSibling ? ["after", a.previousSibling] : a.nextSibling ? ["before", a.nextSibling] : ["last", a.parentNode], this.editor.ownerDocumentBody.appendChild(a), h.add(a, "dijitIEFixedToolbar")) : (c.position = "fixed", c.top = "0px");
          d.setMarginBox(a, {w:e.w});
          c.zIndex = 2E3;
          this._fixEnabled = !0;
        }
        b = this.height ? parseInt(this.editor.height) : this.editor._lastHeight;
        c.display = f > this._scrollThreshold + b ? "none" : "";
      } else {
        this._fixEnabled && (this.editor.iframe.style.marginTop = "", c.position = "", c.top = "", c.zIndex = "", c.display = "", b && (c.left = "", h.remove(a, "dijitIEFixedToolbar"), this._IEOriginalPos ? (k.place(a, this._IEOriginalPos[1], this._IEOriginalPos[0]), this._IEOriginalPos = null) : k.place(a, this.editor.iframe, "before")), c.width = "", this._fixEnabled = !1);
      }
    }
  }, destroy:function() {
    this._IEOriginalPos = null;
    this._handleScroll = !1;
    this.inherited(arguments);
    7 > g("ie") && h.remove(this.editor.header, "dijitIEFixedToolbar");
  }});
});

//# sourceMappingURL=AlwaysShowToolbar.js.map
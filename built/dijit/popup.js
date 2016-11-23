//>>built
define("dijit/popup", "dojo/_base/array dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on ./place ./BackgroundIframe ./Viewport ./main dojo/touch".split(" "), function(w, x, e, y, z, r, k, p, A, t, m, u, v, B, C, D) {
  function E() {
    this._popupWrapper && (r.destroy(this._popupWrapper), delete this._popupWrapper);
  }
  e = e(null, {_stack:[], _beginZIndex:1E3, _idGen:1, _repositionAll:function() {
    if (this._firstAroundNode) {
      var a = this._firstAroundPosition, b = k.position(this._firstAroundNode, !0), c = b.x - a.x, a = b.y - a.y;
      if (c || a) {
        for (this._firstAroundPosition = b, b = 0;b < this._stack.length;b++) {
          var d = this._stack[b].wrapper.style;
          d.top = parseFloat(d.top) + a + "px";
          "auto" == d.right ? d.left = parseFloat(d.left) + c + "px" : d.right = parseFloat(d.right) - c + "px";
        }
      }
      this._aroundMoveListener = setTimeout(m.hitch(this, "_repositionAll"), c || a ? 10 : 50);
    }
  }, _createWrapper:function(a) {
    var b = a._popupWrapper, c = a.domNode;
    b || (b = r.create("div", {"class":"dijitPopup", style:{display:"none"}, role:"region", "aria-label":a["aria-label"] || a.label || a.name || a.id}, a.ownerDocumentBody), b.appendChild(c), c = c.style, c.display = "", c.visibility = "", c.position = "", c.top = "0px", a._popupWrapper = b, x.after(a, "destroy", E, !0), "ontouchend" in document && u(b, "touchend", function(a) {
      /^(input|button|textarea)$/i.test(a.target.tagName) || a.preventDefault();
    }), b.dojoClick = !0);
    return b;
  }, moveOffScreen:function(a) {
    var b = this._createWrapper(a);
    a = k.isBodyLtr(a.ownerDocument);
    var c = {visibility:"hidden", top:"-9999px", display:""};
    c[a ? "left" : "right"] = "-9999px";
    c[a ? "right" : "left"] = "auto";
    p.set(b, c);
    return b;
  }, hide:function(a) {
    var b = this._createWrapper(a);
    p.set(b, {display:"none", height:"auto", overflowY:"visible", border:""});
    a = a.domNode;
    "_originalStyle" in a && (a.style.cssText = a._originalStyle);
  }, getTopPopup:function() {
    for (var a = this._stack, b = a.length - 1;0 < b && a[b].parent === a[b - 1].widget;b--) {
    }
    return a[b];
  }, open:function(a) {
    for (var b = this._stack, c = a.popup, d = c.domNode, f = a.orient || ["below", "below-alt", "above", "above-alt"], F = a.parent ? a.parent.isLeftToRight() : k.isBodyLtr(c.ownerDocument), h = a.around, q = a.around && a.around.id ? a.around.id + "_dropdown" : "popup_" + this._idGen++;b.length && (!a.parent || !y.isDescendant(a.parent.domNode, b[b.length - 1].widget.domNode));) {
      this.close(b[b.length - 1].widget);
    }
    var g = this.moveOffScreen(c);
    c.startup && !c._started && c.startup();
    var l, n = k.position(d);
    if ("maxHeight" in a && -1 != a.maxHeight) {
      l = a.maxHeight || Infinity;
    } else {
      l = C.getEffectiveBox(this.ownerDocument);
      var e = h ? k.position(h, !1) : {y:a.y - (a.padding || 0), h:2 * (a.padding || 0)};
      l = Math.floor(Math.max(e.y, l.h - (e.y + e.h)));
    }
    n.h > l && (n = p.getComputedStyle(d), p.set(g, {overflowY:"scroll", height:l + "px", border:n.borderLeftWidth + " " + n.borderLeftStyle + " " + n.borderLeftColor}), d._originalStyle = d.style.cssText, d.style.border = "none");
    z.set(g, {id:q, style:{zIndex:this._beginZIndex + b.length}, "class":"dijitPopup " + (c.baseClass || c["class"] || "").split(" ")[0] + "Popup", dijitPopupParent:a.parent ? a.parent.id : ""});
    0 == b.length && h && (this._firstAroundNode = h, this._firstAroundPosition = k.position(h, !0), this._aroundMoveListener = setTimeout(m.hitch(this, "_repositionAll"), 50));
    A("config-bgIframe") && !c.bgIframe && (c.bgIframe = new B(g));
    q = c.orient ? m.hitch(c, "orient") : null;
    f = h ? v.around(g, h, f, F, q) : v.at(g, a, "R" == f ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], a.padding, q);
    g.style.visibility = "visible";
    d.style.visibility = "visible";
    d = [];
    d.push(u(g, "keydown", m.hitch(this, function(b) {
      if (b.keyCode == t.ESCAPE && a.onCancel) {
        b.stopPropagation(), b.preventDefault(), a.onCancel();
      } else {
        if (b.keyCode == t.TAB && (b.stopPropagation(), b.preventDefault(), (b = this.getTopPopup()) && b.onCancel)) {
          b.onCancel();
        }
      }
    })));
    c.onCancel && a.onCancel && d.push(c.on("cancel", a.onCancel));
    d.push(c.on(c.onExecute ? "execute" : "change", m.hitch(this, function() {
      var a = this.getTopPopup();
      if (a && a.onExecute) {
        a.onExecute();
      }
    })));
    b.push({widget:c, wrapper:g, parent:a.parent, onExecute:a.onExecute, onCancel:a.onCancel, onClose:a.onClose, handlers:d});
    if (c.onOpen) {
      c.onOpen(f);
    }
    return f;
  }, close:function(a) {
    for (var b = this._stack;a && w.some(b, function(b) {
      return b.widget == a;
    }) || !a && b.length;) {
      var c = b.pop(), d = c.widget, f = c.onClose;
      d.bgIframe && (d.bgIframe.destroy(), delete d.bgIframe);
      if (d.onClose) {
        d.onClose();
      }
      for (var e;e = c.handlers.pop();) {
        e.remove();
      }
      d && d.domNode && this.hide(d);
      f && f();
    }
    0 == b.length && this._aroundMoveListener && (clearTimeout(this._aroundMoveListener), this._firstAroundNode = this._firstAroundPosition = this._aroundMoveListener = null);
  }});
  return D.popup = new e;
});

//# sourceMappingURL=popup.js.map
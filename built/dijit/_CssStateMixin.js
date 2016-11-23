//>>built
define("dijit/_CssStateMixin", "dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "), function(e, h, q, f, v, r, g, t, k, u, l, m) {
  h = h("dijit._CssStateMixin", [], {hovering:!1, active:!1, _applyAttributes:function() {
    this.inherited(arguments);
    e.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "), function(a) {
      this.watch(a, r.hitch(this, "_setStateClass"));
    }, this);
    for (var a in this.cssStateNodes || {}) {
      this._trackMouseState(this[a], this.cssStateNodes[a]);
    }
    this._trackMouseState(this.domNode, this.baseClass);
    this._setStateClass();
  }, _cssMouseEvent:function(a) {
    if (!this.disabled) {
      switch(a.type) {
        case "mouseover":
        ;
        case "MSPointerOver":
        ;
        case "pointerover":
          this._set("hovering", !0);
          this._set("active", this._mouseDown);
          break;
        case "mouseout":
        ;
        case "MSPointerOut":
        ;
        case "pointerout":
          this._set("hovering", !1);
          this._set("active", !1);
          break;
        case "mousedown":
        ;
        case "touchstart":
        ;
        case "MSPointerDown":
        ;
        case "pointerdown":
        ;
        case "keydown":
          this._set("active", !0);
          break;
        case "mouseup":
        ;
        case "dojotouchend":
        ;
        case "MSPointerUp":
        ;
        case "pointerup":
        ;
        case "keyup":
          this._set("active", !1);
      }
    }
  }, _setStateClass:function() {
    function a(a) {
      b = b.concat(e.map(b, function(d) {
        return d + a;
      }), "dijit" + a);
    }
    var b = this.baseClass.split(" ");
    this.isLeftToRight() || a("Rtl");
    var c = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
    this.checked && a(c);
    this.state && a(this.state);
    this.selected && a("Selected");
    this._opened && a("Opened");
    this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
    this.focused && a("Focused");
    var c = this.stateNode || this.domNode, d = {};
    e.forEach(c.className.split(" "), function(a) {
      d[a] = !0;
    });
    "_stateClasses" in this && e.forEach(this._stateClasses, function(a) {
      delete d[a];
    });
    e.forEach(b, function(a) {
      d[a] = !0;
    });
    var n = [], p;
    for (p in d) {
      n.push(p);
    }
    c.className = n.join(" ");
    this._stateClasses = b;
  }, _subnodeCssMouseEvent:function(a, b, c) {
    function d(d) {
      f.toggle(a, b + "Active", d);
    }
    if (!this.disabled && !this.readOnly) {
      switch(c.type) {
        case "mouseover":
        ;
        case "MSPointerOver":
        ;
        case "pointerover":
          f.toggle(a, b + "Hover", !0);
          break;
        case "mouseout":
        ;
        case "MSPointerOut":
        ;
        case "pointerout":
          f.toggle(a, b + "Hover", !1);
          d(!1);
          break;
        case "mousedown":
        ;
        case "touchstart":
        ;
        case "MSPointerDown":
        ;
        case "pointerdown":
        ;
        case "keydown":
          d(!0);
          break;
        case "mouseup":
        ;
        case "MSPointerUp":
        ;
        case "pointerup":
        ;
        case "dojotouchend":
        ;
        case "keyup":
          d(!1);
          break;
        case "focus":
        ;
        case "focusin":
          f.toggle(a, b + "Focused", !0);
          break;
        case "blur":
        ;
        case "focusout":
          f.toggle(a, b + "Focused", !1);
      }
    }
  }, _trackMouseState:function(a, b) {
    a._cssState = b;
  }});
  t(function() {
    function a(a, b, c) {
      if (!c || !q.isDescendant(c, b)) {
        for (;b && b != c;b = b.parentNode) {
          if (b._cssState) {
            var e = m.getEnclosingWidget(b);
            e && (b == e.domNode ? e._cssMouseEvent(a) : e._subnodeCssMouseEvent(b, b._cssState, a));
          }
        }
      }
    }
    var b = u.body(), c;
    g(b, k.over, function(b) {
      a(b, b.target, b.relatedTarget);
    });
    g(b, k.out, function(b) {
      a(b, b.target, b.relatedTarget);
    });
    g(b, l.press, function(b) {
      c = b.target;
      a(b, c);
    });
    g(b, l.release, function(b) {
      a(b, c);
      c = null;
    });
    g(b, "focusin, focusout", function(b) {
      var a = b.target;
      if (a._cssState && !a.getAttribute("widgetId")) {
        var c = m.getEnclosingWidget(a);
        c && c._subnodeCssMouseEvent(a, a._cssState, b);
      }
    });
  });
  return h;
});

//# sourceMappingURL=_CssStateMixin.js.map
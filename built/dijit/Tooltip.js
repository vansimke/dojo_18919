//>>built
require({cache:{"url:dijit/templates/Tooltip.html":'\x3cdiv class\x3d"dijitTooltip dijitTooltipLeft" id\x3d"dojoTooltip" data-dojo-attach-event\x3d"mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t\x3e\x3cdiv class\x3d"dijitTooltipConnector" data-dojo-attach-point\x3d"connectorNode"\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point\x3d"containerNode" role\x3d\'alert\'\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
define("dijit/Tooltip", "dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff ./_base/manager ./place ./_Widget ./_TemplatedMixin ./BackgroundIframe dojo/text!./templates/Tooltip.html ./main".split(" "), function(b, t, u, v, y, p, z, f, w, d, m, A, B, x, C, D, E, n) {
  function q() {
  }
  var r = t("dijit._MasterTooltip", [x, C], {duration:A.defaultDuration, templateString:E, postCreate:function() {
    this.ownerDocumentBody.appendChild(this.domNode);
    this.bgIframe = new D(this.domNode);
    this.fadeIn = u.fadeIn({node:this.domNode, duration:this.duration, onEnd:f.hitch(this, "_onShow")});
    this.fadeOut = u.fadeOut({node:this.domNode, duration:this.duration, onEnd:f.hitch(this, "_onHide")});
  }, show:function(a, e, g, h, k, b, G) {
    if (!this.aroundNode || this.aroundNode !== e || this.containerNode.innerHTML != a) {
      if ("playing" == this.fadeOut.status()) {
        this._onDeck = arguments;
      } else {
        this.containerNode.innerHTML = a;
        k && this.set("textDir", k);
        this.containerNode.align = h ? "right" : "left";
        var l = B.around(this.domNode, e, g && g.length ? g : c.defaultPosition, !h, f.hitch(this, "orient")), d = l.aroundNodePos;
        "M" == l.corner.charAt(0) && "M" == l.aroundCorner.charAt(0) ? (this.connectorNode.style.top = d.y + (d.h - this.connectorNode.offsetHeight >> 1) - l.y + "px", this.connectorNode.style.left = "") : "M" == l.corner.charAt(1) && "M" == l.aroundCorner.charAt(1) ? this.connectorNode.style.left = d.x + (d.w - this.connectorNode.offsetWidth >> 1) - l.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
        z.set(this.domNode, "opacity", 0);
        this.fadeIn.play();
        this.isShowingNow = !0;
        this.aroundNode = e;
        this.onMouseEnter = b || q;
        this.onMouseLeave = G || q;
      }
    }
  }, orient:function(a, e, g, h, b) {
    this.connectorNode.style.top = "";
    var c = h.h;
    h = h.w;
    a.className = "dijitTooltip " + {"MR-ML":"dijitTooltipRight", "ML-MR":"dijitTooltipLeft", "TM-BM":"dijitTooltipAbove", "BM-TM":"dijitTooltipBelow", "BL-TL":"dijitTooltipBelow dijitTooltipABLeft", "TL-BL":"dijitTooltipAbove dijitTooltipABLeft", "BR-TR":"dijitTooltipBelow dijitTooltipABRight", "TR-BR":"dijitTooltipAbove dijitTooltipABRight", "BR-BL":"dijitTooltipRight", "BL-BR":"dijitTooltipLeft"}[e + "-" + g];
    this.domNode.style.width = "auto";
    var d = p.position(this.domNode);
    if (m("ie") || m("trident")) {
      d.w += 2;
    }
    p.setMarginBox(this.domNode, {w:Math.min(Math.max(h, 1), d.w)});
    "B" == g.charAt(0) && "B" == e.charAt(0) ? (a = p.position(a), e = this.connectorNode.offsetHeight, a.h > c ? (this.connectorNode.style.top = c - (b.h + e >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(b.h / 2 - e / 2, 0), a.h - e) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom = "");
    return Math.max(0, d.w - h);
  }, _onShow:function() {
    m("ie") && (this.domNode.style.filter = "");
  }, hide:function(a) {
    this._onDeck && this._onDeck[1] == a ? this._onDeck = null : this.aroundNode === a && (this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play());
    this.onMouseEnter = this.onMouseLeave = q;
  }, _onHide:function() {
    this.domNode.style.cssText = "";
    this.containerNode.innerHTML = "";
    this._onDeck && (this.show.apply(this, this._onDeck), this._onDeck = null);
  }});
  m("dojo-bidi") && r.extend({_setAutoTextDir:function(a) {
    this.applyTextDir(a);
    b.forEach(a.children, function(a) {
      this._setAutoTextDir(a);
    }, this);
  }, _setTextDirAttr:function(a) {
    this._set("textDir", a);
    "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir;
  }});
  n.showTooltip = function(a, e, g, d, f, F, m) {
    g && (g = b.map(g, function(a) {
      return {after:"after-centered", before:"before-centered"}[a] || a;
    }));
    c._masterTT || (n._masterTT = c._masterTT = new r);
    return c._masterTT.show(a, e, g, d, f, F, m);
  };
  n.hideTooltip = function(a) {
    return c._masterTT && c._masterTT.hide(a);
  };
  var c = t("dijit.Tooltip", x, {label:"", showDelay:400, hideDelay:400, connectId:[], position:[], selector:"", _setConnectIdAttr:function(a) {
    b.forEach(this._connections || [], function(a) {
      b.forEach(a, function(a) {
        a.remove();
      });
    }, this);
    this._connectIds = b.filter(f.isArrayLike(a) ? a : a ? [a] : [], function(a) {
      return v.byId(a, this.ownerDocument);
    }, this);
    this._connections = b.map(this._connectIds, function(a) {
      a = v.byId(a, this.ownerDocument);
      var b = this.selector, c = b ? function(a) {
        return d.selector(b, a);
      } : function(a) {
        return a;
      }, k = this;
      return [d(a, c(w.enter), function() {
        k._onHover(this);
      }), d(a, c("focusin"), function() {
        k._onHover(this);
      }), d(a, c(w.leave), f.hitch(k, "_onUnHover")), d(a, c("focusout"), f.hitch(k, "set", "state", "DORMANT"))];
    }, this);
    this._set("connectId", a);
  }, addTarget:function(a) {
    a = a.id || a;
    -1 == b.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a));
  }, removeTarget:function(a) {
    a = b.indexOf(this._connectIds, a.id || a);
    0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds));
  }, buildRendering:function() {
    this.inherited(arguments);
    y.add(this.domNode, "dijitTooltipData");
  }, startup:function() {
    this.inherited(arguments);
    var a = this.connectId;
    b.forEach(f.isArrayLike(a) ? a : [a], this.addTarget, this);
  }, getContent:function(a) {
    return this.label || this.domNode.innerHTML;
  }, state:"DORMANT", _setStateAttr:function(a) {
    if (!(this.state == a || "SHOW TIMER" == a && "SHOWING" == this.state || "HIDE TIMER" == a && "DORMANT" == this.state)) {
      this._hideTimer && (this._hideTimer.remove(), delete this._hideTimer);
      this._showTimer && (this._showTimer.remove(), delete this._showTimer);
      switch(a) {
        case "DORMANT":
          this._connectNode && (c.hide(this._connectNode), delete this._connectNode, this.onHide());
          break;
        case "SHOW TIMER":
          "SHOWING" != this.state && (this._showTimer = this.defer(function() {
            this.set("state", "SHOWING");
          }, this.showDelay));
          break;
        case "SHOWING":
          var b = this.getContent(this._connectNode);
          if (!b) {
            this.set("state", "DORMANT");
            return;
          }
          c.show(b, this._connectNode, this.position, !this.isLeftToRight(), this.textDir, f.hitch(this, "set", "state", "SHOWING"), f.hitch(this, "set", "state", "HIDE TIMER"));
          this.onShow(this._connectNode, this.position);
          break;
        case "HIDE TIMER":
          this._hideTimer = this.defer(function() {
            this.set("state", "DORMANT");
          }, this.hideDelay);
      }
      this._set("state", a);
    }
  }, _onHover:function(a) {
    this._connectNode && a != this._connectNode && this.set("state", "DORMANT");
    this._connectNode = a;
    this.set("state", "SHOW TIMER");
  }, _onUnHover:function(a) {
    this.set("state", "HIDE TIMER");
  }, open:function(a) {
    this.set("state", "DORMANT");
    this._connectNode = a;
    this.set("state", "SHOWING");
  }, close:function() {
    this.set("state", "DORMANT");
  }, onShow:function() {
  }, onHide:function() {
  }, destroy:function() {
    this.set("state", "DORMANT");
    b.forEach(this._connections || [], function(a) {
      b.forEach(a, function(a) {
        a.remove();
      });
    }, this);
    this.inherited(arguments);
  }});
  c._MasterTooltip = r;
  c.show = n.showTooltip;
  c.hide = n.hideTooltip;
  c.defaultPosition = ["after-centered", "before-centered"];
  return c;
});

//# sourceMappingURL=Tooltip.js.map
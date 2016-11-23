//>>built
define("dojo/dnd/Manager", "../_base/array ../_base/declare ../_base/lang ../_base/window ../dom-class ../Evented ../has ../keys ../on ../topic ../touch ./common ./autoscroll ./Avatar".split(" "), function(q, r, h, c, k, t, f, l, g, e, n, d, p, u) {
  var m = r("dojo.dnd.Manager", [t], {constructor:function() {
    this.source = this.avatar = null;
    this.nodes = [];
    this.copy = !0;
    this.target = null;
    this.canDropFlag = !1;
    this.events = [];
  }, OFFSET_X:f("touch") ? 4 : 16, OFFSET_Y:f("touch") ? 4 : 16, overSource:function(a) {
    this.avatar && (this.target = a && "Disabled" != a.targetState ? a : null, this.canDropFlag = !!this.target, this.avatar.update());
    e.publish("/dnd/source/over", a);
  }, outSource:function(a) {
    this.avatar ? this.target == a && (this.target = null, this.canDropFlag = !1, this.avatar.update(), e.publish("/dnd/source/over", null)) : e.publish("/dnd/source/over", null);
  }, startDrag:function(a, b, d) {
    function f(a) {
      a.preventDefault();
      a.stopPropagation();
    }
    p.autoScrollStart(c.doc);
    this.source = a;
    this.nodes = b;
    this.copy = !!d;
    this.avatar = this.makeAvatar();
    c.body().appendChild(this.avatar.node);
    e.publish("/dnd/start", a, b, this.copy);
    this.events = [g(c.doc, n.move, h.hitch(this, "onMouseMove")), g(c.doc, n.release, h.hitch(this, "onMouseUp")), g(c.doc, "keydown", h.hitch(this, "onKeyDown")), g(c.doc, "keyup", h.hitch(this, "onKeyUp")), g(c.doc, "dragstart", f), g(c.body(), "selectstart", f)];
    a = "dojoDnd" + (d ? "Copy" : "Move");
    k.add(c.body(), a);
  }, canDrop:function(a) {
    a = !(!this.target || !a);
    this.canDropFlag != a && (this.canDropFlag = a, this.avatar.update());
  }, stopDrag:function() {
    k.remove(c.body(), ["dojoDndCopy", "dojoDndMove"]);
    q.forEach(this.events, function(a) {
      a.remove();
    });
    this.events = [];
    this.avatar.destroy();
    this.source = this.target = this.avatar = null;
    this.nodes = [];
  }, makeAvatar:function() {
    return new u(this);
  }, updateAvatar:function() {
    this.avatar.update();
  }, onMouseMove:function(a) {
    var b = this.avatar;
    b && (p.autoScrollNodes(a), b = b.node.style, b.left = a.pageX + this.OFFSET_X + "px", b.top = a.pageY + this.OFFSET_Y + "px", b = !!this.source.copyState(d.getCopyKeyState(a)), this.copy != b && this._setCopyStatus(b));
    f("touch") && a.preventDefault();
  }, onMouseUp:function(a) {
    if (this.avatar) {
      if (this.target && this.canDropFlag) {
        var b = !!this.source.copyState(d.getCopyKeyState(a));
        e.publish("/dnd/drop/before", this.source, this.nodes, b, this.target, a);
        e.publish("/dnd/drop", this.source, this.nodes, b, this.target, a);
      } else {
        e.publish("/dnd/cancel");
      }
      this.stopDrag();
    }
  }, onKeyDown:function(a) {
    if (this.avatar) {
      switch(a.keyCode) {
        case l.CTRL:
          a = !!this.source.copyState(!0);
          this.copy != a && this._setCopyStatus(a);
          break;
        case l.ESCAPE:
          e.publish("/dnd/cancel"), this.stopDrag();
      }
    }
  }, onKeyUp:function(a) {
    this.avatar && a.keyCode == l.CTRL && (a = !!this.source.copyState(!1), this.copy != a && this._setCopyStatus(a));
  }, _setCopyStatus:function(a) {
    this.copy = a;
    this.source._markDndStatus(this.copy);
    this.updateAvatar();
    k.replace(c.body(), "dojoDnd" + (this.copy ? "Copy" : "Move"), "dojoDnd" + (this.copy ? "Move" : "Copy"));
  }});
  d._manager = null;
  m.manager = d.manager = function() {
    d._manager || (d._manager = new m);
    return d._manager;
  };
  return m;
});

//# sourceMappingURL=Manager.js.map
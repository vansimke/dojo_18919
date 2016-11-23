//>>built
define("dojo/dnd/Selector", "../_base/array ../_base/declare ../_base/kernel ../_base/lang ../dom ../dom-construct ../mouse ../_base/NodeList ../on ../touch ./common ./Container".split(" "), function(n, p, q, k, f, r, t, u, l, m, e, v) {
  var h = p("dojo.dnd.Selector", v, {constructor:function(b, a) {
    a || (a = {});
    this.singular = a.singular;
    this.autoSync = a.autoSync;
    this.selection = {};
    this.anchor = null;
    this.simpleSelection = !1;
    this.events.push(l(this.node, m.press, k.hitch(this, "onMouseDown")), l(this.node, m.release, k.hitch(this, "onMouseUp")));
  }, singular:!1, getSelectedNodes:function() {
    var b = new u, a = e._empty, c;
    for (c in this.selection) {
      c in a || b.push(f.byId(c));
    }
    return b;
  }, selectNone:function() {
    return this._removeSelection()._removeAnchor();
  }, selectAll:function() {
    this.forInItems(function(b, a) {
      this._addItemClass(f.byId(a), "Selected");
      this.selection[a] = 1;
    }, this);
    return this._removeAnchor();
  }, deleteSelectedNodes:function() {
    var b = e._empty, a;
    for (a in this.selection) {
      if (!(a in b)) {
        var c = f.byId(a);
        this.delItem(a);
        r.destroy(c);
      }
    }
    this.anchor = null;
    this.selection = {};
    return this;
  }, forInSelectedItems:function(b, a) {
    a = a || q.global;
    var c = this.selection, d = e._empty, g;
    for (g in c) {
      g in d || b.call(a, this.getItem(g), g, this);
    }
  }, sync:function() {
    h.superclass.sync.call(this);
    this.anchor && !this.getItem(this.anchor.id) && (this.anchor = null);
    var b = [], a = e._empty, c;
    for (c in this.selection) {
      c in a || this.getItem(c) || b.push(c);
    }
    n.forEach(b, function(a) {
      delete this.selection[a];
    }, this);
    return this;
  }, insertNodes:function(b, a, c, d) {
    var e = this._normalizedCreator;
    this._normalizedCreator = function(a, c) {
      var d = e.call(this, a, c);
      b ? (this.anchor ? this.anchor != d.node && (this._removeItemClass(d.node, "Anchor"), this._addItemClass(d.node, "Selected")) : (this.anchor = d.node, this._removeItemClass(d.node, "Selected"), this._addItemClass(this.anchor, "Anchor")), this.selection[d.node.id] = 1) : (this._removeItemClass(d.node, "Selected"), this._removeItemClass(d.node, "Anchor"));
      return d;
    };
    h.superclass.insertNodes.call(this, a, c, d);
    this._normalizedCreator = e;
    return this;
  }, destroy:function() {
    h.superclass.destroy.call(this);
    this.selection = this.anchor = null;
  }, onMouseDown:function(b) {
    this.autoSync && this.sync();
    if (this.current) {
      if (!this.singular && !e.getCopyKeyState(b) && !b.shiftKey && this.current.id in this.selection) {
        this.simpleSelection = !0, t.isLeft(b) && (b.stopPropagation(), b.preventDefault());
      } else {
        if (!this.singular && b.shiftKey) {
          e.getCopyKeyState(b) || this._removeSelection();
          var a = this.getAllNodes();
          if (a.length && (this.anchor || (this.anchor = a[0], this._addItemClass(this.anchor, "Anchor")), this.selection[this.anchor.id] = 1, this.anchor != this.current)) {
            for (var c = 0, d;c < a.length && (d = a[c], d != this.anchor && d != this.current);++c) {
            }
            for (++c;c < a.length;++c) {
              d = a[c];
              if (d == this.anchor || d == this.current) {
                break;
              }
              this._addItemClass(d, "Selected");
              this.selection[d.id] = 1;
            }
            this._addItemClass(this.current, "Selected");
            this.selection[this.current.id] = 1;
          }
        } else {
          this.singular ? this.anchor == this.current ? e.getCopyKeyState(b) && this.selectNone() : (this.selectNone(), this.anchor = this.current, this._addItemClass(this.anchor, "Anchor"), this.selection[this.current.id] = 1) : e.getCopyKeyState(b) ? this.anchor == this.current ? (delete this.selection[this.anchor.id], this._removeAnchor()) : this.current.id in this.selection ? (this._removeItemClass(this.current, "Selected"), delete this.selection[this.current.id]) : (this.anchor && (this._removeItemClass(this.anchor, 
          "Anchor"), this._addItemClass(this.anchor, "Selected")), this.anchor = this.current, this._addItemClass(this.current, "Anchor"), this.selection[this.current.id] = 1) : this.current.id in this.selection || (this.selectNone(), this.anchor = this.current, this._addItemClass(this.current, "Anchor"), this.selection[this.current.id] = 1);
        }
        b.stopPropagation();
        b.preventDefault();
      }
    }
  }, onMouseUp:function() {
    this.simpleSelection && (this.simpleSelection = !1, this.selectNone(), this.current && (this.anchor = this.current, this._addItemClass(this.anchor, "Anchor"), this.selection[this.current.id] = 1));
  }, onMouseMove:function() {
    this.simpleSelection = !1;
  }, onOverEvent:function() {
    this.onmousemoveEvent = l(this.node, m.move, k.hitch(this, "onMouseMove"));
  }, onOutEvent:function() {
    this.onmousemoveEvent && (this.onmousemoveEvent.remove(), delete this.onmousemoveEvent);
  }, _removeSelection:function() {
    var b = e._empty, a;
    for (a in this.selection) {
      if (!(a in b)) {
        var c = f.byId(a);
        c && this._removeItemClass(c, "Selected");
      }
    }
    this.selection = {};
    return this;
  }, _removeAnchor:function() {
    this.anchor && (this._removeItemClass(this.anchor, "Anchor"), this.anchor = null);
    return this;
  }});
  return h;
});

//# sourceMappingURL=Selector.js.map
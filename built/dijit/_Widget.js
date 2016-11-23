//>>built
define("dijit/_Widget", "dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/has dojo/_base/kernel dojo/_base/lang dojo/query dojo/ready ./registry ./_WidgetBase ./_OnDijitClickMixin ./_FocusMixin dojo/uacss ./hccss".split(" "), function(d, u, g, h, k, e, l, m, n, p, q, r, t) {
  function b() {
  }
  function f(a) {
    return function(c, d, e, f) {
      return c && "string" == typeof d && c[d] == b ? c.on(d.substring(2).toLowerCase(), l.hitch(e, f)) : a.apply(g, arguments);
    };
  }
  d.around(g, "connect", f);
  e.connect && d.around(e, "connect", f);
  d = h("dijit._Widget", [q, r, t], {onClick:b, onDblClick:b, onKeyDown:b, onKeyPress:b, onKeyUp:b, onMouseDown:b, onMouseMove:b, onMouseOut:b, onMouseOver:b, onMouseLeave:b, onMouseEnter:b, onMouseUp:b, constructor:function(a) {
    this._toConnect = {};
    for (var c in a) {
      this[c] === b && (this._toConnect[c.replace(/^on/, "").toLowerCase()] = a[c], delete a[c]);
    }
  }, postCreate:function() {
    this.inherited(arguments);
    for (var a in this._toConnect) {
      this.on(a, this._toConnect[a]);
    }
    delete this._toConnect;
  }, on:function(a, c) {
    return this[this._onMap(a)] === b ? g.connect(this.domNode, a.toLowerCase(), this, c) : this.inherited(arguments);
  }, _setFocusedAttr:function(a) {
    this._focused = a;
    this._set("focused", a);
  }, setAttribute:function(a, b) {
    e.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
    this.set(a, b);
  }, attr:function(a, b) {
    return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a);
  }, getDescendants:function() {
    e.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
    return this.containerNode ? m("[widgetId]", this.containerNode).map(p.byNode) : [];
  }, _onShow:function() {
    this.onShow();
  }, onShow:function() {
  }, onHide:function() {
  }, onClose:function() {
    return !0;
  }});
  k("dijit-legacy-requires") && n(0, function() {
    require(["dijit/_base"]);
  });
  return d;
});

//# sourceMappingURL=_Widget.js.map
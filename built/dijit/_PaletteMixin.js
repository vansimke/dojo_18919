//>>built
define("dijit/_PaletteMixin", "dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/keys dojo/_base/lang dojo/on ./_CssStateMixin ./a11yclick ./focus ./typematic".split(" "), function(p, e, f, n, q, l, r, t, u, g, v) {
  return p("dijit._PaletteMixin", t, {defaultTimeout:500, timeoutChangeRate:.9, value:"", _selectedCell:-1, tabIndex:"0", cellClass:"dijitPaletteCell", dyeClass:null, _dyeFactory:function(a) {
    return new ("string" == typeof this.dyeClass ? l.getObject(this.dyeClass) : this.dyeClass)(a);
  }, _preparePalette:function(a, b) {
    this._cells = [];
    var c = this._blankGif;
    this.own(r(this.gridNode, u, l.hitch(this, "_onCellClick")));
    for (var h = 0;h < a.length;h++) {
      for (var g = n.create("tr", {tabIndex:"-1", role:"row"}, this.gridNode), k = 0;k < a[h].length;k++) {
        var d = a[h][k];
        if (d) {
          var e = this._dyeFactory(d, h, k, b[d]), d = n.create("td", {"class":this.cellClass, tabIndex:"-1", title:b[d], role:"gridcell"}, g);
          e.fillCell(d, c);
          d.idx = this._cells.length;
          this._cells.push({node:d, dye:e});
        }
      }
    }
    this._xDim = a[0].length;
    this._yDim = a.length;
    var f = {UP_ARROW:-this._xDim, DOWN_ARROW:this._xDim, RIGHT_ARROW:this.isLeftToRight() ? 1 : -1, LEFT_ARROW:this.isLeftToRight() ? -1 : 1}, m;
    for (m in f) {
      this.own(v.addKeyListener(this.domNode, {keyCode:q[m], ctrlKey:!1, altKey:!1, shiftKey:!1}, this, function() {
        var a = f[m];
        return function(b) {
          this._navigateByKey(a, b);
        };
      }(), this.timeoutChangeRate, this.defaultTimeout));
    }
  }, postCreate:function() {
    this.inherited(arguments);
    this._setCurrent(this._cells[0].node);
  }, focus:function() {
    g.focus(this._currentFocus);
  }, _onCellClick:function(a) {
    for (var b = a.target;"TD" != b.tagName;) {
      if (!b.parentNode || b == this.gridNode) {
        return;
      }
      b = b.parentNode;
    }
    var c = this._getDye(b).getValue();
    this._setCurrent(b);
    g.focus(b);
    this._setValueAttr(c, !0);
    a.stopPropagation();
    a.preventDefault();
  }, _setCurrent:function(a) {
    "_currentFocus" in this && e.set(this._currentFocus, "tabIndex", "-1");
    (this._currentFocus = a) && e.set(a, "tabIndex", this.tabIndex);
  }, _setValueAttr:function(a, b) {
    0 <= this._selectedCell && f.remove(this._cells[this._selectedCell].node, this.cellClass + "Selected");
    this._selectedCell = -1;
    if (a) {
      for (var c = 0;c < this._cells.length;c++) {
        if (a == this._cells[c].dye.getValue()) {
          this._selectedCell = c;
          f.add(this._cells[c].node, this.cellClass + "Selected");
          break;
        }
      }
    }
    this._set("value", 0 <= this._selectedCell ? a : null);
    if (b || void 0 === b) {
      this.onChange(a);
    }
  }, onChange:function() {
  }, _navigateByKey:function(a, b) {
    if (-1 != b) {
      var c = this._currentFocus.idx + a;
      c < this._cells.length && -1 < c && (c = this._cells[c].node, this._setCurrent(c), this.defer(l.hitch(g, "focus", c)));
    }
  }, _getDye:function(a) {
    return this._cells[a.idx].dye;
  }});
});

//# sourceMappingURL=_PaletteMixin.js.map
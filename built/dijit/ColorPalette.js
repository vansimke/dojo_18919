//>>built
require({cache:{"url:dijit/templates/ColorPalette.html":'\x3cdiv class\x3d"dijitInline dijitColorPalette" role\x3d"grid"\x3e\n\t\x3ctable data-dojo-attach-point\x3d"paletteTableNode" class\x3d"dijitPaletteTable" cellSpacing\x3d"0" cellPadding\x3d"0" role\x3d"presentation"\x3e\n\t\t\x3ctbody data-dojo-attach-point\x3d"gridNode"\x3e\x3c/tbody\x3e\n\t\x3c/table\x3e\n\x3c/div\x3e\n'}});
define("dijit/ColorPalette", "require dojo/text!./templates/ColorPalette.html ./_Widget ./_TemplatedMixin ./_PaletteMixin ./hccss dojo/i18n dojo/_base/Color dojo/_base/declare dojo/dom-construct dojo/string dojo/i18n!dojo/nls/colors dojo/colors".split(" "), function(e, g, h, k, l, m, n, f, a, p, q) {
  var b = a("dijit.ColorPalette", [h, k, l], {palette:"7x10", _palettes:{"7x10":["white seashell cornsilk lemonchiffon lightyellow palegreen paleturquoise lightcyan lavender plum".split(" "), "lightgray pink bisque moccasin khaki lightgreen lightseagreen lightskyblue cornflowerblue violet".split(" "), "silver lightcoral sandybrown orange palegoldenrod chartreuse mediumturquoise skyblue mediumslateblue orchid".split(" "), "gray red orangered darkorange yellow limegreen darkseagreen royalblue slateblue mediumorchid".split(" "), 
  "dimgray crimson chocolate coral gold forestgreen seagreen blue blueviolet darkorchid".split(" "), "darkslategray firebrick saddlebrown sienna olive green darkcyan mediumblue darkslateblue darkmagenta".split(" "), "black darkred maroon brown darkolivegreen darkgreen midnightblue navy indigo purple".split(" ")], "3x4":[["white", "lime", "green", "blue"], ["silver", "yellow", "fuchsia", "navy"], ["gray", "red", "purple", "black"]]}, templateString:g, baseClass:"dijitColorPalette", _dyeFactory:function(r, 
  d, c, a) {
    return new this._dyeClass(r, d, c, a);
  }, buildRendering:function() {
    this.inherited(arguments);
    this._dyeClass = a(b._Color, {palette:this.palette});
    this._preparePalette(this._palettes[this.palette], n.getLocalization("dojo", "colors", this.lang));
  }});
  b._Color = a("dijit._Color", f, {template:"\x3cspan class\x3d'dijitInline dijitPaletteImg'\x3e\x3cimg src\x3d'${blankGif}' alt\x3d'${alt}' title\x3d'${title}' class\x3d'dijitColorPaletteSwatch' style\x3d'background-color: ${color}'/\x3e\x3c/span\x3e", hcTemplate:"\x3cspan class\x3d'dijitInline dijitPaletteImg' style\x3d'position: relative; overflow: hidden; height: 12px; width: 14px;'\x3e\x3cimg src\x3d'${image}' alt\x3d'${alt}' title\x3d'${title}' style\x3d'position: absolute; left: ${left}px; top: ${top}px; ${size}'/\x3e\x3c/span\x3e", 
  _imagePaths:{"7x10":e.toUrl("./themes/a11y/colors7x10.png"), "3x4":e.toUrl("./themes/a11y/colors3x4.png")}, constructor:function(a, d, c, b) {
    this._title = b;
    this._row = d;
    this._col = c;
    this.setColor(f.named[a]);
  }, getValue:function() {
    return this.toHex();
  }, fillCell:function(a, b) {
    var c = q.substitute(m("highcontrast") ? this.hcTemplate : this.template, {color:this.toHex(), blankGif:b, alt:this._title, title:this._title, image:this._imagePaths[this.palette].toString(), left:-20 * this._col - 5, top:-20 * this._row - 5, size:"7x10" == this.palette ? "height: 145px; width: 206px" : "height: 64px; width: 86px"});
    p.place(c, a);
  }});
  return b;
});

//# sourceMappingURL=ColorPalette.js.map
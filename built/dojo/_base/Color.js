//>>built
define("dojo/_base/Color", ["./kernel", "./lang", "./array", "./config"], function(c, f, g, h) {
  var b = c.Color = function(a) {
    a && this.setColor(a);
  };
  b.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:h.transparentColor || [0, 0, 0, 0]};
  f.extend(b, {r:255, g:255, b:255, a:1, _set:function(a, b, d, e) {
    this.r = a;
    this.g = b;
    this.b = d;
    this.a = e;
  }, setColor:function(a) {
    f.isString(a) ? b.fromString(a, this) : f.isArray(a) ? b.fromArray(a, this) : (this._set(a.r, a.g, a.b, a.a), a instanceof b || this.sanitize());
    return this;
  }, sanitize:function() {
    return this;
  }, toRgb:function() {
    return [this.r, this.g, this.b];
  }, toRgba:function() {
    return [this.r, this.g, this.b, this.a];
  }, toHex:function() {
    return "#" + g.map(["r", "g", "b"], function(a) {
      a = this[a].toString(16);
      return 2 > a.length ? "0" + a : a;
    }, this).join("");
  }, toCss:function(a) {
    var b = this.r + ", " + this.g + ", " + this.b;
    return (a ? "rgba(" + b + ", " + this.a : "rgb(" + b) + ")";
  }, toString:function() {
    return this.toCss(!0);
  }});
  b.blendColors = c.blendColors = function(a, k, d, e) {
    var c = e || new b;
    g.forEach(["r", "g", "b", "a"], function(b) {
      c[b] = a[b] + (k[b] - a[b]) * d;
      "a" != b && (c[b] = Math.round(c[b]));
    });
    return c.sanitize();
  };
  b.fromRgb = c.colorFromRgb = function(a, c) {
    var d = a.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
    return d && b.fromArray(d[1].split(/\s*,\s*/), c);
  };
  b.fromHex = c.colorFromHex = function(a, c) {
    var d = c || new b, e = 4 == a.length ? 4 : 8, f = (1 << e) - 1;
    a = Number("0x" + a.substr(1));
    if (isNaN(a)) {
      return null;
    }
    g.forEach(["b", "g", "r"], function(b) {
      var c = a & f;
      a >>= e;
      d[b] = 4 == e ? 17 * c : c;
    });
    d.a = 1;
    return d;
  };
  b.fromArray = c.colorFromArray = function(a, c) {
    var d = c || new b;
    d._set(Number(a[0]), Number(a[1]), Number(a[2]), Number(a[3]));
    isNaN(d.a) && (d.a = 1);
    return d.sanitize();
  };
  b.fromString = c.colorFromString = function(a, c) {
    var d = b.named[a];
    return d && b.fromArray(d, c) || b.fromRgb(a, c) || b.fromHex(a, c);
  };
  return b;
});

//# sourceMappingURL=Color.js.map
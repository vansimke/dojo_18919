//>>built
define("dojo/main", "./_base/kernel ./has require ./sniff ./_base/lang ./_base/array ./_base/config ./ready ./_base/declare ./_base/connect ./_base/Deferred ./_base/json ./_base/Color ./has!dojo-firebug?./_firebug/firebug ./_base/browser ./_base/loader".split(" "), function(c, h, b, k, e, f, d, g) {
  d.isDebug && b(["./_firebug/firebug"]);
  var a = d.require;
  a && (a = f.map(e.isArray(a) ? a : [a], function(a) {
    return a.replace(/\./g, "/");
  }), c.isAsync ? b(a) : g(1, function() {
    b(a);
  }));
  return c;
});

//# sourceMappingURL=main.js.map
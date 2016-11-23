//>>built
define("dojo/request/handlers", ["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(l, m, n, c) {
  function g(a) {
    var b = h[a.options.handleAs];
    a.data = b ? b(a) : a.data || a.text;
    return a;
  }
  c.add("activex", "undefined" !== typeof ActiveXObject);
  c.add("dom-parser", function(a) {
    return "DOMParser" in a;
  });
  var k;
  if (c("activex")) {
    var p = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], f;
    k = function(a) {
      function b(a) {
        try {
          var b = new ActiveXObject(a);
          b.async = !1;
          b.loadXML(e);
          d = b;
          f = a;
        } catch (c) {
          return !1;
        }
        return !0;
      }
      var d = a.data, e = a.text;
      d && c("dom-qsa2.1") && !d.querySelectorAll && c("dom-parser") && (d = (new DOMParser).parseFromString(e, "application/xml"));
      d && d.documentElement || f && b(f) || n.some(p, b);
      return d;
    };
  }
  var e = function(a) {
    return c("native-xhr2-blob") || "blob" !== a.options.handleAs || "undefined" === typeof Blob ? a.xhr.response : new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")});
  }, h = {javascript:function(a) {
    return m.eval(a.text || "");
  }, json:function(a) {
    return l.parse(a.text || null);
  }, xml:k, blob:e, arraybuffer:e, document:e};
  g.register = function(a, b) {
    h[a] = b;
  };
  return g;
});

//# sourceMappingURL=handlers.js.map
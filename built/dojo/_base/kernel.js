//>>built
define("dojo/_base/kernel", ["../has", "./config", "require", "module"], function(d, h, k, b) {
  var g, c;
  g = function() {
    return this;
  }();
  var e = {}, m = {}, a = {config:h, global:g, dijit:e, dojox:m}, e = {dojo:["dojo", a], dijit:["dijit", e], dojox:["dojox", m]};
  b = k.map && k.map[b.id.match(/[^\/]+/)[0]];
  for (c in b) {
    e[c] ? e[c][0] = b[c] : e[c] = [b[c], {}];
  }
  for (c in e) {
    b = e[c], b[1]._scopeName = b[0], h.noGlobals || (g[b[0]] = b[1]);
  }
  a.scopeMap = e;
  a.baseUrl = a.config.baseUrl = k.baseUrl;
  a.isAsync = k.async;
  a.locale = h.locale;
  g = "$Rev$".match(/[0-9a-f]{7,}/);
  a.version = {major:1, minor:12, patch:0, flag:"-pre", revision:g ? g[0] : NaN, toString:function() {
    var f = a.version;
    return f.major + "." + f.minor + "." + f.patch + f.flag + " (" + f.revision + ")";
  }};
  d("csp-restrictions") || Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(a);
  a.exit = function() {
  };
  d("host-webworker");
  d.add("console-as-object", function() {
    return Function.prototype.bind && console && "object" === typeof console.log;
  });
  "undefined" != typeof console || (console = {});
  b = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
  var l;
  for (g = 0;l = b[g++];) {
    console[l] ? d("console-as-object") && (console[l] = Function.prototype.bind.call(console[l], console)) : function() {
      var f = l + "";
      console[f] = "log" in console ? function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(f + ":");
        console.log(a.join(" "));
      } : function() {
      };
      console[f]._fake = !0;
    }();
  }
  d.add("dojo-debug-messages", !!h.isDebug);
  a.deprecated = a.experimental = function() {
  };
  d("dojo-debug-messages") && (a.deprecated = function(a, b, c) {
    a = "DEPRECATED: " + a;
    b && (a += " " + b);
    c && (a += " -- will be removed in version: " + c);
    console.warn(a);
  }, a.experimental = function(a, b) {
    var c = "EXPERIMENTAL: " + a + " -- APIs subject to change without notice.";
    b && (c += " " + b);
    console.warn(c);
  });
  if (h.modulePaths) {
    a.deprecated("dojo.modulePaths", "use paths configuration");
    d = {};
    for (c in h.modulePaths) {
      d[c.replace(/\./g, "/")] = h.modulePaths[c];
    }
    k({paths:d});
  }
  a.moduleUrl = function(b, c) {
    a.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
    var d = null;
    b && (d = k.toUrl(b.replace(/\./g, "/") + (c ? "/" + c : "") + "/*.*").replace(/\/\*\.\*/, "") + (c ? "" : "/"));
    return d;
  };
  a._hasResource = {};
  return a;
});

//# sourceMappingURL=kernel.js.map
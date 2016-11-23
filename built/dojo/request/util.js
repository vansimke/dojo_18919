//>>built
define("dojo/request/util", "exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(f, q, m, r, n, t, h, u) {
  function v(b) {
    return p(b);
  }
  function w(b) {
    return void 0 !== b.data ? b.data : b.text;
  }
  f.deepCopy = function(b, c) {
    for (var e in c) {
      var d = b[e], a = c[e];
      d !== a && (d && "object" === typeof d && a && "object" === typeof a ? f.deepCopy(d, a) : b[e] = a);
    }
    return b;
  };
  f.deepCreate = function(b, c) {
    c = c || {};
    var e = h.delegate(b), d, a;
    for (d in b) {
      (a = b[d]) && "object" === typeof a && (e[d] = f.deepCreate(a, c[d]));
    }
    return f.deepCopy(e, c);
  };
  var p = Object.freeze || function(b) {
    return b;
  };
  f.deferred = function(b, c, e, d, a, k) {
    var g = new r(function(a) {
      c && c(g, b);
      return a && (a instanceof q || a instanceof m) ? a : new m("Request canceled", b);
    });
    g.response = b;
    g.isValid = e;
    g.isReady = d;
    g.handleResponse = a;
    e = g.then(v).otherwise(function(a) {
      a.response = b;
      throw a;
    });
    f.notify && e.then(h.hitch(f.notify, "emit", "load"), h.hitch(f.notify, "emit", "error"));
    d = e.then(w);
    a = new u;
    for (var l in d) {
      d.hasOwnProperty(l) && (a[l] = d[l]);
    }
    a.response = e;
    p(a);
    k && g.then(function(a) {
      k.call(g, a);
    }, function(a) {
      k.call(g, b, a);
    });
    g.promise = a;
    g.then = a.then;
    return g;
  };
  f.addCommonMethods = function(b, c) {
    t.forEach(c || ["GET", "POST", "PUT", "DELETE"], function(c) {
      b[("DELETE" === c ? "DEL" : c).toLowerCase()] = function(d, a) {
        a = h.delegate(a || {});
        a.method = c;
        return b(d, a);
      };
    });
  };
  f.parseArgs = function(b, c, e) {
    var d = c.data, a = c.query;
    !d || e || "object" !== typeof d || d instanceof ArrayBuffer || d instanceof Blob || (c.data = n.objectToQuery(d));
    a ? ("object" === typeof a && (a = n.objectToQuery(a)), c.preventCache && (a += (a ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : c.preventCache && (a = "request.preventCache\x3d" + +new Date);
    b && a && (b += (~b.indexOf("?") ? "\x26" : "?") + a);
    return {url:b, options:c, getHeader:function(a) {
      return null;
    }};
  };
  f.checkStatus = function(b) {
    b = b || 0;
    return 200 <= b && 300 > b || 304 === b || 1223 === b || !b;
  };
});

//# sourceMappingURL=util.js.map
//>>built
define("dojo/request/xhr", ["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(p, y, q, e, b) {
  function z(a, c) {
    var k = a.xhr;
    a.status = a.xhr.status;
    try {
      a.text = k.responseText;
    } catch (b) {
    }
    "xml" === a.options.handleAs && (a.data = k.responseXML);
    if (!c) {
      try {
        q(a);
      } catch (b) {
        c = b;
      }
    }
    var d;
    if (c) {
      this.reject(c);
    } else {
      try {
        q(a);
      } catch (b) {
        d = b;
      }
      e.checkStatus(k.status) ? d ? this.reject(d) : this.resolve(a) : (c = d ? new p("Unable to load " + a.url + " status: " + k.status + " and an error in handleAs: transformation of response", a) : new p("Unable to load " + a.url + " status: " + k.status, a), this.reject(c));
    }
  }
  function A(a) {
    return this.xhr.getResponseHeader(a);
  }
  function l(a, c, k) {
    var d = b("native-formdata") && c && c.data && c.data instanceof FormData, f = e.parseArgs(a, e.deepCreate(B, c), d);
    a = f.url;
    c = f.options;
    var r, h = e.deferred(f, t, u, w, z, function() {
      r && r();
    }), g = f.xhr = l._create();
    if (!g) {
      return h.cancel(new p("XHR was not created")), k ? h : h.promise;
    }
    f.getHeader = A;
    v && (r = v(g, h, f));
    var q = "undefined" === typeof c.data ? null : c.data, C = !c.sync, D = c.method;
    try {
      g.open(D, a, C, c.user || void 0, c.password || void 0);
      c.withCredentials && (g.withCredentials = c.withCredentials);
      b("native-response-type") && c.handleAs in x && (g.responseType = x[c.handleAs]);
      var m = c.headers;
      a = d ? !1 : "application/x-www-form-urlencoded";
      if (m) {
        for (var n in m) {
          "content-type" === n.toLowerCase() ? a = m[n] : m[n] && g.setRequestHeader(n, m[n]);
        }
      }
      a && !1 !== a && g.setRequestHeader("Content-Type", a);
      m && "X-Requested-With" in m || g.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      e.notify && e.notify.emit("send", f, h.promise.cancel);
      g.send(q);
    } catch (E) {
      h.reject(E);
    }
    y(h);
    g = null;
    return k ? h : h.promise;
  }
  b.add("native-xhr", function() {
    return "undefined" !== typeof XMLHttpRequest;
  });
  b.add("dojo-force-activex-xhr", function() {
    return b("activex") && "file:" === window.location.protocol;
  });
  b.add("native-xhr2", function() {
    if (b("native-xhr") && !b("dojo-force-activex-xhr")) {
      var a = new XMLHttpRequest;
      return "undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload);
    }
  });
  b.add("native-formdata", function() {
    return "undefined" !== typeof FormData;
  });
  b.add("native-response-type", function() {
    return b("native-xhr") && "undefined" !== typeof(new XMLHttpRequest).responseType;
  });
  b.add("native-xhr2-blob", function() {
    if (b("native-response-type")) {
      var a = new XMLHttpRequest;
      a.open("GET", "/", !0);
      a.responseType = "blob";
      var c = a.responseType;
      a.abort();
      return "blob" === c;
    }
  });
  var x = {blob:b("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, u, w, v, t;
  b("native-xhr2") ? (u = function(a) {
    return !this.isFulfilled();
  }, t = function(a, c) {
    c.xhr.abort();
  }, v = function(a, c, b) {
    function d(a) {
      c.handleResponse(b);
    }
    function f(a) {
      a = new p("Unable to load " + b.url + " status: " + a.target.status, b);
      c.handleResponse(b, a);
    }
    function e(a) {
      a.lengthComputable ? (b.loaded = a.loaded, b.total = a.total, c.progress(b)) : 3 === b.xhr.readyState && (b.loaded = "loaded" in a ? a.loaded : a.position, c.progress(b));
    }
    a.addEventListener("load", d, !1);
    a.addEventListener("error", f, !1);
    a.addEventListener("progress", e, !1);
    return function() {
      a.removeEventListener("load", d, !1);
      a.removeEventListener("error", f, !1);
      a.removeEventListener("progress", e, !1);
      a = null;
    };
  }) : (u = function(a) {
    return a.xhr.readyState;
  }, w = function(a) {
    return 4 === a.xhr.readyState;
  }, t = function(a, c) {
    var b = c.xhr, d = typeof b.abort;
    "function" !== d && "object" !== d && "unknown" !== d || b.abort();
  });
  var B = {data:null, query:null, sync:!1, method:"GET"};
  l._create = function() {
    throw Error("XMLHTTP not available");
  };
  if (b("native-xhr") && !b("dojo-force-activex-xhr")) {
    l._create = function() {
      return new XMLHttpRequest;
    };
  } else {
    if (b("activex")) {
      try {
        new ActiveXObject("Msxml2.XMLHTTP"), l._create = function() {
          return new ActiveXObject("Msxml2.XMLHTTP");
        };
      } catch (a) {
        try {
          new ActiveXObject("Microsoft.XMLHTTP"), l._create = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
          };
        } catch (c) {
        }
      }
    }
  }
  e.addCommonMethods(l);
  return l;
});

//# sourceMappingURL=xhr.js.map
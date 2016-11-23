//>>built
define("dojo/Deferred", ["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "./promise/instrumentation"], function(v, w, r, t, p) {
  var u = Object.freeze || function() {
  }, m = function(b, a, c, d, f) {
    2 === a && h.instrumentRejected && 0 === b.length && h.instrumentRejected(c, !1, d, f);
    for (f = 0;f < b.length;f++) {
      q(b[f], a, c, d);
    }
  }, q = function(b, a, c, d) {
    var f = b[a], e = b.deferred;
    if (f) {
      try {
        var k = f(c);
        if (0 === a) {
          "undefined" !== typeof k && g(e, a, k);
        } else {
          if (k && "function" === typeof k.then) {
            b.cancel = k.cancel;
            k.then(n(e, 1), n(e, 2), n(e, 0));
            return;
          }
          g(e, 1, k);
        }
      } catch (l) {
        g(e, 2, l);
      }
    } else {
      g(e, a, c);
    }
    2 === a && h.instrumentRejected && h.instrumentRejected(c, !!f, d, e.promise);
  }, n = function(b, a) {
    return function(c) {
      g(b, a, c);
    };
  }, g = function(b, a, c) {
    if (!b.isCanceled()) {
      switch(a) {
        case 0:
          b.progress(c);
          break;
        case 1:
          b.resolve(c);
          break;
        case 2:
          b.reject(c);
      }
    }
  }, h = function(b) {
    var a = this.promise = new t, c = this, d, f, e, k = !1, l = [];
    Error.captureStackTrace && (Error.captureStackTrace(c, h), Error.captureStackTrace(a, h));
    this.isResolved = a.isResolved = function() {
      return 1 === d;
    };
    this.isRejected = a.isRejected = function() {
      return 2 === d;
    };
    this.isFulfilled = a.isFulfilled = function() {
      return !!d;
    };
    this.isCanceled = a.isCanceled = function() {
      return k;
    };
    this.progress = function(b, f) {
      if (d) {
        if (!0 === f) {
          throw Error("This deferred has already been fulfilled.");
        }
        return a;
      }
      m(l, 0, b, null, c);
      return a;
    };
    this.resolve = function(b, e) {
      if (d) {
        if (!0 === e) {
          throw Error("This deferred has already been fulfilled.");
        }
        return a;
      }
      m(l, d = 1, f = b, null, c);
      l = null;
      return a;
    };
    var g = this.reject = function(b, h) {
      if (d) {
        if (!0 === h) {
          throw Error("This deferred has already been fulfilled.");
        }
        return a;
      }
      Error.captureStackTrace && Error.captureStackTrace(e = {}, g);
      m(l, d = 2, f = b, e, c);
      l = null;
      return a;
    };
    this.then = a.then = function(b, c, k) {
      var g = [k, b, c];
      g.cancel = a.cancel;
      g.deferred = new h(function(a) {
        return g.cancel && g.cancel(a);
      });
      d && !l ? q(g, d, f, e) : l.push(g);
      return g.deferred.promise;
    };
    this.cancel = a.cancel = function(a, c) {
      if (!d) {
        if (b) {
          var e = b(a);
          a = "undefined" === typeof e ? a : e;
        }
        k = !0;
        if (!d) {
          return "undefined" === typeof a && (a = new r), g(a), a;
        }
        if (2 === d && f === a) {
          return a;
        }
      } else {
        if (!0 === c) {
          throw Error("This deferred has already been fulfilled.");
        }
      }
    };
    u(a);
  };
  h.prototype.toString = function() {
    return "[object Deferred]";
  };
  p && p(h);
  return h;
});

//# sourceMappingURL=Deferred.js.map
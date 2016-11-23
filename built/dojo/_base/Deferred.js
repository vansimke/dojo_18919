//>>built
define("dojo/_base/Deferred", "./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(c, g, z, A, v, h, B) {
  var t = function() {
  }, C = Object.freeze || function() {
  }, r = c.Deferred = function(c) {
    function p(a) {
      if (k) {
        throw Error("This deferred has already been resolved");
      }
      l = a;
      k = !0;
      w();
    }
    function w() {
      for (var a;!a && e;) {
        var b = e;
        e = e.next;
        if (a = b.progress == t) {
          k = !1;
        }
        var d = m ? b.error : b.resolved;
        v("config-useDeferredInstrumentation") && m && g.instrumentRejected && g.instrumentRejected(l, !!d);
        if (d) {
          try {
            var n = d(l);
            n && "function" === typeof n.then ? n.then(h.hitch(b.deferred, "resolve"), h.hitch(b.deferred, "reject"), h.hitch(b.deferred, "progress")) : (d = a && void 0 === n, a && !d && (m = n instanceof Error), b.deferred[d && m ? "reject" : "resolve"](d ? l : n));
          } catch (c) {
            b.deferred.reject(c);
          }
        } else {
          m ? b.deferred.reject(l) : b.deferred.resolve(l);
        }
      }
    }
    var l, k, x, q, m, u, e, f = this.promise = new z;
    this.isResolved = f.isResolved = function() {
      return 0 == q;
    };
    this.isRejected = f.isRejected = function() {
      return 1 == q;
    };
    this.isFulfilled = f.isFulfilled = function() {
      return 0 <= q;
    };
    this.isCanceled = f.isCanceled = function() {
      return x;
    };
    this.resolve = this.callback = function(a) {
      this.fired = q = 0;
      this.results = [a, null];
      p(a);
    };
    this.reject = this.errback = function(a) {
      m = !0;
      this.fired = q = 1;
      v("config-useDeferredInstrumentation") && g.instrumentRejected && g.instrumentRejected(a, !!e);
      p(a);
      this.results = [null, a];
    };
    this.progress = function(a) {
      for (var b = e;b;) {
        var d = b.progress;
        d && d(a);
        b = b.next;
      }
    };
    this.addCallbacks = function(a, b) {
      this.then(a, b, t);
      return this;
    };
    f.then = this.then = function(a, b, d) {
      var c = d == t ? this : new r(f.cancel);
      a = {resolved:a, error:b, progress:d, deferred:c};
      e ? u = u.next = a : e = u = a;
      k && w();
      return c.promise;
    };
    var y = this;
    f.cancel = this.cancel = function() {
      if (!k) {
        var a = c && c(y);
        k || (a instanceof Error || (a = new A(a)), a.log = !1, y.reject(a));
      }
      x = !0;
    };
    C(f);
  };
  h.extend(r, {addCallback:function(g) {
    return this.addCallbacks(h.hitch.apply(c, arguments));
  }, addErrback:function(g) {
    return this.addCallbacks(null, h.hitch.apply(c, arguments));
  }, addBoth:function(g) {
    var p = h.hitch.apply(c, arguments);
    return this.addCallbacks(p, p);
  }, fired:-1});
  r.when = c.when = B;
  return r;
});

//# sourceMappingURL=Deferred.js.map
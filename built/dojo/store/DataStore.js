//>>built
define("dojo/store/DataStore", "../_base/lang ../_base/declare ../Deferred ../_base/array ./util/QueryResults ./util/SimpleQueryEngine".split(" "), function(l, p, g, q, r, t) {
  return p("dojo.store.DataStore", null, {target:"", constructor:function(a) {
    l.mixin(this, a);
    if (!("idProperty" in a)) {
      var c;
      try {
        c = this.store.getIdentityAttributes();
      } catch (b) {
      }
      this.idProperty = (l.isArray(c) ? c[0] : c) || this.idProperty;
    }
    a = this.store.getFeatures();
    a["dojo.data.api.Read"] || (this.get = null);
    a["dojo.data.api.Identity"] || (this.getIdentity = null);
    a["dojo.data.api.Write"] || (this.put = this.add = null);
  }, idProperty:"id", store:null, queryEngine:t, _objectConverter:function(a) {
    function c(a) {
      for (var f = {}, g = b.getAttributes(a), n = 0;n < g.length;n++) {
        var e = g[n], m = b.getValues(a, e);
        if (1 < m.length) {
          for (e = 0;e < m.length;e++) {
            var h = m[e];
            "object" == typeof h && b.isItem(h) && (m[e] = c(h));
          }
          h = m;
        } else {
          h = b.getValue(a, e), "object" == typeof h && b.isItem(h) && (h = c(h));
        }
        f[g[n]] = h;
      }
      d in f || !b.getIdentity || (f[d] = b.getIdentity(a));
      return f;
    }
    var b = this.store, d = this.idProperty;
    return function(b) {
      return a(b && c(b));
    };
  }, get:function(a, c) {
    var b, d, k = new g;
    this.store.fetchItemByIdentity({identity:a, onItem:this._objectConverter(function(a) {
      k.resolve(b = a);
    }), onError:function(a) {
      k.reject(d = a);
    }});
    if (void 0 !== b) {
      return null == b ? void 0 : b;
    }
    if (d) {
      throw d;
    }
    return k.promise;
  }, put:function(a, c) {
    c = c || {};
    var b = "undefined" != typeof c.id ? c.id : this.getIdentity(a), d = this.store, k = this.idProperty, f = new g;
    if ("undefined" == typeof b) {
      var l = d.newItem(a);
      d.save({onComplete:function() {
        f.resolve(l);
      }, onError:function(a) {
        f.reject(a);
      }});
    } else {
      d.fetchItemByIdentity({identity:b, onItem:function(b) {
        if (b) {
          if (!1 === c.overwrite) {
            return f.reject(Error("Overwriting existing object not allowed"));
          }
          for (var e in a) {
            e != k && a.hasOwnProperty(e) && d.getValue(b, e) != a[e] && d.setValue(b, e, a[e]);
          }
        } else {
          if (!0 === c.overwrite) {
            return f.reject(Error("Creating new object not allowed"));
          }
          b = d.newItem(a);
        }
        d.save({onComplete:function() {
          f.resolve(b);
        }, onError:function(a) {
          f.reject(a);
        }});
      }, onError:function(a) {
        f.reject(a);
      }});
    }
    return f.promise;
  }, add:function(a, c) {
    (c = c || {}).overwrite = !1;
    return this.put(a, c);
  }, remove:function(a) {
    var c = this.store, b = new g;
    this.store.fetchItemByIdentity({identity:a, onItem:function(a) {
      try {
        null == a ? b.resolve(!1) : (c.deleteItem(a), c.save(), b.resolve(!0));
      } catch (g) {
        b.reject(g);
      }
    }, onError:function(a) {
      b.reject(a);
    }});
    return b.promise;
  }, query:function(a, c) {
    var b, d = new g(function() {
      b.abort && b.abort();
    });
    d.total = new g;
    var k = this._objectConverter(function(a) {
      return a;
    });
    b = this.store.fetch(l.mixin({query:a, onBegin:function(a) {
      d.total.resolve(a);
    }, onComplete:function(a) {
      d.resolve(q.map(a, k));
    }, onError:function(a) {
      d.reject(a);
    }}, c));
    return r(d);
  }, getIdentity:function(a) {
    return a[this.idProperty];
  }});
});

//# sourceMappingURL=DataStore.js.map
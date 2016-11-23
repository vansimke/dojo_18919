//>>built
define("dojo/request/watch", "./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(q, l, m, n, e, h) {
  function k() {
    for (var p = +new Date, d = 0, b;d < c.length && (b = c[d]);d++) {
      var f = b.response, e = f.options;
      b.isCanceled && b.isCanceled() || b.isValid && !b.isValid(f) ? (c.splice(d--, 1), a._onAction && a._onAction()) : b.isReady && b.isReady(f) ? (c.splice(d--, 1), b.handleResponse(f), a._onAction && a._onAction()) : b.startTime && b.startTime + (e.timeout || 0) < p && (c.splice(d--, 1), b.cancel(new l("Timeout exceeded", f)), a._onAction && a._onAction());
    }
    a._onInFlight && a._onInFlight(b);
    c.length || (clearInterval(g), g = null);
  }
  function a(a) {
    a.response.options.timeout && (a.startTime = +new Date);
    a.isFulfilled() || (c.push(a), g || (g = setInterval(k, 50)), a.response.options.sync && k());
  }
  var g = null, c = [];
  a.cancelAll = function() {
    try {
      n.forEach(c, function(a) {
        try {
          a.cancel(new m("All requests canceled."));
        } catch (c) {
        }
      });
    } catch (a) {
    }
  };
  e && h && e.doc.attachEvent && h(e.global, "unload", function() {
    a.cancelAll();
  });
  return a;
});

//# sourceMappingURL=watch.js.map
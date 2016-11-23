//>>built
define("dojo/hash", "./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "), function(d, y, h, z, k, A, B, l) {
  function u(a, c) {
    var b = a.indexOf(c);
    return 0 <= b ? a.substring(b + 1) : "";
  }
  function e() {
    return u(location.href, "#");
  }
  function p() {
    A.publish("/dojo/hashchange", e());
  }
  function m() {
    e() !== b && (b = e(), p());
  }
  function w(a) {
    if (f) {
      if (f.isTransitioning()) {
        setTimeout(k.hitch(null, w, a), q);
      } else {
        var c = f.iframe.location.href, b = c.indexOf("?");
        f.iframe.location.replace(c.substring(0, b) + "?" + a);
      }
    } else {
      c = location.href.replace(/#.*/, ""), location.replace(c + "#" + a), !x && m();
    }
  }
  function C() {
    function a() {
      b = e();
      l = g ? b : u(v.href, "?");
      r = !1;
      t = null;
    }
    var c = document.createElement("iframe"), f = h.dojoBlankHtmlUrl || y.toUrl("./resources/blank.html");
    h.useXDomain && !h.dojoBlankHtmlUrl && console.warn("dojo/hash: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl to the path on your domain to blank.html");
    c.id = "dojo-hash-iframe";
    c.src = f + "?" + e();
    c.style.display = "none";
    document.body.appendChild(c);
    this.iframe = d.global["dojo-hash-iframe"];
    var l, r, t, m, g, v = this.iframe.location;
    this.isTransitioning = function() {
      return r;
    };
    this.pollLocation = function() {
      if (!g) {
        try {
          var d = u(v.href, "?");
          document.title != m && (m = this.iframe.document.title = document.title);
        } catch (h) {
          g = !0, console.error("dojo/hash: Error adding history entry. Server unreachable.");
        }
      }
      var n = e();
      if (r && b === n) {
        if (g || d === t) {
          a(), p();
        } else {
          setTimeout(k.hitch(this, this.pollLocation), 0);
          return;
        }
      } else {
        if (b !== n || !g && l !== d) {
          if (b !== n) {
            b = n;
            r = !0;
            t = n;
            c.src = f + "?" + t;
            g = !1;
            setTimeout(k.hitch(this, this.pollLocation), 0);
            return;
          }
          g || (location.href = "#" + v.search.substring(1), a(), p());
        }
      }
      setTimeout(k.hitch(this, this.pollLocation), q);
    };
    a();
    setTimeout(k.hitch(this, this.pollLocation), q);
  }
  d.hash = function(a, b) {
    if (!arguments.length) {
      return e();
    }
    "#" == a.charAt(0) && (a = a.substring(1));
    b ? w(a) : location.hash = "#" + a;
    return a;
  };
  var b, f, x, q = h.hashPollFrequency || 100;
  B(function() {
    "onhashchange" in d.global && (!l("ie") || 8 <= l("ie") && "BackCompat" != document.compatMode) ? x = z.after(d.global, "onhashchange", p, !0) : document.addEventListener ? (b = e(), setInterval(m, q)) : document.attachEvent && (f = new C);
  });
  return d.hash;
});

//# sourceMappingURL=hash.js.map
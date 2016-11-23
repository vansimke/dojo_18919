//>>built
define("dojo/request/iframe", "module require ./watch ./util ./handlers ../_base/lang ../io-query ../query ../has ../dom ../dom-construct ../_base/window ../NodeList-dom".split(" "), function(C, D, E, r, F, x, A, G, y, B, t, d) {
  function H(a) {
    return !this.isFulfilled();
  }
  function I(a) {
    return !!this._finished;
  }
  function J(a, b) {
    if (!b) {
      try {
        var f = a.options, g = c.doc(c._frame), e = f.handleAs;
        if ("html" !== e) {
          if ("xml" === e) {
            if ("html" === g.documentElement.tagName.toLowerCase()) {
              G("a", g.documentElement).orphan();
              var d = g.documentElement.innerText || g.documentElement.textContent, d = d.replace(/>\s+</g, "\x3e\x3c");
              a.text = x.trim(d);
            } else {
              a.data = g;
            }
          } else {
            a.text = g.getElementsByTagName("textarea")[0].value;
          }
          F(a);
        } else {
          a.data = g;
        }
      } catch (h) {
        b = h;
      }
    }
    b ? this.reject(b) : this._finished ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"));
  }
  function K(a) {
    this._callNext();
  }
  function c(a, b, f) {
    var d = r.parseArgs(a, r.deepCreate(L, b), !0);
    a = d.url;
    b = d.options;
    if ("GET" !== b.method && "POST" !== b.method) {
      throw Error(b.method + " not supported by dojo/request/iframe");
    }
    c._frame || (c._frame = c.create(c._iframeName, z + "();"));
    a = r.deferred(d, null, H, I, J, K);
    a._callNext = function() {
      this._calledNext || (this._calledNext = !0, c._currentDfd = null, c._fireNextRequest());
    };
    a._legacy = f;
    c._dfdQueue.push(a);
    c._fireNextRequest();
    E(a);
    return f ? a : a.promise;
  }
  var u = C.id.replace(/[\/\.\-]/g, "_"), z = u + "_onload";
  d.global[z] || (d.global[z] = function() {
    var a = c._currentDfd;
    if (a) {
      var b = B.byId(a.response.options.form) || a._tmpForm;
      if (b) {
        for (var f = a._contentToClean, d = 0;d < f.length;d++) {
          for (var e = f[d], l = 0;l < b.childNodes.length;l++) {
            var h = b.childNodes[l];
            if (h.name === e) {
              t.destroy(h);
              break;
            }
          }
        }
        a._originalAction && b.setAttribute("action", a._originalAction);
        a._originalMethod && (b.setAttribute("method", a._originalMethod), b.method = a._originalMethod);
        a._originalTarget && (b.setAttribute("target", a._originalTarget), b.target = a._originalTarget);
      }
      a._tmpForm && (t.destroy(a._tmpForm), delete a._tmpForm);
      a._finished = !0;
    } else {
      c._fireNextRequest();
    }
  });
  var L = {method:"POST"};
  c.create = function(a, b, c) {
    if (d.global[a]) {
      return d.global[a];
    }
    if (d.global.frames[a]) {
      return d.global.frames[a];
    }
    c || (y("config-useXDomain") && !y("config-dojoBlankHtmlUrl") && console.warn("dojo/request/iframe: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set dojoConfig.dojoBlankHtmlUrl to the path on your domain to blank.html"), c = y("config-dojoBlankHtmlUrl") || D.toUrl("dojo/resources/blank.html"));
    b = t.place('\x3ciframe id\x3d"' + a + '" name\x3d"' + a + '" src\x3d"' + c + '" onload\x3d"' + b + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', d.body());
    return d.global[a] = b;
  };
  c.doc = function(a) {
    if (a.contentDocument) {
      return a.contentDocument;
    }
    var b = a.name;
    if (b) {
      var c = d.doc.getElementsByTagName("iframe");
      if (a.document && c[b].contentWindow && c[b].contentWindow.document) {
        return c[b].contentWindow.document;
      }
      if (d.doc.frames[b] && d.doc.frames[b].document) {
        return d.doc.frames[b].document;
      }
    }
    return null;
  };
  c.setSrc = function(a, b, c) {
    a = d.global.frames[a.name];
    a.contentWindow && (a = a.contentWindow);
    try {
      c ? a.location.replace(b) : a.location = b;
    } catch (g) {
    }
  };
  c._iframeName = u + "_IoIframe";
  c._notifyStart = function() {
  };
  c._dfdQueue = [];
  c._currentDfd = null;
  c._fireNextRequest = function() {
    var a;
    try {
      if (!c._currentDfd && c._dfdQueue.length) {
        do {
          a = c._currentDfd = c._dfdQueue.shift();
        } while (a && (a.canceled || a.isCanceled && a.isCanceled()) && c._dfdQueue.length);
        if (!a || a.canceled || a.isCanceled && a.isCanceled()) {
          c._currentDfd = null;
        } else {
          var b = a.response, f = b.options, g = a._contentToClean = [], e = B.byId(f.form), l = r.notify, h = f.data || null, n;
          a._legacy || "POST" !== f.method || e ? "GET" === f.method && e && -1 < b.url.indexOf("?") && (n = b.url.slice(b.url.indexOf("?") + 1), h = x.mixin(A.queryToObject(n), h)) : e = a._tmpForm = t.create("form", {name:u + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, d.body());
          if (e) {
            if (!a._legacy) {
              var k = e;
              do {
                k = k.parentNode;
              } while (k && k !== d.doc.documentElement);
              k || (e.style.position = "absolute", e.style.left = "-1000px", e.style.top = "-1000px", d.body().appendChild(e));
              e.name || (e.name = u + "_form");
            }
            if (h) {
              var k = function(a, b) {
                t.create("input", {type:"hidden", name:a, value:b}, e);
                g.push(a);
              }, p;
              for (p in h) {
                var q = h[p];
                if (x.isArray(q) && 1 < q.length) {
                  for (n = 0;n < q.length;n++) {
                    k(p, q[n]);
                  }
                } else {
                  e[p] ? e[p].value = q : k(p, q);
                }
              }
            }
            var v = e.getAttributeNode("action"), m = e.getAttributeNode("method"), w = e.getAttributeNode("target");
            b.url && (a._originalAction = v ? v.value : null, v ? v.value = b.url : e.setAttribute("action", b.url));
            a._legacy ? m && m.value || (m ? m.value = f.method : e.setAttribute("method", f.method)) : (a._originalMethod = m ? m.value : null, m ? m.value = f.method : e.setAttribute("method", f.method));
            a._originalTarget = w ? w.value : null;
            w ? w.value = c._iframeName : e.setAttribute("target", c._iframeName);
            e.target = c._iframeName;
            l && l.emit("send", b, a.promise.cancel);
            c._notifyStart(b);
            e.submit();
          } else {
            f = "", b.options.data && (f = b.options.data, "string" !== typeof f && (f = A.objectToQuery(f))), k = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + f, l && l.emit("send", b, a.promise.cancel), c._notifyStart(b), c.setSrc(c._frame, k, !0);
          }
        }
      }
    } catch (M) {
      a.reject(M);
    }
  };
  r.addCommonMethods(c, ["GET", "POST"]);
  return c;
});

//# sourceMappingURL=iframe.js.map
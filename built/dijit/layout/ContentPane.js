//>>built
define("dijit/layout/ContentPane", "dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when dojo/i18n!../nls/loading".split(" "), function(g, b, m, n, p, k, l, e, q, h, r, x, t, u, v, w) {
  return q("dijit.layout.ContentPane", [m, n, p], {href:"", content:"", extractContent:!1, parseOnLoad:!0, parserScope:g._scopeName, preventCache:!1, preload:!1, refreshOnShow:!1, loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e", errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e", isLoaded:!1, 
  baseClass:"dijitContentPane", ioArgs:{}, onLoadDeferred:null, _setTitleAttr:null, stopParser:!0, template:!1, markupFactory:function(a, d, c) {
    var b = new c(a, d);
    return !b.href && b._contentSetter && b._contentSetter.parseDeferred && !b._contentSetter.parseDeferred.isFulfilled() ? b._contentSetter.parseDeferred.then(function() {
      return b;
    }) : b;
  }, create:function(a, d) {
    if (!(a && a.template || !d || "href" in a || "content" in a)) {
      d = r.byId(d);
      for (var c = d.ownerDocument.createDocumentFragment();d.firstChild;) {
        c.appendChild(d.firstChild);
      }
      a = b.delegate(a, {content:c});
    }
    this.inherited(arguments, [a, d]);
  }, postMixInProperties:function() {
    this.inherited(arguments);
    var a = v.getLocalization("dijit", "loading", this.lang);
    this.loadingMessage = k.substitute(this.loadingMessage, a);
    this.errorMessage = k.substitute(this.errorMessage, a);
  }, buildRendering:function() {
    this.inherited(arguments);
    this.containerNode || (this.containerNode = this.domNode);
    this.domNode.removeAttribute("title");
  }, startup:function() {
    this.inherited(arguments);
    this._contentSetter && e.forEach(this._contentSetter.parseResults, function(a) {
      a._started || a._destroyed || !b.isFunction(a.startup) || (a.startup(), a._started = !0);
    }, this);
  }, _startChildren:function() {
    e.forEach(this.getChildren(), function(a) {
      a._started || a._destroyed || !b.isFunction(a.startup) || (a.startup(), a._started = !0);
    });
    this._contentSetter && e.forEach(this._contentSetter.parseResults, function(a) {
      a._started || a._destroyed || !b.isFunction(a.startup) || (a.startup(), a._started = !0);
    }, this);
  }, setHref:function(a) {
    g.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
    return this.set("href", a);
  }, _setHrefAttr:function(a) {
    this.cancel();
    this.onLoadDeferred = new h(b.hitch(this, "cancel"));
    this.onLoadDeferred.then(b.hitch(this, "onLoad"));
    this._set("href", a);
    this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
    return this.onLoadDeferred;
  }, setContent:function(a) {
    g.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
    this.set("content", a);
  }, _setContentAttr:function(a) {
    this._set("href", "");
    this.cancel();
    this.onLoadDeferred = new h(b.hitch(this, "cancel"));
    this._created && this.onLoadDeferred.then(b.hitch(this, "onLoad"));
    this._setContent(a || "");
    this._isDownloaded = !1;
    return this.onLoadDeferred;
  }, _getContentAttr:function() {
    return this.containerNode.innerHTML;
  }, cancel:function() {
    this._xhrDfd && -1 == this._xhrDfd.fired && this._xhrDfd.cancel();
    delete this._xhrDfd;
    this.onLoadDeferred = null;
  }, destroy:function() {
    this.cancel();
    this.inherited(arguments);
  }, destroyRecursive:function(a) {
    this._beingDestroyed || this.inherited(arguments);
  }, _onShow:function() {
    this.inherited(arguments);
    if (this.href && !this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow)) {
      return this.refresh();
    }
  }, refresh:function() {
    this.cancel();
    this.onLoadDeferred = new h(b.hitch(this, "cancel"));
    this.onLoadDeferred.then(b.hitch(this, "onLoad"));
    this._load();
    return this.onLoadDeferred;
  }, _load:function() {
    this._setContent(this.onDownloadStart(), !0);
    var a = this, d = {preventCache:this.preventCache || this.refreshOnShow, url:this.href, handleAs:"text"};
    b.isObject(this.ioArgs) && b.mixin(d, this.ioArgs);
    var c = this._xhrDfd = (this.ioMethod || u.get)(d), f;
    c.then(function(c) {
      f = c;
      try {
        return a._isDownloaded = !0, a._setContent(c, !1);
      } catch (b) {
        a._onError("Content", b);
      }
    }, function(b) {
      c.canceled || a._onError("Download", b);
      delete a._xhrDfd;
      return b;
    }).then(function() {
      a.onDownloadEnd();
      delete a._xhrDfd;
      return f;
    });
    delete this._hrefChanged;
  }, _onLoadHandler:function(a) {
    this._set("isLoaded", !0);
    try {
      this.onLoadDeferred.resolve(a);
    } catch (b) {
      console.error("Error " + this.widgetId + " running custom onLoad code: " + b.message);
    }
  }, _onUnloadHandler:function() {
    this._set("isLoaded", !1);
    try {
      this.onUnload();
    } catch (a) {
      console.error("Error " + this.widgetId + " running custom onUnload code: " + a.message);
    }
  }, destroyDescendants:function(a) {
    this.isLoaded && this._onUnloadHandler();
    var b = this._contentSetter;
    e.forEach(this.getChildren(), function(b) {
      b.destroyRecursive ? b.destroyRecursive(a) : b.destroy && b.destroy(a);
      b._destroyed = !0;
    });
    b && (e.forEach(b.parseResults, function(b) {
      b._destroyed || (b.destroyRecursive ? b.destroyRecursive(a) : b.destroy && b.destroy(a), b._destroyed = !0);
    }), delete b.parseResults);
    a || t.empty(this.containerNode);
    delete this._singleChild;
  }, _setContent:function(a, d) {
    a = this.preprocessContent(a);
    this.destroyDescendants();
    var c = this._contentSetter;
    c && c instanceof l._ContentSetter || (c = this._contentSetter = new l._ContentSetter({node:this.containerNode, _onError:b.hitch(this, this._onError), onContentError:b.hitch(this, function(a) {
      a = this.onContentError(a);
      try {
        this.containerNode.innerHTML = a;
      } catch (b) {
        console.error("Fatal " + this.id + " could not change content due to " + b.message, b);
      }
    })}));
    var f = b.mixin({cleanContent:this.cleanContent, extractContent:this.extractContent, parseContent:!a.domNode && this.parseOnLoad, parserScope:this.parserScope, startup:!1, dir:this.dir, lang:this.lang, textDir:this.textDir}, this._contentSetterParams || {}), f = c.set(b.isObject(a) && a.domNode ? a.domNode : a, f), e = this;
    return w(f && f.then ? f : c.parseDeferred, function() {
      delete e._contentSetterParams;
      d || (e._started && (e._startChildren(), e._scheduleLayout()), e._onLoadHandler(a));
    });
  }, preprocessContent:function(a) {
    return a;
  }, _onError:function(a, b, c) {
    this.onLoadDeferred.reject(b);
    a = this["on" + a + "Error"].call(this, b);
    c ? console.error(c, b) : a && this._setContent(a, !0);
  }, onLoad:function() {
  }, onUnload:function() {
  }, onDownloadStart:function() {
    return this.loadingMessage;
  }, onContentError:function() {
  }, onDownloadError:function() {
    return this.errorMessage;
  }, onDownloadEnd:function() {
  }});
});

//# sourceMappingURL=ContentPane.js.map
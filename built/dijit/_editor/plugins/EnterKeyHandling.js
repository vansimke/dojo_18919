//>>built
define("dijit/_editor/plugins/EnterKeyHandling", "dojo/_base/declare dojo/dom-construct dojo/keys dojo/_base/lang dojo/on dojo/sniff dojo/_base/window dojo/window ../_Plugin ../RichText ../range".split(" "), function(w, n, x, q, v, r, z, t, y, u, k) {
  return w("dijit._editor.plugins.EnterKeyHandling", y, {blockNodeForEnter:"BR", constructor:function(b) {
    b && ("blockNodeForEnter" in b && (b.blockNodeForEnter = b.blockNodeForEnter.toUpperCase()), q.mixin(this, b));
  }, setEditor:function(b) {
    if (this.editor !== b) {
      if (this.editor = b, "BR" == this.blockNodeForEnter) {
        this.editor.customUndo = !0, b.onLoadDeferred.then(q.hitch(this, function(a) {
          this.own(v(b.document, "keydown", q.hitch(this, function(a) {
            if (a.keyCode == x.ENTER) {
              var b = q.mixin({}, a);
              b.shiftKey = !0;
              this.handleEnterKey(b) || (a.stopPropagation(), a.preventDefault());
            }
          })));
          9 <= r("ie") && 10 >= r("ie") && this.own(v(b.document, "paste", q.hitch(this, function(a) {
            setTimeout(q.hitch(this, function() {
              var a = this.editor.document.selection.createRange();
              a.move("character", -1);
              a.select();
              a.move("character", 1);
              a.select();
            }), 0);
          })));
          return a;
        }));
      } else {
        if (this.blockNodeForEnter) {
          var a = q.hitch(this, "handleEnterKey");
          b.addKeyHandler(13, 0, 0, a);
          b.addKeyHandler(13, 0, 1, a);
          this.own(this.editor.on("KeyPressed", q.hitch(this, "onKeyPressed")));
        }
      }
    }
  }, onKeyPressed:function() {
    if (this._checkListLater) {
      if (this.editor.selection.isCollapsed()) {
        var b = this.editor.selection.getAncestorElement("LI");
        if (b) {
          r("mozilla") && "LI" == b.parentNode.parentNode.nodeName && (b = b.parentNode.parentNode);
          var a = b.firstChild;
          !a || 1 != a.nodeType || "UL" != a.nodeName && "OL" != a.nodeName || (b.insertBefore(a.ownerDocument.createTextNode("\u00a0"), a), a = k.create(this.editor.window), a.setStart(b.firstChild, 0), b = k.getSelection(this.editor.window, !0), b.removeAllRanges(), b.addRange(a));
        } else {
          u.prototype.execCommand.call(this.editor, "formatblock", this.blockNodeForEnter), (b = this.editor.selection.getAncestorElement(this.blockNodeForEnter)) ? (b.innerHTML = this.bogusHtmlContent, 9 >= r("ie") && (b = this.editor.document.selection.createRange(), b.move("character", -1), b.select())) : console.error("onKeyPressed: Cannot find the new block node");
        }
      }
      this._checkListLater = !1;
    }
    this._pressedEnterInBlock && (this._pressedEnterInBlock.previousSibling && this.removeTrailingBr(this._pressedEnterInBlock.previousSibling), delete this._pressedEnterInBlock);
  }, bogusHtmlContent:"\x26#160;", blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI)$/, handleEnterKey:function(b) {
    var a, f, c, g, l = this.editor.document, d, e, m;
    if (b.shiftKey) {
      b = this.editor.selection.getParentElement();
      if (g = k.getAncestor(b, this.blockNodes)) {
        if ("LI" == g.tagName) {
          return !0;
        }
        b = k.getSelection(this.editor.window);
        a = b.getRangeAt(0);
        a.collapsed || (a.deleteContents(), b = k.getSelection(this.editor.window), a = b.getRangeAt(0));
        if (k.atBeginningOfContainer(g, a.startContainer, a.startOffset)) {
          d = l.createElement("br"), a = k.create(this.editor.window), g.insertBefore(d, g.firstChild), a.setStartAfter(d), b.removeAllRanges(), b.addRange(a);
        } else {
          if (k.atEndOfContainer(g, a.startContainer, a.startOffset)) {
            a = k.create(this.editor.window), d = l.createElement("br"), g.appendChild(d), g.appendChild(l.createTextNode("\u00a0")), a.setStart(g.lastChild, 0), b.removeAllRanges(), b.addRange(a);
          } else {
            return (e = a.startContainer) && 3 == e.nodeType ? (m = e.nodeValue, f = l.createTextNode(m.substring(0, a.startOffset)), c = l.createTextNode(m.substring(a.startOffset)), g = l.createElement("br"), "" == c.nodeValue && r("webkit") && (c = l.createTextNode("\u00a0")), n.place(f, e, "after"), n.place(g, f, "after"), n.place(c, g, "after"), n.destroy(e), a = k.create(this.editor.window), a.setStart(c, 0), b.removeAllRanges(), b.addRange(a), !1) : !0;
          }
        }
      } else {
        b = k.getSelection(this.editor.window), b.rangeCount ? (a = b.getRangeAt(0)) && a.startContainer && (a.collapsed || (a.deleteContents(), b = k.getSelection(this.editor.window), a = b.getRangeAt(0)), (e = a.startContainer) && 3 == e.nodeType ? (g = a.startOffset, e.length < g && (c = this._adjustNodeAndOffset(e, g), e = c.node, g = c.offset), m = e.nodeValue, f = l.createTextNode(m.substring(0, g)), c = l.createTextNode(m.substring(g)), g = l.createElement("br"), c.length || (c = l.createTextNode("\u00a0")), 
        f.length ? n.place(f, e, "after") : f = e, n.place(g, f, "after"), n.place(c, g, "after"), n.destroy(e)) : (0 <= a.startOffset && (d = e.childNodes[a.startOffset]), g = l.createElement("br"), c = l.createTextNode("\u00a0"), d ? (n.place(g, d, "before"), n.place(c, g, "after")) : (e.appendChild(g), e.appendChild(c))), a = k.create(this.editor.window), a.setStart(c, 0), a.setEnd(c, c.length), b.removeAllRanges(), b.addRange(a), this.editor.selection.collapse(!0)) : u.prototype.execCommand.call(this.editor, 
        "inserthtml", "\x3cbr\x3e");
      }
      return !1;
    }
    var p;
    b = k.getSelection(this.editor.window);
    a = b.getRangeAt(0);
    a.collapsed || (a.deleteContents(), b = k.getSelection(this.editor.window), a = b.getRangeAt(0));
    d = k.getBlockAncestor(a.endContainer, null, this.editor.editNode);
    var h = d.blockNode;
    if (this._checkListLater = h && ("LI" == h.nodeName || "LI" == h.parentNode.nodeName)) {
      return r("mozilla") && (this._pressedEnterInBlock = h), /^(\s|&nbsp;|&#160;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|&#160;|\xA0)<\/span>)?(<br>)?$/.test(h.innerHTML) && (h.innerHTML = "", r("webkit") && (a = k.create(this.editor.window), a.setStart(h, 0), b.removeAllRanges(), b.addRange(a)), this._checkListLater = !1), !0;
    }
    if (!d.blockNode || d.blockNode === this.editor.editNode) {
      try {
        u.prototype.execCommand.call(this.editor, "formatblock", this.blockNodeForEnter);
      } catch (q) {
      }
      d = {blockNode:this.editor.selection.getAncestorElement(this.blockNodeForEnter), blockContainer:this.editor.editNode};
      if (d.blockNode) {
        if (d.blockNode != this.editor.editNode && !(d.blockNode.textContent || d.blockNode.innerHTML).replace(/^\s+|\s+$/g, "").length) {
          return this.removeTrailingBr(d.blockNode), !1;
        }
      } else {
        d.blockNode = this.editor.editNode;
      }
      b = k.getSelection(this.editor.window);
      a = b.getRangeAt(0);
    }
    h = l.createElement(this.blockNodeForEnter);
    h.innerHTML = this.bogusHtmlContent;
    this.removeTrailingBr(d.blockNode);
    c = a.endOffset;
    p = a.endContainer;
    p.length < c && (c = this._adjustNodeAndOffset(p, c), p = c.node, c = c.offset);
    if (k.atEndOfContainer(d.blockNode, p, c)) {
      d.blockNode === d.blockContainer ? d.blockNode.appendChild(h) : n.place(h, d.blockNode, "after"), p = !1, a = k.create(this.editor.window), a.setStart(h, 0), b.removeAllRanges(), b.addRange(a), this.editor.height && t.scrollIntoView(h);
    } else {
      if (k.atBeginningOfContainer(d.blockNode, a.startContainer, a.startOffset)) {
        n.place(h, d.blockNode, d.blockNode === d.blockContainer ? "first" : "before"), h.nextSibling && this.editor.height && (a = k.create(this.editor.window), a.setStart(h.nextSibling, 0), b.removeAllRanges(), b.addRange(a), t.scrollIntoView(h.nextSibling)), p = !1;
      } else {
        d.blockNode === d.blockContainer ? d.blockNode.appendChild(h) : n.place(h, d.blockNode, "after");
        p = !1;
        d.blockNode.style && h.style && d.blockNode.style.cssText && (h.style.cssText = d.blockNode.style.cssText);
        if ((e = a.startContainer) && 3 == e.nodeType) {
          c = a.endOffset;
          e.length < c && (c = this._adjustNodeAndOffset(e, c), e = c.node, c = c.offset);
          m = e.nodeValue;
          f = l.createTextNode(m.substring(0, c));
          c = l.createTextNode(m.substring(c, m.length));
          n.place(f, e, "before");
          n.place(c, e, "after");
          n.destroy(e);
          for (f = f.parentNode;f !== d.blockNode;) {
            m = l.createElement(f.tagName);
            f.style && m.style && f.style.cssText && (m.style.cssText = f.style.cssText);
            "FONT" === f.tagName && (f.color && (m.color = f.color), f.face && (m.face = f.face), f.size && (m.size = f.size));
            for (a = c;a;) {
              e = a.nextSibling, m.appendChild(a), a = e;
            }
            n.place(m, f, "after");
            c = m;
            f = f.parentNode;
          }
          a = c;
          if (1 == a.nodeType || 3 == a.nodeType && a.nodeValue) {
            h.innerHTML = "";
          }
          for (f = a;a;) {
            e = a.nextSibling, h.appendChild(a), a = e;
          }
        }
        a = k.create(this.editor.window);
        l = f;
        if ("BR" !== this.blockNodeForEnter) {
          for (;l;) {
            g = l, l = e = l.firstChild;
          }
          g && g.parentNode ? (h = g.parentNode, a.setStart(h, 0), b.removeAllRanges(), b.addRange(a), this.editor.height && t.scrollIntoView(h), r("mozilla") && (this._pressedEnterInBlock = d.blockNode)) : p = !0;
        } else {
          a.setStart(h, 0), b.removeAllRanges(), b.addRange(a), this.editor.height && t.scrollIntoView(h), r("mozilla") && (this._pressedEnterInBlock = d.blockNode);
        }
      }
    }
    return p;
  }, _adjustNodeAndOffset:function(b, a) {
    for (;b.length < a && b.nextSibling && 3 == b.nextSibling.nodeType;) {
      a -= b.length, b = b.nextSibling;
    }
    return {node:b, offset:a};
  }, removeTrailingBr:function(b) {
    if (b = /P|DIV|LI/i.test(b.tagName) ? b : this.editor.selection.getParentOfType(b, ["P", "DIV", "LI"])) {
      b.lastChild && (1 < b.childNodes.length && 3 == b.lastChild.nodeType && /^[\s\xAD]*$/.test(b.lastChild.nodeValue) || "BR" == b.lastChild.tagName) && n.destroy(b.lastChild), b.childNodes.length || (b.innerHTML = this.bogusHtmlContent);
    }
  }});
});

//# sourceMappingURL=EnterKeyHandling.js.map
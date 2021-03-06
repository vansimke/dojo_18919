//>>built
define("dojo/hccss", "require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "), function(g, h, d, k, b, l, c) {
  b.add("highcontrast", function() {
    var a = c.doc.createElement("div");
    try {
      a.style.cssText = 'border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("' + (h.blankGif || g.toUrl("./resources/blank.gif")) + '");';
      c.body().appendChild(a);
      var e = k.getComputedStyle(a), f = e.backgroundImage;
      return e.borderTopColor == e.borderRightColor || f && ("none" == f || "url(invalid-url:)" == f);
    } catch (d) {
      return console.warn("hccss: exception detecting high-contrast mode, document is likely hidden: " + d.toString()), !1;
    } finally {
      8 >= b("ie") ? a.outerHTML = "" : c.body().removeChild(a);
    }
  });
  l(function() {
    b("highcontrast") && d.add(c.body(), "dj_a11y");
  });
  return b;
});

//# sourceMappingURL=hccss.js.map
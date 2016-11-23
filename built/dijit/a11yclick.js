//>>built
define("dijit/a11yclick", ["dojo/keys", "dojo/mouse", "dojo/on", "dojo/touch"], function(e, k, c, h) {
  function f(a) {
    if ((a.keyCode === e.ENTER || a.keyCode === e.SPACE) && !/input|button|textarea/i.test(a.target.nodeName)) {
      for (a = a.target;a;a = a.parentNode) {
        if (a.dojoClick) {
          return !0;
        }
      }
    }
  }
  var d;
  c(document, "keydown", function(a) {
    f(a) ? (d = a.target, a.preventDefault()) : d = null;
  });
  c(document, "keyup", function(a) {
    f(a) && a.target == d && (d = null, c.emit(a.target, "click", {cancelable:!0, bubbles:!0, ctrlKey:a.ctrlKey, shiftKey:a.shiftKey, metaKey:a.metaKey, altKey:a.altKey, _origType:a.type}));
  });
  var b = function(a, g) {
    a.dojoClick = !0;
    return c(a, "click", g);
  };
  b.click = b;
  b.press = function(a, g) {
    var b = c(a, h.press, function(a) {
      ("mousedown" != a.type || k.isLeft(a)) && g(a);
    }), d = c(a, "keydown", function(a) {
      a.keyCode !== e.ENTER && a.keyCode !== e.SPACE || g(a);
    });
    return {remove:function() {
      b.remove();
      d.remove();
    }};
  };
  b.release = function(a, b) {
    var d = c(a, h.release, function(a) {
      ("mouseup" != a.type || k.isLeft(a)) && b(a);
    }), f = c(a, "keyup", function(a) {
      a.keyCode !== e.ENTER && a.keyCode !== e.SPACE || b(a);
    });
    return {remove:function() {
      d.remove();
      f.remove();
    }};
  };
  b.move = h.move;
  return b;
});

//# sourceMappingURL=a11yclick.js.map
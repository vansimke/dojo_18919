//>>built
define("dojo/data/util/filter", ["../../_base/lang"], function(e) {
  var b = {};
  e.setObject("dojo.data.util.filter", b);
  b.patternToRegExp = function(b, e) {
    for (var a = "^", d, c = 0;c < b.length;c++) {
      switch(d = b.charAt(c), d) {
        case "\\":
          a += d;
          c++;
          a += b.charAt(c);
          break;
        case "*":
          a += ".*";
          break;
        case "?":
          a += ".";
          break;
        case "$":
        ;
        case "^":
        ;
        case "/":
        ;
        case "+":
        ;
        case ".":
        ;
        case "|":
        ;
        case "(":
        ;
        case ")":
        ;
        case "{":
        ;
        case "}":
        ;
        case "[":
        ;
        case "]":
          a += "\\";
        default:
          a += d;
      }
    }
    a += "$";
    return e ? new RegExp(a, "mi") : new RegExp(a, "m");
  };
  return b;
});

//# sourceMappingURL=filter.js.map
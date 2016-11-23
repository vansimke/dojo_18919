//>>built
define("dojo/date", ["./has", "./_base/lang"], function(m, l) {
  var f = {getDaysInMonth:function(b) {
    var a = b.getMonth();
    return 1 == a && f.isLeapYear(b) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a];
  }, isLeapYear:function(b) {
    b = b.getFullYear();
    return !(b % 400) || !(b % 4) && !!(b % 100);
  }, getTimezoneName:function(b) {
    var a = b.toString(), c = "", e = a.indexOf("(");
    if (-1 < e) {
      c = a.substring(++e, a.indexOf(")"));
    } else {
      if (e = /([A-Z\/]+) \d{4}$/, a = a.match(e)) {
        c = a[1];
      } else {
        if (a = b.toLocaleString(), e = / ([A-Z\/]+)$/, a = a.match(e)) {
          c = a[1];
        }
      }
    }
    return "AM" == c || "PM" == c ? "" : c;
  }, compare:function(b, a, c) {
    b = new Date(+b);
    a = new Date(+(a || new Date));
    "date" == c ? (b.setHours(0, 0, 0, 0), a.setHours(0, 0, 0, 0)) : "time" == c && (b.setFullYear(0, 0, 0), a.setFullYear(0, 0, 0));
    return b > a ? 1 : b < a ? -1 : 0;
  }, add:function(b, a, c) {
    var e = new Date(+b), d = !1, g = "Date";
    switch(a) {
      case "day":
        break;
      case "weekday":
        var h;
        (a = c % 5) ? h = parseInt(c / 5) : (a = 0 < c ? 5 : -5, h = 0 < c ? (c - 5) / 5 : (c + 5) / 5);
        var f = b.getDay(), k = 0;
        6 == f && 0 < c ? k = 1 : 0 == f && 0 > c && (k = -1);
        f += a;
        if (0 == f || 6 == f) {
          k = 0 < c ? 2 : -2;
        }
        c = 7 * h + a + k;
        break;
      case "year":
        g = "FullYear";
        d = !0;
        break;
      case "week":
        c *= 7;
        break;
      case "quarter":
        c *= 3;
      case "month":
        d = !0;
        g = "Month";
        break;
      default:
        g = "UTC" + a.charAt(0).toUpperCase() + a.substring(1) + "s";
    }
    if (g) {
      e["set" + g](e["get" + g]() + c);
    }
    d && e.getDate() < b.getDate() && e.setDate(0);
    return e;
  }, difference:function(b, a, c) {
    a = a || new Date;
    c = c || "day";
    var e = a.getFullYear() - b.getFullYear(), d = 1;
    switch(c) {
      case "quarter":
        b = b.getMonth();
        a = a.getMonth();
        d = Math.floor(a / 3) + 1 + 4 * e - (Math.floor(b / 3) + 1);
        break;
      case "weekday":
        e = Math.round(f.difference(b, a, "day"));
        c = parseInt(f.difference(b, a, "week"));
        if (0 == e % 7) {
          e = 5 * c;
        } else {
          var d = 0, g = b.getDay(), h = a.getDay();
          c = parseInt(e / 7);
          a = e % 7;
          b = new Date(b);
          b.setDate(b.getDate() + 7 * c);
          b = b.getDay();
          if (0 < e) {
            switch(!0) {
              case 6 == g:
                d = -1;
                break;
              case 0 == g:
                d = 0;
                break;
              case 6 == h:
                d = -1;
                break;
              case 0 == h:
                d = -2;
                break;
              case 5 < b + a:
                d = -2;
            }
          } else {
            if (0 > e) {
              switch(!0) {
                case 6 == g:
                  d = 0;
                  break;
                case 0 == g:
                  d = 1;
                  break;
                case 6 == h:
                  d = 2;
                  break;
                case 0 == h:
                  d = 1;
                  break;
                case 0 > b + a:
                  d = 2;
              }
            }
          }
          e = e + d - 2 * c;
        }
        d = e;
        break;
      case "year":
        d = e;
        break;
      case "month":
        d = a.getMonth() - b.getMonth() + 12 * e;
        break;
      case "week":
        d = parseInt(f.difference(b, a, "day") / 7);
        break;
      case "day":
        d /= 24;
      case "hour":
        d /= 60;
      case "minute":
        d /= 60;
      case "second":
        d /= 1E3;
      case "millisecond":
        d *= a.getTime() - b.getTime();
    }
    return Math.round(d);
  }};
  l.mixin(l.getObject("dojo.date", !0), f);
  return f;
});

//# sourceMappingURL=date.js.map
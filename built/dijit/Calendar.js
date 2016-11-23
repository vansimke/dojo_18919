//>>built
define("dijit/Calendar", "dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "), function(n, x, y, k, p, b, q, r, d, f, g, t, u, l, m, v, w) {
  var h = k("dijit.Calendar", [u, l, m], {baseClass:"dijitCalendar", cssStateNodes:{decrementMonth:"dijitCalendarArrow", incrementMonth:"dijitCalendarArrow", previousYearLabelNode:"dijitCalendarPreviousYear", nextYearLabelNode:"dijitCalendarNextYear"}, setValue:function(a) {
    r.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
    this.set("value", a);
  }, _createMonthWidget:function() {
    return new h._MonthDropDownButton({id:this.id + "_mddb", tabIndex:-1, onMonthSelect:f.hitch(this, "_onMonthSelect"), lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode);
  }, postCreate:function() {
    this.inherited(arguments);
    this.own(g(this.domNode, "keydown", f.hitch(this, "_onKeyDown")), g(this.dateRowsNode, "mouseover", f.hitch(this, "_onDayMouseOver")), g(this.dateRowsNode, "mouseout", f.hitch(this, "_onDayMouseOut")), g(this.dateRowsNode, "mousedown", f.hitch(this, "_onDayMouseDown")), g(this.dateRowsNode, "mouseup", f.hitch(this, "_onDayMouseUp")));
  }, _onMonthSelect:function(a) {
    var c = new this.dateClassObj(this.currentFocus);
    c.setDate(1);
    c.setMonth(a);
    a = this.dateModule.getDaysInMonth(c);
    var e = this.currentFocus.getDate();
    c.setDate(Math.min(e, a));
    this._setCurrentFocusAttr(c);
  }, _onDayMouseOver:function(a) {
    (a = b.contains(a.target, "dijitCalendarDateLabel") ? a.target.parentNode : a.target) && (a.dijitDateValue && !b.contains(a, "dijitCalendarDisabledDate") || a == this.previousYearLabelNode || a == this.nextYearLabelNode) && (b.add(a, "dijitCalendarHoveredDate"), this._currentNode = a);
  }, _onDayMouseOut:function(a) {
    !this._currentNode || a.relatedTarget && a.relatedTarget.parentNode == this._currentNode || (a = "dijitCalendarHoveredDate", b.contains(this._currentNode, "dijitCalendarActiveDate") && (a += " dijitCalendarActiveDate"), b.remove(this._currentNode, a), this._currentNode = null);
  }, _onDayMouseDown:function(a) {
    (a = a.target.parentNode) && a.dijitDateValue && !b.contains(a, "dijitCalendarDisabledDate") && (b.add(a, "dijitCalendarActiveDate"), this._currentNode = a);
  }, _onDayMouseUp:function(a) {
    (a = a.target.parentNode) && a.dijitDateValue && b.remove(a, "dijitCalendarActiveDate");
  }, handleKey:function(a) {
    var c = -1, e, b = this.currentFocus;
    switch(a.keyCode) {
      case d.RIGHT_ARROW:
        c = 1;
      case d.LEFT_ARROW:
        e = "day";
        this.isLeftToRight() || (c *= -1);
        break;
      case d.DOWN_ARROW:
        c = 1;
      case d.UP_ARROW:
        e = "week";
        break;
      case d.PAGE_DOWN:
        c = 1;
      case d.PAGE_UP:
        e = a.ctrlKey || a.altKey ? "year" : "month";
        break;
      case d.END:
        b = this.dateModule.add(b, "month", 1), e = "day";
      case d.HOME:
        b = new this.dateClassObj(b);
        b.setDate(1);
        break;
      default:
        return !0;
    }
    e && (b = this.dateModule.add(b, e, c));
    this._setCurrentFocusAttr(b);
    return !1;
  }, _onKeyDown:function(a) {
    this.handleKey(a) || (a.stopPropagation(), a.preventDefault());
  }, onValueSelected:function() {
  }, onChange:function(a) {
    this.onValueSelected(a);
  }, getClassForDate:function() {
  }});
  h._MonthDropDownButton = k("dijit.Calendar._MonthDropDownButton", w, {onMonthSelect:function() {
  }, postCreate:function() {
    this.inherited(arguments);
    this.dropDown = new h._MonthDropDown({id:this.id + "_mdd", onChange:this.onMonthSelect});
  }, _setMonthAttr:function(a) {
    var b = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
    this.dropDown.set("months", b);
    this.containerNode.innerHTML = (6 == t("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + this.dropDown.domNode.innerHTML + "\x3c/div\x3e") + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + b[a.getMonth()] + "\x3c/div\x3e";
  }});
  h._MonthDropDown = k("dijit.Calendar._MonthDropDown", [l, v, m], {months:[], baseClass:"dijitCalendarMonthMenu dijitMenu", templateString:"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onClick'\x3e\x3c/div\x3e", _setMonthsAttr:function(a) {
    this.domNode.innerHTML = "";
    n.forEach(a, function(a, b) {
      q.create("div", {className:"dijitCalendarMonthLabel", month:b, innerHTML:a}, this.domNode)._cssState = "dijitCalendarMonthLabel";
    }, this);
  }, _onClick:function(a) {
    this.onChange(p.get(a.target, "month"));
  }, onChange:function() {
  }});
  return h;
});

//# sourceMappingURL=Calendar.js.map
// Native Javascript for Bootstrap 3 v1.1.0 | © dnp_theme | MIT-License
!(function (t, e) {
  if ('function' == typeof define && define.amd) define([], e);
  else if ('object' == typeof module && module.exports) module.exports = e();
  else {
    var o = e();
    (t.Affix = o.Affix),
      (t.Alert = o.Alert),
      (t.Button = o.Button),
      (t.Carousel = o.Carousel),
      (t.Collapse = o.Collapse),
      (t.Dropdown = o.Dropdown),
      (t.Modal = o.Modal),
      (t.Popover = o.Popover),
      (t.ScrollSpy = o.ScrollSpy),
      (t.Tab = o.Tab),
      (t.Tooltip = o.Tooltip);
  }
})(this, function () {
  for (
    var t = function (t, e) {
        t.classList
          ? t.classList.add(e)
          : ((t.className += ' ' + e), t.offsetWidth);
      },
      e = function (t, e) {
        t.classList
          ? t.classList.remove(e)
          : (t.className = t.className
              .replace(e, '')
              .replace(/^\s+|\s+$/g, ''));
      },
      o =
        null !=
          new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) &&
        parseFloat(RegExp.$1),
      n = function (t, e) {
        for (var o = e.charAt(0); t && t !== document; t = t.parentNode) {
          if ('.' === o && void 0 !== document.querySelector(e)) return t;
          if ('#' === o && t.id === e.substr(1)) return t;
        }
        return !1;
      },
      i =
        (document,
        function (i, a) {
          (a = a || {}),
            (this.btn = 'object' == typeof i ? i : document.querySelector(i)),
            (this.accordion = null),
            (this.collapse = null),
            (this.duration = 300),
            (this.options = {}),
            (this.options.duration =
              o && o < 10 ? 0 : a.duration || this.duration);
          var r = this,
            s = function (t) {
              var e = t && (t.currentStyle || window.getComputedStyle(t)),
                o = /px/.test(e.borderTopWidth)
                  ? Math.round(e.borderTopWidth.replace('px', ''))
                  : 0,
                n = /px/.test(e.marginTop)
                  ? Math.round(e.marginTop.replace('px', ''))
                  : 0,
                i = /px/.test(e.marginBottom)
                  ? Math.round(e.marginBottom.replace('px', ''))
                  : 0,
                a = /em/.test(e.marginTop)
                  ? Math.round(
                      e.marginTop.replace('em', '') * parseInt(e.fontSize),
                    )
                  : 0,
                r = /em/.test(e.marginBottom)
                  ? Math.round(
                      e.marginBottom.replace('em', '') * parseInt(e.fontSize),
                    )
                  : 0;
              return (
                t.clientHeight +
                parseInt(o) +
                parseInt(n) +
                parseInt(i) +
                parseInt(a) +
                parseInt(r)
              );
            };
          (this.toggle = function (t) {
            t.preventDefault(),
              /\bin/.test(r.collapse.className) ? r.close() : r.open();
          }),
            (this.close = function () {
              this._close(this.collapse), t(this.btn, 'collapsed');
            }),
            (this.open = function () {
              if (
                (this._open(this.collapse),
                e(this.btn, 'collapsed'),
                null !== this.accordion)
              ) {
                var t = this.accordion.querySelectorAll('.collapse.in'),
                  o = t.length,
                  n = 0;
                for (n; n < o; n++) t[n] !== this.collapse && this._close(t[n]);
              }
            }),
            (this._open = function (o) {
              this.removeEvent(),
                t(o, 'in'),
                o.setAttribute('aria-expanded', 'true'),
                t(o, 'collapsing'),
                setTimeout(function () {
                  (o.style.height = r.getMaxHeight(o) + 'px'),
                    (o.style.overflowY = 'hidden');
                }, 0),
                setTimeout(function () {
                  (o.style.height = ''),
                    (o.style.overflowY = ''),
                    e(o, 'collapsing'),
                    r.addEvent();
                }, this.options.duration);
            }),
            (this._close = function (o) {
              this.removeEvent(),
                o.setAttribute('aria-expanded', 'false'),
                (o.style.height = this.getMaxHeight(o) + 'px'),
                setTimeout(function () {
                  (o.style.height = '0px'),
                    (o.style.overflowY = 'hidden'),
                    t(o, 'collapsing');
                }, 0),
                setTimeout(function () {
                  e(o, 'collapsing'),
                    e(o, 'in'),
                    (o.style.overflowY = ''),
                    (o.style.height = ''),
                    r.addEvent();
                }, this.options.duration);
            }),
            (this.getMaxHeight = function (t) {
              for (var e = 0, o = 0, n = t.children.length; o < n; o++)
                e += s(t.children[o]);
              return e;
            }),
            (this.removeEvent = function () {
              this.btn.removeEventListener('click', this.toggle, !1);
            }),
            (this.addEvent = function () {
              this.btn.addEventListener('click', this.toggle, !1);
            }),
            (this.getTarget = function () {
              var t = this.btn,
                e = t.href && t.getAttribute('href').replace('#', ''),
                o =
                  t.getAttribute('data-target') &&
                  t.getAttribute('data-target'),
                n = e || (o && /#/.test(o) && o.replace('#', '')),
                i = o && '.' === o.charAt(0) && o;
              return (
                (n && document.getElementById(n)) ||
                (i && document.querySelector(i))
              );
            }),
            this.addEvent(),
            (this.collapse = this.getTarget()),
            (this.accordion =
              this.btn.getAttribute('data-parent') &&
              n(this.btn, this.btn.getAttribute('data-parent')));
        }),
      a = document.querySelectorAll('[data-toggle="collapse"]'),
      r = 0,
      s = a.length;
    r < s;
    r++
  ) {
    var l = a[r];
    ((g = {}).duration = l.getAttribute('data-duration')), new i(l, g);
  }
  for (
    var c = function (n, i) {
        (i = i || {}),
          (this.tab = 'object' == typeof n ? n : document.querySelector(n)),
          (this.tabs = this.tab.parentNode.parentNode),
          (this.dropdown = this.tabs.querySelector('.dropdown')),
          /\bdropdown-menu/.test(this.tabs.className) &&
            ((this.dropdown = this.tabs.parentNode),
            (this.tabs = this.tabs.parentNode.parentNode)),
          (this.options = i),
          (this.duration = 150),
          (this.options.duration =
            o && o < 10 ? 0 : i.duration || this.duration);
        var a = this;
        (this.handle = function (o) {
          (o = o || window.e).preventDefault();
          var n = o.target,
            i = document.getElementById(
              'c-' + n.getAttribute('href').replace('#', ''),
            ),
            r = a.getActiveTab(),
            s = a.getActiveContent();
          /\bactive/.test(n.parentNode.className) ||
            (e(r, 'active'),
            t(n.parentNode, 'active'),
            a.dropdown &&
              (/\bdropdown-menu/.test(a.tab.parentNode.parentNode.className)
                ? /\bactive/.test(a.dropdown.className) ||
                  t(a.dropdown, 'active')
                : /\bactive/.test(a.dropdown.className) &&
                  e(a.dropdown, 'active')),
            e(s, 'in'),
            setTimeout(function () {
              e(s, 'active'), t(i, 'active');
            }, a.options.duration),
            setTimeout(function () {
              t(i, 'in');
            }, 2 * a.options.duration));
        }),
          (this.getActiveTab = function () {
            var t = this.tabs.querySelectorAll('.active');
            return 1 !== t.length || /\bdropdown/.test(t[0].className)
              ? t.length > 1
                ? t[t.length - 1]
                : void 0
              : t[0];
          }),
          (this.getActiveContent = function () {
            var t = this.getActiveTab()
              .getElementsByTagName('A')[0]
              .getAttribute('href')
              .replace('#', '');
            return t && document.getElementById('c-' + t);
          }),
          this.tab.addEventListener('click', this.handle, !1);
      },
      d = document.querySelectorAll(
        "[data-toggle='tab'], [data-toggle='pill']",
      ),
      u = 0,
      h = d.length;
    u < h;
    u++
  ) {
    var p = d[u],
      g = {};
    (g.duration =
      (p.getAttribute('data-duration') && p.getAttribute('data-duration')) ||
      !1),
      new c(p, g);
  }
  return { Tab: c, Collapse: i };
});

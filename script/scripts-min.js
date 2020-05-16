
!(function(t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function(t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function(E, t) {
  "use strict";
  var e = [],
    T = E.document,
    i = Object.getPrototypeOf,
    a = e.slice,
    m = e.concat,
    u = e.push,
    r = e.indexOf,
    n = {},
    o = n.toString,
    p = n.hasOwnProperty,
    s = p.toString,
    l = s.call(Object),
    g = {};
  function v(t, e) {
    var n = (e = e || T).createElement("script");
    (n.text = t), e.head.appendChild(n).parentNode.removeChild(n);
  }
  var c = "3.2.1",
    S = function(t, e) {
      return new S.fn.init(t, e);
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    d = /^-ms-/,
    h = /-([a-z])/g,
    y = function(t, e) {
      return e.toUpperCase();
    };
  function b(t) {
    var e = !!t && "length" in t && t.length,
      n = S.type(t);
    return (
      "function" !== n &&
      !S.isWindow(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in t))
    );
  }
  (S.fn = S.prototype = {
    jquery: c,
    constructor: S,
    length: 0,
    toArray: function() {
      return a.call(this);
    },
    get: function(t) {
      return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
    },
    pushStack: function(t) {
      var e = S.merge(this.constructor(), t);
      return (e.prevObject = this), e;
    },
    each: function(t) {
      return S.each(this, t);
    },
    map: function(n) {
      return this.pushStack(
        S.map(this, function(t, e) {
          return n.call(t, e, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(a.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(t) {
      var e = this.length,
        n = +t + (t < 0 ? e : 0);
      return this.pushStack(0 <= n && n < e ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: e.sort,
    splice: e.splice
  }),
    (S.extend = S.fn.extend = function() {
      var t,
        e,
        n,
        i,
        r,
        o,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for (
        "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || S.isFunction(s) || (s = {}),
          a === u && ((s = this), a--);
        a < u;
        a++
      )
        if (null != (t = arguments[a]))
          for (e in t)
            (n = s[e]),
              s !== (i = t[e]) &&
                (l && i && (S.isPlainObject(i) || (r = Array.isArray(i)))
                  ? ((o = r
                      ? ((r = !1), n && Array.isArray(n) ? n : [])
                      : n && S.isPlainObject(n)
                      ? n
                      : {}),
                    (s[e] = S.extend(l, o, i)))
                  : void 0 !== i && (s[e] = i));
      return s;
    }),
    S.extend({
      expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
        throw new Error(t);
      },
      noop: function() {},
      isFunction: function(t) {
        return "function" === S.type(t);
      },
      isWindow: function(t) {
        return null != t && t === t.window;
      },
      isNumeric: function(t) {
        var e = S.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      },
      isPlainObject: function(t) {
        var e, n;
        return !(
          !t ||
          "[object Object]" !== o.call(t) ||
          ((e = i(t)) &&
            ("function" !=
              typeof (n = p.call(e, "constructor") && e.constructor) ||
              s.call(n) !== l))
        );
      },
      isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? n[o.call(t)] || "object"
          : typeof t;
      },
      globalEval: function(t) {
        v(t);
      },
      camelCase: function(t) {
        return t.replace(d, "ms-").replace(h, y);
      },
      each: function(t, e) {
        var n,
          i = 0;
        if (b(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      trim: function(t) {
        return null == t ? "" : (t + "").replace(f, "");
      },
      makeArray: function(t, e) {
        var n = e || [];
        return (
          null != t &&
            (b(Object(t))
              ? S.merge(n, "string" == typeof t ? [t] : t)
              : u.call(n, t)),
          n
        );
      },
      inArray: function(t, e, n) {
        return null == e ? -1 : r.call(e, t, n);
      },
      merge: function(t, e) {
        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
        return (t.length = r), t;
      },
      grep: function(t, e, n) {
        for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
          !e(t[r], r) !== s && i.push(t[r]);
        return i;
      },
      map: function(t, e, n) {
        var i,
          r,
          o = 0,
          s = [];
        if (b(t))
          for (i = t.length; o < i; o++)
            null != (r = e(t[o], o, n)) && s.push(r);
        else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
        return m.apply([], s);
      },
      guid: 1,
      proxy: function(t, e) {
        var n, i, r;
        if (
          ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
          S.isFunction(t))
        )
          return (
            (i = a.call(arguments, 2)),
            ((r = function() {
              return t.apply(e || this, i.concat(a.call(arguments)));
            }).guid = t.guid = t.guid || S.guid++),
            r
          );
      },
      now: Date.now,
      support: g
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var x = (function(n) {
    var t,
      h,
      x,
      o,
      r,
      p,
      f,
      m,
      w,
      u,
      l,
      C,
      E,
      s,
      T,
      g,
      a,
      c,
      v,
      S = "sizzle" + 1 * new Date(),
      y = n.document,
      k = 0,
      i = 0,
      d = st(),
      b = st(),
      _ = st(),
      O = function(t, e) {
        return t === e && (l = !0), 0;
      },
      A = {}.hasOwnProperty,
      e = [],
      L = e.pop,
      j = e.push,
      I = e.push,
      N = e.slice,
      M = function(t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      D =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      z = "[\\x20\\t\\r\\n\\f]",
      P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      q =
        "\\[" +
        z +
        "*(" +
        P +
        ")(?:" +
        z +
        "*([*^$|!~]?=)" +
        z +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        P +
        "))|)" +
        z +
        "*\\]",
      F =
        ":(" +
        P +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      R = new RegExp(z + "+", "g"),
      H = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
      B = new RegExp("^" + z + "*," + z + "*"),
      W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
      $ = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
      Y = new RegExp(F),
      X = new RegExp("^" + P + "$"),
      U = {
        ID: new RegExp("^#(" + P + ")"),
        CLASS: new RegExp("^\\.(" + P + ")"),
        TAG: new RegExp("^(" + P + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            z +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            z +
            "*(?:([+-]|)" +
            z +
            "*(\\d+)|))" +
            z +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + D + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            z +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            z +
            "*((?:-\\d)?\\d*)" +
            z +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      V = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
      tt = function(t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      nt = function(t, e) {
        return e
          ? "\0" === t
            ? "Ã¯Â¿Â½"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      it = function() {
        C();
      },
      rt = yt(
        function(t) {
          return !0 === t.disabled && ("form" in t || "label" in t);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      I.apply((e = N.call(y.childNodes)), y.childNodes),
        e[y.childNodes.length].nodeType;
    } catch (t) {
      I = {
        apply: e.length
          ? function(t, e) {
              j.apply(t, N.call(e));
            }
          : function(t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            }
      };
    }
    function ot(t, e, n, i) {
      var r,
        o,
        s,
        a,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        d = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (
        !i &&
        ((e ? e.ownerDocument || e : y) !== E && C(e), (e = e || E), T)
      ) {
        if (11 !== d && (u = Z.exec(t)))
          if ((r = u[1])) {
            if (9 === d) {
              if (!(s = e.getElementById(r))) return n;
              if (s.id === r) return n.push(s), n;
            } else if (f && (s = f.getElementById(r)) && v(e, s) && s.id === r)
              return n.push(s), n;
          } else {
            if (u[2]) return I.apply(n, e.getElementsByTagName(t)), n;
            if (
              (r = u[3]) &&
              h.getElementsByClassName &&
              e.getElementsByClassName
            )
              return I.apply(n, e.getElementsByClassName(r)), n;
          }
        if (h.qsa && !_[t + " "] && (!g || !g.test(t))) {
          if (1 !== d) (f = e), (c = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (a = e.getAttribute("id"))
                ? (a = a.replace(et, nt))
                : e.setAttribute("id", (a = S)),
                o = (l = p(t)).length;
              o--;

            )
              l[o] = "#" + a + " " + vt(l[o]);
            (c = l.join(",")), (f = (K.test(t) && mt(e.parentNode)) || e);
          }
          if (c)
            try {
              return I.apply(n, f.querySelectorAll(c)), n;
            } catch (t) {
            } finally {
              a === S && e.removeAttribute("id");
            }
        }
      }
      return m(t.replace(H, "$1"), e, n, i);
    }
    function st() {
      var i = [];
      return function t(e, n) {
        return (
          i.push(e + " ") > x.cacheLength && delete t[i.shift()],
          (t[e + " "] = n)
        );
      };
    }
    function at(t) {
      return (t[S] = !0), t;
    }
    function ut(t) {
      var e = E.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function lt(t, e) {
      for (var n = t.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = e;
    }
    function ct(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function ft(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function dt(n) {
      return function(t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === n;
      };
    }
    function ht(e) {
      return function(t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && rt(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function pt(s) {
      return at(function(o) {
        return (
          (o = +o),
          at(function(t, e) {
            for (var n, i = s([], t.length, o), r = i.length; r--; )
              t[(n = i[r])] && (t[n] = !(e[n] = t[n]));
          })
        );
      });
    }
    function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (t in ((h = ot.support = {}),
    (r = ot.isXML = function(t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && "HTML" !== e.nodeName;
    }),
    (C = ot.setDocument = function(t) {
      var e,
        n,
        i = t ? t.ownerDocument || t : y;
      return (
        i !== E &&
          9 === i.nodeType &&
          i.documentElement &&
          ((s = (E = i).documentElement),
          (T = !r(E)),
          y !== E &&
            (n = E.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", it, !1)
              : n.attachEvent && n.attachEvent("onunload", it)),
          (h.attributes = ut(function(t) {
            return (t.className = "i"), !t.getAttribute("className");
          })),
          (h.getElementsByTagName = ut(function(t) {
            return (
              t.appendChild(E.createComment("")),
              !t.getElementsByTagName("*").length
            );
          })),
          (h.getElementsByClassName = Q.test(E.getElementsByClassName)),
          (h.getById = ut(function(t) {
            return (
              (s.appendChild(t).id = S),
              !E.getElementsByName || !E.getElementsByName(S).length
            );
          })),
          h.getById
            ? ((x.filter.ID = function(t) {
                var e = t.replace(J, tt);
                return function(t) {
                  return t.getAttribute("id") === e;
                };
              }),
              (x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && T) {
                  var n = e.getElementById(t);
                  return n ? [n] : [];
                }
              }))
            : ((x.filter.ID = function(t) {
                var n = t.replace(J, tt);
                return function(t) {
                  var e =
                    void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                  return e && e.value === n;
                };
              }),
              (x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && T) {
                  var n,
                    i,
                    r,
                    o = e.getElementById(t);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === t)
                      return [o];
                    for (r = e.getElementsByName(t), i = 0; (o = r[i++]); )
                      if ((n = o.getAttributeNode("id")) && n.value === t)
                        return [o];
                  }
                  return [];
                }
              })),
          (x.find.TAG = h.getElementsByTagName
            ? function(t, e) {
                return void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t)
                  : h.qsa
                  ? e.querySelectorAll(t)
                  : void 0;
              }
            : function(t, e) {
                var n,
                  i = [],
                  r = 0,
                  o = e.getElementsByTagName(t);
                if ("*" !== t) return o;
                for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                return i;
              }),
          (x.find.CLASS =
            h.getElementsByClassName &&
            function(t, e) {
              if (void 0 !== e.getElementsByClassName && T)
                return e.getElementsByClassName(t);
            }),
          (a = []),
          (g = []),
          (h.qsa = Q.test(E.querySelectorAll)) &&
            (ut(function(t) {
              (s.appendChild(t).innerHTML =
                "<a id='" +
                S +
                "'></a><select id='" +
                S +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                t.querySelectorAll("[msallowcapture^='']").length &&
                  g.push("[*^$]=" + z + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length ||
                  g.push("\\[" + z + "*(?:value|" + D + ")"),
                t.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                t.querySelectorAll(":checked").length || g.push(":checked"),
                t.querySelectorAll("a#" + S + "+*").length ||
                  g.push(".#.+[+~]");
            }),
            ut(function(t) {
              t.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = E.createElement("input");
              e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length &&
                  g.push("name" + z + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length &&
                  g.push(":enabled", ":disabled"),
                (s.appendChild(t).disabled = !0),
                2 !== t.querySelectorAll(":disabled").length &&
                  g.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                g.push(",.*:");
            })),
          (h.matchesSelector = Q.test(
            (c =
              s.matches ||
              s.webkitMatchesSelector ||
              s.mozMatchesSelector ||
              s.oMatchesSelector ||
              s.msMatchesSelector)
          )) &&
            ut(function(t) {
              (h.disconnectedMatch = c.call(t, "*")),
                c.call(t, "[s!='']:x"),
                a.push("!=", F);
            }),
          (g = g.length && new RegExp(g.join("|"))),
          (a = a.length && new RegExp(a.join("|"))),
          (e = Q.test(s.compareDocumentPosition)),
          (v =
            e || Q.test(s.contains)
              ? function(t, e) {
                  var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                  return (
                    t === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : t.compareDocumentPosition &&
                          16 & t.compareDocumentPosition(i))
                    )
                  );
                }
              : function(t, e) {
                  if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                  return !1;
                }),
          (O = e
            ? function(t, e) {
                if (t === e) return (l = !0), 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (t.ownerDocument || t) === (e.ownerDocument || e)
                        ? t.compareDocumentPosition(e)
                        : 1) ||
                  (!h.sortDetached && e.compareDocumentPosition(t) === n)
                    ? t === E || (t.ownerDocument === y && v(y, t))
                      ? -1
                      : e === E || (e.ownerDocument === y && v(y, e))
                      ? 1
                      : u
                      ? M(u, t) - M(u, e)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function(t, e) {
                if (t === e) return (l = !0), 0;
                var n,
                  i = 0,
                  r = t.parentNode,
                  o = e.parentNode,
                  s = [t],
                  a = [e];
                if (!r || !o)
                  return t === E
                    ? -1
                    : e === E
                    ? 1
                    : r
                    ? -1
                    : o
                    ? 1
                    : u
                    ? M(u, t) - M(u, e)
                    : 0;
                if (r === o) return ct(t, e);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (; s[i] === a[i]; ) i++;
                return i
                  ? ct(s[i], a[i])
                  : s[i] === y
                  ? -1
                  : a[i] === y
                  ? 1
                  : 0;
              })),
        E
      );
    }),
    (ot.matches = function(t, e) {
      return ot(t, null, null, e);
    }),
    (ot.matchesSelector = function(t, e) {
      if (
        ((t.ownerDocument || t) !== E && C(t),
        (e = e.replace($, "='$1']")),
        h.matchesSelector &&
          T &&
          !_[e + " "] &&
          (!a || !a.test(e)) &&
          (!g || !g.test(e)))
      )
        try {
          var n = c.call(t, e);
          if (
            n ||
            h.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {}
      return 0 < ot(e, E, null, [t]).length;
    }),
    (ot.contains = function(t, e) {
      return (t.ownerDocument || t) !== E && C(t), v(t, e);
    }),
    (ot.attr = function(t, e) {
      (t.ownerDocument || t) !== E && C(t);
      var n = x.attrHandle[e.toLowerCase()],
        i = n && A.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !T) : void 0;
      return void 0 !== i
        ? i
        : h.attributes || !T
        ? t.getAttribute(e)
        : (i = t.getAttributeNode(e)) && i.specified
        ? i.value
        : null;
    }),
    (ot.escape = function(t) {
      return (t + "").replace(et, nt);
    }),
    (ot.error = function(t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (ot.uniqueSort = function(t) {
      var e,
        n = [],
        i = 0,
        r = 0;
      if (
        ((l = !h.detectDuplicates),
        (u = !h.sortStable && t.slice(0)),
        t.sort(O),
        l)
      ) {
        for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
        for (; i--; ) t.splice(n[i], 1);
      }
      return (u = null), t;
    }),
    (o = ot.getText = function(t) {
      var e,
        n = "",
        i = 0,
        r = t.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; (e = t[i++]); ) n += o(e);
      return n;
    }),
    ((x = ot.selectors = {
      cacheLength: 50,
      createPseudo: at,
      match: U,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function(t) {
          return (
            (t[1] = t[1].replace(J, tt)),
            (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)),
            "~=" === t[2] && (t[3] = " " + t[3] + " "),
            t.slice(0, 4)
          );
        },
        CHILD: function(t) {
          return (
            (t[1] = t[1].toLowerCase()),
            "nth" === t[1].slice(0, 3)
              ? (t[3] || ot.error(t[0]),
                (t[4] = +(t[4]
                  ? t[5] + (t[6] || 1)
                  : 2 * ("even" === t[3] || "odd" === t[3]))),
                (t[5] = +(t[7] + t[8] || "odd" === t[3])))
              : t[3] && ot.error(t[0]),
            t
          );
        },
        PSEUDO: function(t) {
          var e,
            n = !t[6] && t[2];
          return U.CHILD.test(t[0])
            ? null
            : (t[3]
                ? (t[2] = t[4] || t[5] || "")
                : n &&
                  Y.test(n) &&
                  (e = p(n, !0)) &&
                  (e = n.indexOf(")", n.length - e) - n.length) &&
                  ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
              t.slice(0, 3));
        }
      },
      filter: {
        TAG: function(t) {
          var e = t.replace(J, tt).toLowerCase();
          return "*" === t
            ? function() {
                return !0;
              }
            : function(t) {
                return t.nodeName && t.nodeName.toLowerCase() === e;
              };
        },
        CLASS: function(t) {
          var e = d[t + " "];
          return (
            e ||
            ((e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) &&
              d(t, function(t) {
                return e.test(
                  ("string" == typeof t.className && t.className) ||
                    (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function(n, i, r) {
          return function(t) {
            var e = ot.attr(t, n);
            return null == e
              ? "!=" === i
              : !i ||
                  ((e += ""),
                  "=" === i
                    ? e === r
                    : "!=" === i
                    ? e !== r
                    : "^=" === i
                    ? r && 0 === e.indexOf(r)
                    : "*=" === i
                    ? r && -1 < e.indexOf(r)
                    : "$=" === i
                    ? r && e.slice(-r.length) === r
                    : "~=" === i
                    ? -1 < (" " + e.replace(R, " ") + " ").indexOf(r)
                    : "|=" === i &&
                      (e === r || e.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD: function(p, t, e, m, g) {
          var v = "nth" !== p.slice(0, 3),
            y = "last" !== p.slice(-4),
            b = "of-type" === t;
          return 1 === m && 0 === g
            ? function(t) {
                return !!t.parentNode;
              }
            : function(t, e, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l = v !== y ? "nextSibling" : "previousSibling",
                  c = t.parentNode,
                  f = b && t.nodeName.toLowerCase(),
                  d = !n && !b,
                  h = !1;
                if (c) {
                  if (v) {
                    for (; l; ) {
                      for (s = t; (s = s[l]); )
                        if (
                          b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType
                        )
                          return !1;
                      u = l = "only" === p && !u && "nextSibling";
                    }
                    return !0;
                  }
                  if (((u = [y ? c.firstChild : c.lastChild]), y && d)) {
                    for (
                      h =
                        (a =
                          (i =
                            (r =
                              (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] ||
                              (o[s.uniqueID] = {}))[p] || [])[0] === k &&
                          i[1]) && i[2],
                        s = a && c.childNodes[a];
                      (s = (++a && s && s[l]) || (h = a = 0) || u.pop());

                    )
                      if (1 === s.nodeType && ++h && s === t) {
                        r[p] = [k, a, h];
                        break;
                      }
                  } else if (
                    (d &&
                      (h = a =
                        (i =
                          (r =
                            (o = (s = t)[S] || (s[S] = {}))[s.uniqueID] ||
                            (o[s.uniqueID] = {}))[p] || [])[0] === k && i[1]),
                    !1 === h)
                  )
                    for (
                      ;
                      (s = (++a && s && s[l]) || (h = a = 0) || u.pop()) &&
                      ((b
                        ? s.nodeName.toLowerCase() !== f
                        : 1 !== s.nodeType) ||
                        !++h ||
                        (d &&
                          ((r =
                            (o = s[S] || (s[S] = {}))[s.uniqueID] ||
                            (o[s.uniqueID] = {}))[p] = [k, h]),
                        s !== t));

                    );
                  return (h -= g) === m || (h % m == 0 && 0 <= h / m);
                }
              };
        },
        PSEUDO: function(t, o) {
          var e,
            s =
              x.pseudos[t] ||
              x.setFilters[t.toLowerCase()] ||
              ot.error("unsupported pseudo: " + t);
          return s[S]
            ? s(o)
            : 1 < s.length
            ? ((e = [t, t, "", o]),
              x.setFilters.hasOwnProperty(t.toLowerCase())
                ? at(function(t, e) {
                    for (var n, i = s(t, o), r = i.length; r--; )
                      t[(n = M(t, i[r]))] = !(e[n] = i[r]);
                  })
                : function(t) {
                    return s(t, 0, e);
                  })
            : s;
        }
      },
      pseudos: {
        not: at(function(t) {
          var i = [],
            r = [],
            a = f(t.replace(H, "$1"));
          return a[S]
            ? at(function(t, e, n, i) {
                for (var r, o = a(t, null, i, []), s = t.length; s--; )
                  (r = o[s]) && (t[s] = !(e[s] = r));
              })
            : function(t, e, n) {
                return (i[0] = t), a(i, null, n, r), (i[0] = null), !r.pop();
              };
        }),
        has: at(function(e) {
          return function(t) {
            return 0 < ot(e, t).length;
          };
        }),
        contains: at(function(e) {
          return (
            (e = e.replace(J, tt)),
            function(t) {
              return -1 < (t.textContent || t.innerText || o(t)).indexOf(e);
            }
          );
        }),
        lang: at(function(n) {
          return (
            X.test(n || "") || ot.error("unsupported lang: " + n),
            (n = n.replace(J, tt).toLowerCase()),
            function(t) {
              var e;
              do {
                if (
                  (e = T
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function(t) {
          var e = n.location && n.location.hash;
          return e && e.slice(1) === t.id;
        },
        root: function(t) {
          return t === s;
        },
        focus: function(t) {
          return (
            t === E.activeElement &&
            (!E.hasFocus || E.hasFocus()) &&
            !!(t.type || t.href || ~t.tabIndex)
          );
        },
        enabled: ht(!1),
        disabled: ht(!0),
        checked: function(t) {
          var e = t.nodeName.toLowerCase();
          return (
            ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
          );
        },
        selected: function(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function(t) {
          for (t = t.firstChild; t; t = t.nextSibling)
            if (t.nodeType < 6) return !1;
          return !0;
        },
        parent: function(t) {
          return !x.pseudos.empty(t);
        },
        header: function(t) {
          return G.test(t.nodeName);
        },
        input: function(t) {
          return V.test(t.nodeName);
        },
        button: function(t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e && "button" === t.type) || "button" === e;
        },
        text: function(t) {
          var e;
          return (
            "input" === t.nodeName.toLowerCase() &&
            "text" === t.type &&
            (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
          );
        },
        first: pt(function() {
          return [0];
        }),
        last: pt(function(t, e) {
          return [e - 1];
        }),
        eq: pt(function(t, e, n) {
          return [n < 0 ? n + e : n];
        }),
        even: pt(function(t, e) {
          for (var n = 0; n < e; n += 2) t.push(n);
          return t;
        }),
        odd: pt(function(t, e) {
          for (var n = 1; n < e; n += 2) t.push(n);
          return t;
        }),
        lt: pt(function(t, e, n) {
          for (var i = n < 0 ? n + e : n; 0 <= --i; ) t.push(i);
          return t;
        }),
        gt: pt(function(t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
          return t;
        })
      }
    }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[t] = ft(t);
    for (t in { submit: !0, reset: !0 }) x.pseudos[t] = dt(t);
    function gt() {}
    function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function yt(a, t, e) {
      var u = t.dir,
        l = t.next,
        c = l || u,
        f = e && "parentNode" === c,
        d = i++;
      return t.first
        ? function(t, e, n) {
            for (; (t = t[u]); ) if (1 === t.nodeType || f) return a(t, e, n);
            return !1;
          }
        : function(t, e, n) {
            var i,
              r,
              o,
              s = [k, d];
            if (n) {
              for (; (t = t[u]); )
                if ((1 === t.nodeType || f) && a(t, e, n)) return !0;
            } else
              for (; (t = t[u]); )
                if (1 === t.nodeType || f)
                  if (
                    ((r =
                      (o = t[S] || (t[S] = {}))[t.uniqueID] ||
                      (o[t.uniqueID] = {})),
                    l && l === t.nodeName.toLowerCase())
                  )
                    t = t[u] || t;
                  else {
                    if ((i = r[c]) && i[0] === k && i[1] === d)
                      return (s[2] = i[2]);
                    if (((r[c] = s)[2] = a(t, e, n))) return !0;
                  }
            return !1;
          };
    }
    function bt(r) {
      return 1 < r.length
        ? function(t, e, n) {
            for (var i = r.length; i--; ) if (!r[i](t, e, n)) return !1;
            return !0;
          }
        : r[0];
    }
    function xt(t, e, n, i, r) {
      for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
        (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), l && e.push(a)));
      return s;
    }
    function wt(h, p, m, g, v, t) {
      return (
        g && !g[S] && (g = wt(g)),
        v && !v[S] && (v = wt(v, t)),
        at(function(t, e, n, i) {
          var r,
            o,
            s,
            a = [],
            u = [],
            l = e.length,
            c =
              t ||
              (function(t, e, n) {
                for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                return n;
              })(p || "*", n.nodeType ? [n] : n, []),
            f = !h || (!t && p) ? c : xt(c, a, h, n, i),
            d = m ? (v || (t ? h : l || g) ? [] : e) : f;
          if ((m && m(f, d, n, i), g))
            for (r = xt(d, u), g(r, [], n, i), o = r.length; o--; )
              (s = r[o]) && (d[u[o]] = !(f[u[o]] = s));
          if (t) {
            if (v || h) {
              if (v) {
                for (r = [], o = d.length; o--; )
                  (s = d[o]) && r.push((f[o] = s));
                v(null, (d = []), r, i);
              }
              for (o = d.length; o--; )
                (s = d[o]) &&
                  -1 < (r = v ? M(t, s) : a[o]) &&
                  (t[r] = !(e[r] = s));
            }
          } else (d = xt(d === e ? d.splice(l, d.length) : d)), v ? v(null, e, d, i) : I.apply(e, d);
        })
      );
    }
    function Ct(t) {
      for (
        var r,
          e,
          n,
          i = t.length,
          o = x.relative[t[0].type],
          s = o || x.relative[" "],
          a = o ? 1 : 0,
          u = yt(
            function(t) {
              return t === r;
            },
            s,
            !0
          ),
          l = yt(
            function(t) {
              return -1 < M(r, t);
            },
            s,
            !0
          ),
          c = [
            function(t, e, n) {
              var i =
                (!o && (n || e !== w)) ||
                ((r = e).nodeType ? u(t, e, n) : l(t, e, n));
              return (r = null), i;
            }
          ];
        a < i;
        a++
      )
        if ((e = x.relative[t[a].type])) c = [yt(bt(c), e)];
        else {
          if ((e = x.filter[t[a].type].apply(null, t[a].matches))[S]) {
            for (n = ++a; n < i && !x.relative[t[n].type]; n++);
            return wt(
              1 < a && bt(c),
              1 < a &&
                vt(
                  t
                    .slice(0, a - 1)
                    .concat({ value: " " === t[a - 2].type ? "*" : "" })
                ).replace(H, "$1"),
              e,
              a < n && Ct(t.slice(a, n)),
              n < i && Ct((t = t.slice(n))),
              n < i && vt(t)
            );
          }
          c.push(e);
        }
      return bt(c);
    }
    return (
      (gt.prototype = x.filters = x.pseudos),
      (x.setFilters = new gt()),
      (p = ot.tokenize = function(t, e) {
        var n,
          i,
          r,
          o,
          s,
          a,
          u,
          l = b[t + " "];
        if (l) return e ? 0 : l.slice(0);
        for (s = t, a = [], u = x.preFilter; s; ) {
          for (o in ((n && !(i = B.exec(s))) ||
            (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
          (n = !1),
          (i = W.exec(s)) &&
            ((n = i.shift()),
            r.push({ value: n, type: i[0].replace(H, " ") }),
            (s = s.slice(n.length))),
          x.filter))
            !(i = U[o].exec(s)) ||
              (u[o] && !(i = u[o](i))) ||
              ((n = i.shift()),
              r.push({ value: n, type: o, matches: i }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return e ? s.length : s ? ot.error(t) : b(t, a).slice(0);
      }),
      (f = ot.compile = function(t, e) {
        var n,
          g,
          v,
          y,
          b,
          i,
          r = [],
          o = [],
          s = _[t + " "];
        if (!s) {
          for (e || (e = p(t)), n = e.length; n--; )
            (s = Ct(e[n]))[S] ? r.push(s) : o.push(s);
          (s = _(
            t,
            ((g = o),
            (y = 0 < (v = r).length),
            (b = 0 < g.length),
            (i = function(t, e, n, i, r) {
              var o,
                s,
                a,
                u = 0,
                l = "0",
                c = t && [],
                f = [],
                d = w,
                h = t || (b && x.find.TAG("*", r)),
                p = (k += null == d ? 1 : Math.random() || 0.1),
                m = h.length;
              for (
                r && (w = e === E || e || r);
                l !== m && null != (o = h[l]);
                l++
              ) {
                if (b && o) {
                  for (
                    s = 0, e || o.ownerDocument === E || (C(o), (n = !T));
                    (a = g[s++]);

                  )
                    if (a(o, e || E, n)) {
                      i.push(o);
                      break;
                    }
                  r && (k = p);
                }
                y && ((o = !a && o) && u--, t && c.push(o));
              }
              if (((u += l), y && l !== u)) {
                for (s = 0; (a = v[s++]); ) a(c, f, e, n);
                if (t) {
                  if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = L.call(i));
                  f = xt(f);
                }
                I.apply(i, f),
                  r &&
                    !t &&
                    0 < f.length &&
                    1 < u + v.length &&
                    ot.uniqueSort(i);
              }
              return r && ((k = p), (w = d)), c;
            }),
            y ? at(i) : i)
          )).selector = t;
        }
        return s;
      }),
      (m = ot.select = function(t, e, n, i) {
        var r,
          o,
          s,
          a,
          u,
          l = "function" == typeof t && t,
          c = !i && p((t = l.selector || t));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (s = o[0]).type &&
            9 === e.nodeType &&
            T &&
            x.relative[o[1].type]
          ) {
            if (!(e = (x.find.ID(s.matches[0].replace(J, tt), e) || [])[0]))
              return n;
            l && (e = e.parentNode), (t = t.slice(o.shift().value.length));
          }
          for (
            r = U.needsContext.test(t) ? 0 : o.length;
            r-- && ((s = o[r]), !x.relative[(a = s.type)]);

          )
            if (
              (u = x.find[a]) &&
              (i = u(
                s.matches[0].replace(J, tt),
                (K.test(o[0].type) && mt(e.parentNode)) || e
              ))
            ) {
              if ((o.splice(r, 1), !(t = i.length && vt(o))))
                return I.apply(n, i), n;
              break;
            }
        }
        return (
          (l || f(t, c))(
            i,
            e,
            !T,
            n,
            !e || (K.test(t) && mt(e.parentNode)) || e
          ),
          n
        );
      }),
      (h.sortStable =
        S.split("")
          .sort(O)
          .join("") === S),
      (h.detectDuplicates = !!l),
      C(),
      (h.sortDetached = ut(function(t) {
        return 1 & t.compareDocumentPosition(E.createElement("fieldset"));
      })),
      ut(function(t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        lt("type|href|height|width", function(t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        ut(function(t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        lt("value", function(t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      ut(function(t) {
        return null == t.getAttribute("disabled");
      }) ||
        lt(D, function(t, e, n) {
          var i;
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
        }),
      ot
    );
  })(E);
  (S.find = x),
    (S.expr = x.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = x.uniqueSort),
    (S.text = x.getText),
    (S.isXMLDoc = x.isXML),
    (S.contains = x.contains),
    (S.escapeSelector = x.escape);
  var w = function(t, e, n) {
      for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && S(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    C = function(t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    k = S.expr.match.needsContext;
  function _(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    A = /^.[^:#\[\.,]*$/;
  function L(t, n, i) {
    return S.isFunction(n)
      ? S.grep(t, function(t, e) {
          return !!n.call(t, e, t) !== i;
        })
      : n.nodeType
      ? S.grep(t, function(t) {
          return (t === n) !== i;
        })
      : "string" != typeof n
      ? S.grep(t, function(t) {
          return -1 < r.call(n, t) !== i;
        })
      : A.test(n)
      ? S.filter(n, t, i)
      : ((n = S.filter(n, t)),
        S.grep(t, function(t) {
          return -1 < r.call(n, t) !== i && 1 === t.nodeType;
        }));
  }
  (S.filter = function(t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? S.find.matchesSelector(i, t)
          ? [i]
          : []
        : S.find.matches(
            t,
            S.grep(e, function(t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function(t) {
        var e,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof t)
          return this.pushStack(
            S(t).filter(function() {
              for (e = 0; e < i; e++) if (S.contains(r[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < i; e++) S.find(t, r[e], n);
        return 1 < i ? S.uniqueSort(n) : n;
      },
      filter: function(t) {
        return this.pushStack(L(this, t || [], !1));
      },
      not: function(t) {
        return this.pushStack(L(this, t || [], !0));
      },
      is: function(t) {
        return !!L(this, "string" == typeof t && k.test(t) ? S(t) : t || [], !1)
          .length;
      }
    });
  var j,
    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function(t, e, n) {
    var i, r;
    if (!t) return this;
    if (((n = n || j), "string" != typeof t))
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : S.isFunction(t)
        ? void 0 !== n.ready
          ? n.ready(t)
          : t(S)
        : S.makeArray(t, this);
    if (
      !(i =
        "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
          ? [null, t, null]
          : I.exec(t)) ||
      (!i[1] && e)
    )
      return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
    if (i[1]) {
      if (
        ((e = e instanceof S ? e[0] : e),
        S.merge(
          this,
          S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : T, !0)
        ),
        O.test(i[1]) && S.isPlainObject(e))
      )
        for (i in e) S.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      return this;
    }
    return (
      (r = T.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
    );
  }).prototype = S.fn),
    (j = S(T));
  var N = /^(?:parents|prev(?:Until|All))/,
    M = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  S.fn.extend({
    has: function(t) {
      var e = S(t, this),
        n = e.length;
      return this.filter(function() {
        for (var t = 0; t < n; t++) if (S.contains(this, e[t])) return !0;
      });
    },
    closest: function(t, e) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof t && S(t);
      if (!k.test(t))
        for (; i < r; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, t))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function(t) {
      return t
        ? "string" == typeof t
          ? r.call(S(t), this[0])
          : r.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(t, e) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))));
    },
    addBack: function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }),
    S.each(
      {
        parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
          return w(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
          return w(t, "parentNode", n);
        },
        next: function(t) {
          return D(t, "nextSibling");
        },
        prev: function(t) {
          return D(t, "previousSibling");
        },
        nextAll: function(t) {
          return w(t, "nextSibling");
        },
        prevAll: function(t) {
          return w(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
          return w(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
          return w(t, "previousSibling", n);
        },
        siblings: function(t) {
          return C((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
          return C(t.firstChild);
        },
        contents: function(t) {
          return _(t, "iframe")
            ? t.contentDocument
            : (_(t, "template") && (t = t.content || t),
              S.merge([], t.childNodes));
        }
      },
      function(i, r) {
        S.fn[i] = function(t, e) {
          var n = S.map(this, r, t);
          return (
            "Until" !== i.slice(-5) && (e = t),
            e && "string" == typeof e && (n = S.filter(e, n)),
            1 < this.length &&
              (M[i] || S.uniqueSort(n), N.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var z = /[^\x20\t\r\n\f]+/g;
  function P(t) {
    return t;
  }
  function q(t) {
    throw t;
  }
  function F(t, e, n, i) {
    var r;
    try {
      t && S.isFunction((r = t.promise))
        ? r
            .call(t)
            .done(e)
            .fail(n)
        : t && S.isFunction((r = t.then))
        ? r.call(t, e, n)
        : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }
  (S.Callbacks = function(i) {
    var t, n;
    i =
      "string" == typeof i
        ? ((t = i),
          (n = {}),
          S.each(t.match(z) || [], function(t, e) {
            n[e] = !0;
          }),
          n)
        : S.extend({}, i);
    var r,
      e,
      o,
      s,
      a = [],
      u = [],
      l = -1,
      c = function() {
        for (s = s || i.once, o = r = !0; u.length; l = -1)
          for (e = u.shift(); ++l < a.length; )
            !1 === a[l].apply(e[0], e[1]) &&
              i.stopOnFalse &&
              ((l = a.length), (e = !1));
        i.memory || (e = !1), (r = !1), s && (a = e ? [] : "");
      },
      f = {
        add: function() {
          return (
            a &&
              (e && !r && ((l = a.length - 1), u.push(e)),
              (function n(t) {
                S.each(t, function(t, e) {
                  S.isFunction(e)
                    ? (i.unique && f.has(e)) || a.push(e)
                    : e && e.length && "string" !== S.type(e) && n(e);
                });
              })(arguments),
              e && !r && c()),
            this
          );
        },
        remove: function() {
          return (
            S.each(arguments, function(t, e) {
              for (var n; -1 < (n = S.inArray(e, a, n)); )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function(t) {
          return t ? -1 < S.inArray(t, a) : 0 < a.length;
        },
        empty: function() {
          return a && (a = []), this;
        },
        disable: function() {
          return (s = u = []), (a = e = ""), this;
        },
        disabled: function() {
          return !a;
        },
        lock: function() {
          return (s = u = []), e || r || (a = e = ""), this;
        },
        locked: function() {
          return !!s;
        },
        fireWith: function(t, e) {
          return (
            s ||
              ((e = [t, (e = e || []).slice ? e.slice() : e]),
              u.push(e),
              r || c()),
            this
          );
        },
        fire: function() {
          return f.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!o;
        }
      };
    return f;
  }),
    S.extend({
      Deferred: function(t) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          r = "pending",
          s = {
            state: function() {
              return r;
            },
            always: function() {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function(t) {
              return s.then(null, t);
            },
            pipe: function() {
              var r = arguments;
              return S.Deferred(function(i) {
                S.each(o, function(t, e) {
                  var n = S.isFunction(r[e[4]]) && r[e[4]];
                  a[e[1]](function() {
                    var t = n && n.apply(this, arguments);
                    t && S.isFunction(t.promise)
                      ? t
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[e[0] + "With"](this, n ? [t] : arguments);
                  });
                }),
                  (r = null);
              }).promise();
            },
            then: function(e, n, i) {
              var u = 0;
              function l(r, o, s, a) {
                return function() {
                  var n = this,
                    i = arguments,
                    t = function() {
                      var t, e;
                      if (!(r < u)) {
                        if ((t = s.apply(n, i)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (e =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          S.isFunction(e)
                            ? a
                              ? e.call(t, l(u, o, P, a), l(u, o, q, a))
                              : (u++,
                                e.call(
                                  t,
                                  l(u, o, P, a),
                                  l(u, o, q, a),
                                  l(u, o, P, o.notifyWith)
                                ))
                            : (s !== P && ((n = void 0), (i = [t])),
                              (a || o.resolveWith)(n, i));
                      }
                    },
                    e = a
                      ? t
                      : function() {
                          try {
                            t();
                          } catch (t) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(t, e.stackTrace),
                              u <= r + 1 &&
                                (s !== q && ((n = void 0), (i = [t])),
                                o.rejectWith(n, i));
                          }
                        };
                  r
                    ? e()
                    : (S.Deferred.getStackHook &&
                        (e.stackTrace = S.Deferred.getStackHook()),
                      E.setTimeout(e));
                };
              }
              return S.Deferred(function(t) {
                o[0][3].add(l(0, t, S.isFunction(i) ? i : P, t.notifyWith)),
                  o[1][3].add(l(0, t, S.isFunction(e) ? e : P)),
                  o[2][3].add(l(0, t, S.isFunction(n) ? n : q));
              }).promise();
            },
            promise: function(t) {
              return null != t ? S.extend(t, s) : s;
            }
          },
          a = {};
        return (
          S.each(o, function(t, e) {
            var n = e[2],
              i = e[5];
            (s[e[1]] = n.add),
              i &&
                n.add(
                  function() {
                    r = i;
                  },
                  o[3 - t][2].disable,
                  o[0][2].lock
                ),
              n.add(e[3].fire),
              (a[e[0]] = function() {
                return (
                  a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[e[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function(t) {
        var n = arguments.length,
          e = n,
          i = Array(e),
          r = a.call(arguments),
          o = S.Deferred(),
          s = function(e) {
            return function(t) {
              (i[e] = this),
                (r[e] = 1 < arguments.length ? a.call(arguments) : t),
                --n || o.resolveWith(i, r);
            };
          };
        if (
          n <= 1 &&
          (F(t, o.done(s(e)).resolve, o.reject, !n),
          "pending" === o.state() || S.isFunction(r[e] && r[e].then))
        )
          return o.then();
        for (; e--; ) F(r[e], s(e), o.reject);
        return o.promise();
      }
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function(t, e) {
    E.console &&
      E.console.warn &&
      t &&
      R.test(t.name) &&
      E.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
  }),
    (S.readyException = function(t) {
      E.setTimeout(function() {
        throw t;
      });
    });
  var H = S.Deferred();
  function B() {
    T.removeEventListener("DOMContentLoaded", B),
      E.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function(t) {
    return (
      H.then(t).catch(function(t) {
        S.readyException(t);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(t) {
        (!0 === t ? --S.readyWait : S.isReady) ||
          (((S.isReady = !0) !== t && 0 < --S.readyWait) ||
            H.resolveWith(T, [S]));
      }
    }),
    (S.ready.then = H.then),
    "complete" === T.readyState ||
    ("loading" !== T.readyState && !T.documentElement.doScroll)
      ? E.setTimeout(S.ready)
      : (T.addEventListener("DOMContentLoaded", B),
        E.addEventListener("load", B));
  var W = function(t, e, n, i, r, o, s) {
      var a = 0,
        u = t.length,
        l = null == n;
      if ("object" === S.type(n))
        for (a in ((r = !0), n)) W(t, e, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        S.isFunction(i) || (s = !0),
        l &&
          (e = s
            ? (e.call(t, i), null)
            : ((l = e),
              function(t, e, n) {
                return l.call(S(t), n);
              })),
        e)
      )
        for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
      return r ? t : l ? e.call(t) : u ? e(t[0], n) : o;
    },
    $ = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  function Y() {
    this.expando = S.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function(t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            $(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                  }))),
          e
        );
      },
      set: function(t, e, n) {
        var i,
          r = this.cache(t);
        if ("string" == typeof e) r[S.camelCase(e)] = n;
        else for (i in e) r[S.camelCase(i)] = e[i];
        return r;
      },
      get: function(t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][S.camelCase(e)];
      },
      access: function(t, e, n) {
        return void 0 === e || (e && "string" == typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function(t, e) {
        var n,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e)
              ? e.map(S.camelCase)
              : (e = S.camelCase(e)) in i
              ? [e]
              : e.match(z) || []).length;
            for (; n--; ) delete i[e[n]];
          }
          (void 0 === e || S.isEmptyObject(i)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function(t) {
        var e = t[this.expando];
        return void 0 !== e && !S.isEmptyObject(e);
      }
    });
  var X = new Y(),
    U = new Y(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function Q(t, e, n) {
    var i, r;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((i = "data-" + e.replace(G, "-$&").toLowerCase()),
        "string" == typeof (n = t.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : V.test(r)
                ? JSON.parse(r)
                : r));
        } catch (t) {}
        U.set(t, e, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function(t) {
      return U.hasData(t) || X.hasData(t);
    },
    data: function(t, e, n) {
      return U.access(t, e, n);
    },
    removeData: function(t, e) {
      U.remove(t, e);
    },
    _data: function(t, e, n) {
      return X.access(t, e, n);
    },
    _removeData: function(t, e) {
      X.remove(t, e);
    }
  }),
    S.fn.extend({
      data: function(n, t) {
        var e,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function() {
                U.set(this, n);
              })
            : W(
                this,
                function(t) {
                  var e;
                  if (o && void 0 === t) {
                    if (void 0 !== (e = U.get(o, n))) return e;
                    if (void 0 !== (e = Q(o, n))) return e;
                  } else
                    this.each(function() {
                      U.set(this, n, t);
                    });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((r = U.get(o)), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))
        ) {
          for (e = s.length; e--; )
            s[e] &&
              (0 === (i = s[e].name).indexOf("data-") &&
                ((i = S.camelCase(i.slice(5))), Q(o, i, r[i])));
          X.set(o, "hasDataAttrs", !0);
        }
        return r;
      },
      removeData: function(t) {
        return this.each(function() {
          U.remove(this, t);
        });
      }
    }),
    S.extend({
      queue: function(t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = X.get(t, e)),
            n &&
              (!i || Array.isArray(n)
                ? (i = X.access(t, e, S.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function(t, e) {
        e = e || "fx";
        var n = S.queue(t, e),
          i = n.length,
          r = n.shift(),
          o = S._queueHooks(t, e);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              t,
              function() {
                S.dequeue(t, e);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function(t, e) {
        var n = e + "queueHooks";
        return (
          X.get(t, n) ||
          X.access(t, n, {
            empty: S.Callbacks("once memory").add(function() {
              X.remove(t, [e + "queue", n]);
            })
          })
        );
      }
    }),
    S.fn.extend({
      queue: function(e, n) {
        var t = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), t--),
          arguments.length < t
            ? S.queue(this[0], e)
            : void 0 === n
            ? this
            : this.each(function() {
                var t = S.queue(this, e, n);
                S._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e);
              })
        );
      },
      dequeue: function(t) {
        return this.each(function() {
          S.dequeue(this, t);
        });
      },
      clearQueue: function(t) {
        return this.queue(t || "fx", []);
      },
      promise: function(t, e) {
        var n,
          i = 1,
          r = S.Deferred(),
          o = this,
          s = this.length,
          a = function() {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          s--;

        )
          (n = X.get(o[s], t + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(e);
      }
    });
  var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    K = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
    J = ["Top", "Right", "Bottom", "Left"],
    tt = function(t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display &&
          S.contains(t.ownerDocument, t) &&
          "none" === S.css(t, "display"))
      );
    },
    et = function(t, e, n, i) {
      var r,
        o,
        s = {};
      for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = s[o];
      return r;
    };
  function nt(t, e, n, i) {
    var r,
      o = 1,
      s = 20,
      a = i
        ? function() {
            return i.cur();
          }
        : function() {
            return S.css(t, e, "");
          },
      u = a(),
      l = (n && n[3]) || (S.cssNumber[e] ? "" : "px"),
      c = (S.cssNumber[e] || ("px" !== l && +u)) && K.exec(S.css(t, e));
    if (c && c[3] !== l)
      for (
        l = l || c[3], n = n || [], c = +u || 1;
        (c /= o = o || ".5"),
          S.style(t, e, c + l),
          o !== (o = a() / u) && 1 !== o && --s;

      );
    return (
      n &&
        ((c = +c || +u || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = l), (i.start = c), (i.end = r))),
      r
    );
  }
  var it = {};
  function rt(t, e) {
    for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
      (i = t[o]).style &&
        ((n = i.style.display),
        e
          ? ("none" === n &&
              ((r[o] = X.get(i, "display") || null),
              r[o] || (i.style.display = "")),
            "" === i.style.display &&
              tt(i) &&
              (r[o] = ((f = l = u = void 0),
              (l = (a = i).ownerDocument),
              (c = a.nodeName),
              (f = it[c]) ||
                ((u = l.body.appendChild(l.createElement(c))),
                (f = S.css(u, "display")),
                u.parentNode.removeChild(u),
                "none" === f && (f = "block"),
                (it[c] = f)))))
          : "none" !== n && ((r[o] = "none"), X.set(i, "display", n)));
    var a, u, l, c, f;
    for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
    return t;
  }
  S.fn.extend({
    show: function() {
      return rt(this, !0);
    },
    hide: function() {
      return rt(this);
    },
    toggle: function(t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function() {
            tt(this) ? S(this).show() : S(this).hide();
          });
    }
  });
  var ot = /^(?:checkbox|radio)$/i,
    st = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    at = /^$|\/(?:java|ecma)script/i,
    ut = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  function lt(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && _(t, e)) ? S.merge([t], n) : n
    );
  }
  function ct(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
      X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"));
  }
  (ut.optgroup = ut.option),
    (ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead),
    (ut.th = ut.td);
  var ft,
    dt,
    ht = /<|&#?\w+;/;
  function pt(t, e, n, i, r) {
    for (
      var o,
        s,
        a,
        u,
        l,
        c,
        f = e.createDocumentFragment(),
        d = [],
        h = 0,
        p = t.length;
      h < p;
      h++
    )
      if ((o = t[h]) || 0 === o)
        if ("object" === S.type(o)) S.merge(d, o.nodeType ? [o] : o);
        else if (ht.test(o)) {
          for (
            s = s || f.appendChild(e.createElement("div")),
              a = (st.exec(o) || ["", ""])[1].toLowerCase(),
              u = ut[a] || ut._default,
              s.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            s = s.lastChild;
          S.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
        } else d.push(e.createTextNode(o));
    for (f.textContent = "", h = 0; (o = d[h++]); )
      if (i && -1 < S.inArray(o, i)) r && r.push(o);
      else if (
        ((l = S.contains(o.ownerDocument, o)),
        (s = lt(f.appendChild(o), "script")),
        l && ct(s),
        n)
      )
        for (c = 0; (o = s[c++]); ) at.test(o.type || "") && n.push(o);
    return f;
  }
  (ft = T.createDocumentFragment().appendChild(T.createElement("div"))),
    (dt = T.createElement("input")).setAttribute("type", "radio"),
    dt.setAttribute("checked", "checked"),
    dt.setAttribute("name", "t"),
    ft.appendChild(dt),
    (g.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ft.innerHTML = "<textarea>x</textarea>"),
    (g.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue);
  var mt = T.documentElement,
    gt = /^key/,
    vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    yt = /^([^.]*)(?:\.(.+)|)/;
  function bt() {
    return !0;
  }
  function xt() {
    return !1;
  }
  function wt() {
    try {
      return T.activeElement;
    } catch (t) {}
  }
  function Ct(t, e, n, i, r, o) {
    var s, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
        Ct(t, a, n, i, e[a], o);
      return t;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = xt;
    else if (!r) return t;
    return (
      1 === o &&
        ((s = r),
        ((r = function(t) {
          return S().off(t), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = S.guid++))),
      t.each(function() {
        S.event.add(this, e, r, i, n);
      })
    );
  }
  (S.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        d,
        h,
        p,
        m,
        g = X.get(e);
      if (g)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && S.find.matchesSelector(mt, r),
            n.guid || (n.guid = S.guid++),
            (u = g.events) || (u = g.events = {}),
            (s = g.handle) ||
              (s = g.handle = function(t) {
                return void 0 !== S && S.event.triggered !== t.type
                  ? S.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            l = (t = (t || "").match(z) || [""]).length;
          l--;

        )
          (h = m = (a = yt.exec(t[l]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h &&
              ((f = S.event.special[h] || {}),
              (h = (r ? f.delegateType : f.bindType) || h),
              (f = S.event.special[h] || {}),
              (c = S.extend(
                {
                  type: h,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && S.expr.match.needsContext.test(r),
                  namespace: p.join(".")
                },
                o
              )),
              (d = u[h]) ||
                (((d = u[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, s)) ||
                  (e.addEventListener && e.addEventListener(h, s))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (S.event.global[h] = !0));
    },
    remove: function(t, e, n, i, r) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        d,
        h,
        p,
        m,
        g = X.hasData(t) && X.get(t);
      if (g && (u = g.events)) {
        for (l = (e = (e || "").match(z) || [""]).length; l--; )
          if (
            ((h = m = (a = yt.exec(e[l]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = S.event.special[h] || {},
                d = u[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = d.length;
              o--;

            )
              (c = d[o]),
                (!r && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(t, c));
            s &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(t, p, g.handle)) ||
                S.removeEvent(t, h, g.handle),
              delete u[h]);
          } else for (h in u) S.event.remove(t, h + e[l], n, i, !0);
        S.isEmptyObject(u) && X.remove(t, "handle events");
      }
    },
    dispatch: function(t) {
      var e,
        n,
        i,
        r,
        o,
        s,
        a = S.event.fix(t),
        u = new Array(arguments.length),
        l = (X.get(this, "events") || {})[a.type] || [],
        c = S.event.special[a.type] || {};
      for (u[0] = a, e = 1; e < arguments.length; e++) u[e] = arguments[e];
      if (
        ((a.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, a))
      ) {
        for (
          s = S.event.handlers.call(this, a, l), e = 0;
          (r = s[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (i = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, u)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(t, e) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        u = e.delegateCount,
        l = t.target;
      if (u && l.nodeType && !("click" === t.type && 1 <= t.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
            for (o = [], s = {}, n = 0; n < u; n++)
              void 0 === s[(r = (i = e[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? -1 < S(r, this).index(l)
                  : S.find(r, this, null, [l]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < e.length && a.push({ elem: l, handlers: e.slice(u) }), a
      );
    },
    addProp: function(e, t) {
      Object.defineProperty(S.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: S.isFunction(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function(t) {
      return t[S.expando] ? t : new S.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== wt() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === wt() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && _(this, "input"))
            return this.click(), !1;
        },
        _default: function(t) {
          return _(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }),
    (S.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (S.Event = function(t, e) {
      return this instanceof S.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? bt
                  : xt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
          e && S.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || S.now()),
          void (this[S.expando] = !0))
        : new S.Event(t, e);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: xt,
      isPropagationStopped: xt,
      isImmediatePropagationStopped: xt,
      isSimulated: !1,
      preventDefault: function() {
        var t = this.originalEvent;
        (this.isDefaultPrevented = bt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        (this.isPropagationStopped = bt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = bt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
          var e = t.button;
          return null == t.which && gt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && vt.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        }
      },
      S.event.addProp
    ),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(t, r) {
        S.event.special[t] = {
          delegateType: r,
          bindType: r,
          handle: function(t) {
            var e,
              n = t.relatedTarget,
              i = t.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((t.type = i.origType),
                (e = i.handler.apply(this, arguments)),
                (t.type = r)),
              e
            );
          }
        };
      }
    ),
    S.fn.extend({
      on: function(t, e, n, i) {
        return Ct(this, t, e, n, i);
      },
      one: function(t, e, n, i) {
        return Ct(this, t, e, n, i, 1);
      },
      off: function(t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            S(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof t)
          return (
            (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
            !1 === n && (n = xt),
            this.each(function() {
              S.event.remove(this, t, n, e);
            })
          );
        for (r in t) this.off(r, e, t[r]);
        return this;
      }
    });
  var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Tt = /<script|<style|<link/i,
    St = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^true\/(.*)/,
    _t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ot(t, e) {
    return (
      (_(t, "table") &&
        _(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        S(">tbody", t)[0]) ||
      t
    );
  }
  function At(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function Lt(t) {
    var e = kt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function jt(t, e) {
    var n, i, r, o, s, a, u, l;
    if (1 === e.nodeType) {
      if (
        X.hasData(t) &&
        ((o = X.access(t)), (s = X.set(e, o)), (l = o.events))
      )
        for (r in (delete s.handle, (s.events = {}), l))
          for (n = 0, i = l[r].length; n < i; n++) S.event.add(e, r, l[r][n]);
      U.hasData(t) && ((a = U.access(t)), (u = S.extend({}, a)), U.set(e, u));
    }
  }
  function It(n, i, r, o) {
    i = m.apply([], i);
    var t,
      e,
      s,
      a,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      h = i[0],
      p = S.isFunction(h);
    if (p || (1 < f && "string" == typeof h && !g.checkClone && St.test(h)))
      return n.each(function(t) {
        var e = n.eq(t);
        p && (i[0] = h.call(this, t, e.html())), It(e, i, r, o);
      });
    if (
      f &&
      ((e = (t = pt(i, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === t.childNodes.length && (t = e),
      e || o)
    ) {
      for (a = (s = S.map(lt(t, "script"), At)).length; c < f; c++)
        (u = t),
          c !== d &&
            ((u = S.clone(u, !0, !0)), a && S.merge(s, lt(u, "script"))),
          r.call(n[c], u, c);
      if (a)
        for (l = s[s.length - 1].ownerDocument, S.map(s, Lt), c = 0; c < a; c++)
          (u = s[c]),
            at.test(u.type || "") &&
              !X.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src
                ? S._evalUrl && S._evalUrl(u.src)
                : v(u.textContent.replace(_t, ""), l));
    }
    return n;
  }
  function Nt(t, e, n) {
    for (var i, r = e ? S.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || S.cleanData(lt(i)),
        i.parentNode &&
          (n && S.contains(i.ownerDocument, i) && ct(lt(i, "script")),
          i.parentNode.removeChild(i));
    return t;
  }
  S.extend({
    htmlPrefilter: function(t) {
      return t.replace(Et, "<$1></$2>");
    },
    clone: function(t, e, n) {
      var i,
        r,
        o,
        s,
        a,
        u,
        l,
        c = t.cloneNode(!0),
        f = S.contains(t.ownerDocument, t);
      if (
        !(
          g.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          S.isXMLDoc(t)
        )
      )
        for (s = lt(c), i = 0, r = (o = lt(t)).length; i < r; i++)
          (a = o[i]),
            (u = s[i]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && ot.test(a.type)
              ? (u.checked = a.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = a.defaultValue);
      if (e)
        if (n)
          for (o = o || lt(t), s = s || lt(c), i = 0, r = o.length; i < r; i++)
            jt(o[i], s[i]);
        else jt(t, c);
      return (
        0 < (s = lt(c, "script")).length && ct(s, !f && lt(t, "script")), c
      );
    },
    cleanData: function(t) {
      for (var e, n, i, r = S.event.special, o = 0; void 0 !== (n = t[o]); o++)
        if ($(n)) {
          if ((e = n[X.expando])) {
            if (e.events)
              for (i in e.events)
                r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
            n[X.expando] = void 0;
          }
          n[U.expando] && (n[U.expando] = void 0);
        }
    }
  }),
    S.fn.extend({
      detach: function(t) {
        return Nt(this, t, !0);
      },
      remove: function(t) {
        return Nt(this, t);
      },
      text: function(t) {
        return W(
          this,
          function(t) {
            return void 0 === t
              ? S.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function() {
        return It(this, arguments, function(t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ot(this, t).appendChild(t);
        });
      },
      prepend: function() {
        return It(this, arguments, function(t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = Ot(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function() {
        return It(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function() {
        return It(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (S.cleanData(lt(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function(t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function() {
            return S.clone(this, t, e);
          })
        );
      },
      html: function(t) {
        return W(
          this,
          function(t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Tt.test(t) &&
              !ut[(st.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = S.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (S.cleanData(lt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function() {
        var n = [];
        return It(
          this,
          arguments,
          function(t) {
            var e = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(lt(this)), e && e.replaceChild(t, this));
          },
          n
        );
      }
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(t, s) {
        S.fn[t] = function(t) {
          for (var e, n = [], i = S(t), r = i.length - 1, o = 0; o <= r; o++)
            (e = o === r ? this : this.clone(!0)),
              S(i[o])[s](e),
              u.apply(n, e.get());
          return this.pushStack(n);
        };
      }
    );
  var Mt = /^margin/,
    Dt = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
    zt = function(t) {
      var e = t.ownerDocument.defaultView;
      return (e && e.opener) || (e = E), e.getComputedStyle(t);
    };
  function Pt(t, e, n) {
    var i,
      r,
      o,
      s,
      a = t.style;
    return (
      (n = n || zt(t)) &&
        ("" !== (s = n.getPropertyValue(e) || n[e]) ||
          S.contains(t.ownerDocument, t) ||
          (s = S.style(t, e)),
        !g.pixelMarginRight() &&
          Dt.test(s) &&
          Mt.test(e) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function qt(t, e) {
    return {
      get: function() {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      }
    };
  }
  !(function() {
    function t() {
      if (s) {
        (s.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (s.innerHTML = ""),
          mt.appendChild(o);
        var t = E.getComputedStyle(s);
        (e = "1%" !== t.top),
          (r = "2px" === t.marginLeft),
          (n = "4px" === t.width),
          (s.style.marginRight = "50%"),
          (i = "4px" === t.marginRight),
          mt.removeChild(o),
          (s = null);
      }
    }
    var e,
      n,
      i,
      r,
      o = T.createElement("div"),
      s = T.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (g.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (o.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      o.appendChild(s),
      S.extend(g, {
        pixelPosition: function() {
          return t(), e;
        },
        boxSizingReliable: function() {
          return t(), n;
        },
        pixelMarginRight: function() {
          return t(), i;
        },
        reliableMarginLeft: function() {
          return t(), r;
        }
      }));
  })();
  var Ft = /^(none|table(?!-c[ea]).+)/,
    Rt = /^--/,
    Ht = { position: "absolute", visibility: "hidden", display: "block" },
    Bt = { letterSpacing: "0", fontWeight: "400" },
    Wt = ["Webkit", "Moz", "ms"],
    $t = T.createElement("div").style;
  function Yt(t) {
    var e = S.cssProps[t];
    return (
      e ||
        (e = S.cssProps[t] =
          (function(t) {
            if (t in $t) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--; )
              if ((t = Wt[n] + e) in $t) return t;
          })(t) || t),
      e
    );
  }
  function Xt(t, e, n) {
    var i = K.exec(e);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }
  function Ut(t, e, n, i, r) {
    var o,
      s = 0;
    for (
      o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (s += S.css(t, n + J[o], !0, r)),
        i
          ? ("content" === n && (s -= S.css(t, "padding" + J[o], !0, r)),
            "margin" !== n && (s -= S.css(t, "border" + J[o] + "Width", !0, r)))
          : ((s += S.css(t, "padding" + J[o], !0, r)),
            "padding" !== n &&
              (s += S.css(t, "border" + J[o] + "Width", !0, r)));
    return s;
  }
  function Vt(t, e, n) {
    var i,
      r = zt(t),
      o = Pt(t, e, r),
      s = "border-box" === S.css(t, "boxSizing", !1, r);
    return Dt.test(o)
      ? o
      : ((i = s && (g.boxSizingReliable() || o === t.style[e])),
        "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]),
        (o = parseFloat(o) || 0) +
          Ut(t, e, n || (s ? "border" : "content"), i, r) +
          "px");
  }
  function Gt(t, e, n, i, r) {
    return new Gt.prototype.init(t, e, n, i, r);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function(t, e) {
          if (e) {
            var n = Pt(t, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          s,
          a = S.camelCase(e),
          u = Rt.test(e),
          l = t.style;
        return (
          u || (e = Yt(a)),
          (s = S.cssHooks[e] || S.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (r = s.get(t, !1, i))
              ? r
              : l[e]
            : ("string" === (o = typeof n) &&
                (r = K.exec(n)) &&
                r[1] &&
                ((n = nt(t, e, r)), (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === o &&
                  (n += (r && r[3]) || (S.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                  (u ? l.setProperty(e, n) : (l[e] = n)))
              ))
        );
      }
    },
    css: function(t, e, n, i) {
      var r,
        o,
        s,
        a = S.camelCase(e);
      return (
        Rt.test(e) || (e = Yt(a)),
        (s = S.cssHooks[e] || S.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(t, !0, n)),
        void 0 === r && (r = Pt(t, e, i)),
        "normal" === r && e in Bt && (r = Bt[e]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    }
  }),
    S.each(["height", "width"], function(t, s) {
      S.cssHooks[s] = {
        get: function(t, e, n) {
          if (e)
            return !Ft.test(S.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Vt(t, s, n)
              : et(t, Ht, function() {
                  return Vt(t, s, n);
                });
        },
        set: function(t, e, n) {
          var i,
            r = n && zt(t),
            o =
              n &&
              Ut(t, s, n, "border-box" === S.css(t, "boxSizing", !1, r), r);
          return (
            o &&
              (i = K.exec(e)) &&
              "px" !== (i[3] || "px") &&
              ((t.style[s] = e), (e = S.css(t, s))),
            Xt(0, e, o)
          );
        }
      };
    }),
    (S.cssHooks.marginLeft = qt(g.reliableMarginLeft, function(t, e) {
      if (e)
        return (
          (parseFloat(Pt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              et(t, { marginLeft: 0 }, function() {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function(r, o) {
      (S.cssHooks[r + o] = {
        expand: function(t) {
          for (
            var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t];
            e < 4;
            e++
          )
            n[r + J[e] + o] = i[e] || i[e - 2] || i[0];
          return n;
        }
      }),
        Mt.test(r) || (S.cssHooks[r + o].set = Xt);
    }),
    S.fn.extend({
      css: function(t, e) {
        return W(
          this,
          function(t, e, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(e)) {
              for (i = zt(t), r = e.length; s < r; s++)
                o[e[s]] = S.css(t, e[s], !1, i);
              return o;
            }
            return void 0 !== n ? S.style(t, e, n) : S.css(t, e);
          },
          t,
          e,
          1 < arguments.length
        );
      }
    }),
    (((S.Tween = Gt).prototype = {
      constructor: Gt,
      init: function(t, e, n, i, r, o) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = r || S.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var t = Gt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Gt.propHooks._default.get(this);
      },
      run: function(t) {
        var e,
          n = Gt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e = S.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Gt.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Gt.prototype),
    ((Gt.propHooks = {
      _default: {
        get: function(t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = S.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function(t) {
          S.fx.step[t.prop]
            ? S.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[S.cssProps[t.prop]] && !S.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : S.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }).scrollTop = Gt.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }),
    (S.easing = {
      linear: function(t) {
        return t;
      },
      swing: function(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (S.fx = Gt.prototype.init),
    (S.fx.step = {});
  var Qt,
    Zt,
    Kt,
    Jt,
    te = /^(?:toggle|show|hide)$/,
    ee = /queueHooks$/;
  function ne() {
    Zt &&
      (!1 === T.hidden && E.requestAnimationFrame
        ? E.requestAnimationFrame(ne)
        : E.setTimeout(ne, S.fx.interval),
      S.fx.tick());
  }
  function ie() {
    return (
      E.setTimeout(function() {
        Qt = void 0;
      }),
      (Qt = S.now())
    );
  }
  function re(t, e) {
    var n,
      i = 0,
      r = { height: t };
    for (e = e ? 1 : 0; i < 4; i += 2 - e)
      r["margin" + (n = J[i])] = r["padding" + n] = t;
    return e && (r.opacity = r.width = t), r;
  }
  function oe(t, e, n) {
    for (
      var i,
        r = (se.tweeners[e] || []).concat(se.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, e, t))) return i;
  }
  function se(o, t, e) {
    var n,
      s,
      i = 0,
      r = se.prefilters.length,
      a = S.Deferred().always(function() {
        delete u.elem;
      }),
      u = function() {
        if (s) return !1;
        for (
          var t = Qt || ie(),
            e = Math.max(0, l.startTime + l.duration - t),
            n = 1 - (e / l.duration || 0),
            i = 0,
            r = l.tweens.length;
          i < r;
          i++
        )
          l.tweens[i].run(n);
        return (
          a.notifyWith(o, [l, n, e]),
          n < 1 && r
            ? e
            : (r || a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l]), !1)
        );
      },
      l = a.promise({
        elem: o,
        props: S.extend({}, t),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, e),
        originalProperties: t,
        originalOptions: e,
        startTime: Qt || ie(),
        duration: e.duration,
        tweens: [],
        createTween: function(t, e) {
          var n = S.Tween(
            o,
            l.opts,
            t,
            e,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function(t) {
          var e = 0,
            n = t ? l.tweens.length : 0;
          if (s) return this;
          for (s = !0; e < n; e++) l.tweens[e].run(1);
          return (
            t
              ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, t]))
              : a.rejectWith(o, [l, t]),
            this
          );
        }
      }),
      c = l.props;
    for (
      (function(t, e) {
        var n, i, r, o, s;
        for (n in t)
          if (
            ((r = e[(i = S.camelCase(n))]),
            (o = t[n]),
            Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
            n !== i && ((t[i] = o), delete t[n]),
            (s = S.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete t[i], o))
              (n in t) || ((t[n] = o[n]), (e[n] = r));
          else e[i] = r;
      })(c, l.opts.specialEasing);
      i < r;
      i++
    )
      if ((n = se.prefilters[i].call(l, o, c, l.opts)))
        return (
          S.isFunction(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = S.proxy(n.stop, n)),
          n
        );
    return (
      S.map(c, oe, l),
      S.isFunction(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(se, {
    tweeners: {
      "*": [
        function(t, e) {
          var n = this.createTween(t, e);
          return nt(n.elem, t, K.exec(e), n), n;
        }
      ]
    },
    tweener: function(t, e) {
      for (
        var n,
          i = 0,
          r = (t = S.isFunction(t) ? ((e = t), ["*"]) : t.match(z)).length;
        i < r;
        i++
      )
        (n = t[i]),
          (se.tweeners[n] = se.tweeners[n] || []),
          se.tweeners[n].unshift(e);
    },
    prefilters: [
      function(t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          u,
          l,
          c,
          f = "width" in e || "height" in e,
          d = this,
          h = {},
          p = t.style,
          m = t.nodeType && tt(t),
          g = X.get(t, "fxshow");
        for (i in (n.queue ||
          (null == (s = S._queueHooks(t, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function() {
              s.unqueued || a();
            })),
          s.unqueued++,
          d.always(function() {
            d.always(function() {
              s.unqueued--, S.queue(t, "fx").length || s.empty.fire();
            });
          })),
        e))
          if (((r = e[i]), te.test(r))) {
            if (
              (delete e[i],
              (o = o || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            h[i] = (g && g[i]) || S.style(t, i);
          }
        if ((u = !S.isEmptyObject(e)) || !S.isEmptyObject(h))
          for (i in (f &&
            1 === t.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (l = g && g.display) && (l = X.get(t, "display")),
            "none" === (c = S.css(t, "display")) &&
              (l
                ? (c = l)
                : (rt([t], !0),
                  (l = t.style.display || l),
                  (c = S.css(t, "display")),
                  rt([t]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(t, "float") &&
              (u ||
                (d.done(function() {
                  p.display = l;
                }),
                null == l && ((c = p.display), (l = "none" === c ? "" : c))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function() {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (u = !1),
          h))
            u ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = X.access(t, "fxshow", { display: l })),
              o && (g.hidden = !m),
              m && rt([t], !0),
              d.done(function() {
                for (i in (m || rt([t]), X.remove(t, "fxshow"), h))
                  S.style(t, i, h[i]);
              })),
              (u = oe(m ? g[i] : 0, i, d)),
              i in g ||
                ((g[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
      }
    ],
    prefilter: function(t, e) {
      e ? se.prefilters.unshift(t) : se.prefilters.push(t);
    }
  })),
    (S.speed = function(t, e, n) {
      var i =
        t && "object" == typeof t
          ? S.extend({}, t)
          : {
              complete: n || (!n && e) || (S.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !S.isFunction(e) && e)
            };
      return (
        S.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in S.fx.speeds
              ? (i.duration = S.fx.speeds[i.duration])
              : (i.duration = S.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function() {
          S.isFunction(i.old) && i.old.call(this),
            i.queue && S.dequeue(this, i.queue);
        }),
        i
      );
    }),
    S.fn.extend({
      fadeTo: function(t, e, n, i) {
        return this.filter(tt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function(e, t, n, i) {
        var r = S.isEmptyObject(e),
          o = S.speed(t, n, i),
          s = function() {
            var t = se(this, S.extend({}, e), o);
            (r || X.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function(r, t, o) {
        var s = function(t) {
          var e = t.stop;
          delete t.stop, e(o);
        };
        return (
          "string" != typeof r && ((o = t), (t = r), (r = void 0)),
          t && !1 !== r && this.queue(r || "fx", []),
          this.each(function() {
            var t = !0,
              e = null != r && r + "queueHooks",
              n = S.timers,
              i = X.get(this);
            if (e) i[e] && i[e].stop && s(i[e]);
            else for (e in i) i[e] && i[e].stop && ee.test(e) && s(i[e]);
            for (e = n.length; e--; )
              n[e].elem !== this ||
                (null != r && n[e].queue !== r) ||
                (n[e].anim.stop(o), (t = !1), n.splice(e, 1));
            (!t && o) || S.dequeue(this, r);
          })
        );
      },
      finish: function(s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function() {
            var t,
              e = X.get(this),
              n = e[s + "queue"],
              i = e[s + "queueHooks"],
              r = S.timers,
              o = n ? n.length : 0;
            for (
              e.finish = !0,
                S.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === s &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < o; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete e.finish;
          })
        );
      }
    }),
    S.each(["toggle", "show", "hide"], function(t, i) {
      var r = S.fn[i];
      S.fn[i] = function(t, e, n) {
        return null == t || "boolean" == typeof t
          ? r.apply(this, arguments)
          : this.animate(re(i, !0), t, e, n);
      };
    }),
    S.each(
      {
        slideDown: re("show"),
        slideUp: re("hide"),
        slideToggle: re("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(t, i) {
        S.fn[t] = function(t, e, n) {
          return this.animate(i, t, e, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function() {
      var t,
        e = 0,
        n = S.timers;
      for (Qt = S.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || S.fx.stop(), (Qt = void 0);
    }),
    (S.fx.timer = function(t) {
      S.timers.push(t), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function() {
      Zt || ((Zt = !0), ne());
    }),
    (S.fx.stop = function() {
      Zt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function(i, t) {
      return (
        (i = (S.fx && S.fx.speeds[i]) || i),
        (t = t || "fx"),
        this.queue(t, function(t, e) {
          var n = E.setTimeout(t, i);
          e.stop = function() {
            E.clearTimeout(n);
          };
        })
      );
    }),
    (Kt = T.createElement("input")),
    (Jt = T.createElement("select").appendChild(T.createElement("option"))),
    (Kt.type = "checkbox"),
    (g.checkOn = "" !== Kt.value),
    (g.optSelected = Jt.selected),
    ((Kt = T.createElement("input")).value = "t"),
    (Kt.type = "radio"),
    (g.radioValue = "t" === Kt.value);
  var ae,
    ue = S.expr.attrHandle;
  S.fn.extend({
    attr: function(t, e) {
      return W(this, S.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function(t) {
      return this.each(function() {
        S.removeAttr(this, t);
      });
    }
  }),
    S.extend({
      attr: function(t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? S.prop(t, e, n)
            : ((1 === o && S.isXMLDoc(t)) ||
                (r =
                  S.attrHooks[e.toLowerCase()] ||
                  (S.expr.match.bool.test(e) ? ae : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(t, e)
                  : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                  ? i
                  : (t.setAttribute(e, n + ""), n)
                : r && "get" in r && null !== (i = r.get(t, e))
                ? i
                : null == (i = S.find.attr(t, e))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(t, e) {
            if (!g.radioValue && "radio" === e && _(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          }
        }
      },
      removeAttr: function(t, e) {
        var n,
          i = 0,
          r = e && e.match(z);
        if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
      }
    }),
    (ae = {
      set: function(t, e, n) {
        return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n;
      }
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var s = ue[e] || S.find.attr;
      ue[e] = function(t, e, n) {
        var i,
          r,
          o = e.toLowerCase();
        return (
          n ||
            ((r = ue[o]),
            (ue[o] = i),
            (i = null != s(t, e, n) ? o : null),
            (ue[o] = r)),
          i
        );
      };
    });
  var le = /^(?:input|select|textarea|button)$/i,
    ce = /^(?:a|area)$/i;
  function fe(t) {
    return (t.match(z) || []).join(" ");
  }
  function de(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  S.fn.extend({
    prop: function(t, e) {
      return W(this, S.prop, t, e, 1 < arguments.length);
    },
    removeProp: function(t) {
      return this.each(function() {
        delete this[S.propFix[t] || t];
      });
    }
  }),
    S.extend({
      prop: function(t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(t)) ||
              ((e = S.propFix[e] || e), (r = S.propHooks[e])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                ? i
                : (t[e] = n)
              : r && "get" in r && null !== (i = r.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var e = S.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : le.test(t.nodeName) || (ce.test(t.nodeName) && t.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    g.optSelected ||
      (S.propHooks.selected = {
        get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function(e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0;
        if (S.isFunction(e))
          return this.each(function(t) {
            S(this).addClass(e.call(this, t, de(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(z) || []; (n = this[u++]); )
            if (((r = de(n)), (i = 1 === n.nodeType && " " + fe(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = fe(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function(e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0;
        if (S.isFunction(e))
          return this.each(function(t) {
            S(this).removeClass(e.call(this, t, de(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(z) || []; (n = this[u++]); )
            if (((r = de(n)), (i = 1 === n.nodeType && " " + fe(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; -1 < i.indexOf(" " + o + " "); )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = fe(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function(r, e) {
        var o = typeof r;
        return "boolean" == typeof e && "string" === o
          ? e
            ? this.addClass(r)
            : this.removeClass(r)
          : S.isFunction(r)
          ? this.each(function(t) {
              S(this).toggleClass(r.call(this, t, de(this), e), e);
            })
          : this.each(function() {
              var t, e, n, i;
              if ("string" === o)
                for (e = 0, n = S(this), i = r.match(z) || []; (t = i[e++]); )
                  n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
              else
                (void 0 !== r && "boolean" !== o) ||
                  ((t = de(this)) && X.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === r ? "" : X.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function(t) {
        var e,
          n,
          i = 0;
        for (e = " " + t + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + fe(de(n)) + " ").indexOf(e))
            return !0;
        return !1;
      }
    });
  var he = /\r/g;
  S.fn.extend({
    val: function(n) {
      var i,
        t,
        r,
        e = this[0];
      return arguments.length
        ? ((r = S.isFunction(n)),
          this.each(function(t) {
            var e;
            1 === this.nodeType &&
              (null == (e = r ? n.call(this, t, S(this).val()) : n)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : Array.isArray(e) &&
                  (e = S.map(e, function(t) {
                    return null == t ? "" : t + "";
                  })),
              ((i =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
        ? (i = S.valHooks[e.type] || S.valHooks[e.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (t = i.get(e, "value"))
          ? t
          : "string" == typeof (t = e.value)
          ? t.replace(he, "")
          : null == t
          ? ""
          : t
        : void 0;
    }
  }),
    S.extend({
      valHooks: {
        option: {
          get: function(t) {
            var e = S.find.attr(t, "value");
            return null != e ? e : fe(S.text(t));
          }
        },
        select: {
          get: function(t) {
            var e,
              n,
              i,
              r = t.options,
              o = t.selectedIndex,
              s = "select-one" === t.type,
              a = s ? null : [],
              u = s ? o + 1 : r.length;
            for (i = o < 0 ? u : s ? o : 0; i < u; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))
              ) {
                if (((e = S(n).val()), s)) return e;
                a.push(e);
              }
            return a;
          },
          set: function(t, e) {
            for (
              var n, i, r = t.options, o = S.makeArray(e), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
            return n || (t.selectedIndex = -1), o;
          }
        }
      }
    }),
    S.each(["radio", "checkbox"], function() {
      (S.valHooks[this] = {
        set: function(t, e) {
          if (Array.isArray(e))
            return (t.checked = -1 < S.inArray(S(t).val(), e));
        }
      }),
        g.checkOn ||
          (S.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var pe = /^(?:focusinfocus|focusoutblur)$/;
  S.extend(S.event, {
    trigger: function(t, e, n, i) {
      var r,
        o,
        s,
        a,
        u,
        l,
        c,
        f = [n || T],
        d = p.call(t, "type") ? t.type : t,
        h = p.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((o = s = n = n || T),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !pe.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((t = t[S.expando]
            ? t
            : new S.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = n),
          (e = null == e ? [t] : S.makeArray(e, [t])),
          (c = S.event.special[d] || {}),
          i || !c.trigger || !1 !== c.trigger.apply(n, e)))
      ) {
        if (!i && !c.noBubble && !S.isWindow(n)) {
          for (
            a = c.delegateType || d, pe.test(a + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            f.push(o), (s = o);
          s === (n.ownerDocument || T) &&
            f.push(s.defaultView || s.parentWindow || E);
        }
        for (r = 0; (o = f[r++]) && !t.isPropagationStopped(); )
          (t.type = 1 < r ? a : c.bindType || d),
            (l = (X.get(o, "events") || {})[t.type] && X.get(o, "handle")) &&
              l.apply(o, e),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((t.result = l.apply(o, e)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = d),
          i ||
            t.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(f.pop(), e)) ||
            !$(n) ||
            (u &&
              S.isFunction(n[d]) &&
              !S.isWindow(n) &&
              ((s = n[u]) && (n[u] = null),
              n[(S.event.triggered = d)](),
              (S.event.triggered = void 0),
              s && (n[u] = s))),
          t.result
        );
      }
    },
    simulate: function(t, e, n) {
      var i = S.extend(new S.Event(), n, { type: t, isSimulated: !0 });
      S.event.trigger(i, null, e);
    }
  }),
    S.fn.extend({
      trigger: function(t, e) {
        return this.each(function() {
          S.event.trigger(t, e, this);
        });
      },
      triggerHandler: function(t, e) {
        var n = this[0];
        if (n) return S.event.trigger(t, e, n, !0);
      }
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(t, n) {
        S.fn[n] = function(t, e) {
          return 0 < arguments.length
            ? this.on(n, null, t, e)
            : this.trigger(n);
        };
      }
    ),
    S.fn.extend({
      hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      }
    }),
    (g.focusin = "onfocusin" in E),
    g.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
        var r = function(t) {
          S.event.simulate(i, t.target, S.event.fix(t));
        };
        S.event.special[i] = {
          setup: function() {
            var t = this.ownerDocument || this,
              e = X.access(t, i);
            e || t.addEventListener(n, r, !0), X.access(t, i, (e || 0) + 1);
          },
          teardown: function() {
            var t = this.ownerDocument || this,
              e = X.access(t, i) - 1;
            e
              ? X.access(t, i, e)
              : (t.removeEventListener(n, r, !0), X.remove(t, i));
          }
        };
      });
  var me = E.location,
    ge = S.now(),
    ve = /\?/;
  S.parseXML = function(t) {
    var e;
    if (!t || "string" != typeof t) return null;
    try {
      e = new E.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }
    return (
      (e && !e.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + t),
      e
    );
  };
  var ye = /\[\]$/,
    be = /\r?\n/g,
    xe = /^(?:submit|button|image|reset|file)$/i,
    we = /^(?:input|select|textarea|keygen)/i;
  function Ce(n, t, i, r) {
    var e;
    if (Array.isArray(t))
      S.each(t, function(t, e) {
        i || ye.test(n)
          ? r(n, e)
          : Ce(
              n + "[" + ("object" == typeof e && null != e ? t : "") + "]",
              e,
              i,
              r
            );
      });
    else if (i || "object" !== S.type(t)) r(n, t);
    else for (e in t) Ce(n + "[" + e + "]", t[e], i, r);
  }
  (S.param = function(t, e) {
    var n,
      i = [],
      r = function(t, e) {
        var n = S.isFunction(e) ? e() : e;
        i[i.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(t) || (t.jquery && !S.isPlainObject(t)))
      S.each(t, function() {
        r(this.name, this.value);
      });
    else for (n in t) Ce(n, t[n], e, r);
    return i.join("&");
  }),
    S.fn.extend({
      serialize: function() {
        return S.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var t = S.prop(this, "elements");
          return t ? S.makeArray(t) : this;
        })
          .filter(function() {
            var t = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              we.test(this.nodeName) &&
              !xe.test(t) &&
              (this.checked || !ot.test(t))
            );
          })
          .map(function(t, e) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function(t) {
                  return { name: e.name, value: t.replace(be, "\r\n") };
                })
              : { name: e.name, value: n.replace(be, "\r\n") };
          })
          .get();
      }
    });
  var Ee = /%20/g,
    Te = /#.*$/,
    Se = /([?&])_=[^&]*/,
    ke = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    _e = /^(?:GET|HEAD)$/,
    Oe = /^\/\//,
    Ae = {},
    Le = {},
    je = "*/".concat("*"),
    Ie = T.createElement("a");
  function Ne(o) {
    return function(t, e) {
      "string" != typeof t && ((e = t), (t = "*"));
      var n,
        i = 0,
        r = t.toLowerCase().match(z) || [];
      if (S.isFunction(e))
        for (; (n = r[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(e))
            : (o[n] = o[n] || []).push(e);
    };
  }
  function Me(e, r, o, s) {
    var a = {},
      u = e === Le;
    function l(t) {
      var i;
      return (
        (a[t] = !0),
        S.each(e[t] || [], function(t, e) {
          var n = e(r, o, s);
          return "string" != typeof n || u || a[n]
            ? u
              ? !(i = n)
              : void 0
            : (r.dataTypes.unshift(n), l(n), !1);
        }),
        i
      );
    }
    return l(r.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function De(t, e) {
    var n,
      i,
      r = S.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
    return i && S.extend(!0, t, i), t;
  }
  (Ie.href = me.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: me.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          me.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": je,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(t, e) {
        return e ? De(De(t, S.ajaxSettings), e) : De(S.ajaxSettings, t);
      },
      ajaxPrefilter: Ne(Ae),
      ajaxTransport: Ne(Le),
      ajax: function(t, e) {
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var c,
          f,
          d,
          n,
          h,
          i,
          p,
          m,
          r,
          o,
          g = S.ajaxSetup({}, e),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          b = S.Deferred(),
          x = S.Callbacks("once memory"),
          w = g.statusCode || {},
          s = {},
          a = {},
          u = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function(t) {
              var e;
              if (p) {
                if (!n)
                  for (n = {}; (e = ke.exec(d)); ) n[e[1].toLowerCase()] = e[2];
                e = n[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function() {
              return p ? d : null;
            },
            setRequestHeader: function(t, e) {
              return (
                null == p &&
                  ((t = a[t.toLowerCase()] = a[t.toLowerCase()] || t),
                  (s[t] = e)),
                this
              );
            },
            overrideMimeType: function(t) {
              return null == p && (g.mimeType = t), this;
            },
            statusCode: function(t) {
              var e;
              if (t)
                if (p) C.always(t[C.status]);
                else for (e in t) w[e] = [w[e], t[e]];
              return this;
            },
            abort: function(t) {
              var e = t || u;
              return c && c.abort(e), l(0, e), this;
            }
          };
        if (
          (b.promise(C),
          (g.url = ((t || g.url || me.href) + "").replace(
            Oe,
            me.protocol + "//"
          )),
          (g.type = e.method || e.type || g.method || g.type),
          (g.dataTypes = (g.dataType || "*").toLowerCase().match(z) || [""]),
          null == g.crossDomain)
        ) {
          i = T.createElement("a");
          try {
            (i.href = g.url),
              (i.href = i.href),
              (g.crossDomain =
                Ie.protocol + "//" + Ie.host != i.protocol + "//" + i.host);
          } catch (t) {
            g.crossDomain = !0;
          }
        }
        if (
          (g.data &&
            g.processData &&
            "string" != typeof g.data &&
            (g.data = S.param(g.data, g.traditional)),
          Me(Ae, g, e, C),
          p)
        )
          return C;
        for (r in ((m = S.event && g.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !_e.test(g.type)),
        (f = g.url.replace(Te, "")),
        g.hasContent
          ? g.data &&
            g.processData &&
            0 ===
              (g.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (g.data = g.data.replace(Ee, "+"))
          : ((o = g.url.slice(f.length)),
            g.data && ((f += (ve.test(f) ? "&" : "?") + g.data), delete g.data),
            !1 === g.cache &&
              ((f = f.replace(Se, "$1")),
              (o = (ve.test(f) ? "&" : "?") + "_=" + ge++ + o)),
            (g.url = f + o)),
        g.ifModified &&
          (S.lastModified[f] &&
            C.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && C.setRequestHeader("If-None-Match", S.etag[f])),
        ((g.data && g.hasContent && !1 !== g.contentType) || e.contentType) &&
          C.setRequestHeader("Content-Type", g.contentType),
        C.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ("*" !== g.dataTypes[0] ? ", " + je + "; q=0.01" : "")
            : g.accepts["*"]
        ),
        g.headers))
          C.setRequestHeader(r, g.headers[r]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, C, g) || p))
          return C.abort();
        if (
          ((u = "abort"),
          x.add(g.complete),
          C.done(g.success),
          C.fail(g.error),
          (c = Me(Le, g, e, C)))
        ) {
          if (((C.readyState = 1), m && y.trigger("ajaxSend", [C, g]), p))
            return C;
          g.async &&
            0 < g.timeout &&
            (h = E.setTimeout(function() {
              C.abort("timeout");
            }, g.timeout));
          try {
            (p = !1), c.send(s, l);
          } catch (t) {
            if (p) throw t;
            l(-1, t);
          }
        } else l(-1, "No Transport");
        function l(t, e, n, i) {
          var r,
            o,
            s,
            a,
            u,
            l = e;
          p ||
            ((p = !0),
            h && E.clearTimeout(h),
            (c = void 0),
            (d = i || ""),
            (C.readyState = 0 < t ? 4 : 0),
            (r = (200 <= t && t < 300) || 304 === t),
            n &&
              (a = (function(t, e, n) {
                for (
                  var i, r, o, s, a = t.contents, u = t.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === i &&
                      (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      u.unshift(r);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (r in n) {
                    if (!u[0] || t.converters[r + " " + u[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(g, C, n)),
            (a = (function(t, e, n, i) {
              var r,
                o,
                s,
                a,
                u,
                l = {},
                c = t.dataTypes.slice();
              if (c[1])
                for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
              for (o = c.shift(); o; )
                if (
                  (t.responseFields[o] && (n[t.responseFields[o]] = e),
                  !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                      for (r in l)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[r])
                            : !0 !== l[r] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && t.throws) e = s(e);
                      else
                        try {
                          e = s(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: s
                              ? t
                              : "No conversion from " + u + " to " + o
                          };
                        }
                  }
              return { state: "success", data: e };
            })(g, a, C, r)),
            r
              ? (g.ifModified &&
                  ((u = C.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = C.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === t || "HEAD" === g.type
                  ? (l = "nocontent")
                  : 304 === t
                  ? (l = "notmodified")
                  : ((l = a.state), (o = a.data), (r = !(s = a.error))))
              : ((s = l), (!t && l) || ((l = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (e || l) + ""),
            r ? b.resolveWith(v, [o, l, C]) : b.rejectWith(v, [C, l, s]),
            C.statusCode(w),
            (w = void 0),
            m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [C, g, r ? o : s]),
            x.fireWith(v, [C, l]),
            m &&
              (y.trigger("ajaxComplete", [C, g]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function(t, e, n) {
        return S.get(t, e, n, "json");
      },
      getScript: function(t, e) {
        return S.get(t, void 0, e, "script");
      }
    }),
    S.each(["get", "post"], function(t, r) {
      S[r] = function(t, e, n, i) {
        return (
          S.isFunction(e) && ((i = i || n), (n = e), (e = void 0)),
          S.ajax(
            S.extend(
              { url: t, type: r, dataType: i, data: e, success: n },
              S.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (S._evalUrl = function(t) {
      return S.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    S.fn.extend({
      wrapAll: function(t) {
        var e;
        return (
          this[0] &&
            (S.isFunction(t) && (t = t.call(this[0])),
            (e = S(t, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function() {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(n) {
        return S.isFunction(n)
          ? this.each(function(t) {
              S(this).wrapInner(n.call(this, t));
            })
          : this.each(function() {
              var t = S(this),
                e = t.contents();
              e.length ? e.wrapAll(n) : t.append(n);
            });
      },
      wrap: function(e) {
        var n = S.isFunction(e);
        return this.each(function(t) {
          S(this).wrapAll(n ? e.call(this, t) : e);
        });
      },
      unwrap: function(t) {
        return (
          this.parent(t)
            .not("body")
            .each(function() {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (S.expr.pseudos.hidden = function(t) {
      return !S.expr.pseudos.visible(t);
    }),
    (S.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function() {
      try {
        return new E.XMLHttpRequest();
      } catch (t) {}
    });
  var ze = { 0: 200, 1223: 204 },
    Pe = S.ajaxSettings.xhr();
  (g.cors = !!Pe && "withCredentials" in Pe),
    (g.ajax = Pe = !!Pe),
    S.ajaxTransport(function(r) {
      var o, s;
      if (g.cors || (Pe && !r.crossDomain))
        return {
          send: function(t, e) {
            var n,
              i = r.xhr();
            if (
              (i.open(r.type, r.url, r.async, r.username, r.password),
              r.xhrFields)
            )
              for (n in r.xhrFields) i[n] = r.xhrFields[n];
            for (n in (r.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(r.mimeType),
            r.crossDomain ||
              t["X-Requested-With"] ||
              (t["X-Requested-With"] = "XMLHttpRequest"),
            t))
              i.setRequestHeader(n, t[n]);
            (o = function(t) {
              return function() {
                o &&
                  ((o = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null),
                  "abort" === t
                    ? i.abort()
                    : "error" === t
                    ? "number" != typeof i.status
                      ? e(0, "error")
                      : e(i.status, i.statusText)
                    : e(
                        ze[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = o()),
              (s = i.onerror = o("error")),
              void 0 !== i.onabort
                ? (i.onabort = s)
                : (i.onreadystatechange = function() {
                    4 === i.readyState &&
                      E.setTimeout(function() {
                        o && s();
                      });
                  }),
              (o = o("abort"));
            try {
              i.send((r.hasContent && r.data) || null);
            } catch (t) {
              if (o) throw t;
            }
          },
          abort: function() {
            o && o();
          }
        };
    }),
    S.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(t) {
          return S.globalEval(t), t;
        }
      }
    }),
    S.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    S.ajaxTransport("script", function(n) {
      var i, r;
      if (n.crossDomain)
        return {
          send: function(t, e) {
            (i = S("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (r = function(t) {
                  i.remove(),
                    (r = null),
                    t && e("error" === t.type ? 404 : 200, t.type);
                })
              )),
              T.head.appendChild(i[0]);
          },
          abort: function() {
            r && r();
          }
        };
    });
  var qe,
    Fe = [],
    Re = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var t = Fe.pop() || S.expando + "_" + ge++;
      return (this[t] = !0), t;
    }
  }),
    S.ajaxPrefilter("json jsonp", function(t, e, n) {
      var i,
        r,
        o,
        s =
          !1 !== t.jsonp &&
          (Re.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Re.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback = S.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Re, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (ve.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function() {
            return o || S.error(i + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = E[i]),
          (E[i] = function() {
            o = arguments;
          }),
          n.always(function() {
            void 0 === r ? S(E).removeProp(i) : (E[i] = r),
              t[i] && ((t.jsonpCallback = e.jsonpCallback), Fe.push(i)),
              o && S.isFunction(r) && r(o[0]),
              (o = r = void 0);
          }),
          "script"
        );
    }),
    (g.createHTMLDocument = (((qe = T.implementation.createHTMLDocument("")
      .body).innerHTML = "<form></form><form></form>"),
    2 === qe.childNodes.length)),
    (S.parseHTML = function(t, e, n) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((n = e), (e = !1)),
          e ||
            (g.createHTMLDocument
              ? (((i = (e = T.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = T.location.href),
                e.head.appendChild(i))
              : (e = T)),
          (o = !n && []),
          (r = O.exec(t))
            ? [e.createElement(r[1])]
            : ((r = pt([t], e, o)),
              o && o.length && S(o).remove(),
              S.merge([], r.childNodes)));
      var i, r, o;
    }),
    (S.fn.load = function(t, e, n) {
      var i,
        r,
        o,
        s = this,
        a = t.indexOf(" ");
      return (
        -1 < a && ((i = fe(t.slice(a))), (t = t.slice(0, a))),
        S.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (r = "POST"),
        0 < s.length &&
          S.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
            .done(function(t) {
              (o = arguments),
                s.html(
                  i
                    ? S("<div>")
                        .append(S.parseHTML(t))
                        .find(i)
                    : t
                );
            })
            .always(
              n &&
                function(t, e) {
                  s.each(function() {
                    n.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(t, e) {
        S.fn[e] = function(t) {
          return this.on(e, t);
        };
      }
    ),
    (S.expr.pseudos.animated = function(e) {
      return S.grep(S.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function(t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          u,
          l = S.css(t, "position"),
          c = S(t),
          f = {};
        "static" === l && (t.style.position = "relative"),
          (a = c.offset()),
          (o = S.css(t, "top")),
          (u = S.css(t, "left")),
          (r =
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((s = (i = c.position()).top), i.left)
              : ((s = parseFloat(o) || 0), parseFloat(u) || 0)),
          S.isFunction(e) && (e = e.call(t, n, S.extend({}, a))),
          null != e.top && (f.top = e.top - a.top + s),
          null != e.left && (f.left = e.left - a.left + r),
          "using" in e ? e.using.call(t, f) : c.css(f);
      }
    }),
    S.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                S.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i,
          r,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? ((i = o.getBoundingClientRect()),
              (n = (t = o.ownerDocument).documentElement),
              (r = t.defaultView),
              {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
              })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var t,
            e,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === S.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                _(t[0], "html") || (i = t.offset()),
                (i = {
                  top: i.top + S.css(t[0], "borderTopWidth", !0),
                  left: i.left + S.css(t[0], "borderLeftWidth", !0)
                })),
            {
              top: e.top - i.top - S.css(n, "marginTop", !0),
              left: e.left - i.left - S.css(n, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var t = this.offsetParent;
            t && "static" === S.css(t, "position");

          )
            t = t.offsetParent;
          return t || mt;
        });
      }
    }),
    S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      e,
      r
    ) {
      var o = "pageYOffset" === r;
      S.fn[e] = function(t) {
        return W(
          this,
          function(t, e, n) {
            var i;
            return (
              S.isWindow(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
              void 0 === n
                ? i
                  ? i[r]
                  : t[e]
                : void (i
                    ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset)
                    : (t[e] = n))
            );
          },
          e,
          t,
          arguments.length
        );
      };
    }),
    S.each(["top", "left"], function(t, n) {
      S.cssHooks[n] = qt(g.pixelPosition, function(t, e) {
        if (e)
          return (e = Pt(t, n)), Dt.test(e) ? S(t).position()[n] + "px" : e;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function(s, a) {
      S.each({ padding: "inner" + s, content: a, "": "outer" + s }, function(
        i,
        o
      ) {
        S.fn[o] = function(t, e) {
          var n = arguments.length && (i || "boolean" != typeof t),
            r = i || (!0 === t || !0 === e ? "margin" : "border");
          return W(
            this,
            function(t, e, n) {
              var i;
              return S.isWindow(t)
                ? 0 === o.indexOf("outer")
                  ? t["inner" + s]
                  : t.document.documentElement["client" + s]
                : 9 === t.nodeType
                ? ((i = t.documentElement),
                  Math.max(
                    t.body["scroll" + s],
                    i["scroll" + s],
                    t.body["offset" + s],
                    i["offset" + s],
                    i["client" + s]
                  ))
                : void 0 === n
                ? S.css(t, e, r)
                : S.style(t, e, n, r);
            },
            a,
            n ? t : void 0,
            n
          );
        };
      });
    }),
    S.fn.extend({
      bind: function(t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function(t, e) {
        return this.off(t, null, e);
      },
      delegate: function(t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function(t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      }
    }),
    (S.holdReady = function(t) {
      t ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = _),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return S;
      });
  var He = E.jQuery,
    Be = E.$;
  return (
    (S.noConflict = function(t) {
      return E.$ === S && (E.$ = Be), t && E.jQuery === S && (E.jQuery = He), S;
    }),
    t || (E.jQuery = E.$ = S),
    S
  );
}),
  (function(t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function(c) {
    c.extend(c.fn, {
      validate: function(t) {
        if (this.length) {
          var i = c.data(this[0], "validator");
          return (
            i ||
            (this.attr("novalidate", "novalidate"),
            (i = new c.validator(t, this[0])),
            c.data(this[0], "validator", i),
            i.settings.onsubmit &&
              (this.on("click.validate", ":submit", function(t) {
                (i.submitButton = t.currentTarget),
                  c(this).hasClass("cancel") && (i.cancelSubmit = !0),
                  void 0 !== c(this).attr("formnovalidate") &&
                    (i.cancelSubmit = !0);
              }),
              this.on("submit.validate", function(n) {
                function t() {
                  var t, e;
                  return (
                    i.submitButton &&
                      (i.settings.submitHandler || i.formSubmitted) &&
                      (t = c("<input type='hidden'/>")
                        .attr("name", i.submitButton.name)
                        .val(c(i.submitButton).val())
                        .appendTo(i.currentForm)),
                    !i.settings.submitHandler ||
                      ((e = i.settings.submitHandler.call(i, i.currentForm, n)),
                      t && t.remove(),
                      void 0 !== e && e)
                  );
                }
                return (
                  i.settings.debug && n.preventDefault(),
                  i.cancelSubmit
                    ? ((i.cancelSubmit = !1), t())
                    : i.form()
                    ? i.pendingRequest
                      ? !(i.formSubmitted = !0)
                      : t()
                    : (i.focusInvalid(), !1)
                );
              })),
            i)
          );
        }
        t &&
          t.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function() {
        var t, e, n;
        return (
          c(this[0]).is("form")
            ? (t = this.validate().form())
            : ((n = []),
              (t = !0),
              (e = c(this[0].form).validate()),
              this.each(function() {
                (t = e.element(this) && t) || (n = n.concat(e.errorList));
              }),
              (e.errorList = n)),
          t
        );
      },
      rules: function(t, e) {
        var n,
          i,
          r,
          o,
          s,
          a,
          u = this[0];
        if (
          null != u &&
          (!u.form &&
            u.hasAttribute("contenteditable") &&
            ((u.form = this.closest("form")[0]), (u.name = this.attr("name"))),
          null != u.form)
        ) {
          if (t)
            switch (
              ((i = (n = c.data(u.form, "validator").settings).rules),
              (r = c.validator.staticRules(u)),
              t)
            ) {
              case "add":
                c.extend(r, c.validator.normalizeRule(e)),
                  delete r.messages,
                  (i[u.name] = r),
                  e.messages &&
                    (n.messages[u.name] = c.extend(
                      n.messages[u.name],
                      e.messages
                    ));
                break;
              case "remove":
                return e
                  ? ((a = {}),
                    c.each(e.split(/\s/), function(t, e) {
                      (a[e] = r[e]), delete r[e];
                    }),
                    a)
                  : (delete i[u.name], r);
            }
          return (
            (o = c.validator.normalizeRules(
              c.extend(
                {},
                c.validator.classRules(u),
                c.validator.attributeRules(u),
                c.validator.dataRules(u),
                c.validator.staticRules(u)
              ),
              u
            )).required &&
              ((s = o.required),
              delete o.required,
              (o = c.extend({ required: s }, o))),
            o.remote &&
              ((s = o.remote),
              delete o.remote,
              (o = c.extend(o, { remote: s }))),
            o
          );
        }
      }
    }),
      c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(t) {
          return !c.trim("" + c(t).val());
        },
        filled: function(t) {
          var e = c(t).val();
          return null !== e && !!c.trim("" + e);
        },
        unchecked: function(t) {
          return !c(t).prop("checked");
        }
      }),
      (c.validator = function(t, e) {
        (this.settings = c.extend(!0, {}, c.validator.defaults, t)),
          (this.currentForm = e),
          this.init();
      }),
      (c.validator.format = function(n, t) {
        return 1 === arguments.length
          ? function() {
              var t = c.makeArray(arguments);
              return t.unshift(n), c.validator.format.apply(this, t);
            }
          : (void 0 === t ||
              (2 < arguments.length &&
                t.constructor !== Array &&
                (t = c.makeArray(arguments).slice(1)),
              t.constructor !== Array && (t = [t]),
              c.each(t, function(t, e) {
                n = n.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                  return e;
                });
              })),
            n);
      }),
      c.extend(c.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: c([]),
          errorLabelContainer: c([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function(t) {
            (this.lastActive = t),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    t,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(t)));
          },
          onfocusout: function(t) {
            this.checkable(t) ||
              (!(t.name in this.submitted) && this.optional(t)) ||
              this.element(t);
          },
          onkeyup: function(t, e) {
            (9 === e.which && "" === this.elementValue(t)) ||
              -1 !==
                c.inArray(e.keyCode, [
                  16,
                  17,
                  18,
                  20,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  45,
                  144,
                  225
                ]) ||
              ((t.name in this.submitted || t.name in this.invalid) &&
                this.element(t));
          },
          onclick: function(t) {
            t.name in this.submitted
              ? this.element(t)
              : t.parentNode.name in this.submitted &&
                this.element(t.parentNode);
          },
          highlight: function(t, e, n) {
            "radio" === t.type
              ? this.findByName(t.name)
                  .addClass(e)
                  .removeClass(n)
              : c(t)
                  .addClass(e)
                  .removeClass(n);
          },
          unhighlight: function(t, e, n) {
            "radio" === t.type
              ? this.findByName(t.name)
                  .removeClass(e)
                  .addClass(n)
              : c(t)
                  .removeClass(e)
                  .addClass(n);
          }
        },
        setDefaults: function(t) {
          c.extend(c.validator.defaults, t);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: c.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: c.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: c.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: c.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: c.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: c.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
          init: function() {
            (this.labelContainer = c(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                c(this.currentForm)),
              (this.containers = c(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var n,
              i = (this.groups = {});
            function t(t) {
              !this.form &&
                this.hasAttribute("contenteditable") &&
                ((this.form = c(this).closest("form")[0]),
                (this.name = c(this).attr("name")));
              var e = c.data(this.form, "validator"),
                n = "on" + t.type.replace(/^validate/, ""),
                i = e.settings;
              i[n] && !c(this).is(i.ignore) && i[n].call(e, this, t);
            }
            c.each(this.settings.groups, function(n, t) {
              "string" == typeof t && (t = t.split(/\s/)),
                c.each(t, function(t, e) {
                  i[e] = n;
                });
            }),
              (n = this.settings.rules),
              c.each(n, function(t, e) {
                n[t] = c.validator.normalizeRule(e);
              }),
              c(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                  t
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  t
                ),
              this.settings.invalidHandler &&
                c(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                );
          },
          form: function() {
            return (
              this.checkForm(),
              c.extend(this.submitted, this.errorMap),
              (this.invalid = c.extend({}, this.errorMap)),
              this.valid() ||
                c(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function() {
            this.prepareForm();
            for (
              var t = 0, e = (this.currentElements = this.elements());
              e[t];
              t++
            )
              this.check(e[t]);
            return this.valid();
          },
          element: function(t) {
            var e,
              n,
              i = this.clean(t),
              r = this.validationTargetFor(i),
              o = this,
              s = !0;
            return (
              void 0 === r
                ? delete this.invalid[i.name]
                : (this.prepareElement(r),
                  (this.currentElements = c(r)),
                  (n = this.groups[r.name]) &&
                    c.each(this.groups, function(t, e) {
                      e === n &&
                        t !== r.name &&
                        (i = o.validationTargetFor(o.clean(o.findByName(t)))) &&
                        i.name in o.invalid &&
                        (o.currentElements.push(i), (s = o.check(i) && s));
                    }),
                  (e = !1 !== this.check(r)),
                  (s = s && e),
                  (this.invalid[r.name] = !e),
                  this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  c(t).attr("aria-invalid", !e)),
              s
            );
          },
          showErrors: function(e) {
            if (e) {
              var n = this;
              c.extend(this.errorMap, e),
                (this.errorList = c.map(this.errorMap, function(t, e) {
                  return { message: t, element: n.findByName(e)[0] };
                })),
                (this.successList = c.grep(this.successList, function(t) {
                  return !(t.name in e);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function() {
            c.fn.resetForm && c(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var t = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
            this.resetElements(t);
          },
          resetElements: function(t) {
            var e;
            if (this.settings.unhighlight)
              for (e = 0; t[e]; e++)
                this.settings.unhighlight.call(
                  this,
                  t[e],
                  this.settings.errorClass,
                  ""
                ),
                  this.findByName(t[e].name).removeClass(
                    this.settings.validClass
                  );
            else
              t.removeClass(this.settings.errorClass).removeClass(
                this.settings.validClass
              );
          },
          numberOfInvalids: function() {
            return this.objectLength(this.invalid);
          },
          objectLength: function(t) {
            var e,
              n = 0;
            for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && n++;
            return n;
          },
          hideErrors: function() {
            this.hideThese(this.toHide);
          },
          hideThese: function(t) {
            t.not(this.containers).text(""), this.addWrapper(t).hide();
          },
          valid: function() {
            return 0 === this.size();
          },
          size: function() {
            return this.errorList.length;
          },
          focusInvalid: function() {
            if (this.settings.focusInvalid)
              try {
                c(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch (t) {}
          },
          findLastActive: function() {
            var e = this.lastActive;
            return (
              e &&
              1 ===
                c.grep(this.errorList, function(t) {
                  return t.element.name === e.name;
                }).length &&
              e
            );
          },
          elements: function() {
            var e = this,
              n = {};
            return c(this.currentForm)
              .find("input, select, textarea, [contenteditable]")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function() {
                var t = this.name || c(this).attr("name");
                return (
                  !t &&
                    e.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  this.hasAttribute("contenteditable") &&
                    ((this.form = c(this).closest("form")[0]), (this.name = t)),
                  !(t in n || !e.objectLength(c(this).rules())) && (n[t] = !0)
                );
              });
          },
          clean: function(t) {
            return c(t)[0];
          },
          errors: function() {
            var t = this.settings.errorClass.split(" ").join(".");
            return c(this.settings.errorElement + "." + t, this.errorContext);
          },
          resetInternals: function() {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = c([])),
              (this.toHide = c([]));
          },
          reset: function() {
            this.resetInternals(), (this.currentElements = c([]));
          },
          prepareForm: function() {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function(t) {
            this.reset(), (this.toHide = this.errorsFor(t));
          },
          elementValue: function(t) {
            var e,
              n,
              i = c(t),
              r = t.type;
            return "radio" === r || "checkbox" === r
              ? this.findByName(t.name)
                  .filter(":checked")
                  .val()
              : "number" === r && void 0 !== t.validity
              ? t.validity.badInput
                ? "NaN"
                : i.val()
              : ((e = t.hasAttribute("contenteditable") ? i.text() : i.val()),
                "file" === r
                  ? "C:\\fakepath\\" === e.substr(0, 12)
                    ? e.substr(12)
                    : 0 <= (n = e.lastIndexOf("/"))
                    ? e.substr(n + 1)
                    : 0 <= (n = e.lastIndexOf("\\"))
                    ? e.substr(n + 1)
                    : e
                  : "string" == typeof e
                  ? e.replace(/\r/g, "")
                  : e);
          },
          check: function(e) {
            e = this.validationTargetFor(this.clean(e));
            var t,
              n,
              i,
              r,
              o = c(e).rules(),
              s = c.map(o, function(t, e) {
                return e;
              }).length,
              a = !1,
              u = this.elementValue(e);
            if (
              ("function" == typeof o.normalizer
                ? (r = o.normalizer)
                : "function" == typeof this.settings.normalizer &&
                  (r = this.settings.normalizer),
              r)
            ) {
              if ("string" != typeof (u = r.call(e, u)))
                throw new TypeError(
                  "The normalizer should return a string value."
                );
              delete o.normalizer;
            }
            for (n in o) {
              i = { method: n, parameters: o[n] };
              try {
                if (
                  "dependency-mismatch" ===
                    (t = c.validator.methods[n].call(
                      this,
                      u,
                      e,
                      i.parameters
                    )) &&
                  1 === s
                ) {
                  a = !0;
                  continue;
                }
                if (((a = !1), "pending" === t))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(e)
                  ));
                if (!t) return this.formatAndAdd(e, i), !1;
              } catch (t) {
                throw (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      e.id +
                      ", check the '" +
                      i.method +
                      "' method.",
                    t
                  ),
                t instanceof TypeError &&
                  (t.message +=
                    ".  Exception occurred when checking element " +
                    e.id +
                    ", check the '" +
                    i.method +
                    "' method."),
                t);
              }
            }
            if (!a) return this.objectLength(o) && this.successList.push(e), !0;
          },
          customDataMessage: function(t, e) {
            return (
              c(t).data(
                "msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
              ) || c(t).data("msg")
            );
          },
          customMessage: function(t, e) {
            var n = this.settings.messages[t];
            return n && (n.constructor === String ? n : n[e]);
          },
          findDefined: function() {
            for (var t = 0; t < arguments.length; t++)
              if (void 0 !== arguments[t]) return arguments[t];
          },
          defaultMessage: function(t, e) {
            "string" == typeof e && (e = { method: e });
            var n = this.findDefined(
                this.customMessage(t.name, e.method),
                this.customDataMessage(t, e.method),
                (!this.settings.ignoreTitle && t.title) || void 0,
                c.validator.messages[e.method],
                "<strong>Warning: No message defined for " +
                  t.name +
                  "</strong>"
              ),
              i = /\$?\{(\d+)\}/g;
            return (
              "function" == typeof n
                ? (n = n.call(this, e.parameters, t))
                : i.test(n) &&
                  (n = c.validator.format(n.replace(i, "{$1}"), e.parameters)),
              n
            );
          },
          formatAndAdd: function(t, e) {
            var n = this.defaultMessage(t, e);
            this.errorList.push({ message: n, element: t, method: e.method }),
              (this.errorMap[t.name] = n),
              (this.submitted[t.name] = n);
          },
          addWrapper: function(t) {
            return (
              this.settings.wrapper &&
                (t = t.add(t.parent(this.settings.wrapper))),
              t
            );
          },
          defaultShowErrors: function() {
            var t, e, n;
            for (t = 0; this.errorList[t]; t++)
              (n = this.errorList[t]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    n.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(n.element, n.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (t = 0; this.successList[t]; t++)
                this.showLabel(this.successList[t]);
            if (this.settings.unhighlight)
              for (t = 0, e = this.validElements(); e[t]; t++)
                this.settings.unhighlight.call(
                  this,
                  e[t],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function() {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function() {
            return c(this.errorList).map(function() {
              return this.element;
            });
          },
          showLabel: function(t, e) {
            var n,
              i,
              r,
              o,
              s = this.errorsFor(t),
              a = this.idOrName(t),
              u = c(t).attr("aria-describedby");
            s.length
              ? (s
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                s.html(e))
              : ((n = s = c("<" + this.settings.errorElement + ">")
                  .attr("id", a + "-error")
                  .addClass(this.settings.errorClass)
                  .html(e || "")),
                this.settings.wrapper &&
                  (n = s
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(n)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, n, c(t))
                  : n.insertAfter(t),
                s.is("label")
                  ? s.attr("for", a)
                  : 0 ===
                      s.parents("label[for='" + this.escapeCssMeta(a) + "']")
                        .length &&
                    ((r = s.attr("id")),
                    u
                      ? u.match(
                          new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")
                        ) || (u += " " + r)
                      : (u = r),
                    c(t).attr("aria-describedby", u),
                    (i = this.groups[t.name]) &&
                      ((o = this),
                      c.each(o.groups, function(t, e) {
                        e === i &&
                          c(
                            "[name='" + o.escapeCssMeta(t) + "']",
                            o.currentForm
                          ).attr("aria-describedby", s.attr("id"));
                      })))),
              !e &&
                this.settings.success &&
                (s.text(""),
                "string" == typeof this.settings.success
                  ? s.addClass(this.settings.success)
                  : this.settings.success(s, t)),
              (this.toShow = this.toShow.add(s));
          },
          errorsFor: function(t) {
            var e = this.escapeCssMeta(this.idOrName(t)),
              n = c(t).attr("aria-describedby"),
              i = "label[for='" + e + "'], label[for='" + e + "'] *";
            return (
              n &&
                (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
              this.errors().filter(i)
            );
          },
          escapeCssMeta: function(t) {
            return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function(t) {
            return (
              this.groups[t.name] ||
              (this.checkable(t) ? t.name : t.id || t.name)
            );
          },
          validationTargetFor: function(t) {
            return (
              this.checkable(t) && (t = this.findByName(t.name)),
              c(t).not(this.settings.ignore)[0]
            );
          },
          checkable: function(t) {
            return /radio|checkbox/i.test(t.type);
          },
          findByName: function(t) {
            return c(this.currentForm).find(
              "[name='" + this.escapeCssMeta(t) + "']"
            );
          },
          getLength: function(t, e) {
            switch (e.nodeName.toLowerCase()) {
              case "select":
                return c("option:selected", e).length;
              case "input":
                if (this.checkable(e))
                  return this.findByName(e.name).filter(":checked").length;
            }
            return t.length;
          },
          depend: function(t, e) {
            return (
              !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            );
          },
          dependTypes: {
            boolean: function(t) {
              return t;
            },
            string: function(t, e) {
              return !!c(t, e.form).length;
            },
            function: function(t, e) {
              return t(e);
            }
          },
          optional: function(t) {
            var e = this.elementValue(t);
            return (
              !c.validator.methods.required.call(this, e, t) &&
              "dependency-mismatch"
            );
          },
          startRequest: function(t) {
            this.pending[t.name] ||
              (this.pendingRequest++,
              c(t).addClass(this.settings.pendingClass),
              (this.pending[t.name] = !0));
          },
          stopRequest: function(t, e) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[t.name],
              c(t).removeClass(this.settings.pendingClass),
              e &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (c(this.currentForm).submit(),
                  this.submitButton &&
                    c(
                      "input:hidden[name='" + this.submitButton.name + "']",
                      this.currentForm
                    ).remove(),
                  (this.formSubmitted = !1))
                : !e &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (c(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function(t, e) {
            return (
              (e = ("string" == typeof e && e) || "remote"),
              c.data(t, "previousValue") ||
                c.data(t, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(t, { method: e })
                })
            );
          },
          destroy: function() {
            this.resetForm(),
              c(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur");
          }
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 }
        },
        addClassRules: function(t, e) {
          t.constructor === String
            ? (this.classRuleSettings[t] = e)
            : c.extend(this.classRuleSettings, t);
        },
        classRules: function(t) {
          var e = {},
            n = c(t).attr("class");
          return (
            n &&
              c.each(n.split(" "), function() {
                this in c.validator.classRuleSettings &&
                  c.extend(e, c.validator.classRuleSettings[this]);
              }),
            e
          );
        },
        normalizeAttributeRule: function(t, e, n, i) {
          /min|max|step/.test(n) &&
            (null === e || /number|range|text/.test(e)) &&
            ((i = Number(i)), isNaN(i) && (i = void 0)),
            i || 0 === i ? (t[n] = i) : e === n && "range" !== e && (t[n] = !0);
        },
        attributeRules: function(t) {
          var e,
            n,
            i = {},
            r = c(t),
            o = t.getAttribute("type");
          for (e in c.validator.methods)
            (n =
              "required" === e
                ? ("" === (n = t.getAttribute(e)) && (n = !0), !!n)
                : r.attr(e)),
              this.normalizeAttributeRule(i, o, e, n);
          return (
            i.maxlength &&
              /-1|2147483647|524288/.test(i.maxlength) &&
              delete i.maxlength,
            i
          );
        },
        dataRules: function(t) {
          var e,
            n,
            i = {},
            r = c(t),
            o = t.getAttribute("type");
          for (e in c.validator.methods)
            (n = r.data(
              "rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(i, o, e, n);
          return i;
        },
        staticRules: function(t) {
          var e = {},
            n = c.data(t.form, "validator");
          return (
            n.settings.rules &&
              (e = c.validator.normalizeRule(n.settings.rules[t.name]) || {}),
            e
          );
        },
        normalizeRules: function(i, r) {
          return (
            c.each(i, function(t, e) {
              if (!1 !== e) {
                if (e.param || e.depends) {
                  var n = !0;
                  switch (typeof e.depends) {
                    case "string":
                      n = !!c(e.depends, r.form).length;
                      break;
                    case "function":
                      n = e.depends.call(r, r);
                  }
                  n
                    ? (i[t] = void 0 === e.param || e.param)
                    : (c.data(r.form, "validator").resetElements(c(r)),
                      delete i[t]);
                }
              } else delete i[t];
            }),
            c.each(i, function(t, e) {
              i[t] = c.isFunction(e) && "normalizer" !== t ? e(r) : e;
            }),
            c.each(["minlength", "maxlength"], function() {
              i[this] && (i[this] = Number(i[this]));
            }),
            c.each(["rangelength", "range"], function() {
              var t;
              i[this] &&
                (c.isArray(i[this])
                  ? (i[this] = [Number(i[this][0]), Number(i[this][1])])
                  : "string" == typeof i[this] &&
                    ((t = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (i[this] = [Number(t[0]), Number(t[1])])));
            }),
            c.validator.autoCreateRanges &&
              (null != i.min &&
                null != i.max &&
                ((i.range = [i.min, i.max]), delete i.min, delete i.max),
              null != i.minlength &&
                null != i.maxlength &&
                ((i.rangelength = [i.minlength, i.maxlength]),
                delete i.minlength,
                delete i.maxlength)),
            i
          );
        },
        normalizeRule: function(t) {
          if ("string" == typeof t) {
            var e = {};
            c.each(t.split(/\s/), function() {
              e[this] = !0;
            }),
              (t = e);
          }
          return t;
        },
        addMethod: function(t, e, n) {
          (c.validator.methods[t] = e),
            (c.validator.messages[t] =
              void 0 !== n ? n : c.validator.messages[t]),
            e.length < 3 &&
              c.validator.addClassRules(t, c.validator.normalizeRule(t));
        },
        methods: {
          required: function(t, e, n) {
            if (!this.depend(n, e)) return "dependency-mismatch";
            if ("select" !== e.nodeName.toLowerCase())
              return this.checkable(e)
                ? 0 < this.getLength(t, e)
                : 0 < t.length;
            var i = c(e).val();
            return i && 0 < i.length;
          },
          email: function(t, e) {
            return (
              this.optional(e) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                t
              )
            );
          },
          url: function(t, e) {
            return (
              this.optional(e) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                t
              )
            );
          },
          date: function(t, e) {
            return (
              this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            );
          },
          dateISO: function(t, e) {
            return (
              this.optional(e) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                t
              )
            );
          },
          number: function(t, e) {
            return (
              this.optional(e) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            );
          },
          digits: function(t, e) {
            return this.optional(e) || /^\d+$/.test(t);
          },
          minlength: function(t, e, n) {
            var i = c.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || n <= i;
          },
          maxlength: function(t, e, n) {
            var i = c.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || i <= n;
          },
          rangelength: function(t, e, n) {
            var i = c.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || (i >= n[0] && i <= n[1]);
          },
          min: function(t, e, n) {
            return this.optional(e) || n <= t;
          },
          max: function(t, e, n) {
            return this.optional(e) || t <= n;
          },
          range: function(t, e, n) {
            return this.optional(e) || (t >= n[0] && t <= n[1]);
          },
          step: function(t, e, n) {
            var i,
              r = c(e).attr("type"),
              o = "Step attribute on input type " + r + " is not supported.",
              s = new RegExp("\\b" + r + "\\b"),
              a = function(t) {
                var e = ("" + t).match(/(?:\.(\d+))?$/);
                return e && e[1] ? e[1].length : 0;
              },
              u = function(t) {
                return Math.round(t * Math.pow(10, i));
              },
              l = !0;
            if (r && !s.test(["text", "number", "range"].join()))
              throw new Error(o);
            return (
              (i = a(n)),
              (a(t) > i || u(t) % u(n) != 0) && (l = !1),
              this.optional(e) || l
            );
          },
          equalTo: function(t, e, n) {
            var i = c(n);
            return (
              this.settings.onfocusout &&
                i.not(".validate-equalTo-blur").length &&
                i
                  .addClass("validate-equalTo-blur")
                  .on("blur.validate-equalTo", function() {
                    c(e).valid();
                  }),
              t === i.val()
            );
          },
          remote: function(o, s, t, a) {
            if (this.optional(s)) return "dependency-mismatch";
            a = ("string" == typeof a && a) || "remote";
            var u,
              e,
              n,
              l = this.previousValue(s, a);
            return (
              this.settings.messages[s.name] ||
                (this.settings.messages[s.name] = {}),
              (l.originalMessage =
                l.originalMessage || this.settings.messages[s.name][a]),
              (this.settings.messages[s.name][a] = l.message),
              (t = ("string" == typeof t && { url: t }) || t),
              (n = c.param(c.extend({ data: o }, t.data))),
              l.old === n
                ? l.valid
                : ((l.old = n),
                  (u = this).startRequest(s),
                  ((e = {})[s.name] = o),
                  c.ajax(
                    c.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + s.name,
                        dataType: "json",
                        data: e,
                        context: u.currentForm,
                        success: function(t) {
                          var e,
                            n,
                            i,
                            r = !0 === t || "true" === t;
                          (u.settings.messages[s.name][a] = l.originalMessage),
                            r
                              ? ((i = u.formSubmitted),
                                u.resetInternals(),
                                (u.toHide = u.errorsFor(s)),
                                (u.formSubmitted = i),
                                u.successList.push(s),
                                (u.invalid[s.name] = !1),
                                u.showErrors())
                              : ((e = {}),
                                (n =
                                  t ||
                                  u.defaultMessage(s, {
                                    method: a,
                                    parameters: o
                                  })),
                                (e[s.name] = l.message = n),
                                (u.invalid[s.name] = !0),
                                u.showErrors(e)),
                            (l.valid = r),
                            u.stopRequest(s, r);
                        }
                      },
                      t
                    )
                  ),
                  "pending")
            );
          }
        }
      });
    var i,
      r = {};
    return (
      c.ajaxPrefilter
        ? c.ajaxPrefilter(function(t, e, n) {
            var i = t.port;
            "abort" === t.mode && (r[i] && r[i].abort(), (r[i] = n));
          })
        : ((i = c.ajax),
          (c.ajax = function(t) {
            var e = ("mode" in t ? t : c.ajaxSettings).mode,
              n = ("port" in t ? t : c.ajaxSettings).port;
            return "abort" === e
              ? (r[n] && r[n].abort(), (r[n] = i.apply(this, arguments)), r[n])
              : i.apply(this, arguments);
          })),
      c
    );
  }),
  (function(t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? t(require("jquery"))
      : t(window.jQuery || window.Zepto);
  })(function(c) {
    var f,
      i,
      d,
      r,
      h,
      e,
      u = "Close",
      l = "BeforeClose",
      p = "MarkupParse",
      m = "Open",
      g = ".mfp",
      v = "mfp-ready",
      n = "mfp-removing",
      s = "mfp-prevent-close",
      t = function() {},
      a = !!window.jQuery,
      y = c(window),
      b = function(t, e) {
        f.ev.on("mfp" + t + g, e);
      },
      x = function(t, e, n, i) {
        var r = document.createElement("div");
        return (
          (r.className = "mfp-" + t),
          n && (r.innerHTML = n),
          i ? e && e.appendChild(r) : ((r = c(r)), e && r.appendTo(e)),
          r
        );
      },
      w = function(t, e) {
        f.ev.triggerHandler("mfp" + t, e),
          f.st.callbacks &&
            ((t = t.charAt(0).toLowerCase() + t.slice(1)),
            f.st.callbacks[t] &&
              f.st.callbacks[t].apply(f, c.isArray(e) ? e : [e]));
      },
      C = function(t) {
        return (
          (t === e && f.currTemplate.closeBtn) ||
            ((f.currTemplate.closeBtn = c(
              f.st.closeMarkup.replace("%title%", f.st.tClose)
            )),
            (e = t)),
          f.currTemplate.closeBtn
        );
      },
      o = function() {
        c.magnificPopup.instance ||
          ((f = new t()).init(), (c.magnificPopup.instance = f));
      };
    (t.prototype = {
      constructor: t,
      init: function() {
        var t = navigator.appVersion;
        (f.isLowIE = f.isIE8 = document.all && !document.addEventListener),
          (f.isAndroid = /android/gi.test(t)),
          (f.isIOS = /iphone|ipad|ipod/gi.test(t)),
          (f.supportsTransition = (function() {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (f.probablyMobile =
            f.isAndroid ||
            f.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (d = c(document)),
          (f.popupsCache = {});
      },
      open: function(t) {
        var e;
        if (!1 === t.isObj) {
          (f.items = t.items.toArray()), (f.index = 0);
          var n,
            i = t.items;
          for (e = 0; e < i.length; e++)
            if (((n = i[e]).parsed && (n = n.el[0]), n === t.el[0])) {
              f.index = e;
              break;
            }
        } else
          (f.items = c.isArray(t.items) ? t.items : [t.items]),
            (f.index = t.index || 0);
        if (!f.isOpen) {
          (f.types = []),
            (h = ""),
            t.mainEl && t.mainEl.length ? (f.ev = t.mainEl.eq(0)) : (f.ev = d),
            t.key
              ? (f.popupsCache[t.key] || (f.popupsCache[t.key] = {}),
                (f.currTemplate = f.popupsCache[t.key]))
              : (f.currTemplate = {}),
            (f.st = c.extend(!0, {}, c.magnificPopup.defaults, t)),
            (f.fixedContentPos =
              "auto" === f.st.fixedContentPos
                ? !f.probablyMobile
                : f.st.fixedContentPos),
            f.st.modal &&
              ((f.st.closeOnContentClick = !1),
              (f.st.closeOnBgClick = !1),
              (f.st.showCloseBtn = !1),
              (f.st.enableEscapeKey = !1)),
            f.bgOverlay ||
              ((f.bgOverlay = x("bg").on("click" + g, function() {
                f.close();
              })),
              (f.wrap = x("wrap")
                .attr("tabindex", -1)
                .on("click" + g, function(t) {
                  f._checkIfClose(t.target) && f.close();
                })),
              (f.container = x("container", f.wrap))),
            (f.contentContainer = x("content")),
            f.st.preloader &&
              (f.preloader = x("preloader", f.container, f.st.tLoading));
          var r = c.magnificPopup.modules;
          for (e = 0; e < r.length; e++) {
            var o = r[e];
            (o = o.charAt(0).toUpperCase() + o.slice(1)), f["init" + o].call(f);
          }
          w("BeforeOpen"),
            f.st.showCloseBtn &&
              (f.st.closeBtnInside
                ? (b(p, function(t, e, n, i) {
                    n.close_replaceWith = C(i.type);
                  }),
                  (h += " mfp-close-btn-in"))
                : f.wrap.append(C())),
            f.st.alignTop && (h += " mfp-align-top"),
            f.fixedContentPos
              ? f.wrap.css({
                  overflow: f.st.overflowY,
                  overflowX: "hidden",
                  overflowY: f.st.overflowY
                })
              : f.wrap.css({ top: y.scrollTop(), position: "absolute" }),
            (!1 === f.st.fixedBgPos ||
              ("auto" === f.st.fixedBgPos && !f.fixedContentPos)) &&
              f.bgOverlay.css({ height: d.height(), position: "absolute" }),
            f.st.enableEscapeKey &&
              d.on("keyup" + g, function(t) {
                27 === t.keyCode && f.close();
              }),
            y.on("resize" + g, function() {
              f.updateSize();
            }),
            f.st.closeOnContentClick || (h += " mfp-auto-cursor"),
            h && f.wrap.addClass(h);
          var s = (f.wH = y.height()),
            a = {};
          if (f.fixedContentPos && f._hasScrollBar(s)) {
            var u = f._getScrollbarSize();
            u && (a.marginRight = u);
          }
          f.fixedContentPos &&
            (f.isIE7
              ? c("body, html").css("overflow", "hidden")
              : (a.overflow = "hidden"));
          var l = f.st.mainClass;
          return (
            f.isIE7 && (l += " mfp-ie7"),
            l && f._addClassToMFP(l),
            f.updateItemHTML(),
            w("BuildControls"),
            c("html").css(a),
            f.bgOverlay
              .add(f.wrap)
              .prependTo(f.st.prependTo || c(document.body)),
            (f._lastFocusedEl = document.activeElement),
            setTimeout(function() {
              f.content
                ? (f._addClassToMFP(v), f._setFocus())
                : f.bgOverlay.addClass(v),
                d.on("focusin" + g, f._onFocusIn);
            }, 16),
            (f.isOpen = !0),
            f.updateSize(s),
            w(m),
            t
          );
        }
        f.updateItemHTML();
      },
      close: function() {
        f.isOpen &&
          (w(l),
          (f.isOpen = !1),
          f.st.removalDelay && !f.isLowIE && f.supportsTransition
            ? (f._addClassToMFP(n),
              setTimeout(function() {
                f._close();
              }, f.st.removalDelay))
            : f._close());
      },
      _close: function() {
        w(u);
        var t = n + " " + v + " ";
        if (
          (f.bgOverlay.detach(),
          f.wrap.detach(),
          f.container.empty(),
          f.st.mainClass && (t += f.st.mainClass + " "),
          f._removeClassFromMFP(t),
          f.fixedContentPos)
        ) {
          var e = { marginRight: "" };
          f.isIE7 ? c("body, html").css("overflow", "") : (e.overflow = ""),
            c("html").css(e);
        }
        d.off("keyup.mfp focusin" + g),
          f.ev.off(g),
          f.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          f.bgOverlay.attr("class", "mfp-bg"),
          f.container.attr("class", "mfp-container"),
          !f.st.showCloseBtn ||
            (f.st.closeBtnInside && !0 !== f.currTemplate[f.currItem.type]) ||
            (f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach()),
          f.st.autoFocusLast && f._lastFocusedEl && c(f._lastFocusedEl).focus(),
          (f.currItem = null),
          (f.content = null),
          (f.currTemplate = null),
          (f.prevHeight = 0),
          w("AfterClose");
      },
      updateSize: function(t) {
        if (f.isIOS) {
          var e = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * e;
          f.wrap.css("height", n), (f.wH = n);
        } else f.wH = t || y.height();
        f.fixedContentPos || f.wrap.css("height", f.wH), w("Resize");
      },
      updateItemHTML: function() {
        var t = f.items[f.index];
        f.contentContainer.detach(),
          f.content && f.content.detach(),
          t.parsed || (t = f.parseEl(f.index));
        var e = t.type;
        if (
          (w("BeforeChange", [f.currItem ? f.currItem.type : "", e]),
          (f.currItem = t),
          !f.currTemplate[e])
        ) {
          var n = !!f.st[e] && f.st[e].markup;
          w("FirstMarkupParse", n), (f.currTemplate[e] = !n || c(n));
        }
        r && r !== t.type && f.container.removeClass("mfp-" + r + "-holder");
        var i = f["get" + e.charAt(0).toUpperCase() + e.slice(1)](
          t,
          f.currTemplate[e]
        );
        f.appendContent(i, e),
          (t.preloaded = !0),
          w("Change", t),
          (r = t.type),
          f.container.prepend(f.contentContainer),
          w("AfterChange");
      },
      appendContent: function(t, e) {
        (f.content = t)
          ? f.st.showCloseBtn && f.st.closeBtnInside && !0 === f.currTemplate[e]
            ? f.content.find(".mfp-close").length || f.content.append(C())
            : (f.content = t)
          : (f.content = ""),
          w("BeforeAppend"),
          f.container.addClass("mfp-" + e + "-holder"),
          f.contentContainer.append(f.content);
      },
      parseEl: function(t) {
        var e,
          n = f.items[t];
        if (
          (n = n.tagName
            ? { el: c(n) }
            : ((e = n.type), { data: n, src: n.src })).el
        ) {
          for (var i = f.types, r = 0; r < i.length; r++)
            if (n.el.hasClass("mfp-" + i[r])) {
              e = i[r];
              break;
            }
          (n.src = n.el.attr("data-mfp-src")),
            n.src || (n.src = n.el.attr("href"));
        }
        return (
          (n.type = e || f.st.type || "inline"),
          (n.index = t),
          (n.parsed = !0),
          (f.items[t] = n),
          w("ElementParse", n),
          f.items[t]
        );
      },
      addGroup: function(e, n) {
        var t = function(t) {
          (t.mfpEl = this), f._openClick(t, e, n);
        };
        n || (n = {});
        var i = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(i).on(i, t))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(i).on(i, n.delegate, t)
                : (n.items = e).off(i).on(i, t));
      },
      _openClick: function(t, e, n) {
        if (
          (void 0 !== n.midClick
            ? n.midClick
            : c.magnificPopup.defaults.midClick) ||
          !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)
        ) {
          var i =
            void 0 !== n.disableOn
              ? n.disableOn
              : c.magnificPopup.defaults.disableOn;
          if (i)
            if (c.isFunction(i)) {
              if (!i.call(f)) return !0;
            } else if (y.width() < i) return !0;
          t.type && (t.preventDefault(), f.isOpen && t.stopPropagation()),
            (n.el = c(t.mfpEl)),
            n.delegate && (n.items = e.find(n.delegate)),
            f.open(n);
        }
      },
      updateStatus: function(t, e) {
        if (f.preloader) {
          i !== t && f.container.removeClass("mfp-s-" + i),
            e || "loading" !== t || (e = f.st.tLoading);
          var n = { status: t, text: e };
          w("UpdateStatus", n),
            (t = n.status),
            (e = n.text),
            f.preloader.html(e),
            f.preloader.find("a").on("click", function(t) {
              t.stopImmediatePropagation();
            }),
            f.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function(t) {
        if (!c(t).hasClass(s)) {
          var e = f.st.closeOnContentClick,
            n = f.st.closeOnBgClick;
          if (e && n) return !0;
          if (
            !f.content ||
            c(t).hasClass("mfp-close") ||
            (f.preloader && t === f.preloader[0])
          )
            return !0;
          if (t === f.content[0] || c.contains(f.content[0], t)) {
            if (e) return !0;
          } else if (n && c.contains(document, t)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function(t) {
        f.bgOverlay.addClass(t), f.wrap.addClass(t);
      },
      _removeClassFromMFP: function(t) {
        this.bgOverlay.removeClass(t), f.wrap.removeClass(t);
      },
      _hasScrollBar: function(t) {
        return (
          (f.isIE7 ? d.height() : document.body.scrollHeight) >
          (t || y.height())
        );
      },
      _setFocus: function() {
        (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus();
      },
      _onFocusIn: function(t) {
        if (t.target !== f.wrap[0] && !c.contains(f.wrap[0], t.target))
          return f._setFocus(), !1;
      },
      _parseMarkup: function(r, t, e) {
        var o;
        e.data && (t = c.extend(e.data, t)),
          w(p, [r, t, e]),
          c.each(t, function(t, e) {
            if (void 0 === e || !1 === e) return !0;
            if (1 < (o = t.split("_")).length) {
              var n = r.find(g + "-" + o[0]);
              if (0 < n.length) {
                var i = o[1];
                "replaceWith" === i
                  ? n[0] !== e[0] && n.replaceWith(e)
                  : "img" === i
                  ? n.is("img")
                    ? n.attr("src", e)
                    : n.replaceWith(
                        c("<img>")
                          .attr("src", e)
                          .attr("class", n.attr("class"))
                      )
                  : n.attr(o[1], e);
              }
            } else r.find(g + "-" + t).html(e);
          });
      },
      _getScrollbarSize: function() {
        if (void 0 === f.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (f.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return f.scrollbarSize;
      }
    }),
      (c.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(t, e) {
          return (
            o(),
            ((t = t ? c.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = e || 0),
            this.instance.open(t)
          );
        },
        close: function() {
          return c.magnificPopup.instance && c.magnificPopup.instance.close();
        },
        registerModule: function(t, e) {
          e.options && (c.magnificPopup.defaults[t] = e.options),
            c.extend(this.proto, e.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0
        }
      }),
      (c.fn.magnificPopup = function(t) {
        o();
        var e = c(this);
        if ("string" == typeof t)
          if ("open" === t) {
            var n,
              i = a ? e.data("magnificPopup") : e[0].magnificPopup,
              r = parseInt(arguments[1], 10) || 0;
            (n = i.items
              ? i.items[r]
              : ((n = e), i.delegate && (n = n.find(i.delegate)), n.eq(r))),
              f._openClick({ mfpEl: n }, e, i);
          } else
            f.isOpen && f[t].apply(f, Array.prototype.slice.call(arguments, 1));
        else
          (t = c.extend(!0, {}, t)),
            a ? e.data("magnificPopup", t) : (e[0].magnificPopup = t),
            f.addGroup(e, t);
        return e;
      });
    var E,
      T,
      S,
      k = "inline",
      _ = function() {
        S && (T.after(S.addClass(E)).detach(), (S = null));
      };
    c.magnificPopup.registerModule(k, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
      },
      proto: {
        initInline: function() {
          f.types.push(k),
            b(u + "." + k, function() {
              _();
            });
        },
        getInline: function(t, e) {
          if ((_(), t.src)) {
            var n = f.st.inline,
              i = c(t.src);
            if (i.length) {
              var r = i[0].parentNode;
              r &&
                r.tagName &&
                (T || ((E = n.hiddenClass), (T = x(E)), (E = "mfp-" + E)),
                (S = i
                  .after(T)
                  .detach()
                  .removeClass(E))),
                f.updateStatus("ready");
            } else f.updateStatus("error", n.tNotFound), (i = c("<div>"));
            return (t.inlineElement = i);
          }
          return f.updateStatus("ready"), f._parseMarkup(e, {}, t), e;
        }
      }
    });
    var O,
      A = "ajax",
      L = function() {
        O && c(document.body).removeClass(O);
      },
      j = function() {
        L(), f.req && f.req.abort();
      };
    c.magnificPopup.registerModule(A, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
        initAjax: function() {
          f.types.push(A),
            (O = f.st.ajax.cursor),
            b(u + "." + A, j),
            b("BeforeChange." + A, j);
        },
        getAjax: function(r) {
          O && c(document.body).addClass(O), f.updateStatus("loading");
          var t = c.extend(
            {
              url: r.src,
              success: function(t, e, n) {
                var i = { data: t, xhr: n };
                w("ParseAjax", i),
                  f.appendContent(c(i.data), A),
                  (r.finished = !0),
                  L(),
                  f._setFocus(),
                  setTimeout(function() {
                    f.wrap.addClass(v);
                  }, 16),
                  f.updateStatus("ready"),
                  w("AjaxContentAdded");
              },
              error: function() {
                L(),
                  (r.finished = r.loadError = !0),
                  f.updateStatus(
                    "error",
                    f.st.ajax.tError.replace("%url%", r.src)
                  );
              }
            },
            f.st.ajax.settings
          );
          return (f.req = c.ajax(t)), "";
        }
      }
    });
    var I;
    c.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
        initImage: function() {
          var t = f.st.image,
            e = ".image";
          f.types.push("image"),
            b(m + e, function() {
              "image" === f.currItem.type &&
                t.cursor &&
                c(document.body).addClass(t.cursor);
            }),
            b(u + e, function() {
              t.cursor && c(document.body).removeClass(t.cursor),
                y.off("resize" + g);
            }),
            b("Resize" + e, f.resizeImage),
            f.isLowIE && b("AfterChange", f.resizeImage);
        },
        resizeImage: function() {
          var t = f.currItem;
          if (t && t.img && f.st.image.verticalFit) {
            var e = 0;
            f.isLowIE &&
              (e =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", f.wH - e);
          }
        },
        _onImageHasSize: function(t) {
          t.img &&
            ((t.hasSize = !0),
            I && clearInterval(I),
            (t.isCheckingImgSize = !1),
            w("ImageHasSize", t),
            t.imgHidden &&
              (f.content && f.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function(e) {
          var n = 0,
            i = e.img[0],
            r = function(t) {
              I && clearInterval(I),
                (I = setInterval(function() {
                  0 < i.naturalWidth
                    ? f._onImageHasSize(e)
                    : (200 < n && clearInterval(I),
                      3 === ++n
                        ? r(10)
                        : 40 === n
                        ? r(50)
                        : 100 === n && r(500));
                }, t));
            };
          r(1);
        },
        getImage: function(t, e) {
          var n = 0,
            i = function() {
              t &&
                (t.img[0].complete
                  ? (t.img.off(".mfploader"),
                    t === f.currItem &&
                      (f._onImageHasSize(t), f.updateStatus("ready")),
                    (t.hasSize = !0),
                    (t.loaded = !0),
                    w("ImageLoadComplete"))
                  : ++n < 200
                  ? setTimeout(i, 100)
                  : r());
            },
            r = function() {
              t &&
                (t.img.off(".mfploader"),
                t === f.currItem &&
                  (f._onImageHasSize(t),
                  f.updateStatus("error", o.tError.replace("%url%", t.src))),
                (t.hasSize = !0),
                (t.loaded = !0),
                (t.loadError = !0));
            },
            o = f.st.image,
            s = e.find(".mfp-img");
          if (s.length) {
            var a = document.createElement("img");
            (a.className = "mfp-img"),
              t.el &&
                t.el.find("img").length &&
                (a.alt = t.el.find("img").attr("alt")),
              (t.img = c(a)
                .on("load.mfploader", i)
                .on("error.mfploader", r)),
              (a.src = t.src),
              s.is("img") && (t.img = t.img.clone()),
              0 < (a = t.img[0]).naturalWidth
                ? (t.hasSize = !0)
                : a.width || (t.hasSize = !1);
          }
          return (
            f._parseMarkup(
              e,
              {
                title: (function(t) {
                  if (t.data && void 0 !== t.data.title) return t.data.title;
                  var e = f.st.image.titleSrc;
                  if (e) {
                    if (c.isFunction(e)) return e.call(f, t);
                    if (t.el) return t.el.attr(e) || "";
                  }
                  return "";
                })(t),
                img_replaceWith: t.img
              },
              t
            ),
            f.resizeImage(),
            t.hasSize
              ? (I && clearInterval(I),
                t.loadError
                  ? (e.addClass("mfp-loading"),
                    f.updateStatus("error", o.tError.replace("%url%", t.src)))
                  : (e.removeClass("mfp-loading"), f.updateStatus("ready")))
              : (f.updateStatus("loading"),
                (t.loading = !0),
                t.hasSize ||
                  ((t.imgHidden = !0),
                  e.addClass("mfp-loading"),
                  f.findImageSize(t))),
            e
          );
        }
      }
    });
    var N;
    c.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function(t) {
          return t.is("img") ? t : t.find("img");
        }
      },
      proto: {
        initZoom: function() {
          var t,
            o = f.st.zoom,
            e = ".zoom";
          if (o.enabled && f.supportsTransition) {
            var n,
              i,
              r = o.duration,
              s = function(t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  n = "all " + o.duration / 1e3 + "s " + o.easing,
                  i = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden"
                  },
                  r = "transition";
                return (
                  (i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[
                    r
                  ] = n),
                  e.css(i),
                  e
                );
              },
              a = function() {
                f.content.css("visibility", "visible");
              };
            b("BuildControls" + e, function() {
              if (f._allowZoom()) {
                if (
                  (clearTimeout(n),
                  f.content.css("visibility", "hidden"),
                  !(t = f._getItemToZoom()))
                )
                  return void a();
                (i = s(t)).css(f._getOffset()),
                  f.wrap.append(i),
                  (n = setTimeout(function() {
                    i.css(f._getOffset(!0)),
                      (n = setTimeout(function() {
                        a(),
                          setTimeout(function() {
                            i.remove(), (t = i = null), w("ZoomAnimationEnded");
                          }, 16);
                      }, r));
                  }, 16));
              }
            }),
              b(l + e, function() {
                if (f._allowZoom()) {
                  if ((clearTimeout(n), (f.st.removalDelay = r), !t)) {
                    if (!(t = f._getItemToZoom())) return;
                    i = s(t);
                  }
                  i.css(f._getOffset(!0)),
                    f.wrap.append(i),
                    f.content.css("visibility", "hidden"),
                    setTimeout(function() {
                      i.css(f._getOffset());
                    }, 16);
                }
              }),
              b(u + e, function() {
                f._allowZoom() && (a(), i && i.remove(), (t = null));
              });
          }
        },
        _allowZoom: function() {
          return "image" === f.currItem.type;
        },
        _getItemToZoom: function() {
          return !!f.currItem.hasSize && f.currItem.img;
        },
        _getOffset: function(t) {
          var e,
            n = (e = t
              ? f.currItem.img
              : f.st.zoom.opener(f.currItem.el || f.currItem)).offset(),
            i = parseInt(e.css("padding-top"), 10),
            r = parseInt(e.css("padding-bottom"), 10);
          n.top -= c(window).scrollTop() - i;
          var o = {
            width: e.width(),
            height: (a ? e.innerHeight() : e[0].offsetHeight) - r - i
          };
          return (
            void 0 === N &&
              (N = void 0 !== document.createElement("p").style.MozTransform),
            N
              ? (o["-moz-transform"] = o.transform =
                  "translate(" + n.left + "px," + n.top + "px)")
              : ((o.left = n.left), (o.top = n.top)),
            o
          );
        }
      }
    });
    var M = "iframe",
      D = function(t) {
        if (f.currTemplate[M]) {
          var e = f.currTemplate[M].find("iframe");
          e.length &&
            (t || (e[0].src = "//about:blank"),
            f.isIE8 && e.css("display", t ? "block" : "none"));
        }
      };
    c.magnificPopup.registerModule(M, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1"
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1"
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" }
        }
      },
      proto: {
        initIframe: function() {
          f.types.push(M),
            b("BeforeChange", function(t, e, n) {
              e !== n && (e === M ? D() : n === M && D(!0));
            }),
            b(u + "." + M, function() {
              D();
            });
        },
        getIframe: function(t, e) {
          var n = t.src,
            i = f.st.iframe;
          c.each(i.patterns, function() {
            if (-1 < n.indexOf(this.index))
              return (
                this.id &&
                  (n =
                    "string" == typeof this.id
                      ? n.substr(
                          n.lastIndexOf(this.id) + this.id.length,
                          n.length
                        )
                      : this.id.call(this, n)),
                (n = this.src.replace("%id%", n)),
                !1
              );
          });
          var r = {};
          return (
            i.srcAction && (r[i.srcAction] = n),
            f._parseMarkup(e, r, t),
            f.updateStatus("ready"),
            e
          );
        }
      }
    });
    var z = function(t) {
        var e = f.items.length;
        return e - 1 < t ? t - e : t < 0 ? e + t : t;
      },
      P = function(t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
      };
    c.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%"
      },
      proto: {
        initGallery: function() {
          var o = f.st.gallery,
            t = ".mfp-gallery";
          if (((f.direction = !0), !o || !o.enabled)) return !1;
          (h += " mfp-gallery"),
            b(m + t, function() {
              o.navigateByImgClick &&
                f.wrap.on("click" + t, ".mfp-img", function() {
                  if (1 < f.items.length) return f.next(), !1;
                }),
                d.on("keydown" + t, function(t) {
                  37 === t.keyCode ? f.prev() : 39 === t.keyCode && f.next();
                });
            }),
            b("UpdateStatus" + t, function(t, e) {
              e.text && (e.text = P(e.text, f.currItem.index, f.items.length));
            }),
            b(p + t, function(t, e, n, i) {
              var r = f.items.length;
              n.counter = 1 < r ? P(o.tCounter, i.index, r) : "";
            }),
            b("BuildControls" + t, function() {
              if (1 < f.items.length && o.arrows && !f.arrowLeft) {
                var t = o.arrowMarkup,
                  e = (f.arrowLeft = c(
                    t.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(s)),
                  n = (f.arrowRight = c(
                    t.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")
                  ).addClass(s));
                e.click(function() {
                  f.prev();
                }),
                  n.click(function() {
                    f.next();
                  }),
                  f.container.append(e.add(n));
              }
            }),
            b("Change" + t, function() {
              f._preloadTimeout && clearTimeout(f._preloadTimeout),
                (f._preloadTimeout = setTimeout(function() {
                  f.preloadNearbyImages(), (f._preloadTimeout = null);
                }, 16));
            }),
            b(u + t, function() {
              d.off(t),
                f.wrap.off("click" + t),
                (f.arrowRight = f.arrowLeft = null);
            });
        },
        next: function() {
          (f.direction = !0), (f.index = z(f.index + 1)), f.updateItemHTML();
        },
        prev: function() {
          (f.direction = !1), (f.index = z(f.index - 1)), f.updateItemHTML();
        },
        goTo: function(t) {
          (f.direction = t >= f.index), (f.index = t), f.updateItemHTML();
        },
        preloadNearbyImages: function() {
          var t,
            e = f.st.gallery.preload,
            n = Math.min(e[0], f.items.length),
            i = Math.min(e[1], f.items.length);
          for (t = 1; t <= (f.direction ? i : n); t++)
            f._preloadItem(f.index + t);
          for (t = 1; t <= (f.direction ? n : i); t++)
            f._preloadItem(f.index - t);
        },
        _preloadItem: function(t) {
          if (((t = z(t)), !f.items[t].preloaded)) {
            var e = f.items[t];
            e.parsed || (e = f.parseEl(t)),
              w("LazyLoad", e),
              "image" === e.type &&
                (e.img = c('<img class="mfp-img" />')
                  .on("load.mfploader", function() {
                    e.hasSize = !0;
                  })
                  .on("error.mfploader", function() {
                    (e.hasSize = !0), (e.loadError = !0), w("LazyLoadError", e);
                  })
                  .attr("src", e.src)),
              (e.preloaded = !0);
          }
        }
      }
    });
    var q = "retina";
    c.magnificPopup.registerModule(q, {
      options: {
        replaceSrc: function(t) {
          return t.src.replace(/\.\w+$/, function(t) {
            return "@2x" + t;
          });
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          if (1 < window.devicePixelRatio) {
            var n = f.st.retina,
              i = n.ratio;
            1 < (i = isNaN(i) ? i() : i) &&
              (b("ImageHasSize." + q, function(t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%"
                });
              }),
              b("ElementParse." + q, function(t, e) {
                e.src = n.replaceSrc(e, i);
              }));
          }
        }
      }
    }),
      o();
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })(this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            i = (n[t] = n[t] || []);
          return -1 == i.indexOf(e) && i.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || [])[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var i = n.indexOf(e);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var i = 0,
            r = n[i];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]),
              r.apply(this, e),
              (r = n[(i += s ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function(e, n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function(t) {
          return n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("ev-emitter")))
      : (e.imagesLoaded = n(e, e.EvEmitter));
  })(window, function(e, t) {
    var i = e.jQuery,
      r = e.console;
    function o(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function s(t, e, n) {
      if (!(this instanceof s)) return new s(t, e, n);
      "string" == typeof t && (t = document.querySelectorAll(t)),
        (this.elements = (function(t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if ("number" == typeof t.length)
            for (var n = 0; n < t.length; n++) e.push(t[n]);
          else e.push(t);
          return e;
        })(t)),
        (this.options = o({}, this.options)),
        "function" == typeof e ? (n = e) : o(this.options, e),
        n && this.on("always", n),
        this.getImages(),
        i && (this.jqDeferred = new i.Deferred()),
        setTimeout(
          function() {
            this.check();
          }.bind(this)
        );
    }
    ((s.prototype = Object.create(t.prototype)).options = {}),
      (s.prototype.getImages = function() {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && a[e]) {
          for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var r = n[i];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (i = 0; i < o.length; i++) {
              var s = o[i];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var a = { 1: !0, 9: !0, 11: !0 };
    function n(t) {
      this.img = t;
    }
    function u(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage);
            null !== i;

          ) {
            var r = i && i[2];
            r && this.addBackground(r, t), (i = n.exec(e.backgroundImage));
          }
      }),
      (s.prototype.addImage = function(t) {
        var e = new n(t);
        this.images.push(e);
      }),
      (s.prototype.addBackground = function(t, e) {
        var n = new u(t, e);
        this.images.push(n);
      }),
      (s.prototype.check = function() {
        var i = this;
        function e(t, e, n) {
          setTimeout(function() {
            i.progress(t, e, n);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function(t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (s.prototype.progress = function(t, e, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && r && r.log("progress: " + n, t, e);
      }),
      (s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      ((n.prototype = Object.create(t.prototype)).check = function() {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (n.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (n.prototype.confirm = function(t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (n.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (n.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (n.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (n.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((u.prototype = Object.create(n.prototype)).check = function() {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (u.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (u.prototype.confirm = function(t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (s.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) &&
          ((i = t).fn.imagesLoaded = function(t, e) {
            return new s(this, t, e).jqDeferred.promise(i(this));
          });
      }),
      s.makeJQueryPlugin(),
      s
    );
  }),
  (function(e, n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
          n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("jquery")))
      : (e.jQueryBridget = n(e, e.jQuery));
  })(window, function(t, e) {
    "use strict";
    var f = Array.prototype.slice,
      n = t.console,
      d =
        void 0 === n
          ? function() {}
          : function(t) {
              n.error(t);
            };
    function i(l, r, c) {
      (c = c || e || t.jQuery) &&
        (r.prototype.option ||
          (r.prototype.option = function(t) {
            c.isPlainObject(t) &&
              (this.options = c.extend(!0, this.options, t));
          }),
        (c.fn[l] = function(t) {
          if ("string" != typeof t)
            return (
              (i = t),
              this.each(function(t, e) {
                var n = c.data(e, l);
                n
                  ? (n.option(i), n._init())
                  : ((n = new r(e, i)), c.data(e, l, n));
              }),
              this
            );
          var e,
            o,
            s,
            a,
            u,
            i,
            n = f.call(arguments, 1);
          return (
            (s = n),
            (u = "$()." + l + '("' + (o = t) + '")'),
            (e = this).each(function(t, e) {
              var n = c.data(e, l);
              if (n) {
                var i = n[o];
                if (i && "_" != o.charAt(0)) {
                  var r = i.apply(n, s);
                  a = void 0 === a ? r : a;
                } else d(u + " is not a valid method");
              } else d(l + " not initialized. Cannot call methods, i.e. " + u);
            }),
            void 0 !== a ? a : e
          );
        }),
        o(c));
    }
    function o(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    return o(e || t.jQuery), i;
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })(this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var n = (this._events = this._events || {}),
            i = (n[t] = n[t] || []);
          return -1 == i.indexOf(e) && i.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[t] = n[t] || [])[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var i = n.indexOf(e);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var i = 0,
            r = n[i];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]),
              r.apply(this, e),
              (r = n[(i += s ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function() {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function() {
    "use strict";
    function v(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var n =
        "undefined" == typeof console
          ? function() {}
          : function(t) {
              console.error(t);
            },
      y = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ],
      b = y.length;
    function x(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          n(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    var w,
      C = !1;
    function E(t) {
      if (
        ((function() {
          if (!C) {
            C = !0;
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style.boxSizing = "border-box");
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var n = x(t);
            (E.isBoxSizeOuter = w = 200 == v(n.width)), e.removeChild(t);
          }
        })(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = x(t);
        if ("none" == e.display)
          return (function() {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0
                },
                e = 0;
              e < b;
              e++
            )
              t[y[e]] = 0;
            return t;
          })();
        var n = {};
        (n.width = t.offsetWidth), (n.height = t.offsetHeight);
        for (
          var i = (n.isBorderBox = "border-box" == e.boxSizing), r = 0;
          r < b;
          r++
        ) {
          var o = y[r],
            s = e[o],
            a = parseFloat(s);
          n[o] = isNaN(a) ? 0 : a;
        }
        var u = n.paddingLeft + n.paddingRight,
          l = n.paddingTop + n.paddingBottom,
          c = n.marginLeft + n.marginRight,
          f = n.marginTop + n.marginBottom,
          d = n.borderLeftWidth + n.borderRightWidth,
          h = n.borderTopWidth + n.borderBottomWidth,
          p = i && w,
          m = v(e.width);
        !1 !== m && (n.width = m + (p ? 0 : u + d));
        var g = v(e.height);
        return (
          !1 !== g && (n.height = g + (p ? 0 : l + h)),
          (n.innerWidth = n.width - (u + d)),
          (n.innerHeight = n.height - (l + h)),
          (n.outerWidth = n.width + c),
          (n.outerHeight = n.height + f),
          n
        );
      }
    }
    return E;
  }),
  (function(t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function() {
    "use strict";
    var n = (function() {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
        var i = e[n] + "MatchesSelector";
        if (t[i]) return i;
      }
    })();
    return function(t, e) {
      return t[n](e);
    };
  }),
  (function(e, n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", [
          "matches-selector/matches-selector"
        ], function(t) {
          return n(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = n(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = n(e, e.matchesSelector));
  })(window, function(l, o) {
    var c = {
        extend: function(t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        modulo: function(t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function(t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "number" == typeof t.length)
            for (var n = 0; n < t.length; n++) e.push(t[n]);
          else e.push(t);
          return e;
        },
        removeFrom: function(t, e) {
          var n = t.indexOf(e);
          -1 != n && t.splice(n, 1);
        },
        getParent: function(t, e) {
          for (; t != document.body; )
            if (((t = t.parentNode), o(t, e))) return t;
        },
        getQueryElement: function(t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function(t, i) {
          t = c.makeArray(t);
          var r = [];
          return (
            t.forEach(function(t) {
              if (t instanceof HTMLElement)
                if (i) {
                  o(t, i) && r.push(t);
                  for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++)
                    r.push(e[n]);
                } else r.push(t);
            }),
            r
          );
        },
        debounceMethod: function(t, e, i) {
          var r = t.prototype[e],
            o = e + "Timeout";
          t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
              n = this;
            this[o] = setTimeout(function() {
              r.apply(n, e), delete n[o];
            }, i || 100);
          };
        },
        docReady: function(t) {
          "complete" == document.readyState
            ? t()
            : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function(t) {
          return t
            .replace(/(.)([A-Z])/g, function(t, e, n) {
              return e + "-" + n;
            })
            .toLowerCase();
        }
      },
      f = l.console;
    return (
      (c.htmlInit = function(a, u) {
        c.docReady(function() {
          var t = c.toDashed(u),
            r = "data-" + t,
            e = document.querySelectorAll("[" + r + "]"),
            n = document.querySelectorAll(".js-" + t),
            i = c.makeArray(e).concat(c.makeArray(n)),
            o = r + "-options",
            s = l.jQuery;
          i.forEach(function(e) {
            var t,
              n = e.getAttribute(r) || e.getAttribute(o);
            try {
              t = n && JSON.parse(n);
            } catch (t) {
              return void (
                f &&
                f.error("Error parsing " + r + " on " + e.className + ": " + t)
              );
            }
            var i = new a(e, t);
            s && s.data(e, u, i);
          });
        });
      }),
      c
    );
  }),
  (function(n, i) {
    "function" == typeof define && define.amd
      ? define("outlayer/item", [
          "ev-emitter/ev-emitter",
          "get-size/get-size"
        ], function(t, e) {
          return i(n, t, e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(n, require("ev-emitter"), require("get-size")))
      : ((n.Outlayer = {}), (n.Outlayer.Item = i(n, n.EvEmitter, n.getSize)));
  })(window, function(t, e, n) {
    "use strict";
    var i = document.documentElement.style,
      r = "string" == typeof i.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[r],
      a = [o, r, r + "Duration", r + "Property"];
    function u(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var l = (u.prototype = Object.create(e.prototype));
    (l.constructor = u),
      (l._create = function() {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.getSize = function() {
        this.size = n(this.element);
      }),
      (l.css = function(t) {
        var e = this.element.style;
        for (var n in t) {
          e[a[n] || n] = t[n];
        }
      }),
      (l.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          i = t[e ? "left" : "right"],
          r = t[n ? "top" : "bottom"],
          o = this.layout.size,
          s =
            -1 != i.indexOf("%")
              ? (parseFloat(i) / 100) * o.width
              : parseInt(i, 10),
          a =
            -1 != r.indexOf("%")
              ? (parseFloat(r) / 100) * o.height
              : parseInt(r, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? o.paddingLeft : o.paddingRight),
          (a -= n ? o.paddingTop : o.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (l.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          r = n ? "paddingLeft" : "paddingRight",
          o = n ? "left" : "right",
          s = n ? "right" : "left",
          a = this.position.x + t[r];
        (e[o] = this.getXValue(a)), (e[s] = "");
        var u = i ? "paddingTop" : "paddingBottom",
          l = i ? "top" : "bottom",
          c = i ? "bottom" : "top",
          f = this.position.y + t[u];
        (e[l] = this.getYValue(f)),
          (e[c] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (l.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (l.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (l._transitionTo = function(t, e) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          r = parseInt(t, 10),
          o = parseInt(e, 10),
          s = r === this.position.x && o === this.position.y;
        if ((this.setPosition(t, e), !s || this.isTransitioning)) {
          var a = t - n,
            u = e - i,
            l = {};
          (l.transform = this.getTranslate(a, u)),
            this.transition({
              to: l,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0
            });
        } else this.layoutPosition();
      }),
      (l.getTranslate = function(t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (l.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (l.moveTo = l._transitionTo),
      (l.setPosition = function(t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (l._nonTransition = function(t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (l._transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
          for (n in t.to)
            (e.ingProperties[n] = !0), t.isCleaning && (e.clean[n] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var c =
      "opacity," +
      (a.transform || "transform").replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase();
      });
    (l.enableTransition = function() {
      this.isTransitioning ||
        (this.css({
          transitionProperty: c,
          transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(s, this, !1));
    }),
      (l.transition = u.prototype[r ? "_transition" : "_nonTransition"]),
      (l.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
      }),
      (l.onotransitionend = function(t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (l.ontransitionend = function(t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          (function(t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        )
          e.onEnd[n].call(this), delete e.onEnd[n];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (l.disableTransition = function() {
        this.removeTransitionStyles(),
          this.element.removeEventListener(s, this, !1),
          (this.isTransitioning = !1);
      }),
      (l._removeStyles = function(t) {
        var e = {};
        for (var n in t) e[n] = "";
        this.css(e);
      });
    var d = { transitionProperty: "", transitionDuration: "" };
    return (
      (l.removeTransitionStyles = function() {
        this.css(d);
      }),
      (l.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (l.remove = function() {
        r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function() {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (l.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[
          this.getHideRevealTransitionEndProperty("visibleStyle")
        ] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }),
      (l.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var n in e) return n;
      }),
      (l.hide = function() {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[
          this.getHideRevealTransitionEndProperty("hiddenStyle")
        ] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
      }),
      (l.onHideTransitionEnd = function() {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (l.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }),
      u
    );
  }),
  (function(r, o) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", [
          "ev-emitter/ev-emitter",
          "get-size/get-size",
          "fizzy-ui-utils/utils",
          "./item"
        ], function(t, e, n, i) {
          return o(r, t, e, n, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = o(
          r,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (r.Outlayer = o(
          r,
          r.EvEmitter,
          r.getSize,
          r.fizzyUIUtils,
          r.Outlayer.Item
        ));
  })(window, function(t, e, r, o, i) {
    "use strict";
    var s = t.console,
      a = t.jQuery,
      n = function() {},
      u = 0,
      l = {};
    function c(t, e) {
      var n = o.getQueryElement(t);
      if (n) {
        (this.element = n),
          a && (this.$element = a(this.element)),
          (this.options = o.extend({}, this.constructor.defaults)),
          this.option(e);
        var i = ++u;
        (this.element.outlayerGUID = i),
          (l[i] = this)._create(),
          this._getOption("initLayout") && this.layout();
      } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (n || t));
    }
    (c.namespace = "outlayer"),
      (c.Item = i),
      (c.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" }
      });
    var f = c.prototype;
    function d(t) {
      function e() {
        t.apply(this, arguments);
      }
      return ((e.prototype = Object.create(t.prototype)).constructor = e);
    }
    return (
      o.extend(f, e.prototype),
      (f.option = function(t) {
        o.extend(this.options, t);
      }),
      (f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }),
      (f._create = function() {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function(t) {
        for (
          var e = this._filterFindItemElements(t),
            n = this.constructor.Item,
            i = [],
            r = 0;
          r < e.length;
          r++
        ) {
          var o = new n(e[r], this);
          i.push(o);
        }
        return i;
      }),
      (f._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element;
        });
      }),
      (f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function() {
        this.getSize();
      }),
      (f.getSize = function() {
        this.size = r(this.element);
      }),
      (f._getMeasurement = function(t, e) {
        var n,
          i = this.options[t];
        this[t] = i
          ? ("string" == typeof i
              ? (n = this.element.querySelector(i))
              : i instanceof HTMLElement && (n = i),
            n ? r(n)[e] : i)
          : 0;
      }),
      (f.layoutItems = function(t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function(t, n) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function(t) {
            var e = this._getItemLayoutPosition(t);
            (e.item = t), (e.isInstant = n || t.isLayoutInstant), i.push(e);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function(t) {
        t.forEach(function(t) {
          this._positionItem(t.item, t.x, t.y, t.isInstant);
        }, this);
      }),
      (f._positionItem = function(t, e, n, i) {
        i ? t.goTo(e, n) : t.moveTo(e, n);
      }),
      (f._postLayout = function() {
        this.resizeContainer();
      }),
      (f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (f._getContainerSize = n),
      (f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
          var n = this.size;
          n.isBorderBox &&
            (t += e
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function(e, t) {
        var n = this;
        function i() {
          n.dispatchEvent(e + "Complete", null, [t]);
        }
        var r = t.length;
        if (t && r) {
          var o = 0;
          t.forEach(function(t) {
            t.once(e, s);
          });
        } else i();
        function s() {
          ++o == r && i();
        }
      }),
      (f.dispatchEvent = function(t, e, n) {
        var i = e ? [e].concat(n) : n;
        if ((this.emitEvent(t, i), a))
          if (((this.$element = this.$element || a(this.element)), e)) {
            var r = a.Event(e);
            (r.type = t), this.$element.trigger(r, n);
          } else this.$element.trigger(t, n);
      }),
      (f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function(t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (f.unstamp = function(t) {
        (t = this._find(t)) &&
          t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (f._find = function(t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (f._manageStamps = function() {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
      }),
      (f._manageStamp = n),
      (f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          i = r(t);
        return {
          left: e.left - n.left - i.marginLeft,
          top: e.top - n.top - i.marginTop,
          right: n.right - e.right - i.marginRight,
          bottom: n.bottom - e.bottom - i.marginBottom
        };
      }),
      (f.handleEvent = o.handleEvent),
      (f.bindResize = function() {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function() {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function() {
        this.resize();
      }),
      o.debounceMethod(c, "onresize", 100),
      (f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function() {
        var t = r(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          var n = this.items.slice(0);
          (this.items = e.concat(n)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(n);
        }
      }),
      (f.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t),
          t &&
            t.length &&
            t.forEach(function(t) {
              t.reveal();
            });
      }),
      (f.hide = function(t) {
        this._emitCompleteOnItems("hide", t),
          t &&
            t.length &&
            t.forEach(function(t) {
              t.hide();
            });
      }),
      (f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element == t) return n;
        }
      }),
      (f.getItems = function(t) {
        t = o.makeArray(t);
        var n = [];
        return (
          t.forEach(function(t) {
            var e = this.getItem(t);
            e && n.push(e);
          }, this),
          n
        );
      }),
      (f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function(t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function() {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function(t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
          delete this.element.outlayerGUID,
          a && a.removeData(this.element, this.constructor.namespace);
      }),
      (c.data = function(t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && l[e];
      }),
      (c.create = function(t, e) {
        var n = d(c);
        return (
          (n.defaults = o.extend({}, c.defaults)),
          o.extend(n.defaults, e),
          (n.compatOptions = o.extend({}, c.compatOptions)),
          (n.namespace = t),
          (n.data = c.data),
          (n.Item = d(i)),
          o.htmlInit(n, t),
          a && a.bridget && a.bridget(t, n),
          n
        );
      }),
      (c.Item = i),
      c
    );
  }),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function(t, l) {
    var e = t.create("masonry");
    return (
      (e.compatOptions.fitWidth = "isFitWidth"),
      (e.prototype._resetLayout = function() {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (e.prototype.measureColumns = function() {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            e = t && t.element;
          this.columnWidth = (e && l(e).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          i = this.containerWidth + this.gutter,
          r = i / n,
          o = n - (i % n);
        (r = Math[o && o < 1 ? "round" : "floor"](r)),
          (this.cols = Math.max(r, 1));
      }),
      (e.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          e = l(t);
        this.containerWidth = e && e.innerWidth;
      }),
      (e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          n = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth
          );
        n = Math.min(n, this.cols);
        for (
          var i = this._getColGroup(n),
            r = Math.min.apply(Math, i),
            o = i.indexOf(r),
            s = { x: this.columnWidth * o, y: r },
            a = r + t.size.outerHeight,
            u = this.cols + 1 - i.length,
            l = 0;
          l < u;
          l++
        )
          this.colYs[o + l] = a;
        return s;
      }),
      (e.prototype._getColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) {
          var r = this.colYs.slice(i, i + t);
          e[i] = Math.max.apply(Math, r);
        }
        return e;
      }),
      (e.prototype._manageStamp = function(t) {
        var e = l(t),
          n = this._getElementOffset(t),
          i = this._getOption("originLeft") ? n.left : n.right,
          r = i + e.outerWidth,
          o = Math.floor(i / this.columnWidth);
        o = Math.max(0, o);
        var s = Math.floor(r / this.columnWidth);
        (s -= r % this.columnWidth ? 0 : 1), (s = Math.min(this.cols - 1, s));
        for (
          var a =
              (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight,
            u = o;
          u <= s;
          u++
        )
          this.colYs[u] = Math.max(a, this.colYs[u]);
      }),
      (e.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (e.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (e.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      e
    );
  }),
  (function(l) {
    "use strict";
    l.fn.multipleFilterMasonry = function(i) {
      var r = [],
        o = [];
      "list" === i.selectorType &&
        l(i.filtersGroupSelector)
          .children()
          .each(function() {
            o.push(l(this).data("filter"));
          });
      var s = function(t) {
          var i = [];
          return (
            l(r).each(function(n) {
              l(t).each(function(t, e) {
                r[n].is(e) && -1 === l.inArray(r[n], i) && i.push(r[n]);
              });
            }),
            i
          );
        },
        a = function(t, e) {
          t.empty(),
            l(e).each(function() {
              l(t).append(l(this));
            }),
            t.masonry("reloadItems"),
            t.masonry();
        },
        u = function(n) {
          var t, e;
          l(i.filtersGroupSelector)
            .children()
            .each(function() {
              l(this).on("click", function() {
                l(i.filtersGroupSelector)
                  .children()
                  .removeClass("selected"),
                  (window.location.hash = l(this).data("filter"));
                var t = [];
                t.push("." + l(this).data("filter")),
                  l(this).addClass("selected");
                var e = r;
                0 < t.length && (e = s(t)), a(n, e);
              });
            }),
            (t = n),
            (e = window.location.hash.replace("#", "")),
            -1 !== l.inArray(e, o) && a(t, l("." + e)),
            l(i.filtersGroupSelector)
              .children()
              .removeClass("selected"),
            l(
              ".filters li[data-filter=" +
                window.location.hash.replace("#", "") +
                "]"
            ).addClass("selected");
        };
      return this.each(function() {
        var t,
          n,
          e = l(this);
        (t = e).find(i.itemSelector).each(function() {
          r.push(l(this));
        }),
          t.masonry(i),
          "list" === i.selectorType
            ? u(e)
            : ((n = e),
              l(i.filtersGroupSelector)
                .find("input[type=radio]")
                .each(function() {
                  l(this).change(function() {
                    var t = [];
                    l(i.filtersGroupSelector)
                      .find("input[type=radio]")
                      .each(function() {
                        l(this).is(":checked") && t.push("." + l(this).val());
                      });
                    var e = r;
                    0 < t.length && (e = s(t)), a(n, e);
                  });
                }));
      });
    };
  })(window.jQuery),
  (function(t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.SimpleBar = e())
      : (t.SimpleBar = e());
  })(this, function() {
    return (function(n) {
      function i(t) {
        if (r[t]) return r[t].exports;
        var e = (r[t] = { i: t, l: !1, exports: {} });
        return n[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports;
      }
      var r = {};
      return (
        (i.m = n),
        (i.c = r),
        (i.d = function(t, e, n) {
          i.o(t, e) ||
            Object.defineProperty(t, e, {
              configurable: !1,
              enumerable: !0,
              get: n
            });
        }),
        (i.n = function(t) {
          var e =
            t && t.__esModule
              ? function() {
                  return t.default;
                }
              : function() {
                  return t;
                };
          return i.d(e, "a", e), e;
        }),
        (i.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 27))
      );
    })([
      function(t, e, n) {
        var i = n(23)("wks"),
          r = n(12),
          o = n(1).Symbol,
          s = "function" == typeof o;
        (t.exports = function(t) {
          return i[t] || (i[t] = (s && o[t]) || (s ? o : r)("Symbol." + t));
        }).store = i;
      },
      function(t, e) {
        var n = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
          return n.call(t, e);
        };
      },
      function(t, e) {
        var n = (t.exports = { version: "2.5.1" });
        "number" == typeof __e && (__e = n);
      },
      function(t, e, n) {
        var i = n(5),
          r = n(11);
        t.exports = n(7)
          ? function(t, e, n) {
              return i.f(t, e, r(1, n));
            }
          : function(t, e, n) {
              return (t[e] = n), t;
            };
      },
      function(t, e, n) {
        var i = n(6),
          r = n(33),
          o = n(34),
          s = Object.defineProperty;
        e.f = n(7)
          ? Object.defineProperty
          : function(t, e, n) {
              if ((i(t), (e = o(e, !0)), i(n), r))
                try {
                  return s(t, e, n);
                } catch (t) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported!");
              return "value" in n && (t[e] = n.value), t;
            };
      },
      function(t, e, n) {
        var i = n(10);
        t.exports = function(t) {
          if (!i(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      function(t, e, n) {
        t.exports = !n(16)(function() {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
      },
      function(t, e) {
        var n = Math.ceil,
          i = Math.floor;
        t.exports = function(t) {
          return isNaN((t = +t)) ? 0 : (0 < t ? i : n)(t);
        };
      },
      function(t, e) {
        t.exports = function(t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      function(t, e) {
        t.exports = function(t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      function(t, e) {
        t.exports = function(t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          };
        };
      },
      function(t, e) {
        var n = 0,
          i = Math.random();
        t.exports = function(t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++n + i).toString(36)
          );
        };
      },
      function(t, e) {
        t.exports = {};
      },
      function(t, e, n) {
        var i = n(23)("keys"),
          r = n(12);
        t.exports = function(t) {
          return i[t] || (i[t] = r(t));
        };
      },
      function(t, e, n) {
        var m = n(1),
          g = n(3),
          v = n(4),
          y = n(18),
          b = n(19),
          x = function(t, e, n) {
            var i,
              r,
              o,
              s,
              a = t & x.F,
              u = t & x.G,
              l = t & x.S,
              c = t & x.P,
              f = t & x.B,
              d = u ? m : l ? m[e] || (m[e] = {}) : (m[e] || {}).prototype,
              h = u ? g : g[e] || (g[e] = {}),
              p = h.prototype || (h.prototype = {});
            for (i in (u && (n = e), n))
              (o = ((r = !a && d && void 0 !== d[i]) ? d : n)[i]),
                (s =
                  f && r
                    ? b(o, m)
                    : c && "function" == typeof o
                    ? b(Function.call, o)
                    : o),
                d && y(d, i, o, t & x.U),
                h[i] != o && v(h, i, s),
                c && p[i] != o && (p[i] = o);
          };
        (m.core = g),
          (x.F = 1),
          (x.G = 2),
          (x.S = 4),
          (x.P = 8),
          (x.B = 16),
          (x.W = 32),
          (x.U = 64),
          (x.R = 128),
          (t.exports = x);
      },
      function(t, e) {
        t.exports = function(t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      function(t, e, n) {
        var i = n(10),
          r = n(1).document,
          o = i(r) && i(r.createElement);
        t.exports = function(t) {
          return o ? r.createElement(t) : {};
        };
      },
      function(t, e, n) {
        var o = n(1),
          s = n(4),
          a = n(2),
          u = n(12)("src"),
          i = Function.toString,
          l = ("" + i).split("toString");
        (n(3).inspectSource = function(t) {
          return i.call(t);
        }),
          (t.exports = function(t, e, n, i) {
            var r = "function" == typeof n;
            r && (a(n, "name") || s(n, "name", e)),
              t[e] !== n &&
                (r &&
                  (a(n, u) || s(n, u, t[e] ? "" + t[e] : l.join(String(e)))),
                t === o
                  ? (t[e] = n)
                  : i
                  ? t[e]
                    ? (t[e] = n)
                    : s(t, e, n)
                  : (delete t[e], s(t, e, n)));
          })(Function.prototype, "toString", function() {
            return ("function" == typeof this && this[u]) || i.call(this);
          });
      },
      function(t, e, n) {
        var o = n(35);
        t.exports = function(i, r, t) {
          if ((o(i), void 0 === r)) return i;
          switch (t) {
            case 1:
              return function(t) {
                return i.call(r, t);
              };
            case 2:
              return function(t, e) {
                return i.call(r, t, e);
              };
            case 3:
              return function(t, e, n) {
                return i.call(r, t, e, n);
              };
          }
          return function() {
            return i.apply(r, arguments);
          };
        };
      },
      function(t, e, n) {
        var i = n(41),
          r = n(9);
        t.exports = function(t) {
          return i(r(t));
        };
      },
      function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
          return n.call(t).slice(8, -1);
        };
      },
      function(t, e, n) {
        var i = n(8),
          r = Math.min;
        t.exports = function(t) {
          return 0 < t ? r(i(t), 9007199254740991) : 0;
        };
      },
      function(t, e, n) {
        var i = n(1),
          r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        t.exports = function(t) {
          return r[t] || (r[t] = {});
        };
      },
      function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
      },
      function(t, e, n) {
        var i = n(5).f,
          r = n(2),
          o = n(0)("toStringTag");
        t.exports = function(t, e, n) {
          t &&
            !r((t = n ? t : t.prototype), o) &&
            i(t, o, { configurable: !0, value: e });
        };
      },
      function(t, e, n) {
        var i = n(9);
        t.exports = function(t) {
          return Object(i(t));
        };
      },
      function(t, e, n) {
        "use strict";
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n(28);
        var s = i(n(53)),
          a = i(n(54)),
          u = i(n(56));
        n(57), (Object.assign = n(58));
        var r = (function() {
          function r(t, e) {
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              (this.el = t),
              this.flashTimeout,
              this.contentEl,
              this.scrollContentEl,
              (this.dragOffset = { x: 0, y: 0 }),
              (this.isVisible = { x: !0, y: !0 }),
              (this.scrollOffsetAttr = { x: "scrollLeft", y: "scrollTop" }),
              (this.sizeAttr = { x: "offsetWidth", y: "offsetHeight" }),
              (this.scrollSizeAttr = { x: "scrollWidth", y: "scrollHeight" }),
              (this.offsetAttr = { x: "left", y: "top" }),
              this.globalObserver,
              this.mutationObserver,
              this.resizeObserver,
              this.currentAxis,
              this.isRtl,
              (this.options = Object.assign({}, r.defaultOptions, e)),
              (this.classNames = this.options.classNames),
              (this.scrollbarWidth = (0, s.default)()),
              (this.offsetSize = 20),
              (this.flashScrollbar = this.flashScrollbar.bind(this)),
              (this.onDragY = this.onDragY.bind(this)),
              (this.onDragX = this.onDragX.bind(this)),
              (this.onScrollY = this.onScrollY.bind(this)),
              (this.onScrollX = this.onScrollX.bind(this)),
              (this.drag = this.drag.bind(this)),
              (this.onEndDrag = this.onEndDrag.bind(this)),
              (this.onMouseEnter = this.onMouseEnter.bind(this)),
              (this.recalculate = (0, a.default)(this.recalculate, 100, {
                leading: !0
              })),
              this.init();
          }
          return (
            (t = r),
            (n = [
              {
                key: "initHtmlApi",
                value: function() {
                  (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(
                    this
                  )),
                    "undefined" != typeof MutationObserver &&
                      ((this.globalObserver = new MutationObserver(function(t) {
                        t.forEach(function(t) {
                          Array.from(t.addedNodes).forEach(function(t) {
                            1 === t.nodeType &&
                              (t.hasAttribute("data-simplebar")
                                ? !t.SimpleBar && new r(t, r.getElOptions(t))
                                : Array.from(
                                    t.querySelectorAll("[data-simplebar]")
                                  ).forEach(function(t) {
                                    !t.SimpleBar && new r(t, r.getElOptions(t));
                                  }));
                          }),
                            Array.from(t.removedNodes).forEach(function(t) {
                              1 === t.nodeType &&
                                (t.hasAttribute("data-simplebar")
                                  ? t.SimpleBar && t.SimpleBar.unMount()
                                  : Array.from(
                                      t.querySelectorAll("[data-simplebar]")
                                    ).forEach(function(t) {
                                      t.SimpleBar && t.SimpleBar.unMount();
                                    }));
                            });
                        });
                      })),
                      this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                      })),
                    "complete" === document.readyState ||
                    ("loading" !== document.readyState &&
                      !document.documentElement.doScroll)
                      ? window.setTimeout(this.initDOMLoadedElements.bind(this))
                      : (document.addEventListener(
                          "DOMContentLoaded",
                          this.initDOMLoadedElements
                        ),
                        window.addEventListener(
                          "load",
                          this.initDOMLoadedElements
                        ));
                }
              },
              {
                key: "getElOptions",
                value: function(i) {
                  return Object.keys(r.htmlAttributes).reduce(function(t, e) {
                    var n = r.htmlAttributes[e];
                    return (
                      i.hasAttribute(n) &&
                        (t[e] = JSON.parse(i.getAttribute(n) || !0)),
                      t
                    );
                  }, {});
                }
              },
              {
                key: "removeObserver",
                value: function() {
                  this.globalObserver.disconnect();
                }
              },
              {
                key: "initDOMLoadedElements",
                value: function() {
                  document.removeEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements
                  ),
                    window.removeEventListener(
                      "load",
                      this.initDOMLoadedElements
                    ),
                    Array.from(
                      document.querySelectorAll("[data-simplebar]")
                    ).forEach(function(t) {
                      t.SimpleBar || new r(t, r.getElOptions(t));
                    });
                }
              },
              {
                key: "defaultOptions",
                get: function() {
                  return {
                    autoHide: !0,
                    forceVisible: !1,
                    classNames: {
                      content: "simplebar-content",
                      scrollContent: "simplebar-scroll-content",
                      scrollbar: "simplebar-scrollbar",
                      track: "simplebar-track"
                    },
                    scrollbarMinSize: 25
                  };
                }
              },
              {
                key: "htmlAttributes",
                get: function() {
                  return {
                    autoHide: "data-simplebar-auto-hide",
                    forceVisible: "data-simplebar-force-visible",
                    scrollbarMinSize: "data-simplebar-scrollbar-min-size"
                  };
                }
              }
            ]),
            (e = [
              {
                key: "init",
                value: function() {
                  (this.el.SimpleBar = this).initDOM(),
                    (this.scrollbarX = this.trackX.querySelector(
                      ".".concat(this.classNames.scrollbar)
                    )),
                    (this.scrollbarY = this.trackY.querySelector(
                      ".".concat(this.classNames.scrollbar)
                    )),
                    (this.isRtl =
                      "rtl" === getComputedStyle(this.contentEl).direction),
                    (this.scrollContentEl.style[
                      this.isRtl ? "paddingLeft" : "paddingRight"
                    ] = "".concat(
                      this.scrollbarWidth || this.offsetSize,
                      "px"
                    )),
                    (this.scrollContentEl.style.marginBottom = "-".concat(
                      2 * this.scrollbarWidth || this.offsetSize,
                      "px"
                    )),
                    (this.contentEl.style.paddingBottom = "".concat(
                      this.scrollbarWidth || this.offsetSize,
                      "px"
                    )),
                    0 !== this.scrollbarWidth &&
                      (this.contentEl.style[
                        this.isRtl ? "marginLeft" : "marginRight"
                      ] = "-".concat(this.scrollbarWidth, "px")),
                    this.recalculate(),
                    this.initListeners();
                }
              },
              {
                key: "initDOM",
                value: function() {
                  var e = this;
                  if (
                    Array.from(this.el.children).filter(function(t) {
                      return t.classList.contains(e.classNames.scrollContent);
                    }).length
                  )
                    (this.trackX = this.el.querySelector(
                      ".".concat(this.classNames.track, ".horizontal")
                    )),
                      (this.trackY = this.el.querySelector(
                        ".".concat(this.classNames.track, ".vertical")
                      )),
                      (this.scrollContentEl = this.el.querySelector(
                        ".".concat(this.classNames.scrollContent)
                      )),
                      (this.contentEl = this.el.querySelector(
                        ".".concat(this.classNames.content)
                      ));
                  else {
                    for (
                      this.scrollContentEl = document.createElement("div"),
                        this.contentEl = document.createElement("div"),
                        this.scrollContentEl.classList.add(
                          this.classNames.scrollContent
                        ),
                        this.contentEl.classList.add(this.classNames.content);
                      this.el.firstChild;

                    )
                      this.contentEl.appendChild(this.el.firstChild);
                    this.scrollContentEl.appendChild(this.contentEl),
                      this.el.appendChild(this.scrollContentEl);
                  }
                  if (!this.trackX || !this.trackY) {
                    var t = document.createElement("div"),
                      n = document.createElement("div");
                    t.classList.add(this.classNames.track),
                      n.classList.add(this.classNames.scrollbar),
                      t.appendChild(n),
                      (this.trackX = t.cloneNode(!0)),
                      this.trackX.classList.add("horizontal"),
                      (this.trackY = t.cloneNode(!0)),
                      this.trackY.classList.add("vertical"),
                      this.el.insertBefore(this.trackX, this.el.firstChild),
                      this.el.insertBefore(this.trackY, this.el.firstChild);
                  }
                  this.el.setAttribute("data-simplebar", "init");
                }
              },
              {
                key: "initListeners",
                value: function() {
                  var e = this;
                  this.options.autoHide &&
                    this.el.addEventListener("mouseenter", this.onMouseEnter),
                    this.scrollbarY.addEventListener("mousedown", this.onDragY),
                    this.scrollbarX.addEventListener("mousedown", this.onDragX),
                    this.scrollContentEl.addEventListener(
                      "scroll",
                      this.onScrollY
                    ),
                    this.contentEl.addEventListener("scroll", this.onScrollX),
                    "undefined" != typeof MutationObserver &&
                      ((this.mutationObserver = new MutationObserver(function(
                        t
                      ) {
                        t.forEach(function(t) {
                          (e.isChildNode(t.target) || t.addedNodes.length) &&
                            e.recalculate();
                        });
                      })),
                      this.mutationObserver.observe(this.el, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                      })),
                    (this.resizeObserver = new u.default(
                      this.recalculate.bind(this)
                    )),
                    this.resizeObserver.observe(this.el);
                }
              },
              {
                key: "removeListeners",
                value: function() {
                  this.options.autoHide &&
                    this.el.removeEventListener(
                      "mouseenter",
                      this.onMouseEnter
                    ),
                    this.scrollbarX.removeEventListener(
                      "mousedown",
                      this.onDragX
                    ),
                    this.scrollbarY.removeEventListener(
                      "mousedown",
                      this.onDragY
                    ),
                    this.scrollContentEl.removeEventListener(
                      "scroll",
                      this.onScrollY
                    ),
                    this.contentEl.removeEventListener(
                      "scroll",
                      this.onScrollX
                    ),
                    this.mutationObserver.disconnect(),
                    this.resizeObserver.disconnect();
                }
              },
              {
                key: "onDragX",
                value: function(t) {
                  this.onDrag(t, "x");
                }
              },
              {
                key: "onDragY",
                value: function(t) {
                  this.onDrag(t, "y");
                }
              },
              {
                key: "onDrag",
                value: function(t) {
                  var e =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : "y";
                  t.preventDefault();
                  var n = "y" === e ? this.scrollbarY : this.scrollbarX,
                    i = "y" === e ? t.pageY : t.pageX;
                  (this.dragOffset[e] =
                    i - n.getBoundingClientRect()[this.offsetAttr[e]]),
                    (this.currentAxis = e),
                    document.addEventListener("mousemove", this.drag),
                    document.addEventListener("mouseup", this.onEndDrag);
                }
              },
              {
                key: "drag",
                value: function(t) {
                  var e, n, i;
                  t.preventDefault(),
                    (i =
                      "y" === this.currentAxis
                        ? ((e = t.pageY),
                          (n = this.trackY),
                          this.scrollContentEl)
                        : ((e = t.pageX), (n = this.trackX), this.contentEl));
                  var r =
                    ((e -
                      n.getBoundingClientRect()[
                        this.offsetAttr[this.currentAxis]
                      ] -
                      this.dragOffset[this.currentAxis]) /
                      n[this.sizeAttr[this.currentAxis]]) *
                    this.contentEl[this.scrollSizeAttr[this.currentAxis]];
                  i[this.scrollOffsetAttr[this.currentAxis]] = r;
                }
              },
              {
                key: "onEndDrag",
                value: function() {
                  document.removeEventListener("mousemove", this.drag),
                    document.removeEventListener("mouseup", this.onEndDrag);
                }
              },
              {
                key: "resizeScrollbar",
                value: function() {
                  var t,
                    e,
                    n,
                    i,
                    r,
                    o =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : "y",
                    s =
                      (r =
                        "x" === o
                          ? ((t = this.trackX),
                            (e = this.scrollbarX),
                            (n = this.contentEl[this.scrollOffsetAttr[o]]),
                            (i = this.contentSizeX),
                            this.scrollbarXSize)
                          : ((t = this.trackY),
                            (e = this.scrollbarY),
                            (n = this.scrollContentEl[
                              this.scrollOffsetAttr[o]
                            ]),
                            (i = this.contentSizeY),
                            this.scrollbarYSize)) / i,
                    a = n / (i - r),
                    u = Math.max(~~(s * r), this.options.scrollbarMinSize),
                    l = ~~((r - u) * a);
                  (this.isVisible[o] = r < i),
                    this.isVisible[o] || this.options.forceVisible
                      ? ((t.style.visibility = "visible"),
                        this.options.forceVisible
                          ? (e.style.visibility = "hidden")
                          : (e.style.visibility = "visible"),
                        "x" === o
                          ? ((e.style.left = "".concat(l, "px")),
                            (e.style.width = "".concat(u, "px")))
                          : ((e.style.top = "".concat(l, "px")),
                            (e.style.height = "".concat(u, "px"))))
                      : (t.style.visibility = "hidden");
                }
              },
              {
                key: "onScrollX",
                value: function() {
                  this.flashScrollbar("x");
                }
              },
              {
                key: "onScrollY",
                value: function() {
                  this.flashScrollbar("y");
                }
              },
              {
                key: "onMouseEnter",
                value: function() {
                  this.flashScrollbar("x"), this.flashScrollbar("y");
                }
              },
              {
                key: "flashScrollbar",
                value: function() {
                  var t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "y";
                  this.resizeScrollbar(t), this.showScrollbar(t);
                }
              },
              {
                key: "showScrollbar",
                value: function() {
                  var t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "y";
                  this.isVisible[t] &&
                    ("x" === t
                      ? this.scrollbarX.classList.add("visible")
                      : this.scrollbarY.classList.add("visible"),
                    this.options.autoHide &&
                      ("number" == typeof this.flashTimeout &&
                        window.clearTimeout(this.flashTimeout),
                      (this.flashTimeout = window.setTimeout(
                        this.hideScrollbar.bind(this),
                        1e3
                      ))));
                }
              },
              {
                key: "hideScrollbar",
                value: function() {
                  this.scrollbarX.classList.remove("visible"),
                    this.scrollbarY.classList.remove("visible"),
                    "number" == typeof this.flashTimeout &&
                      window.clearTimeout(this.flashTimeout);
                }
              },
              {
                key: "recalculate",
                value: function() {
                  (this.contentSizeX = this.contentEl[this.scrollSizeAttr.x]),
                    (this.contentSizeY =
                      this.contentEl[this.scrollSizeAttr.y] -
                      (this.scrollbarWidth || this.offsetSize)),
                    (this.scrollbarXSize = this.trackX[this.sizeAttr.x]),
                    (this.scrollbarYSize = this.trackY[this.sizeAttr.y]),
                    this.resizeScrollbar("x"),
                    this.resizeScrollbar("y"),
                    this.options.autoHide ||
                      (this.showScrollbar("x"), this.showScrollbar("y"));
                }
              },
              {
                key: "getScrollElement",
                value: function() {
                  return "y" ===
                    (0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "y")
                    ? this.scrollContentEl
                    : this.contentEl;
                }
              },
              {
                key: "getContentElement",
                value: function() {
                  return this.contentEl;
                }
              },
              {
                key: "unMount",
                value: function() {
                  this.removeListeners(), (this.el.SimpleBar = null);
                }
              },
              {
                key: "isChildNode",
                value: function(t) {
                  return (
                    null !== t &&
                    (t === this.el || this.isChildNode(t.parentNode))
                  );
                }
              }
            ]) && o(t.prototype, e),
            n && o(t, n),
            r
          );
          var t, e, n;
        })();
        (e.default = r).initHtmlApi();
      },
      function(t, e, n) {
        n(29), n(46), (t.exports = n(3).Array.from);
      },
      function(t, e, n) {
        "use strict";
        var i = n(30)(!0);
        n(31)(
          String,
          "String",
          function(t) {
            (this._t = String(t)), (this._i = 0);
          },
          function() {
            var t,
              e = this._t,
              n = this._i;
            return n >= e.length
              ? { value: void 0, done: !0 }
              : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 });
          }
        );
      },
      function(t, e, n) {
        var u = n(8),
          l = n(9);
        t.exports = function(a) {
          return function(t, e) {
            var n,
              i,
              r = String(l(t)),
              o = u(e),
              s = r.length;
            return o < 0 || s <= o
              ? a
                ? ""
                : void 0
              : (n = r.charCodeAt(o)) < 55296 ||
                56319 < n ||
                o + 1 === s ||
                (i = r.charCodeAt(o + 1)) < 56320 ||
                57343 < i
              ? a
                ? r.charAt(o)
                : n
              : a
              ? r.slice(o, o + 2)
              : i - 56320 + ((n - 55296) << 10) + 65536;
          };
        };
      },
      function(t, e, n) {
        "use strict";
        var b = n(32),
          x = n(15),
          w = n(18),
          C = n(4),
          E = n(2),
          T = n(13),
          S = n(36),
          k = n(25),
          _ = n(45),
          O = n(0)("iterator"),
          A = !([].keys && "next" in [].keys()),
          L = function() {
            return this;
          };
        t.exports = function(t, e, n, i, r, o, s) {
          S(n, e, i);
          var a,
            u,
            l,
            c = function(t) {
              if (!A && t in p) return p[t];
              switch (t) {
                case "keys":
                case "values":
                  return function() {
                    return new n(this, t);
                  };
              }
              return function() {
                return new n(this, t);
              };
            },
            f = e + " Iterator",
            d = "values" == r,
            h = !1,
            p = t.prototype,
            m = p[O] || p["@@iterator"] || (r && p[r]),
            g = m || c(r),
            v = r ? (d ? c("entries") : g) : void 0,
            y = ("Array" == e && p.entries) || m;
          if (
            (y &&
              (l = _(y.call(new t()))) !== Object.prototype &&
              l.next &&
              (k(l, f, !0), b || E(l, O) || C(l, O, L)),
            d &&
              m &&
              "values" !== m.name &&
              ((h = !0),
              (g = function() {
                return m.call(this);
              })),
            (b && !s) || (!A && !h && p[O]) || C(p, O, g),
            (T[e] = g),
            (T[f] = L),
            r)
          )
            if (
              ((a = {
                values: d ? g : c("values"),
                keys: o ? g : c("keys"),
                entries: v
              }),
              s)
            )
              for (u in a) u in p || w(p, u, a[u]);
            else x(x.P + x.F * (A || h), e, a);
          return a;
        };
      },
      function(t, e) {
        t.exports = !1;
      },
      function(t, e, n) {
        t.exports =
          !n(7) &&
          !n(16)(function() {
            return (
              7 !=
              Object.defineProperty(n(17)("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a
            );
          });
      },
      function(t, e, n) {
        var r = n(10);
        t.exports = function(t, e) {
          if (!r(t)) return t;
          var n, i;
          if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
            return i;
          if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t))))
            return i;
          if (
            !e &&
            "function" == typeof (n = t.toString) &&
            !r((i = n.call(t)))
          )
            return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(t, e) {
        t.exports = function(t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        };
      },
      function(t, e, n) {
        "use strict";
        var i = n(37),
          r = n(11),
          o = n(25),
          s = {};
        n(4)(s, n(0)("iterator"), function() {
          return this;
        }),
          (t.exports = function(t, e, n) {
            (t.prototype = i(s, { next: r(1, n) })), o(t, e + " Iterator");
          });
      },
      function(t, e, i) {
        var r = i(6),
          o = i(38),
          s = i(24),
          a = i(14)("IE_PROTO"),
          u = function() {},
          l = function() {
            var t,
              e = i(17)("iframe"),
              n = s.length;
            for (
              e.style.display = "none",
                i(44).appendChild(e),
                e.src = "javascript:",
                (t = e.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                l = t.F;
              n--;

            )
              delete l.prototype[s[n]];
            return l();
          };
        t.exports =
          Object.create ||
          function(t, e) {
            var n;
            return (
              null !== t
                ? ((u.prototype = r(t)),
                  (n = new u()),
                  (u.prototype = null),
                  (n[a] = t))
                : (n = l()),
              void 0 === e ? n : o(n, e)
            );
          };
      },
      function(t, e, n) {
        var s = n(5),
          a = n(6),
          u = n(39);
        t.exports = n(7)
          ? Object.defineProperties
          : function(t, e) {
              a(t);
              for (var n, i = u(e), r = i.length, o = 0; o < r; )
                s.f(t, (n = i[o++]), e[n]);
              return t;
            };
      },
      function(t, e, n) {
        var i = n(40),
          r = n(24);
        t.exports =
          Object.keys ||
          function(t) {
            return i(t, r);
          };
      },
      function(t, e, n) {
        var s = n(2),
          a = n(20),
          u = n(42)(!1),
          l = n(14)("IE_PROTO");
        t.exports = function(t, e) {
          var n,
            i = a(t),
            r = 0,
            o = [];
          for (n in i) n != l && s(i, n) && o.push(n);
          for (; e.length > r; ) s(i, (n = e[r++])) && (~u(o, n) || o.push(n));
          return o;
        };
      },
      function(t, e, n) {
        var i = n(21);
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(t) {
              return "String" == i(t) ? t.split("") : Object(t);
            };
      },
      function(t, e, n) {
        var u = n(20),
          l = n(22),
          c = n(43);
        t.exports = function(a) {
          return function(t, e, n) {
            var i,
              r = u(t),
              o = l(r.length),
              s = c(n, o);
            if (a && e != e) {
              for (; s < o; ) if ((i = r[s++]) != i) return !0;
            } else
              for (; s < o; s++)
                if ((a || s in r) && r[s] === e) return a || s || 0;
            return !a && -1;
          };
        };
      },
      function(t, e, n) {
        var i = n(8),
          r = Math.max,
          o = Math.min;
        t.exports = function(t, e) {
          return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e);
        };
      },
      function(t, e, n) {
        var i = n(1).document;
        t.exports = i && i.documentElement;
      },
      function(t, e, n) {
        var i = n(2),
          r = n(26),
          o = n(14)("IE_PROTO"),
          s = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function(t) {
            return (
              (t = r(t)),
              i(t, o)
                ? t[o]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? s
                : null
            );
          };
      },
      function(t, e, n) {
        "use strict";
        var d = n(19),
          i = n(15),
          h = n(26),
          p = n(47),
          m = n(48),
          g = n(22),
          v = n(49),
          y = n(50);
        i(
          i.S +
            i.F *
              !n(52)(function(t) {
                Array.from(t);
              }),
          "Array",
          {
            from: function(t) {
              var e,
                n,
                i,
                r,
                o = h(t),
                s = "function" == typeof this ? this : Array,
                a = arguments.length,
                u = 1 < a ? arguments[1] : void 0,
                l = void 0 !== u,
                c = 0,
                f = y(o);
              if (
                (l && (u = d(u, 2 < a ? arguments[2] : void 0, 2)),
                null == f || (s == Array && m(f)))
              )
                for (n = new s((e = g(o.length))); c < e; c++)
                  v(n, c, l ? u(o[c], c) : o[c]);
              else
                for (r = f.call(o), n = new s(); !(i = r.next()).done; c++)
                  v(n, c, l ? p(r, u, [i.value, c], !0) : i.value);
              return (n.length = c), n;
            }
          }
        );
      },
      function(t, e, n) {
        var o = n(6);
        t.exports = function(t, e, n, i) {
          try {
            return i ? e(o(n)[0], n[1]) : e(n);
          } catch (e) {
            var r = t.return;
            throw (void 0 !== r && o(r.call(t)), e);
          }
        };
      },
      function(t, e, n) {
        var i = n(13),
          r = n(0)("iterator"),
          o = Array.prototype;
        t.exports = function(t) {
          return void 0 !== t && (i.Array === t || o[r] === t);
        };
      },
      function(t, e, n) {
        "use strict";
        var i = n(5),
          r = n(11);
        t.exports = function(t, e, n) {
          e in t ? i.f(t, e, r(0, n)) : (t[e] = n);
        };
      },
      function(t, e, n) {
        var i = n(51),
          r = n(0)("iterator"),
          o = n(13);
        t.exports = n(3).getIteratorMethod = function(t) {
          if (null != t) return t[r] || t["@@iterator"] || o[i(t)];
        };
      },
      function(t, e, n) {
        var r = n(21),
          o = n(0)("toStringTag"),
          s =
            "Arguments" ==
            r(
              (function() {
                return arguments;
              })()
            );
        t.exports = function(t) {
          var e, n, i;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function(t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), o))
            ? n
            : s
            ? r(e)
            : "Object" == (i = r(e)) && "function" == typeof e.callee
            ? "Arguments"
            : i;
        };
      },
      function(t, e, n) {
        var o = n(0)("iterator"),
          s = !1;
        try {
          var i = [7][o]();
          (i.return = function() {
            s = !0;
          }),
            Array.from(i, function() {
              throw 2;
            });
        } catch (t) {}
        t.exports = function(t, e) {
          if (!e && !s) return !1;
          var n = !1;
          try {
            var i = [7],
              r = i[o]();
            (r.next = function() {
              return { done: (n = !0) };
            }),
              (i[o] = function() {
                return r;
              }),
              t(i);
          } catch (t) {}
          return n;
        };
      },
      function(t, e, n) {
        var i, r, o;
        (r = []),
          void 0 !==
            (o =
              "function" ==
              typeof (i = function() {
                "use strict";
                return function() {
                  if ("undefined" == typeof document) return 0;
                  var t,
                    e = document.body,
                    n = document.createElement("div"),
                    i = n.style;
                  return (
                    (i.position = "absolute"),
                    (i.top = i.left = "-9999px"),
                    (i.width = i.height = "100px"),
                    (i.overflow = "scroll"),
                    e.appendChild(n),
                    (t = n.offsetWidth - n.clientWidth),
                    e.removeChild(n),
                    t
                  );
                };
              })
                ? i.apply(e, r)
                : i) && (t.exports = o);
      },
      function(r, t, e) {
        (function(t) {
          function y(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
          }
          function b(t) {
            if ("number" == typeof t) return t;
            if (
              "symbol" == typeof (e = t) ||
              ((n = e) && "object" == typeof n && d.call(e) == s)
            )
              return o;
            var e, n;
            if (y(t)) {
              var i = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = y(i) ? i + "" : i;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var r = l.test(t);
            return r || c.test(t)
              ? f(t.slice(2), r ? 2 : 8)
              : u.test(t)
              ? o
              : +t;
          }
          var o = NaN,
            s = "[object Symbol]",
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            f = parseInt,
            e = "object" == typeof t && t && t.Object === Object && t,
            n =
              "object" == typeof self && self && self.Object === Object && self,
            i = e || n || Function("return this")(),
            d = Object.prototype.toString,
            x = Math.max,
            w = Math.min,
            C = function() {
              return i.Date.now();
            };
          r.exports = function(i, r, t) {
            function o(t) {
              var e = l,
                n = c;
              return (l = c = void 0), (m = t), (d = i.apply(n, e));
            }
            function s(t) {
              var e = t - p;
              return void 0 === p || r <= e || e < 0 || (v && f <= t - m);
            }
            function a() {
              var t,
                e,
                n = C();
              if (s(n)) return u(n);
              h = setTimeout(
                a,
                ((e = r - ((t = n) - p)), v ? w(e, f - (t - m)) : e)
              );
            }
            function u(t) {
              return (h = void 0), n && l ? o(t) : ((l = c = void 0), d);
            }
            function e() {
              var t,
                e = C(),
                n = s(e);
              if (((l = arguments), (c = this), (p = e), n)) {
                if (void 0 === h)
                  return (m = t = p), (h = setTimeout(a, r)), g ? o(t) : d;
                if (v) return (h = setTimeout(a, r)), o(p);
              }
              return void 0 === h && (h = setTimeout(a, r)), d;
            }
            var l,
              c,
              f,
              d,
              h,
              p,
              m = 0,
              g = !1,
              v = !1,
              n = !0;
            if ("function" != typeof i)
              throw new TypeError("Expected a function");
            return (
              (r = b(r) || 0),
              y(t) &&
                ((g = !!t.leading),
                (f = (v = "maxWait" in t) ? x(b(t.maxWait) || 0, r) : f),
                (n = "trailing" in t ? !!t.trailing : n)),
              (e.cancel = function() {
                void 0 !== h && clearTimeout(h), (l = p = c = h = void (m = 0));
              }),
              (e.flush = function() {
                return void 0 === h ? d : u(C());
              }),
              e
            );
          };
        }.call(t, e(55)));
      },
      function(O9, P9) {
        var Q9;
        Q9 = (function() {
          return this;
        })();
        try {
          Q9 = Q9 || Function("return this")() || eval("this");
        } catch (O9) {
          "object" == typeof window && (Q9 = window);
        }
        O9.exports = Q9;
      },
      function(t, e, n) {
        "use strict";
        function f(t) {
          return parseFloat(t) || 0;
        }
        function d(n) {
          return Array.prototype.slice
            .call(arguments, 1)
            .reduce(function(t, e) {
              return t + f(n["border-" + e + "-width"]);
            }, 0);
        }
        function i(t) {
          var e = t.clientWidth,
            n = t.clientHeight;
          if (!e && !n) return g;
          var i = getComputedStyle(t),
            r = (function(t) {
              for (
                var e = {}, n = 0, i = ["top", "right", "bottom", "left"];
                n < i.length;
                n += 1
              ) {
                var r = i[n],
                  o = t["padding-" + r];
                e[r] = f(o);
              }
              return e;
            })(i),
            o = r.left + r.right,
            s = r.top + r.bottom,
            a = f(i.width),
            u = f(i.height);
          if (
            ("border-box" === i.boxSizing &&
              (Math.round(a + o) !== e && (a -= d(i, "left", "right") + o),
              Math.round(u + s) !== n && (u -= d(i, "top", "bottom") + s)),
            t !== document.documentElement)
          ) {
            var l = Math.round(a + o) - e,
              c = Math.round(u + s) - n;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(c) && (u -= c);
          }
          return h(r.left, r.top, a, u);
        }
        function r(t) {
          return s
            ? v(t)
              ? h(0, 0, (e = t.getBBox()).width, e.height)
              : i(t)
            : g;
          var e;
        }
        function h(t, e, n, i) {
          return { x: t, y: e, width: n, height: i };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = (function() {
            function i(t, n) {
              var i = -1;
              return (
                t.some(function(t, e) {
                  return t[0] === n && ((i = e), !0);
                }),
                i
              );
            }
            return "undefined" != typeof Map
              ? Map
              : (function() {
                  function t() {
                    this.__entries__ = [];
                  }
                  var e = { size: {} };
                  return (
                    (e.size.get = function() {
                      return this.__entries__.length;
                    }),
                    (t.prototype.get = function(t) {
                      var e = i(this.__entries__, t),
                        n = this.__entries__[e];
                      return n && n[1];
                    }),
                    (t.prototype.set = function(t, e) {
                      var n = i(this.__entries__, t);
                      ~n
                        ? (this.__entries__[n][1] = e)
                        : this.__entries__.push([t, e]);
                    }),
                    (t.prototype.delete = function(t) {
                      var e = this.__entries__,
                        n = i(e, t);
                      ~n && e.splice(n, 1);
                    }),
                    (t.prototype.has = function(t) {
                      return !!~i(this.__entries__, t);
                    }),
                    (t.prototype.clear = function() {
                      this.__entries__.splice(0);
                    }),
                    (t.prototype.forEach = function(t, e) {
                      void 0 === e && (e = null);
                      for (
                        var n = 0, i = this.__entries__;
                        n < i.length;
                        n += 1
                      ) {
                        var r = i[n];
                        t.call(e, r[1], r[0]);
                      }
                    }),
                    Object.defineProperties(t.prototype, e),
                    t
                  );
                })();
          })(),
          s =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            window.document === document,
          u =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame
              : function(t) {
                  return setTimeout(function() {
                    return t(Date.now());
                  }, 1e3 / 60);
                },
          a = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight"
          ],
          l =
            "undefined" != typeof navigator &&
            /Trident\/.*rv:11/.test(navigator.userAgent),
          c = "undefined" != typeof MutationObserver && !l,
          p = function() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function(t, e) {
                function n() {
                  o && ((o = !1), t()), s && r();
                }
                function i() {
                  u(n);
                }
                function r() {
                  var t = Date.now();
                  if (o) {
                    if (t - a < 2) return;
                    s = !0;
                  } else (s = !(o = !0)), setTimeout(i, e);
                  a = t;
                }
                var o = !1,
                  s = !1,
                  a = 0;
                return r;
              })(this.refresh.bind(this), 20));
          };
        (p.prototype.addObserver = function(t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_();
        }),
          (p.prototype.removeObserver = function(t) {
            var e = this.observers_,
              n = e.indexOf(t);
            ~n && e.splice(n, 1),
              !e.length && this.connected_ && this.disconnect_();
          }),
          (p.prototype.refresh = function() {
            this.updateObservers_() && this.refresh();
          }),
          (p.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(t) {
              return t.gatherActive(), t.hasActive();
            });
            return (
              t.forEach(function(t) {
                return t.broadcastActive();
              }),
              0 < t.length
            );
          }),
          (p.prototype.connect_ = function() {
            s &&
              !this.connected_ &&
              (document.addEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.addEventListener("resize", this.refresh),
              c
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (p.prototype.disconnect_ = function() {
            s &&
              this.connected_ &&
              (document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.removeEventListener("resize", this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (p.prototype.onTransitionEnd_ = function(t) {
            var e = t.propertyName;
            a.some(function(t) {
              return !!~e.indexOf(t);
            }) && this.refresh();
          }),
          (p.getInstance = function() {
            return this.instance_ || (this.instance_ = new p()), this.instance_;
          }),
          (p.instance_ = null);
        var m = function(t, e) {
            for (var n = 0, i = Object.keys(e); n < i.length; n += 1) {
              var r = i[n];
              Object.defineProperty(t, r, {
                value: e[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
              });
            }
            return t;
          },
          g = h(0, 0, 0, 0),
          v =
            "undefined" != typeof SVGGraphicsElement
              ? function(t) {
                  return t instanceof SVGGraphicsElement;
                }
              : function(t) {
                  return (
                    t instanceof SVGElement && "function" == typeof t.getBBox
                  );
                },
          y = function(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = h(0, 0, 0, 0)),
              (this.target = t);
          };
        (y.prototype.isActive = function() {
          var t = r(this.target);
          return (
            (this.contentRect_ = t).width !== this.broadcastWidth ||
            t.height !== this.broadcastHeight
          );
        }),
          (y.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return (
              (this.broadcastWidth = t.width),
              (this.broadcastHeight = t.height),
              t
            );
          });
        var b = function(t, e) {
            var n,
              i,
              r,
              o,
              s,
              a,
              u,
              l = ((i = (n = e).x),
              (r = n.y),
              (o = n.width),
              (s = n.height),
              (a =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (u = Object.create(a.prototype)),
              m(u, {
                x: i,
                y: r,
                width: o,
                height: s,
                top: r,
                right: i + o,
                bottom: s + r,
                left: i
              }),
              u);
            m(this, { target: t, contentRect: l });
          },
          x = function(t, e, n) {
            if ("function" != typeof t)
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.activeObservations_ = []),
              (this.observations_ = new o()),
              (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = n);
          };
        (x.prototype.observe = function(t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) ||
              (e.set(t, new y(t)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
          }
        }),
          (x.prototype.unobserve = function(t) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t instanceof Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var e = this.observations_;
              e.has(t) &&
                (e.delete(t), e.size || this.controller_.removeObserver(this));
            }
          }),
          (x.prototype.disconnect = function() {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (x.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(),
              this.observations_.forEach(function(t) {
                t.isActive() && e.activeObservations_.push(t);
              });
          }),
          (x.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var t = this.callbackCtx_,
                e = this.activeObservations_.map(function(t) {
                  return new b(t.target, t.broadcastRect());
                });
              this.callback_.call(t, e, t), this.clearActive();
            }
          }),
          (x.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }),
          (x.prototype.hasActive = function() {
            return 0 < this.activeObservations_.length;
          });
        var w = "undefined" != typeof WeakMap ? new WeakMap() : new o(),
          C = function(t) {
            if (!(this instanceof C))
              throw new TypeError("Cannot call a class as a function");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var e = p.getInstance(),
              n = new x(t, e, this);
            w.set(this, n);
          };
        ["observe", "unobserve", "disconnect"].forEach(function(e) {
          C.prototype[e] = function() {
            return (t = w.get(this))[e].apply(t, arguments);
            var t;
          };
        });
        var E = "undefined" != typeof ResizeObserver ? ResizeObserver : C;
        e.default = E;
      },
      function(t, e) {},
      function(t, e, n) {
        "use strict";
        var u = Object.getOwnPropertySymbols,
          l = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable;
        t.exports = (function() {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, n = 0; n < 10; n++)
              e["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function(t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var i = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function(t) {
                i[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, i)).join("")
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Object.assign
          : function(t, e) {
              for (
                var n,
                  i,
                  r = (function(t) {
                    if (null == t)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(t);
                  })(t),
                  o = 1;
                o < arguments.length;
                o++
              ) {
                for (var s in (n = Object(arguments[o])))
                  l.call(n, s) && (r[s] = n[s]);
                if (u) {
                  i = u(n);
                  for (var a = 0; a < i.length; a++)
                    c.call(n, i[a]) && (r[i[a]] = n[i[a]]);
                }
              }
              return r;
            };
      }
    ]).default;
  }),
  (function(r) {
    "use strict";
    var o = function(t, e) {
      (this.el = r(t)),
        (this.options = r.extend({}, r.fn.typed.defaults, e)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = !this.isInput && this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    };
    (o.prototype = {
      constructor: o,
      init: function() {
        var e = this;
        e.timeout = setTimeout(function() {
          for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
          e.shuffle && (e.sequence = e.shuffleArray(e.sequence)),
            e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
        }, e.startDelay);
      },
      build: function() {
        var n = this;
        if (
          (!0 === this.showCursor &&
            ((this.cursor = r(
              '<span class="typed-cursor">' + this.cursorChar + "</span>"
            )),
            this.el.after(this.cursor)),
          this.stringsElement)
        ) {
          (n.strings = []), this.stringsElement.hide();
          var t = this.stringsElement.find("p");
          r.each(t, function(t, e) {
            n.strings.push(r(e).html());
          });
        }
        this.init();
      },
      typewrite: function(o, s) {
        if (!0 !== this.stop) {
          var t = Math.round(70 * Math.random()) + this.typeSpeed,
            a = this;
          a.timeout = setTimeout(function() {
            var t = 0,
              e = o.substr(s);
            if ("^" === e.charAt(0)) {
              var n = 1;
              /^\^\d+/.test(e) &&
                ((n += (e = /\d+/.exec(e)[0]).length), (t = parseInt(e))),
                (o = o.substring(0, s) + o.substring(s + n));
            }
            if ("html" === a.contentType) {
              var i = o.substr(s).charAt(0);
              if ("<" === i || "&" === i) {
                var r = "";
                for (r = "<" === i ? ">" : ";"; o.substr(s).charAt(0) !== r; )
                  o.substr(s).charAt(0), s++;
                s++, r;
              }
            }
            a.timeout = setTimeout(function() {
              if (s === o.length) {
                if (
                  (a.options.onStringTyped(a.arrayPos),
                  a.arrayPos === a.strings.length - 1 &&
                    (a.options.callback(),
                    a.curLoop++,
                    !1 === a.loop || a.curLoop === a.loopCount))
                )
                  return;
                a.timeout = setTimeout(function() {
                  a.backspace(o, s);
                }, a.backDelay);
              } else {
                0 === s && a.options.preStringTyped(a.arrayPos);
                var t = o.substr(0, s + 1);
                a.attr
                  ? a.el.attr(a.attr, t)
                  : a.isInput
                  ? a.el.val(t)
                  : "html" === a.contentType
                  ? a.el.html(t)
                  : a.el.text(t),
                  s++,
                  a.typewrite(o, s);
              }
            }, t);
          }, t);
        }
      },
      backspace: function(e, n) {
        if (!0 !== this.stop) {
          var t = Math.round(70 * Math.random()) + this.backSpeed,
            i = this;
          i.timeout = setTimeout(function() {
            if ("html" === i.contentType && ">" === e.substr(n).charAt(0)) {
              for (; "<" !== e.substr(n).charAt(0); )
                e.substr(n).charAt(0), n--;
              n--, "<";
            }
            var t = e.substr(0, n);
            i.attr
              ? i.el.attr(i.attr, t)
              : i.isInput
              ? i.el.val(t)
              : "html" === i.contentType
              ? i.el.html(t)
              : i.el.text(t),
              n > i.stopNum
                ? (n--, i.backspace(e, n))
                : n <= i.stopNum &&
                  (i.arrayPos++,
                  i.arrayPos === i.strings.length
                    ? ((i.arrayPos = 0),
                      i.shuffle && (i.sequence = i.shuffleArray(i.sequence)),
                      i.init())
                    : i.typewrite(i.strings[i.sequence[i.arrayPos]], n));
          }, t);
        }
      },
      shuffleArray: function(t) {
        var e,
          n,
          i = t.length;
        if (i)
          for (; --i; )
            (e = t[(n = Math.floor(Math.random() * (i + 1)))]),
              (t[n] = t[i]),
              (t[i] = e);
        return t;
      },
      reset: function() {
        clearInterval(this.timeout);
        var t = this.el.attr("id");
        this.el.after('<span id="' + t + '"/>'),
          this.el.remove(),
          void 0 !== this.cursor && this.cursor.remove(),
          this.options.resetCallback();
      }
    }),
      (r.fn.typed = function(i) {
        return this.each(function() {
          var t = r(this),
            e = t.data("typed"),
            n = "object" == typeof i && i;
          e || t.data("typed", (e = new o(this, n))),
            "string" == typeof i && e[i]();
        });
      }),
      (r.fn.typed.defaults = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!"
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
      });
  })(window.jQuery),
  $(window).on("load", function() {
    var t = $(".preloader"),
      e = $(".lines-grid");
    t.find(".spinner").fadeOut(function() {
      t.fadeOut(), e.addClass("loaded");
    });
  }),
  $(function() {
    "use strict";
    var t = $(window).width(),
      e = $(window).height();
    if (
      ($(".typed-title").typed({
        stringsElement: $(".typing-title"),
        backDelay: 5e3,
        typeSpeed: 0,
        loop: !0
      }),
      $(".header").on("click", ".menu-btn", function() {
        $(".header").hasClass("opened")
          ? $(".header").removeClass("opened")
          : $(".header").addClass("opened");
      }),
      $("#video-bg").length)
    )
      $("#video-bg").YTPlayer();
    $("#home-card").length &&
      $(".top-menu").on("click", "a", function() {
        var t = $(".lines-grid"),
          e = $(this).attr("href"),
          n = $(".card-inner"),
          i = $(e),
          r = $(".top-menu li"),
          o = $(this).closest("li");
        return (
          !o.hasClass("active") & $("#home-card").length &&
            (r.removeClass("active"),
            t.removeClass("loaded"),
            o.addClass("active"),
            setTimeout(function() {
              t.addClass("loaded"),
                $(n).removeClass("active"),
                $(i).addClass("active");
            }, 1e3)),
          !1
        );
      }),
      $(".theme_panel .toggle_bts").on("click", "a", function() {
        if ($(this).hasClass("active"))
          return (
            $(this).removeClass("active"),
            $(".theme_panel").removeClass("active"),
            !1
          );
        $(this).addClass("active"), $(".theme_panel").addClass("active");
      }),
      $(".theme_panel .layout_style").on("click", "a", function() {
        var t = $(this).attr("data-color");
        return (
          $("head").append(
            '<link rel="stylesheet" href="css/theme-colors/' + t + '.css" />'
          ),
          !1
        );
      });
    var n = $(".grid-items");
    n.imagesLoaded(function() {
      n.multipleFilterMasonry({
        itemSelector: ".grid-item",
        filtersGroupSelector: ".filter-button-group",
        percentPosition: !0,
        gutter: 0
      });
    }),
      $(".filter-button-group").on("change", 'input[type="radio"]', function() {
        $(this).is(":checked") &&
          ($(".f_btn").removeClass("active"),
          $(this)
            .closest(".f_btn")
            .addClass("active")),
          $(".has-popup-image").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "popup-box",
            image: { verticalFit: !0 }
          }),
          $(".has-popup-video").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "popup-box"
          }),
          $(".has-popup-music").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "popup-box"
          }),
          $(".has-popup-media").magnificPopup({
            type: "inline",
            overflowY: "auto",
            closeBtnInside: !0,
            mainClass: "popup-box-inline"
          });
      }),
      $(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "popup-box",
        image: { verticalFit: !0 }
      }),
      $(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "popup-box"
      }),
      $(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "popup-box"
      }),
      $(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "popup-box-inline",
        callbacks: {
          open: function() {
            $(".popup-box-inline .popup-box").slimScroll({ height: e + "px" });
          }
        }
      }),
      $("#cform").validate({
        ignore: ".ignore",
        rules: {
          name: { required: !0 },
          message: { required: !0 },
          email: { required: !0, email: !0 },
          hiddenRecaptcha: {
            required: function() {
              return "" == grecaptcha.getResponse();
            }
          }
        },
        success: "valid",
        submitHandler: function() {
          $.ajax({
            url: "mailer/feedback.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              $("#cform")
                .find('input[name="name"]')
                .val() +
              "&email=" +
              $("#cform")
                .find('input[name="email"]')
                .val() +
              "&message=" +
              $("#cform")
                .find('textarea[name="message"]')
                .val(),
            beforeSend: function() {},
            complete: function() {},
            success: function(t) {
              $("#cform").fadeOut(),
                $(".alert-success")
                  .delay(1e3)
                  .fadeIn();
            }
          });
        }
      }),
      $("#comment_form").validate({
        rules: { name: { required: !0 }, message: { required: !0 } },
        success: "valid",
        submitHandler: function() {}
      }),
      $(".blogs-content").height() > $(".blogs-sidebar").height() &&
        1023 < t &&
        $(".blogs-sidebar").css({ "min-height": $(".blogs-content").height() }),
      $(".blogs-content").height() < $(".blogs-sidebar").height() &&
        1023 < t &&
        $(".blogs-content").css({ "min-height": $(".blogs-sidebar").height() }),
      $(window).resize(function() {
        var t = $(window).width();
        $(".blogs-content").height() > $(".blogs-sidebar").height() &&
          1023 < t &&
          $(".blogs-sidebar").css({
            "min-height": $(".blogs-content").height()
          }),
          $(".blogs-content").height() < $(".blogs-sidebar").height() &&
            1023 < t &&
            $(".blogs-content").css({
              "min-height": $(".blogs-sidebar").height()
            });
      }),
      $(".top-menu").on("click", "a", function() {
        return (
          $("#home-card").length ||
            (location.href = "/patrick/" + $(this).attr("href")),
          !1
        );
      });
    var i = location.hash,
      r = $(i);
    0 == i.indexOf("#") &&
      -1 != i.indexOf("-card") &&
      r.length &&
      ($(".top-menu li").removeClass("active"),
      $('.top-menu a[href="' + i + '"]')
        .parent()
        .addClass("active"),
      $(".lines-grid").removeClass("loaded"),
      $(".card-inner").removeClass("active"),
      $(i).addClass("active"));
  });
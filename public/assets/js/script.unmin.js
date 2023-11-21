! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function i(t, e) {
        e = e || et;
        var i = e.createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(t) {
        var e = !!t && "length" in t && t.length,
            i = ft.type(t);
        return "function" !== i && !ft.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e, i) {
        return ft.isFunction(e) ? ft.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? ft.grep(t, function(t) {
                    return t === e !== i
                }) : "string" != typeof e ? ft.grep(t, function(t) {
                        return st.call(e, t) > -1 !== i
                    }) : Et.test(e) ? ft.filter(e, t, i) : (e = ft.filter(e, t), ft.grep(t, function(t) {
                            return st.call(e, t) > -1 !== i && 1 === t.nodeType
                        }))
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = {};
        return ft.each(t.match(It) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function u(t, e, i) {
        var n;
        try {
            t && ft.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && ft.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    function c() {
        et.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready()
    }

    function h() {
        this.expando = ft.expando + h.uid++
    }

    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Nt.test(t) ? JSON.parse(t) : t)
    }

    function $(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(Rt, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = d(i)
                } catch (o) {}
                Mt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function p(t, e, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                    return n.cur()
                } : function() {
                    return ft.css(t, e, "")
                },
            l = a(),
            u = i && i[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== u && +l) && qt.exec(ft.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], i = i || [], c = +l || 1;
            do r = r || ".5", c /= r, ft.style(t, e, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = o)), o
    }

    function f(t) {
        var e, i = t.ownerDocument,
            n = t.nodeName,
            o = Gt[n];
        return o ? o : (e = i.body.appendChild(i.createElement(n)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Gt[n] = o, o)
    }

    function g(t, e) {
        for (var i, n, o = [], r = 0, s = t.length; s > r; r++) n = t[r], n.style && (i = n.style.display, e ? ("none" === i && (o[r] = Pt.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && Ht(n) && (o[r] = f(n))) : "none" !== i && (o[r] = "none", Pt.set(n, "display", i)));
        for (r = 0; s > r; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    function m(t, e) {
        var i;
        return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], i) : i
    }

    function v(t, e) {
        for (var i = 0, n = t.length; n > i; i++) Pt.set(t[i], "globalEval", !e || Pt.get(e[i], "globalEval"))
    }

    function y(t, e, i, n, o) {
        for (var r, s, a, l, u, c, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; f > p; p++)
            if (r = t[p], r || 0 === r)
                if ("object" === ft.type(r)) ft.merge(d, r.nodeType ? [r] : r);
                else if (Kt.test(r)) {
                    for (s = s || h.appendChild(e.createElement("div")), a = (Yt.exec(r) || ["", ""])[1].toLowerCase(), l = Ut[a] || Ut._default, s.innerHTML = l[1] + ft.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
                    ft.merge(d, s.childNodes), s = h.firstChild, s.textContent = ""
                } else d.push(e.createTextNode(r));
        for (h.textContent = "", p = 0; r = d[p++];)
            if (n && ft.inArray(r, n) > -1) o && o.push(r);
            else if (u = ft.contains(r.ownerDocument, r), s = m(h.appendChild(r), "script"), u && v(s), i)
                for (c = 0; r = s[c++];) $t.test(r.type || "") && i.push(r);
        return h
    }

    function w() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return et.activeElement
        } catch (t) {}
    }

    function C(t, e, i, n, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) C(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = b;
        else if (!o) return t;
        return 1 === r && (s = o, o = function(t) {
            return ft().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, o, n, i)
        })
    }

    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function E(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function A(t) {
        var e = ne.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function S(t, e) {
        var i, n, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if (Pt.hasData(t) && (r = Pt.access(t), s = Pt.set(e, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)
                    for (i = 0, n = u[o].length; n > i; i++) ft.event.add(e, o, u[o][i])
            }
            Mt.hasData(t) && (a = Mt.access(t), l = ft.extend({}, a), Mt.set(e, l))
        }
    }

    function k(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Qt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function _(t, e, n, o) {
        e = ot.apply([], e);
        var r, s, a, l, u, c, h = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            g = ft.isFunction(f);
        if (g || d > 1 && "string" == typeof f && !dt.checkClone && ie.test(f)) return t.each(function(i) {
            var r = t.eq(i);
            g && (e[0] = f.call(this, i, r.html())), _(r, e, n, o)
        });
        if (d && (r = y(e, t[0].ownerDocument, !1, t, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = ft.map(m(r, "script"), E), l = a.length; d > h; h++) u = r, h !== p && (u = ft.clone(u, !0, !0), l && ft.merge(a, m(u, "script"))), n.call(t[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, ft.map(a, A), h = 0; l > h; h++) u = a[h], $t.test(u.type || "") && !Pt.access(u, "globalEval") && ft.contains(c, u) && (u.src ? ft._evalUrl && ft._evalUrl(u.src) : i(u.textContent.replace(oe, ""), c))
        }
        return t
    }

    function j(t, e, i) {
        for (var n, o = e ? ft.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || ft.cleanData(m(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && v(m(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function I(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || ae(t), i && (s = i.getPropertyValue(e) || i[e], "" !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), !dt.pixelMarginRight() && se.test(s) && re.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function L(t) {
        if (t in de) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = he.length; i--;)
            if (t = he[i] + e, t in de) return t
    }

    function B(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function O(t, e, i, n, o) {
        var r, s = 0;
        for (r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; 4 > r; r += 2) "margin" === i && (s += ft.css(t, i + Wt[r], !0, o)), n ? ("content" === i && (s -= ft.css(t, "padding" + Wt[r], !0, o)), "margin" !== i && (s -= ft.css(t, "border" + Wt[r] + "Width", !0, o))) : (s += ft.css(t, "padding" + Wt[r], !0, o), "padding" !== i && (s += ft.css(t, "border" + Wt[r] + "Width", !0, o)));
        return s
    }

    function P(t, e, i) {
        var n, o = !0,
            r = ae(t),
            s = "border-box" === ft.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), 0 >= n || null == n) {
            if (n = I(t, e, r), (0 > n || null == n) && (n = t.style[e]), se.test(n)) return n;
            o = s && (dt.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + O(t, e, i || (s ? "border" : "content"), o, r) + "px"
    }

    function M(t, e, i, n, o) {
        return new M.prototype.init(t, e, i, n, o)
    }

    function N() {
        fe && (t.requestAnimationFrame(N), ft.fx.tick())
    }

    function R() {
        return t.setTimeout(function() {
            pe = void 0
        }), pe = ft.now()
    }

    function z(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Wt[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function q(t, e, i) {
        for (var n, o = (F.tweeners[e] || []).concat(F.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function W(t, e, i) {
        var n, o, r, s, a, l, u, c, h = "width" in e || "height" in e,
            d = this,
            p = {},
            f = t.style,
            m = t.nodeType && Ht(t),
            v = Pt.get(t, "fxshow");
        i.queue || (s = ft._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ft.queue(t, "fx").length || s.empty.fire()
            })
        }));
        for (n in e)
            if (o = e[n], ge.test(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[n]) continue;
                    m = !0
                }
                p[n] = v && v[n] || ft.style(t, n)
            }
        if (l = !ft.isEmptyObject(e), l || !ft.isEmptyObject(p)) {
            h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = v && v.display, null == u && (u = Pt.get(t, "display")), c = ft.css(t, "display"), "none" === c && (u ? c = u : (g([t], !0), u = t.style.display || u, c = ft.css(t, "display"), g([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === ft.css(t, "float") && (l || (d.done(function() {
                f.display = u
            }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (v ? "hidden" in v && (m = v.hidden) : v = Pt.access(t, "fxshow", {
                    display: u
                }), r && (v.hidden = !m), m && g([t], !0), d.done(function() {
                m || g([t]), Pt.remove(t, "fxshow");
                for (n in p) ft.style(t, n, p[n])
            })), l = q(m ? v[n] : 0, n, d), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function H(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = ft.camelCase(i), o = e[n], r = t[i], ft.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = ft.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function F(t, e, i) {
        var n, o, r = 0,
            s = F.prefilters.length,
            a = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = pe || R(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pe || R(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = ft.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (H(c, u.opts.specialEasing); s > r; r++)
            if (n = F.prefilters[r].call(u, t, c, u.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(n.stop, n)), n;
        return ft.map(c, q, u), ft.isFunction(u.opts.start) && u.opts.start.call(t, u), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function G(t) {
        var e = t.match(It) || [];
        return e.join(" ")
    }

    function Q(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Y(t, e, i, n) {
        var o;
        if (ft.isArray(e)) ft.each(e, function(e, o) {
            i || Se.test(t) ? n(t, o) : Y(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== ft.type(e)) n(t, e);
        else
            for (o in e) Y(t + "[" + o + "]", e[o], i, n)
    }

    function U(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(It) || [];
            if (ft.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function K(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, ft.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = t === Re;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function X(t, e) {
        var i, n, o = ft.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    function V(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
             "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function J(t, e, i, n) {
        var o, r, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (s = u[l + " " + r] || u["* " + r], !s)
                        for (o in u)
                            if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"]) e = s(e);
                        else try {
                            e = s(e)
                        } catch (h) {
                            return {
                                state: "parsererror",
                                error: s ? h : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: e
        }
    }

    function Z(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var tt = [],
        et = t.document,
        it = Object.getPrototypeOf,
        nt = tt.slice,
        ot = tt.concat,
        rt = tt.push,
        st = tt.indexOf,
        at = {},
        lt = at.toString,
        ut = at.hasOwnProperty,
        ct = ut.toString,
        ht = ct.call(Object),
        dt = {},
        pt = "3.1.1",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        vt = /-([a-z])/g,
        yt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        length: 0,
        toArray: function() {
            return nt.call(this)
        },
        get: function(t) {
            return null == t ? nt.call(this) : 0 > t ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(nt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: rt,
        sort: tt.sort,
        splice: tt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (u && n && (ft.isPlainObject(n) || (o = ft.isArray(n))) ? (o ? (o = !1, r = i && ft.isArray(i) ? i : []) : r = i && ft.isPlainObject(i) ? i : {}, s[e] = ft.extend(u, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== lt.call(t) || (e = it(t)) && (i = ut.call(e, "constructor") && e.constructor, "function" != typeof i || ct.call(i) !== ht))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            i(t)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(vt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, o = 0;
            if (n(t))
                for (i = t.length; i > o && e.call(t[o], o, t[o]) !== !1; o++);
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(gt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : st.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o, r, s = 0,
                a = [];
            if (n(t))
                for (o = t.length; o > s; s++) r = e(t[s], s, i), null != r && a.push(r);
            else
                for (s in t) r = e(t[s], s, i), null != r && a.push(r);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t) ? (n = nt.call(arguments, 2), o = function() {
                    return t.apply(e || this, n.concat(nt.call(arguments)))
                }, o.guid = t.guid = t.guid || ft.guid++, o) : void 0
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        at["[object " + e + "]"] = e.toLowerCase()
    });
    var wt = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, u, c, d = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : W) !== B && L(e), e = e || B, P)) {
                if (11 !== f && (l = yt.exec(t)))
                    if (o = l[1]) {
                        if (9 === f) {
                            if (!(s = e.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (d && (s = d.getElementById(o)) && z(e, s) && s.id === o) return i.push(s), i
                    } else {
                        if (l[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = l[3]) && C.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(o)), i
                    }
                if (C.qsa && !Y[t + " "] && (!M || !M.test(t))) {
                    if (1 !== f) d = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, Ct) : e.setAttribute("id", a = q), u = S(t), r = u.length; r--;) u[r] = "#" + a + " " + p(u[r]);
                        c = u.join(","), d = $.test(t) && h(e.parentNode) || e
                    }
                    if (c) try {
                        return Z.apply(i, d.querySelectorAll(c)), i
                    } catch (g) {} finally {
                        a === q && e.removeAttribute("id")
                    }
                }
            }
            return _(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[q] = !0, t
        }

        function o(t) {
            var e = B.createElement("fieldset");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Et(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir,
                o = e.next,
                r = o || n,
                s = i && "parentNode" === r,
                a = F++;
            return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o);
                    return !1
                } : function(e, i, l) {
                    var u, c, h, d = [H, a];
                    if (l) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s)
                                if (h = e[q] || (e[q] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((u = c[r]) && u[0] === H && u[1] === a) return d[2] = u[2];
                                    if (c[r] = d, d[2] = t(e, i, l)) return !0
                                } return !1
                }
        }

        function g(t) {
            return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
        }

        function m(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n
        }

        function v(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), u && e.push(a)));
            return s
        }

        function y(t, e, i, o, r, s) {
            return o && !o[q] && (o = y(o)), r && !r[q] && (r = y(r, s)), n(function(n, s, a, l) {
                var u, c, h, d = [],
                    p = [],
                    f = s.length,
                    g = n || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? g : v(g, d, t, a, l),
                    w = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, w, a, l), o)
                    for (u = v(w, p), o(u, [], a, l), c = u.length; c--;)(h = u[c]) && (w[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = w.length; c--;)(h = w[c]) && u.push(y[c] = h);
                            r(null, w = [], u, l)
                        }
                        for (c = w.length; c--;)(h = w[c]) && (u = r ? et(n, h) : d[c]) > -1 && (n[u] = !(s[u] = h))
                    }
                } else w = v(w === s ? w.splice(f, w.length) : w), r ? r(null, s, w, l) : Z.apply(s, w)
            })
        }

        function w(t) {
            for (var e, i, n, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                return t === e
            }, s, !0), u = f(function(t) {
                return et(e, t) > -1
            }, s, !0), c = [function(t, i, n) {
                var o = !r && (n || i !== j) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                return e = null, o
            }]; o > a; a++)
                if (i = T.relative[t[a].type]) c = [f(g(c), i)];
                else {
                    if (i = T.filter[t[a].type].apply(null, t[a].matches), i[q]) {
                        for (n = ++a; o > n && !T.relative[t[n].type]; n++);
                        return y(a > 1 && g(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && w(t.slice(a, n)), o > n && w(t = t.slice(n)), o > n && p(t))
                    }
                    c.push(i)
                }
            return g(c)
        }

        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function(n, s, a, l, u) {
                    var c, h, d, p = 0,
                        f = "0",
                        g = n && [],
                        m = [],
                        y = j,
                        w = n || r && T.find.TAG("*", u),
                        b = H += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (u && (j = s === B || s || u); f !== x && null != (c = w[f]); f++) {
                        if (r && c) {
                            for (h = 0, s || c.ownerDocument === B || (L(c), a = !P); d = t[h++];)
                                if (d(c, s || B, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (H = b)
                        }
                        o && ((c = !d && c) && p--, n && g.push(c))
                    }
                    if (p += f, o && f !== p) {
                        for (h = 0; d = i[h++];) d(g, m, s, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) g[f] || m[f] || (m[f] = V.call(l));
                            m = v(m)
                        }
                        Z.apply(l, m), u && !n && m.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (H = b, j = y), g
                };
            return o ? n(s) : s
        }
        var x, C, T, E, A, S, k, _, j, I, D, L, B, O, P, M, N, R, z, q = "sizzle" + 1 * new Date,
            W = t.document,
            H = 0,
            F = 0,
            G = i(),
            Q = i(),
            Y = i(),
            U = function(t, e) {
                return t === e && (D = !0), 0
            },
            K = {}.hasOwnProperty,
            X = [],
            V = X.pop,
            J = X.push,
            Z = X.push,
            tt = X.slice,
            et = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + ot + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(st),
            pt = new RegExp("^" + ot + "$"),
            ft = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            bt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ct = function(t, e) {
                return e ? "\x00" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Tt = function() {
                L()
            },
            Et = f(function(t) {
                return t.disabled === !0 && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Z.apply(X = tt.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
        } catch (At) {
            Z = {
                apply: X.length ? function(t, e) {
                        J.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
            }
        }
        C = e.support = {}, A = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, L = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : W;
            return n !== B && 9 === n.nodeType && n.documentElement ? (B = n, O = B.documentElement, P = !A(B), W !== B && (i = B.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), C.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), C.getElementsByTagName = o(function(t) {
                    return t.appendChild(B.createComment("")), !t.getElementsByTagName("*").length
                }), C.getElementsByClassName = vt.test(B.getElementsByClassName), C.getById = o(function(t) {
                    return O.appendChild(t).id = q, !B.getElementsByName || !B.getElementsByName(q).length
                }), C.getById ? (T.filter.ID = function(t) {
                        var e = t.replace(wt, bt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, T.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (T.filter.ID = function(t) {
                        var e = t.replace(wt, bt);
                        return function(t) {
                            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, T.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var i, n, o, r = e.getElementById(t);
                            if (r) {
                                if (i = r.getAttributeNode("id"), i && i.value === t) return [r];
                                for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                                    if (i = r.getAttributeNode("id"), i && i.value === t) return [r]
                            }
                            return []
                        }
                    }), T.find.TAG = C.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : C.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, T.find.CLASS = C.getElementsByClassName && function(t, e) {
                        return "undefined" != typeof e.getElementsByClassName && P ? e.getElementsByClassName(t) : void 0
                    }, N = [], M = [], (C.qsa = vt.test(B.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll("[id~=" + q + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || M.push(".#.+[+~]")
                }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = B.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (C.matchesSelector = vt.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    C.disconnectedMatch = R.call(t, "*"), R.call(t, "[s!='']:x"), N.push("!=", st)
                }), M = M.length && new RegExp(M.join("|")), N = N.length && new RegExp(N.join("|")), e = vt.test(O.compareDocumentPosition), z = e || vt.test(O.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, U = e ? function(t, e) {
                        if (t === e) return D = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !C.sortDetached && e.compareDocumentPosition(t) === i ? t === B || t.ownerDocument === W && z(W, t) ? -1 : e === B || e.ownerDocument === W && z(W, e) ? 1 : I ? et(I, t) - et(I, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return D = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!o || !r) return t === B ? -1 : e === B ? 1 : o ? -1 : r ? 1 : I ? et(I, t) - et(I, e) : 0;
                        if (o === r) return s(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (; a[n] === l[n];) n++;
                        return n ? s(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0
                    }, B) : B
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== B && L(t), i = i.replace(ht, "='$1']"), C.matchesSelector && P && !Y[i + " "] && (!N || !N.test(i)) && (!M || !M.test(i))) try {
                var n = R.call(t, i);
                if (n || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (o) {}
            return e(i, B, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== B && L(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== B && L(t);
            var i = T.attrHandle[e.toLowerCase()],
                n = i && K.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
            return void 0 !== n ? n : C.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function(t) {
            return (t + "").replace(xt, Ct)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (D = !C.detectDuplicates, I = !C.sortStable && t.slice(0), t.sort(U), D) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return I = null, t
        }, E = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += E(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += E(e);
            return i
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                },
                CLASS: function(t) {
                    var e = G[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && G(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var u, c, h, d, p, f, g = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (d = m, h = d[q] || (d[q] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], p = u[0] === H && u[1], w = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (w = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++w && d === e) {
                                            c[t] = [H, p, w];
                                            break
                                        }
                                } else if (y && (d = e, h = d[q] || (d[q] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], p = u[0] === H && u[1], w = p), w === !1)
                                    for (;
                                        (d = ++p && d && d[g] || (w = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (h = d[q] || (d[q] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [H, w]), d !== e)););
                                return w -= o, w === n || w % n === 0 && w / n >= 0
                            }
                        }
                },
                PSEUDO: function(t, i) {
                    var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[q] ? r(i) : r.length > 1 ? (o = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                                    for (var n, o = r(t, i), s = o.length; s--;) n = et(t, o[s]), t[n] = !(e[n] = o[s])
                                }) : function(t) {
                                    return r(t, 0, o)
                                }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = k(t.replace(lt, "$1"));
                    return o[q] ? n(function(t, e, i, n) {
                            for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, n, r) {
                            return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                        }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, bt),
                        function(e) {
                            return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === O
                },
                focus: function(t) {
                    return t === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, S = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, u, c = Q[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                n && !(o = ut.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(lt, " ")
                }), a = a.slice(n.length));
                for (s in T.filter) !(o = ft[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : Q(t, l).slice(0)
        }, k = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                r = Y[t + " "];
            if (!r) {
                for (e || (e = S(t)), i = e.length; i--;) r = w(e[i]), r[q] ? n.push(r) : o.push(r);
                r = Y(t, b(o, n)), r.selector = t
            }
            return r
        }, _ = e.select = function(t, e, i, n) {
            var o, r, s, a, l, u = "function" == typeof t && t,
                c = !n && S(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && P && T.relative[r[1].type]) {
                    if (e = (T.find.ID(s.matches[0].replace(wt, bt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (n = l(s.matches[0].replace(wt, bt), $.test(r[0].type) && h(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && p(r), !t) return Z.apply(i, n), i;
                        break
                    }
            }
            return (u || k(t, c))(n, e, !P, i, !e || $.test(t) && h(e.parentNode) || e), i
        }, C.sortStable = q.split("").sort(U).join("") === q, C.detectDuplicates = !!D, L(), C.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(B.createElement("fieldset"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(it, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    ft.find = wt, ft.expr = wt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = wt.uniqueSort, ft.text = wt.getText, ft.isXMLDoc = wt.isXML, ft.contains = wt.contains, ft.escapeSelector = wt.escape;
    var bt = function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                 (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && ft(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        xt = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        Ct = ft.expr.match.needsContext,
        Tt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Et = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                return 1 === t.nodeType
            }))
    }, ft.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (ft.contains(o[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; n > e; e++) ft.find(t, o[e], i);
            return n > 1 ? ft.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(o(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(o(this, t || [], !0))
        },
        is: function(t) {
            return !!o(this, "string" == typeof t && Ct.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var At, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        kt = ft.fn.init = function(t, e, i) {
            var n, o;
            if (!t) return this;
            if (i = i || At, "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Tt.test(n[1]) && ft.isPlainObject(e))
                        for (n in e) ft.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return o = et.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this)
        };
    kt.prototype = ft.fn, At = ft(et);
    var _t = /^(?:parents|prev(?:Until|All))/,
        jt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e = ft(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (ft.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0,
                o = this.length,
                r = [],
                s = "string" != typeof t && ft(t);
            if (!Ct.test(t))
                for (; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? st.call(ft(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return bt(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return bt(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return bt(t, "previousSibling", i)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(i, n) {
            var o = ft.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = ft.filter(n, o)), this.length > 1 && (jt[t] || ft.uniqueSort(o), _t.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var It = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? s(t) : ft.extend({}, t);
        var e, i, n, o, r = [],
            a = [],
            l = -1,
            u = function() {
                for (o = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
                t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
            },
            c = {
                add: function() {
                    return r && (i && !e && (l = r.length - 1, a.push(i)), function n(e) {
                        ft.each(e, function(e, i) {
                            ft.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== ft.type(i) && n(i)
                        })
                    }(arguments), i && !e && u()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var i;
                             (i = ft.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = a = [], r = i = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = a = [], i || e || (r = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, i) {
                    return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, ft.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                    ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return ft.Deferred(function(e) {
                            ft.each(i, function(i, n) {
                                var o = ft.isFunction(t[n[4]]) && t[n[4]];
                                r[n[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, n, o) {
                        function r(e, i, n, o) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    h = function() {
                                        var t, h;
                                        if (!(s > e)) {
                                            if (t = n.apply(u, c), t === i.promise()) throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(h) ? o ? h.call(t, r(s, i, a, o), r(s, i, l, o)) : (s++, h.call(t, r(s, i, a, o), r(s, i, l, o), r(s, i, a, i.notifyWith))) : (n !== a && (u = void 0, c = [t]), (o || i.resolveWith)(u, c))
                                        }
                                    },
                                    d = o ? h : function() {
                                            try {
                                                h()
                                            } catch (t) {
                                                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (n !== l && (u = void 0, c = [t]), i.rejectWith(u, c))
                                            }
                                        };
                                e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return ft.Deferred(function(t) {
                            i[0][3].add(r(0, t, ft.isFunction(o) ? o : a, t.notifyWith)), i[1][3].add(r(0, t, ft.isFunction(e) ? e : a)), i[2][3].add(r(0, t, ft.isFunction(n) ? n : l))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, o) : o
                    }
                },
                r = {};
            return ft.each(i, function(t, e) {
                var s = e[2],
                    a = e[5];
                o[e[1]] = s.add, a && s.add(function() {
                    n = a
                }, i[3 - t][2].disable, i[0][2].lock), s.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                o = nt.call(arguments),
                r = ft.Deferred(),
                s = function(t) {
                    return function(i) {
                        n[t] = this, o[t] = arguments.length > 1 ? nt.call(arguments) : i, --e || r.resolveWith(n, o)
                    }
                };
            if (1 >= e && (u(t, r.done(s(i)).resolve, r.reject), "pending" === r.state() || ft.isFunction(o[i] && o[i].then))) return r.then();
            for (; i--;) u(o[i], s(i), r.reject);
            return r.promise()
        }
    });
    var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && Dt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, ft.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var Lt = ft.Deferred();
    ft.fn.ready = function(t) {
        return Lt.then(t)["catch"](function(t) {
            ft.readyException(t)
        }), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || Lt.resolveWith(et, [ft]))
        }
    }), ft.ready.then = Lt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var Bt = function(t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === ft.type(i)) {
                o = !0;
                for (a in i) Bt(t, e, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, ft.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                        return u.call(ft(t), i)
                    })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
        },
        Ot = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
        },
        set: function(t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[ft.camelCase(e)] = i;
            else
                for (n in e) o[ft.camelCase(n)] = e[n];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in n ? [e] : e.match(It) || []), i = e.length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || ft.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e)
        }
    };
    var Pt = new h,
        Mt = new h,
        Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Rt = /[A-Z]/g;
    ft.extend({
        hasData: function(t) {
            return Mt.hasData(t) || Pt.hasData(t)
        },
        data: function(t, e, i) {
            return Mt.access(t, e, i)
        },
        removeData: function(t, e) {
            Mt.remove(t, e)
        },
        _data: function(t, e, i) {
            return Pt.access(t, e, i)
        },
        _removeData: function(t, e) {
            Pt.remove(t, e)
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Mt.get(r), 1 === r.nodeType && !Pt.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = ft.camelCase(n.slice(5)), $(r, n, o[n])));
                    Pt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                    Mt.set(this, t)
                }) : Bt(this, function(e) {
                    var i;
                    if (r && void 0 === e) {
                        if (i = Mt.get(r, t), void 0 !== i) return i;
                        if (i = $(r, t), void 0 !== i) return i
                    } else this.each(function() {
                        Mt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Mt.remove(this, t)
            })
        }
    }), ft.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = Pt.get(t, e), i && (!n || ft.isArray(i) ? n = Pt.access(t, e, ft.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = ft.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = ft._queueHooks(t, e),
                s = function() {
                    ft.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Pt.get(t, i) || Pt.access(t, i, {
                    empty: ft.Callbacks("once memory").add(function() {
                        Pt.remove(t, [e + "queue", i])
                    })
                })
        }
    }), ft.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var i = ft.queue(this, t, e);
                        ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t)
                    })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = ft.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = Pt.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qt = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
        Wt = ["Top", "Right", "Bottom", "Left"],
        Ht = function(t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
        },
        Ft = function(t, e, i, n) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o
        },
        Gt = {};
    ft.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ht(this) ? ft(this).show() : ft(this).hide()
                })
        }
    });
    var Qt = /^(?:checkbox|radio)$/i,
        Yt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        $t = /^$|\/(?:java|ecma)script/i,
        Ut = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td;
    var Kt = /<|&#?\w+;/;
    ! function() {
        var t = et.createDocumentFragment(),
            e = t.appendChild(et.createElement("div")),
            i = et.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), dt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Xt = et.documentElement,
        Vt = /^key/,
        Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Zt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, g, m = Pt.get(t);
            if (m)
                for (i.handler && (r = i, i = r.handler, o = r.selector), o && ft.find.matchesSelector(Xt, o), i.guid || (i.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                    return "undefined" != typeof ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(It) || [""], u = e.length; u--;) a = Zt.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (h = ft.event.special[p] || {}, p = (o ? h.delegateType : h.bindType) || p, h = ft.event.special[p] || {}, c = ft.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ft.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), ft.event.global[p] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, g, m = Pt.hasData(t) && Pt.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(It) || [""], u = e.length; u--;)
                    if (a = Zt.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = ft.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) c = d[r], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !d.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || ft.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) ft.event.remove(t, p + e[u], i, n, !0);
                ft.isEmptyObject(l) && Pt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e = ft.event.fix(t),
                i, n, o, r, s, a, l = new Array(arguments.length),
                u = (Pt.get(this, "events") || {})[e.type] || [],
                c = ft.event.special[e.type] || {};
            for (l[0] = e, i = 1; i < arguments.length; i++) l[i] = arguments[i];
            if (e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ft.event.handlers.call(this, e, u), i = 0;
                     (r = a[i++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                         (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, o = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== o && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
                        for (r = [], s = {}, i = 0; l > i; i++) n = e[i], o = n.selector + " ", void 0 === s[o] && (s[o] = n.needsContext ? ft(o, this).index(u) > -1 : ft.find(o, this, null, [u]).length), s[o] && r.push(n);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ft.isFunction(e) ? function() {
                        return this.originalEvent ? e(this.originalEvent) : void 0
                    } : function() {
                        return this.originalEvent ? this.originalEvent[t] : void 0
                    },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[ft.expando] ? t : new ft.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== x() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ft.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ft.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? w : b, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
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
        "char": !0,
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
            return null == t.which && Vt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Jt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === n || ft.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ft.fn.extend({
        on: function(t, e, i, n) {
            return C(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return C(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function() {
                ft.event.remove(this, t, i, e)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ee = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(te, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = ft.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (s = m(a), r = m(t), n = 0, o = r.length; o > n; n++) k(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || m(t), s = s || m(a), n = 0, o = r.length; o > n; n++) S(r[n], s[n]);
                else S(t, a);
            return s = m(a, "script"), s.length > 0 && v(s, !l && m(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, o = ft.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (Ot(i)) {
                    if (e = i[Pt.expando]) {
                        if (e.events)
                            for (n in e.events) o[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, e.handle);
                        i[Pt.expando] = void 0
                    }
                    i[Mt.expando] && (i[Mt.expando] = void 0)
                }
        }
    }), ft.fn.extend({
        detach: function(t) {
            return j(this, t, !0)
        },
        remove: function(t) {
            return j(this, t)
        },
        text: function(t) {
            return Bt(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
            }, null, t, arguments.length)
        },
        append: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Bt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ee.test(t) && !Ut[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (ft.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return _(this, arguments, function(e) {
                var i = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(m(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var i, n = [], o = ft(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), ft(o[s])[e](i), rt.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var re = /^margin/,
        se = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
        ae = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        };
    ! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xt.appendChild(s);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Xt.removeChild(s), a = null
            }
        }
        var i, n, o, r, s = et.createElement("div"),
            a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ft.extend(dt, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return e(), n
            },
            pixelMarginRight: function() {
                return e(), o
            },
            reliableMarginLeft: function() {
                return e(), r
            }
        }))
    }();
    var le = /^(none|table(?!-c[ea]).+)/,
        ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ce = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        he = ["Webkit", "Moz", "ms"],
        de = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = I(t, "opacity");
                        return "" === i ? "1" : i
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
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = ft.camelCase(e),
                    l = t.style;
                return e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = qt.exec(i)) && o[1] && (i = p(t, e, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (ft.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = I(t, e, n)), "normal" === o && e in ce && (o = ce[e]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? !le.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? P(t, e, n) : Ft(t, ue, function() {
                            return P(t, e, n)
                        }) : void 0
            },
            set: function(t, i, n) {
                var o, r = n && ae(t),
                    s = n && O(t, e, n, "border-box" === ft.css(t, "boxSizing", !1, r), r);
                return s && (o = qt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = ft.css(t, e)), B(t, i, s)
            }
        }
    }), ft.cssHooks.marginLeft = D(dt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(I(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Wt[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, re.test(t) || (ft.cssHooks[t + e].set = B)
    }), ft.fn.extend({
        css: function(t, e) {
            return Bt(this, function(t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (ft.isArray(e)) {
                    for (n = ae(t), o = e.length; o > s; s++) r[e[s]] = ft.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), ft.Tween = M, M.prototype = {
        constructor: M,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (ft.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = M.prototype.init, ft.fx.step = {};
    var pe, fe, ge = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;
    ft.Animation = ft.extend(F, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return p(i.elem, t, qt.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(It);
            for (var i, n = 0, o = t.length; o > n; n++) i = t[n], F.tweeners[i] = F.tweeners[i] || [], F.tweeners[i].unshift(e)
        },
        prefilters: [W],
        prefilter: function(t, e) {
            e ? F.prefilters.unshift(t) : F.prefilters.push(t)
        }
    }), ft.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? ft.extend({}, t) : {
                complete: i || !i && e || ft.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !ft.isFunction(e) && e
            };
        return ft.fx.off || et.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ft.fx.speeds ? n.duration = ft.fx.speeds[n.duration] : n.duration = ft.fx.speeds._default), null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ft.isFunction(n.old) && n.old.call(this), n.queue && ft.dequeue(this, n.queue)
        }, n
    }, ft.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Ht).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var o = ft.isEmptyObject(t),
                r = ft.speed(e, i, n),
                s = function() {
                    var e = F(this, ft.extend({}, t), r);
                    (o || Pt.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    r = ft.timers,
                    s = Pt.get(this);
                if (o) s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && me.test(o) && n(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                !e && i || ft.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = Pt.get(this),
                    n = i[t + "queue"],
                    o = i[t + "queueHooks"],
                    r = ft.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function(t, e) {
        var i = ft.fn[e];
        ft.fn[e] = function(t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(z(e, !0), t, n, o)
        }
    }), ft.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ft.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ft.timers = [], ft.fx.tick = function() {
        var t, e = 0,
            i = ft.timers;
        for (pe = ft.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || ft.fx.stop(), pe = void 0
    }, ft.fx.timer = function(t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
    }, ft.fx.interval = 13, ft.fx.start = function() {
        fe || (fe = t.requestAnimationFrame ? t.requestAnimationFrame(N) : t.setInterval(ft.fx.tick, ft.fx.interval))
    }, ft.fx.stop = function() {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(fe) : t.clearInterval(fe), fe = null
    }, ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ft.fn.delay = function(e, i) {
        return e = ft.fx ? ft.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
            var o = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(o)
            }
        })
    },
        function() {
            var t = et.createElement("input"),
                e = et.createElement("select"),
                i = e.appendChild(et.createElement("option"));
            t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = i.selected, t = et.createElement("input"), t.value = "t", t.type = "radio", dt.radioValue = "t" === t.value
        }();
    var ve, ye = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function(t, e) {
            return Bt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            return 3 !== r && 8 !== r && 2 !== r ? "undefined" == typeof t.getAttribute ? ft.prop(t, e, i) : (1 === r && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ve : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = ft.find.attr(t, e), null == n ? void 0 : n)) : void 0
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0,
                o = e && e.match(It);
            if (o && 1 === t.nodeType)
                for (; i = o[n++];) t.removeAttribute(i)
        }
    }), ve = {
        set: function(t, e, i) {
            return e === !1 ? ft.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ye[e] || ft.find.attr;
        ye[e] = function(t, e, n) {
            var o, r, s = e.toLowerCase();
            return n || (r = ye[s], ye[s] = o, o = null != i(t, e, n) ? s : null, ye[s] = r), o
        }
    });
    var we = /^(?:input|select|textarea|button)$/i,
        be = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Bt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ft.propFix[t] || t]
            })
        }
    }), ft.extend({
        prop: function(t, e, i) {
            var n, o, r = t.nodeType;
            return 3 !== r && 8 !== r && 2 !== r ? (1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), ft.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, Q(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(It) || []; i = this[l++];)
                    if (o = Q(i), n = 1 === i.nodeType && " " + G(o) + " ") {
                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = G(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, Q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(It) || []; i = this[l++];)
                    if (o = Q(i), n = 1 === i.nodeType && " " + G(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        a = G(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(i) {
                        ft(this).toggleClass(t.call(this, i, Q(this), e), e)
                    }) : this.each(function() {
                        var e, n, o, r;
                        if ("string" === i)
                            for (n = 0, o = ft(this), r = t.match(It) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else void 0 !== t && "boolean" !== i || (e = Q(this), e && Pt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Pt.get(this, "__className__") || ""))
                    })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + G(Q(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var xe = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = ft.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function(t) {
                                return null == t ? "" : t + ""
                            })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i)) : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : G(ft.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, o = t.options,
                        r = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (n = 0 > r ? l : s ? r : 0; l > n; n++)
                        if (i = o[n], (i.selected || n === r) && !i.disabled && (!i.parentNode.disabled || !ft.nodeName(i.parentNode, "optgroup"))) {
                            if (e = ft(i).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = ft.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = ft.inArray(ft.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ce = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function(e, i, n, o) {
            var r, s, a, l, u, c, h, d = [n || et],
                p = ut.call(e, "type") ? e.type : e,
                f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || et, 3 !== n.nodeType && 8 !== n.nodeType && !Ce.test(p + ft.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[ft.expando] ? e : new ft.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ft.makeArray(i, [e]), h = ft.event.special[p] || {}, o || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!o && !h.noBubble && !ft.isWindow(n)) {
                    for (l = h.delegateType || p, Ce.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || et) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                     (s = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || p, c = (Pt.get(s, "events") || {})[e.type] && Pt.get(s, "handle"), c && c.apply(s, i), c = u && s[u], c && c.apply && Ot(s) && (e.result = c.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !Ot(n) || u && ft.isFunction(n[p]) && !ft.isWindow(n) && (a = n[u], a && (n[u] = null), ft.event.triggered = p, n[p](), ft.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = ft.extend(new ft.Event, i, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(n, null, e)
        }
    }), ft.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? ft.event.trigger(t, e, i, !0) : void 0
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = Pt.access(n, e);
                o || n.addEventListener(t, i, !0), Pt.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = Pt.access(n, e) - 1;
                o ? Pt.access(n, e, o) : (n.removeEventListener(t, i, !0), Pt.remove(n, e))
            }
        }
    });
    var Te = t.location,
        Ee = ft.now(),
        Ae = /\?/;
    ft.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i
    };
    var Se = /\[\]$/,
        ke = /\r?\n/g,
        _e = /^(?:submit|button|image|reset|file)$/i,
        je = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                var i = ft.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) Y(i, t[i], e, o);
        return n.join("&")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && je.test(this.nodeName) && !_e.test(t) && (this.checked || !Qt.test(t))
            }).map(function(t, e) {
                var i = ft(this).val();
                return null == i ? null : ft.isArray(i) ? ft.map(i, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(ke, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(ke, "\r\n")
                        }
            }).get()
        }
    });
    var Ie = /%20/g,
        De = /#.*$/,
        Le = /([?&])_=[^&]*/,
        Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pe = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        Ne = {},
        Re = {},
        ze = "*/".concat("*"),
        qe = et.createElement("a");
    qe.href = Te.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: Oe.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? X(X(t, ft.ajaxSettings), e) : X(ft.ajaxSettings, t)
        },
        ajaxPrefilter: U(Ne),
        ajaxTransport: U(Re),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var u, d, p, b, x, C = i;
                c || (c = !0, l && t.clearTimeout(l), o = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (b = V(f, T, n)), b = J(f, b, T, u), u ? (f.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ft.lastModified[r] = x), x = T.getResponseHeader("etag"), x && (ft.etag[r] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, p = b.error, u = !p)) : (p = C, !e && C || (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (i || C) + "", u ? v.resolveWith(g, [d, C, T]) : v.rejectWith(g, [T, C, p]), T.statusCode(w), w = void 0, h && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? d : p]), y.fireWith(g, [T, C]), h && (m.trigger("ajaxComplete", [T, f]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, r, s, a, l, u, c, h, d, p, f = ft.ajaxSetup({}, i),
                g = f.context || f,
                m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event,
                v = ft.Deferred(),
                y = ft.Callbacks("once memory"),
                w = f.statusCode || {},
                b = {},
                x = {},
                C = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Be.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) T.always(t[T.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (v.promise(T), f.url = ((e || f.url || Te.href) + "").replace(Me, Te.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(It) || [""], null == f.crossDomain) {
                u = et.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = qe.protocol + "//" + qe.host != u.protocol + "//" + u.host
                } catch (E) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), K(Ne, f, i, T), c) return T;
            h = ft.event && f.global, h && 0 === ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pe.test(f.type), r = f.url.replace(De, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ie, "+")) : (p = f.url.slice(r.length), f.data && (r += (Ae.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (r = r.replace(Le, "$1"), p = (Ae.test(r) ? "&" : "?") + "_=" + Ee++ + p), f.url = r + p), f.ifModified && (ft.lastModified[r] && T.setRequestHeader("If-Modified-Since", ft.lastModified[r]), ft.etag[r] && T.setRequestHeader("If-None-Match", ft.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(g, T, f) === !1 || c)) return T.abort();
            if (C = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), o = K(Re, f, i, T)) {
                if (T.readyState = 1, h && m.trigger("ajaxSend", [T, f]), c) return T;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, o.send(b, n)
                } catch (E) {
                    if (c) throw E;
                    n(-1, E)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, i) {
            return ft.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, i, n, o) {
            return ft.isFunction(i) && (o = o || n, n = i, i = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                    ft(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ft(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(i) {
                ft(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                ft(this).replaceWith(this.childNodes)
            }), this
        }
    }), ft.expr.pseudos.hidden = function(t) {
        return !ft.expr.pseudos.visible(t)
    }, ft.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, ft.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        He = ft.ajaxSettings.xhr();
    dt.cors = !!He && "withCredentials" in He, dt.ajax = He = !!He, ft.ajaxTransport(function(e) {
        var i, n;
        return dt.cors || He && !e.crossDomain ? {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && t.setTimeout(function() {
                                i && n()
                            })
                        }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (i) throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = ft("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), et.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Fe = [],
        Ge = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || ft.expando + "_" + Ee++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ge, "$1" + o) : e.jsonp !== !1 && (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || ft.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === r ? ft(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, Fe.push(o)), s && ft.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
    }), dt.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ft.parseHTML = function(t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, o, r;
        return e || (dt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = et.location.href, e.head.appendChild(n)) : e = et), o = Tt.exec(t), r = !i && [], o ? [e.createElement(o[1])] : (o = y([t], e, r), r && r.length && ft(r).remove(), ft.merge([], o.childNodes))
    }, ft.fn.load = function(t, e, i) {
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a > -1 && (n = G(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, r || [t.responseText, e, t])
                })
            }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.pseudos.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, u, c = ft.css(t, "position"),
                h = ft(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (n = h.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, i, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
            var e, i, n, o, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(), n.width || n.height ? (o = r.ownerDocument, i = Z(o), e = o.documentElement, {
                            top: n.top + i.pageYOffset - e.clientTop,
                            left: n.left + i.pageXOffset - e.clientLeft
                        }) : n) : {
                        top: 0,
                        left: 0
                    } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n = {
                        top: n.top + ft.css(t[0], "borderTopWidth", !0),
                        left: n.left + ft.css(t[0], "borderLeftWidth", !0)
                    }), {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || Xt
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        ft.fn[t] = function(n) {
            return Bt(this, function(t, n, o) {
                var r = Z(t);
                return void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = D(dt.pixelPosition, function(t, i) {
            return i ? (i = I(t, e), se.test(i) ? ft(t).position()[e] + "px" : i) : void 0
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            ft.fn[n] = function(o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || r === !0 ? "margin" : "border");
                return Bt(this, function(e, i, o) {
                    var r;
                    return ft.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? ft.css(e, i, a) : ft.style(e, i, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var Qe = t.jQuery,
        Ye = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = Ye), e && t.jQuery === ft && (t.jQuery = Qe), ft
    }, e || (t.jQuery = t.$ = ft), ft
}),
    function($, t, e) {
        function i(e, i, n) {
            var o = t.createElement(e);
            return i && (o.id = w + i), n && (o.style.cssText = n), $(o)
        }

        function n() {
            return e.innerHeight ? e.innerHeight : $(e).height()
        }

        function o(t, e) {
            e !== Object(e) && (e = {}), this.cache = {}, this.el = t, this.value = function(t) {
                var i;
                return void 0 === this.cache[t] && (i = $(this.el).attr("data-cbox-" + t), void 0 !== i ? this.cache[t] = i : void 0 !== e[t] ? this.cache[t] = e[t] : void 0 !== v[t] && (this.cache[t] = v[t])), this.cache[t]
            }, this.get = function(t) {
                var e = this.value(t);
                return $.isFunction(e) ? e.call(this.el, this) : e
            }
        }

        function r(t) {
            var e = P.length,
                i = (tt + t) % e;
            return 0 > i ? e + i : i
        }

        function s(t, e) {
            return Math.round((/%/.test(t) ? ("x" === e ? M.width() : n()) / 100 : 1) * parseInt(t, 10))
        }

        function a(t, e) {
            return t.get("photo") || t.get("photoRegex").test(e)
        }

        function l(t, i) {
            return t.get("retinaUrl") && e.devicePixelRatio > 1 ? i.replace(t.get("photoRegex"), t.get("retinaSuffix")) : i
        }

        function u(t) {
            "contains" in _[0] && !_[0].contains(t.target) && t.target !== k[0] && (t.stopPropagation(), _.focus())
        }

        function c(t) {
            c.str !== t && (_.add(k).removeClass(c.str).addClass(t), c.str = t)
        }

        function h(t) {
            tt = 0, t && t !== !1 && "nofollow" !== t ? (P = $("." + b).filter(function() {
                    var e = $.data(this, y),
                        i = new o(this, e);
                    return i.get("rel") === t
                }), tt = P.index(K.el), -1 === tt && (P = P.add(K.el), tt = P.length - 1)) : P = $(K.el)
        }

        function d(e) {
            $(t).trigger(e), U.triggerHandler(e)
        }

        function p(e) {
            var n;
            if (!ot) {
                if (n = $(e).data(y), K = new o(e, n), h(K.get("rel")), !it) {
                    it = nt = !0, c(K.get("className")), _.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), N = i(at, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), I.css({
                        width: "",
                        height: ""
                    }).append(N), X = D.height() + O.height() + I.outerHeight(!0) - I.height(), V = L.width() + B.width() + I.outerWidth(!0) - I.width(), J = N.outerHeight(!0), Z = N.outerWidth(!0);
                    var r = s(K.get("initialWidth"), "x"),
                        a = s(K.get("initialHeight"), "y"),
                        l = K.get("maxWidth"),
                        p = K.get("maxHeight");
                    K.w = Math.max((l !== !1 ? Math.min(r, s(l, "x")) : r) - Z - V, 0), K.h = Math.max((p !== !1 ? Math.min(a, s(p, "y")) : a) - J - X, 0), N.css({
                        width: "",
                        height: K.h
                    }), st.position(), d(x), K.get("onOpen"), Y.add(q).hide(), _.focus(), K.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", u, !0), U.one(A, function() {
                        t.removeEventListener("focus", u, !0)
                    })), K.get("returnFocus") && U.one(A, function() {
                        $(K.el).focus()
                    })
                }
                var f = parseFloat(K.get("opacity"));
                k.css({
                    opacity: f === f ? f : "",
                    cursor: K.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), K.get("closeButton") ? Q.html(K.get("close")).appendTo(I) : Q.appendTo("<div/>"), m()
            }
        }

        function f() {
            _ || (ct = !1, M = $(e), _ = i(at).attr({
                id: y,
                "class": $.support.opacity === !1 ? w + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), k = i(at, "Overlay").hide(), z = $([i(at, "LoadingOverlay")[0], i(at, "LoadingGraphic")[0]]), j = i(at, "Wrapper"), I = i(at, "Content").append(q = i(at, "Title"), W = i(at, "Current"), G = $('<button type="button"/>').attr({
                id: w + "Previous"
            }), F = $('<button type="button"/>').attr({
                id: w + "Next"
            }), H = $('<button type="button"/>').attr({
                id: w + "Slideshow"
            }), z), Q = $('<button type="button"/>').attr({
                id: w + "Close"
            }), j.append(i(at).append(i(at, "TopLeft"), D = i(at, "TopCenter"), i(at, "TopRight")), i(at, !1, "clear:left").append(L = i(at, "MiddleLeft"), I, B = i(at, "MiddleRight")), i(at, !1, "clear:left").append(i(at, "BottomLeft"), O = i(at, "BottomCenter"), i(at, "BottomRight"))).find("div div").css({
                "float": "left"
            }), R = i(at, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), Y = F.add(G).add(W).add(H)), t.body && !_.parent().length && $(t.body).append(k, _.append(j, R))
        }

        function g() {
            function e(t) {
                t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), p(this))
            }
            return _ ? (ct || (ct = !0, F.click(function() {
                    st.next()
                }), G.click(function() {
                    st.prev()
                }), Q.click(function() {
                    st.close()
                }), k.click(function() {
                    K.get("overlayClose") && st.close()
                }), $(t).bind("keydown." + w, function(t) {
                    var e = t.keyCode;
                    it && K.get("escKey") && 27 === e && (t.preventDefault(), st.close()), it && K.get("arrowKey") && P[1] && !t.altKey && (37 === e ? (t.preventDefault(), G.click()) : 39 === e && (t.preventDefault(), F.click()))
                }), $.isFunction($.fn.on) ? $(t).on("click." + w, "." + b, e) : $("." + b).live("click." + w, e)), !0) : !1
        }

        function m() {
            var t, n, o = st.prep,
                r, u = ++lt;
            if (nt = !0, et = !1, d(S), d(C), K.get("onLoad"), K.h = K.get("height") ? s(K.get("height"), "y") - J - X : K.get("innerHeight") && s(K.get("innerHeight"), "y"), K.w = K.get("width") ? s(K.get("width"), "x") - Z - V : K.get("innerWidth") && s(K.get("innerWidth"), "x"), K.mw = K.w, K.mh = K.h, K.get("maxWidth") && (K.mw = s(K.get("maxWidth"), "x") - Z - V, K.mw = K.w && K.w < K.mw ? K.w : K.mw), K.get("maxHeight") && (K.mh = s(K.get("maxHeight"), "y") - J - X, K.mh = K.h && K.h < K.mh ? K.h : K.mh), t = K.get("href"), rt = setTimeout(function() {
                    z.show()
                }, 100), K.get("inline")) {
                var c = $(t).eq(0);
                r = $("<div>").hide().insertBefore(c), U.one(S, function() {
                    r.replaceWith(c)
                }), o(c)
            } else K.get("iframe") ? o(" ") : K.get("html") ? o(K.get("html")) : a(K, t) ? (t = l(K, t), et = K.get("createImg"), $(et).addClass(w + "Photo").bind("error." + w, function() {
                            o(i(at, "Error").html(K.get("imgError")))
                        }).one("load", function() {
                            u === lt && setTimeout(function() {
                                var t;
                                K.get("retinaImage") && e.devicePixelRatio > 1 && (et.height = et.height / e.devicePixelRatio, et.width = et.width / e.devicePixelRatio), K.get("scalePhotos") && (n = function() {
                                    et.height -= et.height * t, et.width -= et.width * t
                                }, K.mw && et.width > K.mw && (t = (et.width - K.mw) / et.width, n()), K.mh && et.height > K.mh && (t = (et.height - K.mh) / et.height, n())), K.h && (et.style.marginTop = Math.max(K.mh - et.height, 0) / 2 + "px"), P[1] && (K.get("loop") || P[tt + 1]) && (et.style.cursor = "pointer", $(et).bind("click." + w, function() {
                                    st.next()
                                })), et.style.width = et.width + "px", et.style.height = et.height + "px", o(et)
                            }, 1)
                        }), et.src = t) : t && R.load(t, K.get("data"), function(t, e) {
                            u === lt && o("error" === e ? i(at, "Error").html(K.get("xhrError")) : $(this).contents())
                        })
        }
        var v = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function() {
                    return this.rel
                },
                href: function() {
                    return $(this).attr("href")
                },
                title: function() {
                    return this.title
                },
                createImg: function() {
                    var t = new Image,
                        e = $(this).data("cbox-img-attrs");
                    return "object" == typeof e && $.each(e, function(e, i) {
                        t[e] = i
                    }), t
                },
                createIframe: function() {
                    var e = t.createElement("iframe"),
                        i = $(this).data("cbox-iframe-attrs");
                    return "object" == typeof i && $.each(i, function(t, i) {
                        e[t] = i
                    }), "frameBorder" in e && (e.frameBorder = 0), "allowTransparency" in e && (e.allowTransparency = "true"), e.name = (new Date).getTime(), e.allowFullscreen = !0, e
                }
            },
            y = "colorbox",
            w = "cbox",
            b = w + "Element",
            x = w + "_open",
            C = w + "_load",
            T = w + "_complete",
            E = w + "_cleanup",
            A = w + "_closed",
            S = w + "_purge",
            k, _, j, I, D, L, B, O, P, M, N, R, z, q, W, H, F, G, Q, Y, U = $("<a/>"),
            K, X, V, J, Z, tt, et, it, nt, ot, rt, st, at = "div",
            lt = 0,
            ut = {},
            ct, ht = function() {
                function t() {
                    clearTimeout(l)
                }

                function e() {
                    (K.get("loop") || P[tt + 1]) && (t(), l = setTimeout(st.next, K.get("slideshowSpeed")))
                }

                function i() {
                    H.html(K.get("slideshowStop")).unbind(a).one(a, n), U.bind(T, e).bind(C, t), _.removeClass(s + "off").addClass(s + "on")
                }

                function n() {
                    t(), U.unbind(T, e).unbind(C, t), H.html(K.get("slideshowStart")).unbind(a).one(a, function() {
                        st.next(), i()
                    }), _.removeClass(s + "on").addClass(s + "off")
                }

                function o() {
                    r = !1, H.hide(), t(), U.unbind(T, e).unbind(C, t), _.removeClass(s + "off " + s + "on")
                }
                var r, s = w + "Slideshow_",
                    a = "click." + w,
                    l;
                return function() {
                    r ? K.get("slideshow") || (U.unbind(E, o), o()) : K.get("slideshow") && P[1] && (r = !0, U.one(E, o), K.get("slideshowAuto") ? i() : n(), H.show())
                }
            }();
        $[y] || ($(f), st = $.fn[y] = $[y] = function(t, e) {
            var i, n = this;
            return t = t || {}, $.isFunction(n) && (n = $("<a/>"), t.open = !0), n[0] ? (f(), g() && (e && (t.onComplete = e), n.each(function() {
                    var e = $.data(this, y) || {};
                    $.data(this, y, $.extend(e, t))
                }).addClass(b), i = new o(n[0], t), i.get("open") && p(n[0])), n) : n
        }, st.position = function(t, e) {
            function i() {
                D[0].style.width = O[0].style.width = I[0].style.width = parseInt(_[0].style.width, 10) - V + "px", I[0].style.height = L[0].style.height = B[0].style.height = parseInt(_[0].style.height, 10) - X + "px"
            }
            var o, r = 0,
                a = 0,
                l = _.offset(),
                u, c;
            if (M.unbind("resize." + w), _.css({
                    top: -9e4,
                    left: -9e4
                }), u = M.scrollTop(), c = M.scrollLeft(), K.get("fixed") ? (l.top -= u, l.left -= c, _.css({
                        position: "fixed"
                    })) : (r = u, a = c, _.css({
                        position: "absolute"
                    })), a += K.get("right") !== !1 ? Math.max(M.width() - K.w - Z - V - s(K.get("right"), "x"), 0) : K.get("left") !== !1 ? s(K.get("left"), "x") : Math.round(Math.max(M.width() - K.w - Z - V, 0) / 2),
                    r += K.get("bottom") !== !1 ? Math.max(n() - K.h - J - X - s(K.get("bottom"), "y"), 0) : K.get("top") !== !1 ? s(K.get("top"), "y") : Math.round(Math.max(n() - K.h - J - X, 0) / 2), _.css({
                    top: l.top,
                    left: l.left,
                    visibility: "visible"
                }), j[0].style.width = j[0].style.height = "9999px", o = {
                    width: K.w + Z + V,
                    height: K.h + J + X,
                    top: r,
                    left: a
                }, t) {
                var h = 0;
                $.each(o, function(e) {
                    return o[e] !== ut[e] ? void(h = t) : void 0
                }), t = h
            }
            ut = o, t || _.css(o), _.dequeue().animate(o, {
                duration: t || 0,
                complete: function() {
                    i(), nt = !1, j[0].style.width = K.w + Z + V + "px", j[0].style.height = K.h + J + X + "px", K.get("reposition") && setTimeout(function() {
                        M.bind("resize." + w, st.position)
                    }, 1), $.isFunction(e) && e()
                },
                step: i
            })
        }, st.resize = function(t) {
            var e;
            it && (t = t || {}, t.width && (K.w = s(t.width, "x") - Z - V), t.innerWidth && (K.w = s(t.innerWidth, "x")), N.css({
                width: K.w
            }), t.height && (K.h = s(t.height, "y") - J - X), t.innerHeight && (K.h = s(t.innerHeight, "y")), t.innerHeight || t.height || (e = N.scrollTop(), N.css({
                height: "auto"
            }), K.h = N.height()), N.css({
                height: K.h
            }), e && N.scrollTop(e), st.position("none" === K.get("transition") ? 0 : K.get("speed")))
        }, st.prep = function(e) {
            function n() {
                return K.w = K.w || N.width(), K.w = K.mw && K.mw < K.w ? K.mw : K.w, K.w
            }

            function s() {
                return K.h = K.h || N.height(), K.h = K.mh && K.mh < K.h ? K.mh : K.h, K.h
            }
            if (it) {
                var u, h = "none" === K.get("transition") ? 0 : K.get("speed");
                N.remove(), N = i(at, "LoadedContent").append(e), N.hide().appendTo(R.show()).css({
                    width: n(),
                    overflow: K.get("scrolling") ? "auto" : "hidden"
                }).css({
                    height: s()
                }).prependTo(I), R.hide(), $(et).css({
                    "float": "none"
                }), c(K.get("className")), u = function() {
                    function e() {
                        $.support.opacity === !1 && _[0].style.removeAttribute("filter")
                    }
                    var i = P.length,
                        n, s;
                    it && (s = function() {
                        clearTimeout(rt), z.hide(), d(T), K.get("onComplete")
                    }, q.html(K.get("title")).show(), N.show(), i > 1 ? ("string" == typeof K.get("current") && W.html(K.get("current").replace("{current}", tt + 1).replace("{total}", i)).show(), F[K.get("loop") || i - 1 > tt ? "show" : "hide"]().html(K.get("next")), G[K.get("loop") || tt ? "show" : "hide"]().html(K.get("previous")), ht(), K.get("preloading") && $.each([r(-1), r(1)], function() {
                            var e, i = P[this],
                                n = new o(i, $.data(i, y)),
                                r = n.get("href");
                            r && a(n, r) && (r = l(n, r), e = t.createElement("img"), e.src = r)
                        })) : Y.hide(), K.get("iframe") ? (n = K.get("createIframe"), K.get("scrolling") || (n.scrolling = "no"), $(n).attr({
                            src: K.get("href"),
                            "class": w + "Iframe"
                        }).one("load", s).appendTo(N), U.one(S, function() {
                            n.src = "//about:blank"
                        }), K.get("fastIframe") && $(n).trigger("load")) : s(), "fade" === K.get("transition") ? _.fadeTo(h, 1, e) : e())
                }, "fade" === K.get("transition") ? _.fadeTo(h, 0, function() {
                        st.position(0, u)
                    }) : st.position(h, u)
            }
        }, st.next = function() {
            !nt && P[1] && (K.get("loop") || P[tt + 1]) && (tt = r(1), p(P[tt]))
        }, st.prev = function() {
            !nt && P[1] && (K.get("loop") || tt) && (tt = r(-1), p(P[tt]))
        }, st.close = function() {
            it && !ot && (ot = !0, it = !1, d(E), K.get("onCleanup"), M.unbind("." + w), k.fadeTo(K.get("fadeOut") || 0, 0), _.stop().fadeTo(K.get("fadeOut") || 0, 0, function() {
                _.hide(), k.hide(), d(S), N.remove(), setTimeout(function() {
                    ot = !1, d(A), K.get("onClosed")
                }, 1)
            }))
        }, st.remove = function() {
            _ && (_.stop(), $[y].close(), _.stop(!1, !0).remove(), k.remove(), ot = !1, _ = null, $("." + b).removeData(y).removeClass(b), $(t).unbind("click." + w).unbind("keydown." + w))
        }, st.element = function() {
            return $(K.el)
        }, st.settings = v)
    }(jQuery, document, window), jQuery.extend(jQuery.colorbox.settings, {
    current: "Immagine {current} di {total}",
    previous: "Precedente",
    next: "Successiva",
    close: "Chiudi",
    xhrError: "Errore nel caricamento del contenuto.",
    imgError: "Errore nel caricamento dell'immagine.",
    slideshowStart: "Inizia la presentazione",
    slideshowStop: "Termina la presentazione"
}),
    function($, t, e, i) {
        function n(t, e) {
            this.settings = null, this.options = $.extend({}, n.Defaults, e), this.$element = $(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, $.each(["onResize", "onThrottledResize"], $.proxy(function(t, e) {
                this._handlers[e] = $.proxy(this[e], this)
            }, this)), $.each(n.Plugins, $.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), $.each(n.Workers, $.proxy(function(t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: $.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        n.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: t,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, n.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, n.Type = {
            Event: "event",
            State: "state"
        }, n.Plugins = {}, n.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    o = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(o), t.css = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    o = !this.settings.autoWidth,
                    r = [];
                for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, r[n] = o ? e * i : this._items[n].width();
                this._widths = r
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    e = this._items,
                    i = this.settings,
                    n = Math.max(2 * i.items, 4),
                    o = 2 * Math.ceil(e.length / 2),
                    r = i.loop && e.length ? i.rewind ? n : Math.max(n, o) : 0,
                    s = "",
                    a = "";
                for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
                this._clones = t, $(s).addClass("cloned").appendTo(this.$stage), $(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;) n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
                this._coordinates = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t = this.settings.rtl ? 1 : -1,
                    e = 2 * this.settings.stagePadding,
                    i = this.coordinates(this.current()) + e,
                    n = i + this.width() * t,
                    o, r, s = [],
                    a, l;
                for (a = 0, l = this._coordinates.length; l > a; a++) o = this._coordinates[a - 1] || 0, r = Math.abs(this._coordinates[a]) + e * t, (this.op(o, "<=", i) && this.op(o, ">", n) || this.op(r, "<", i) && this.op(r, ">", n)) && s.push(a);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], n.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var t, e, n;
                t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(e).width(), t.length && 0 >= n && this.preloadAutoWidthImages(t)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = $("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, n.prototype.setup = function() {
            var t = this.viewport(),
                e = this.options.responsive,
                i = -1,
                n = null;
            e ? ($.each(e, function(e) {
                    t >= e && e > i && (i = Number(e))
                }), n = $.extend({}, this.options, e[i]), "function" == typeof n.stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = $.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: n
                }
            }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, n.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, n.prototype.prepare = function(t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = $("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, n.prototype.update = function() {
            for (var t = 0, e = this._pipe.length, i = $.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; e > t;)(this._invalidated.all || $.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(n), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, n.prototype.width = function(t) {
            switch (t = t || n.Width.Default) {
                case n.Width.Inner:
                case n.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, n.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, n.prototype.onThrottledResize = function() {
            t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, n.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
        }, n.prototype.registerEventHandlers = function() {
            $.support.transition && this.$stage.on($.support.transition.end + ".owl.core", $.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", $.proxy(this.onDragEnd, this)))
        }, n.prototype.onDragStart = function(t) {
            var i = null;
            3 !== t.which && ($.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
                    x: i[16 === i.length ? 12 : 4],
                    y: i[16 === i.length ? 13 : 5]
                }) : (i = this.$stage.position(), i = {
                    x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
                    y: i.top
                }), this.is("animating") && ($.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = $(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), $(e).on("mouseup.owl.core touchend.owl.core", $.proxy(this.onDragEnd, this)), $(e).one("mousemove.owl.core touchmove.owl.core", $.proxy(function(t) {
                var i = this.difference(this._drag.pointer, this.pointer(t));
                $(e).on("mousemove.owl.core touchmove.owl.core", $.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, n.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                o = this.difference(this._drag.pointer, this.pointer(t)),
                r = this.difference(this._drag.stage.start, o);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
        }, n.prototype.onDragEnd = function(t) {
            var i = this.difference(this._drag.pointer, this.pointer(t)),
                n = this._drag.stage.current,
                o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
            $(e).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, n.prototype.closest = function(t, e) {
            var i = -1,
                n = 30,
                o = this.width(),
                r = this.coordinates();
            return this.settings.freeDrag || $.each(r, $.proxy(function(s, a) {
                return "left" === e && t > a - n && a + n > t ? i = s : "right" === e && t > a - o - n && a - o + n > t ? i = s + 1 : this.op(t, "<", a) && this.op(t, ">", r[s + 1] || a - o) && (i = "left" === e ? s + 1 : s), -1 === i
            }, this)), this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? i = t = this.minimum() : this.op(t, "<", r[this.maximum()]) && (i = t = this.maximum())), i
        }, n.prototype.animate = function(t) {
            var e = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), $.support.transform3d && $.support.transition ? this.$stage.css({
                    transform: "translate3d(" + t + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s"
                }) : e ? this.$stage.animate({
                        left: t + "px"
                    }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                        left: t + "px"
                    })
        }, n.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, n.prototype.current = function(t) {
            if (t === i) return this._current;
            if (0 === this._items.length) return i;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, n.prototype.invalidate = function(t) {
            return "string" === $.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), $.map(this._invalidated, function(t, e) {
                return e
            })
        }, n.prototype.reset = function(t) {
            t = this.normalize(t), t !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, n.prototype.normalize = function(t, e) {
            var n = this._items.length,
                o = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || 1 > n ? t = i : (0 > t || t >= n + o) && (t = ((t - o / 2) % n + n) % n + o / 2), t
        }, n.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, n.prototype.maximum = function(t) {
            var e = this.settings,
                i = this._coordinates.length,
                n, o, r;
            if (e.loop) i = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (n = this._items.length, o = this._items[--n].width(), r = this.$element.width(); n-- && (o += this._items[n].width() + this.settings.margin, !(o > r)););
                i = n + 1
            } else i = e.center ? this._items.length - 1 : this._items.length - e.items;
            return t && (i -= this._clones.length / 2), Math.max(i, 0)
        }, n.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, n.prototype.items = function(t) {
            return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, n.prototype.mergers = function(t) {
            return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, n.prototype.clones = function(t) {
            var e = this._clones.length / 2,
                n = e + this._items.length,
                o = function(t) {
                    return t % 2 === 0 ? n + t / 2 : e - (t + 1) / 2
                };
            return t === i ? $.map(this._clones, function(t, e) {
                    return o(e)
                }) : $.map(this._clones, function(e, i) {
                    return e === t ? o(i) : null
                })
        }, n.prototype.speed = function(t) {
            return t !== i && (this._speed = t), this._speed
        }, n.prototype.coordinates = function(t) {
            var e = 1,
                n = t - 1,
                o;
            return t === i ? $.map(this._coordinates, $.proxy(function(t, e) {
                    return this.coordinates(e)
                }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, n = t + 1), o = this._coordinates[t], o += (this.width() - o + (this._coordinates[n] || 0)) / 2 * e) : o = this._coordinates[n] || 0, o = Math.ceil(o))
        }, n.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, n.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                o = t - this.relative(i),
                r = (o > 0) - (0 > o),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), t = i + o, n = ((t - a) % s + s) % s + a, n !== t && l >= n - o && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, n.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, n.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, n.prototype.onTransitionEnd = function(t) {
            return t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
        }, n.prototype.viewport = function() {
            var i;
            if (this.options.responsiveBaseElement !== t) i = $(this.options.responsiveBaseElement).width();
            else if (t.innerWidth) i = t.innerWidth;
            else {
                if (!e.documentElement || !e.documentElement.clientWidth) throw "Can not detect viewport width.";
                i = e.documentElement.clientWidth
            }
            return i
        }, n.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : $(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each($.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, n.prototype.add = function(t, e) {
            var n = this.relative(this._current);
            e = e === i ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : $(t), this.trigger("add", {
                content: t,
                position: e
            }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, n.prototype.remove = function(t) {
            t = this.normalize(t, !0), t !== i && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, n.prototype.preloadAutoWidthImages = function(t) {
            t.each($.proxy(function(t, e) {
                this.enter("pre-loading"), e = $(e), $(new Image).one("load", $.proxy(function(t) {
                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }, n.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), $(e).off(".owl.core"), this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
            for (var i in this._plugins) this._plugins[i].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, n.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, n.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, n.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, n.prototype.trigger = function(t, e, i, o, r) {
            var s = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                a = $.camelCase($.grep(["on", t, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                l = $.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), $.extend({
                    relatedTarget: this
                }, s, e));
            return this._supress[t] || ($.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(l)
            }), this.register({
                type: n.Type.Event,
                name: t
            }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[a] && this.settings[a].call(this, l)), l
        }, n.prototype.enter = function(t) {
            $.each([t].concat(this._states.tags[t] || []), $.proxy(function(t, e) {
                this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, n.prototype.leave = function(t) {
            $.each([t].concat(this._states.tags[t] || []), $.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, n.prototype.register = function(t) {
            if (t.type === n.Type.Event) {
                if ($.event.special[t.name] || ($.event.special[t.name] = {}), !$.event.special[t.name].owl) {
                    var e = $.event.special[t.name]._default;
                    $.event.special[t.name]._default = function(t) {
                        return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : e.apply(this, arguments)
                    }, $.event.special[t.name].owl = !0
                }
            } else t.type === n.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = $.grep(this._states.tags[t.name], $.proxy(function(e, i) {
                return $.inArray(e, this._states.tags[t.name]) === i
            }, this)))
        }, n.prototype.suppress = function(t) {
            $.each(t, $.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, n.prototype.release = function(t) {
            $.each(t, $.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, n.prototype.pointer = function(e) {
            var i = {
                x: null,
                y: null
            };
            return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
        }, n.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, n.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, $.fn.owlCarousel = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var i = $(this),
                    o = i.data("owl.carousel");
                o || (o = new n(this, "object" == typeof t && t), i.data("owl.carousel", o), $.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                    o.register({
                        type: n.Type.Event,
                        name: e
                    }), o.$element.on(e + ".owl.carousel.core", $.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), o[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                    }, o))
                })), "string" == typeof t && "_" !== t.charAt(0) && o[t].apply(o, e)
            })
        }, $.fn.owlCarousel.Constructor = n
    }(window.Zepto || window.jQuery, window, document), ! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function l(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var u = a.data(l, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var c = u[e];
                if (!c || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var h = c.apply(u, n);
                o = void 0 === o ? h : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return l(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
                r.error(t)
            };
    return n(e || t.jQuery), i
}),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
                return e()
            }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
            }
        }

        function r(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == r.boxSizing, h = 0; u > h; h++) {
                    var d = l[h],
                        p = r[d],
                        f = parseFloat(p);
                    a[d] = isNaN(f) ? 0 : f
                }
                var g = a.paddingLeft + a.paddingRight,
                    m = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    b = a.borderTopWidth + a.borderBottomWidth,
                    x = c && s,
                    C = t(r.width);
                C !== !1 && (a.width = C + (x ? 0 : g + w));
                var T = t(r.height);
                return T !== !1 && (a.height = T + (x ? 0 : m + b)), a.innerWidth = a.width - (g + w), a.innerHeight = a.height - (m + b), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
                return e(t, i)
            }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    u = i.makeArray(a).concat(i.makeArray(l)),
                    c = s + "-options",
                    h = t.jQuery;
                u.forEach(function(t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        i = r && JSON.parse(r)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                    }
                    var l = new e(t, i);
                    h && h.data(t, o, l)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s],
            u = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            c = n.prototype = Object.create(t.prototype);
        c.constructor = n, c._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function() {
            this.size = e(this.element)
        }, c.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = u[i] || i;
                e[n] = t[i]
            }
        }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                r = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
        }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                r = i ? "left" : "right",
                s = i ? "right" : "left",
                a = this.position.x + t[o];
            e[r] = this.getXValue(a), e[s] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                u = n ? "top" : "bottom",
                c = n ? "bottom" : "top",
                h = this.position.y + t[l];
            e[u] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, c.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, c._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, c.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, c._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var h = "opacity," + o(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: h,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, c.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, c.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, c._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var p = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return c.removeTransitionStyles = function() {
            this.css(p)
        }, c.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, c.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, c.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                    this.removeElem()
                }), void this.hide()) : void this.removeElem()
        }, c.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, c.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, c.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
                return e(t, i, n, o, r)
            }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o) {
        "use strict";

        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++h;
            this.element.outlayerGUID = o, d[o] = this, this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = f[n] || 1;
            return i * o
        }
        var l = t.console,
            u = t.jQuery,
            c = function() {},
            h = 0,
            d = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = r.prototype;
        n.extend(p, e.prototype), p.option = function(t) {
            n.extend(this.options, t)
        }, p._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, p.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var r = e[o],
                    s = new i(r, this);
                n.push(s)
            }
            return n
        }, p._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, p.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function() {
            this.getSize()
        }, p.getSize = function() {
            this.size = i(this.element)
        }, p._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, p.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, p._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, p.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, p._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, p._postLayout = function() {
            this.resizeContainer()
        }, p.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, p._getContainerSize = c, p._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                s++, s == r && i()
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void i();
            var s = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var o = u.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, p.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, p._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = c, p._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return r
        }, p.handleEvent = n.handleEvent, p.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function() {
            this.resize()
        }, n.debounceMethod(r, "onresize", 100), p.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, p.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, p.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, p.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, p.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, p.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete d[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, r.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && d[e]
        }, r.create = function(t, e) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var o = i.destroy;
        return i.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        }, n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / n,
                s = n - o % n,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                x: this.columnWidth * s,
                y: r
            }, l = r + t.size.outerHeight, u = this.cols + 1 - o.length, c = 0; u > c; c++) this.colYs[s + c] = l;
            return a
        }, i.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                r = o ? n.left : n.right,
                s = r + i.outerWidth,
                a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? n.top : n.bottom) + i.outerHeight, h = a; l >= h; h++) this.colYs[h] = Math.max(c, this.colYs[h])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
        var s = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
                return e(t, i, n, o, r, s, a)
            }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, o, r, s) {
        function a(t, e) {
            return function(i, n) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o],
                        s = i.sortData[r],
                        a = n.sortData[r];
                    if (s > a || a > s) {
                        var l = void 0 !== e[r] ? e[r] : e,
                            u = l ? 1 : -1;
                        return (s > a ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            u = String.prototype.trim ? function(t) {
                    return t.trim()
                } : function(t) {
                    return t.replace(/^\s+|\s+$/g, "")
                },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = r, c.LayoutMode = s;
        var h = c.prototype;
        h._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, h.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, h._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, h._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, h.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, h._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, h.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, h._init = h.arrange, h._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, h._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, h._bindArrangeComplete = function() {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, h._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var l = r(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, h._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                    return l(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                        return t(e.element)
                    } : function(e) {
                        return n(e.element, t)
                    }
        }, h.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, h._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }, h._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var d = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = u(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    r = o && o[1],
                    s = e(r, n),
                    a = c.sortDataParsers[i[1]];
                return t = a ? function(t) {
                        return t && a(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
            }

            function e(t, e) {
                return t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && i.textContent
                    }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, h._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, h._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, h._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, h._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, h._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, h._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, h.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, h.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, h._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, h.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                var r = this._filter(e).matches;
                for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var p = h.remove;
        return h.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, n = 0; i && i > n; n++) {
                var r = e[n];
                o.removeFrom(this.filteredItems, r)
            }
        }, h.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, h._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i, n
        }, h.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, c
    }), ! function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
}(window, function() {
    function t(e) {
        for (var i in t.defaults) this[i] = t.defaults[i];
        for (i in e) this[i] = e[i]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0,
            i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
    }, e.overlaps = function(t) {
        var e = this.x + this.width,
            i = this.y + this.height,
            n = t.x + t.width,
            o = t.y + t.height;
        return this.x < n && e > t.x && this.y < o && i > t.y
    }, e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e)) return !1;
        var i, n = [],
            o = this.x + this.width,
            r = this.y + this.height,
            s = e.x + e.width,
            a = e.y + e.height;
        return this.y < e.y && (i = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }), n.push(i)), o > s && (i = new t({
            x: s,
            y: this.y,
            width: o - s,
            height: this.height
        }), n.push(i)), r > a && (i = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: r - a
        }), n.push(i)), this.x < e.x && (i = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }), n.push(i)), n
    }, e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }, t
}),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window, function(t) {
        function e(t, e, i) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }
        var i = e.prototype;
        i.reset = function() {
            this.spaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
        }, i.pack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e];
                if (i.canFit(t)) {
                    this.placeInSpace(t, i);
                    break
                }
            }
        }, i.columnPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e],
                    n = i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01;
                if (n) {
                    t.y = i.y, this.placed(t);
                    break
                }
            }
        }, i.rowPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e],
                    n = i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01;
                if (n) {
                    t.x = i.x, this.placed(t);
                    break
                }
            }
        }, i.placeInSpace = function(t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, i.placed = function(t) {
            for (var e = [], i = 0; i < this.spaces.length; i++) {
                var n = this.spaces[i],
                    o = n.getMaximalFreeRects(t);
                o ? e.push.apply(e, o) : e.push(n)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, i.mergeSortSpaces = function() {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, i.addSpace = function(t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, e.mergeRects = function(t) {
            var e = 0,
                i = t[e];
            t: for (; i;) {
                for (var n = 0, o = t[e + n]; o;) {
                    if (o == i) n++;
                    else {
                        if (o.contains(i)) {
                            t.splice(e, 1), i = t[e];
                            continue t
                        }
                        i.contains(o) ? t.splice(e + n, 1) : n++
                    }
                    o = t[e + n]
                }
                e++, i = t[e]
            }
            return t
        };
        var n = {
            downwardLeftToRight: function(t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function(t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
    }(window, function(t, e) {
        var i = document.documentElement.style,
            n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            o = function() {
                t.Item.apply(this, arguments)
            },
            r = o.prototype = Object.create(t.Item.prototype),
            s = r._create;
        r._create = function() {
            s.call(this), this.rect = new e
        };
        var a = r.moveTo;
        return r.moveTo = function(t, e) {
            var i = Math.abs(this.position.x - t),
                n = Math.abs(this.position.y - e),
                o = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n;
            return o ? void this.goTo(t, e) : void a.apply(this, arguments)
        }, r.enablePlacing = function() {
            this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
        }, r.disablePlacing = function() {
            this.isPlacing = !1
        }, r.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, r.showDropPlaceholder = function() {
            var t = this.dropPlaceholder;
            t || (t = this.dropPlaceholder = document.createElement("div"), t.className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
        }, r.positionDropPlaceholder = function() {
            this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
        }, r.hideDropPlaceholder = function() {
            this.layout.element.removeChild(this.dropPlaceholder)
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item);
    }(window, function(t, e, i, n, o) {
        function r(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function s(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }

        function a(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return Math.sqrt(i * i + n * n)
        }
        i.prototype.canFit = function(t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var l = e.create("packery");
        l.Item = o;
        var u = l.prototype;
        u._create = function() {
            e.prototype._create.call(this), this.packer = new n, this.shiftPacker = new n, this.isEnabled = !0, this.dragItemCount = 0;
            var t = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    t.itemDragStart(this.element)
                },
                dragMove: function() {
                    t.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    t.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(e, i) {
                    i && t.itemDragStart(e.currentTarget)
                },
                drag: function(e, i) {
                    i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                },
                stop: function(e, i) {
                    i && t.itemDragEnd(e.currentTarget)
                }
            }
        }, u._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var t, e, i;
            this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, i = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = i, this.packer.reset(), this.maxY = 0, this.maxX = 0
        }, u._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, u._getItemLayoutPosition = function(t) {
            if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
                var e = this._getPackMethod();
                this.packer[e](t.rect)
            } else this.packer.pack(t.rect);
            return this._setMaxXY(t.rect), t.rect
        }, u.shiftLayout = function() {
            this.isShifting = !0, this.layout(), delete this.isShifting
        }, u._getPackMethod = function() {
            return this._getOption("horizontal") ? "rowPack" : "columnPack"
        }, u._setMaxXY = function(t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, u._setRectSize = function(e, i) {
            var n = t(e),
                o = n.outerWidth,
                r = n.outerHeight;
            (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
        }, u._applyGridGutter = function(t, e) {
            if (!e) return t + this.gutter;
            e += this.gutter;
            var i = t % e,
                n = i && 1 > i ? "round" : "ceil";
            return t = Math[n](t / e) * e
        }, u._getContainerSize = function() {
            return this._getOption("horizontal") ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
        }, u._manageStamp = function(t) {
            var e, n = this.getItem(t);
            if (n && n.isPlacing) e = n.rect;
            else {
                var o = this._getElementOffset(t);
                e = new i({
                    x: this._getOption("originLeft") ? o.left : o.right,
                    y: this._getOption("originTop") ? o.top : o.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, u.sortItemsByPosition = function() {
            var t = this._getOption("horizontal") ? s : r;
            this.items.sort(t)
        }, u.fit = function(t, e, i) {
            var n = this.getItem(t);
            n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, this.shift(n, e, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
        }, u._bindFitEvents = function(t) {
            function e() {
                n++, 2 == n && i.dispatchEvent("fitComplete", null, [t])
            }
            var i = this,
                n = 0;
            t.once("layout", e), this.once("layoutComplete", e)
        }, u.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
        }, u.needsResizeLayout = function() {
            var e = t(this.element),
                i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
            return e[i] != this.size[i]
        }, u.resizeShiftPercentLayout = function() {
            var e = this._getItemsForLayout(this.items),
                i = this._getOption("horizontal"),
                n = i ? "y" : "x",
                o = i ? "height" : "width",
                r = i ? "rowHeight" : "columnWidth",
                s = i ? "innerHeight" : "innerWidth",
                a = this[r];
            if (a = a && a + this.gutter) {
                this._getMeasurements();
                var l = this[r] + this.gutter;
                e.forEach(function(t) {
                    var e = Math.round(t.rect[n] / a);
                    t.rect[n] = e * l
                })
            } else {
                var u = t(this.element)[s] + this.gutter,
                    c = this.packer[o];
                e.forEach(function(t) {
                    t.rect[n] = t.rect[n] / c * u
                })
            }
            this.shiftLayout()
        }, u.itemDragStart = function(t) {
            if (this.isEnabled) {
                this.stamp(t);
                var e = this.getItem(t);
                e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
            }
        }, u.updateShiftTargets = function(t) {
            this.shiftPacker.reset(), this._getBoundingRect();
            var e = this._getOption("originLeft"),
                n = this._getOption("originTop");
            this.stamps.forEach(function(t) {
                var o = this.getItem(t);
                if (!o || !o.isPlacing) {
                    var r = this._getElementOffset(t),
                        s = new i({
                            x: e ? r.left : r.right,
                            y: n ? r.top : r.bottom
                        });
                    this._setRectSize(t, s), this.shiftPacker.placed(s)
                }
            }, this);
            var o = this._getOption("horizontal"),
                r = o ? "rowHeight" : "columnWidth",
                s = o ? "height" : "width";
            this.shiftTargetKeys = [], this.shiftTargets = [];
            var a, l = this[r];
            if (l = l && l + this.gutter) {
                var u = Math.ceil(t.rect[s] / l),
                    c = Math.floor((this.shiftPacker[s] + this.gutter) / l);
                a = (c - u) * l;
                for (var h = 0; c > h; h++) this._addShiftTarget(h * l, 0, a)
            } else a = this.shiftPacker[s] + this.gutter - t.rect[s], this._addShiftTarget(0, 0, a);
            var d = this._getItemsForLayout(this.items),
                p = this._getPackMethod();
            d.forEach(function(t) {
                var e = t.rect;
                this._setRectSize(t.element, e), this.shiftPacker[p](e), this._addShiftTarget(e.x, e.y, a);
                var i = o ? e.x + e.width : e.x,
                    n = o ? e.y : e.y + e.height;
                if (this._addShiftTarget(i, n, a), l)
                    for (var r = Math.round(e[s] / l), u = 1; r > u; u++) {
                        var c = o ? i : e.x + l * u,
                            h = o ? e.y + l * u : n;
                        this._addShiftTarget(c, h, a)
                    }
            }, this)
        }, u._addShiftTarget = function(t, e, i) {
            var n = this._getOption("horizontal") ? e : t;
            if (!(0 !== n && n > i)) {
                var o = t + "," + e,
                    r = -1 != this.shiftTargetKeys.indexOf(o);
                r || (this.shiftTargetKeys.push(o), this.shiftTargets.push({
                    x: t,
                    y: e
                }))
            }
        }, u.shift = function(t, e, i) {
            var n, o = 1 / 0,
                r = {
                    x: e,
                    y: i
                };
            this.shiftTargets.forEach(function(t) {
                var e = a(t, r);
                o > e && (n = t, o = e)
            }), t.rect.x = n.x, t.rect.y = n.y
        };
        var c = 120;
        u.itemDragMove = function(t, e, i) {
            function n() {
                r.shift(o, e, i), o.positionDropPlaceholder(), r.layout()
            }
            var o = this.isEnabled && this.getItem(t);
            if (o) {
                e -= this.size.paddingLeft, i -= this.size.paddingTop;
                var r = this,
                    s = new Date;
                this._itemDragTime && s - this._itemDragTime < c ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, c)) : (n(), this._itemDragTime = s)
            }
        }, u.itemDragEnd = function(t) {
            function e() {
                n++, 2 == n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), o.dispatchEvent("dragItemPositioned", null, [i]))
            }
            var i = this.isEnabled && this.getItem(t);
            if (i) {
                clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
                var n = 0,
                    o = this;
                i.once("layout", e), this.once("layoutComplete", e), i.moveTo(i.rect.x, i.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), i.disablePlacing(), this.unstamp(i.element)
            }
        }, u.bindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "on")
        }, u.unbindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "off")
        }, u._bindDraggabillyEvents = function(t, e) {
            var i = this.handleDraggabilly;
            t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd)
        }, u.bindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "on")
        }, u.unbindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "off")
        }, u._bindUIDraggableEvents = function(t, e) {
            var i = this.handleUIDraggable;
            t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
        };
        var h = u.destroy;
        return u.destroy = function() {
            h.apply(this, arguments), this.isEnabled = !1
        }, l.Rect = i, l.Packer = n, l
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("isotope-layout/js/layout-mode"), require("packery")) : e(t.Isotope.LayoutMode, t.Packery)
    }(window, function(t, e) {
        var i = t.create("packery"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                _getMeasurement: !0
            };
        for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
        var s = n._resetLayout;
        n._resetLayout = function() {
            this.packer = this.packer || new e.Packer, this.shiftPacker = this.shiftPacker || new e.Packer, s.apply(this, arguments)
        };
        var a = n._getItemLayoutPosition;
        n._getItemLayoutPosition = function(t) {
            return t.rect = t.rect || new e.Rect, a.call(this, t)
        };
        var l = n.needsResizeLayout;
        n.needsResizeLayout = function() {
            return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : l.call(this)
        };
        var u = n._getOption;
        return n._getOption = function(t) {
            return "horizontal" == t ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : u.apply(this.isotope, arguments)
        }, i
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t, e) {
        "use strict";
        t.infinitescroll = function(e, i, n) {
            this.element = t(n), this._create(e, i) || (this.failed = !0)
        }, t.infinitescroll.defaults = {
            loading: {
                finished: e,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: e
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: e,
            binder: t(window),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: e,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: e,
            path: e,
            prefill: !1,
            maxPage: e
        }, t.infinitescroll.prototype = {
            _binding: function(t) {
                var i = this,
                    n = i.options;
                return n.v = "2.0b2.120520", n.behavior && this["_binding_" + n.behavior] !== e ? void this["_binding_" + n.behavior].call(this) : "bind" !== t && "unbind" !== t ? (this._debug("Binding value  " + t + " not valid"), !1) : ("unbind" === t ? this.options.binder.unbind("smartscroll.infscr." + i.options.infid) : this.options.binder[t]("smartscroll.infscr." + i.options.infid, function() {
                                i.scroll()
                            }), void this._debug("Binding", t))
            },
            _create: function(i, n) {
                var o = t.extend(!0, {}, t.infinitescroll.defaults, i);
                this.options = o;
                var r = t(window),
                    s = this;
                if (!s._validate(i)) return !1;
                var a = t(o.nextSelector).attr("href");
                if (!a) return this._debug("Navigation selector not found"), !1;
                o.path = o.path || this._determinepath(a), o.contentSelector = o.contentSelector || this.element, o.loading.selector = o.loading.selector || o.contentSelector, o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>"), (new Image).src = o.loading.img, o.pixelsFromNavToBottom === e && (o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom));
                var l = this;
                return o.loading.start = o.loading.start || function() {
                        t(o.navSelector).hide(), o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() {
                            this.beginAjax(o)
                        }, l))
                    }, o.loading.finished = o.loading.finished || function() {
                        o.state.isBeyondMaxPage || o.loading.msg.fadeOut(o.loading.speed)
                    }, o.callback = function(i, s, a) {
                    o.behavior && i["_callback_" + o.behavior] !== e && i["_callback_" + o.behavior].call(t(o.contentSelector)[0], s, a), n && n.call(t(o.contentSelector)[0], s, o, a), o.prefill && r.bind("resize.infinite-scroll", i._prefill)
                }, i.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(t) {
                    console[t] = this.call(console[t], console)
                }, Function.prototype.bind)), this._setup(), o.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function e() {
                    return t(i.options.contentSelector).height() <= n.height()
                }
                var i = this,
                    n = t(window);
                this._prefill = function() {
                    e() && i.scroll(), n.bind("resize.infinite-scroll", function() {
                        e() && (n.unbind("resize.infinite-scroll"), i.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(t) {
                var i = this.options;
                if (i.behavior && this["_determinepath_" + i.behavior] !== e) return this["_determinepath_" + i.behavior].call(this, t);
                if (i.pathParse) return this._debug("pathParse manual"), i.pathParse(t, this.options.state.currPage + 1);
                if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (t.match(/^(.*?)2(.*?$)/)) {
                    if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    t = t.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), i.state.isInvalidPage = !0
                }
                return this._debug("determinePath", t), t
            },
            _error: function(t) {
                var i = this.options;
                return i.behavior && this["_error_" + i.behavior] !== e ? void this["_error_" + i.behavior].call(this, t) : ("destroy" !== t && "end" !== t && (t = "unknown"), this._debug("Error", t), ("end" === t || i.state.isBeyondMaxPage) && this._showdonemsg(), i.state.isDone = !0, i.state.currPage = 1, i.state.isPaused = !1, i.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function(i, n, o) {
                var r = this.options,
                    s = this.options.callback,
                    a = r.state.isDone ? "done" : r.appendCallback ? "append" : "no-append",
                    l;
                if (r.behavior && this["_loadcallback_" + r.behavior] !== e) return void this["_loadcallback_" + r.behavior].call(this, i, n);
                switch (a) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === r.dataType && (n = "<div>" + n + "</div>", n = t(n).find(r.itemSelector)), 0 === n.length) return this._error("end");
                        break;
                    case "append":
                        var u = i.children();
                        if (0 === u.length) return this._error("end");
                        for (l = document.createDocumentFragment(); i[0].firstChild;) l.appendChild(i[0].firstChild);
                        this._debug("contentSelector", t(r.contentSelector)[0]), t(r.contentSelector)[0].appendChild(l), n = u.get()
                }
                if (r.loading.finished.call(t(r.contentSelector)[0], r), r.animate) {
                    var c = t(window).scrollTop() + t(r.loading.msg).height() + r.extraScrollPx + "px";
                    t("html,body").animate({
                        scrollTop: c
                    }, 800, function() {
                        r.state.isDuringAjax = !1
                    })
                }
                r.animate || (r.state.isDuringAjax = !1), s(this, n, o), r.prefill && this._prefill()
            },
            _nearbottom: function() {
                var i = this.options,
                    n = 0 + t(document).height() - i.binder.scrollTop() - t(window).height();
                return i.behavior && this["_nearbottom_" + i.behavior] !== e ? this["_nearbottom_" + i.behavior].call(this) : (this._debug("math:", n, i.pixelsFromNavToBottom), n - i.bufferPx < i.pixelsFromNavToBottom)
            },
            _pausing: function(t) {
                var i = this.options;
                if (i.behavior && this["_pausing_" + i.behavior] !== e) return void this["_pausing_" + i.behavior].call(this, t);
                switch ("pause" !== t && "resume" !== t && null !== t && this._debug("Invalid argument. Toggling pause value instead"), t = !t || "pause" !== t && "resume" !== t ? "toggle" : t) {
                    case "pause":
                        i.state.isPaused = !0;
                        break;
                    case "resume":
                        i.state.isPaused = !1;
                        break;
                    case "toggle":
                        i.state.isPaused = !i.state.isPaused
                }
                return this._debug("Paused", i.state.isPaused), !1
            },
            _setup: function() {
                var t = this.options;
                return t.behavior && this["_setup_" + t.behavior] !== e ? void this["_setup_" + t.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var i = this.options;
                return i.behavior && this["_showdonemsg_" + i.behavior] !== e ? void this["_showdonemsg_" + i.behavior].call(this) : (i.loading.msg.find("img").hide().parent().find("div").html(i.loading.finishedMsg).animate({
                        opacity: 1
                    }, 2e3, function() {
                        t(this).parent().fadeOut(i.loading.speed)
                    }), void i.errorCallback.call(t(i.contentSelector)[0], "done"))
            },
            _validate: function(e) {
                for (var i in e)
                    if (i.indexOf && i.indexOf("Selector") > -1 && 0 === t(e[i]).length) return this._debug("Your " + i + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(i) {
                var n = this,
                    o = i.path,
                    r, s, a, l;
                if (i.state.currPage++, i.maxPage !== e && i.state.currPage > i.maxPage) return i.state.isBeyondMaxPage = !0, void this.destroy();
                switch (r = t(t(i.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), s = "function" == typeof o ? o(i.state.currPage) : o.join(i.state.currPage), n._debug("heading into ajax", s), a = "html" === i.dataType || "json" === i.dataType ? i.dataType : "html+callback", i.appendCallback && "html" === i.dataType && (a += "+callback"), a) {
                    case "html+callback":
                        n._debug("Using HTML via .load() method"), r.load(s + " " + i.itemSelector, e, function(t) {
                            n._loadcallback(r, t, s)
                        });
                        break;
                    case "html":
                        n._debug("Using " + a.toUpperCase() + " via $.ajax() method"), t.ajax({
                            url: s,
                            dataType: i.dataType,
                            complete: function(t, e) {
                                l = "undefined" != typeof t.isResolved ? t.isResolved() : "success" === e || "notmodified" === e, l ? n._loadcallback(r, t.responseText, s) : n._error("end")
                            }
                        });
                        break;
                    case "json":
                        n._debug("Using " + a.toUpperCase() + " via $.ajax() method"), t.ajax({
                            dataType: "json",
                            type: "GET",
                            url: s,
                            success: function(t, o, a) {
                                if (l = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === o || "notmodified" === o, i.appendCallback)
                                    if (i.template !== e) {
                                        var u = i.template(t);
                                        r.append(u), l ? n._loadcallback(r, u) : n._error("end")
                                    } else n._debug("template must be defined."), n._error("end");
                                else l ? n._loadcallback(r, t, s) : n._error("end")
                            },
                            error: function() {
                                n._debug("JSON ajax request failed."), n._error("end")
                            }
                        })
                }
            },
            retrieve: function(i) {
                i = i || null;
                var n = this,
                    o = n.options;
                return o.behavior && this["retrieve_" + o.behavior] !== e ? void this["retrieve_" + o.behavior].call(this, i) : o.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (o.state.isDuringAjax = !0, void o.loading.start.call(t(o.contentSelector)[0], o))
            },
            scroll: function() {
                var t = this.options,
                    i = t.state;
                return t.behavior && this["scroll_" + t.behavior] !== e ? void this["scroll_" + t.behavior].call(this) : void(i.isDuringAjax || i.isInvalidPage || i.isDone || i.isDestroyed || i.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
        }, t.fn.infinitescroll = function(e, i) {
            var n = typeof e;
            switch (n) {
                case "string":
                    var o = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var i = t.data(this, "infinitescroll");
                        return i && t.isFunction(i[e]) && "_" !== e.charAt(0) ? void i[e].apply(i, o) : !1
                    });
                    break;
                case "object":
                    this.each(function() {
                        var n = t.data(this, "infinitescroll");
                        n ? n.update(e) : (n = new t.infinitescroll(e, i, this), n.failed || t.data(this, "infinitescroll", n))
                    })
            }
            return this
        };
        var i = t.event,
            n;
        i.special.smartscroll = {
            setup: function() {
                t(this).bind("scroll", i.special.smartscroll.handler)
            },
            teardown: function() {
                t(this).unbind("scroll", i.special.smartscroll.handler)
            },
            handler: function(e, i) {
                var o = this,
                    r = arguments;
                e.type = "smartscroll", n && clearTimeout(n), n = setTimeout(function() {
                    t(o).trigger("smartscroll", r)
                }, "execAsap" === i ? 0 : 100)
            }
        }, t.fn.smartscroll = function(t) {
            return t ? this.bind("smartscroll", t) : this.trigger("smartscroll", ["execAsap"])
        }
    }), ! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
                return e(t, i)
            }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, r) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                    this.check()
                }.bind(this))) : new o(t, e, r)
        }

        function r(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && u[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new r(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                    e.once("progress", t), e.check()
                }) : void this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }), jQuery(document).ready(function($) {
    function t(t, e) {
        t.each(function() {
            $(this).offset().top > $(window).scrollTop() + $(window).height() * e && $(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")
        })
    }

    function e(t, e) {
        t.each(function() {
            $(this).offset().top <= $(window).scrollTop() + $(window).height() * e && $(this).find(".cd-timeline-img").hasClass("is-hidden") && $(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")
        })
    }
    var i = $(".cd-timeline-block"),
        n = .8;
    t(i, n), $(window).on("scroll", function() {
        window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                e(i, n)
            }) : setTimeout(function() {
                e(i, n)
            }, 100)
    })
}), ! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    t.fn.jScrollPane = function(e) {
        function i(e, i) {
            function n(i) {
                var r, a, u, c, h, f, g = !1,
                    m = !1;
                if (z = i, void 0 === q) h = e.scrollTop(), f = e.scrollLeft(), e.css({
                    overflow: "hidden",
                    padding: 0
                }), W = e.innerWidth() + vt, H = e.innerHeight(), e.width(W), q = t('<div class="jspPane" />').css("padding", mt).append(e.children()), F = t('<div class="jspContainer" />').css({
                    width: W + "px",
                    height: H + "px"
                }).append(q).appendTo(e);
                else {
                    if (e.css("width", ""), g = z.stickToBottom && S(), m = z.stickToRight && k(), c = e.innerWidth() + vt != W || e.outerHeight() != H, c && (W = e.innerWidth() + vt, H = e.innerHeight(), F.css({
                            width: W + "px",
                            height: H + "px"
                        })), !c && yt == G && q.outerHeight() == Q) return void e.width(W);
                    yt = G, q.css("width", ""), e.width(W), F.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                q.css("overflow", "auto"), G = i.contentWidth ? i.contentWidth : q[0].scrollWidth, Q = q[0].scrollHeight, q.css("overflow", ""), Y = G / W, U = Q / H, K = U > 1, X = Y > 1, X || K ? (e.addClass("jspScrollable"), r = z.maintainPosition && ($ || et), r && (a = E(), u = A()), o(), s(), l(), r && (C(m ? G - W : a, !1), x(g ? Q - H : u, !1)), D(), _(), N(), z.enableKeyboardNavigation && B(), z.clickOnTrack && d(), P(), z.hijackInternalLinks && M()) : (e.removeClass("jspScrollable"), q.css({
                        top: 0,
                        left: 0,
                        width: F.width() - vt
                    }), j(), L(), O(), p()), z.autoReinitialise && !gt ? gt = setInterval(function() {
                        n(z)
                    }, z.autoReinitialiseDelay) : !z.autoReinitialise && gt && clearInterval(gt), h && e.scrollTop(0) && x(h, !1), f && e.scrollLeft(0) && C(f, !1), e.trigger("jsp-initialised", [X || K])
            }

            function o() {
                K && (F.append(t('<div class="jspVerticalBar" />').append(t('<div class="jspCap jspCapTop" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragTop" />'), t('<div class="jspDragBottom" />'))), t('<div class="jspCap jspCapBottom" />'))), it = F.find(">.jspVerticalBar"), nt = it.find(">.jspTrack"), V = nt.find(">.jspDrag"), z.showArrows && (at = t('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", c(0, -1)).bind("click.jsp", I), lt = t('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", c(0, 1)).bind("click.jsp", I), z.arrowScrollOnHover && (at.bind("mouseover.jsp", c(0, -1, at)), lt.bind("mouseover.jsp", c(0, 1, lt))), u(nt, z.verticalArrowPositions, at, lt)), rt = H, F.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    rt -= t(this).outerHeight()
                }), V.hover(function() {
                    V.addClass("jspHover")
                }, function() {
                    V.removeClass("jspHover")
                }).bind("mousedown.jsp", function(e) {
                    t("html").bind("dragstart.jsp selectstart.jsp", I), V.addClass("jspActive");
                    var i = e.pageY - V.position().top;
                    return t("html").bind("mousemove.jsp", function(t) {
                        g(t.pageY - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", f), !1
                }), r())
            }

            function r() {
                nt.height(rt + "px"), $ = 0, ot = z.verticalGutter + nt.outerWidth(), q.width(W - ot - vt);
                try {
                    0 === it.position().left && q.css("margin-left", ot + "px")
                } catch (t) {}
            }

            function s() {
                X && (F.append(t('<div class="jspHorizontalBar" />').append(t('<div class="jspCap jspCapLeft" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragLeft" />'), t('<div class="jspDragRight" />'))), t('<div class="jspCap jspCapRight" />'))), ut = F.find(">.jspHorizontalBar"), ct = ut.find(">.jspTrack"), Z = ct.find(">.jspDrag"), z.showArrows && (pt = t('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", c(-1, 0)).bind("click.jsp", I), ft = t('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", c(1, 0)).bind("click.jsp", I), z.arrowScrollOnHover && (pt.bind("mouseover.jsp", c(-1, 0, pt)), ft.bind("mouseover.jsp", c(1, 0, ft))), u(ct, z.horizontalArrowPositions, pt, ft)), Z.hover(function() {
                    Z.addClass("jspHover")
                }, function() {
                    Z.removeClass("jspHover")
                }).bind("mousedown.jsp", function(e) {
                    t("html").bind("dragstart.jsp selectstart.jsp", I), Z.addClass("jspActive");
                    var i = e.pageX - Z.position().left;
                    return t("html").bind("mousemove.jsp", function(t) {
                        v(t.pageX - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", f), !1
                }), ht = F.innerWidth(), a())
            }

            function a() {
                F.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    ht -= t(this).outerWidth()
                }), ct.width(ht + "px"), et = 0
            }

            function l() {
                if (X && K) {
                    var e = ct.outerHeight(),
                        i = nt.outerWidth();
                    rt -= e, t(ut).find(">.jspCap:visible,>.jspArrow").each(function() {
                        ht += t(this).outerWidth()
                    }), ht -= i, H -= i, W -= e, ct.parent().append(t('<div class="jspCorner" />').css("width", e + "px")), r(), a()
                }
                X && q.width(F.outerWidth() - vt + "px"), Q = q.outerHeight(), U = Q / H, X && (dt = Math.ceil(1 / Y * ht), dt > z.horizontalDragMaxWidth ? dt = z.horizontalDragMaxWidth : dt < z.horizontalDragMinWidth && (dt = z.horizontalDragMinWidth), Z.width(dt + "px"), tt = ht - dt, y(et)), K && (st = Math.ceil(1 / U * rt), st > z.verticalDragMaxHeight ? st = z.verticalDragMaxHeight : st < z.verticalDragMinHeight && (st = z.verticalDragMinHeight), V.height(st + "px"), J = rt - st, m($))
            }

            function u(t, e, i, n) {
                var o, r = "before",
                    s = "after";
                "os" == e && (e = /Mac/.test(navigator.platform) ? "after" : "split"), e == r ? s = e : e == s && (r = e, o = i, i = n, n = o), t[r](i)[s](n)
            }

            function c(t, e, i) {
                return function() {
                    return h(t, e, this, i), this.blur(), !1
                }
            }

            function h(e, i, n, o) {
                n = t(n).addClass("jspActive");
                var r, s, a = !0,
                    l = function() {
                        0 !== e && wt.scrollByX(e * z.arrowButtonSpeed), 0 !== i && wt.scrollByY(i * z.arrowButtonSpeed), s = setTimeout(l, a ? z.initialDelay : z.arrowRepeatFreq), a = !1
                    };
                l(), r = o ? "mouseout.jsp" : "mouseup.jsp", o = o || t("html"), o.bind(r, function() {
                    n.removeClass("jspActive"), s && clearTimeout(s), s = null, o.unbind(r)
                })
            }

            function d() {
                p(), K && nt.bind("mousedown.jsp", function(e) {
                    if (void 0 === e.originalTarget || e.originalTarget == e.currentTarget) {
                        var i, n = t(this),
                            o = n.offset(),
                            r = e.pageY - o.top - $,
                            s = !0,
                            a = function() {
                                var t = n.offset(),
                                    o = e.pageY - t.top - st / 2,
                                    u = H * z.scrollPagePercent,
                                    c = J * u / (Q - H);
                                if (0 > r) $ - c > o ? wt.scrollByY(-u) : g(o);
                                else {
                                    if (!(r > 0)) return void l();
                                    o > $ + c ? wt.scrollByY(u) : g(o)
                                }
                                i = setTimeout(a, s ? z.initialDelay : z.trackClickRepeatFreq), s = !1
                            },
                            l = function() {
                                i && clearTimeout(i), i = null, t(document).unbind("mouseup.jsp", l)
                            };
                        return a(), t(document).bind("mouseup.jsp", l), !1
                    }
                }), X && ct.bind("mousedown.jsp", function(e) {
                    if (void 0 === e.originalTarget || e.originalTarget == e.currentTarget) {
                        var i, n = t(this),
                            o = n.offset(),
                            r = e.pageX - o.left - et,
                            s = !0,
                            a = function() {
                                var t = n.offset(),
                                    o = e.pageX - t.left - dt / 2,
                                    u = W * z.scrollPagePercent,
                                    c = tt * u / (G - W);
                                if (0 > r) et - c > o ? wt.scrollByX(-u) : v(o);
                                else {
                                    if (!(r > 0)) return void l();
                                    o > et + c ? wt.scrollByX(u) : v(o)
                                }
                                i = setTimeout(a, s ? z.initialDelay : z.trackClickRepeatFreq), s = !1
                            },
                            l = function() {
                                i && clearTimeout(i), i = null, t(document).unbind("mouseup.jsp", l)
                            };
                        return a(), t(document).bind("mouseup.jsp", l), !1
                    }
                })
            }

            function p() {
                ct && ct.unbind("mousedown.jsp"), nt && nt.unbind("mousedown.jsp")
            }

            function f() {
                t("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), V && V.removeClass("jspActive"), Z && Z.removeClass("jspActive")
            }

            function g(i, n) {
                if (K) {
                    0 > i ? i = 0 : i > J && (i = J);
                    var o = new t.Event("jsp-will-scroll-y");
                    if (e.trigger(o, [i]), !o.isDefaultPrevented()) {
                        var r = i || 0,
                            s = 0 === r,
                            a = r == J,
                            l = i / J,
                            u = -l * (Q - H);
                        void 0 === n && (n = z.animateScroll), n ? wt.animate(V, "top", i, m, function() {
                                e.trigger("jsp-user-scroll-y", [-u, s, a])
                            }) : (V.css("top", i), m(i), e.trigger("jsp-user-scroll-y", [-u, s, a]))
                    }
                }
            }

            function m(t) {
                void 0 === t && (t = V.position().top), F.scrollTop(0), $ = t || 0;
                var i = 0 === $,
                    n = $ == J,
                    o = t / J,
                    r = -o * (Q - H);
                (bt != i || Ct != n) && (bt = i, Ct = n, e.trigger("jsp-arrow-change", [bt, Ct, xt, Tt])), w(i, n), q.css("top", r), e.trigger("jsp-scroll-y", [-r, i, n]).trigger("scroll")
            }

            function v(i, n) {
                if (X) {
                    0 > i ? i = 0 : i > tt && (i = tt);
                    var o = new t.Event("jsp-will-scroll-x");
                    if (e.trigger(o, [i]), !o.isDefaultPrevented()) {
                        var r = i || 0,
                            s = 0 === r,
                            a = r == tt,
                            l = i / tt,
                            u = -l * (G - W);
                        void 0 === n && (n = z.animateScroll), n ? wt.animate(Z, "left", i, y, function() {
                                e.trigger("jsp-user-scroll-x", [-u, s, a])
                            }) : (Z.css("left", i), y(i), e.trigger("jsp-user-scroll-x", [-u, s, a]))
                    }
                }
            }

            function y(t) {
                void 0 === t && (t = Z.position().left), F.scrollTop(0), et = t || 0;
                var i = 0 === et,
                    n = et == tt,
                    o = t / tt,
                    r = -o * (G - W);
                (xt != i || Tt != n) && (xt = i, Tt = n, e.trigger("jsp-arrow-change", [bt, Ct, xt, Tt])), b(i, n), q.css("left", r), e.trigger("jsp-scroll-x", [-r, i, n]).trigger("scroll")
            }

            function w(t, e) {
                z.showArrows && (at[t ? "addClass" : "removeClass"]("jspDisabled"), lt[e ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function b(t, e) {
                z.showArrows && (pt[t ? "addClass" : "removeClass"]("jspDisabled"), ft[e ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function x(t, e) {
                var i = t / (Q - H);
                g(i * J, e)
            }

            function C(t, e) {
                var i = t / (G - W);
                v(i * tt, e)
            }

            function T(e, i, n) {
                var o, r, s, a, l, u, c, h, d, p = 0,
                    f = 0;
                try {
                    o = t(e)
                } catch (g) {
                    return
                }
                for (r = o.outerHeight(), s = o.outerWidth(), F.scrollTop(0), F.scrollLeft(0); !o.is(".jspPane");)
                    if (p += o.position().top, f += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName)) return;
                a = A(), u = a + H, a > p || i ? h = p - z.horizontalGutter : p + r > u && (h = p - H + r + z.horizontalGutter), isNaN(h) || x(h, n), l = E(), c = l + W, l > f || i ? d = f - z.horizontalGutter : f + s > c && (d = f - W + s + z.horizontalGutter), isNaN(d) || C(d, n)
            }

            function E() {
                return -q.position().left
            }

            function A() {
                return -q.position().top
            }

            function S() {
                var t = Q - H;
                return t > 20 && t - A() < 10
            }

            function k() {
                var t = G - W;
                return t > 20 && t - E() < 10
            }

            function _() {
                F.unbind(At).bind(At, function(t, e, i, n) {
                    et || (et = 0), $ || ($ = 0);
                    var o = et,
                        r = $,
                        s = t.deltaFactor || z.mouseWheelSpeed;
                    return wt.scrollBy(i * s, -n * s, !1), o == et && r == $
                })
            }

            function j() {
                F.unbind(At)
            }

            function I() {
                return !1
            }

            function D() {
                q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(t) {
                    T(t.target, !1)
                })
            }

            function L() {
                q.find(":input,a").unbind("focus.jsp")
            }

            function B() {
                function i() {
                    var t = et,
                        e = $;
                    switch (n) {
                        case 40:
                            wt.scrollByY(z.keyboardSpeed, !1);
                            break;
                        case 38:
                            wt.scrollByY(-z.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            wt.scrollByY(H * z.scrollPagePercent, !1);
                            break;
                        case 33:
                            wt.scrollByY(-H * z.scrollPagePercent, !1);
                            break;
                        case 39:
                            wt.scrollByX(z.keyboardSpeed, !1);
                            break;
                        case 37:
                            wt.scrollByX(-z.keyboardSpeed, !1)
                    }
                    return o = t != et || e != $
                }
                var n, o, r = [];
                X && r.push(ut[0]), K && r.push(it[0]), q.bind("focus.jsp", function() {
                    e.focus()
                }), e.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(e) {
                    if (e.target === this || r.length && t(e.target).closest(r).length) {
                        var s = et,
                            a = $;
                        switch (e.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                n = e.keyCode, i();
                                break;
                            case 35:
                                x(Q - H), n = null;
                                break;
                            case 36:
                                x(0), n = null
                        }
                        return o = e.keyCode == n && s != et || a != $, !o
                    }
                }).bind("keypress.jsp", function(e) {
                    return e.keyCode == n && i(), e.target === this || r.length && t(e.target).closest(r).length ? !o : void 0
                }), z.hideFocus ? (e.css("outline", "none"), "hideFocus" in F[0] && e.attr("hideFocus", !0)) : (e.css("outline", ""), "hideFocus" in F[0] && e.attr("hideFocus", !1))
            }

            function O() {
                e.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), q.unbind(".jsp")
            }

            function P() {
                if (location.hash && location.hash.length > 1) {
                    var e, i, n = escape(location.hash.substr(1));
                    try {
                        e = t("#" + n + ', a[name="' + n + '"]')
                    } catch (o) {
                        return
                    }
                    e.length && q.find(n) && (0 === F.scrollTop() ? i = setInterval(function() {
                            F.scrollTop() > 0 && (T(e, !0), t(document).scrollTop(F.position().top), clearInterval(i))
                        }, 50) : (T(e, !0), t(document).scrollTop(F.position().top)))
                }
            }

            function M() {
                t(document.body).data("jspHijack") || (t(document.body).data("jspHijack", !0), t(document.body).delegate('a[href*="#"]', "click", function(e) {
                    var i, n, o, r, s, a, l = this.href.substr(0, this.href.indexOf("#")),
                        u = location.href;
                    if (-1 !== location.href.indexOf("#") && (u = location.href.substr(0, location.href.indexOf("#"))), l === u) {
                        i = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            n = t("#" + i + ', a[name="' + i + '"]')
                        } catch (c) {
                            return
                        }
                        n.length && (o = n.closest(".jspScrollable"), r = o.data("jsp"), r.scrollToElement(n, !0), o[0].scrollIntoView && (s = t(window).scrollTop(), a = n.offset().top, (s > a || a > s + t(window).height()) && o[0].scrollIntoView()), e.preventDefault())
                    }
                }))
            }

            function N() {
                var t, e, i, n, o, r = !1;
                F.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(s) {
                    var a = s.originalEvent.touches[0];
                    t = E(), e = A(), i = a.pageX, n = a.pageY, o = !1, r = !0
                }).bind("touchmove.jsp", function(s) {
                    if (r) {
                        var a = s.originalEvent.touches[0],
                            l = et,
                            u = $;
                        return wt.scrollTo(t + i - a.pageX, e + n - a.pageY), o = o || Math.abs(i - a.pageX) > 5 || Math.abs(n - a.pageY) > 5, l == et && u == $
                    }
                }).bind("touchend.jsp", function() {
                    r = !1
                }).bind("click.jsp-touchclick", function() {
                    return o ? (o = !1, !1) : void 0
                })
            }

            function R() {
                var t = A(),
                    i = E();
                e.removeClass("jspScrollable").unbind(".jsp"), q.unbind(".jsp"), e.replaceWith(Et.append(q.children())), Et.scrollTop(t), Et.scrollLeft(i), gt && clearInterval(gt)
            }
            var z, q, W, H, F, G, Q, Y, U, K, X, V, J, $, Z, tt, et, it, nt, ot, rt, st, at, lt, ut, ct, ht, dt, pt, ft, gt, mt, vt, yt, wt = this,
                bt = !0,
                xt = !0,
                Ct = !1,
                Tt = !1,
                Et = e.clone(!1, !1).empty(),
                At = t.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === e.css("box-sizing") ? (mt = 0, vt = 0) : (mt = e.css("paddingTop") + " " + e.css("paddingRight") + " " + e.css("paddingBottom") + " " + e.css("paddingLeft"), vt = (parseInt(e.css("paddingLeft"), 10) || 0) + (parseInt(e.css("paddingRight"), 10) || 0)), t.extend(wt, {
                reinitialise: function(e) {
                    e = t.extend({}, z, e), n(e)
                },
                scrollToElement: function(t, e, i) {
                    T(t, e, i)
                },
                scrollTo: function(t, e, i) {
                    C(t, i), x(e, i)
                },
                scrollToX: function(t, e) {
                    C(t, e)
                },
                scrollToY: function(t, e) {
                    x(t, e)
                },
                scrollToPercentX: function(t, e) {
                    C(t * (G - W), e)
                },
                scrollToPercentY: function(t, e) {
                    x(t * (Q - H), e)
                },
                scrollBy: function(t, e, i) {
                    wt.scrollByX(t, i), wt.scrollByY(e, i)
                },
                scrollByX: function(t, e) {
                    var i = E() + Math[0 > t ? "floor" : "ceil"](t),
                        n = i / (G - W);
                    v(n * tt, e)
                },
                scrollByY: function(t, e) {
                    var i = A() + Math[0 > t ? "floor" : "ceil"](t),
                        n = i / (Q - H);
                    g(n * J, e)
                },
                positionDragX: function(t, e) {
                    v(t, e)
                },
                positionDragY: function(t, e) {
                    g(t, e)
                },
                animate: function(t, e, i, n, o) {
                    var r = {};
                    r[e] = i, t.animate(r, {
                        duration: z.animateDuration,
                        easing: z.animateEase,
                        queue: !1,
                        step: n,
                        complete: o
                    })
                },
                getContentPositionX: function() {
                    return E()
                },
                getContentPositionY: function() {
                    return A()
                },
                getContentWidth: function() {
                    return G
                },
                getContentHeight: function() {
                    return Q
                },
                getPercentScrolledX: function() {
                    return E() / (G - W)
                },
                getPercentScrolledY: function() {
                    return A() / (Q - H)
                },
                getIsScrollableH: function() {
                    return X
                },
                getIsScrollableV: function() {
                    return K
                },
                getContentPane: function() {
                    return q
                },
                scrollToBottom: function(t) {
                    g(J, t)
                },
                hijackInternalLinks: t.noop,
                destroy: function() {
                    R()
                }
            }), n(i)
        }
        return e = t.extend({}, t.fn.jScrollPane.defaults, e), t.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            e[this] = e[this] || e.speed
        }), this.each(function() {
            var n = t(this),
                o = n.data("jsp");
            o ? o.reinitialise(e) : (t("script", n).filter('[type="text/javascript"],:not([type])').remove(), o = new i(n, e), n.data("jsp", o))
        })
    }, t.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function($) {
        function t(t) {
            var n = t || window.event,
                o = r.call(arguments, 1),
                l = 0,
                c = 0,
                h = 0,
                d = 0,
                p = 0,
                f = 0;
            if (t = $.event.fix(n), t.type = "mousewheel", "detail" in n && (h = -1 * n.detail), "wheelDelta" in n && (h = n.wheelDelta), "wheelDeltaY" in n && (h = n.wheelDeltaY), "wheelDeltaX" in n && (c = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (c = -1 * h, h = 0), l = 0 === h ? c : h, "deltaY" in n && (h = -1 * n.deltaY, l = h), "deltaX" in n && (c = n.deltaX, 0 === h && (l = -1 * c)), 0 !== h || 0 !== c) {
                if (1 === n.deltaMode) {
                    var g = $.data(this, "mousewheel-line-height");
                    l *= g, h *= g, c *= g
                } else if (2 === n.deltaMode) {
                    var m = $.data(this, "mousewheel-page-height");
                    l *= m, h *= m, c *= m
                }
                if (d = Math.max(Math.abs(h), Math.abs(c)), (!a || a > d) && (a = d, i(n, d) && (a /= 40)), i(n, d) && (l /= 40, c /= 40, h /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / a), c = Math[c >= 1 ? "floor" : "ceil"](c / a), h = Math[h >= 1 ? "floor" : "ceil"](h / a), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var v = this.getBoundingClientRect();
                    p = t.clientX - v.left, f = t.clientY - v.top
                }
                return t.deltaX = c, t.deltaY = h, t.deltaFactor = a, t.offsetX = p, t.offsetY = f, t.deltaMode = 0, o.unshift(t, l, c, h), s && clearTimeout(s), s = setTimeout(e, 200), ($.event.dispatch || $.event.handle).apply(this, o)
            }
        }

        function e() {
            a = null
        }

        function i(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            r = Array.prototype.slice,
            s, a;
        if ($.event.fixHooks)
            for (var l = n.length; l;) $.event.fixHooks[n[--l]] = $.event.mouseHooks;
        var u = $.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var e = o.length; e;) this.addEventListener(o[--e], t, !1);
                else this.onmousewheel = t;
                $.data(this, "mousewheel-line-height", u.getLineHeight(this)), $.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = o.length; e;) this.removeEventListener(o[--e], t, !1);
                else this.onmousewheel = null;
                $.removeData(this, "mousewheel-line-height"), $.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var e = $(t),
                    i = e["offsetParent" in $.fn ? "offsetParent" : "parent"]();
                return i.length || (i = $("body")), parseInt(i.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return $(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        $.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function($) {
        function t() {
            this === e.elem && (e.pos = [-260, -260], e.elem = !1, i = 3)
        }
        var e = {
                pos: [-260, -260]
            },
            i = 3,
            n = document,
            o = n.documentElement,
            r = n.body,
            s, a;
        $.event.special.mwheelIntent = {
            setup: function() {
                var e = $(this).bind("mousewheel", $.event.special.mwheelIntent.handler);
                return this !== n && this !== o && this !== r && e.bind("mouseleave", t), e = null, !0
            },
            teardown: function() {
                return $(this).unbind("mousewheel", $.event.special.mwheelIntent.handler).unbind("mouseleave", t), !0
            },
            handler: function(t, n) {
                var o = [t.clientX, t.clientY];
                return this === e.elem || Math.abs(e.pos[0] - o[0]) > i || Math.abs(e.pos[1] - o[1]) > i ? (e.elem = this, e.pos = o, i = 250, clearTimeout(a), a = setTimeout(function() {
                        i = 10
                    }, 200), clearTimeout(s), s = setTimeout(function() {
                        i = 3
                    }, 1500), t = $.extend({}, t, {
                        type: "mwheelIntent"
                    }), ($.event.dispatch || $.event.handle).apply(this, arguments)) : void 0
            }
        }, $.fn.extend({
            mwheelIntent: function(t) {
                return t ? this.bind("mwheelIntent", t) : this.trigger("mwheelIntent")
            },
            unmwheelIntent: function(t) {
                return this.unbind("mwheelIntent", t)
            }
        }), $(function() {
            r = n.body, $(n).bind("mwheelIntent.mwheelIntentDefault", $.noop)
        })
    }(jQuery),
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin
     * @version 1.6.18
     *
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
    ! function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function($) {
        "use strict";

        function t(t) {
            return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = $.extend({}, $.fn.swipe.defaults, t), this.each(function() {
                var i = $(this),
                    n = i.data(k);
                n || (n = new e(this, t), i.data(k, n))
            })
        }

        function e(t, e) {
            function i(t) {
                if (!(ut() || $(t.target).closest(e.excludedElements, Qt).length > 0)) {
                    var i = t.originalEvent ? t.originalEvent : t;
                    if (!i.pointerType || "mouse" != i.pointerType || 0 != e.fallbackToMouseEvents) {
                        var n, o = i.touches,
                            r = o ? o[0] : i;
                        return Yt = b, o ? $t = o.length : e.preventDefaultEvents !== !1 && t.preventDefault(), Pt = 0, Mt = null, Nt = null, Ft = null, Rt = 0, zt = 0, qt = 0, Wt = 1, Ht = 0, Gt = mt(), at(), ht(0, r), !o || $t === e.fingers || e.fingers === y || H() ? (Kt = At(), 2 == $t && (ht(1, o[1]), zt = qt = wt(Ut[0].start, Ut[1].start)), (e.swipeStatus || e.pinchStatus) && (n = O(i, Yt))) : n = !1, n === !1 ? (Yt = T, O(i, Yt), n) : (e.hold && (ee = setTimeout($.proxy(function() {
                                Qt.trigger("hold", [i.target]), e.hold && (n = e.hold.call(Qt, i, i.target))
                            }, this), e.longTapThreshold)), ct(!0), null)
                    }
                }
            }

            function _(t) {
                var i = t.originalEvent ? t.originalEvent : t;
                if (Yt !== C && Yt !== T && !lt()) {
                    var n, o = i.touches,
                        r = o ? o[0] : i,
                        s = dt(r);
                    if (Xt = At(), o && ($t = o.length), e.hold && clearTimeout(ee), Yt = x, 2 == $t && (0 == zt ? (ht(1, o[1]), zt = qt = wt(Ut[0].start, Ut[1].start)) : (dt(o[1]), qt = wt(Ut[0].end, Ut[1].end), Ft = xt(Ut[0].end, Ut[1].end)), Wt = bt(zt, qt), Ht = Math.abs(zt - qt)), $t === e.fingers || e.fingers === y || !o || H()) {
                        if (Mt = Et(s.start, s.end), Nt = Et(s.last, s.end), q(t, Nt), Pt = Ct(s.start, s.end), Rt = yt(), ft(Mt, Pt), n = O(i, Yt), !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                            var a = !0;
                            if (e.triggerOnTouchLeave) {
                                var l = St(this);
                                a = kt(s.end, l)
                            }!e.triggerOnTouchEnd && a ? Yt = B(x) : e.triggerOnTouchLeave && !a && (Yt = B(C)), Yt != T && Yt != C || O(i, Yt)
                        }
                    } else Yt = T, O(i, Yt);
                    n === !1 && (Yt = T, O(i, Yt))
                }
            }

            function j(t) {
                var i = t.originalEvent ? t.originalEvent : t,
                    n = i.touches;
                if (n) {
                    if (n.length && !lt()) return st(i), !0;
                    if (n.length && lt()) return !0
                }
                return lt() && ($t = Jt), Xt = At(), Rt = yt(), N() || !M() ? (Yt = T, O(i, Yt)) : e.triggerOnTouchEnd || e.triggerOnTouchEnd === !1 && Yt === x ? (e.preventDefaultEvents !== !1 && t.preventDefault(), Yt = C, O(i, Yt)) : !e.triggerOnTouchEnd && X() ? (Yt = C, P(i, Yt, p)) : Yt === x && (Yt = T, O(i, Yt)), ct(!1), null
            }

            function I() {
                $t = 0, Xt = 0, Kt = 0, zt = 0, qt = 0, Wt = 1, at(), ct(!1)
            }

            function D(t) {
                var i = t.originalEvent ? t.originalEvent : t;
                e.triggerOnTouchLeave && (Yt = B(C), O(i, Yt))
            }

            function L() {
                Qt.unbind(It, i), Qt.unbind(Ot, I), Qt.unbind(Dt, _), Qt.unbind(Lt, j), Bt && Qt.unbind(Bt, D), ct(!1)
            }

            function B(t) {
                var i = t,
                    n = z(),
                    o = M(),
                    r = N();
                return !n || r ? i = T : !o || t != x || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !o && t == C && e.triggerOnTouchLeave && (i = T) : i = C, i
            }

            function O(t, e) {
                var i, n = t.touches;
                return (Y() || Q()) && (i = P(t, e, h)), (F() || H()) && i !== !1 && (i = P(t, e, d)), ot() && i !== !1 ? i = P(t, e, f) : rt() && i !== !1 ? i = P(t, e, g) : nt() && i !== !1 && (i = P(t, e, p)), e === T && I(t), e === C && (n ? n.length || I(t) : I(t)), i
            }

            function P(t, i, u) {
                var c;
                if (u == h) {
                    if (Qt.trigger("swipeStatus", [i, Mt || null, Pt || 0, Rt || 0, $t, Ut, Nt]), e.swipeStatus && (c = e.swipeStatus.call(Qt, t, i, Mt || null, Pt || 0, Rt || 0, $t, Ut, Nt), c === !1)) return !1;
                    if (i == C && G()) {
                        if (clearTimeout(te), clearTimeout(ee), Qt.trigger("swipe", [Mt, Pt, Rt, $t, Ut, Nt]), e.swipe && (c = e.swipe.call(Qt, t, Mt, Pt, Rt, $t, Ut, Nt), c === !1)) return !1;
                        switch (Mt) {
                            case n:
                                Qt.trigger("swipeLeft", [Mt, Pt, Rt, $t, Ut, Nt]), e.swipeLeft && (c = e.swipeLeft.call(Qt, t, Mt, Pt, Rt, $t, Ut, Nt));
                                break;
                            case o:
                                Qt.trigger("swipeRight", [Mt, Pt, Rt, $t, Ut, Nt]), e.swipeRight && (c = e.swipeRight.call(Qt, t, Mt, Pt, Rt, $t, Ut, Nt));
                                break;
                            case r:
                                Qt.trigger("swipeUp", [Mt, Pt, Rt, $t, Ut, Nt]), e.swipeUp && (c = e.swipeUp.call(Qt, t, Mt, Pt, Rt, $t, Ut, Nt));
                                break;
                            case s:
                                Qt.trigger("swipeDown", [Mt, Pt, Rt, $t, Ut, Nt]), e.swipeDown && (c = e.swipeDown.call(Qt, t, Mt, Pt, Rt, $t, Ut, Nt))
                        }
                    }
                }
                if (u == d) {
                    if (Qt.trigger("pinchStatus", [i, Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut]), e.pinchStatus && (c = e.pinchStatus.call(Qt, t, i, Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut), c === !1)) return !1;
                    if (i == C && W()) switch (Ft) {
                        case a:
                            Qt.trigger("pinchIn", [Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut]), e.pinchIn && (c = e.pinchIn.call(Qt, t, Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut));
                            break;
                        case l:
                            Qt.trigger("pinchOut", [Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut]), e.pinchOut && (c = e.pinchOut.call(Qt, t, Ft || null, Ht || 0, Rt || 0, $t, Wt, Ut))
                    }
                }
                return u == p ? i !== T && i !== C || (clearTimeout(te), clearTimeout(ee), V() && !tt() ? (Zt = At(), te = setTimeout($.proxy(function() {
                            Zt = null, Qt.trigger("tap", [t.target]), e.tap && (c = e.tap.call(Qt, t, t.target))
                        }, this), e.doubleTapThreshold)) : (Zt = null, Qt.trigger("tap", [t.target]), e.tap && (c = e.tap.call(Qt, t, t.target)))) : u == f ? i !== T && i !== C || (clearTimeout(te), clearTimeout(ee), Zt = null, Qt.trigger("doubletap", [t.target]), e.doubleTap && (c = e.doubleTap.call(Qt, t, t.target))) : u == g && (i !== T && i !== C || (clearTimeout(te), Zt = null, Qt.trigger("longtap", [t.target]), e.longTap && (c = e.longTap.call(Qt, t, t.target)))), c
            }

            function M() {
                var t = !0;
                return null !== e.threshold && (t = Pt >= e.threshold), t
            }

            function N() {
                var t = !1;
                return null !== e.cancelThreshold && null !== Mt && (t = gt(Mt) - Pt >= e.cancelThreshold), t
            }

            function R() {
                return null !== e.pinchThreshold ? Ht >= e.pinchThreshold : !0
            }

            function z() {
                var t;
                return t = e.maxTimeThreshold ? !(Rt >= e.maxTimeThreshold) : !0
            }

            function q(t, i) {
                if (e.preventDefaultEvents !== !1)
                    if (e.allowPageScroll === u) t.preventDefault();
                    else {
                        var a = e.allowPageScroll === c;
                        switch (i) {
                            case n:
                                (e.swipeLeft && a || !a && e.allowPageScroll != m) && t.preventDefault();
                                break;
                            case o:
                                (e.swipeRight && a || !a && e.allowPageScroll != m) && t.preventDefault();
                                break;
                            case r:
                                (e.swipeUp && a || !a && e.allowPageScroll != v) && t.preventDefault();
                                break;
                            case s:
                                (e.swipeDown && a || !a && e.allowPageScroll != v) && t.preventDefault();
                                break;
                            case u:
                        }
                    }
            }

            function W() {
                var t = U(),
                    e = K(),
                    i = R();
                return t && e && i
            }

            function H() {
                return !!(e.pinchStatus || e.pinchIn || e.pinchOut)
            }

            function F() {
                return !(!W() || !H())
            }

            function G() {
                var t = z(),
                    e = M(),
                    i = U(),
                    n = K(),
                    o = N(),
                    r = !o && n && i && e && t;
                return r
            }

            function Q() {
                return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown)
            }

            function Y() {
                return !(!G() || !Q())
            }

            function U() {
                return $t === e.fingers || e.fingers === y || !E
            }

            function K() {
                return 0 !== Ut[0].end.x
            }

            function X() {
                return !!e.tap
            }

            function V() {
                return !!e.doubleTap
            }

            function J() {
                return !!e.longTap
            }

            function Z() {
                if (null == Zt) return !1;
                var t = At();
                return V() && t - Zt <= e.doubleTapThreshold
            }

            function tt() {
                return Z()
            }

            function et() {
                return (1 === $t || !E) && (isNaN(Pt) || Pt < e.threshold)
            }

            function it() {
                return Rt > e.longTapThreshold && w > Pt
            }

            function nt() {
                return !(!et() || !X())
            }

            function ot() {
                return !(!Z() || !V())
            }

            function rt() {
                return !(!it() || !J())
            }

            function st(t) {
                Vt = At(), Jt = t.touches.length + 1
            }

            function at() {
                Vt = 0, Jt = 0
            }

            function lt() {
                var t = !1;
                if (Vt) {
                    var i = At() - Vt;
                    i <= e.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function ut() {
                return !(Qt.data(k + "_intouch") !== !0)
            }

            function ct(t) {
                Qt && (t === !0 ? (Qt.bind(Dt, _), Qt.bind(Lt, j), Bt && Qt.bind(Bt, D)) : (Qt.unbind(Dt, _, !1), Qt.unbind(Lt, j, !1), Bt && Qt.unbind(Bt, D, !1)), Qt.data(k + "_intouch", t === !0))
            }

            function ht(t, e) {
                var i = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, Ut[t] = i, i
            }

            function dt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = pt(e);
                return null === i && (i = ht(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function pt(t) {
                return Ut[t] || null
            }

            function ft(t, e) {
                t != u && (e = Math.max(e, gt(t)), Gt[t].distance = e)
            }

            function gt(t) {
                return Gt[t] ? Gt[t].distance : void 0
            }

            function mt() {
                var t = {};
                return t[n] = vt(n), t[o] = vt(o), t[r] = vt(r), t[s] = vt(s), t
            }

            function vt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function yt() {
                return Xt - Kt
            }

            function wt(t, e) {
                var i = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }

            function bt(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }

            function xt() {
                return 1 > Wt ? l : a
            }

            function Ct(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function Tt(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    o = Math.atan2(n, i),
                    r = Math.round(180 * o / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function Et(t, e) {
                if (_t(t, e)) return u;
                var i = Tt(t, e);
                return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? o : i > 45 && 135 > i ? s : r
            }

            function At() {
                var t = new Date;
                return t.getTime()
            }

            function St(t) {
                t = $(t);
                var e = t.offset(),
                    i = {
                        left: e.left,
                        right: e.left + t.outerWidth(),
                        top: e.top,
                        bottom: e.top + t.outerHeight()
                    };
                return i
            }

            function kt(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }

            function _t(t, e) {
                return t.x == e.x && t.y == e.y
            }
            var e = $.extend({}, e),
                jt = E || S || !e.fallbackToMouseEvents,
                It = jt ? S ? A ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Dt = jt ? S ? A ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Lt = jt ? S ? A ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Bt = jt ? S ? "mouseleave" : null : "mouseleave",
                Ot = S ? A ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Pt = 0,
                Mt = null,
                Nt = null,
                Rt = 0,
                zt = 0,
                qt = 0,
                Wt = 1,
                Ht = 0,
                Ft = 0,
                Gt = null,
                Qt = $(t),
                Yt = "start",
                $t = 0,
                Ut = {},
                Kt = 0,
                Xt = 0,
                Vt = 0,
                Jt = 0,
                Zt = 0,
                te = null,
                ee = null;
            try {
                Qt.bind(It, i), Qt.bind(Ot, I)
            } catch (ie) {
                $.error("events not supported " + It + "," + Ot + " on jQuery.swipe")
            }
            this.enable = function() {
                return this.disable(), Qt.bind(It, i), Qt.bind(Ot, I), Qt
            }, this.disable = function() {
                return L(), Qt
            }, this.destroy = function() {
                L(), Qt.data(k, null), Qt = null
            }, this.option = function(t, i) {
                if ("object" == typeof t) e = $.extend(e, t);
                else if (void 0 !== e[t]) {
                    if (void 0 === i) return e[t];
                    e[t] = i
                } else {
                    if (!t) return e;
                    $.error("Option " + t + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var i = "1.6.18",
            n = "left",
            o = "right",
            r = "up",
            s = "down",
            a = "in",
            l = "out",
            u = "none",
            c = "auto",
            h = "swipe",
            d = "pinch",
            p = "tap",
            f = "doubletap",
            g = "longtap",
            m = "horizontal",
            v = "vertical",
            y = "all",
            w = 10,
            b = "start",
            x = "move",
            C = "end",
            T = "cancel",
            E = "ontouchstart" in window,
            A = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !E,
            S = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !E,
            k = "TouchSwipe",
            _ = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: ".noSwipe",
                preventDefaultEvents: !0
            };
        $.fn.swipe = function(e) {
            var i = $(this),
                n = i.data(k);
            if (n && "string" == typeof e) {
                if (n[e]) return n[e].apply(n, Array.prototype.slice.call(arguments, 1));
                $.error("Method " + e + " does not exist on jQuery.swipe")
            } else if (n && "object" == typeof e) n.option.apply(n, arguments);
            else if (!(n || "object" != typeof e && e)) return t.apply(this, arguments);
            return i
        }, $.fn.swipe.version = i, $.fn.swipe.defaults = _, $.fn.swipe.phases = {
            PHASE_START: b,
            PHASE_MOVE: x,
            PHASE_END: C,
            PHASE_CANCEL: T
        }, $.fn.swipe.directions = {
            LEFT: n,
            RIGHT: o,
            UP: r,
            DOWN: s,
            IN: a,
            OUT: l
        }, $.fn.swipe.pageScroll = {
            NONE: u,
            HORIZONTAL: m,
            VERTICAL: v,
            AUTO: c
        }, $.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: y
        }
    }), ! function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? e(t, require("jquery")) : e(t, t.jQuery || t.Zepto)
}(this, function(t, e) {
    "use strict";

    function i(t) {
        if (C && "none" === t.css("animation-name") && "none" === t.css("-webkit-animation-name") && "none" === t.css("-moz-animation-name") && "none" === t.css("-o-animation-name") && "none" === t.css("-ms-animation-name")) return 0;
        var e, i, n, o, r = t.css("animation-duration") || t.css("-webkit-animation-duration") || t.css("-moz-animation-duration") || t.css("-o-animation-duration") || t.css("-ms-animation-duration") || "0s",
            s = t.css("animation-delay") || t.css("-webkit-animation-delay") || t.css("-moz-animation-delay") || t.css("-o-animation-delay") || t.css("-ms-animation-delay") || "0s",
            a = t.css("animation-iteration-count") || t.css("-webkit-animation-iteration-count") || t.css("-moz-animation-iteration-count") || t.css("-o-animation-iteration-count") || t.css("-ms-animation-iteration-count") || "1";
        for (r = r.split(", "), s = s.split(", "), a = a.split(", "), o = 0, i = r.length, e = Number.NEGATIVE_INFINITY; i > o; o++) n = parseFloat(r[o]) * parseInt(a[o], 10) + parseFloat(s[o]), n > e && (e = n);
        return e
    }

    function n() {
        if (e(document.body).height() <= e(window).height()) return 0;
        var t, i, n = document.createElement("div"),
            o = document.createElement("div");
        return n.style.visibility = "hidden", n.style.width = "100px", document.body.appendChild(n), t = n.offsetWidth, n.style.overflow = "scroll", o.style.width = "100%", n.appendChild(o), i = o.offsetWidth, n.parentNode.removeChild(n), t - i
    }

    function o() {
        if (!T) {
            var t, i, o = e("html"),
                r = c("is-locked");
            o.hasClass(r) || (i = e(document.body), t = parseInt(i.css("padding-right"), 10) + n(), i.css("padding-right", t + "px"), o.addClass(r))
        }
    }

    function r() {
        if (!T) {
            var t, i, o = e("html"),
                r = c("is-locked");
            o.hasClass(r) && (i = e(document.body), t = parseInt(i.css("padding-right"), 10) - n(), i.css("padding-right", t + "px"), o.removeClass(r))
        }
    }

    function s(t, e, i, n) {
        var o = c("is", e),
            r = [c("is", b.CLOSING), c("is", b.OPENING), c("is", b.CLOSED), c("is", b.OPENED)].join(" ");
        t.$bg.removeClass(r).addClass(o), t.$overlay.removeClass(r).addClass(o), t.$wrapper.removeClass(r).addClass(o), t.$modal.removeClass(r).addClass(o), t.state = e, !i && t.$modal.trigger({
            type: e,
            reason: n
        }, [{
            reason: n
        }])
    }

    function a(t, n, o) {
        var r = 0,
            s = function(t) {
                t.target === this && r++
            },
            a = function(t) {
                t.target === this && 0 === --r && (e.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
                    o[e].off(v + " " + y)
                }), n())
            };
        e.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
            o[e].on(v, s).on(y, a)
        }), t(), 0 === i(o.$bg) && 0 === i(o.$overlay) && 0 === i(o.$wrapper) && 0 === i(o.$modal) && (e.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
            o[e].off(v + " " + y)
        }), n())
    }

    function l(t) {
        t.state !== b.CLOSED && (e.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, i) {
            t[i].off(v + " " + y)
        }), t.$bg.removeClass(t.settings.modifier), t.$overlay.removeClass(t.settings.modifier).hide(), t.$wrapper.hide(), r(), s(t, b.CLOSED, !0))
    }

    function u(t) {
        var e, i, n, o, r = {};
        for (t = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), e = t.split(","), o = 0, i = e.length; i > o; o++) e[o] = e[o].split(":"), n = e[o][1], ("string" == typeof n || n instanceof String) && (n = "true" === n || "false" !== n && n), ("string" == typeof n || n instanceof String) && (n = isNaN(n) ? n : +n), r[e[o][0]] = n;
        return r
    }

    function c() {
        for (var t = m, e = 0; e < arguments.length; ++e) t += "-" + arguments[e];
        return t
    }

    function h() {
        var t, i, n = location.hash.replace("#", "");
        if (n) {
            try {
                i = e('[data-remodal-id="' + n + '"]')
            } catch (o) {}
            i && i.length && (t = e[g].lookup[i.data(g)], t && t.settings.hashTracking && t.open())
        } else p && p.state === b.OPENED && p.settings.hashTracking && p.close()
    }

    function d(t, i) {
        var n = e(document.body),
            o = n,
            r = this;
        r.settings = e.extend({}, w, i), r.index = e[g].lookup.push(r) - 1, r.state = b.CLOSED, r.$overlay = e("." + c("overlay")), null !== r.settings.appendTo && r.settings.appendTo.length && (o = e(r.settings.appendTo)), r.$overlay.length || (r.$overlay = e("<div>").addClass(c("overlay") + " " + c("is", b.CLOSED)).hide(), o.append(r.$overlay)), r.$bg = e("." + c("bg")).addClass(c("is", b.CLOSED)), r.$modal = t.addClass(m + " " + c("is-initialized") + " " + r.settings.modifier + " " + c("is", b.CLOSED)).attr("tabindex", "-1"), r.$wrapper = e("<div>").addClass(c("wrapper") + " " + r.settings.modifier + " " + c("is", b.CLOSED)).hide().append(r.$modal), o.append(r.$wrapper), r.$wrapper.on("click." + m, '[data-remodal-action="close"]', function(t) {
            t.preventDefault(), r.close()
        }), r.$wrapper.on("click." + m, '[data-remodal-action="cancel"]', function(t) {
            t.preventDefault(), r.$modal.trigger(x.CANCELLATION), r.settings.closeOnCancel && r.close(x.CANCELLATION)
        }), r.$wrapper.on("click." + m, '[data-remodal-action="confirm"]', function(t) {
            t.preventDefault(), r.$modal.trigger(x.CONFIRMATION), r.settings.closeOnConfirm && r.close(x.CONFIRMATION)
        }), r.$wrapper.on("click." + m, function(t) {
            var i = e(t.target);
            i.hasClass(c("wrapper")) && r.settings.closeOnOutsideClick && r.close()
        })
    }
    var p, f, g = "remodal",
        m = t.REMODAL_GLOBALS && t.REMODAL_GLOBALS.NAMESPACE || g,
        v = e.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(t) {
            return t + "." + m
        }).join(" "),
        y = e.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(t) {
            return t + "." + m
        }).join(" "),
        w = e.extend({
            hashTracking: !0,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            closeOnEscape: !0,
            closeOnOutsideClick: !0,
            modifier: "",
            appendTo: null
        }, t.REMODAL_GLOBALS && t.REMODAL_GLOBALS.DEFAULTS),
        b = {
            CLOSING: "closing",
            CLOSED: "closed",
            OPENING: "opening",
            OPENED: "opened"
        },
        x = {
            CONFIRMATION: "confirmation",
            CANCELLATION: "cancellation"
        },
        C = function() {
            var t = document.createElement("div").style;
            return void 0 !== t.animationName || void 0 !== t.WebkitAnimationName || void 0 !== t.MozAnimationName || void 0 !== t.msAnimationName || void 0 !== t.OAnimationName
        }(),
        T = /iPad|iPhone|iPod/.test(navigator.platform);
    d.prototype.open = function() {
        var t, i = this;
        i.state !== b.OPENING && i.state !== b.CLOSING && (t = i.$modal.attr("data-remodal-id"), t && i.settings.hashTracking && (f = e(window).scrollTop(), location.hash = t), p && p !== i && l(p), p = i, o(), i.$bg.addClass(i.settings.modifier), i.$overlay.addClass(i.settings.modifier).show(), i.$wrapper.show().scrollTop(0), i.$modal.focus(), a(function() {
            s(i, b.OPENING)
        }, function() {
            s(i, b.OPENED)
        }, i))
    }, d.prototype.close = function(t) {
        var i = this;
        i.state !== b.OPENING && i.state !== b.CLOSING && (i.settings.hashTracking && i.$modal.attr("data-remodal-id") === location.hash.substr(1) && (location.hash = "", e(window).scrollTop(f)), a(function() {
            s(i, b.CLOSING, !1, t)
        }, function() {
            i.$bg.removeClass(i.settings.modifier), i.$overlay.removeClass(i.settings.modifier).hide(), i.$wrapper.hide(), r(), s(i, b.CLOSED, !1, t)
        }, i))
    }, d.prototype.getState = function() {
        return this.state
    }, d.prototype.destroy = function() {
        var t, i = e[g].lookup;
        l(this), this.$wrapper.remove(), delete i[this.index], t = e.grep(i, function(t) {
            return !!t
        }).length, 0 === t && (this.$overlay.remove(), this.$bg.removeClass(c("is", b.CLOSING) + " " + c("is", b.OPENING) + " " + c("is", b.CLOSED) + " " + c("is", b.OPENED)))
    }, e[g] = {
        lookup: []
    }, e.fn[g] = function(t) {
        var i, n;
        return this.each(function(o, r) {
            n = e(r), null == n.data(g) ? (i = new d(n, t), n.data(g, i.index), i.settings.hashTracking && n.attr("data-remodal-id") === location.hash.substr(1) && i.open()) : i = e[g].lookup[n.data(g)]
        }), i
    }, e(document).ready(function() {
        e(document).on("click", "[data-remodal-target]", function(t) {
            t.preventDefault();
            var i = t.currentTarget,
                n = i.getAttribute("data-remodal-target"),
                o = e('[data-remodal-id="' + n + '"]');
            e[g].lookup[o.data(g)].open()
        }), e(document).find("." + m).each(function(t, i) {
            var n = e(i),
                o = n.data("remodal-options");
            o ? ("string" == typeof o || o instanceof String) && (o = u(o)) : o = {}, n[g](o)
        }), e(document).on("keydown." + m, function(t) {
            p && p.settings.closeOnEscape && p.state === b.OPENED && 27 === t.keyCode && p.close()
        }), e(window).on("hashchange." + m, h)
    })
}), $(document).ready(function() {
    var t = $("[data-remodal-id=welcome]").remodal();
    $(".open-welcome").on("click", function() {
        t.open()
    }), $(".nav-desktop .search-icon").on("mouseenter", function() {
        $(".search").addClass("open").find("input").focus()
    }), $(".navigation").on("mouseleave", function() {
        $(".search").removeClass("open").find("input").blur()
    }), $(".bars-menu").on("click", function() {
        $("nav.nav-mobile ul").toggleClass("mobile-open"), $(this).find(".img-bars").toggle(), $(this).find(".img-close").toggle(), $(".search").removeClass("open").find("input").blur()
    }), $(".nav-mobile .search-icon").on("click", function() {
        $(".search").toggleClass("open").find("input").focus(), $("nav.nav-mobile ul").removeClass("mobile-open"), $(".bars-menu .img-bars").show(), $(".bars-menu .img-close").hide()
    }), $(window).on("scroll", function() {
        $(".search").removeClass("open").find("input").blur(), $("nav.nav-mobile ul").removeClass("mobile-open"), $(".bars-menu .img-bars").show(), $(".bars-menu .img-close").hide()
    });
    var e = $(".slider-homepage").owlCarousel({
        items: 1,
        loop: !0,
        margin: 0,
        autoHeight: !1,
        autoHeightClass: "owl-height",
        nav: !0,
        navText: ['<div id="prev_1"></div>', '<div id="next_1"></div>'],
        navContainer: "carousel-nav"
    });
    $("#prev_1").on("click", function() {
        e.trigger("prev.owl.carousel", [500])
    }), $("#next_1").on("click", function() {
        e.trigger("next.owl.carousel", [500])
    });
    var i = $(".carousel-bozzetti").owlCarousel({
        center: !0,
        loop: !1,
        margin: 10,
        items: 2,
        responsive: {
            600: {
                items: 4
            }
        },
        nav: !0,
        navText: ['<div id="prev_2"></div>', '<div id="next_2"></div>'],
        navContainer: "carousel-nav"
    });
    $("#prev_2").on("click", function() {
        i.trigger("prev.owl.carousel", [500])
    }), $("#next_2").on("click", function() {
        i.trigger("next.owl.carousel", [500])
    }), $(".carousel-item a").colorbox({
        rel: "gallery",
        transition: "fade",
        current: "",
        previous: '<div id="prev_lightbox" aria-hidden="true"></div>',
        next: '<div id="next_lightbox" aria-hidden="true"></div>',
        maxWidth: "90%",
        maxHeight: "90%",
        fixed: !0,
        onLoad: function() {
            $("#cboxClose").addClass("btn btn-sm btn-link").css("color", "white")
        }
    }), $("a.js-bozzetto-image").colorbox({
        rel: "bozzetto",
        transition: "fade",
        current: "",
        previous: '<div id="prev_lightbox" aria-hidden="true"></div>',
        next: '<div id="next_lightbox" aria-hidden="true"></div>',
        maxWidth: "90%",
        maxHeight: "90%",
        fixed: !0,
        onLoad: function() {
            $("#cboxClose").addClass("btn btn-sm btn-link").css("color", "white")
        }
    }), $("a.js-bozzetto-video").colorbox({
        rel: "bozzetto",
        transition: "fade",
        current: "",
        previous: '<div id="prev_lightbox" aria-hidden="true"></div>',
        next: '<div id="next_lightbox" aria-hidden="true"></div>',
        maxWidth: "90%",
        maxHeight: "90%",
        fixed: !0,
        iframe: !0,
        onLoad: function() {
            $("#cboxClose").addClass("btn btn-sm btn-link").css("color", "white")
        },
        onComplete: function() {
            $("#cboxLoadedContent iframe").attr("id", "loaded-iframe").addClass("iframe-loaded"), $("#cboxLoadedContent").css({
                width: "640px",
                height: "320px",
                "margin-left": "-320px",
                "margin-top": "-160px",
                overflow: "hidden"
            })
        }
    }), $(document).bind("cbox_open", function() {
        $("#colorbox").swipe({
            swipeLeft: function(t, e, i, n, o) {
                $.colorbox.prev()
            },
            swipeRight: function(t, e, i, n, o) {
                $.colorbox.next()
            },
            threshold: 75
        })
    });
    var n = $("#content");
    n.imagesLoaded(function() {
        n.isotope({
            itemSelector: ".card",
            percentPosition: !0,
            masonry: {
                columnWidth: ".grid-size"
            }
        });
        var t = n.find(".card");
        t.addClass("item-loaded")
    }), n.infinitescroll({
        navSelector: "#load-next-page",
        nextSelector: "#load-next-page a",
        itemSelector: ".card",
        loading: {
            finishedMsg: "",
            img: ""
        }
    }, function(t) {
        var e = $(t);
        n.isotope("appended", e), e.addClass("item-loaded"), e.imagesLoaded(function() {
            n.isotope("layout")
        })
    }), $(window).on("resize", function() {
        n.isotope("layout")
    }), $(".filter-button-group").on("click", "button", function() {
        var t = $(this).attr("data-filter");
        n.isotope({
            filter: t
        })
    }), $(window).on("load scroll", function() {
        var t = $(window).scrollTop();
        t > 493 ? $("body").addClass("sticky") : $("body").removeClass("sticky")
    });
    var o = $(".locandina").outerHeight(),
        r = $(".scroll-pane").jScrollPane();
    $(window).on("resize", function() {
        var t = $(".locandina").outerHeight();
        $(".testo .scroll-pane").height(t), r.jScrollPane()
    }), $("li.dropdown").hover(function() {
        $(this).find("ul").slideDown(125)
    }, function() {
        $(this).find("ul").slideUp(125)
    })
});
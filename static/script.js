/*!
 * Socket.IO v4.3.2
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).io = e()
}(this, (function() {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function r(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }

    function o() {
        return o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, o.apply(this, arguments)
    }

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && a(t, e)
    }

    function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
    }

    function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, a(t, e)
    }

    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function u(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return c(t)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = s(t);
            if (e) {
                var o = s(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return u(this, n)
        }
    }

    function f(t, e, n) {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(n) : o.value
            }
        }, f(t, e, n || t)
    }

    function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function l(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return p(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s = !0,
            a = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return s = t.done, t
            },
            e: function(t) {
                a = !0, i = t
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a) throw i
                }
            }
        }
    }
    var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        y = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        v = function(t) {
            var e = t,
                n = t.indexOf("["),
                r = t.indexOf("]"); - 1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
            for (var o, i, s = d.exec(t || ""), a = {}, c = 14; c--;) a[y[c]] = s[c] || "";
            return -1 != n && -1 != r && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function(t, e) {
                var n = /\/{2,9}/g,
                    r = e.replace(n, "/").split("/");
                "/" != e.substr(0, 1) && 0 !== e.length || r.splice(0, 1);
                "/" == e.substr(e.length - 1, 1) && r.splice(r.length - 1, 1);
                return r
            }(0, a.path), a.queryKey = (o = a.query, i = {}, o.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, n) {
                e && (i[e] = n)
            })), i), a
        };
    var m = {
        exports: {}
    };
    try {
        m.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (t) {
        m.exports = !1
    }
    var g = m.exports,
        k = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();

    function b(t) {
        var e = t.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!e || g)) return new XMLHttpRequest
        } catch (t) {}
        if (!e) try {
            return new(k[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function w(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return n.reduce((function(e, n) {
            return t.hasOwnProperty(n) && (e[n] = t[n]), e
        }), {})
    }
    var _ = setTimeout,
        E = clearTimeout;

    function A(t, e) {
        e.useNativeTimers ? (t.setTimeoutFn = _.bind(k), t.clearTimeoutFn = E.bind(k)) : (t.setTimeoutFn = setTimeout.bind(k), t.clearTimeoutFn = clearTimeout.bind(k))
    }
    var R = T;

    function T(t) {
        if (t) return function(t) {
            for (var e in T.prototype) t[e] = T.prototype[e];
            return t
        }(t)
    }
    T.prototype.on = T.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, T.prototype.once = function(t, e) {
        function n() {
            this.off(t, n), e.apply(this, arguments)
        }
        return n.fn = e, this.on(t, n), this
    }, T.prototype.off = T.prototype.removeListener = T.prototype.removeAllListeners = T.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === e || n.fn === e) {
                r.splice(o, 1);
                break
            } return 0 === r.length && delete this._callbacks["$" + t], this
    }, T.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e)
        }
        return this
    }, T.prototype.emitReserved = T.prototype.emit, T.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, T.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    };
    var O = Object.create(null);
    O.open = "0", O.close = "1", O.ping = "2", O.pong = "3", O.message = "4", O.upgrade = "5", O.noop = "6";
    var C = Object.create(null);
    Object.keys(O).forEach((function(t) {
        C[O[t]] = t
    }));
    for (var S = {
            type: "error",
            data: "parser error"
        }, N = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), B = "function" == typeof ArrayBuffer, x = function(t, e, n) {
            var r, o = t.type,
                i = t.data;
            return N && i instanceof Blob ? e ? n(i) : L(i, n) : B && (i instanceof ArrayBuffer || (r = i, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer)) ? e ? n(i) : L(new Blob([i]), n) : n(O[o] + (i || ""))
        }, L = function(t, e) {
            var n = new FileReader;
            return n.onload = function() {
                var t = n.result.split(",")[1];
                e("b" + t)
            }, n.readAsDataURL(t)
        }, j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), q = 0; q < j.length; q++) P[j.charCodeAt(q)] = q;
    var D, I = "function" == typeof ArrayBuffer,
        F = function(t, e) {
            if ("string" != typeof t) return {
                type: "message",
                data: U(t, e)
            };
            var n = t.charAt(0);
            return "b" === n ? {
                type: "message",
                data: M(t.substring(1), e)
            } : C[n] ? t.length > 1 ? {
                type: C[n],
                data: t.substring(1)
            } : {
                type: C[n]
            } : S
        },
        M = function(t, e) {
            if (I) {
                var n = function(t) {
                    var e, n, r, o, i, s = .75 * t.length,
                        a = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
                    var u = new ArrayBuffer(s),
                        h = new Uint8Array(u);
                    for (e = 0; e < a; e += 4) n = P[t.charCodeAt(e)], r = P[t.charCodeAt(e + 1)], o = P[t.charCodeAt(e + 2)], i = P[t.charCodeAt(e + 3)], h[c++] = n << 2 | r >> 4, h[c++] = (15 & r) << 4 | o >> 2, h[c++] = (3 & o) << 6 | 63 & i;
                    return u
                }(t);
                return U(n, e)
            }
            return {
                base64: !0,
                data: t
            }
        },
        U = function(t, e) {
            return "blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t
        },
        V = String.fromCharCode(30),
        H = function(t) {
            i(o, t);
            var n = h(o);

            function o(t) {
                var r;
                return e(this, o), (r = n.call(this)).writable = !1, A(c(r), t), r.opts = t, r.query = t.query, r.readyState = "", r.socket = t.socket, r
            }
            return r(o, [{
                key: "onError",
                value: function(t, e) {
                    var n = new Error(t);
                    return n.type = "TransportError", n.description = e, f(s(o.prototype), "emit", this).call(this, "error", n), this
                }
            }, {
                key: "open",
                value: function() {
                    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                }
            }, {
                key: "close",
                value: function() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                }
            }, {
                key: "send",
                value: function(t) {
                    "open" === this.readyState && this.write(t)
                }
            }, {
                key: "onOpen",
                value: function() {
                    this.readyState = "open", this.writable = !0, f(s(o.prototype), "emit", this).call(this, "open")
                }
            }, {
                key: "onData",
                value: function(t) {
                    var e = F(t, this.socket.binaryType);
                    this.onPacket(e)
                }
            }, {
                key: "onPacket",
                value: function(t) {
                    f(s(o.prototype), "emit", this).call(this, "packet", t)
                }
            }, {
                key: "onClose",
                value: function() {
                    this.readyState = "closed", f(s(o.prototype), "emit", this).call(this, "close")
                }
            }]), o
        }(R),
        K = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        Y = {},
        z = 0,
        $ = 0;

    function W(t) {
        var e = "";
        do {
            e = K[t % 64] + e, t = Math.floor(t / 64)
        } while (t > 0);
        return e
    }

    function J() {
        var t = W(+new Date);
        return t !== D ? (z = 0, D = t) : t + "." + W(z++)
    }
    for (; $ < 64; $++) Y[K[$]] = $;
    J.encode = W, J.decode = function(t) {
        var e = 0;
        for ($ = 0; $ < t.length; $++) e = 64 * e + Y[t.charAt($)];
        return e
    };
    var X = J,
        G = {
            encode: function(t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            },
            decode: function(t) {
                for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                    var i = n[r].split("=");
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
                return e
            }
        },
        Q = function(t) {
            i(o, t);
            var n = h(o);

            function o() {
                var t;
                return e(this, o), (t = n.apply(this, arguments)).polling = !1, t
            }
            return r(o, [{
                key: "name",
                get: function() {
                    return "polling"
                }
            }, {
                key: "doOpen",
                value: function() {
                    this.poll()
                }
            }, {
                key: "pause",
                value: function(t) {
                    var e = this;
                    this.readyState = "pausing";
                    var n = function() {
                        e.readyState = "paused", t()
                    };
                    if (this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (r++, this.once("pollComplete", (function() {
                            --r || n()
                        }))), this.writable || (r++, this.once("drain", (function() {
                            --r || n()
                        })))
                    } else n()
                }
            }, {
                key: "poll",
                value: function() {
                    this.polling = !0, this.doPoll(), this.emit("poll")
                }
            }, {
                key: "onData",
                value: function(t) {
                    var e = this;
                    (function(t, e) {
                        for (var n = t.split(V), r = [], o = 0; o < n.length; o++) {
                            var i = F(n[o], e);
                            if (r.push(i), "error" === i.type) break
                        }
                        return r
                    })(t, this.socket.binaryType).forEach((function(t) {
                        if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose(), !1;
                        e.onPacket(t)
                    })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll())
                }
            }, {
                key: "doClose",
                value: function() {
                    var t = this,
                        e = function() {
                            t.write([{
                                type: "close"
                            }])
                        };
                    "open" === this.readyState ? e() : this.once("open", e)
                }
            }, {
                key: "write",
                value: function(t) {
                    var e = this;
                    this.writable = !1,
                        function(t, e) {
                            var n = t.length,
                                r = new Array(n),
                                o = 0;
                            t.forEach((function(t, i) {
                                x(t, !1, (function(t) {
                                    r[i] = t, ++o === n && e(r.join(V))
                                }))
                            }))
                        }(t, (function(t) {
                            e.doWrite(t, (function() {
                                e.writable = !0, e.emit("drain")
                            }))
                        }))
                }
            }, {
                key: "uri",
                value: function() {
                    var t = this.query || {},
                        e = this.opts.secure ? "https" : "http",
                        n = "";
                    !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = X()), this.supportsBinary || t.sid || (t.b64 = 1), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port);
                    var r = G.encode(t);
                    return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "")
                }
            }]), o
        }(H);

    function Z() {}
    var tt = null != new b({
            xdomain: !1
        }).responseType,
        et = function(t) {
            i(s, t);
            var n = h(s);

            function s(t) {
                var r;
                if (e(this, s), r = n.call(this, t), "undefined" != typeof location) {
                    var o = "https:" === location.protocol,
                        i = location.port;
                    i || (i = o ? "443" : "80"), r.xd = "undefined" != typeof location && t.hostname !== location.hostname || i !== t.port, r.xs = t.secure !== o
                }
                var a = t && t.forceBase64;
                return r.supportsBinary = tt && !a, r
            }
            return r(s, [{
                key: "request",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return o(t, {
                        xd: this.xd,
                        xs: this.xs
                    }, this.opts), new nt(this.uri(), t)
                }
            }, {
                key: "doWrite",
                value: function(t, e) {
                    var n = this,
                        r = this.request({
                            method: "POST",
                            data: t
                        });
                    r.on("success", e), r.on("error", (function(t) {
                        n.onError("xhr post error", t)
                    }))
                }
            }, {
                key: "doPoll",
                value: function() {
                    var t = this,
                        e = this.request();
                    e.on("data", this.onData.bind(this)), e.on("error", (function(e) {
                        t.onError("xhr poll error", e)
                    })), this.pollXhr = e
                }
            }]), s
        }(Q),
        nt = function(t) {
            i(o, t);
            var n = h(o);

            function o(t, r) {
                var i;
                return e(this, o), A(c(i = n.call(this)), r), i.opts = r, i.method = r.method || "GET", i.uri = t, i.async = !1 !== r.async, i.data = void 0 !== r.data ? r.data : null, i.create(), i
            }
            return r(o, [{
                key: "create",
                value: function() {
                    var t = this,
                        e = w(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
                    var n = this.xhr = new b(e);
                    try {
                        n.open(this.method, this.uri, this.async);
                        try {
                            if (this.opts.extraHeaders)
                                for (var r in n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r])
                        } catch (t) {}
                        if ("POST" === this.method) try {
                            n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                        try {
                            n.setRequestHeader("Accept", "*/*")
                        } catch (t) {}
                        "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = function() {
                            4 === n.readyState && (200 === n.status || 1223 === n.status ? t.onLoad() : t.setTimeoutFn((function() {
                                t.onError("number" == typeof n.status ? n.status : 0)
                            }), 0))
                        }, n.send(this.data)
                    } catch (e) {
                        return void this.setTimeoutFn((function() {
                            t.onError(e)
                        }), 0)
                    }
                    "undefined" != typeof document && (this.index = o.requestsCount++, o.requests[this.index] = this)
                }
            }, {
                key: "onSuccess",
                value: function() {
                    this.emit("success"), this.cleanup()
                }
            }, {
                key: "onData",
                value: function(t) {
                    this.emit("data", t), this.onSuccess()
                }
            }, {
                key: "onError",
                value: function(t) {
                    this.emit("error", t), this.cleanup(!0)
                }
            }, {
                key: "cleanup",
                value: function(t) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.xhr.onreadystatechange = Z, t) try {
                            this.xhr.abort()
                        } catch (t) {}
                        "undefined" != typeof document && delete o.requests[this.index], this.xhr = null
                    }
                }
            }, {
                key: "onLoad",
                value: function() {
                    var t = this.xhr.responseText;
                    null !== t && this.onData(t)
                }
            }, {
                key: "abort",
                value: function() {
                    this.cleanup()
                }
            }]), o
        }(R);
    if (nt.requestsCount = 0, nt.requests = {}, "undefined" != typeof document)
        if ("function" == typeof attachEvent) attachEvent("onunload", rt);
        else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in k ? "pagehide" : "unload", rt, !1)
    }

    function rt() {
        for (var t in nt.requests) nt.requests.hasOwnProperty(t) && nt.requests[t].abort()
    }
    var ot = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
            return Promise.resolve().then(t)
        } : function(t, e) {
            return e(t, 0)
        },
        it = k.WebSocket || k.MozWebSocket,
        st = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
        at = function(t) {
            i(o, t);
            var n = h(o);

            function o(t) {
                var r;
                return e(this, o), (r = n.call(this, t)).supportsBinary = !t.forceBase64, r
            }
            return r(o, [{
                key: "name",
                get: function() {
                    return "websocket"
                }
            }, {
                key: "doOpen",
                value: function() {
                    if (this.check()) {
                        var t = this.uri(),
                            e = this.opts.protocols,
                            n = st ? {} : w(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                        try {
                            this.ws = st ? new it(t, e, n) : e ? new it(t, e) : new it(t)
                        } catch (t) {
                            return this.emit("error", t)
                        }
                        this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners()
                    }
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var t = this;
                    this.ws.onopen = function() {
                        t.opts.autoUnref && t.ws._socket.unref(), t.onOpen()
                    }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = function(e) {
                        return t.onData(e.data)
                    }, this.ws.onerror = function(e) {
                        return t.onError("websocket error", e)
                    }
                }
            }, {
                key: "write",
                value: function(t) {
                    var e = this;
                    this.writable = !1;
                    for (var n = function(n) {
                            var r = t[n],
                                o = n === t.length - 1;
                            x(r, e.supportsBinary, (function(t) {
                                try {
                                    e.ws.send(t)
                                } catch (t) {}
                                o && ot((function() {
                                    e.writable = !0, e.emit("drain")
                                }), e.setTimeoutFn)
                            }))
                        }, r = 0; r < t.length; r++) n(r)
                }
            }, {
                key: "doClose",
                value: function() {
                    void 0 !== this.ws && (this.ws.close(), this.ws = null)
                }
            }, {
                key: "uri",
                value: function() {
                    var t = this.query || {},
                        e = this.opts.secure ? "wss" : "ws",
                        n = "";
                    this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = X()), this.supportsBinary || (t.b64 = 1);
                    var r = G.encode(t);
                    return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "")
                }
            }, {
                key: "check",
                value: function() {
                    return !(!it || "__initialize" in it && this.name === o.prototype.name)
                }
            }]), o
        }(H),
        ct = {
            websocket: at,
            polling: et
        },
        ut = function(n) {
            i(a, n);
            var s = h(a);

            function a(n) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e(this, a), r = s.call(this), n && "object" === t(n) && (i = n, n = null), n ? (n = v(n), i.hostname = n.host, i.secure = "https" === n.protocol || "wss" === n.protocol, i.port = n.port, n.query && (i.query = n.query)) : i.host && (i.hostname = v(i.host).host), A(c(r), i), r.secure = null != i.secure ? i.secure : "undefined" != typeof location && "https:" === location.protocol, i.hostname && !i.port && (i.port = r.secure ? "443" : "80"), r.hostname = i.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), r.port = i.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = i.transports || ["polling", "websocket"], r.readyState = "", r.writeBuffer = [], r.prevBufferLen = 0, r.opts = o({
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    rejectUnauthorized: !0,
                    perMessageDeflate: {
                        threshold: 1024
                    },
                    transportOptions: {},
                    closeOnBeforeunload: !0
                }, i), r.opts.path = r.opts.path.replace(/\/$/, "") + "/", "string" == typeof r.opts.query && (r.opts.query = G.decode(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && addEventListener("beforeunload", (function() {
                    r.transport && (r.transport.removeAllListeners(), r.transport.close())
                }), !1), "localhost" !== r.hostname && (r.offlineEventListener = function() {
                    r.onClose("transport close")
                }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r
            }
            return r(a, [{
                key: "createTransport",
                value: function(t) {
                    var e = function(t) {
                        var e = {};
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }(this.opts.query);
                    e.EIO = 4, e.transport = t, this.id && (e.sid = this.id);
                    var n = o({}, this.opts.transportOptions[t], this.opts, {
                        query: e,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    });
                    return new ct[t](n)
                }
            }, {
                key: "open",
                value: function() {
                    var t, e = this;
                    if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                    else {
                        if (0 === this.transports.length) return void this.setTimeoutFn((function() {
                            e.emitReserved("error", "No transports available")
                        }), 0);
                        t = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        t = this.createTransport(t)
                    } catch (t) {
                        return this.transports.shift(), void this.open()
                    }
                    t.open(), this.setTransport(t)
                }
            }, {
                key: "setTransport",
                value: function(t) {
                    var e = this;
                    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function() {
                        e.onClose("transport close")
                    }))
                }
            }, {
                key: "probe",
                value: function(t) {
                    var e = this,
                        n = this.createTransport(t),
                        r = !1;
                    a.priorWebsocketSuccess = !1;
                    var o = function() {
                        r || (n.send([{
                            type: "ping",
                            data: "probe"
                        }]), n.once("packet", (function(t) {
                            if (!r)
                                if ("pong" === t.type && "probe" === t.data) {
                                    if (e.upgrading = !0, e.emitReserved("upgrading", n), !n) return;
                                    a.priorWebsocketSuccess = "websocket" === n.name, e.transport.pause((function() {
                                        r || "closed" !== e.readyState && (f(), e.setTransport(n), n.send([{
                                            type: "upgrade"
                                        }]), e.emitReserved("upgrade", n), n = null, e.upgrading = !1, e.flush())
                                    }))
                                } else {
                                    var o = new Error("probe error");
                                    o.transport = n.name, e.emitReserved("upgradeError", o)
                                }
                        })))
                    };

                    function i() {
                        r || (r = !0, f(), n.close(), n = null)
                    }
                    var s = function(t) {
                        var r = new Error("probe error: " + t);
                        r.transport = n.name, i(), e.emitReserved("upgradeError", r)
                    };

                    function c() {
                        s("transport closed")
                    }

                    function u() {
                        s("socket closed")
                    }

                    function h(t) {
                        n && t.name !== n.name && i()
                    }
                    var f = function() {
                        n.removeListener("open", o), n.removeListener("error", s), n.removeListener("close", c), e.off("close", u), e.off("upgrading", h)
                    };
                    n.once("open", o), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), n.open()
                }
            }, {
                key: "onOpen",
                value: function() {
                    if (this.readyState = "open", a.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                        for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                }
            }, {
                key: "onPacket",
                value: function(t) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
                        case "open":
                            this.onHandshake(JSON.parse(t.data));
                            break;
                        case "ping":
                            this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data, this.onError(e);
                            break;
                        case "message":
                            this.emitReserved("data", t.data), this.emitReserved("message", t.data)
                    }
                }
            }, {
                key: "onHandshake",
                value: function(t) {
                    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                }
            }, {
                key: "resetPingTimeout",
                value: function() {
                    var t = this;
                    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function() {
                        t.onClose("ping timeout")
                    }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                }
            }, {
                key: "onDrain",
                value: function() {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                }
            }, {
                key: "flush",
                value: function() {
                    "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emitReserved("flush"))
                }
            }, {
                key: "write",
                value: function(t, e, n) {
                    return this.sendPacket("message", t, e, n), this
                }
            }, {
                key: "send",
                value: function(t, e, n) {
                    return this.sendPacket("message", t, e, n), this
                }
            }, {
                key: "sendPacket",
                value: function(t, e, n, r) {
                    if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                        (n = n || {}).compress = !1 !== n.compress;
                        var o = {
                            type: t,
                            data: e,
                            options: n
                        };
                        this.emitReserved("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                    }
                }
            }, {
                key: "close",
                value: function() {
                    var t = this,
                        e = function() {
                            t.onClose("forced close"), t.transport.close()
                        },
                        n = function n() {
                            t.off("upgrade", n), t.off("upgradeError", n), e()
                        },
                        r = function() {
                            t.once("upgrade", n), t.once("upgradeError", n)
                        };
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function() {
                        t.upgrading ? r() : e()
                    })) : this.upgrading ? r() : e()), this
                }
            }, {
                key: "onError",
                value: function(t) {
                    a.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
                }
            }, {
                key: "onClose",
                value: function(t, e) {
                    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
                }
            }, {
                key: "filterUpgrades",
                value: function(t) {
                    for (var e = [], n = 0, r = t.length; n < r; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
                    return e
                }
            }]), a
        }(R);
    ut.protocol = 4;
    var ht = "function" == typeof ArrayBuffer,
        ft = Object.prototype.toString,
        pt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === ft.call(Blob),
        lt = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === ft.call(File);

    function dt(t) {
        return ht && (t instanceof ArrayBuffer || function(t) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
        }(t)) || pt && t instanceof Blob || lt && t instanceof File
    }

    function yt(e, n) {
        if (!e || "object" !== t(e)) return !1;
        if (Array.isArray(e)) {
            for (var r = 0, o = e.length; r < o; r++)
                if (yt(e[r])) return !0;
            return !1
        }
        if (dt(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return yt(e.toJSON(), !0);
        for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && yt(e[i])) return !0;
        return !1
    }

    function vt(t) {
        var e = [],
            n = t.data,
            r = t;
        return r.data = mt(n, e), r.attachments = e.length, {
            packet: r,
            buffers: e
        }
    }

    function mt(e, n) {
        if (!e) return e;
        if (dt(e)) {
            var r = {
                _placeholder: !0,
                num: n.length
            };
            return n.push(e), r
        }
        if (Array.isArray(e)) {
            for (var o = new Array(e.length), i = 0; i < e.length; i++) o[i] = mt(e[i], n);
            return o
        }
        if ("object" === t(e) && !(e instanceof Date)) {
            var s = {};
            for (var a in e) e.hasOwnProperty(a) && (s[a] = mt(e[a], n));
            return s
        }
        return e
    }

    function gt(t, e) {
        return t.data = kt(t.data, e), t.attachments = void 0, t
    }

    function kt(e, n) {
        if (!e) return e;
        if (e && e._placeholder) return n[e.num];
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] = kt(e[r], n);
        else if ("object" === t(e))
            for (var o in e) e.hasOwnProperty(o) && (e[o] = kt(e[o], n));
        return e
    }
    var bt;
    ! function(t) {
        t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
    }(bt || (bt = {}));
    var wt = function() {
            function t() {
                e(this, t)
            }
            return r(t, [{
                key: "encode",
                value: function(t) {
                    return t.type !== bt.EVENT && t.type !== bt.ACK || !yt(t) ? [this.encodeAsString(t)] : (t.type = t.type === bt.EVENT ? bt.BINARY_EVENT : bt.BINARY_ACK, this.encodeAsBinary(t))
                }
            }, {
                key: "encodeAsString",
                value: function(t) {
                    var e = "" + t.type;
                    return t.type !== bt.BINARY_EVENT && t.type !== bt.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), e
                }
            }, {
                key: "encodeAsBinary",
                value: function(t) {
                    var e = vt(t),
                        n = this.encodeAsString(e.packet),
                        r = e.buffers;
                    return r.unshift(n), r
                }
            }]), t
        }(),
        _t = function(n) {
            i(a, n);
            var o = h(a);

            function a() {
                return e(this, a), o.call(this)
            }
            return r(a, [{
                key: "add",
                value: function(t) {
                    var e;
                    if ("string" == typeof t)(e = this.decodeString(t)).type === bt.BINARY_EVENT || e.type === bt.BINARY_ACK ? (this.reconstructor = new Et(e), 0 === e.attachments && f(s(a.prototype), "emitReserved", this).call(this, "decoded", e)) : f(s(a.prototype), "emitReserved", this).call(this, "decoded", e);
                    else {
                        if (!dt(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, f(s(a.prototype), "emitReserved", this).call(this, "decoded", e))
                    }
                }
            }, {
                key: "decodeString",
                value: function(t) {
                    var e = 0,
                        n = {
                            type: Number(t.charAt(0))
                        };
                    if (void 0 === bt[n.type]) throw new Error("unknown packet type " + n.type);
                    if (n.type === bt.BINARY_EVENT || n.type === bt.BINARY_ACK) {
                        for (var r = e + 1;
                            "-" !== t.charAt(++e) && e != t.length;);
                        var o = t.substring(r, e);
                        if (o != Number(o) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
                        n.attachments = Number(o)
                    }
                    if ("/" === t.charAt(e + 1)) {
                        for (var i = e + 1; ++e;) {
                            if ("," === t.charAt(e)) break;
                            if (e === t.length) break
                        }
                        n.nsp = t.substring(i, e)
                    } else n.nsp = "/";
                    var s = t.charAt(e + 1);
                    if ("" !== s && Number(s) == s) {
                        for (var c = e + 1; ++e;) {
                            var u = t.charAt(e);
                            if (null == u || Number(u) != u) {
                                --e;
                                break
                            }
                            if (e === t.length) break
                        }
                        n.id = Number(t.substring(c, e + 1))
                    }
                    if (t.charAt(++e)) {
                        var h = function(t) {
                            try {
                                return JSON.parse(t)
                            } catch (t) {
                                return !1
                            }
                        }(t.substr(e));
                        if (!a.isPayloadValid(n.type, h)) throw new Error("invalid payload");
                        n.data = h
                    }
                    return n
                }
            }, {
                key: "destroy",
                value: function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction()
                }
            }], [{
                key: "isPayloadValid",
                value: function(e, n) {
                    switch (e) {
                        case bt.CONNECT:
                            return "object" === t(n);
                        case bt.DISCONNECT:
                            return void 0 === n;
                        case bt.CONNECT_ERROR:
                            return "string" == typeof n || "object" === t(n);
                        case bt.EVENT:
                        case bt.BINARY_EVENT:
                            return Array.isArray(n) && n.length > 0;
                        case bt.ACK:
                        case bt.BINARY_ACK:
                            return Array.isArray(n)
                    }
                }
            }]), a
        }(R);
    var Et = function() {
            function t(n) {
                e(this, t), this.packet = n, this.buffers = [], this.reconPack = n
            }
            return r(t, [{
                key: "takeBinaryData",
                value: function(t) {
                    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                        var e = gt(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e
                    }
                    return null
                }
            }, {
                key: "finishedReconstruction",
                value: function() {
                    this.reconPack = null, this.buffers = []
                }
            }]), t
        }(),
        At = Object.freeze({
            __proto__: null,
            protocol: 5,
            get PacketType() {
                return bt
            },
            Encoder: wt,
            Decoder: _t
        });

    function Rt(t, e, n) {
        return t.on(e, n),
            function() {
                t.off(e, n)
            }
    }
    var Tt = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        }),
        Ot = function(t) {
            i(o, t);
            var n = h(o);

            function o(t, r, i) {
                var s;
                return e(this, o), (s = n.call(this)).connected = !1, s.disconnected = !0, s.receiveBuffer = [], s.sendBuffer = [], s.ids = 0, s.acks = {}, s.flags = {}, s.io = t, s.nsp = r, i && i.auth && (s.auth = i.auth), s.io._autoConnect && s.open(), s
            }
            return r(o, [{
                key: "subEvents",
                value: function() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [Rt(t, "open", this.onopen.bind(this)), Rt(t, "packet", this.onpacket.bind(this)), Rt(t, "error", this.onerror.bind(this)), Rt(t, "close", this.onclose.bind(this))]
                    }
                }
            }, {
                key: "active",
                get: function() {
                    return !!this.subs
                }
            }, {
                key: "connect",
                value: function() {
                    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                }
            }, {
                key: "open",
                value: function() {
                    return this.connect()
                }
            }, {
                key: "send",
                value: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return e.unshift("message"), this.emit.apply(this, e), this
                }
            }, {
                key: "emit",
                value: function(t) {
                    if (Tt.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    n.unshift(t);
                    var o = {
                        type: bt.EVENT,
                        data: n,
                        options: {}
                    };
                    o.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1] && (this.acks[this.ids] = n.pop(), o.id = this.ids++);
                    var i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable,
                        s = this.flags.volatile && (!i || !this.connected);
                    return s || (this.connected ? this.packet(o) : this.sendBuffer.push(o)), this.flags = {}, this
                }
            }, {
                key: "packet",
                value: function(t) {
                    t.nsp = this.nsp, this.io._packet(t)
                }
            }, {
                key: "onopen",
                value: function() {
                    var t = this;
                    "function" == typeof this.auth ? this.auth((function(e) {
                        t.packet({
                            type: bt.CONNECT,
                            data: e
                        })
                    })) : this.packet({
                        type: bt.CONNECT,
                        data: this.auth
                    })
                }
            }, {
                key: "onerror",
                value: function(t) {
                    this.connected || this.emitReserved("connect_error", t)
                }
            }, {
                key: "onclose",
                value: function(t) {
                    this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", t)
                }
            }, {
                key: "onpacket",
                value: function(t) {
                    if (t.nsp === this.nsp) switch (t.type) {
                        case bt.CONNECT:
                            if (t.data && t.data.sid) {
                                var e = t.data.sid;
                                this.onconnect(e)
                            } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case bt.EVENT:
                        case bt.BINARY_EVENT:
                            this.onevent(t);
                            break;
                        case bt.ACK:
                        case bt.BINARY_ACK:
                            this.onack(t);
                            break;
                        case bt.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case bt.CONNECT_ERROR:
                            var n = new Error(t.data.message);
                            n.data = t.data.data, this.emitReserved("connect_error", n)
                    }
                }
            }, {
                key: "onevent",
                value: function(t) {
                    var e = t.data || [];
                    null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
                }
            }, {
                key: "emitEvent",
                value: function(t) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var e, n = l(this._anyListeners.slice());
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                e.value.apply(this, t)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                    f(s(o.prototype), "emit", this).apply(this, t)
                }
            }, {
                key: "ack",
                value: function(t) {
                    var e = this,
                        n = !1;
                    return function() {
                        if (!n) {
                            n = !0;
                            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            e.packet({
                                type: bt.ACK,
                                id: t,
                                data: o
                            })
                        }
                    }
                }
            }, {
                key: "onack",
                value: function(t) {
                    var e = this.acks[t.id];
                    "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id])
                }
            }, {
                key: "onconnect",
                value: function(t) {
                    this.id = t, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                }
            }, {
                key: "emitBuffered",
                value: function() {
                    var t = this;
                    this.receiveBuffer.forEach((function(e) {
                        return t.emitEvent(e)
                    })), this.receiveBuffer = [], this.sendBuffer.forEach((function(e) {
                        return t.packet(e)
                    })), this.sendBuffer = []
                }
            }, {
                key: "ondisconnect",
                value: function() {
                    this.destroy(), this.onclose("io server disconnect")
                }
            }, {
                key: "destroy",
                value: function() {
                    this.subs && (this.subs.forEach((function(t) {
                        return t()
                    })), this.subs = void 0), this.io._destroy(this)
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this.connected && this.packet({
                        type: bt.DISCONNECT
                    }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                }
            }, {
                key: "close",
                value: function() {
                    return this.disconnect()
                }
            }, {
                key: "compress",
                value: function(t) {
                    return this.flags.compress = t, this
                }
            }, {
                key: "volatile",
                get: function() {
                    return this.flags.volatile = !0, this
                }
            }, {
                key: "onAny",
                value: function(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                }
            }, {
                key: "prependAny",
                value: function(t) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                }
            }, {
                key: "offAny",
                value: function(t) {
                    if (!this._anyListeners) return this;
                    if (t) {
                        for (var e = this._anyListeners, n = 0; n < e.length; n++)
                            if (t === e[n]) return e.splice(n, 1), this
                    } else this._anyListeners = [];
                    return this
                }
            }, {
                key: "listenersAny",
                value: function() {
                    return this._anyListeners || []
                }
            }]), o
        }(R),
        Ct = St;

    function St(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }
    St.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
        }
        return 0 | Math.min(t, this.max)
    }, St.prototype.reset = function() {
        this.attempts = 0
    }, St.prototype.setMin = function(t) {
        this.ms = t
    }, St.prototype.setMax = function(t) {
        this.max = t
    }, St.prototype.setJitter = function(t) {
        this.jitter = t
    };
    var Nt = function(n) {
            i(s, n);
            var o = h(s);

            function s(n, r) {
                var i, a;
                e(this, s), (i = o.call(this)).nsps = {}, i.subs = [], n && "object" === t(n) && (r = n, n = void 0), (r = r || {}).path = r.path || "/socket.io", i.opts = r, A(c(i), r), i.reconnection(!1 !== r.reconnection), i.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), i.reconnectionDelay(r.reconnectionDelay || 1e3), i.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), i.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : .5), i.backoff = new Ct({
                    min: i.reconnectionDelay(),
                    max: i.reconnectionDelayMax(),
                    jitter: i.randomizationFactor()
                }), i.timeout(null == r.timeout ? 2e4 : r.timeout), i._readyState = "closed", i.uri = n;
                var u = r.parser || At;
                return i.encoder = new u.Encoder, i.decoder = new u.Decoder, i._autoConnect = !1 !== r.autoConnect, i._autoConnect && i.open(), i
            }
            return r(s, [{
                key: "reconnection",
                value: function(t) {
                    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
                }
            }, {
                key: "reconnectionAttempts",
                value: function(t) {
                    return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                }
            }, {
                key: "reconnectionDelay",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this)
                }
            }, {
                key: "randomizationFactor",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this)
                }
            }, {
                key: "reconnectionDelayMax",
                value: function(t) {
                    var e;
                    return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this)
                }
            }, {
                key: "timeout",
                value: function(t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout
                }
            }, {
                key: "maybeReconnectOnOpen",
                value: function() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
            }, {
                key: "open",
                value: function(t) {
                    var e = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new ut(this.uri, this.opts);
                    var n = this.engine,
                        r = this;
                    this._readyState = "opening", this.skipReconnect = !1;
                    var o = Rt(n, "open", (function() {
                            r.onopen(), t && t()
                        })),
                        i = Rt(n, "error", (function(n) {
                            r.cleanup(), r._readyState = "closed", e.emitReserved("error", n), t ? t(n) : r.maybeReconnectOnOpen()
                        }));
                    if (!1 !== this._timeout) {
                        var s = this._timeout;
                        0 === s && o();
                        var a = this.setTimeoutFn((function() {
                            o(), n.close(), n.emit("error", new Error("timeout"))
                        }), s);
                        this.opts.autoUnref && a.unref(), this.subs.push((function() {
                            clearTimeout(a)
                        }))
                    }
                    return this.subs.push(o), this.subs.push(i), this
                }
            }, {
                key: "connect",
                value: function(t) {
                    return this.open(t)
                }
            }, {
                key: "onopen",
                value: function() {
                    this.cleanup(), this._readyState = "open", this.emitReserved("open");
                    var t = this.engine;
                    this.subs.push(Rt(t, "ping", this.onping.bind(this)), Rt(t, "data", this.ondata.bind(this)), Rt(t, "error", this.onerror.bind(this)), Rt(t, "close", this.onclose.bind(this)), Rt(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
            }, {
                key: "onping",
                value: function() {
                    this.emitReserved("ping")
                }
            }, {
                key: "ondata",
                value: function(t) {
                    this.decoder.add(t)
                }
            }, {
                key: "ondecoded",
                value: function(t) {
                    this.emitReserved("packet", t)
                }
            }, {
                key: "onerror",
                value: function(t) {
                    this.emitReserved("error", t)
                }
            }, {
                key: "socket",
                value: function(t, e) {
                    var n = this.nsps[t];
                    return n || (n = new Ot(this, t, e), this.nsps[t] = n), n
                }
            }, {
                key: "_destroy",
                value: function(t) {
                    for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) {
                        var r = n[e];
                        if (this.nsps[r].active) return
                    }
                    this._close()
                }
            }, {
                key: "_packet",
                value: function(t) {
                    for (var e = this.encoder.encode(t), n = 0; n < e.length; n++) this.engine.write(e[n], t.options)
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.subs.forEach((function(t) {
                        return t()
                    })), this.subs.length = 0, this.decoder.destroy()
                }
            }, {
                key: "_close",
                value: function() {
                    this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close()
                }
            }, {
                key: "disconnect",
                value: function() {
                    return this._close()
                }
            }, {
                key: "onclose",
                value: function(t) {
                    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
                }
            }, {
                key: "reconnect",
                value: function() {
                    var t = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var e = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                    else {
                        var n = this.backoff.duration();
                        this._reconnecting = !0;
                        var r = this.setTimeoutFn((function() {
                            e.skipReconnect || (t.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((function(n) {
                                n ? (e._reconnecting = !1, e.reconnect(), t.emitReserved("reconnect_error", n)) : e.onreconnect()
                            })))
                        }), n);
                        this.opts.autoUnref && r.unref(), this.subs.push((function() {
                            clearTimeout(r)
                        }))
                    }
                }
            }, {
                key: "onreconnect",
                value: function() {
                    var t = this.backoff.attempts;
                    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
                }
            }]), s
        }(R),
        Bt = {};

    function xt(e, n) {
        "object" === t(e) && (n = e, e = void 0);
        var r, o = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t;
                n = n || "undefined" != typeof location && location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), r = v(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r
            }(e, (n = n || {}).path || "/socket.io"),
            i = o.source,
            s = o.id,
            a = o.path,
            c = Bt[s] && a in Bt[s].nsps;
        return n.forceNew || n["force new connection"] || !1 === n.multiplex || c ? r = new Nt(i, n) : (Bt[s] || (Bt[s] = new Nt(i, n)), r = Bt[s]), o.query && !n.query && (n.query = o.queryKey), r.socket(o.path, n)
    }
    return o(xt, {
        Manager: Nt,
        Socket: Ot,
        io: xt,
        connect: xt
    }), xt
}));
//# sourceMappingURL=socket.io.min.js.map

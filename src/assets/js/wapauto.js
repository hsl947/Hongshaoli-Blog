(function(e, t) {
        function n() {
            for (var e = navigator.userAgent,
                    t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, i = 0; t.length > i; i++)
                if (e.indexOf(t[i]) > 0) {
                    n = !1;
                    break
                }
            return n
        }

        function i() {
            var t = a.getBoundingClientRect().width;
            n() && 2047 > t && (t = 640);
            var i = t * 100 / w;
            a.style.fontSize = i + "px",
                d.rem = e.rem = i
        }
        var r, o = e.document,
            a = o.documentElement,
            s = o.querySelector('meta[name="viewport"]'),
            c = o.querySelector('meta[name="flexible"]'),
            l = 0,
            u = 0,
            d = t.flexible || (t.flexible = {});
        var w = o.querySelector('meta[name="W_design"]') ? o.querySelector('meta[name="W_design"]').getAttribute('content') : 640;
        if (s) {
            //console.warn("将根据已有的meta标签来设置缩放比例");
            var p = s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            p && (u = parseFloat(p[1]), l = parseInt(1 / u))
        } else if (c) {
            var f = c.getAttribute("content");
            if (f) {
                var h = f.match(/initial\-dpr=([\d\.]+)/),
                    m = f.match(/maximum\-dpr=([\d\.]+)/);
                h && (l = parseFloat(h[1]), u = parseFloat((1 / l).toFixed(2))),
                    m && (l = parseFloat(m[1]), u = parseFloat((1 / l).toFixed(2)))
            }
        }
        if (!l && !u) {
            e.navigator.appVersion.match(/android/gi);
            var g = e.navigator.appVersion.match(/iphone/gi);
            e.navigator.appVersion.match(/ipad/gi);
            var v = e.devicePixelRatio;
            l = g ? v >= 3 && (!l || l >= 3) ? 3 : v >= 2 && (!l || l >= 2) ? 2 : 1 : 1,
                u = 1 / l
        }
        if (a.setAttribute("data-dpr", l), !s)
            if (s = o.createElement("meta"), s.setAttribute("name", "viewport"), s.setAttribute("content", "initial-scale=" + u + ", maximum-scale=" + u + ", minimum-scale=" + u + ", user-scalable=no"), a.firstElementChild) a.firstElementChild.appendChild(s);
            else {
                var y = o.createElement("div");
                y.appendChild(s),
                    o.write(y.innerHTML)
            }
        e.addEventListener("resize",
                function() {
                    clearTimeout(r),
                        r = setTimeout(i, 300)
                }, !1),
            e.addEventListener("pageshow",
                function(e) {
                    e.persisted && (clearTimeout(r), r = setTimeout(i, 300))
                }, !1),
            "complete" === o.readyState ? o.body.style.fontSize = 12 * l + "px" : o.addEventListener("DOMContentLoaded",
                function() {
                    o.body.style.fontSize = 12 * l + "px"
                }, !1),
            i(),
            d.dpr = e.dpr = l,
            d.refreshRem = i,
            d.rem2px = function(e) {
                var t = parseFloat(e) * this.rem;
                return "string" == typeof e && e.match(/rem$/) && (t += "px"),
                    t
            },
            d.px2rem = function(e) {
                var t = parseFloat(e) / this.rem;
                return "string" == typeof e && e.match(/px$/) && (t += "rem"),
                    t
            }
    })(window, window.lib || (window.lib = {}));
!function(a, b) {
    function c() {
        var a = {}, b = location.search;
        if (b) {
            var c = b.slice(1).split("&");
            if (c.length)
                for (var d = 0; d < c.length; d++)
                    if (c[d] && -1 != c[d].indexOf("=")) {
                        var e = c[d].split("=");
                        a[e[0]] = e[1]
                    }
        }
        return a
    }
    function d(a) {
        var b = j.createElement("img");
        b.style.cssText = "display:none", b.src = a, j.body.appendChild(b)
    }
    function e(a) {
        var b = document.cookie;
        if (name = a + "=", start = b.indexOf(name), start < 0)
            return null;
        start += name.length;
        var c = b.indexOf(";", start);
        return c = -1 == c ? b.length : c, b.substring(start, c)
    }
    function f(b) {
        b = b || {};
        var c = b.apuri || b.ap_uri, e = {}, f = b.sceneType && "fresh" == b.sceneType, g = b.pageType, h = b.uaPoint;
        if (c) {
            e.apuri = c, f && (e.fresh = 1), g && (e.page = g), h && (e.uaPoint = h), e.logtype = 2, e.cache = parseInt((Math.random() + 1) * Date.now());
            var i = [];
            for (var j in e)
                i.push(j + "=" + encodeURIComponent(e[j]));
            a.goldlog && goldlog.record ? goldlog.record("/sb.1.1", "", i.join("&"), "H1673809") : d("http://wgo.mmstat.com/sb.1.1?" + i.join("&"))
        }
    }
    function g() {
        var a = c(), b = a.ttid, d = /[^@]+\@taobao\_(iphone|android|apad|ipad)\_[\d.]+/i;
        return b = b ? decodeURIComponent(b) : "", d.test(b)
    }
    function h() {
        return "TB" === b.env.aliapp.appname
    }
    function i() {
        var a = new b.httpurl(location.href), c = a.params;
        return "AP" === b.env.aliapp.appname && "undefined" == typeof c.ut_sk
    }
    var j = a.document, k = j.cookie.match(/(?:^|\s)cna=([^;]+)(?:;|$)/);
    k && (k = k[1]);
    var l = j.createElement("frame"), m = function(a) {
        var c = this, d = (navigator.standalone, navigator.userAgent, b.env.os), e = b.env.browser;
        return this.platform = d.isAndroid && "android" || d.isISO && "ios" || null, this.isIpad = d.isIpad, this.isChrome = e.isChrome, this.invaliable = i() || h(), this.invaliable ? null : (this.init(a) && (this.create(), window.onblur = function() {
            clearTimeout(c.timeload), c.timeload = null
        }), this)
    };
    m.prototype = {constructor: m,init: function(a) {
        var b = this.options = a, d = b.isInstance || function() {
            return h() || i()
        };
        if (d())
            return this.invaliable = !0, null;
        a.version || (a.version = "v1"), this.cover = b.cover || !1, this.isDownload = b.download || !1, this.timeout = b.timeout || 1e3;
        var e = b.from || "h5", f = b.crossplat || !1;
        if ("ios" != this.platform || f) {
            var g = "http://m.taobao.com/channel/act/sale/tbdl1.html", l = b.url || g;
            l += -1 == l.indexOf("?") ? "?" : "&", l += location.search.slice(1) + "&pageType=" + (b.pageType || "mainIndex") + "&sceneType=" + (b.sceneType || "default"), this.bannerUrl = l
        } else
            this.bannerUrl = b.appstoreUrl || (this.isIpad ? "https://itunes.apple.com/app/id438865278" : "http://itunes.apple.com/cn/app/id387682726?mt=8");
        if (b.href) {
            var m = b.href, n = c(), o = j.getElementById("buried"), p = n.ttid || o && o.value, q = n.refid, r = n.ali_trackid, s = n.pid, t = n.actparam, u = n.actname, v = n.ad_id, w = n.source_type, x = {from: e};
            if (p && (x.ttid = p), q && (x.refid = q), r && (x.ali_trackid = r), s && (x.pid = s), t && (x.actparam = t), u && (x.actname = u), v && (x.ad_id = v), w && (x.source_type = w), x.url = encodeURIComponent(location.href.split(/[?#]/)[0]), k && (x.h5_uid = k), x.ap_uri = "", b.point)
                for (var y in b.point)
                    x[y] = b.point[y];
            x = encodeURIComponent(JSON.stringify(x)), m = m.split("#"), -1 == m[0].indexOf("?") ? m[0] += "?" : m[0].indexOf("?") != m.length - 1 && (m[0] += "&"), m[0] += "point=" + x, m = m.join("#"), m = -1 != m.indexOf("://") ? m : "taobao://" + m, this.paramUrl = m
        }
        return !0
    },reset: function(a) {
        this.iClose || (this.init(a), this.resetHtml && this.resetHtml(a))
    },create: function() {
        this.iClose || (l.parentNode || (l.setAttribute("id", "J_smartFrame"), l.style.cssText = "display:none", j.body.appendChild(l)), this.frame = l)
    },download: function(b) {
        var c = Date.now();
        (!b || c - b < this.timeout + 200) && (this.cover ? a.location.replace(this.bannerUrl) : a.location.href = this.bannerUrl)
    },redirect: function(a) {
        var c = this.options && this.options.version, d = (this.frame, a ? "click_sb_" + c + "_manual" : "click_sb_" + c + "_auto");
        if (this.paramUrl) {
            var g = this.options;
            f({ap_uri: d,pageType: g.pageType,uaPoint: encodeURI(navigator.userAgent)}), this.paramUrl = this.paramUrl.replace("%22ap_uri%22%3A%22%22", encodeURIComponent('"ap_uri":"' + d + '"'));
            var h = {point: {uaPoint: encodeURI(navigator.userAgent)}}, i = e("tkmb");
            if ("string" == typeof i && i.length > 0) {
                var j = {}, k = i.split("&");
                if (k.length)
                    for (var l = 0; l < k.length; l++)
                        if (k[l]) {
                            var m = k[l].split("=");
                            j[m[0]] = m[1]
                        }
                var n = j.e;
                n && (h.params = {e: n,type: 2})
            }
            var o = this;
            b.callapp.gotoPage(o.paramUrl, h)
        }
    },install: function(a) {
        var b = this, c = Date.now();
        b.isDownload || (b.timeload = setTimeout(function() {
            b.download(c)
        }, b.timeout)), b.redirect(a)
    }}, b.smartbanner = function(a) {
        var c = a.type, d = b.smartbanner.BannerUI, e = b.smartbanner.PopUI;
        if ("banner" !== c && c) {
            if ("pop" === c) {
                if (e)
                    return new e(a)
            } else if ("func" === c)
                return b.smartbanner.getInstance(a)
        } else if (d)
            return new d(a)
    }, b.smartbanner.getInstance = function(a, b) {
        b || (b = Object.create({}));
        for (var c in m.prototype)
            b[c] = m.prototype[c];
        return m.call(b, a)
    }, b.smartbanner.aplus = f, b.smartbanner.getParam = c, b.smartbanner.ttidInTaobaoApp = g, b.smartbanner.uaInTaobaoApp = h, b.smartbanner.uaInAlipayApp = i
}(window, window.lib || (window.lib = {})), function(a, b) {
    function c(a) {
        var b = document.cookie;
        if (name = a + "=", start = b.indexOf(name), start < 0)
            return null;
        start += name.length;
        var c = b.indexOf(";", start);
        return c = -1 == c ? b.length : c, b.substring(start, c)
    }
    function d() {
        var a = decodeURIComponent(c("imewweoriw"));
        return a && a.length > 32
    }
    function e(a) {
        var b = window.localStorage;
        if (b) {
            var c = b[a], d = !1;
            if (c) {
                var c = parseInt(c, 10), e = new Date;
                e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), c > e && (d = !0)
            }
            return d
        }
    }
    function f(a, e) {
        a = a || 0;
        var f = (navigator.userAgent, j.ali_trackid), g = Boolean(f), h = c("tkmb"), i = h ? h.split("&") : null, k = /400000_.*@\w+_(iphone|android)_.*/i, l = /.+@taobao_(iphone|android|apad|ipad)_.+/i, m = j.ttid, n = m ? decodeURIComponent(m) : "", o = "" != n ? !0 : !1, p = j.ut_sk, q = p ? decodeURIComponent(p) : "", r = "" != q ? !0 : !1, s = q.match(/.+_(\d+)_.+/), t = j.iv, u = k.test(n), v = t && 1 == t || i && "iv=1" === i[1], w = "undefined" != typeof t && 1 == t || i && "iv=0" === i[1], x = g && null != f.match(/^1_.+/i) && ("undefined" == typeof e || 1 == e), y = g && null != f.match(/^1_.+/i) && "undefined" != typeof e && 0 == e, z = !0;
        (o && l.test(n) || "TB" === b.env.aliapp.appname) && (z = !1, !r || null == s || 12278902 != s[1] && 21380790 != s[1] || (z = !0)), b.smartbanner.uaInAlipayApp() && (z = !1);
        var A = "000";
        if (z) {
            var B = "1", C = "2", D = "1", E = "1", F = "2";
            u || v || x ? B = "0" : (w || y) && (B = "2");
            var G = b.env.browser, H = b.env.thirdapp;
            G.isQQ ? C = "0" : G.isUC ? C = "1" : H.isWeibo && (C = "3"), d() && (D = "0");
            var I = c("_w_app_lg"), J = 1, K = 2;
            I && (b.env.os.isIPhone && I & J ? E = "0" : b.env.os.isAndroid && I & K && (E = "0"));
            var L = document.referrer;
            u || H.isWeixin || null != L.match(/(t\.sina)|(weibo\.com)|(weibo\.cn)|(sina\.com)|(t\.cn)|(sinaurl)|(3g\.sina)|(iask\.cn)/i) ? F = "1" : (null != L.match(/(qq|baidu|hao123|google|soso)\.com/i) || null != L.match(/(m|wap)\.taobao\.com/i) || o && null != n.match(/^(12tx0065|b0tx02|eguc01|001001|51uc0003)$/i)) && (F = "0");
            try {
                A = window.strategy[a][B + C + D + E + F]
            } catch (M) {
                A = "000"
            }
        }
        var N = {};
        return A && ("1" == A.charAt(0) && (N.isInvoke = !0), "1" == A.charAt(1) && (N.isShow = !0), "1" == A.charAt(2) && (N.isInvokeDay = !0)), N
    }
    function g(a, b, c) {
        if (a) {
            var d, g = f(b, c);
            if (g.isInvoke && (d = d || i(a), d && d.redirect()), g.isInvokeDay && (d = d || i(a), !e("sb_cloudDate"))) {
                d && d.redirect();
                try {
                    localStorage.sb_cloudDate = Date.now()
                } catch (h) {
                }
            }
            return g.isShow && (d = d || i(a)), d
        }
    }
    var h = document, i = b.smartbanner, j = (i.aplus, i.getParam()), k = String.fromCharCode(97 + parseInt(24 * Math.random(), 10)), l = k + parseInt(1e7 * Math.random(), 10).toString(16), m = k + parseInt(100 * Math.random(), 10).toString(16), n = m + "dsk", o = function(a) {
        if (a.version = "v1", i.getInstance(a, this), !(this.calClose() || this.invaliable && b.smartbanner.uaInAlipayApp())) {
            this.setParam(a), this.createHtml(a)
        }
    };
    o.prototype = {constructor: o,status: !1,calClose: function() {
        var a = window.localStorage;
        if (a) {
            var b = a.closeDate;
            if (b) {
                var b = parseInt(b, 10), c = new Date;
                c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0), b > c && (this.iClose = !0)
            }
            return this.iClose
        }
    },setParam: function(a) {
        var b = a.color ? "color:" + a.color + ";" : "", c = a.bgcolor ? "background-color:" + a.bgcolor + ";" : "";
        this.bodyOrigPT = parseInt(window.getComputedStyle(document.body).paddingTop, 10), this.showCB = a.showCallback, this.hideCB = a.hideCallback, this.styles = b + c, this.isHide = a.hide || !1, this.text = a.text || "立即打开", this.title = a.title || "上手机淘宝客户端，保障交易安全", this.icon = a.icon || "data:image/png;base64,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", this.isIpad && (this.title = this.title.replace(/(手机)?淘宝/gi, "淘宝HD")), this.isTop = "top" === a.position ? !0 : !1, this.status = !1
    },template: function() {
        var a = this.isHide, b = ['<div id="' + l + '" class="' + n + '" ' + (a ? 'style="display:none"' : "") + ">", '<a id="' + l + '-close" class="' + m + '-close" href="#"></a>', '<a id="' + l + '-open" class="' + m + '-point" href="#">', '<p class="' + m + '-font">', '<b class="' + m + '-taobao"><img src = "' + this.icon + '"></b>', "<span>" + this.title + "</span>", '<b class="' + m + '-dl" style="' + this.styles + '">' + this.text + "</b>", "</p>", "</a>", "</div>"];
        return b.join("")
    },resetHtml: function(a) {
        this.setParam(a);
        var b = ['<b class="' + m + '-taobao"></b>', "<span>" + this.title + "</span>", '<b class="' + m + '-dl" style="' + this.styles + '">' + this.text + "</b>"].join("");
        this.smartDom && (this.smartDom.querySelector("." + m + "-font").innerHTML = b)
    },createHtml: function(a) {
        if (!this.iClose) {
            var b = this.template(), c = h.createElement("style"), d = h.createElement("div"), e = a.dpr || window.dpr || 1, f = this.isTop;
            d.innerHTML = b, this.smartDom = d.querySelector("#" + l), this.popDom = i({type: "pop",title: this.title,dpr: e});
            var g = f ? "." + n + "{background-color:#5f646e;position:fixed;top:0;left:0;height:" + 42 * e + "px;width:100%;-webkit-transform: translateZ(1000px);transform: translateZ(1000px);font-size:" + 12 * e + "px}" : "." + n + "{background-color:#5f646e;position:fixed;bottom:0;left:0;height:" + 42 * e + "px;width:100%;-webkit-transform: translateZ(1000px);transform: translateZ(1000px);font-size:" + 12 * e + "px}";
            c.innerHTML = g + "." + m + "-point{color:#fff;display:block;text-decoration:none;height:100%;}." + m + "-close{position:absolute;left:0;top:0;height:" + 42 * e + "px;line-height:" + 42 * e + "px;width:" + 35 * e + "px;}." + m + '-close::before{content:"\\d7";color:#fff;text-decoration: none;display: inline-block;font-size: ' + 12 * e + "px;width: " + 16 * e + "px;height: " + 16 * e + "px;line-height: " + 16 * e + "px;margin-left: " + 8.5 * e + "px;border: 1px solid #fff; border-radius: 50%;text-align: center;}." + m + "-font{margin:0 0 0 " + 40 * e + "px;display:-webkit-box;display:flex;height:100%;overflow:hidden;-webkit-box-align:center;align-items:center;}." + m + "-taobao{margin:0 " + 8 * e + "px 0 0;width:" + 30 * e + "px;height:" + 30 * e + "px;display:inline-block;vertical-align:top;}." + m + "-taobao img{width:100%;height:100%;}." + m + "-font > span{-webkit-box-flex:1;flex:1;display:block;line-height:120%;padding-right:" + 10 * e + "px;}." + m + "-dl{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;color:#fff;background-color:#FF5000;height:100%;;text-align:center;font-weight:normal;font-size:" + 14 * e + "px;padding:0 " + 8 * e + "px;}", h.body.appendChild(c), h.body.appendChild(this.smartDom), f && (document.body.style.paddingTop = this.bodyOrigPT + this.smartDom.getBoundingClientRect().height + "px"), this.show(), this.listen()
        }
    },show: function(a) {
        this.iClose || (this.smartDom && (this.smartDom.style.display = "block"), this.status = !0, a && a() || this.showCB && this.showCB())
    },hide: function(a) {
        this.iClose || (this.smartDom && (this.smartDom.style.display = "none"), this.isTop && (document.body.style.paddingTop = this.bodyOrigPT + "px"), this.status = !1, a && a() || this.hideCB && this.hideCB())
    },pop: function() {
        this.iClose || this.popDom && this.popDom.open()
    },listen: function() {
        if (!this.iClose) {
            var a = this, b = a.smartDom;
            b.querySelector("#" + l + "-close").addEventListener("click", function(b) {
                b.preventDefault(), a.hide();
                try {
                    localStorage.closeDate = Date.now(), a.calClose()
                } catch (b) {
                }
            }, !1), b.querySelector("#" + l + "-open").addEventListener("click", function(b) {
                b.preventDefault(), a.install(!0)
            })
        }
    }}, b.smartbanner.expiresInDay = e, b.smartbanner.smtStatus = f, b.smartbanner.sbLogic = g, b.smartbanner.BannerUI = o
}(window, window.lib || (window.lib = {})), function(a, b) {
    function c(a) {
        return a.preventDefault(), !1
    }
    var d, e, f, g, h, i = a.document, j = a.localStorage, k = b.smartbanner, l = (k.aplus, !1), m = ['<div class="c-smartpop">', '<section class="header">', '<a href="javascript:void(0)"></a>', "</section>", '<section class="title">', "<span>淘宝客户端不仅可以更流畅地收藏宝贝，还能分享，立刻下载体验！</span>", "</section>", '<section class="banner">', '<img border="0"></img>', "</section>", '<section class="action">', '<a href="javascript:void(0)">立即打开</a>', "</section>", "</div>"].join(""), n = document.createElement("div"), o = document.createElement("style");
    try {
        j.setItem("testPrivateModel", "false")
    } catch (p) {
        j = null
    }
    var q = function(a) {
        a.version = "v2", k.getInstance(a, this), this.title = a.title, this.isIpad && this.title && (this.title = this.title.replace(/(手机)?淘宝/gi, "淘宝HD")), this.banner = a.banner
    };
    q.prototype = {constructor: q,_render: function(a) {
        var b = this, c = b.options.dpr || 1, k = [".c-smartpop-wrap {", "width: 100%;height: 100%;top: 0;left: 0;position: absolute;z-index: 999;background: rgba(0,0,0,0);display: -webkit-box;-webkit-box-pack: center;-webkit-box-align: center;", "}", ".c-smartpop {", "width: 252px * @dpr;background-color: rgba(255,255,255,0.9);border: 1px solid rgba(51,51,51,0.18);-webkit-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.27);box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.27);border-radius: 4px * @dpr;", "}", ".c-smartpop .header {", "width: 100%;height: 34px * @dpr;position: relative;", "}", ".c-smartpop .header a {", "display: inline-block;width: 14px * @dpr;height: 14px * @dpr;position: absolute;", "background: url(data:image/gif;base64,R0lGODlhHAAcAJEAAP///8zMzJmZmWZmZiH5BAAHAP8ALAAAAAAcABwAAAJWjICpyyk2TptMRGAlpdnd3XSKCHra+JVklXJt+C6re6L1NmMxuOalLvH9gMKhbmdEWJDGTFH1edJsSSDrNoVhrzim0vvdWn8+qexl5oarpjE7bHjLAgUAOw==) no-repeat 0 0;", "background-size: contain;top: 8px * @dpr;right: 8px * @dpr;opacity: 0.9;-webkit-tap-highlight-color:rgba(0,0,0,0);", "}", ".c-smartpop .title {", "height: 32px * @dpr;line-height: 16px * @dpr;font-size: 12px * @dpr;margin: 0 12px * @dpr 8px * @dpr;padding-left: 36px * @dpr;", "background: url(data:image/gif;base64,R0lGODlhOAA4ALMAAP//////zP/MzP/Mmf/MZv+Zmf+ZZv+ZM/+ZAP9mM/9mAP8zAMxmM8xmAAAAAAAAACH5BAAHAP8ALAAAAAA4ADgAAAT/EEgwjGoqY51v3x4nhuRmDFOakF3rvnAsN0kKsHKu79/E8MBgrjYQGo+dwQHJDC6b0Kh0Sq1ar9isdstFGgoGS6cmMKy6L0GqmDGkBBXXIpM4Uws2gDhPKQ8EAXxldkxqNkVuNoZ8fAVQKDaOgYxvAgQFA5MTAk0HeQqQjJZPLombTScSSgqUAI45phKkUYuMhDCRXpxJbwa1YjmHRzUAASuxAAfIJ1/MYBWOtbtCmnoKB4YrrYwKtQFGyNYKBgjd23zmKUfYuRmh36w2MbU3XjZPkJza8jD0nYtFErAzc4CYioIIV/iDcsrTOXQLUUng5PChvIhMIAW8xKxCHmiXpwYUwThsgoVmFc58GqeGDUkjizLck8lPRboJTRbtmhlPHSiTNyVkTLHHZk+ceNR5QxKqWAcbxo5S8vXmSFNxPy0qqjYNyNV6bSwOSBCKHgEhX4GFpQSng4EA0Wzc0hEORoKOzEgVKEiHXlcgZCe8EmKQ0lwgBwLZYytllhNAUAU4RkO5suXLmDNr3mx5MucOB9h8foHiMGeDo1skqGb68uqPnimHThEBADs=) no-repeat 0 center;", "background-size: 28px * @dpr 28px * @dpr;color: #666;", "}", ".c-smartpop .banner {", "height: 88px * @dpr;margin: 0 12px * @dpr 10px * @dpr;overflow: hidden;", "}", ".c-smartpop .banner img {", "border: 0px;width: 100%;height: 100%;", "}", ".c-smartpop .action {", "height: 28px * @dpr;text-align: center;margin: 0 auto 12px * @dpr;", "}", ".c-smartpop .action a {", "display: inline-block;height: 28px * @dpr;line-height: 28px * @dpr;background-color: rgb(255,102,0);", "border-radius: 3px * @dpr;text-align: center;-webkit-box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05), inset 0px 1px 3px 0px rgba(169,172,175,0.31);", "box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05), inset 0px 1px 3px 0px rgba(169,172,175,0.31);font-size: 14px * @dpr;", "color: #FFF;text-decoration: none;-webkit-tap-highlight-color:rgba(0,0,0,0);margin: 0 10px * @dpr;padding: 0 8px * @dpr;", "}", ".c-smartpop .action a:hover, .c-smartpop .action a.hover {", "background-color: #EF5F00;", "}"].join("").replace(/(\d+)px\s+\*\s+\@dpr/gi, function(a, b) {
            return parseFloat(b) * c + "px"
        });
        n.className = "c-smartpop-wrap", n.innerHTML = m, n.style.cssText = "display:none", d = n.querySelector(".c-smartpop"), e = n.querySelector(".header a"), f = n.querySelector(".title span"), g = n.querySelector(".banner"), e_bannerImg = n.querySelector(".banner img"), h = n.querySelector(".action a"), e.addEventListener("click", function(a) {
            a.preventDefault(), j && j.setItem("smpopCloseDate", Date.now()), b.close()
        }, !1), h.addEventListener("touchstart", function(a) {
            h.className = "hover"
        }, !1), h.addEventListener("touchend", function(a) {
            h.className = ""
        }, !1), h.addEventListener("click", function(a) {
            a.preventDefault(), b.install(!0)
        }, !1), o.innerHTML = k, i.body.appendChild(o), i.body.appendChild(n)
    },_show: function() {
        var b = this, d = a.scrollY, e = a.innerHeight;
        f.innerHTML = b.title, b.banner ? (g.style.display = "", e_bannerImg.setAttribute("src", b.banner)) : g.style.display = "none", n.style.top = d + "px", n.style.height = e + "px", n.style.display = "", n.addEventListener("touchmove", c, !1)
    },open: function() {
        if (!this.invaliable) {
            if (j) {
                var a = parseInt(localStorage.getItem("smpopCloseDate")), b = new Date;
                if (b.setHours(0), b.setMinutes(0), b.setSeconds(0), b.setMilliseconds(0), a > b.getTime())
                    return
            }
            l || (l = !0, this._render()), this._show()
        }
    },close: function() {
        this.invaliable || l && (n.style.display = "none", n.removeEventListener("touchmove", c, !1))
    }}, k.PopUI = q
}(window, window.lib || (window.lib = {}));
!function(a, b) {
    function c(a) {
        var b = document.cookie;
        if (name = a + "=", start = b.indexOf(name), start < 0)
            return null;
        start += name.length;
        var c = b.indexOf(";", start);
        return c = -1 == c ? b.length : c, b.substring(start, c)
    }
    function d(a, b) {
        if (a) {
            for (var b = b && ("string" == typeof b ? JSON.parse(b) : b), c = b && b.page || window.smartbannerJSON.page, d = {}, i = 0, j = c.length; j > i; i++)
                if (c[i].pageType.toLowerCase() === a.toLowerCase()) {
                    d = c[i].config;
                    break
                }
            if (0 === Object.keys(d).length)
                return {};
            for (var k = {}, l = e(), m = {}, i = 0, j = d.length; j > i; i++)
                if (m = d[i], !f(m) && m.type.toLowerCase() === l) {
                    k = m;
                    break
                }
            if (0 === Object.keys(k).length)
                return {};
            var n = h() && k.androidhref || g() && k.iphonehref || function() {
                return ""
            }();
            if (n) {
                var o = n.split("?"), p = o[0], q = o.length > 1 ? o[1] : "", r = location.search.slice(1), s = q && r && q + "&" + r || q || r;
                s && (n = p + "?" + s)
            }
            return {title: k.title || "",text: k.text || "",color: k.color || "",bgcolor: k.bgcolor || "",icon: k.icon || "",href: n || "",url: k.url || "",pageType: a,sceneType: l}
        }
    }
    function e() {
        var a = "default";
        return "1" === c("ntm") && (a = "fresh"), a
    }
    function f(a) {
        return 0 === Object.keys(a).filter(function(b) {
            return "" !== a[b]
        }).length
    }
    function g() {
        var a = window.navigator.userAgent;
        return /iPhone/.test(a)
    }
    function h() {
        var a = window.navigator.userAgent;
        return /Android/.test(a)
    }
    function i() {
    }
    b.smartbanner.getSettings = i, b.smartbanner.getText = d
}(window, window.lib || (window.lib = {}));

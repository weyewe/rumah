(function (f) {
    MortgageCalculator = function () {
        this.initialize.apply(this, arguments)
    };
    MortgageCalculator.rules = {
        ".mc-container": "cursor: default; font-family: Verdana, Arial, san-serif; text-align: left",
        ".mc-title": "font-family: Arial, san-serif; font-weight: bold; font-size: 12pt",
        ".mc-body": "padding: 10px; border: 1px solid; -moz-border-radius: 7px; -webkit-border-radius: 7px",
        ".mc-clear": "clear: both",
        ".mc-logo": "float: right; margin: 0 0 5px 0; border: 0",
        ".mc-graph": "display: none; margin: 10px 0 0 0",
        ".mc-legend": "display: inline-block; margin: 0 5px 0 0; line-height: 7pt; font-size: 7pt; width: 7pt; height: 7pt",
        ".mc-scroll": "margin: 0; overflow-x: hidden; overflow-y: scroll;",
        ".mc-message": "font-size: 8pt",
        ".mc-button": "cursor: pointer; float: right; width: 100%; height: 30px; padding: 1px; border: 1px solid; -moz-border-radius: 4px; -webkit-border-radius: 4px; font-family: Arial, san-serif; font-size: 11pt; font-weight: bold;",
        ".mc-footer": "margin: 2px 0 0 0; font-family: Arial, san-serif; font-size: 7.5pt; text-align: right",
        ".mc-navs": {
            self: "margin: 0; padding: 0; line-height: 25px; font-family: Arial, san-serif; font-size: 11pt; font-weight: bold; text-align: center",
            ".mc-nav": "width: 25px; height: 25px; margin: 0; padding: 1px; border: 1px solid; -moz-border-radius: 3px; -webkit-border-radius: 3px; font-family: Arial, san-serif; font-size: 11pt; font-weight: bold",
            ".mc-pressed": "padding: 2px 0 0 2px"
        },
        ".mc-small": "height: 25px; font-size: 9pt",
        ".mc-pressed": "padding: 2px 0 0 2px",
        ".mc-tables": "position: relative; overflow: hidden; height: 92px !important; margin: 10px 0 0 0; text-align: left",
        ".mc-fields": {
            self: "float: left; margin: 0 10px 0 0",
            "*": "float: left",
            label: "width: 110px; line-height: 20px; font-size: 9pt; font-weight: bold; text-align: left",
            input: "margin: 0 0 5px 0; padding: 2px; width: 90px; border: 1px solid; font-family: Arial, san-serif; font-size: 10pt; text-align: right",
            select: "margin: 0 0 5px 0; padding: 2px; width: 96px; border: 1px solid; font-family: Arial, san-serif; font-size: 10pt",
            div: "padding: 0 0 0 5px; width: 25px; line-height: 20px; font-size: 8pt; text-align: left",
            br: "clear: left"
        },
        ".mc-tabs": {
            self: "position: absolute; margin: 10px 0 0 0; padding: 0; list-style-type: none; z-index: 100",
            ".mc-tab": "cursor: pointer; float: left; margin: 0; padding: 0 10px 0 10px; line-height: 28px; border: 1px solid; -moz-border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius-bottomleft: 0; -moz-border-radius-bottomright: 0; -webkit-border-bottom-left-radius: 0; -webkit-border-bottom-right-radius: 0; font-family: Arial, san-serif; font-size: 11pt; font-weight: bold",
            ".mc-active": "line-height: 28px; border-bottom: 0"
        },
        ".mc-panes": {
            ".mc-pane": "display: none; position: relative; top: 38px; margin: 0 0 38px 0; padding: 10px; overflow: hidden; border: 1px solid; -moz-border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius-topleft: 0; -webkit-border-top-left-radius: 0; font-size: 9pt",
            "p:first-child": "margin: 0",
            p: "margin: 1em 0 0 0",
            a: "font-size: 7.5pt",
            ul: "margin: 0 0 5px 20px; padding: 0",
            li: "padding: 1em 0 0 0"
        },
        ".mc-errors": {
            self: "margin: 0 0 5px 20px; padding: 0; list-style-type: square",
            li: "padding: 1em 0 0 0"
        },
        ".mc-table": {
            self: "table-layout: fixed; width: 100%; border-collapse: collapse",
            th: "padding: 0 0 2px 0; font-size: 9pt; font-weight: bold; text-align: center",
            td: "padding: 0; line-height: 2em; border: 1px solid; font-size: 9pt; text-align: center",
            sup: "font-family: Verdana, Arial, san-serif; vertical-align: top"
        },
        ".mc-widget": {
            ".mc-title": "font-size: 11pt; text-align: center",
            ".mc-body": "padding: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; text-align: center",
            ".mc-logo": "float: none; text-align: center",
            ".mc-graph": "margin: 0",
            ".mc-legend": "margin: 0 4px 0 0; line-height: 5pt; font-size: 5pt; width: 5pt; height: 5pt",
            ".mc-button": "float: none; clear: left; width: 100%; margin: 5px 0 0 0",
            ".mc-footer": "text-align: left",
            ".mc-fields": {
                self: "margin: 0",
                label: "margin: 0 0 0 2px; width: 65px; line-height: 18px; font-family: Arial, san-serif; font-size: 9pt",
                input: "margin: 0 0 4px 0; width: 66px; font-size: 8pt",
                select: "margin: 0 0 4px 0; width: 72px; font-size: 8pt",
                div: "padding: 0 0 0 4px; width: 18px; line-height: 18px; font-family: Arial, san-serif; font-size: 7pt"
            },
            ".mc-panes": {
                ".mc-pane": "position: static; top: 0; margin: 10px 0 0 0; padding: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px"
            },
            ".mc-tab": "line-height: 28px; margin: 0; padding: 0 5px 0 5px; font-family: Arial, san-serif; font-size: 11pt; font-weight: bold",
            ".mc-table": {
                self: "position: absolute",
                th: "padding: 0; font-family: Arial, san-serif; font-size: 9pt; text-align: left",
                td: "padding: 0 2px 0 2px; line-height: 2em; font-family: Arial, san-serif; font-size: 8pt; text-align: right"
            }
        }
    };
    f.extend(MortgageCalculator.prototype, {
        F: function () {
            return false
        },
        Z: function (b, a, e) {
            b = this.N(b, e);
            return isNaN(b) ? a : b
        },
        N: function (b, a) {
            b = parseFloat(b instanceof f ? b.val() : b);
            if (isNaN(b) || !a) return b;
            a = Math.pow(10, a);
            return Math.round(b * a) / a
        },
        $: function (b) {
            b = this.N(b, 2);
            var a = b < 0 ? "-" : "",
                e = parseInt(b = Math.abs(b), 10) + "",
                c = (c = e.length) > 3 ? c % 3 : 0;
            return "$" + a + (c ? e.substr(0, c) + "," : "") + e.substr(c).replace(/(\d{3})(?=\d)/g, "$1,") + "." + Math.abs(b - e).toFixed(2).slice(2)
        },
        P: function (b) {
            var a = [];
            f.each(b, function (e, c) {
                a.push(e + "=" + c)
            });
            return a.join("&")
        },
        B: function () {
            var b = f.makeArray(arguments),
                a = b.shift(),
                e = b.shift();
            return function () {
                return e.apply(a, b.concat(f.makeArray(arguments)))
            }
        },
        E: function (b, a, e) {
            var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.",
                h = [];
            a = a || Math.max.apply({}, b);
            e = e || 4095;
            for (var d = 0; d < b.length; d++) if (b[d] != null) {
                var n = Math.round(b[d] * e / a),
                    j = Math.floor(n / c.length);
                n = n - c.length * j;
                h.push(c.charAt(j) + c.charAt(n))
            } else h.push("__");
            return h.join("")
        },
        C: function (b) {
            var a =
            this.colors.value;
            return f(b).map(function (e, c) {
                return a[c.constructor == Array ? c[0] : c].substr(1)
            }).get().join()
        },
        proper: function (b) {
            return b.substr(0, 1).toUpperCase() + b.substr(1).toLowerCase()
        },
        table: function (b) {
            return f("<table/>").addClass("mc-table").attr({
                cellspacing: 0,
                cellpadding: 0
            }).appendTo(b)
        },
        column: function (b, a, e) {
            f.each(b, function () {
                f(this).find("tr").find(":nth-child(" + a + ")")[e ? "show" : "hide"]()
            })
        },
        row: function (b, a, e) {
            if (a) b.find("tr:nth-child(" + a + ")")[e ? "show" : "hide"]();
            else return f("<tr/>").appendTo(b)
        },
        cell: function (b, a) {
            return f("<td/>").css(this.colors.css.table).html(a || "").appendTo(b)
        },
        head: function (b, a, e) {
            b = f("<th/>").appendTo(b);
            e && this.legend(b, e);
            return b.append(f("<span/>").text(a)).append("<sup/>")
        },
        legend: function (b, a) {
            f("<span/>").addClass("mc-legend").css("background", this.colors.value[a.toLowerCase()]).html("&nbsp;").appendTo(b)
        },
        message: function (b, a, e) {
            var c = this,
                h = c.values,
                d = h.input;
            h = h.value;
            a.find("sup").html(d.pmi > 0 ? " &dagger;" : "");
            if (d.pmi > 0) {
                d = h.down >= 0.2 ? "PMI is not included with a down payment of 20% or greater" : "PMI is cancelled after " + c.N(h.pmiTerm / 12, 1).toFixed(1) + " years when 20% of the principal has been paid";
                b ? b.append("&dagger; " + d + "<br/>") : a.attr("title", d)
            }
            e.find("sup").html(h.extra > 0 ? " &Dagger;" : "");
            if (h.extra > 0) {
                d = "The loan is paid off in " + c.N(h.paymentTerm / 12, 1).toFixed(1) + " years with the extra monthly payments";
                b ? b.append("&Dagger; " + d) : e.attr("title", d)
            }
        },
        pane: function (b) {
            var a = this,
                e = a.objects,
                c = e.pane;
            if (a.errors.length > 0) b = "error";
            else if (!a.processed) return;
            a[b]();
            c && c.stop().hide();
            c = e.panes[b];
            if (a.animate && c != undefined) {
                b = a.quirks ? a.widget ? 12 : 22 : 0;
                a = e.pane ? e.pane.height() + b : 0;
                e.pane = c.show().data("height", c.data("height") || c.height() + b).height(a + b).preAnim().animate({
                    height: c.data("height")
                }, {
                    duration: 750,
                    easing: "mc",
                    complete: c.postAnim
                })
            } else if (c != undefined) e.pane = c.show()
        },
        error: function () {
            var b = this,
                a = b.objects.errors;
            if (a) {
                a.empty();
                f.each(b.errors, function () {
                    f("<li></li>").html(this.replace(/'(.+)'/, "<b>$1</b>")).appendTo(a)
                })
            }
        },
        payment: function (b) {
            label = function (q, x, y) {
                return f(q).map(function (v, w) {
                    return w[1] + " (" + (x[v] * 100 / y).toFixed(0) + "%)"
                }).get().join("|")
            };
            var a = this,
                e = a.objects,
                c = e.payment,
                h = a.values,
                d = a.colors,
                n = a.fields;
            e = a.widget;
            var j = c.groups,
                m = c.headers;
            if (b) {
                var k = c.index || 0;
                e = c.index = (k + b + j.length) % j.length;
                d = j[e];
                var g = c[j[k]].table.stop(true, true);
                k = c[d].table.stop(true, true);
                c.title.text(a.proper(d) + (e == 2 ? "" : "ly"));
                if (a.animate) {
                    j = (g.width() + 10) * b;
                    g.animate({
                        left: j
                    }, {
                        duration: 750,
                        easing: "mc",
                        complete: function () {
                            g.hide().css("left", 0)
                        }
                    });
                    k.css({
                        left: -j
                    }).show().animate({
                        left: 0
                    }, {
                        duration: 750,
                        easing: "mc"
                    })
                } else {
                    g.hide();
                    k.show()
                }
            } else {
                k = h.value;
                var s = h.payment;
                g = s.total;
                var o = n.taxes.enabled,
                    A = n.insurance.enabled,
                    C = n.pmi.enabled,
                    t = o || A || C,
                    u = A ? C ? "Ins/PMI" : "Insurance" : "PMI";
                if (!s.processed) {
                    f.each(j, function (q, x) {
                        f.each(m, function (y, v) {
                            c[x][v].html(a.$(s[x][v]))
                        })
                    });
                    if (e) {
                        f.each(j, function () {
                            var q = c[this],
                                x = q.table;
                            a.message(null, q.head.insurance.find("span:last").text(u).end(), q.head[t ? "total" : "payment"]);
                            a.row(x, 2, o);
                            a.row(x, 3, A || C);
                            a.row(x, 4, t)
                        });
                        c.tables.height(c.total.table.find("tr:visible").size() * 23 + (a.browser.opera ? 2 : 0))
                    } else {
                        h = c.table;
                        a.message(c.message.empty(), c.head.insurance.find("span:last").text(u).end(), c.total.head);
                        a.column(h, 3, o);
                        a.column(h, 4, A || C);
                        a.column(h, 5, t)
                    }
                    j = a.width - (e ? 24 : 44);
                    n = 90;
                    h = {
                        cht: "p3",
                        chf: "bg,s," + d.pane.back.substr(1)
                    };
                    if (k.taxes + k.insurance + k.pmi > 0) {
                        d = [
                            ["payment", "Payment"]
                        ];
                        b = [g.payment];
                        if (k.taxes > 0) {
                            d.push(["taxes", "Taxes"]);
                            b.push(g.taxes)
                        }
                        if (k.insurance > 0 || k.pmi > 0) {
                            d.push(["insurance", u]);
                            b.push(g.insurance)
                        }
                        c.legend.show();
                        c.graph.width(j = e ? j : a.N(j / 2, 0)).height(n).attr("src", a.google + a.P(f.extend({}, h, {
                            chs: j + "x" + n,
                            chco: a.C(d),
                            chd: "e:" + a.E(b),
                            chl: e ? "" : label(d, b, g.total)
                        }))).show()
                    } else {
                        c.graph.hide();
                        c.legend.hide()
                    }
                    if (!e) {
                        d = [
                            ["principal", "Principal"],
                            ["interest", "Interest"]
                        ];
                        b = [g.principal, g.interest];
                        if (k.extra > 0) {
                            d.push(["extra", "Extra"]);
                            b.push(g.extra)
                        }
                        c.graph2.width(j).height(n).attr("src", a.google + a.P(f.extend({}, h, {
                            chs: j + "x" + n,
                            chco: a.C(d),
                            chd: "e:" + a.E(b),
                            chl: label(d, b, g.payment)
                        }))).show()
                    }
                    s.processed = true
                }
            }
        },
        amort: function (b) {
            var a = this,
                e = a.objects,
                c = e.amort,
                h = a.values;
            e = a.colors;
            var d = a.fields,
                n = a.widget,
                j = h.input,
                m = h.value,
                k = h.payment,
                g = k.total,
                s = h.amort,
                o = s.month,
                A = s.year,
                C = d.taxes.enabled,
                t = d.insurance.enabled,
                u = d.pmi.enabled,
                q = d.extra.enabled;
            q = q ? "Prin/Xtra" : "Principal";
            var x = t ? u ? "Ins/PMI" : "Insurance" : "PMI";
            if (b) {
                b = a.popup;
                j = 0;
                var y = Math.max(Math.ceil(d.count / 2), 3),
                    v;
                c = f("<div/>");
                var w;
                if (!b || b.closed) {
                    t = f.browser.msie;
                    s = MortgageCalculator.style;
                    v = t ? s.cssText : f(s.cssRules).map(function () {
                        return this.cssText
                    }).get().join("");
                    b = a.popup = window.open("", t ? null : "mc-popup", "width=700,height=400,menubar=yes,location=no,status=no,scrollbars=yes");
                    b.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><style type="text/css">body{margin:0;padding: 15px}' + v + '</style></head><body class="mc-container" style="width: auto"></body></html>');
                    b.document.close()
                } else b.focus();
                s = f(b.document).find("body").empty();
                w = a.table(c).css("table-layout", "auto").width("auto").append('<col width="120"/><col width="140"/><col width="140"/><col width="140"/>');
                v = [];
                f.each(d, function (i, l) {
                    if (l.enabled) {
                        var r = l.label.split("|")[0];
                        l = h.input[i];
                        var p = j % y;
                        p = v[p] || (v[p] = a.row(w));
                        a.head(p, r).css("text-align", "left");
                        a.cell(p, i == "term" ? l + " years" : i == "interest" ? l.toFixed(2) + "%" : a.$(l) + (i == "taxes" || i == "insurance" ? " /yr" : i == "pmi" || i == "extra" ? " /mo" : ""));
                        j++
                    }
                });
                for (j = d.count; j < y * 2; j++) a.head(v[j % y], "").attr("colSpan", 2);
                w.find("th:odd").css("padding", "0 0 0 20px");
                w = a.table(c).css("margin", "15px 0 0 0");
                v = a.row(w);
                f.each(["Month", q, "Interest", "Taxes", x, "Balance"], function (i, l) {
                    a.head(v, l).width(i == 0 ? 50 : "auto")
                });
                for (q = 0; q < h.value.paymentTerm; q++) {
                    a.cell(v = a.row(w), q + 1);
                    f.each([o.principal[q] + o.extra[q], o.interest[q], o.taxes[q], o.insurance[q], o.balance[q]], function () {
                        a.cell(v, a.$(this))
                    })
                }
                a.head(v = a.row(w), "Total");
                a.head(v, a.$(g.principal + g.extra));
                a.head(v, a.$(g.interest));
                a.head(v, a.$(g.taxes));
                a.head(v, a.$(g.insurance));
                v.find("th").css("padding", "10px 0 0 0");
                w.find("td:last-child").css({
                    background: e.value.total,
                    borderLeftWidth: 2
                }).end().find("tr:nth-child(12n+2):not(:first) td").css({
                    borderTopWidth: 2
                });
                a.column(w, 4, C);
                a.column(w, 5, t || u);
                s.append(c.html());
                n || window.setTimeout(function () {
                    b.print()
                }, 100)
            } else if (!n) if (!s.processed) {
                w = c.table;
                n = c.head;
                d = c.foot;
                f.each(w.find("tr"), function (i) {
                    var l = f(this);
                    i < m.paymentTerm ? l.show().children(":first").next().text(a.$(o.principal[i] + o.extra[i])).next().text(a.$(o.interest[i])).next().text(a.$(o.taxes[i])).next().text(a.$(o.insurance[i])).next().text(a.$(o.balance[i])) : l.hide()
                });
                a.column([n, w, d], 4, C);
                a.column([n, w, d], 5, t || u);
                d.find("th:first").next().text(a.$(g.principal + g.extra)).next().text(a.$(g.interest)).next().text(a.$(g.taxes)).next().text(a.$(g.insurance));
                n.principal.find("span:last").text(q);
                a.message(c.message.empty(), n.insurance.find("span:last").text(x).end(), n.total);
                b = a.width - 44;
                n = 130;
                o = k.year.total;
                g = ["principal", "interest"];
                m.extra > 0 && g.unshift("extra");
                m.taxes > 0 && g.push("taxes");
                if (m.pmi > 0 || m.insurance > 0) g.push("insurance");
                e = {
                    cht: "bvs",
                    chm: "D," + e.value.balance.substr(1) + "," + g.length + ",0,2,0",
                    chbh: "a,4",
                    chs: b + "x" + n,
                    chxt: "x,y",
                    chxl: "0:|" +
                    function (i, l) {
                        for (; l++ <= h.input.term;) i.push(l);
                        return i.join("|")
                    }([], 0) + "|1:|$0|$" + k.month.total.toFixed(0),
                    chf: "bg,s," + e.pane.back.substr(1),
                    chco: a.C(g),
                    chd: "e" + g.length + ":" + (m.extra > 0 ? a.E(A.extra, o) + "," : "") + a.E(A.principal, o) + "," + a.E(A.interest, o) + (m.taxes > 0 ? "," + a.E(A.taxes, o) : "") + (m.pmi > 0 || m.insurance > 0 ? "," + a.E(A.insurance, o) : "") + "," + a.E(A.balance)
                };
                c.graph.width(b).height(n).attr("src", a.google + a.P(e)).show();
                s.processed = true
            }
        },
        validate: function () {
            V = function (d, n, j, m, k) {
                if (b.fields[d].enabled) {
                    d = e[d];
                    var g =
                    d.val(),
                        s = d.data("label"),
                        o;
                    if (g.length > 0) {
                        g = parseFloat(g);
                        if (isNaN(g)) o = "The '" + s + "' field must be a number.";
                        else if (g < j || g > m) o = "The '" + s + "' field must be " + (g < j ? "greater" : "less") + " than or equal to " + (g < j ? j : m).toFixed(n) + "."
                    } else if (k) o = "The '" + s + "' field is required.";
                    d.css("background", b.colors.input[o ? "error" : "back"]).attr("title", o);
                    o && a.push(o)
                }
            };
            var b = this,
                a = b.errors,
                e = b.objects,
                c = b.bounds;
            a.length = 0;
            V("principal", 2, c.min.principal || 0, c.max.principal || Number.MAX_VALUE, true);
            V("interest", 2, c.min.interest || 0, c.max.interest || Number.MAX_VALUE, true);
            V("term", 0, c.min.term || 0, c.max.term || Number.MAX_VALUE, true);
            var h = b.Z(e.principal, Number.MAX_VALUE);
            V("down", 2, c.min.down || 0, c.max.down || h, false);
            V("taxes", 2, c.min.taxes || 0, c.max.taxes || h, false);
            V("insurance", 2, c.min.insurance || 0, c.max.insurance || h, false);
            V("pmi", 2, c.min.pmi || 0, c.max.pmi || h, false);
            V("extra", 2, c.min.extra || 0, c.max.extra || h, false);
            return a.length == 0
        },
        calculate: function () {
            add = function (t, u, q) {
                t[u] = (t[u] || 0) + q
            };
            accum = function (t) {
                return Math.pow(1 + d.interest, t - d.term)
            };
            paid = function (t) {
                var u, q = d.extra,
                    x;
                if (q == 0) {
                    u = accum(t - 1);
                    t = d.payment * (1 - u);
                    u = d.payment * u
                } else {
                    x = d.balance;
                    t = b.N(d.interest * x, 2);
                    u = d.payment - t;
                    if (x - u - q < 0) if (x > u) q = x - u;
                    else {
                        u = x;
                        q = 0
                    }
                    d.balance = x - u - q
                }
                return {
                    interest: t,
                    principal: u,
                    extra: q
                }
            };
            balance = function (t) {
                if (d.extra == 0) return d.payment * (1 - accum(t)) / d.interest;
                return d.balance
            };
            var b = this,
                a = b.objects,
                e = b.values,
                c = b.fields,
                h = e.input = {},
                d = e.value = {},
                n = e.payment = {
                    month: {},
                    year: {}
                },
                j = n.total = {
                    principal: 0,
                    extra: 0,
                    interest: 0
                },
                m = e.amort = {},
                k = m.month = {
                    principal: [],
                    extra: [],
                    interest: [],
                    taxes: [],
                    insurance: [],
                    balance: []
                };
            m = m.year = {
                principal: [],
                extra: [],
                interest: [],
                taxes: [],
                insurance: [],
                balance: []
            };
            if (!b.validate()) return b.pane("error");
            f.each(c, function (t) {
                h[t] = b.Z(a[t], 0)
            });
            d.principal = h.principal;
            d.interest = h.interest / 1200;
            d.term = h.term * 12;
            d.down = h.down / h.principal;
            d.taxes = b.N(h.taxes / 12, 2);
            d.insurance = b.N(h.insurance / 12, 2);
            d.pmi = d.down >= 0.2 ? 0 : h.pmi;
            d.pmiTerm = d.term;
            d.extra = h.extra;
            d.balance = h.principal - h.down;
            d.payment = b.N(d.balance * d.interest / (1 - accum(0)), 2);
            d.paymentTerm = 0;
            for (c = 1; c <= d.term; c++) {
                var g = paid(c),
                    s = balance(c),
                    o = Math.floor((c - 1) / 12),
                    A = d.taxes,
                    C = d.insurance + (c > d.pmiTerm ? 0 : d.pmi);
                if (s == 0 && g.principal > 0) g.principal += b.N(d.principal - j.principal - g.principal - j.extra - g.extra, 2);
                k.principal.push(g.principal);
                k.extra.push(g.extra);
                k.interest.push(g.interest);
                k.taxes.push(A);
                k.insurance.push(C);
                k.balance.push(s);
                add(m.principal, o, g.principal);
                add(m.extra, o, g.extra);
                add(m.interest, o, g.interest);
                add(m.taxes, o, A);
                add(m.insurance, o, C);
                m.balance[o] = d.paymentTerm ? null : s;
                j.principal += g.principal;
                j.extra += g.extra;
                j.interest += g.interest;
                if (c < d.pmiTerm && s < d.principal * 0.8) d.pmiTerm = c;
                if (!d.paymentTerm && s == 0) d.paymentTerm = c
            }
            m.balance[Math.ceil(d.paymentTerm / 12) - 1] = 0;
            k = n.month;
            k.payment = d.payment + d.extra;
            k.taxes = d.taxes;
            k.insurance = d.insurance + d.pmi;
            k.total = b.N(k.payment + k.taxes + k.insurance, 2);
            m = n.year;
            m.payment = b.N(k.payment * 12, 2);
            m.taxes = b.N(k.taxes * 12, 2);
            m.insurance = d.pmiTerm < 12 ? b.N(d.insurance * 12 + d.pmi * d.pmiTerm, 2) : b.N(k.insurance * 12, 2);
            m.total = b.N(m.payment + m.taxes + m.insurance, 2);
            j.payment = j.principal + j.extra + j.interest;
            j.taxes = b.N(k.taxes * d.term, 2);
            j.insurance = b.N(d.insurance * d.term + d.pmi * d.pmiTerm, 2);
            j.total = b.N(j.payment + j.taxes + j.insurance, 2);
            b.processed = true;
            e.payment.processed = e.amort.processed = null;
            b.pane(b.widget ? "payment" : a.tab.data("id"))
        },
        build: function () {
            field = function (i, l, r, p, z, D) {
                p = p.split("|");
                f("<label/>").attr("title", z).text(p[k ? p.length - 1 : 0]).click(function () {
                    a[r].focus()
                }).appendTo(i);
                a[r] = f("<" + l + "/>").css(d.css.field).data("id", r).data("label", p[0]).focus(function () {
                    f(this).select()
                }).blur(function (B) {
                    B = B.target;
                    if (B.type == "text") {
                        B = f(B);
                        var E = parseFloat(B.val());
                        if (isNaN(B.val())) {
                            E = B.val();
                            E = E.replace(",", "");
                            E = parseFloat(E);
                            B.val(E.toFixed(r == "term" ? 0 : 2))
                        } else isNaN(E) || B.val(E.toFixed(r == "term" ? 0 : 2))
                    }
                }).keypress(function (B) {
                    if (B.which == "13") {
                        B = f(B.target);
                        B.trigger(B.data("id") == "principal" ? "change" : "blur");
                        b.calculate()
                    }
                }).appendTo(i);
                if (l == "select") {
                    p = m.min[r];
                    l = a[r].append(f("<option/>").val(""));
                    z = m.step[r];
                    for (var F = (F = z.toString().split("."))[1] ? F[1].length : 0; p <= m.max[r]; p += z) f("<option/>").val(p).text(b.N(p).toFixed(F)).appendTo(l)
                }
                f("<div/>").text(D || "").appendTo(i);
                f("<br/>").appendTo(i)
            };
            button = function (i, l) {
                var r = b.browser;
                r = r.msie || r.opera;
                return f("<button/>").addClass("mc-button").css(d.css.button).text(l).mousedown(r ? b.F : function (p) {
                    f(p.target).addClass("mc-pressed")
                }).mouseup(r ? b.F : function (p) {
                    f(p.target).removeClass("mc-pressed")
                }).appendTo(i).click(function (p) {
                    p.preventDefault()
                })
            };
            navMC = function (i, l) {
                return button(i, l).removeClass("mc-button").addClass("mc-nav").css(d.css.navMC).css("float", l == "<" ? "left" : "right").click(b.B(b, b.payment, l == "<" ? -1 : 1))
            };
            tab = function (i, l, r, p) {
                i = a.tabs[l] = f("<li/>").addClass("mc-tab").css(d.css.tab(p)).data("id", l).text(r).click(function (z) {
                    a.tab.css(d.css.tab()).removeClass("mc-active");
                    z = (a.tab = f(z.target).css(d.css.tab(true)).addClass("mc-active")).data("id");
                    var D = z == "payment" ? 0 : 5;
                    f.each(a.panes, function () {
                        this.css({
                            "-moz-border-radius-topleft": D,
                            "-webkit-border-top-left-radius": D
                        })
                    });
                    b.pane(z)
                }).mousedown(b.F).bind("selectstart", b.F).appendTo(i);
                if (p) a.tab = i.addClass("mc-active")
            };
            pane = function (i, l, r, p, z, D, F) {
                i = a.panes[l] = f("<div/>").addClass("mc-pane").css(d.css.pane).data("id", l).appendTo(i);
                var B = i.show,
                    E = i.hide;
                i.show = b.B(i, function () {
                    B.apply(this);
                    this.data("height", null).height("auto");
                    p && p.apply(this);
                    return this
                });
                i.hide = b.B(i, function () {
                    E.apply(this);
                    z && z.apply(this);
                    return this
                });
                i.preAnim = b.B(i, function () {
                    D && D.apply(this);
                    return this
                });
                i.postAnim = b.B(i, function () {
                    F && F.apply(this);
                    return this
                });
                if (r) a.pane = i.show();
                return i
            };
            graph = function (i, l) {
                return f("<img/>").addClass("mc-graph").attr("title", l).appendTo(i)
            };
            clear = function (i) {
                f("<div/>").addClass("mc-clear").appendTo(i)
            };
            var b = this,
                a = b.objects,
                e = a.payment = {
                    head: {}
                },
                c = a.amort = {},
                h = b.logo,
                d = b.colors,
                n = b.fields,
                j = b.defaults,
                m = b.bounds,
                k = b.widget,
                g = a.obj.addClass("mc-container" + (k ? " mc-widget" : "")).width(b.width),
                s = b.browser,
                o = e.groups = ["month", "year", "total"],
                A = e.headers = ["payment", "taxes", "insurance", "total"],
                C = c.headers = ["month", "principal", "interest", "taxes", "insurance", "balance"];
            b.title && f("<div/>").addClass("mc-title").css(d.css.title).html(b.title).appendTo(g);
            g = f("<div/>").addClass("mc-body").css(d.css.body).append("<div/>").appendTo(g);
            if (h.path) {
                var t = f("<img/>").addClass("mc-logo").attr("src", h.path).appendTo(g);
                if (h.url) t.wrap(f("<a/>").attr({
                    href: h.url,
                    target: h.target || "_blank"
                }))
            }
            var u, q = 0,
                x = Math.max(Math.ceil(n.count / 2), 3);
            f.each(n, function (i, l) {
                if (l.enabled) {
                    q++ % x || (u = f("<div/>").addClass("mc-fields").appendTo(g));
                    field(u, l.type, i, l.label, l.desc, l.suffix)
                }
            });
            button(g, "Calculate").css("width", 160).click(b.B(b, b.calculate));
            if (!k) {
                clear(g);
                var y = f("<ul/>").addClass("mc-tabs").appendTo(g);
                tab(y, "payment", "Payments", true);
                tab(y, "amort", "Amortization Schedule")
            }
            g = f("<div/>").addClass("mc-panes").appendTo(g);
            if (k) {
                h = pane(g, "payment");
                C = f("<div/>").addClass("mc-navs").css("color", d.tab.text).appendTo(h);
                var v;
                navMC(C, "<");
                navMC(C, ">");
                e.title = f("<span/>").text("Monthly").appendTo(C);
                v = e.tables = f("<div/>").addClass("mc-tables").appendTo(h);
                f.each(o, function (i, l) {
                    var r = e[l] = {
                        head: {}
                    },
                        p = r.table = b.table(v).css("display", i == 0 ? "table" : "none");
                    f.each(A, function (z, D) {
                        var F = b.row(p);
                        r.head[D] = b.head(F, b.proper(D), z == 3 ? null : D);
                        r[D] = b.cell(F).css({
                            background: z == 3 ? d.value.total : d.table.back,
                            borderTopWidth: z == 3 ? 2 : 1
                        })
                    })
                });
                e.legend = h.find(".mc-legend");
                e.graph = graph(h, "Distribution of payments over the term of the loan");
                f("<a/>").css(d.css.link).attr("href", "#").html("Amortization schedule").click(b.B(b, b.amort, true)).appendTo(h).wrap(f("<div/>").css("margin", "10px 0 0 0"))
            } else {
                pane(g, "intro", true).html(b.intro);
                pane(g, "error").html("<p><b>Oops, there seems to some problems with the values you have entered:</b></p>").append(a.errors = f("<ul/>").addClass("mc-errors"));
                h = pane(g, "payment");
                y = e.table = b.table(h);
                var w = b.row(y);
                f.each([""].concat(A), function (i, l) {
                    e.head[l] = b.head(w, b.proper(l), i > 0 && i < 4 ? l : null).width(i == 0 ? 70 : "auto")
                });
                f.each(o, function (i, l) {
                    var r = e[l] = {},
                        p = b.row(y);
                    r.head = b.head(p, b.proper(l) + (i < 2 ? "ly" : "")).css({
                        textAlign: "left",
                        padding: "0"
                    });
                    f.each(A, function (z) {
                        r[this] = b.cell(p).css({
                            background: l == "total" || z == 3 ? d.value.total : d.table.back,
                            borderLeftWidth: z == 3 ? 2 : 1,
                            borderTopWidth: l == "total" ? 2 : 1
                        })
                    })
                });
                e.legend = h.find(".mc-legend");
                e.message = f("<div/>").addClass("mc-message").css("padding", "4px 0 0 70px").appendTo(h);
                e.graph = graph(h, "Distribution of payments over the term of the loan");
                e.graph2 = graph(h, "Distribution of payments to principal and interest over the term of the loan");
                h = pane(g, "amort", false, function () {
                    if (!this.shown) {
                        var i = b.browser,
                            l = c.table,
                            r = l.width();
                        c.head.width(r);
                        c.foot.width(r);
                        i.mozilla && l.width(r - 1);
                        c.scroll.height(i.msie ? l.find("tr:nth-child(12)").position().top : l.find("tr:first").height() * 12 + 1);
                        this.shown = true
                    }
                }, null, function () {
                    if (b.animate && b.browser.mozilla) {
                        this.height(c.scroll.position().top + c.scroll.height());
                        c.table.hide()
                    }
                }, function () {
                    b.animate && b.browser.mozilla && c.table.show()
                });
                y = c.head = b.table(h);
                w = b.row(y);
                f.each(C, function (i, l) {
                    c.head[l] = b.head(w, b.proper(l), i < 1 ? null : l).width(i == 0 ? 50 : "auto")
                });
                y = c.table =
                b.table(c.scroll = f("<div/>").addClass("mc-scroll").height(100).appendTo(h));
                for (o = 1; o <= m.max.term * 12; o++) y.append("<tr><td>" + o + "</td><td/><td/><td/><td/><td/></tr>");
                y.find("td").css(d.css.table).eq(0).width(50);
                y.find("td:last-child").css({
                    background: d.value.total,
                    borderLeftWidth: 2
                }).end().find("tr:nth-child(12n+1):not(:first) td").css({
                    borderTopWidth: 2
                });
                y = c.foot = b.table(h);
                w = b.row(y);
                c.head.total = b.head(w, "Total").width(50);
                w.append("<th/><th/><th/><th/>");
                button(b.head(w).css("padding", "5px 0 0 0"), "Print").addClass("mc-small").click(b.B(b, b.amort, true));
                c.legend = h.find(".mc-legend");
                c.message = f("<div/>").addClass("mc-message").appendTo(h);
                c.graph = f("<img/>").addClass("mc-graph").attr("title", "Distribution of payments over the course of the loan").appendTo(h)
            }
            b.footer && f("<div/>").addClass("mc-footer").css(d.css.footer).html(b.footer).appendTo(a.obj);
            g = a.obj;
            if (s.msie) {
                g.find("p:first").css("margin", "0");
                g.find(".mc-nav").css("line-height", "20px");
                b.quirks && g.find("input").width(g.find("select").width() + 6)
            } else if (s.opera) {
                g.find(".mc-button").css("line-height", "26px");
                g.find(".mc-nav").css("line-height", "22px")
            } else if (s.mozilla) g.find("table").css("margin", "1px 0 0 " + (k ? "0" : "1px"));
            a.principal.change(function (i) {
                i = f(i.target).trigger("blur");
                i = parseFloat(i.val());
                if (!isNaN(i)) {
                    n.taxes.enabled && j.taxes && a.taxes.val((i * j.taxes / 100).toFixed(2));
                    n.insurance.enabled && j.insurance && a.insurance.val((i * j.insurance / 100).toFixed(2));
                    n.down.enabled && j.down && a.down.val((i * j.down / 100).toFixed(2))
                }
            }).val(b.Z(j.principal, "")).trigger("change");
            a.interest.val(b.Z(j.interest, "")).trigger("blur");
            a.term.val(b.Z(j.term, "")).trigger("blur");
            n.pmi.enabled && a.pmi.val(b.Z(j.pmi, "")).trigger("blur");
            n.extra.enabled && a.extra.val(b.Z(j.extra, "")).trigger("blur")
        },
        initialize: function (b, a) {
            var e = this;
            a = a;
            var c = a.colors,
                h = a.fields,
                d = a.defaults,
                n = a.bounds,
                j = navigator.userAgent.toLowerCase();
            f.each([d, n.min, n.max, n.step], function () {
                var m = this;
                f.each(m, function (k, g) {
                    m[k] = e.N(g, k == "term" ? 0 : 2)
                })
            });
            f.each(c, function () {
                var m = this;
                f.each(m, function (k, g) {
                    g = g ? g.toLowerCase().replace("transparent", "").replace(/#?(.+)/, "#$1") : "";
                    if (g.length == 4) g = g.replace(/([0-9a-f])/g, "$1$1");
                    m[k] = g
                })
            });
            f.extend(c.css = {}, {
                title: {
                    color: c.title.text,
                    background: c.title.back
                },
                body: {
                    color: c.main.text,
                    background: c.main.back,
                    borderColor: c.main.border
                },
                field: {
                    color: c.input.text,
                    background: c.input.back,
                    borderColor: c.input.border
                },
                button: {
                    color: c.button.text,
                    background: c.button.back,
                    borderColor: c.button.border
                },
                navMC: {
                    color: c.navMC.text,
                    background: c.navMC.back,
                    borderColor: c.navMC.border
                },
                tab: function (m) {
                    return {
                        color: c[m ? "tab" : "main"].text,
                        background: m ? c.tab.back : "transparent",
                        borderColor: m ? c.tab.border : "transparent"
                    }
                },
                pane: {
                    color: c.pane.text,
                    background: c.pane.back,
                    borderColor: c.pane.border
                },
                table: {
                    color: c.table.text,
                    background: c.table.back,
                    borderColor: c.table.border
                },
                footer: {
                    color: c.footer.text,
                    background: c.footer.back
                },
                link: {
                    color: c.link.text
                }
            });
            h.principal.enabled = h.interest.enabled = h.term.enabled = true;
            f.each(h, function (m, k) {
                if (k.type == "select" && isNaN(n.min[m] + n.max[m] + n.step[m])) k.type = "input";
                h.count = (h.count || 0) + (k.enabled ? 1 : 0)
            });
            f.each(a, function (m, k) {
                e[m] = k
            });
            e.widget = e.mode == "widget";
            e.width = e.Z(a.width, e.widget ? 175 : 680);
            e.quirks = document.compatMode == "BackCompat";
            e.browser = f.extend({}, f.browser, {
                chrome: /chrome/.test(j),
                safari: /webkit/.test(j) && !/chrome/.test(j)
            });
            e.objects = {
                obj: f(b),
                tabs: {},
                panes: {},
                navMC: {}
            };
            e.values = {};
            e.errors = [];
            e.google = "http://chart.apis.google.com/chart?";
            e.build()
        }
    });
    f.fn.MortgageCalculator = function (b) {
        var a = null,
            e = MortgageCalculator,
            c = f.easing;
        a = {
            mode: "normal",
            animate: true,
            width: a,
            title: a,
            intro: "<p>With this calculator you can put in your values and estimate the amount of your loan and get an estimate on the amount of your monthly payments.</p><p>Click on the 'Calculate' button when you're ready.</p>",
            footer: a,
            logo: {
                path: a,
                url: a,
                target: a
            },
            colors: {
                main: {
                    text: "#000",
                    back: "#eef2fd",
                    border: "#39c"
                },
                title: {
                    text: "#39c",
                    back: a
                },
                tab: {
                    text: "#39c",
                    back: "#fff",
                    border: "#39c"
                },
                pane: {
                    text: "#000",
                    back: "#fff",
                    border: "#39c"
                },
                input: {
                    text: "#000",
                    back: "#fff",
                    border: "#aaa",
                    error: "#fcc"
                },
                button: {
                    text: "#fff",
                    back: "#46a026",
                    border: "#1f731a"
                },
                navMC: {
                    text: "#fff",
                    back: "#39c",
                    border: "#39c"
                },
                table: {
                    text: "#000",
                    back: "#fff",
                    border: "#aaa"
                },
                footer: {
                    text: "#999",
                    back: a
                },
                link: {
                    text: "#39c"
                },
                value: {
                    payment: "#6a9f35",
                    taxes: "#0584af",
                    insurance: "#ff9300",
                    total: "#eee",
                    principal: "#6a9f35",
                    extra: "#90d948",
                    interest: "#f00",
                    balance: "#333"
                }
            },
            fields: {
                principal: {
                    enabled: true,
                    type: "input",
                    label: "Principal",
                    desc: "The total value of the loan (in dollars)"
                },
                interest: {
                    enabled: true,
                    type: "input",
                    label: "Interest Rate|Interest",
                    desc: "The annual interest rate of the loan",
                    suffix: "%"
                },
                term: {
                    enabled: true,
                    type: "select",
                    label: "Term",
                    desc: "The term of the loan (in years)",
                    suffix: "yrs"
                },
                down: {
                    enabled: true,
                    type: "input",
                    label: "Down Payment|Down",
                    desc: "The down payment on the loan (in dollars)"
                },
                taxes: {
                    enabled: true,
                    type: "input",
                    label: "Property Taxes|Taxes",
                    desc: "The annual property taxes (in dollars)",
                    suffix: "/yr"
                },
                insurance: {
                    enabled: true,
                    type: "input",
                    label: "Insurance",
                    desc: "The annual homeowner's insurance (in dollars)",
                    suffix: "/yr"
                },
                pmi: {
                    enabled: true,
                    type: "input",
                    label: "PMI",
                    desc: "The monthly private mortgage insurance (in dollars)",
                    suffix: "/mo"
                },
                extra: {
                    enabled: true,
                    type: "input",
                    label: "Extra Payment|Extra",
                    desc: "Extra to pay to the principal per month (in dollars)",
                    suffix: "/mo"
                }
            },
            defaults: {
                principal: a,
                interest: a,
                term: a,
                down: a,
                taxes: 1.5,
                insurance: 0.5,
                pmi: a,
                extra: a
            },
            bounds: {
                min: {
                    principal: 0,
                    interest: 0,
                    term: 15,
                    down: a,
                    taxes: a,
                    insurance: a,
                    pmi: a,
                    extra: a
                },
                max: {
                    principal: 15E6,
                    interest: 15,
                    term: 40,
                    down: a,
                    taxes: a,
                    insurance: a,
                    pmi: a,
                    extra: a
                },
                step: {
                    principal: a,
                    interest: a,
                    term: 5,
                    down: a,
                    taxes: a,
                    insurance: a,
                    pmi: a,
                    extra: a
                }
            }
        };
        if (!e.style)(function (h, d, n, j) {
            var m = arguments.callee;
            j = j || 0;
            f.each(d, function (k, g) {
                k = (n ? n + " " : "") + (k == "self" ? "" : k);
                if (typeof g == "object") j = m(h, g, k, j);
                else f.browser.msie ? h.addRule(k, g, j++) : h.insertRule(k + " {" + g + "}", j++)
            });
            return j
        })(e.style = f("<style/>").attr("type", "text/css").appendTo("head").get(0)[f.browser.msie ? "styleSheet" : "sheet"], e.rules);
        c.mc || f.extend(c, {
            mc: function (h, d, n, j, m) {
                return j * Math.sqrt(1 - (d = d / m - 1) * d) + n
            }
        });
        b = f.extend(true, {}, a, b);
        this.each(function () {
            new MortgageCalculator(this, b)
        });
        return this
    }
})(jQuery);
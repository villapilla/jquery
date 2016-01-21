/*jslint browser: true*/
/*global $, jQuery*/
'use strict';

var globals = function (ns) {
    ns.insertMicrodata = function (element, tag, attribute, value) {
        $("<" + tag + ">" + value + "</" + tag + ">").appendTo(element).attr({
            itemprop: attribute
        });
    };
    ns.removeFirstLetter = function (element) {
        return element.text().substr(1, element.text().length - 1);
    };
    return ns;
}({});


$("document").ready(function () {
    $("*").addClass("reset");
    $("body").addClass("page_width");
    $('nav ul').addClass('navigation_bar');
    $('nav ul li').addClass('menu').hover(function () {
        $(this).toggleClass("menu_hover");
    }, function () {
        $(this).toggleClass("menu_hover");
    }).click(function () {
        $(this).animate({
            zIndex: "-10",
            top: "65px",
            lineHeight: "60px"
        }, 1500, "linear", function () {
            $(this).animate({
                opacity: "0"
            }, 2000, "swing", function () {
                $(this).animate({
                    top: "-130px",
                    lineHeight: "120px"
                }, 100, "linear", function () {
                    $(this).animate({
                        zIndex: "0",
                        top: "-30px",
                        opacity: 1
                    }, 1000, "linear");
                });
            });
        });
    });
    $('nav + section').addClass('content');
    $("nav + section article").
        append("<span></span>").
    addClass("pos_relative");
    $('nav + section h1').addClass('title');
    $('nav + section li').addClass('product');
    $('nav + section li h2').addClass('no_display');
    $('nav + section li figcaption').addClass('no_display name');
    $('nav + section li span').each(function (index, element) {
        $(element).text($(element).parent().data("price") + " €");
    }).addClass("price no_display");
    $("img").each(function (index, element) {
        $(element).attr("alt", "Embarcación " +
        (index + 1) + " de " + $("img").length + "(" +
        $(this).next().text() + ")");
    }).addClass('picture');
    $("nav + section article").hover(function () {
        $(this).children("span").toggleClass("visible");
        $(this).children("figure").
        children("figcaption").
        toggleClass("visible");
    }, function () {
        $(this).children("span").toggleClass("visible");
        $(this).children("figure").
        children("figcaption").
        toggleClass("visible");
    }).click(function () {
        $("img").addClass("menu_select").removeClass("menu_out");
        $(this).children("figure").children("img").addClass("menu_out");
    });
    $("nav + section li").eq(3).addClass("plus_margin reset product");
    $("form").addClass("meter_price");
    $("form label").before("<h2>Calculate your price</h2>");
    $("form h2").addClass("calc_title");
    $("form label").addClass("label plus_margin");
    $("form input").addClass("label");
    $("form").append("<h1></h1>");
    $("form h1").addClass("calc_result");
    $("section:last").addClass("video_container");
    $("section:last h1").addClass("calc_title");
    $("video").addClass("video");
    $("head").append("<link href=" +
        "\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");
    $("head").append("<script src=" +
        "\"http://vjs.zencdn.net/ie8/1.1.1/videojs-ie8.min.js\"></script>");
    $("head").append("<script src=" +
        "\"http://vjs.zencdn.net/5.0/video.min.js\"></script>");
    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin centered").attr("data-setup", "{}");
    $("section:last").append("<script src=" +
        "\"http://vjs.zencdn.net/5.4.6/video.js\"></script>");
    $("#Length").on("keyup", function () {
        if (!isNaN($("#Length").val()) && $("#Length").val() !== "") {
            $("form h1").text("Initial price: " +
                $("#Length").val() * 12345 + " €");
        } else {
            $("form h1").text("");
        }
    });
    $("footer li").each(function () {
        $(this).text(globals.removeFirstLetter($(this)));
    });
    $("footer ul").append("<li></li>").children().append("<div></div>");
    $("footer li").addClass("no_display");
    $("footer li:first").attr({
        itemscope: "",
        itemtype: "https://schema.org/Corporation"
    }).addClass("microdata")
    $("footer li:last").attr({
        itemscope: "",
        itemtype: "https://schema.org/Person"
    }).text("Author").append("<div></div>");
    globals.insertMicrodata($("footer li:first div"), "span", "name",
        "seaMaster");
    globals.insertMicrodata($("footer li:first div"), "span", "address",
        "c/ false, 123, vigo, spain");
    globals.insertMicrodata($("footer li:first div"), "span", "telephone",
        "+34666000666");
    globals.insertMicrodata($("footer li:first div"), "span", "email",
        "admin@ship.com");
    $("footer li:last").addClass("microdata");
    globals.insertMicrodata($("footer li:last div"), "span", "name",
        "David Villaluenga");
    globals.insertMicrodata($("footer li:last div"), "span", "address",
        "C/ Menor, 04, Madrid, Spain");
    globals.insertMicrodata($("footer li:last div"), "span", "telephone",
        "+34645054666");
    globals.insertMicrodata($("footer li:last div"), "span", "email",
        "dvillaluenga@gmail.com");
    $("footer span").addClass("box_complete");
});
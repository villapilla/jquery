$("document").ready(function() {
	$("*").addClass("reset");
    $("body").addClass("page_width");
	$('nav ul').addClass('navigation_bar');
	$('nav ul li').addClass('menu').hover(function () {
        $(this).css({"background": "black", "textShadow": "white 2px 2px 5px"});
    }, function () {
        $(this).css({"background": "#0501D5", "textShadow": "none"});
    }).click(function () {
        $(this).animate(
            {zIndex: "-10", top: "65px", lineHeight: "60px"}, 1500, "linear", function () {
                $(this).animate({opacity: "0"}, 2000, "swing", function () {
                    $(this).animate({top: "-130px", lineHeight: "120px"}, 100, "linear", function () {
                        $(this).animate({zIndex: "0", top: "-30px", opacity: 1}, 1000, "linear");
                    });
                });
            });
    });
	$('nav + section').addClass('content');
    $("nav + section article").append("<span></span>").addClass("pos_relative");
    $('nav + section h1').addClass('title');
	$('nav + section li').addClass('product');
	$('nav + section li h2').addClass('no_display');
    $('nav + section li figcaption').addClass('no_display name');
    $('nav + section li span').each(function (index, element) {
        $(element).text($(element).parent().data("price") + " €");
    }).addClass("price no_display");
    $("img").each(function (index, element) {
        $(element).attr("alt", "Embarcación " + (index + 1) + " de " + $("img").length + "(" + $(this).next().text() + ")");
    }).addClass('picture');

    $("nav + section article").hover(function () {
        $(this).children("span").css({"display": "inline-block"});
        $(this).children("figure").children("figcaption").css({"display": "inline-block"});
    }, function () {
        $(this).children("span").css({"display": "none"});
        $(this).children("figure").children("figcaption").css({"display": "none"});
    }).click( function () {
        $("img").css({border: "double 9px #0501D5", opacity: "0.5"});
        $(this).children("figure").children("img").css({border: "solid yellow 10px", opacity: "1"});
    });
    $("nav + section li").eq(3).addClass("plus_margin reset product");

    $("form").addClass("meter_price");
    $("form label").before("<h2>Calculate your price</h2>");
    $("form h2").addClass("calc_title");
    $("form label").addClass("label plus_margin");
    $("form input").addClass("label");
    $("form").append("<h1></h1>");
    $("form h1").addClass("calc_result");
    //$("nav + section li").eq(4).addClass("plus_margin reset product");

    $("section:last").addClass("video_container");
    $("section:last h1").addClass("calc_title");
    $("video").addClass("video");
    /*on("click", function () {
            $("img").parent().parent().removeClass("yellowBackground");
            $(this).parent().parent().addClass("yellowBackground");
    });*/
    /** Framework video */
    $("head").append("<link href=\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");
    $("head").append("<script src=\"http://vjs.zencdn.net/ie8/1.1.1/videojs-ie8.min.js\"></script>");
    $("head").append("<script src=\"http://vjs.zencdn.net/5.0/video.min.js\"></script>");

    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin centered").attr("data-setup", "{}");

    $("section:last").append("<script src=\"http://vjs.zencdn.net/5.4.6/video.js\"></script>");
    
    $("#Length").on("keyup", function (e) {
        if( ! isNaN($("#Length").val()) && $("#Length").val() !== "") {
            $("form h1").text("Initial price: " + $("#Length").val() * 12345 + " €");
        } else {
            $("form h1").text("");
        }
    });

});
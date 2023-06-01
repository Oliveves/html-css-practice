$(window).on("load", function(){
    $("nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function(){
        $(this).find(".submenu").stop().slideDown(300);
    },
    function(){
        $(this).find(".submenu").stop().slideUp(300);
    })
});
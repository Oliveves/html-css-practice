$(window).on("load", function(){
    $(".mu>ul>li").hover(
        function(){
            $(this).find(".submenu").stop().show();
        },
        function(){
            $(this).find(".submenu").stop().hide();
        }
    )
});
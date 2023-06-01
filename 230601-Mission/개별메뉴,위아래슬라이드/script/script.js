$(window).on("load", function(){

    //메뉴
    $("nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function(){
        $(this).find(".submenu").stop().slideDown(300);
    },
    function(){
        $(this).find(".submenu").stop().slideUp(300);
    })

    //슬라이드
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true))

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginTop : -currentIndex * 300 + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginTop : 0 }, 0);
                currentIndex = 0;
            }, 700);
        };
    }, 3000)
});
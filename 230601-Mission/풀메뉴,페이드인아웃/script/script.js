$(window).on("load", function(){
    //풀메뉴
    $(".background, nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function(){
            $(".background, .submenu").stop().slideDown(500);
    }, function(){
            $(".background, .submenu").stop().slideUp(500);
    });

    //페이드슬라이드
    $(".slideList").children("div:gt(0)").hide();

    let currentIndex =0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;

        $(".slideImg").eq(currentIndex).fadeOut(1200);
        $(".slideImg").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000)
});
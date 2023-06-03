$(window).on("load", function(){

    //그룹메뉴
    $("nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function(){
        $(".submenu").stop().slideDown(500);
    }, function(){
        $(".submenu").stop().slideUp(500);
    });
    

    //좌우슬라이드
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginLeft : currentIndex * -100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginLeft : 0}, 0);
                currentIndex = 0;
            }, 700)        
        }
    }, 3000);
});
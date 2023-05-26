$(window).on("load", function(){

    //아코디언메뉴
    $(".mu>ul>li").hover(
        function(){
            $(this).find(".submenu").stop().show();
        },
        function(){
            $(this).find(".submenu").stop().hide();
        }
    );
    

    //슬라이드
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginLeft: -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginLeft:0}, 0);
                currentIndex = 0;
            }, 700);
        };
    }, 3000);

    //팝업
    $(".layerpopup").on("click", function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });

});
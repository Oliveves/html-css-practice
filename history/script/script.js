$(window).on("load", function(){

//아코디언메뉴
    $(".menu>ul>li").hover(
        function(){
        $(this).find(".submenu").stop().slideDown(500);
        }, 
        function(){
        $(this).find(".submenu").stop().slideUp(500);
        });

//위아래 슬라이드
        let currentIndex = 0;
        $(".slideList").append($(".slideImg").first().clone(true));

        setInterval(function(){
            currentIndex++;
            $(".slideList").animate({marginTop: -currentIndex * 750 + "px"}, 600);

            if(currentIndex == 3){
                setTimeout(function(){
                    $(".slideList").animate({marginTop : 0}, 0);
                    currentIndex = 0;
                }, 700)
            }
        }, 3000);

//공지사항 팝업        
    $(".layerpopup").on("click", function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });
});

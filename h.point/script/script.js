
$(window).on("load", function(){
    // 로고클릭시 최상단
    $(".logo").on("click", function(){
        $("html, body").stop().animate({scrollTop:0}, 400);
    });


    // 하단버튼 클릭시 최상단
    $(".btn-top").on("click", function(){
        $("html, body").stop().animate({scrollTop:0}, 400);
    })


    // 하단버튼이 스크롤 500픽셀 도달시 나타남
    $(".btn-top").hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btn-top").fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });

    // 각 메뉴 클릭시 애니메이션으로 각 컨텐츠에 위치 이동
    

});

$(window).on("load", function(){
    
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
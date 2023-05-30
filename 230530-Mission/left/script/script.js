$(window).on("load", function(){
    let currentIndex = 0;

    $(".slideList").append($(".slideImg").first().clone(true))

    setInterval(function(){
        currentIndex++;
        $(".slideList").animate({marginLeft : -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slideList").animate({marginLeft : 0 }, 0);
                currentIndex = 0;
            }, 700);
        };
    }, 3000)
});
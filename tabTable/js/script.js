$(function(){
    //탭메뉴
    $("h2").on("click", function(){
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".pj").hide(); $(".on+div").show();
    })
})
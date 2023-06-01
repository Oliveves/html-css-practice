$(function(){
	
	
    $(".mainm>ul>li").hover
    (function(){
        $(this).find(".subm").stop().slideDown(500)
    },
    function(){
        $(this).find(".subm").stop().slideUp(500)
    }
    );

	
	
    var x = 0;
    setInterval(function(){
        var next = (x + 1) % 3;
        $(".slidelist").find(".slideimg").eq(x).fadeOut();
        $(".slidelist").find(".slideimg").eq(next).fadeIn();
        x = next;
    },3000);

	
	
    $("h2").on("click",function(){
        $(this).addClass("nn")
        .siblings("h2").removeClass("nn");
    });
	
	

    $(".layerpopup").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });
});
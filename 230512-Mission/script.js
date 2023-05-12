$(function(){
    //레이어팝업
    $(".layerPopup").on("click", function(){
        $(".popUp").fadeIn();
    });
    //on은 이벤트 등록 메서드
    $(".close").on("click", function(){
        $(".popUp").fadeOut();
    });
});
$(window).ready(function() {
    setTimeout(function() {$('#loading').hide()}, 1000);
    // $('#loading').hide();
});

var fadeInStart=300 // 100px scroll or less will equiv to 1 opacity
    ,fadeInUntil=550 // 200px scroll or more will equiv to 0 opacity
    ,fadeOutStart=551
    ,fadeOutUntil=850
    ,awesome = $('#awesome');

$(document).scroll(function () {
    var x = $(this).scrollTop();
    /*if (x > 430 && x < 1000) {
        $('#awesome').stop().css('opacity',1);
    }
    else{
        $('#awesome').stop().css('opacity',0);
    }*/
    var offset = $(document).scrollTop()
        var opacity = 0;
        if  (offset <= 360) {
            opacity = 0;
        } else if (offset > 360 & offset <= 900) {
            opacity = (offset - 1) / 900;
        }
        else if (offset > 900 & offset <= 1100){
            opacity = 1 - (offset / 1100);
            console.log(opacity);
        }
        $('#awesome').css('opacity', opacity);
});

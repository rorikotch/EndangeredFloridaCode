$(window).ready(function() {
    setTimeout(function() {$('#loading').hide()}, 1000);
    // $('#loading').hide();
});

var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=300;

$(document).scroll(function () {
    var x = $(this).scrollTop();

    var offset = $(document).scrollTop()
        var opacity = 0;
        var opacity2 = 1;

        if  (offset <= 360) {
            opacity = 0;
        } else if (offset > 360 & offset <= 800) {
            opacity = (offset - 1) / 800;
        }
        else if (offset > 800 & offset <= 1000){
            opacity = 1 - (offset / 1000);
            console.log(opacity);
        }
        $('#awesome').css('opacity', opacity);


        var offset2 = $(document).scrollTop()
          ,opacity2=0;

        if( offset2<=fadeStart ){
          opacity2=1;
        } else if( offset2<=fadeUntil ){
          opacity2=1-offset2/fadeUntil;
        }
        $('#stories-navigation').css('opacity',opacity2);

  });

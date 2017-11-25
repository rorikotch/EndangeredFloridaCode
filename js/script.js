;(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());


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
        if (offset <= 200) {
            opacity = 0;
        } else if (offset > 200 & offset <= 800) {
            opacity = (offset - 1) / 800;
        }
        else if (offset > 1100 & offset <= 2100){
            opacity = (1 - offset) / 900;
            console.log(opacity);
        }
        $('#awesome').css('opacity', opacity);
});

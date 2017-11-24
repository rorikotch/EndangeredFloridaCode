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


var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#videowrapper1').offset().top,
    distance      = (elementOffset - scrollTop);
console.log(distance);
$(window).scroll(function() {
    scrollTop     = $(window).scrollTop(),
    elementOffset = $('#videowrapper1').offset().top,
    distance      = (elementOffset - scrollTop);

    if( distance < 150 & distance > -250) {
        $('#awesome').fadeIn();
    }

    if( distance < -280 ) {
      $('#awesome').fadeOut(400);
    }

    if( distance > 150 ) {
      $('#awesome').fadeOut(400);
    }
});

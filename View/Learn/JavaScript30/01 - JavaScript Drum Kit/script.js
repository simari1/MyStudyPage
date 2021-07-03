$(document).ready(function(){
  function playSound(e) {
    let audio = $(`audio[data-key=${e.keyCode}]`);
    let key = $(`div[data-key=${e.keyCode}]`);
  
    if (audio.get(0) !== undefined) {
      key.addClass("playing");
      audio.get(0).currentTime = 0;
      audio.get(0).play();
    }
  }
  function transitionEnd(e) {
    if (e.originalEvent.propertyName !== "transform") {
      return;
    }
    $(this).first().removeClass("playing");
  }
  
  $("div.key").on("transitionend", transitionEnd);
  $(window).keydown(playSound);
});
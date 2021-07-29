$(document).ready(function () {
  const speed = $(".speed");
  const bar = $(".speed-bar");
  const video = $(".flex");

  function handleMove(e){
    const y = e.pageY - $(this)[0].offsetTop;
    const percent = y / $(this)[0].offsetHeight;

    const min = 0.4
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.css("height", height);
    bar.text(playbackRate.toFixed(2) + "x");
    video[0].playbackRate = playbackRate;
    console.log(video[0].playbackRate);
  }

  speed.on("touchmove", handleMove)
  speed.on("mousemove", handleMove)
});

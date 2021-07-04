//
//jqueryオブジェクトに対してのイベントでもthisはDOMオブジェクトを返してくる
//https://on-ze.com/archives/1816
//https://www.flatflag.nir87.com/this-1371

//function() と () => {}の違い
//() => {}の中だとthisはwindowを返してくる、、、() => {}の中イベント発生元を取りたい場合はe.target
//イベント発生元のオブジェクトを取りたい場合はfunction(){}のthisを利用する
//https://stackoverflow.com/questions/49449325/this-is-selecting-window-object-instead-of-clicked-element-jquery
//https://qiita.com/suin/items/a44825d253d023e31e4d
//https://keita-blog.com/programming/arrow-function

//jQueryでDOMElementのイベントを呼ぶにはtrigger

//

$(document).ready(() => {
  const player = $(".player");
  const video = $("video.viewer");
  const progress = $(".progress");
  const progressBar = $(".progress__filled");
  const toggle = $("button.toggle");
  const skipButtons = $("[data-skip]");
  const ranges = $(".player__slider");

  //Play, Stop(videoのクリック、toggleボタンのクリック両方から呼び出されるので、thisは利用しない)
  const togglePlay = function () {
    video[0].paused ? video[0].play() : video[0].pause();
  };

  const updateButton = function () {
    this.paused ? toggle.text("►") : toggle.text("||");
  };

  const skip = function () {
    video[0].currentTime += Number(this.dataset.skip);
  };

  const handleRangeUpdate = function () {
    if ($(this).attr("name") === "volume") {
      video[0].volume = this.value;
    } else if ($(this).attr("name") === "playbackRate") {
      video[0].playbackRate = this.value;
    }
  };

  function handleProgress() {
    const percent = (video[0].currentTime / video[0].duration) * 100;
    progressBar.css("flexBasis", `${percent}%`);
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress[0].offsetWidth) * video[0].duration;
    video[0].currentTime = scrubTime;
    progressBar.css(
      "width",
      `${(scrubTime / video[0].duration) * progress[0].width}px`
    );
  }

  video.on("click", togglePlay);
  video.on("pause", updateButton);
  video.on("play", updateButton);
  toggle.on("click", togglePlay);
  skipButtons.on("click", skip);
  ranges.on("change", handleRangeUpdate);
  ranges.on("mousemove", handleRangeUpdate);
  ranges.on("mousemove", handleRangeUpdate);
  video.on("timeupdate", handleProgress);
  progress.on("click", scrub);
});

$(document).ready(function () {
  const timerDisplay = $(".display__time-left");
  const endTime = $(".display__end-time");
  const buttons = $("[data-time]");
  const form = $("#custom");
  const stop = $("#stop");
  const audio = $("audio");
  audio.hide();
  let ts;

  displayTimeLeft(0);

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayEndTime(then);
    displayTimeLeft(seconds);

    audio.hide();
    clearInterval(ts);

    ts = setInterval(() => {
      const secondsLeft = (then - Date.now()) / 1000;
      displayTimeLeft(Math.abs(secondsLeft.toFixed(0)));
      if (secondsLeft < 0) {
        clearInterval(ts);
        audio[0].play();
        audio.show();
      }
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainderSeconds = (seconds % 60).toString().padStart(2, "0");
    const display = `${minutes}:${remainderSeconds}`;
    timerDisplay.text(display);
    document.title = display;
  }

  function displayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hour = end.getHours().toString().padStart(2, "0");
    const minutes = end.getMinutes().toString().padStart(2, "0");
    endTime.text(`Be back at ${hour}:${minutes}`);
  }

  buttons.on("click", function () {
    timer($(this).data("time"));
  });

  form.on("submit", function (e) {
    timer(this.minutes.value * 60);
    this.reset();
    e.preventDefault();
  });

  stop.on("click", function () {
    console.log(ts);
    if (ts != null) {
      clearInterval(ts);
      ts = null;
      stop.text("Start");
    } else {
      const times = timerDisplay.text().split(":");
      timer(parseInt(times[0]) * 60 + parseInt(times[1]));
      stop.text("Stop");
    }
  });
});

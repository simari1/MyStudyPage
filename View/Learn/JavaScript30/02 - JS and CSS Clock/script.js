$("document").ready(function () {
  let secondHand = $(".hand.second-hand");
  let minHand = $(".hand.min-hand");
  let hourHand = $(".hand.hour-hand");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.attr("style", `transform:rotate(${secondsDegrees}deg)`);
    if (seconds == 0) {
      secondHand.attr("style", "transition:none");
    }

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minHand.css("transform", `rotate(${minutesDegrees}deg)`);
    if (minutes == 0) {
      minHand.css("transition", "none");
    }

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.css("transform", `rotate(${hoursDegrees}deg)`);
    if (hours == 0) {
      hourHand.css("transition", "none");
    }
  }

  $(function () {
    setInterval(function () {
      setDate();
    }, 1000);
  });
});

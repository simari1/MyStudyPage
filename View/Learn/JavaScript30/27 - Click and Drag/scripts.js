$(document).ready(function () {
  const slider = $(".items");

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.on("mousedown", function (e) {
    isDown = true;
    slider.addClass("active");
    startX = e.pageX - e.offsetX;
    scrollLeft = slider[0].scrollLeft;
  });

  slider.on("mouseleave", function () {
    slider.removeClass("active");
    isDown = false;
  });

  slider.on("mouseup", function (e) {
    slider.removeClass("active");
    isDown = false;
  });

  slider.on("mousemove", function (e) {
    if (!isDown) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - slider[0].offsetLeft;
    const walk = x - startX;
    slider.scrollLeft(scrollLeft - walk);
  });
});

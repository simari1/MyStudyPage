$(document).ready(function () {
  let canvas = $("#draw");
  let ctx = canvas[0].getContext("2d");

  canvas[0].width = window.innerWidth;
  canvas[0].height = window.innerHeight;
  canvas.css("background-color", "#EEE");

  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  let isDrawing = false;
  let lastX;
  let lastY;
  let hue = 0;
  let width = 0;
  let up = true;

  canvas.mousedown(function (e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.mouseup(function () {
    isDrawing = false;
  });
  canvas.mouseout(function () {
    isDrawing = false;
  });
  canvas.mousemove(function (e) {
    if (!isDrawing) {
      return;
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
      hue = 0;
    }

    if (up) {
      width++;
      if (width >= 50) {
        up = false;
      }
    } else {
      width--;
      if (width <= 10) {
        up = true;
      }
    }
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomWidth() {
    return Math.floor(Math.random() * 50);
  }
});

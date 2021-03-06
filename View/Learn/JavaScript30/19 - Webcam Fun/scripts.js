$(document).ready(function () {
  const video = document.querySelector(".player");
  const canvas = document.querySelector(".photo");
  const ctx = canvas.getContext("2d");
  const strip = document.querySelector(".strip");
  const snap = document.querySelector(".snap");
  const takePhotoButton = document.querySelector("button");

  takePhotoButton.addEventListener("click", takePhoto);
  video.addEventListener("canplay", paintToCanvas);

  getVideo();
  function getVideo() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((localMediaStream) => {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      let pixels = ctx.getImageData(0, 0, width, height);
      pixels = redEffect(pixels);
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function redEffect(pixels) {
    for (let i=0; i < pixels.data.length; i+=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 100;
      pixels.data[i + 1] = pixels.data[i + 1] - 50;
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }

    return pixels;
  }

  function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    const data = canvas.toDataURL("image/jpeg");
    let a = $("<a>")
      .attr({
        href: data,
        download: "handsome",
      })
      .html(`<img src="${data}">`);

    console.log(a[0]);
    $(strip).prepend(a);
  }
});

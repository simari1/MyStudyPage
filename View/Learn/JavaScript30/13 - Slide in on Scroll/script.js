$(document).ready(function () {
  const sliderImages = $(".slide-in");

  function checkSlide() {
    console.log("called");
    sliderImages.each(i => {
      const slideInAt = window.scrollY + window.innerHeight - sliderImages[i].height / 2;

      if ($(sliderImages[i]).offset().top < slideInAt) {
        $(sliderImages[i]).addClass("slide-in active");
      } else {
        $(sliderImages[i]).removeClass("active");
      }
    })
  };

  // function debounce(func, wait = 100, immediate = true) {
  //   var timeout;
  //   return function () {
  //     var context = this,
  //       args = arguments;
  //     var later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  $(window).scroll(_.debounce(checkSlide, 100));
});
$(document).ready(function () {
  const nav = $("#main");
  const topPosNav = nav.offset();

  function fixNav() {
    if ($(window).scrollTop() > topPosNav.top) {
      
      $("body").addClass("fixed-nav");
      $("body").css("padding-top", `${nav[0].offsetHeight}px`);
    } else {
      $("body").css("padding-top", `0px`);
      $("body").removeClass("fixed-nav");
    }
  }

  $(window).on("scroll", fixNav);
});

$("document").ready(function () {
  let elem;

  $(".panel").click(function () {
    console.log($(this).attr("class"));
    $(this).siblings().removeClass("open open-active");
    elem = $(this);
    elem.addClass("open");
  });

  $(".panel").on("transitionend", function (e) {
    console.log(e.originalEvent);
    if (e.originalEvent.propertyName !== "flex-grow") {
      return;
    }
    elem.addClass("open-active");
  });
});

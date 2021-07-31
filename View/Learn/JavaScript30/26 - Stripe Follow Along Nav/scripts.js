$(document).ready(function () {
  const triggers = $(".cool > li");
  const background = $(".dropdownBackground");
  const nav = $(".cool");

  function handleEnter() {
    $(this).addClass("trigger-enter");
    let self = $(this);

    setTimeout(function () {
      self.siblings().removeClass("trigger-enter-active", "trigger-enter");
      self.addClass("trigger-enter-active");
    }, 150);

    background.addClass("open");

    const dropdown = $(".dropdown");
    const dropdownCoords = $(this)
      .children(".dropdown")[0]
      .getBoundingClientRect();
    const navcoords = nav[0].getBoundingClientRect();
    background.css({
      width: dropdownCoords.width,
      height: dropdownCoords.height,
      top: dropdownCoords.top - navcoords.top,
      left: dropdownCoords.left - navcoords.left,
    });
  }

  function handleLeave() {
    $(this).removeClass("trigger-enter-active", "trigger-enter");
    background.removeClass("open");
  }

  triggers.on("mouseenter", handleEnter);
  triggers.on("mouseleave", handleLeave);
});

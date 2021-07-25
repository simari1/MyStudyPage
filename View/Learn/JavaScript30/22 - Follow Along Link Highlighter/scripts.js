$(document).ready(function () {
  const triggers = $("a");
  const highlight = $("<span>").addClass("highlight");

  $("body").append(highlight);

  function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    highlight.css("width", `${linkCoords.width}px`);
    highlight.css("height", `${linkCoords.height}px`);
    highlight.css(
      "transform",
      `translate(
        ${linkCoords.left + window.scrollX}px, 
        ${linkCoords.top + window.scrollY}px
      )`
    );
  }

  triggers.on("mouseenter", highlightLink);
});

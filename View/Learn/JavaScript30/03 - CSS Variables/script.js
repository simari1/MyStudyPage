$("document").ready(function () {
  function handleUpdate() {
    let suffix = $(this).data().sizing || "";
    let name = $(this).attr("name");
    $(":root").css(`--${name}`, `${$(this).val()}${suffix}`);
  }

  $(function () {
    $(".controls input").on("mousemove", handleUpdate);
    $(".controls input").on("change", handleUpdate);
  });
});

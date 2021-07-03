$(document).ready(function () {
  let lastChecked;
  let checkBoxes = document.querySelectorAll(".inbox input[type=checkbox]");

  let inBetween = false;
  checkBoxes.forEach((c) =>
    c.addEventListener("click", function (e) {
      checkBoxes.forEach((c) => {
        console.log(c);

        if (e.shiftKey && this.checked) {
          if (c === this || c === lastChecked) {
            inBetween = !inBetween;
            console.log("starting to check");
          }

          if (inBetween) {
            c.checked = true;
            let inBetween = false;
          }
        }
      });
      lastChecked = this;
    })
  );

  // let shiftPressed = false;
  // let currentIndex = 0;
  // let lastIndex = 0;
  // let checkItems = [];
  // let checkBoxes = $(".inbox input[type=checkbox]");

  // $(".inbox").on("click", "input", function (e) {
  //   currentIndex = getIndex($(this));

  //   if (!shiftPressed) {
  //     lastIndex = currentIndex;
  //     return;
  //   }

  //   if (currentIndex > lastIndex) {
  //     checkItems = checkBoxes.filter(function (index, element) {
  //       return getIndex($(element)) > lastIndex && getIndex($(element)) < currentIndex;
  //     });
  //   } else {
  //     checkItems = checkBoxes.filter(function (index, element) {
  //       return getIndex($(element)) > currentIndex && getIndex($(element)) < lastIndex;
  //     })
  //   }

  //   lastIndex = currentIndex;
  //   $.each(checkItems, function (index, element) {
  //     $(element).prop("checked", true);
  //   });
  // });

  // function getIndex(item) {
  //   return item.parent().prevAll().length + 1;
  // }
});

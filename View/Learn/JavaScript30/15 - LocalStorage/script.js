$(document).ready(function () {
  
  const addItems = $(".add-items");
  const itemsList = $(".plates");
  const removeButton = $("input[name=removeitem]");
  let items = JSON.parse(localStorage.getItem("items")) || [];

  function addItem(e) {
    console.log("hello");
    e.preventDefault();
    // const text = $("input[type=text]").val();
    const text = $(this).children("input[type=text]").val();
    const item = {
      text: text,
      done: false,
    };

    items.push(item);
    populateList(items, itemsList);

    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
  }

  function populateList(plates = [], platesList) {
    itemsList[0].innerHTML = plates
      .map((plate, index) => {
        return `
          <li>
            <input 
              type="checkbox"
              id="chkbox${index}"
              data-index='${index}'
              ${plate.done ? "checked" : ""}
            />
            <label for="chkbox${index}">
              ${plate.text}
            </label>
          </li>
        `;
      })
      .join("");
  }

  function toggleDone() {
    items[this.dataset.index].done = !items[this.dataset.index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }

  function removeItems(){
    items = [];
    localStorage.removeItem("items");
    populateList(items, itemsList);
  }

  addItems.on("submit", addItem);
  itemsList.on("click", "input", toggleDone);
  populateList(items, itemsList);
  removeButton.on("click", removeItems);
});

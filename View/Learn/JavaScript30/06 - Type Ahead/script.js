$(document).ready(function () {
  const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  let cities = [];
  let typeAhead = [];
  $(".suggestions").empty();

  $.getJSON(endpoint, function (data) {
    cities.push(...data);
  });

  $("ul").on("click", "li", function (e) {
    $("input.search").val($(this).children()[0].textContent);
  });

  $("input.search").on("input", function (e) {
    $(".suggestions").empty();
    typeAhead = [];

    let inputVal = $(this).val();
    if (!inputVal) {
      $(".suggestions").empty();
      return;
    }

    typeAhead = cities.filter(city => city.city.toLowerCase().
                                        includes(inputVal.toLowerCase())
                              );

    const regex = new RegExp(inputVal, "gi");
    $.each(typeAhead, function (i, item) {
      let styledCity = item.city.replace(regex, `<span class="hl">${inputVal}</span>`)
      let appendables =
      `
      <li>
        <span class="name">${styledCity}, ${item.state}</span>
        <span class="population">${item.population}</span>
      </li>
      `;

      $(".suggestions").append(appendables);
    });
  });
});
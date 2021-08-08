$("#sample1").on("click", function () {
  $.ajax({
    url: "text1.txt",
    type: "GET",
    dataType: "text",
    success: function (data) {
      $("#result_sample1").text(data);
    },
  });
});

$("#sample2").on("click", function () {
  let baseApi = "https://api.openweathermap.org/data/2.5/weather";
  let appId = "85f8f77814397193df652bb495ed6214";
  let city = $("#city").val();
  let urlWeather = baseApi + "?appid=" + appId + "&q=" + city + "&units=metric";

  $.getJSON(urlWeather, function (data) {
    $("#result_sample2").html(
      "現在の天気：" +
        data.weather[0].main +
        "<br>" +
        "現在の気温：" +
        data.main.temp
    );
  });
});

$("#sample3").on("click", function () {
  let url = location.origin + "/api/message";
  $.ajax({
    url: url,
    type: "get",
    dataType: "json",
  }).then(function (response) {
    console.log(response);
    if (response.success) {
      $("#result_sample3").val(response.getJSON().text);
    }
  });
});

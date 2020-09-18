var num = 0;
$("#button_jq").on("click", function() {
    num++;
    var name = $("#name_jq").val();
    var title = $("#title_jq").val();
    var memo = $("#memo_jq").val();

    var row = $("<div></div>");
    row.addClass("row");
    var button = $("<li><button>削除</button></li>");
    button.on("click", function(evt) {
        evt.target.parentNode.parentNode.remove();
    });
    row.append(
        $(`<li>${num}</li>`),
        $(`<li>${name}</li>`),
        $(`<li>${title}</li>`),
        $(`<li>${memo}</li>`),
        button
    );
    $("#ul_jq").append(row);
});
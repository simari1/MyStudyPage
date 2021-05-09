"use strict";

$(function() {
  // 〜処理〜
  init();
});

var tiles = [];


function init(){
  for (let index = 0; index < 4; index++) {
    $("#table").append("<tr><td></td><td></td><td></td><td></td></tr>");
    
    $("tr:last td").each(function(i , e){
      if (index * 4 + i !== 0) {
        $(e).text(index * 4 + i);
      }

      tiles.push(e);
    })
  }

  $('td').on('click', function(e){
    //https://qiita.com/bashun/items/bcda5f4ce8835cd4b1b4
    var rowIndex = $(this).parent()[0].rowIndex;
    var cellIndex = e.target.cellIndex;
    var i = rowIndex * 4 + cellIndex;

    if (i - 4 >= 0 && $(tiles[i-4]).html() == 0) {
      swap(i, i-4);
    }else if(i+4 < 16 && $(tiles[i+4]).html() == 0){
      swap(i, i+4);
    }else if(i%4 != 0 && $(tiles[i-1]).html() == 0){
      swap(i, i-1);
    }else if(i%4 != 3 && $(tiles[i+1]).html() == 0){
      swap(i, i+1);
    }
  });

  for (let index = 0; index < 1000; index++) {
    var n = Math.floor(Math.random() * 16);
    $(tiles[n]).trigger("click");
  }
}

function swap(i, j){
  var tmp = $(tiles[i]).html();
  $(tiles[i]).html($(tiles[j]).html());
  $(tiles[i]).html($(tiles[j]).html());
  $(tiles[j]).html(tmp);
  $(tiles[j]).html(tmp);
}
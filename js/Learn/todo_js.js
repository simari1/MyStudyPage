var num = 0;

//javascript版の追加ボタン押下処理
document.getElementById("button_js").onclick = function() {
    //Noのカウンタ
    num++;

    //入力値の取得
    var name = document.getElementById("name_js").value;
    var title = document.getElementById("title_js").value;
    var memo = document.getElementById("memo_js").value;

    //********************
    //table用ロジック
    //********************
    addToJsTable(num, name, title, memo);

    //********************
    //ul用ロジック
    //********************
    var ul = document.getElementById("ul_js");
    var div = document.createElement("div");

    //rowクラスを追加してUIをそろえる
    div.classList.add("row");
    addToJsUl(num, div);
    addToJsUl(name, div);
    addToJsUl(title, div);
    addToJsUl(memo, div);

    //削除ボタンの追加
    var li = document.createElement('li');
    var button = document.createElement('button');
    var text = document.createTextNode("削除");
    button.appendChild(text)

    //削除用ロジックを紐付け
    button.addEventListener("click", removeli, false);

    //最終的に行追加
    li.appendChild(button);
    div.appendChild(li);
    ul.appendChild(div);
}

//Tableに行を追加する共通処理
function addToJsTable(num, name, title, memo) {
    var table = document.getElementById("table_js");
    var row = table.insertRow();

    //削除用ロジックを紐付け
    row.addEventListener("click", removetr, false);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    cell0.innerHTML = num;
    cell1.innerHTML = `${name}`;
    cell2.innerHTML = `${title}`;
    cell3.innerHTML = `${memo}`;
    cell4.innerHTML = "<button>削除</button>";
}


//ulに行を追加する共通処理
function addToJsUl(param, div) {
    var li = document.createElement('li');
    var text = document.createTextNode(param);
    li.appendChild(text);
    div.appendChild(li);
}

function removeli(e) {
    e.target.parentNode.parentNode.remove();
}

function removetr(e) {
    e.target.parentNode.parentNode.remove();
}
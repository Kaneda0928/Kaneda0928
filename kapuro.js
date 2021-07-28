//class 'add-btn' を取得
var e = document.getElementById('submit');

e.addEventListener('click', function() {
    var listText = document.getElementById('todo');
    var text = document.createTextNode(listText.value);
    var li = document.createElement('li');
    var list = document.getElementById('bbb');
  //作成したliタグにtextboxに入力した値textを追加
    li.appendChild(text);
    list.appendChild(li);
    console.log(listText.value);
});

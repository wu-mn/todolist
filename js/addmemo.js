function checkMemo() {
  var x;
  var r = confirm("メモを表示するか、編集するか");
  var e = window.event || arguments.callee.caller.arguments[0]
  target = e.srcElement || e.target;
  var key = target.getAttribute('id');
  if (r == true) {
    var value1 = localStorage.getItem(key);
    console.log(value1);
    document.getElementById("memo").innerHTML = value1;
  }
  else {
    addmemo();
  }
}

function addmemo() {
  var e = window.event || arguments.callee.caller.arguments[0]
  target = e.srcElement || e.target;
  var key = target.getAttribute('id');
  var newtask = prompt("メモ内容は：", "");
  if (newtask == null || newtask == "") {
    // txt = "";
  } else {
    document.getElementById("memo").innerHTML = newtask;
    localStorage.setItem(key, newtask);


  }
}

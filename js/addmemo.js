function checkMemo() {
  var x;
  var r = confirm("メモを表示するか、編集するか");
  var e = window.event || arguments.callee.caller.arguments[0]
  target = e.srcElement || e.target;
  var key = target.getAttribute('id');
  if (r == true) {
    var value1 = localStorage.getItem(key);
    var value2 = localStorage.getItem(key + "time");
    document.getElementById("memo").innerHTML = value1;
    if (document.getElementById("saveTime").value == null) {
      document.getElementById("saveTime").setAttribute("display", "none")
    } else {
      document.getElementById("saveTime").innerHTML = "記入時間は" + value2;
    }
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
    document.getElementById("saveTime").setAttribute("display","none")
  } else {
    document.getElementById("memo").innerHTML = newtask;
    localStorage.setItem(key, newtask);
    var now = new Date();
    localStorage.setItem(key + "time", now.toLocaleString());
    document.getElementById("saveTime").innerHTML = "記入時間は"+ localStorage.getItem(key + "time");

  }
}

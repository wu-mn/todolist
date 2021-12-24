var id = 1;
var subId = 1;
// var subLevel = 2;
function addNewTask() {
  var e = window.event || arguments.callee.caller.arguments[0]
  e.stopPropagation();
  var todotext = document.getElementById("todothing").value;
  task = document.createElement('div');
  div = document.createElement('span');
  task.className = 'todotag';
  div.innerHTML = todotext;
  // div.addEventListener('click', checkMemo);
  task.appendChild(div);
  task.addEventListener('click', checkMemo);
  createBtnSet();
  document.getElementById("list").appendChild(task);
  task.setAttribute('id', "task" + id);
  id++;
  task.setAttribute('level', '1');
  document.getElementById("todothing").value = "";
  document.getElementById("saveTime").innerHTML = "";
  document.getElementById("memo").innerHTML = "";
  // document.getElementById("add").removeAttribute("disabled");
}
function createaddNewSubTaskBtn() {
  var btn = document.createElement('button');
  btn.className = 'btn-s';
  btn.innerHTML = 'subadd';
  btn.addEventListener('click', addNewSubTask);
  return btn;
}
function addNewSubTask() {
  var e = window.event || arguments.callee.caller.arguments[0]
  e.stopPropagation();
  var txt;
  var subtask = prompt("サブタスク追加してください：", "");
  if (subtask == null || subtask == "") {
  } else {
    task = document.createElement('div');
    div = document.createElement('span');
    task.className = 'todotag';
    div.innerHTML = subtask;
    task.appendChild(div);
    //編集と削除ボタン追加
    createBtnSet();
    // task.appendChild(btnDiv);
    this.parentElement.parentElement.appendChild(task);
    task.setAttribute('id', "subId" + subId);
    if (task.parentElement.getAttribute("level") == 1) {
      task.setAttribute('level', 2);
    } else if(task.parentElement.getAttribute("level") == 2){
      task.setAttribute('level', 3);
      document.getElementById("subId" + subId).children[1].children[1].setAttribute("disabled", true);
      document.getElementById("subId" + subId).children[1].children[1].style.color = "grey";
    }
    subId++;
    document.getElementById("saveTime").innerHTML = "";
    document.getElementById("memo").innerHTML = "";
  }
}

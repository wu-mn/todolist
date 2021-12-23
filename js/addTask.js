var id = 0;
var subId = 1;
function addNewTask() {
  var e = window.event || arguments.callee.caller.arguments[0]
  e.stopPropagation();
  var todotext = document.getElementById("todothing").value;
  task = document.createElement('div');
  div = document.createElement('span');
  task.className = 'todotag';
  div.innerHTML = todotext;
  // div.addEventListener('click', checkMemo);
  task.setAttribute('id', id + 1);
  id++;
  task.appendChild(div);
  task.addEventListener('click', checkMemo);
  createBtnSet();
  document.getElementById("list").appendChild(task);
  document.getElementById("todothing").value = "";
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
    var todotext = document.getElementById("todothing").value;
    task = document.createElement('div');
    task.setAttribute('id', id + subId*0.1);
    div = document.createElement('span');
    task.className = 'todotag';
    div.innerHTML = subtask;
    task.appendChild(div);
    //編集と削除ボタン追加
    createBtnSet();
    // task.appendChild(btnDiv);
    this.parentElement.appendChild(task);
  }
}

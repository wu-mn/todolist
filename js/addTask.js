function addNewTask() {
  var todotext = document.getElementById("todothing").value;
  task = document.createElement('div');
  div = document.createElement('span');
  task.className = 'todotag';
  div.innerHTML = todotext;
  task.appendChild(div);
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
  var txt;
  var subtask = prompt("サブタスク追加してください：", "");
  if (subtask == null || subtask == "") {
  } else {
    var todotext = document.getElementById("todothing").value;
    task = document.createElement('div');
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

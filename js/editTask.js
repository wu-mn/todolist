function createEditTaskBtn() {
  var btn = document.createElement('button');
  btn.className = 'btn-c';
  btn.innerHTML = 'Edit';
  btn.addEventListener('click', EditTask);
  return btn;
}
function EditTask() {
  var e = window.event || arguments.callee.caller.arguments[0]
  e.stopPropagation();
  var txt;
  var newtask = prompt("編集内容は：", "");
  if (newtask == null || newtask == "") {
    // txt = "";
  } else {
    this.parentElement.previousElementSibling.innerText = newtask;
  }
}

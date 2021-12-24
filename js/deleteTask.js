function creatDeleteBtn() {
  var btn = document.createElement('button');
  btn.className = 'btn-d';
  btn.innerHTML = 'delete';
  btn.addEventListener('click', deleteTask);
  return btn;
}
function deleteTask() {
  this.parentElement.parentElement.remove();
  var e = window.event || arguments.callee.caller.arguments[0]
  e.stopPropagation();
  localStorage.removeItem(target.getAttribute('id'));
  localStorage.removeItem(target.getAttribute('id') + "time");
  document.getElementById("saveTime").innerHTML = "";
  document.getElementById("memo").innerHTML = "";
}

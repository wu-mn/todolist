function creatDeleteBtn() {
  var btn = document.createElement('button');
  btn.className = 'btn-d';
  btn.innerHTML = 'delete';
  btn.addEventListener('click', deleteTask);
  return btn;
}
function deleteTask() {
  this.parentElement.parentElement.remove();
}

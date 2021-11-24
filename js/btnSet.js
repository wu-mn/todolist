function createBtnSet() {
  //編集と削除ボタン追加
  var btnDiv = document.createElement('div');
  var deleteB = new Object();
  var subaddB = new Object();
  var EditB = new Object();
  deleteB = creatDeleteBtn();
  subaddB = createaddNewSubTaskBtn();
  EditB = createEditTaskBtn();

  btnDiv.append(deleteB);
  btnDiv.append(subaddB);
  btnDiv.append(EditB);
  task.appendChild(btnDiv);
}

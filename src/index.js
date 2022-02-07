import "./styles.css";

const onclickAdd = () => {
  addToList(document.getElementById("inputtext").value);
  document.getElementById("inputtext").value = "";
};

const addToList = (text) => {
  //値取得
  const val = text;

  //枠
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  //内容
  const p = document.createElement("p");
  p.innerText = val;

  //完了ボタン
  const button1 = document.createElement("button");
  button1.innerHTML = "完了";
  button1.addEventListener("click", (event) => {
    addToCompList(event.currentTarget.previousElementSibling.innerText);
    event.currentTarget.parentNode.parentNode.remove();
  });

  //削除ボタン
  const button2 = document.createElement("button");
  button2.innerHTML = "削除";
  button2.addEventListener("click", (event) => {
    //const parent = this.parentNode;
    event.currentTarget.parentNode.parentNode.remove();
  });

  //要素作成
  div.appendChild(p);
  div.appendChild(button1);
  div.appendChild(button2);

  li.appendChild(div);

  //
  document.getElementById("uncomp-ul").appendChild(li);
};

const addToCompList = (text) => {
  const li = document.createElement("li");
  const button3 = document.createElement("button");
  button3.innerText = "戻す";
  button3.addEventListener("click", (event) => {
    event.currentTarget.parentNode.parentNode.remove();
    addToList(event.currentTarget.previousElementSibling.innerText);
  });

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  div.appendChild(p);
  div.appendChild(button3);

  li.appendChild(div);
  document.getElementById("comp-ul").appendChild(li);
};

document
  .getElementById("addbutton")
  .addEventListener("click", () => onclickAdd());

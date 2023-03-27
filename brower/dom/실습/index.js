const main = document.querySelector("main");
const input = document.querySelector("input");
// const removeBtns = document.querySelectorAll(".remove");

// 생성
const onInput = (event) => {
  const span = document.createElement("span");
  span.setAttribute("class", "context");
  span.textContent = event.target.value;

  const button = document.createElement("button");
  button.setAttribute("class", "remove");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash");
  button.append(i);

  const div = document.createElement("div");
  div.setAttribute("class", "mainDiv");

  div.append(span);
  div.append(button);

  main.append(div);

  event.target.value = "";

  button.addEventListener("click", onRemove);
};

// 삭제
const onRemove = (event) => {
  event.target.parentElement.parentElement.parentElement.remove();
};

input.addEventListener("change", onInput);
// removeBtns.forEach((btn) => {
//   btn.addEventListener("click", onRemove);
// });

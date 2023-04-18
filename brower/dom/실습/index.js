const main = document.querySelector("main");
const input = document.querySelector("input");

/**
 * @desc: input에 입력된 값을 받아서 DOM을 생성하는 함수
 */
const onInput = (event) => {
  if (event.target === "") {
    input.focus();
    return;
  }

  const item = onCreate(event.target.value);
  main.append(item);
  item.scrollIntoView({ behavior: "smooth", block: "center" });

  event.target.value = "";
  input.focus();
};

/**
 * @desc: DOM을 생성하는 함수
 */
function onCreate(text) {
  const span = document.createElement("span");
  span.setAttribute("class", "context");
  span.textContent = text;

  const button = document.createElement("button");
  button.setAttribute("class", "remove");
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash");
  button.append(i);

  const div = document.createElement("div");
  div.setAttribute("class", "mainDiv");

  div.append(span);
  div.append(button);
  button.addEventListener("click", () => {
    main.removeChild(div);
  });

  return div;
}

input.addEventListener("change", onInput);

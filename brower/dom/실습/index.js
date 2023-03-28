const main = document.querySelector("main");
const input = document.querySelector("input");

// 생성
const onInput = (event) => {
  if (event.target === "") {
    input.focus();
    return;
  }
  // 추가한 것을 담은 객체 div
  const item = onCreate(event.target.value);

  // main DOM에 집어넣기
  main.append(item);

  // input 초기화
  event.target.value = "";
  input.focus();
};

// DOM 생성 함수
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

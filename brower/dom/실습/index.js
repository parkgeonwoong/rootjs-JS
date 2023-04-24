const items = document.querySelector(".items");
const input = document.querySelector("input");
const form = document.querySelector(".new-form");

/**
 * @desc: input에 입력된 값을 받아서 DOM을 생성하는 함수
 */
const onInput = () => {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = onCreate(text);
  items.append(item);
  item.scrollIntoView({ behavior: "smooth", block: "center" });

  input.value = "";
  input.focus();
};

/**
 * @desc: DOM을 생성하는 함수
 *
 * @개선
 * - 이벤트 위임하는 방식이 없을까? 어떻게 해야할까?
 * - 품고있는 상단의 노드에서 작성
 */
let id = 0;

function onCreate(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <span class="context">${text}</span>
    <button class="remove">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  `;
  id++;

  return itemRow;
}

// input.addEventListener("change", onInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onInput();
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id && event.target.tagName === "I") {
    const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDelete.remove();
  }
});

// 수정전
// function onCreate(text) {
//   const itemRow = document.createElement("li");
//   itemRow.setAttribute("class", "item__row");
//   const span = document.createElement("span");
//   span.setAttribute("class", "context");
//   span.textContent = text;

//   const button = document.createElement("button");
//   button.setAttribute("class", "remove");
//   const i = document.createElement("i");
//   i.classList.add("fa-solid", "fa-trash");
//   button.append(i);

//   itemRow.append(span);
//   itemRow.append(button);
//   button.addEventListener("click", () => {
//     items.removeChild(itemRow);
//   });
// }

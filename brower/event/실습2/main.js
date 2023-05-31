/**
 * 차이점
 * 1. getBoundingClientRect()를 사용해서 좌표를 구하지 않음 -> 정확한 사이즈 디테일이 부족했음
 * 2. 아이템 생성 함수의 매개변수를 활용하지 못함 -> 객체 생성을 하나의 기능으로 잡음
 */

const CARROT_SIZE = 80;
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

function initGame() {
  console.log(fieldRect);
  addItem("carrot", 5, "../실습/img/carrot.png");
  addItem("bug", 5, "../실습/img/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

initGame();

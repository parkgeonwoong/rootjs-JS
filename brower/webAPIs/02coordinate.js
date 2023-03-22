/**
 * @desc : 브라우저 좌표 구하기
 *
 * @NOTE:
 * 1. 클래스 추가: className = '' || classList.add('' )
 * 2. querySelectorAll은 배열 → addEventListener 추가시 forEach
 * 3. 위에서 각각의 요소 확인 → event.target
 * 4. Element.getBoundingClientRect()
 * 5. clientX,Y 와 pageX,Y 차이
 */

const main = document.querySelector(".main");
const btn = document.querySelectorAll("button");

// 박스들 생성
for (let i = 0; i < 10; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = "skyblue";
  main.append(box);
}

// 박스들 클릭 시 좌표 (domRect, ClientX,Y , PageX,Y)
const boxes = document.querySelectorAll(".box");

const boxClick = (event) => {
  const box = event.target;

  if (box.style.backgroundColor === "skyblue")
    box.style.backgroundColor = "blue";
  else box.style.backgroundColor = "skyblue";

  const rect = event.target.getBoundingClientRect();

  console.log(rect);
  console.log("ClientX,Y: ", event.clientX, event.clientY);
  console.log("PageX,Y: ", event.pageX, event.pageY);
};

boxes.forEach((box) => {
  box.addEventListener("click", boxClick);
});

/**
 * @desc : [추가] 버튼에 따라 스크롤 이동
 * window.scrollBy(X, Y) 는 현재 위치를 기준(상대위치)
 * window.scrollTo(X, Y) 는 왼쪽 상단을 기준(절대위치)
 * Element.scrollIntoView() 호출한 요소로 이동
 */
btn[0].addEventListener("click", function () {
  window.scrollBy({ top: 100, left: 100, behavior: "smooth" });
});

btn[1].addEventListener("click", function () {
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
});

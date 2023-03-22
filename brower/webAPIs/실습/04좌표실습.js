/**
 * @desc
 * 1. 수평선, 수직선, 타켓점, 좌표 보여줄것
 * 2. mousemove 이벤트
 * 3. 브라우저 안에서 움직임
 */

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// 브라우저 document에서 움직임 감지
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});

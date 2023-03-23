/**
 * @desc
 * 1. 수평선, 수직선, 타켓점, 좌표 보여줄것
 * 2. mousemove 이벤트
 * 3. 브라우저 안에서 움직임
 *
 * @TODO:
 * - 성능개선이 필요함 → [렌더링과정]에서 top,left는 layout을 바꿔버린다
 * - 그러기 때문에 composite, painting정도만 바뀌는 것으로 교체해주면 성능이 개선된다. → transform
 */

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  // 브라우저 document에서 움직임 감지
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // ✅성능개선
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.innerHTML = `${x}px, ${y}px`;

    /* 
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
   */
  });
});

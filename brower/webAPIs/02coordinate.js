const main = document.querySelector(".main");

// 박스들 생성
for (let i = 0; i < 10; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = "skyblue";
  main.append(box);
}

// 박스들 클릭 시 좌표 구해보기
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

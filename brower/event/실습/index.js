const start = document.querySelector(".start");
const retry = document.querySelector(".retry");
const clock = document.querySelector(".clock");
const modal = document.querySelector(".modal-overlay");
const body = document.querySelector("body");
const response = document.querySelector(".response");

let startFlag = true;
let timeLimit = 3;
let time;
// 오디오: https://mjmjmj98.tistory.com/31
let audioBg = new Audio("./sound/bg.mp3");
let audioWin = new Audio("./sound/game_win.mp3");

// 시작 클릭
function onStart() {
  // 타이머 10초
  // https://curryyou.tistory.com/328
  if (startFlag) {
    time = setInterval(() => {
      clock.innerHTML = `${timeLimit}초`;
      timeLimit--;

      if (timeLimit < 0) {
        clearInterval(time);
        clock.innerHTML = `시간 초과`;
        flag = true;
        onModal(false);
      }
    }, 1000);

    startFlag = false;
    start.innerHTML = `<i class="fa-solid fa-stop"></i>`;
    audioBg.play();
    createObj();
  } else {
    clearInterval(time);
    start.innerHTML = `<i class="fa-solid fa-play"></i>`;
    startFlag = true;
  }
}
console.log(
  "높이: ",
  window.outerHeight,
  " 너비: ",
  window.outerWidth,
  "inner: ",
  window.innerWidth
);
// 버그,당근 생성
function createObj() {
  for (let i = 0; i < 10; i++) {
    const bugObj = document.createElement("img");
    bugObj.setAttribute("src", "./img/bug.png");
    bugObj.style.transform = `translate(${
      Math.random() * (window.innerWidth / 2)
    }px, ${Math.random() * (window.innerHeight / 2)}px)`;
    bugObj.style.cursor = "pointer";
    bugObj.addEventListener("click", () => onModal(false));
    response.append(bugObj);
  }
}

// 모달창
// http://yoonbumtae.com/?p=3632
function onModal(state) {
  const title = document.querySelector(".modal-title");
  if (state) {
    modal.style.display = "flex";
    title.innerHTML = `You Win 🎉`;
    audioWin.play();
  } else {
    modal.style.display = "flex";
    title.innerHTML = `You Lose 💩`;
  }
}

start.addEventListener("click", onStart);
retry.addEventListener("click", () => {
  location.reload();
});

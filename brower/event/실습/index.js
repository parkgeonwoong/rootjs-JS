const start = document.querySelector(".start");
const retry = document.querySelector(".retry");
const clock = document.querySelector(".clock");
const modal = document.querySelector(".modal-overlay");

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
  } else {
    clearInterval(time);
    start.innerHTML = `<i class="fa-solid fa-play"></i>`;
    startFlag = true;
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

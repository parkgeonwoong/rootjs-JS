/**
 * 차이점
 * 1. getBoundingClientRect()를 사용해서 좌표를 구하지 않음 -> 정확한 사이즈 디테일이 부족했음
 * 2. 아이템 생성 함수의 매개변수를 활용하지 못함 -> 객체 생성을 하나의 기능으로 잡음
 * 3. 랜덤함수를 생성 -> 랜덤의 범위를 찾아보지 못함
 * 4. 기능별로 함수를 생성해서 호출하는 형식
 * 5. 아이콘을 바꾸는 방법 -> classList.add,remove로 활용
 * 6. 객체 생성시 중복생성 때문에 field.innerHTML = '' 로 표현
 * 7. 각각의 객체(당근,버그)에 이벤트를 넣어주는 것이 아닌 -> field에 이벤트위임
 * 8. event.target에서 target.matches 조건으로 당근,버그 구별
 * ∴ https://github.com/parkgeonwoong/rootjs-JS/blob/849fb0868a8f432a31b72beab43fcbdf806b8e18/brower/event/%EC%8B%A4%EC%8A%B52/main.js
 *
 * FIXME:
 * html을 보고 섹션별로 분할 필요성
 * 1. 팝업창 클래스로 분할
 * 2. 필드 클래스로 분할
 */

import PopUp from "./popup.js";
import Field from "./field.js";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const carrotSound = new Audio("../실습/sound/carrot_pull.mp3");
const bugSound = new Audio("../실습/sound/bug_pull.mp3");
const alertSound = new Audio("../실습/sound/alert.wav");
const bgSound = new Audio("../실습/sound/bg.mp3");
const winSound = new Audio("../실습/sound/game_win.mp3");

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item) {
  if (!started) {
    return;
  }
  if (item === "carrot") {
    score++;
    updateScoreBoard();
    if (CARROT_COUNT === score) {
      finishGame(true);
    }
  } else if (item === "bug") {
    finishGame(false);
  }
}

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

function startGame() {
  started = true;
  initGame();
  showStopBtn();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}
function stopGame() {
  started = false;
  stopGameTimer();
  hideGameBtn();
  gameFinishBanner.showWithText("Replay?");
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameBtn();
  win ? playSound(winSound) : playSound(bugSound);
  stopSound(bgSound);
  stopGameTimer();
  gameFinishBanner.showWithText(win ? "YOU WIN" : "YOU LOSE");
}

function showStopBtn() {
  const icon = document.querySelector(".changeIcon");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}

function hideGameBtn() {
  gameBtn.style.visibility = "hidden";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(score === CARROT_COUNT);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

/**
 * 게임 시작 및 객체 생성
 */
function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}

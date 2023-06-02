/**
 * 차이점
 * 1. getBoundingClientRect()를 사용해서 좌표를 구하지 않음 -> 정확한 사이즈 디테일이 부족했음
 * 2. 아이템 생성 함수의 매개변수를 활용하지 못함 -> 객체 생성을 하나의 기능으로 잡음
 * 3. 랜덤함수를 생성 -> 랜덤의 범위를 찾아보지 못함
 * 4. 기능별로 함수를 생성해서 호출하는 형식
 * 5. 아이콘을 바꾸는 방법 -> classList.add,remove로 활용
 * 6. 객체 생성시 중복 안되게 field.innerHTML = '' 로 표현
 * 7. 각각의 객체에 이벤트를 넣어주는 것이 아닌 field에 이벤트위임을 해야함
 * 8. event.target에서 target.matches로 조건
 */

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const PopUp = document.querySelector(".pop-up");
const PopUpMessage = document.querySelector(".pop-up__message");
const PopUpRefresh = document.querySelector(".pop-up__refresh");

const carrotSound = new Audio("../실습/sound/carrot_pull.mp3");
const bugSound = new Audio("../실습/sound/bug_pull.mp3");
const alertSound = new Audio("../실습/sound/alert.wav");
const bgSound = new Audio("../실습/sound/bg.mp3");
const winSound = new Audio("../실습/sound/game_win.mp3");

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener("click", onFieldClick);

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

PopUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
  showGameBtn();
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
  showPopUpWithText("Replay?");
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameBtn();
  win ? playSound(winSound) : playSound(bugSound);
  stopSound(bgSound);
  stopGameTimer();
  showPopUpWithText(win ? "YOU WIN" : "YOU LOSE");
}

function showStopBtn() {
  const icon = document.querySelector(".changeIcon");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function showGameBtn() {
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

function showPopUpWithText(text) {
  PopUpMessage.innerText = text;
  PopUp.classList.remove("pop-up--hide");
}

function hidePopUp() {
  PopUp.classList.add("pop-up--hide");
}

/**
 * 게임 시작 및 객체 생성
 */
function initGame() {
  score = 0;
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  addItem("carrot", CARROT_COUNT, "../실습/img/carrot.png");
  addItem("bug", BUG_COUNT, "../실습/img/bug.png");
}

function onFieldClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;

  if (target.matches(".carrot")) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (CARROT_COUNT === score) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    finishGame(false);
  }
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
    item.style.cursor = "pointer";
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

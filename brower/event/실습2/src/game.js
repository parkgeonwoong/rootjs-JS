import Field from "./field.js";
import * as sound from "./sound.js";

// Build pattern
export default class GameBuilder {
  WithGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  WithCarrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  WithBugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    console.log(this);
    return new Game(
      this.gameDuration, //
      this.bugCount, //
      this.carrotCount
    );
  }
}

class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.gameBtn = document.querySelector(".game__button");
    this.gameBtn.addEventListener("click", () => {
      if (this.started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.started = false;
    this.score = 0;
    this.timer = undefined;

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener((event) => this.onItemClick(event));
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopBtn();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }

  stop() {
    this.started = false;
    this.stopGameTimer();
    this.hideGameBtn();
    sound.playAlert();
    sound.stopBackground();
    this.onGameStop && this.onGameStop("cancel");
  }

  finish(win) {
    this.started = false;
    this.hideGameBtn();
    win ? sound.playWin() : sound.playBug();
    this.stopGameTimer();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(win ? "win" : "lose");
  }

  showStopBtn() {
    const icon = document.querySelector(".changeIcon");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }

  hideGameBtn() {
    this.gameBtn.style.visibility = "hidden";
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.score === this.carrotCount);
        return;
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }

  /**
   * 게임 시작 및 객체 생성
   */
  initGame() {
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
  }

  onItemClick(item) {
    if (!this.started) {
      return;
    }
    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard();
      if (this.carrotCount === this.score) {
        this.finish(true);
      }
    } else if (item === "bug") {
      this.finish(false);
    }
  }
}

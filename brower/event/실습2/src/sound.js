const carrotSound = new Audio("../실습/sound/carrot_pull.mp3");
const bugSound = new Audio("../실습/sound/bug_pull.mp3");
const alertSound = new Audio("../실습/sound/alert.wav");
const bgSound = new Audio("../실습/sound/bg.mp3");
const winSound = new Audio("../실습/sound/game_win.mp3");

export function playCarrot() {
  playSound(carrotSound);
}
export function playBug() {
  playSound(bugSound);
}
export function playAlert() {
  playSound(alertSound);
}
export function playWin() {
  playSound(winSound);
}
export function playBackground() {
  playSound(bgSound);
}
export function stopBackground() {
  stopSound(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

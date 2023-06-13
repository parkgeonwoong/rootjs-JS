/**
 * 차이점
 * 1. getBoundingClientRect()를 사용해서 좌표를 구하지 않음 → 정확한 사이즈 디테일이 부족했음
 * 2. 아이템 생성 함수의 매개변수를 활용하지 못함  → 객체 생성을 하나의 기능으로 잡음
 * 3. 랜덤함수를 생성  → 랜덤의 범위를 찾아보지 못함
 * 4. 기능별로 함수를 생성해서 호출하는 형식
 * 5. 아이콘을 바꾸는 방법   → classList.add,remove로 활용
 * 6. 객체 생성시 중복생성 때문에 → field.innerHTML = '' 로 표현
 * 7. 각각의 객체(당근,버그)에 이벤트를 넣어주는 것이 아닌  →  field에 이벤트위임
 *    event.target에서 target.matches 조건으로 당근,버그 구별
 *
 * ∴ https://github.com/parkgeonwoong/rootjs-JS/blob/849fb0868a8f432a31b72beab43fcbdf806b8e18/brower/event/%EC%8B%A4%EC%8A%B52/main.js
 *
 * 8. 타입스크립트에서 배웠던 인터페이스 선언처럼 → Object.freeze({}) 사용
 * 9. 여러함수의 내용이 중복 어떻게 처리할까? → 매개변수로 구별 또는 스위치
 *
 * FIXME:
 * html을 보고 섹션별로 분할 필요성
 * 1. 팝업창 클래스로 분할
 * 2. 필드 클래스로 분할
 * 3. 사운드 모듈 분리
 * 4. 게임 클래스로 분할
 *
 * TODO:
 * 1. 빌더 패턴으로 정보은닉
 */

import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";
import * as sound from "./sound.js";

const gameFinishBanner = new PopUp();

// 메서드 체이닝 (return this → 현재의 GameBuilder 객체를 반환하여, 다른 메서드를 연속적으로 호출)
const game = new GameBuilder()
  .WithGameDuration(5)
  .WithCarrotCount(5)
  .WithBugCount(5)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay?";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WIN";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST";
      sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});

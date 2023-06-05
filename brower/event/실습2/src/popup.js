/**
 * ❓궁금했던 부분
 * 1. this.onClick && this.onClick() 무엇을 뜻하는가?
 * - this.onClick는 setClickListener 메서드를 통해 설정된 콜백 함수를 나타냅니다.
 * -  this.onClick === this.onClick() 앞에 부분은 존재 여부, 뒤에 부분은 함수를 호출
 *
 * 2. setClickListener를 constructor안에 안만드는 이유?
 * - constructor은 객체의 초기화를 담당
 * - 생성자는 보통 객체를 생성할 때 한 번만 호출되므로, 이 시점에서 콜백 함수를 설정하면 해당 객체가 생성될 때마다 동일한 콜백 함수를 사용해야 하는 제약.
 * - setClickListener 메서드는 생성자 밖에서 호출할 수 있는 공개 메서드로서, 객체가 생성된 후에도 언제든지 호출하여 onClick 콜백 함수를 변경할 수 있다.
 *  이렇게 함으로써 객체의 동작을 동적으로 조정하거나 다른 콜백 함수를 할당할 수 있는 유연성을 제공.
 */

"use strict";

export default class PopUp {
  constructor() {
    this.PopUp = document.querySelector(".pop-up");
    this.PopUpMessage = document.querySelector(".pop-up__message");
    this.PopUpRefresh = document.querySelector(".pop-up__refresh");
    this.PopUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.PopUpMessage.innerText = text;
    this.PopUp.classList.remove("pop-up--hide");
  }

  hide() {
    this.PopUp.classList.add("pop-up--hide");
  }
}

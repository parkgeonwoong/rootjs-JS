"use strict";

import * as sound from "./sound.js";

export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});

const CARROT_SIZE = 80;

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", (event) => {
      this.onClick(event);
    });
  }

  init() {
    this.field.innerHTML = "";
    this._addItem("carrot", this.carrotCount, "../실습/img/carrot.png");
    this._addItem("bug", this.bugCount, "../실습/img/bug.png");
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick(event) {
    const target = event.target;

    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;

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
      this.field.appendChild(item);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

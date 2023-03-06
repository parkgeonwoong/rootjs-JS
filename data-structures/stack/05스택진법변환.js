/**
 * @desc: 모든 진법변환 함수 만들기
 */

import Stack from "./02스택클래스.js";

function baseConverter(decNumber, base) {
  let remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  console.log(baseString);
  return baseString;
}

baseConverter(17, 16);

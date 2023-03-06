/**
 * @desc: 2진수 변환 스택
 * - 컴퓨터에서 모든 것은 0과 1 표시되므로 컴퓨터 과학에서는 2진법이 중요
 */

import Stack from "./02스택클래스.js";

function divideBy2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  console.log(binaryString);
  return binaryString;
}

divideBy2(10);

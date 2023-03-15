/**
 * @desc : 개선된 버블정렬
 * - 맨 뒤는 이미 정렬이 되어있는데 할 필요가 없지 않을까?
 * - 안쪽 순회에서 바깥쪽 순회의 반복 횟수를 차감하면 불필요한 작업을 줄여보자
 */

import { Compare, defaultCompare, swap } from "./util";

function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

/**
 * @desc: 버블 정렬
 * 인접한 두 원소를 모두 비교하고 그 결과에 따라 두 원소의 위치를 서로 바꾼다
 */

import { ArrayList, Compare, defaultCompare, swap } from "./util.js";

export function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function createNonSortedArray(size) {
  const array = new ArrayList();

  for (let i = size; i > 0; i--) {
    array.insert(i);
  }

  return array.array;
}

const array = createNonSortedArray(5);
console.log(array);
console.log("bubble: ", bubbleSort(array));

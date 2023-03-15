/**
 * @desc : 삽입 정렬
 * 한 번에 한 원소씩 정렬된 배열을 만들어가는 알고리즘
 *
 * 첫 번째 원소는 이미 정렬된 상태라고 보고 2번째부터 순회
 *
 * 1. 정렬은 2번째 위치(index)의 값을 temp에 저장한다.
 * 2. temp와 이전에 있는 원소들과 비교하며 삽입해나간다.
 * 3. '1'번으로 돌아가 다음 위치(index)의 값을 temp에 저장하고, 반복한다.
 */

import { Compare, createNonSortedArray, defaultCompare } from "../util.js";

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;

  // 첫 번째 원소는 이미 정렬된 상태라고 보고 2번째부터 순회
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];

    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }

  return array;
}

const arr = insertionSort(createNonSortedArray(5));
console.log(arr);

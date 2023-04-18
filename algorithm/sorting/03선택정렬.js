/**
 * @desc: 선택정렬
 * 최솟값을 찾아 맨 앞으로 보내고, 그 다음으로 작은 값을 찾아 2번쨰 위치로 보내는 식으로 정렬
 *
 * @핵심
 * - 하나를 선택 → 인덱스 칸에 담음 → 나머지와 싹다 비교해서 최소값 찾으면 인덱스 칸에 넣음 → 교환
 *
 *
 * @알고리즘 진행방식
 * 1. 최솟값 가진 원소의 인덱스 담을 변수
 * 2. 최솟값 가진 인덱스를 i로 가정
 * 3. 배열을 순회할때 기준이 되는 i ~ length-1까지
 * 4. 내부 루프는 비교가 될 i ~ length 까지
 * 5. 작다면 최솟값을 원소값으로 갱신
 * 6. 찾은 작은값이 i와 다르면 교환
 */

import { ArrayList, Compare, defaultCompare, swap } from "../util.js";

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexmin;

  for (let i = 0; i < length - 1; i++) {
    indexmin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexmin], array[j]) === Compare.BIGGER_THAN) {
        indexmin = j;
      }
    }
    if (i !== indexmin) {
      swap(array, i, indexmin);
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

const array = selectionSort(createNonSortedArray(5));
console.log(array);

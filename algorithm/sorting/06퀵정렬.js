/**
 * @desc : 퀵 정렬
 * 분할 정보 방식으로 접근한다
 *
 * - 정렬 되어있지 않다
 * - 중간값 피벗으로 좌,우 파티션 나누고 → 좌측에서 > 피벗 멈추고, 우측 < 피벗 멈춰서 교환
 * ✅ 피벗(기준으로) 무조건 좌측 파티션은 피벗보다 작고, 우측 파티션은 피벗보다 큰 그룹으로 나뉜다
 * - 좌, 우측을 다시 파티션으로 정하고 반복
 *
 * @로직
 * 1. 배열의 중간지점에 위치한 피벗를 선택한다
 * 2. 2개의 포인트(배열의 첫번째 원소, 배열의 마지막 원소) 생성
 *  2-1. 피벗보다 큰 원소가 나올때까지 좌측 포인트 움직인다
 *  2-2. 피벗보다 작은 원소가 나올때까지 우측 포인트 움직인다
 *  2-3. 두 포인터에 해당하는 원소를 서로 교환한다 → 과정에서 좌측 포인터 > 우측 포인터 반복
 *  2-4. 피벗보다 작은 원소는 좌측, 피벗보다 큰 원소는 우측 → 파티션
 * 3. 피벗을 중심으로 나뉜 배열에 대해 정렬이 끝날 때까지 재귀적 반복
 */

import { swap } from "../util.js";

/**
 *
 * @param {*} array : 배열
 * @param 0 : left index
 * @param array.length-1 : right index
 * @param {*} compareFn : 비교 util
 */
export function quickSort(array) {
  return quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
  let index; // 더작은 원소 서브배열, 더큰 원소 서브배열로 나누어서 quick 재귀호출 가능하게

  // 원소가 1개인 배열은 이미 정렬
  if (array.length > 1) {
    index = parition(array, left, right);
    console.log("index: ", index, " array: ", array);

    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

function parition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  // 좌,우 위치가 역전될 때까지 파티션 반복
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

const arr = quickSort([3, 5, 1, 6, 4, 7, 2]);
console.log(arr);

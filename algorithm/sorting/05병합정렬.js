/**
 * @desc : 병합 정렬
 * @핵심 : 분할과 정복
 * - 정렬할 배열을 원소가 하나뿐인 배열 단위로 나뉠 때까지 분할하고, 반대로 이렇게 분할된 배열을 점점 더 큰 배열로 병합하면서 정렬을 완성한다
 * → 분할/정복 접근 방식 재귀 호출
 *
 * @로직
 * 1. 현재 배열을 반으로 쪼깬다. 배열의 시작 위치와, 종료 위치를 입력받아 둘을 더한 후 2를 나눠 그 위치를 기준으로 나눈다.
 * 2. 이를 쪼갠 배열의 크기가 0이거나 1일때 까지 반복한다.
 */

import { createNonSortedArray, defaultCompare } from "../util.js";

// 두 개의 정렬된 배열 left와 right를 합쳐서 하나의 정렬된 배열을 반환하는 merge 함수를 정의합니다.
function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];

  console.log("left.length: ", left.length, " right.length: ", right.length);
  while (i < left.length && j < right.length) {
    // left의 원소가 right보다 작으면 결과 배열에 집어넣고 인덱스 증가
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // 위에 비교조건에 의해 결과조건에 다 넣었지만 남은원소들(큰값들) 전부 결과배열에 더하기
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  console.log("result : ", result);
  console.log("");
  return result;
}

// 분할 재귀
export function mergeSort(array, compareFn = defaultCompare) {
  // 병합정렬은 원소가 하나밖에 남지 않을 때까지 작은 배열 여러개로 분할
  if (array.length > 1) {
    const { length } = array;
    const mid = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, mid), compareFn);
    const right = mergeSort(array.slice(mid, length), compareFn);
    console.log("left: ", left, "right: ", right);

    array = merge(left, right);
  }
  return array;
}

const arr = mergeSort(createNonSortedArray(5));
console.log(arr);

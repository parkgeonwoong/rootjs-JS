/**
 * @desc : 이진 탐색
 *
 * @로직 : 자료구조의 정렬이 끝났다는 전제하에
 * 1. 배열 중에서 원소를 하나 선택한다
 * 2. 원소가 검색할 원소와 일치하면 검색은 끝
 * 3. 검색할 원소가 선택한 원소보다 작다면, 선택한 원소가 좌측 원소들 중 하나일 것이기에 1번으로 돌아감
 * 4. 검색할 원소가 선택한 원소보다 크다면, 선택한 원소가 우측 원소들 중 하나일 것이기에 1번으로 돌아감
 */

import { quickSort } from "../sorting/06퀵정렬.js";

function binarySearch(array, value) {
  // 이진탐색은 정렬이 먼저 → 여기서는 퀵정렬로 정렬
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;

  // low가 high보다 작아야만 존재
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];

    // value가 우측
    if (element < value) {
      low = mid + 1;
    }
    // value가 좌측
    else if (element > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log("찾는 인덱스 값은: ", binarySearch([3, 5, 7, 1, 2, 9, 8], 8));

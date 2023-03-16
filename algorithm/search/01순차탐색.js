/**
 * @desc : 순차탐색
 * 원하는 원소를 찾을 때까지 자료구조 전체를 뒤져보는, 가장 비효율적인 알고리즘
 */

function sequentialSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

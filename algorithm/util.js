// 테스트를 위한 배열클래스 생성
export class ArrayList {
  constructor() {
    this.array = [];
  }

  insert(item) {
    this.array.push(item);
  }

  toString() {
    return this.array.join();
  }
}

// 테스트 배열 [5, 4, 3, 2, 1]
export function createNonSortedArray(size) {
  const array = new ArrayList();
  for (let i = size; i > 0; i--) {
    array.insert(i);
  }
  return array.array;
}

// 비교를 위한 객체
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

export const DOES_NOT_EXIST = -1;

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

// 비교 기본값
export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
  return a === b;
}

export function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

/**
 * @desc : Set 만들기
 */

class Set {
  constructor() {
    this.items = {};
  }

  // has 메소드 = 집합에 포함되어 있는 여부
  has(value) {
    // return value in this.items
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  sizeLegacy() {
    let count = 0;
    for (let prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  }

  values() {
    return Object.keys(this.items);
  }

  // 합집합
  union(otherSet) {
    const UnionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      UnionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      UnionSet.add(values[i]);
    }
    return UnionSet;
  }

  // 교집합
  intersection(otherSet) {
    const intersectionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  // 차집합
  difference(otherSet) {
    const differenceSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  // 부분집합
  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  }
}

const set = new Set();
// set.add(1);
// set.add(2);
// console.log(set.size());
// console.log(set.values());
// console.log(set.has(1));

const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(2);
setB.add(3);

const unionAB = setA.union(setB);
console.log("합집합: ", unionAB.values());

const intersectionAB = setA.intersection(setB);
console.log("교집합: ", intersectionAB.values());

const differenceAB = setA.difference(setB);
console.log("차집합: ", differenceAB.values());

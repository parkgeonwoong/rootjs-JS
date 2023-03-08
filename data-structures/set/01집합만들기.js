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
}

const set = new Set();
set.add(1);
set.add(2);
console.log(set.size());
console.log(set.values());
console.log(set.has(1));

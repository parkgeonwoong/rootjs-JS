/**
 * @desc : 딕셔너리 or 맵 구현 (23.03.09)
 * - Set처럼 [키, 키] 대신 [키, 값] 쌍으로 저장
 * - 배열 대신 객체(Object 인스턴스)에 원소를 보관
 */

export default class Dictionary {
  constructor() {
    this.items = {};
  }

  // [존재] 키에 해당하는 원소가 딕셔너리에 존재
  has(key) {
    return this.items.hasOwnProperty(key);
  }

  // [추가]
  set(key, value) {
    if (key !== null && value !== null) {
      this.items[key] = value;
    }
  }

  // [삭제]
  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  // [반환] 어떤 원소를 찾아 그 값을 알고 싶을 때
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  values() {
    let values = [];
    for (let i in this.items) {
      if (this.has(i)) {
        values.push(this.items[i]);
      }
    }
    return values;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  getItems() {
    return this.items;
  }
}

const dictionary = new Dictionary();

dictionary.set("park", "hello");
dictionary.set("geon", "world");
dictionary.set("woong", "react");

console.log(dictionary.getItems());
console.log(dictionary.size());
console.log(dictionary.has("woong"));
console.log(dictionary.values());

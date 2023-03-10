/**
 * @desc : 해시 테이블
 */

export default class HashTable {
  constructor() {
    this.table = [];
  }

  /**
   *  해시함수 구현
   * - loselose해시 함수로 구현 (아스키값 더함)
   */
  loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  put(key, value) {
    let index = this.loseloseHashCode(key);
    console.log(index, " - ", key);
    this.table[index] = value;
  }

  get(key) {
    return this.table[this.loseloseHashCode(key)];
  }

  remove(key) {
    this.table[this.loseloseHashCode(key)] = undefined;
    // ❓ undefined 하는 이유?
    // 어떤 인덱스엔 값이 할당되지 않은채 기본 값 undefined 라서.
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}

let hash = new HashTable();
// hash.put("park", "park@email.com");
// hash.put("geon", "geon@email.com");
// hash.put("woong", "woong@email.com");
// hash.put("Tyrion", "tyrion@email.com"); // 해시충돌
// hash.put("Aaron", "aaron@email.com"); // 해시충돌

// console.log(hash.get("woong"));
// console.log(hash.get("react"));

// hash.remove("woong");
// console.log(hash.get("woong"));

// console.clear();

// hash.print();

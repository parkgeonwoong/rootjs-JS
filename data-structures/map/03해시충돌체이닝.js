/**
 * @desc : 체이닝 (23.03.10)
 * 해시 충돌 해결법
 * 테이블의 인덱스별로 연결 리스트를  생성해 그 안에 원소를 저장하는 기법
 */

import { LinkedList } from "../linkedList/01연결리스트.js";
import HashTable from "./02해시맵.js";
import { ValuePair } from "./utils.js";

class HashTableSeparateChaining extends HashTable {
  put(key, value) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append(new ValuePair(key, value));
  }

  get(key) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] !== undefined) {
      // 키/값을 찾기 위해 연결 리스트를 순회
      let current = this.table[position].getHead();

      // 중간에 찾을경우
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }

        current = current.next;
      }

      // 처음, 마지막 원소일 경우
      if (current.element.key === key) {
        return current.element.value;
      }
    }

    return undefined;
  }

  remove(key) {
    let position = this.loseloseHashCode(key);

    // 제거하는 값 존재할 경우
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element);

          if (this.table[position].isEmpty()) {
            this.table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      // 처음이자 마지막 원소
      if (current.element.key === key) {
        this.table[position].remove(current.element);

        if (this.table[position].isEmpty()) {
          this.table[position] = undefined;
        }
        return true;
      }
    }

    return false;
  }
}

const hash = new HashTableSeparateChaining();

hash.put("woong", "woong@email.com");
hash.put("Tyrion", "tyrion@email.com"); // 해시충돌
hash.put("Aaron", "aaron@email.com"); // 해시충돌
hash.print();

console.log("");

hash.remove("Aaron");
hash.print();

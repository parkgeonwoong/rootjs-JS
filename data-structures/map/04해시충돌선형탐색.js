/**
 * @desc : 선형 탐색법
 * 새원소 추가 시 인데스가 이미 점유된 상태라면 인덱스+1을 찾아보고, 인덱스가 점유됐다면 인덱스+2를 찾아보는 식으로 충돌을 회피
 */

import HashTable from "./02해시맵.js";
import { ValuePair } from "./utils.js";

class HashTableLinearProbing extends HashTable {
  put(key, value) {
    // 해시함수로 인덱스 찾고
    let position = this.loseloseHashCode(key);

    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value);
    }

    // 다른 원소가 이미 들어간 상태
    else {
      let index = ++position;

      // 위치에 다른 원소가 있는지 점검
      while (this.table[position] !== undefined) {
        index++;
      }

      this.table[index] = new ValuePair(key, value);
    }
  }

  get(key) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = ++position;

        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }

    return undefined;
  }

  remove(key) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return (this.table[position] = undefined);
      } else {
        let index = ++position;

        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          return (this.table[index] = undefined);
        }
      }
    }

    return undefined;
  }
}

const hash = new HashTableLinearProbing();
hash.put("Jamie", "Jamie@email.com"); // 5
hash.put("Sue", "Sue@email.com"); // 5+1
hash.put("Tyrion", "tyrion@email.com"); // 16
hash.put("Aaron", "aaron@email.com"); // 16+1
hash.print();

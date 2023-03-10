/**
 * @desc : 해시충돌 사용하는 클래스 키,값 형태
 *  연결리스트 element값에 [key, value]로 들어가는 클래스
 */

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return "[" + this.key + " - " + this.value + "]";
  }
}

/**
 * [싱글 패턴]
 * 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴
 * - 데이터베이스 연결 모듈로 사용
 */

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getInstance() {
    return this.instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b);

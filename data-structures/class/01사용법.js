/**
 * @desc : 클래스
 */

class User {
  name = "geonWoong"; // 필드값

  // 생성자
  constructor() {
    this.name;
  }

  // 메소드
  sayHi() {
    console.log(this.name);
  }
}
const userTest = new User();
userTest.sayHi();

const user = new User("woong");
user.sayHi();

/**
 * ❓ 어떤 일이 벌어지는가?
 * 1. 새로운 객체가 생성
 * 2. 넘겨받은 인수와 함께 constructor가 자동으로 실행, 이때 인수 "woong"이 this.name에 할당
 */

// ❓ 타입은 뭘까?
console.log(typeof User); // function

// 클래스와 생성자 메서드 동일?
console.log(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드
console.log(User.prototype.sayHi);

// 현재 프로토타입의 메서드는 몇개?
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

/**
 * @desc : 순수 함수로 클래스
 */

// 1. 생성자 함수
function PureUser(name) {
  this.name = name;
}

// 2. prototype에 메서드를 추가
PureUser.prototype.sayHi = function () {
  console.log(this.name);
};

let user1 = new User("Park");
user1.sayHi();

/**
 * @desc : getter/setter
 */

class User2 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("너무 짧습니다.");
      return;
    }
    this._name = value;
  }
}

let user2 = new User2("geonn");
console.log(user2.name);
user2 = new User2("");

/**
 * @실습
 */

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = +"0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = +"0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = +"0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();

/**
 * this.timer가 constructor() 내부에서 선언되지 않은 이유는,
 * constructor()는 객체가 생성될 때 한 번만 호출되므로,
 * start() 함수 내에서 this.timer를 선언해주는 것이 더 효율적입니다.
 * 또한, stop() 함수에서 clearInterval()을 호출할 때 this.timer가 이미 생성되어 있어야 하기 때문에,
 * this.timer를 start() 함수 내에서 선언하는 것이 더 안전합니다.
 * 이러한 이유로 this.timer는 클래스 내부의 멤버 변수로서, start() 함수 내에서 선언되고, stop() 함수에서 사용되는 것입니다.
 */

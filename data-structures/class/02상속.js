/**
 * @desc : 클래스 상속
 */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} is ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log("Stop!");
  }
}

let animal = new Animal("동물");
animal.run(10);

// 상속
class Rabit extends Animal {
  // 생성자 상속
  constructor(name, jump) {
    super(name);
    this.jump = jump;
  }

  hide() {
    console.log(`${this.name} is hiding and ${this.jump}`);
  }
  // 메서드 오버라이딩
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabit("토끼", "10m");
rabbit.run(20);
rabbit.stop();

/**
 * @desc : 다음과 같은 절차로 rabbit.run의 존재를 확인합니다
 * 1. 객체 rabbit에 run을 확인 -> x
 * 2. rabbit의 프로토타입인 Rabbit.prototype에 메서드가 있나 확인 -> x
 * 3. extends를 통해 관계가 만들어진 Rabbit.prototype의 프로토타입, Animal.prototype에 메서드가 있나 확인 -> O
 */

/**
 * 클래스 필드 오버라이딩
 * ❓ 왜 이렇게 될까?
 * - 이유는 필드 초기화 순서 때문
 * - 생성자가 없기 때문에 super(...args) 부모에서 호출한다
 * - 순서상 부모에서 생성자가 진행되고 초기화해봤자 생성자에서 콘솔이 찍힘
 */

class Animal2 {
  name = "animal";

  constructor() {
    console.log(this.name);
  }
}

class Rabbit2 extends Animal2 {
  name = "rabbit";
}

new Animal2(); // animal
new Rabbit2(); // animal

/**
 * @실습
 * - Clock을 상속받는 ExtendedClock을 만들고, precision(정확도)이라는 매개변수도 추가해보세요.
 * - precision은 ‘초’ 사이의 간격을 의미하고, 기본값은 1000(1초)이 되어야 합니다.
 */

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

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

// 상속
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: "h:m:s",
  precision: 10000,
});

lowResolutionClock.start();

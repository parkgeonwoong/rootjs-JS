/**
 * @desc : this
 * @무엇 : "함수를 호출한 객체이다"
 * @왜? : 다른 속성에 접근할 때 유용하다
 * - 바로 앞에서 호출하는 것이라고 생각하자 (obj.main -> this = obj)
 * @참고
 * - https://www.youtube.com/watch?v=j6VkGimAs-E&t=923s
 */

// 전역 this
console.log("this: ", this);

// 객체 this
const obj = {
  name: "woong",
  main: function () {
    console.log("obj this: ", this.name);
  },
};

obj.main();

/**
 * @desc : 응용
 * - 함수로 선언해보고, 객체에서 갖다 쓴다면?
 */
function mix() {
  console.log(this);
}

const object = {
  name: "woong",
  mix: mix,
};

mix();
object.mix();

console.clear();

/**
 * @desc : this를 고정하는 방법은?
 * `bind`
 */

function main() {
  console.log(this);
}
const bindMain = main.bind({ name: "Hello" });
bindMain(); // {name: 'Hello'}

const obj2 = {
  bindMain,
};
obj2.bindMain(); // {name: 'Hello'}

console.clear();

// 화살표 함수
const obj3 = {
  name: "world",
  main3: () => {
    console.log(this);
  },
  main4: function () {
    console.log(this);
  },
};

obj3.main3();
obj3.main4();

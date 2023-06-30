const key1 = Symbol("key");
const key2 = Symbol("key");
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면 (전역 심볼 레지스트리)
const key3 = Symbol.for("key");
const key4 = Symbol.for("key");
console.log(key3 === key4); // true

// 글로벌 키에 만든것만 접근할 수 있다.
console.log(Symbol.keyFor(key3)); // key
console.log(Symbol.keyFor(key1)); // undefined

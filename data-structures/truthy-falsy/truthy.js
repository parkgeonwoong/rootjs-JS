function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(""); // falsy
testTruthy(0); // falsy
testTruthy(10); // truthy

const obj = { name: "John" };
testTruthy(obj); // truthy
testTruthy(obj.age); // falsy

console.log("park" == true); // false

/* ❓왜 false일까?
 * - loose equality(==)는 두 피연산자의 타입이 다르면 타입을 변환한 후 비교합니다.
 * - Number로 바꾸게 되는데, "park"는 숫자로 바꿀 수 없기 때문에 NaN이 되고, NaN은 false로 간주됩니다,  true = 1
 */

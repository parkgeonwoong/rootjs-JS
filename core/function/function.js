/**
 * 함수도 오브젝트이다. 참조하는 값 ref 주소값을 가리킨다.
 * const는 값 자체를 변경 X, let은 가능
 * 오브젝트 또한 주소값을 참조하기 때문에 값을 복사해서 바꾸더라도 다 바뀌어버린다.
 */

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function call(callback) {
  let some = callback(2, 3);
  return some;
}

console.log(call(divide));

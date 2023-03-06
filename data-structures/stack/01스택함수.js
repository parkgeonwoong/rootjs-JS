/**
 * @desc : 순수함수로 스택만들기
 * 추가적으로 클래스, ts로 만들어보면 좋을듯하다
 */

function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };
}

const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(17);
stack.print();
console.log(stack.peek(), stack.size());

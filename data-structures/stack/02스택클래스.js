/**
 * @desc : 클래스로 스택만들기
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    return console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.push(1);
stack.push(5);
stack.print();
console.log(stack.size());

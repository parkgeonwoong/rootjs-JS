/**
 * @desc : 큐 클래스로 구현
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

queue.dequeue();
queue.print();

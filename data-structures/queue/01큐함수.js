/**
 * @desc : 순수함수로 큐 만들기 23.03.06
 */

function Queue() {
  let items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

queue.dequeue();
queue.print();

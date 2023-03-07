/**
 * @desc: 우선순위큐 클래스
 * - 객체로 만드니까 생성자를 하나만 하고 enqueue에서 객체로 주는것으로 해보자
 */

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let item = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (item.priority < this.items[i].priority) {
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(item);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(new Error("큐가 빈값입니다."));
    }
    return this.items.pop();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    // console.log(this.items);
    let str = [];
    for (let i of this.items) {
      str.push(i.element);
    }
    console.log(str);
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.dequeue();
priorityQueue.enqueue(1, 2);
priorityQueue.enqueue(5, 1);
priorityQueue.print();

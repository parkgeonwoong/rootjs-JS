/**
 * @desc: 우선순위큐 클래스 타입스크립트로 에러 고치기
 * @FIXME:
 * Property 'priority' does not exist on type 'T'.
 * - items 속성에 priority가 없기 때문이다. -> 인터페이스 작성해서 items 초기화한 곳에 타입지정
 *
 * Argument of type 'T' is not assignable to parameter of type 'never'.
 * - str변수가 never[] 이기 때문에 제네릭 T[] 타입으로 지정
 */

interface Item<T> {
  element: T;
  priority: number;
}

class PriorityQueue<T> {
  private items: Item<T>[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T, priority: number) {
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
      console.log("큐가 빈값입니다.");
      return;
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
    let str: T[] = [];
    for (let i of this.items) {
      str.push(i.element);
    }
    console.log(str);
  }
}

const priorityQueue = new PriorityQueue();
// priorityQueue.dequeue();
priorityQueue.enqueue(1, 2);
priorityQueue.enqueue(5, 1);
priorityQueue.print();

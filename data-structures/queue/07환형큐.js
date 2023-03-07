/**
 * @desc : 환형큐(원형큐)
 * ❓왜 사용
 * - 배열로 선형 큐를 구현하면 Dequeue 할 때마다 앞의 공간이 비게 된다(앞에서 빠져나가므로).
 * - 이를 채우기 위해 데이터를 계속 앞으로 이동시키는 것도 문제다(불필요한 데이터 이동과 함께 처리 속도가 느려짐)
 *
 *  데이터를 넣고 가져오는 방향이 없는 구조이다. 단 큐의 크기가 지정되어 있어야 한다.
 */

class CircleQueue {
  constructor(size) {
    this.size = size;
    this.items = [];
    this.front = 0; // 앞(삭제)
    this.rear = 0; // 뒤(삽입)
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log(new Error("큐가 가득참."));
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
    }
  }

  dequeue() {
    let result = null;
    if (this.isEmpty()) {
      console.log(new Error("큐가 비었음"));
    } else {
      this.front = (this.front + 1) % this.size;
      result = this.items[this.front];
      this.items[this.front] = null;
    }
    return result;
  }

  print() {
    console.log(this.items);
    console.log("front: ", this.front, " rear: ", this.rear);
  }
}

const circleQueue = new CircleQueue(5);
circleQueue.enqueue(0);
circleQueue.enqueue(2);
circleQueue.enqueue(3);
circleQueue.dequeue();
circleQueue.enqueue(4);
circleQueue.enqueue(5);
circleQueue.print();

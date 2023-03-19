/**
 * @desc : 힙 구현
 */

class Heap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    this.heap.push(num);
  }
}

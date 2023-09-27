/**
 * @desc : 힙 구현
 * 힙은 최소값, 최대값을 찾아내는 연산을 빠르게 찾는 완전 이진트리 자료구조이다.
 *
 * https://haruisshort.tistory.com/293
 * https://www.youtube.com/watch?v=jfwjyJvbbBI&ab_channel=%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 새로 들어온 노드가 최소 힙의 조건에 맞는 자리를 찾도록 도와주는 메소드
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  // 루트 노드를 제거한 후 최소 힙의 조건에 맞도록 힙을 재정비하는 메소드
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 힙의 루트 노드를 제거
  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

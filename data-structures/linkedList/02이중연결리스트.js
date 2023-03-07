/**
 * @desc : 이중연결리스트
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // [삽입] 임의의 위치에 삽입
  insert(index, element) {
    // 범위 외의 값 확인
    if (index >= 0 && index <= this.length) {
      let node = new Node(element);
      current = this.head;
      previous, (cnt = 0);

      // 첫번째 위치삽입
      if (index === 0) {
        if (!head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      }
      // 마지막 위치삽입
      else if (index === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }
      // 중간 위치삽입
      else {
        while (cnt++ < index) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      }
      this.length++;

      return true;
    } else {
      return false;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();

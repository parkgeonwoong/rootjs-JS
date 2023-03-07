/**
 * @desc : 연결리스트 클래스
 * 글만 봐서는 이해가 안됨. -> 그림을 꼭 그려서 알고리즘을 설계하니 편했다.
 */

// Node 클래스는 연결리스트의 각 노드를 나타내며, 데이터와 다음 노드를 가리키는 링크를 가진다.
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// LinkedList 클래스는 실제 연결리스트를 구현하며, 각각의 노드를 링크를 통해 연결
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // [추가] 리스트 맨끝에 추가
  append(element) {
    let node = new Node(element),
      current;

    // 리스트가 비어 있다면
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // 마지막 원소를 발견할 때까지 순회
      while (current.next) {
        current = current.next;
      }
      // 마지막 노드에 다음 노드 할당
      current.next = node;
    }
    this.length++;
  }

  // [삭제] 원소의 위치를 기준으로 삭제
  // @params : index=삭제할 원소의 위치
  removeAt(index) {
    // 범위 외의 값인지 확인.
    if (index > -1 && index < this.length) {
      let current = this.head,
        previous,
        cnt = 0;

      // 첫번째 원소삭제
      if (index === 0) {
        this.head = current.next;
      } else {
        // 원하는 위치까지 순회
        while (cnt++ < index) {
          previous = current;
          current = current.next;
        }

        // 현재의 다음과 이전 것을 연결
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  /* // [삭제] 요소삭제
  remove(element) {
    if (!this.head) {
      return null;
    }

    if (this.head.element === element) {
      this.head = this.head.next;
      this.length--;
      return this.head;
    }

    let current = this.head;
    let previous = null;

    while (current && current.element !== element) {
      previous = current;
      current = current.next;
    }

    if (current === null) return null;

    previous.next = current.next;
    this.length--;

    return current.element;
  } */

  // [삭제] 코드 재사용
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  // [삽입] 임의의 위치에 삽입
  insert(index, element) {
    // index는 항상 범위 조심
    if (index >= 0 && index <= this.length) {
      let node = new Node(element),
        current = this.head;
      previous, (cnt = 0);

      // 첫번째 추가
      if (index === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (cnt++ < index) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    } else {
      return false;
    }
  }

  // [반환] 문자열로
  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }

  // [반환] 원소의 인덱스 반환
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // isEmpty
  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
// linkedList.remove(2);
linkedList.removeAt(0);
console.log(linkedList.indexOf(2));
console.log(linkedList.toString());

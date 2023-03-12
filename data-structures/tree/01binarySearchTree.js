/**
 * @desc : 이진탐색트리 클래스
 * 이진탐색트리의 자료구조가 내부적으로 어떻게 저장되는가?
 * - 이중연결리스트로 노드당 2개의 포인터 존재
 * - 각각 좌측, 우측 자식 노드를 가리킨다
 * - 트리 노드를 표현하는 Node 클래스 선언
 * - 트리에서는 키로 노드를 식별한다
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new Node(key);

    // 추가할 노드가 트리의 최초 노드일 경우
    if (this.root === null) {
      this.root = newNode;
    }
    // 루트를 제외한 다른 위치에 추가할 경우
    else {
      this.insertNode(this.root, newNode);
    }
  }

  // 새 노드를 추가할위치를 정확히 찾는 것
  insertNode(node, newNode) {
    // 좌측
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    // 우측
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

console.log(tree);

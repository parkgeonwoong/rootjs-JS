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

  // 1. [삽입]
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

  /**
   * @트리순회
   */
  // [순회] 중위순회
  // callback 함수에는 노드 방문 시 수행할 작업을 기술 (방문자 패턴)
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  // 방문이 좌 → 중앙 → 우
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // [순회] 전위순회
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  // 방문이 중앙 → 좌 → 우
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // [순회] 후위순회
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  // 방문이 좌 → 우 → 중앙
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /**
   * @트리검색
   */
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
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
tree.insert(6);

console.log(tree);

// 순회 출력
function printNode(value) {
  console.log(value);
}

tree.inOrderTraverse(printNode);
tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);

console.clear();

// 트리 검색
console.log("max: ", tree.max());
console.log(tree.search(8) ? "find" : "Not find");

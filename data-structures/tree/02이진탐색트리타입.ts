export class Node<T> {
  public key: T;
  public left: Node<T> | null;
  public right: Node<T> | null;

  constructor(key: T) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  public root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(key: T) {
    let newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: Node<T>, newNode: Node<T>) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(callback: Function) {
    if (this.root !== null) {
      this.inOrderTraverseNode(this.root, callback);
    }
  }

  inOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }
  // 방문이 좌 → 우 → 중앙
  postOrderTraverseNode(node: Node<T> | null, callback: Function) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node: Node<T> | null): Node<T> | null {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node: Node<T> | null) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  search(key: T) {
    return this.searchNode(this.root, key);
  }

  searchNode(node: Node<T> | null, key: T): boolean {
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

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node: Node<T> | null, key: T): Node<T> | null {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.minNode(node.right);
      if (aux !== null) {
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
      }

      return node;
    }
  }
}

let tree = new BinarySearchTree<Number>();
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

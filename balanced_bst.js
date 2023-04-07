const mergeSort = require("./merge-sort");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root = null;
  constructor(array) {
    this.array = array;
  }

  buildTree(array, start, end, sorted = false) {
    // base case
    if (start > end) return null;

    // Sort array first
    if (!sorted) array = mergeSort(array);

    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1, true);
    node.right = this.buildTree(array, mid + 1, end, true);
    return node;
  }

  insert(value, n = this.root) {
    if (n === null || value === n.data) {
      return 0;
    } else {
      value < n.data ? this.insert(value, n.left) : this.insert(value, n.right);
      if (value < n.data && n.left === null) {
        n.left = new Node(value);
      }
      if (value > n.data && n.right === null) {
        n.right = new Node(value);
      }
    }
  }

  delete(value, n = this.root) {
    // Base case
    if (n === null) {
      return n;
    }
    if (value < n.data) {
      n.left = this.delete(value, n.left);
      return n;
    }
    if (value > n.data) {
      n.right = this.delete(value, n.right);
      return n;
    } else {
      if (n.left === null) {
        return n.right;
      }
      if (n.right === null) {
        return n.left;
      } else {
        let copyN = n.right;
        let minValue = copyN.data;
        while (copyN.left !== null) {
          minValue = copyN.left.data;
          copyN = copyN.left;
        }
        n.data = minValue;
        this.delete(minValue, n.right);
        return n;
      }
    }
  }

  find(value, n = this.root) {
    if (n === null) return null;
    if (value === n.data) return n;
    else {
      return value < n.data
        ? this.find(value, n.left)
        : this.find(value, n.right);
    }
  }

  levelOrder(f, n = this.root) {
    let queue = [n];
    let array = [];

    while (queue.length > 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      array.push(queue[0].data);
      if (typeof f === "function") f(queue[0].data);
      queue.shift();
    }
    if (typeof f !== "function") return array;
  }

  levelOrderRec(f, n = this.root, queue = [n], array = [n.data]) {
    if (queue.length > 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
        array.push(queue[0].left.data);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
        array.push(queue[0].right.data);
      }
      if (typeof f === "function") f(queue[0].data);
      this.levelOrderRec(f, queue.shift(), queue, array);
    }
    if (typeof f !== "function") return array;
  }

  calcSize(n = this.root) {
    if (n === null) return;
    else return this.calcSize(n.left) + 1 + this.size(this.calcSize(n.right));
  }

  preOrder(f, n = this.root) {
    if (n === null) return;
    if (typeof f === "function") f(n.data);
    this.preOrder(f, n.left);
    this.preOrder(f, n.right);
  }

  inOrder(f, n = this.root) {
    if (n === null) return;
    this.inOrder(f, n.left);
    if (typeof f === "function") f(n.data);
    this.inOrder(f, n.right);
  }

  postOrder(f, n = this.root) {
    if (n === null) return;
    this.postOrder(f, n.left);
    this.postOrder(f, n.right);
    if (typeof f === "function") f(n.data);
  }

  height(value, n = this.root) {
    let queue = [n];
    if (queue.length > 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
    }

    if (n.data === value) return;
  }
}

let array = [5, 2, 7, 8, 0, -50, 100, 2043, 2042, -19, 1, 300, 400, 500];

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let binaryTree = new Tree();
let size = array.length;

binaryTree.root = binaryTree.buildTree(array, 0, size - 1);
binaryTree.insert(-18);
binaryTree.delete(7);
// binaryTree.levelOrder(console.log);
binaryTree.levelOrderRec(console.log);

// prettyPrint(binaryTree.root);
// binaryTree.preOrder(console.log);
// binaryTree.inOrder(console.log);
// binaryTree.postOrder(console.log);
// binaryTree.height(100);

// console.log(binaryTree.find(2042));
// console.log(binaryTree.node);

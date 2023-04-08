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
    if (!sorted) {
      let sortedArray = mergeSort(array);
      return this.buildTree(sortedArray, start, sortedArray.length - 1, true);
    } else {
      let mid = Math.floor((start + end) / 2);
      let node = new Node(array[mid]);
      node.left = this.buildTree(array, start, mid - 1, true);
      node.right = this.buildTree(array, mid + 1, end, true);
      return node;
    }
  }

  insert(value, node = this.root) {
    if (node === null || value === node.data) {
      return 0;
    } else {
      value < node.data
        ? this.insert(value, node.left)
        : this.insert(value, node.right);
      if (value < node.data && node.left === null) {
        node.left = new Node(value);
      }
      if (value > node.data && node.right === null) {
        node.right = new Node(value);
      }
    }
  }

  delete(value, node = this.root) {
    // Base case
    if (node === null) {
      return node;
    }
    if (value < node.data) {
      node.left = this.delete(value, node.left);
      return node;
    }
    if (value > node.data) {
      node.right = this.delete(value, node.right);
      return node;
    } else {
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      } else {
        let copyN = node.right;
        let minValue = copyN.data;
        while (copyN.left !== null) {
          minValue = copyN.left.data;
          copyN = copyN.left;
        }
        node.data = minValue;
        this.delete(minValue, node.right);
        return node;
      }
    }
  }

  find(value, node = this.root) {
    if (node === null) return null;
    if (value === node.data) return node;
    else {
      return value < node.data
        ? this.find(value, node.left)
        : this.find(value, node.right);
    }
  }

  levelOrder(f, node = this.root) {
    let queue = [node];
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

  levelOrderRec(f, node = this.root, queue = [node], array = [node.data]) {
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

  preOrder(f, node = this.root) {
    if (node === null) return;
    if (typeof f !== "function") {
      let arr = [];
      this.preOrder((node) => {
        arr.push(node);
      });
      return arr;
    }
    if (typeof f === "function") f(node.data);
    this.preOrder(f, node.left);
    this.preOrder(f, node.right);
  }

  inOrder(f, node = this.root) {
    if (node === null) return;
    this.inOrder(f, node.left);
    if (typeof f !== "function") {
      let arr = [];
      this.inOrder((node) => {
        arr.push(node);
      });
      return arr;
    }
    if (typeof f === "function") f(node.data);
    this.inOrder(f, node.right);
  }

  postOrder(f, node = this.root) {
    if (node === null) return;
    this.postOrder(f, node.left);
    this.postOrder(f, node.right);
    if (typeof f !== "function") {
      let arr = [];
      this.postOrder((node) => {
        arr.push(node);
      });
      return arr;
    }
    if (typeof f === "function") f(node.data);
  }

  height(node = this.root) {
    // base case
    if (node === null) return -1;
    else {
      let left = this.height(node.left);
      let right = this.height(node.right);
      return left > right ? left + 1 : right + 1;
    }
  }

  depth(node, root = this.root, dep = 0) {
    if (root === null || node === null) return 0;
    else if (node.data === root.data) return dep;
    else {
      let left = this.depth(node, root.left, dep + 1);
      let right = this.depth(node, root.right, dep + 1);
      return Math.max(left, right);
    }
  }

  isBalanced(tree = this.root, left = 0, right = 0) {
    let queue = [tree];
    let balanced = true;
    while (queue.length > 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
        left = this.height(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
        right = this.height(queue[0].right);
      }
      if (Math.max(left, right) - Math.min(left, right) > 1) {
        return (balanced = false);
      }
      queue.shift();
    }
    return balanced;
  }

  reBalance(tree = this.root) {
    if (tree === null) return 0;
    else {
      let arr = this.inOrder();
      return (this.root = this.buildTree(arr, 0, arr.length - 1, true));
    }
  }
}

module.exports = Tree;

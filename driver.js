const Tree = require("./balanced_bst");
const generateArray = require("./generateArray");
const prettyPrint = require("./prettyprint");

// Driver script. Follow along with comments at each stage to understand.

// Stage 1: Create a balanced binary search tree from an array of random numbers under 100.

let arr = generateArray.under100();
let binaryTree = new Tree();

binaryTree.root = binaryTree.buildTree(arr, 0, arr.length - 1);

// --------------------------------------------------------------

// Stage 2: Confirm that the tree is balanced by calling the isBalanced class method.

console.log("Is tree balanced? " + binaryTree.isBalanced());

// Stage 3: Print out all elements in: Level-order, pre-order, in-order and post-order by calling the respective class methods.

console.log("Level Order: " + binaryTree.levelOrder());
console.log("Level Order Recursion: " + binaryTree.levelOrderRec());
console.log("Preorder: " + binaryTree.preOrder());
console.log("InOrder: " + binaryTree.inOrder());
console.log("Postorder: " + binaryTree.postOrder());

// Stage 4: Unbalance the tree by adding several numbers over 100.

let arr2 = generateArray.over100();

arr2.forEach((e) => {
  binaryTree.insert(e);
});

// Stage 5: Confirm that the tree is unbalanced by calling the isBalanced class method.

console.log("Is tree balanced? " + binaryTree.isBalanced());

// Stage 6: Balance the tree by calling the rebalance class method.

binaryTree.reBalance();

// Stage 7: Confirm that the tree is balanced by calling the isBalanced class method.

console.log("Is tree balanced? " + binaryTree.isBalanced());

// Stage 8: Print out all elements in: Level-order, pre-order, in-order and post-order by calling the respective class methods.

console.log("Preorder: " + binaryTree.preOrder());
console.log("InOrder: " + binaryTree.inOrder());
console.log("Postorder: " + binaryTree.postOrder());

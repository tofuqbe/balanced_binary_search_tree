const Tree = require("./balanced_bst");
const generateArray = require("./generateArray");
const prettyPrint = require("./prettyprint");

// Driver script. Follow along with comments at each stage to understand.

// Stage 1: Create a binary search tree from an array of random numbers.

let arr = generateArray.under100();
let binaryTree = new Tree();

binaryTree.root = binaryTree.buildTree(arr, 0, arr.length - 1);

// --------------------------------------------------------------

// Step 2: Confirm that the tree is balanced by calling the inBalanced class method.

console.log("Is tree balanced? " + binaryTree.isBalanced());

// Step 3: Print out all elements in

console.log("Level Order: " + binaryTree.levelOrder());
console.log("Level Order Recursion: " + binaryTree.levelOrderRec());
console.log("Preorder: " + binaryTree.preOrder());
console.log("InOrder: " + binaryTree.inOrder());
console.log("Postorder: " + binaryTree.postOrder());

let arr2 = generateArray.over100();

arr2.forEach((e) => {
  binaryTree.insert(e);
});

console.log("Is tree balanced? " + binaryTree.isBalanced());

binaryTree.reBalance();

console.log("Is tree balanced? " + binaryTree.isBalanced());

console.log("Preorder: " + binaryTree.preOrder());
console.log("InOrder: " + binaryTree.inOrder());
console.log("Postorder: " + binaryTree.postOrder());

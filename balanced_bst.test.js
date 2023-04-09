const Tree = require("./balanced_bst");
const generateArray = require("./generateArray");
const mergeSort = require("./merge-sort");

test("create tree without duplicates.", () => {
  const array = [0, 5, 20, 4, 1, 30, 5, 9, 30, 31];

  const tree1 = new Tree();
  tree1.root = tree1.buildTree(array, 0, array.length - 1);
  tree1.delete(30);

  expect(tree1.find(30)).toEqual(null);
});

test("generate tree of 20 data items. And output them in order.", () => {
  const array = [
    0, 5, 20, 4, 1, 30, 9, 31, -4, -20, 13, 543, 150, 210, 2310, 3113, -501,
    221, 99, 101,
  ];

  const tree1 = new Tree();
  tree1.root = tree1.buildTree(array, 0, array.length - 1);

  expect(tree1.inOrder()).toEqual(mergeSort(array));
});

test("generate a large tree and ensure it is balanced.", () => {
  let arr1 = generateArray.over100();
  let arr2 = generateArray.over100().concat(arr1);
  let arr3 = generateArray.over100().concat(arr2);
  let arr4 = generateArray.under100().concat(arr3);
  let arr5 = generateArray.under100().concat(arr4);
  let arr6 = generateArray.under100().concat(arr5);

  const tree1 = new Tree();
  tree1.root = tree1.buildTree(arr6, 0, arr6.length - 1);

  expect(tree1.isBalanced()).toEqual(true);
});

test("generate a small tree and insert several numbers that will unbalance it and and ensure it is unbalanced.", () => {
  let arr1 = generateArray.over100();

  const tree1 = new Tree();
  tree1.root = tree1.buildTree(arr1, 0, arr1.length - 1);

  tree1.insert(-5);
  tree1.insert(-6);
  tree1.insert(-7);
  tree1.insert(-8);
  tree1.insert(-9);

  expect(tree1.isBalanced()).toEqual(false);
});

test("generate a small tree and insert several numbers that will unbalance it. Call rebalance and ensure it is then balanced", () => {
  let arr1 = generateArray.over100();

  const tree1 = new Tree();
  tree1.root = tree1.buildTree(arr1, 0, arr1.length - 1);

  tree1.insert(-5);
  tree1.insert(-6);
  tree1.insert(-7);
  tree1.insert(-8);
  tree1.insert(-9);

  tree1.reBalance();

  expect(tree1.isBalanced()).toEqual(true);
});

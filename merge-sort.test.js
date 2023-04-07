const mergeSort = require("./merge-sort");

test("does mergeSort properly sort arrays of equal length (L = 14)?", () => {
  let array = [5, 2, 7, 8, 0, -50, 100, 2043, 2042, -19, 1, 300, 400, 500];
  expect(mergeSort(array)).toEqual([
    -50, -19, 0, 1, 2, 5, 7, 8, 100, 300, 400, 500, 2042, 2043,
  ]);
});

test("does mergeSort properly sort arrays of odd length (L = 15)?", () => {
  let array = [5, 2, 7, 8, 0, -50, 100, 2043, 2042, -19, 1, 300, 400, 500, 700];
  expect(mergeSort(array)).toEqual([
    -50, -19, 0, 1, 2, 5, 7, 8, 100, 300, 400, 500, 700, 2042, 2043,
  ]);
});

test("does mergeSort properly remove duplicate elements?", () => {
  let array = [5, 2, 7, 8, 0, -50, 100, 2043, 2043, 2043];
  expect(mergeSort(array)).toEqual([-50, 0, 2, 5, 7, 8, 100, 2043]);
});

test("does mergeSort properly remove duplicate elements of multiple values?", () => {
  let array = [5, 2, 7, 8, 0, -50, 100, 2043, 2043, 2043, -700, -800, -700];
  expect(mergeSort(array)).toEqual([-800, -700, -50, 0, 2, 5, 7, 8, 100, 2043]);
});

test("does mergeSort prperly return empty array if given one", () => {
  let array = [];
  expect(mergeSort(array)).toEqual([]);
});

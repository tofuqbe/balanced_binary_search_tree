/* NOTE THIS IS A MODIFIED MERGE-SORT ALGORITHM. IT REMOVES ANY DUPLICATE ELEMENTS DURING THE SORT PROCESS.
THIS WAS MODIFIED TO EASIER BALANCE A BINARY SEARCH TREE. */

function mergeSort(array) {
  return split(array);
}

function split(array) {
  if (array.length <= 1) return array;
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    i < Math.round(array.length / 2)
      ? left.push(array[i])
      : right.push(array[i]);
  }
  left = split(left);
  right = split(right);
  return sort(left, right);
}

function sort(left, right) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < left.length && j < right.length) {
    // remove duplicates
    if (left[i] === right[j]) j++;
    else if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    mergedArray.push(left[i]);
    i++;
  }
  while (j < right.length) {
    mergedArray.push(right[j]);
    j++;
  }
  return mergedArray;
}

module.exports = mergeSort;

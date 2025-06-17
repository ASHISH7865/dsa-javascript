function checkArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkArraySorted([1, 2, 3, 4, 5, 6, 7, 8]));

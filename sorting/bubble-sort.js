function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 4, 32, 32, 5, 43, 5, 12, 321, 43, 254, 43, 5, 35, 43, 432, 4, 23]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(selectionSort([2, 4, 32, 32, 5, 43, 5, 12, 321, 43, 254, 43, 5, 35, 43, 432, 4, 23]));

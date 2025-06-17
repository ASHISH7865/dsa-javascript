function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

console.log(insertionSort(Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))));

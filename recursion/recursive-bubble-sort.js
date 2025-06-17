function recursiveBubbleSort(arr, endIndex) {
  if (endIndex <= 0) {
    return arr;
  }

  for (let i = 0; i < endIndex; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return recursiveBubbleSort(arr, endIndex - 1);
}

let inputArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

console.log(recursiveBubbleSort(inputArray, inputArray.length - 1));

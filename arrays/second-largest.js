function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return { firstLargest, secondLargest };
}

const inputArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("arr : ", inputArray);
console.log(secondLargest(inputArray));

// 1,2,3,4,5

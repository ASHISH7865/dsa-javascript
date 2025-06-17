function largestElement(arr) {
  let largest = arr[0];
  arr.forEach((item) => {
    if (largest < item) {
      largest = item;
    }
  });

  return largest;
}

const inputArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
console.log("arr : ", inputArray);
console.log(largestElement(inputArray));

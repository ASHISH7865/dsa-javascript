function leftRotate(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

function rotateArray(arr, d, direction) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const posi = direction === "right" ? (i + d) % arr.length : (i - d + arr.length) % arr.length;
    resultArray[posi] = arr[i];
  }

  return resultArray;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums);
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

console.log(rotateArray([3, 7, 8, 9, 10, 11], 2, "left"));

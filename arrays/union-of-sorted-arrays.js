/**
 * Problem: Union of Two Sorted Arrays
 *
 * Given two sorted arrays, arr1, and arr2 of size n and m.
 * Find the union of two sorted arrays.
 *
 * The union of two arrays can be defined as the common and distinct elements in the two arrays.
 * NOTE: Elements in the union should be in ascending order.
 *
 * Example:
 * Input: arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 3, 6, 7]
 * Output: [1, 2, 3, 4, 5, 6, 7]
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */

function unionOfSortedArrays(arr1, arr2) {
  // TODO: Implement the solution here

  const set = new Set();
  const union = [];

  for (let num of arr1) {
    set.add(num);
  }

  for (let num of arr2) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
  }

  return union;
}

// Test cases with edge cases
console.log("=== Union of Two Sorted Arrays - Test Cases ===\n");

// Test Case 1: Normal case with overlapping elements
console.log("Test Case 1: Normal case with overlapping elements");
const arr1_1 = [1, 2, 3, 4, 5];
const arr2_1 = [1, 2, 3, 6, 7];
console.log(`arr1: [${arr1_1.join(", ")}]`);
console.log(`arr2: [${arr2_1.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_1, arr2_1)}]`);
console.log(`Expected: [1, 2, 3, 4, 5, 6, 7]\n`);

// Test Case 2: No overlapping elements
console.log("Test Case 2: No overlapping elements");
const arr1_2 = [1, 3, 5];
const arr2_2 = [2, 4, 6];
console.log(`arr1: [${arr1_2.join(", ")}]`);
console.log(`arr2: [${arr2_2.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_2, arr2_2)}]`);
console.log(`Expected: [1, 2, 3, 4, 5, 6]\n`);

// Test Case 3: One array is empty
console.log("Test Case 3: One array is empty");
const arr1_3 = [];
const arr2_3 = [1, 2, 3];
console.log(`arr1: [${arr1_3.join(", ")}]`);
console.log(`arr2: [${arr2_3.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_3, arr2_3)}]`);
console.log(`Expected: [1, 2, 3]\n`);

// Test Case 4: Both arrays are empty
console.log("Test Case 4: Both arrays are empty");
const arr1_4 = [];
const arr2_4 = [];
console.log(`arr1: [${arr1_4.join(", ")}]`);
console.log(`arr2: [${arr2_4.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_4, arr2_4)}]`);
console.log(`Expected: []\n`);

// Test Case 5: One array is subset of another
console.log("Test Case 5: One array is subset of another");
const arr1_5 = [1, 2, 3, 4, 5];
const arr2_5 = [2, 4];
console.log(`arr1: [${arr1_5.join(", ")}]`);
console.log(`arr2: [${arr2_5.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_5, arr2_5)}]`);
console.log(`Expected: [1, 2, 3, 4, 5]\n`);

// Test Case 6: Arrays with same elements
console.log("Test Case 6: Arrays with same elements");
const arr1_6 = [1, 2, 3];
const arr2_6 = [1, 2, 3];
console.log(`arr1: [${arr1_6.join(", ")}]`);
console.log(`arr2: [${arr2_6.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_6, arr2_6)}]`);
console.log(`Expected: [1, 2, 3]\n`);

// Test Case 7: Single element arrays
console.log("Test Case 7: Single element arrays");
const arr1_7 = [5];
const arr2_7 = [3];
console.log(`arr1: [${arr1_7.join(", ")}]`);
console.log(`arr2: [${arr2_7.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_7, arr2_7)}]`);
console.log(`Expected: [3, 5]\n`);

// Test Case 8: Arrays with duplicate elements within themselves
console.log("Test Case 8: Arrays with duplicate elements within themselves");
const arr1_8 = [1, 1, 2, 3, 3];
const arr2_8 = [2, 2, 4, 5];
console.log(`arr1: [${arr1_8.join(", ")}]`);
console.log(`arr2: [${arr2_8.join(", ")}]`);
console.log(`Result: [${unionOfSortedArrays(arr1_8, arr2_8)}]`);
console.log(`Expected: [1, 2, 3, 4, 5]\n`);

/**
 * Problem: Merge Sort Algorithm
 *
 * Implement the merge sort algorithm to sort an array in ascending order.
 *
 * Merge Sort is a divide-and-conquer algorithm that divides the array into two halves,
 * recursively sorts them, and then merges the sorted halves.
 *
 * Algorithm Steps:
 * 1. Divide the array into two halves
 * 2. Recursively sort both halves
 * 3. Merge the sorted halves back together
 *
 * Time Complexity: O(n log n) - in all cases (best, average, worst)
 * Space Complexity: O(n) - for the temporary arrays used in merging
 *
 * Example:
 * Input: [64, 34, 25, 12, 22, 11, 90]
 * Output: [11, 12, 22, 25, 34, 64, 90]
 */

function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide: find the middle point and split the array
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquer: recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combine: merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array (if any)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array (if any)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Helper function to create a copy of array for testing
function createCopy(arr) {
  return [...arr];
}

// Helper function to check if array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Test cases with edge cases
console.log("=== Merge Sort - Test Cases ===\n");

// Test Case 1: Normal unsorted array
console.log("Test Case 1: Normal unsorted array");
const arr1 = [64, 34, 25, 12, 22, 11, 90];
const original1 = createCopy(arr1);
console.log(`Original: [${original1.join(", ")}]`);
const sorted1 = mergeSort(createCopy(arr1));
console.log(`Sorted:   [${sorted1 ? sorted1.join(", ") : "undefined"}]`);
console.log(`Expected: [11, 12, 22, 25, 34, 64, 90]`);
console.log(`Is Sorted: ${sorted1 ? isSorted(sorted1) : false}\n`);

// Test Case 2: Already sorted array
console.log("Test Case 2: Already sorted array");
const arr2 = [1, 2, 3, 4, 5];
const original2 = createCopy(arr2);
console.log(`Original: [${original2.join(", ")}]`);
const sorted2 = mergeSort(createCopy(arr2));
console.log(`Sorted:   [${sorted2 ? sorted2.join(", ") : "undefined"}]`);
console.log(`Expected: [1, 2, 3, 4, 5]`);
console.log(`Is Sorted: ${sorted2 ? isSorted(sorted2) : false}\n`);

// Test Case 3: Reverse sorted array
console.log("Test Case 3: Reverse sorted array");
const arr3 = [5, 4, 3, 2, 1];
const original3 = createCopy(arr3);
console.log(`Original: [${original3.join(", ")}]`);
const sorted3 = mergeSort(createCopy(arr3));
console.log(`Sorted:   [${sorted3 ? sorted3.join(", ") : "undefined"}]`);
console.log(`Expected: [1, 2, 3, 4, 5]`);
console.log(`Is Sorted: ${sorted3 ? isSorted(sorted3) : false}\n`);

// Test Case 4: Array with duplicates
console.log("Test Case 4: Array with duplicates");
const arr4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const original4 = createCopy(arr4);
console.log(`Original: [${original4.join(", ")}]`);
const sorted4 = mergeSort(createCopy(arr4));
console.log(`Sorted:   [${sorted4 ? sorted4.join(", ") : "undefined"}]`);
console.log(`Expected: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]`);
console.log(`Is Sorted: ${sorted4 ? isSorted(sorted4) : false}\n`);

// Test Case 5: Single element array
console.log("Test Case 5: Single element array");
const arr5 = [42];
const original5 = createCopy(arr5);
console.log(`Original: [${original5.join(", ")}]`);
const sorted5 = mergeSort(createCopy(arr5));
console.log(`Sorted:   [${sorted5 ? sorted5.join(", ") : "undefined"}]`);
console.log(`Expected: [42]`);
console.log(`Is Sorted: ${sorted5 ? isSorted(sorted5) : false}\n`);

// Test Case 6: Empty array
console.log("Test Case 6: Empty array");
const arr6 = [];
const original6 = createCopy(arr6);
console.log(`Original: [${original6.join(", ")}]`);
const sorted6 = mergeSort(createCopy(arr6));
console.log(`Sorted:   [${sorted6 ? sorted6.join(", ") : "undefined"}]`);
console.log(`Expected: []`);
console.log(`Is Sorted: ${sorted6 ? isSorted(sorted6) : true}\n`);

// Test Case 7: Two element array
console.log("Test Case 7: Two element array");
const arr7 = [2, 1];
const original7 = createCopy(arr7);
console.log(`Original: [${original7.join(", ")}]`);
const sorted7 = mergeSort(createCopy(arr7));
console.log(`Sorted:   [${sorted7 ? sorted7.join(", ") : "undefined"}]`);
console.log(`Expected: [1, 2]`);
console.log(`Is Sorted: ${sorted7 ? isSorted(sorted7) : false}\n`);

// Test Case 8: Array with negative numbers
console.log("Test Case 8: Array with negative numbers");
const arr8 = [-3, -1, -4, -1, -5, 0, 2, 6];
const original8 = createCopy(arr8);
console.log(`Original: [${original8.join(", ")}]`);
const sorted8 = mergeSort(createCopy(arr8));
console.log(`Sorted:   [${sorted8 ? sorted8.join(", ") : "undefined"}]`);
console.log(`Expected: [-5, -4, -3, -1, -1, 0, 2, 6]`);
console.log(`Is Sorted: ${sorted8 ? isSorted(sorted8) : false}\n`);

// Test Case 9: Large array with random numbers
console.log("Test Case 9: Large array with random numbers");
const arr9 = [100, 50, 75, 25, 90, 10, 60, 40, 80, 30];
const original9 = createCopy(arr9);
console.log(`Original: [${original9.join(", ")}]`);
const sorted9 = mergeSort(createCopy(arr9));
console.log(`Sorted:   [${sorted9 ? sorted9.join(", ") : "undefined"}]`);
console.log(`Expected: [10, 25, 30, 40, 50, 60, 75, 80, 90, 100]`);
console.log(`Is Sorted: ${sorted9 ? isSorted(sorted9) : false}\n`);

// Test Case 10: Array with all same elements
console.log("Test Case 10: Array with all same elements");
const arr10 = [7, 7, 7, 7, 7];
const original10 = createCopy(arr10);
console.log(`Original: [${original10.join(", ")}]`);
const sorted10 = mergeSort(createCopy(arr10));
console.log(`Sorted:   [${sorted10 ? sorted10.join(", ") : "undefined"}]`);
console.log(`Expected: [7, 7, 7, 7, 7]`);
console.log(`Is Sorted: ${sorted10 ? isSorted(sorted10) : false}\n`);

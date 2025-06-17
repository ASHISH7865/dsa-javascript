/**
 * Problem: Kadane's Algorithm - Maximum Subarray Sum
 *
 * Given an integer array, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Kadane's algorithm is a dynamic programming approach that efficiently solves the
 * maximum subarray problem in linear time.
 *
 * Algorithm Logic:
 * - At each position, decide whether to extend the existing subarray or start a new one
 * - If current sum becomes negative, start fresh from current element
 * - Keep track of the maximum sum seen so far
 *
 * Examples:
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6 (subarray [4, -1, 2, 1])
 *
 * Input: [1, 2, 3, 4, 5]
 * Output: 15 (entire array)
 *
 * Input: [-1, -2, -3, -4]
 * Output: -1 (single element with maximum value)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function kadanesAlgorithm(arr) {
  // Handle edge case: empty array
  if (arr.length === 0) return 0;

  // Initialize with first element
  let maxSum = arr[0]; // Maximum sum found so far
  let currentSum = arr[0]; // Current subarray sum

  // Process remaining elements
  for (let i = 1; i < arr.length; i++) {
    // Key decision: extend current subarray or start fresh?
    // If currentSum is negative, it's better to start fresh
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update global maximum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Helper function to find the actual subarray with maximum sum (for verification)
function findMaxSubarray(arr) {
  if (arr.length === 0) return { sum: 0, subarray: [] };

  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0,
    end = 0,
    tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentSum < 0) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return {
    sum: maxSum,
    subarray: arr.slice(start, end + 1),
  };
}

// Test cases with edge cases
console.log("=== Kadane's Algorithm - Maximum Subarray Sum ===\n");

// Test Case 1: Classic example with mixed positive and negative numbers
console.log("Test Case 1: Classic example");
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(`Array: [${arr1.join(", ")}]`);
const result1 = kadanesAlgorithm(arr1);
console.log(`Result: ${result1}`);
console.log(`Expected: 6`);
const maxSubarray1 = findMaxSubarray(arr1);
console.log(`Max subarray: [${maxSubarray1.subarray.join(", ")}] with sum ${maxSubarray1.sum}\n`);

// Test Case 2: All positive numbers
console.log("Test Case 2: All positive numbers");
const arr2 = [1, 2, 3, 4, 5];
console.log(`Array: [${arr2.join(", ")}]`);
const result2 = kadanesAlgorithm(arr2);
console.log(`Result: ${result2}`);
console.log(`Expected: 15`);
const maxSubarray2 = findMaxSubarray(arr2);
console.log(`Max subarray: [${maxSubarray2.subarray.join(", ")}] with sum ${maxSubarray2.sum}\n`);

// Test Case 3: All negative numbers
console.log("Test Case 3: All negative numbers");
const arr3 = [-5, -2, -8, -1, -4];
console.log(`Array: [${arr3.join(", ")}]`);
const result3 = kadanesAlgorithm(arr3);
console.log(`Result: ${result3}`);
console.log(`Expected: -1`);
const maxSubarray3 = findMaxSubarray(arr3);
console.log(`Max subarray: [${maxSubarray3.subarray.join(", ")}] with sum ${maxSubarray3.sum}\n`);

// Test Case 4: Single element array (positive)
console.log("Test Case 4: Single element array (positive)");
const arr4 = [5];
console.log(`Array: [${arr4.join(", ")}]`);
const result4 = kadanesAlgorithm(arr4);
console.log(`Result: ${result4}`);
console.log(`Expected: 5`);
const maxSubarray4 = findMaxSubarray(arr4);
console.log(`Max subarray: [${maxSubarray4.subarray.join(", ")}] with sum ${maxSubarray4.sum}\n`);

// Test Case 5: Single element array (negative)
console.log("Test Case 5: Single element array (negative)");
const arr5 = [-3];
console.log(`Array: [${arr5.join(", ")}]`);
const result5 = kadanesAlgorithm(arr5);
console.log(`Result: ${result5}`);
console.log(`Expected: -3`);
const maxSubarray5 = findMaxSubarray(arr5);
console.log(`Max subarray: [${maxSubarray5.subarray.join(", ")}] with sum ${maxSubarray5.sum}\n`);

// Test Case 6: Array with zeros
console.log("Test Case 6: Array with zeros");
const arr6 = [-1, 0, -2, 0, -3];
console.log(`Array: [${arr6.join(", ")}]`);
const result6 = kadanesAlgorithm(arr6);
console.log(`Result: ${result6}`);
console.log(`Expected: 0`);
const maxSubarray6 = findMaxSubarray(arr6);
console.log(`Max subarray: [${maxSubarray6.subarray.join(", ")}] with sum ${maxSubarray6.sum}\n`);

// Test Case 7: Large positive number at the end
console.log("Test Case 7: Large positive number at the end");
const arr7 = [-5, -2, -1, -8, 10];
console.log(`Array: [${arr7.join(", ")}]`);
const result7 = kadanesAlgorithm(arr7);
console.log(`Result: ${result7}`);
console.log(`Expected: 10`);
const maxSubarray7 = findMaxSubarray(arr7);
console.log(`Max subarray: [${maxSubarray7.subarray.join(", ")}] with sum ${maxSubarray7.sum}\n`);

// Test Case 8: Alternating positive and negative
console.log("Test Case 8: Alternating positive and negative");
const arr8 = [5, -2, 4, -1, 3];
console.log(`Array: [${arr8.join(", ")}]`);
const result8 = kadanesAlgorithm(arr8);
console.log(`Result: ${result8}`);
console.log(`Expected: 9`);
const maxSubarray8 = findMaxSubarray(arr8);
console.log(`Max subarray: [${maxSubarray8.subarray.join(", ")}] with sum ${maxSubarray8.sum}\n`);

// Test Case 9: Maximum subarray in the middle
console.log("Test Case 9: Maximum subarray in the middle");
const arr9 = [-10, 2, 3, -1, 4, -20];
console.log(`Array: [${arr9.join(", ")}]`);
const result9 = kadanesAlgorithm(arr9);
console.log(`Result: ${result9}`);
console.log(`Expected: 8`);
const maxSubarray9 = findMaxSubarray(arr9);
console.log(`Max subarray: [${maxSubarray9.subarray.join(", ")}] with sum ${maxSubarray9.sum}\n`);

// Test Case 10: Two element array
console.log("Test Case 10: Two element array");
const arr10 = [-1, 2];
console.log(`Array: [${arr10.join(", ")}]`);
const result10 = kadanesAlgorithm(arr10);
console.log(`Result: ${result10}`);
console.log(`Expected: 2`);
const maxSubarray10 = findMaxSubarray(arr10);
console.log(`Max subarray: [${maxSubarray10.subarray.join(", ")}] with sum ${maxSubarray10.sum}\n`);

// Test Case 11: Large negative followed by small positive
console.log("Test Case 11: Large negative followed by small positive");
const arr11 = [-100, 1, 2];
console.log(`Array: [${arr11.join(", ")}]`);
const result11 = kadanesAlgorithm(arr11);
console.log(`Result: ${result11}`);
console.log(`Expected: 3`);
const maxSubarray11 = findMaxSubarray(arr11);
console.log(`Max subarray: [${maxSubarray11.subarray.join(", ")}] with sum ${maxSubarray11.sum}\n`);

// Test Case 12: Empty array edge case (if handled)
console.log("Test Case 12: Empty array");
const arr12 = [];
console.log(`Array: [${arr12.join(", ")}]`);
const result12 = kadanesAlgorithm(arr12);
console.log(`Result: ${result12}`);
console.log(`Expected: 0 or undefined (depending on implementation)`);
const maxSubarray12 = findMaxSubarray(arr12);
console.log(`Max subarray: [${maxSubarray12.subarray.join(", ")}] with sum ${maxSubarray12.sum}\n`);

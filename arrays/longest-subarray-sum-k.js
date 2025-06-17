/**
 * Problem: Longest Subarray with Sum K
 *
 * Given an array and a sum k, we need to find the length of the longest subarray that sums to k.
 *
 * A subarray is a contiguous part of an array.
 *
 * Examples:
 * Input: arr = [1, 2, 3, 1, 1, 1, 1], k = 3
 * Output: 3 (subarray [1, 1, 1])
 *
 * Input: arr = [1, -1, 5, -2, 3], k = 3
 * Output: 4 (subarray [-1, 5, -2, 3])
 *
 * Approaches:
 * 1. Brute Force: O(n²) - Check all possible subarrays
 * 2. Optimized with HashMap: O(n) - Using prefix sum and hashmap
 *
 * Time Complexity: O(n) with hashmap approach
 * Space Complexity: O(n) for the hashmap
 */

function longestSubarrayWithSumK(arr, k) {
  // TODO: Implement the solution here
  // Your code goes here
}

// Helper function to verify the result by finding actual subarray
function findSubarrayWithSumK(arr, k, expectedLength) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k && j - i + 1 === expectedLength) {
        return arr.slice(i, j + 1);
      }
    }
  }
  return null;
}

// Test cases with edge cases
console.log("=== Longest Subarray with Sum K - Test Cases ===\n");

// Test Case 1: Normal case with positive numbers
console.log("Test Case 1: Normal case with positive numbers");
const arr1 = [1, 2, 3, 1, 1, 1, 1];
const k1 = 3;
console.log(`Array: [${arr1.join(", ")}]`);
console.log(`Target Sum (k): ${k1}`);
const result1 = longestSubarrayWithSumK(arr1, k1);
console.log(`Result: ${result1}`);
console.log(`Expected: 3`);
const subarray1 = findSubarrayWithSumK(arr1, k1, result1);
console.log(`Example subarray: [${subarray1 ? subarray1.join(", ") : "None found"}]\n`);

// Test Case 2: Array with negative numbers
console.log("Test Case 2: Array with negative numbers");
const arr2 = [1, -1, 5, -2, 3];
const k2 = 3;
console.log(`Array: [${arr2.join(", ")}]`);
console.log(`Target Sum (k): ${k2}`);
const result2 = longestSubarrayWithSumK(arr2, k2);
console.log(`Result: ${result2}`);
console.log(`Expected: 4`);
const subarray2 = findSubarrayWithSumK(arr2, k2, result2);
console.log(`Example subarray: [${subarray2 ? subarray2.join(", ") : "None found"}]\n`);

// Test Case 3: No subarray with sum k
console.log("Test Case 3: No subarray with sum k");
const arr3 = [1, 2, 3];
const k3 = 10;
console.log(`Array: [${arr3.join(", ")}]`);
console.log(`Target Sum (k): ${k3}`);
const result3 = longestSubarrayWithSumK(arr3, k3);
console.log(`Result: ${result3}`);
console.log(`Expected: 0`);
const subarray3 = findSubarrayWithSumK(arr3, k3, result3);
console.log(`Example subarray: [${subarray3 ? subarray3.join(", ") : "None found"}]\n`);

// Test Case 4: Entire array sums to k
console.log("Test Case 4: Entire array sums to k");
const arr4 = [1, 2, 3, 4];
const k4 = 10;
console.log(`Array: [${arr4.join(", ")}]`);
console.log(`Target Sum (k): ${k4}`);
const result4 = longestSubarrayWithSumK(arr4, k4);
console.log(`Result: ${result4}`);
console.log(`Expected: 4`);
const subarray4 = findSubarrayWithSumK(arr4, k4, result4);
console.log(`Example subarray: [${subarray4 ? subarray4.join(", ") : "None found"}]\n`);

// Test Case 5: Single element equals k
console.log("Test Case 5: Single element equals k");
const arr5 = [5];
const k5 = 5;
console.log(`Array: [${arr5.join(", ")}]`);
console.log(`Target Sum (k): ${k5}`);
const result5 = longestSubarrayWithSumK(arr5, k5);
console.log(`Result: ${result5}`);
console.log(`Expected: 1`);
const subarray5 = findSubarrayWithSumK(arr5, k5, result5);
console.log(`Example subarray: [${subarray5 ? subarray5.join(", ") : "None found"}]\n`);

// Test Case 6: Empty array
console.log("Test Case 6: Empty array");
const arr6 = [];
const k6 = 0;
console.log(`Array: [${arr6.join(", ")}]`);
console.log(`Target Sum (k): ${k6}`);
const result6 = longestSubarrayWithSumK(arr6, k6);
console.log(`Result: ${result6}`);
console.log(`Expected: 0`);
const subarray6 = findSubarrayWithSumK(arr6, k6, result6);
console.log(`Example subarray: [${subarray6 ? subarray6.join(", ") : "None found"}]\n`);

// Test Case 7: Array with zeros
console.log("Test Case 7: Array with zeros");
const arr7 = [1, 0, 0, 0, 1];
const k7 = 0;
console.log(`Array: [${arr7.join(", ")}]`);
console.log(`Target Sum (k): ${k7}`);
const result7 = longestSubarrayWithSumK(arr7, k7);
console.log(`Result: ${result7}`);
console.log(`Expected: 3`);
const subarray7 = findSubarrayWithSumK(arr7, k7, result7);
console.log(`Example subarray: [${subarray7 ? subarray7.join(", ") : "None found"}]\n`);

// Test Case 8: Multiple subarrays with same sum, different lengths
console.log("Test Case 8: Multiple subarrays with same sum, different lengths");
const arr8 = [1, 2, 1, 0, 1];
const k8 = 3;
console.log(`Array: [${arr8.join(", ")}]`);
console.log(`Target Sum (k): ${k8}`);
const result8 = longestSubarrayWithSumK(arr8, k8);
console.log(`Result: ${result8}`);
console.log(`Expected: 3`);
const subarray8 = findSubarrayWithSumK(arr8, k8, result8);
console.log(`Example subarray: [${subarray8 ? subarray8.join(", ") : "None found"}]\n`);

// Test Case 9: Negative target sum
console.log("Test Case 9: Negative target sum");
const arr9 = [1, -2, 3, -1];
const k9 = -2;
console.log(`Array: [${arr9.join(", ")}]`);
console.log(`Target Sum (k): ${k9}`);
const result9 = longestSubarrayWithSumK(arr9, k9);
console.log(`Result: ${result9}`);
console.log(`Expected: 2`);
const subarray9 = findSubarrayWithSumK(arr9, k9, result9);
console.log(`Example subarray: [${subarray9 ? subarray9.join(", ") : "None found"}]\n`);

// Test Case 10: Large array with repeating pattern
console.log("Test Case 10: Large array with repeating pattern");
const arr10 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const k10 = 5;
console.log(`Array: [${arr10.join(", ")}]`);
console.log(`Target Sum (k): ${k10}`);
const result10 = longestSubarrayWithSumK(arr10, k10);
console.log(`Result: ${result10}`);
console.log(`Expected: 5`);
const subarray10 = findSubarrayWithSumK(arr10, k10, result10);
console.log(`Example subarray: [${subarray10 ? subarray10.join(", ") : "None found"}]\n`);

// Test Case 11: Array with all negative numbers
console.log("Test Case 11: Array with all negative numbers");
const arr11 = [-1, -2, -3, -4];
const k11 = -6;
console.log(`Array: [${arr11.join(", ")}]`);
console.log(`Target Sum (k): ${k11}`);
const result11 = longestSubarrayWithSumK(arr11, k11);
console.log(`Result: ${result11}`);
console.log(`Expected: 3`);
const subarray11 = findSubarrayWithSumK(arr11, k11, result11);
console.log(`Example subarray: [${subarray11 ? subarray11.join(", ") : "None found"}]\n`);

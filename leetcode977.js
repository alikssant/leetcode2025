// 977. Squares of a Sorted Array

// Easy
// Topics
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// var sortedSquares = function (nums) {
//   squares = [];
//   nums.forEach((element) => {
//     squares.push(element * element);
//   });
//   return squares.sort((a, b) => a - b);
// };

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);
  let index = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index--] = nums[left] * nums[left];
      left++;
    } else {
      result[index--] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};
let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));

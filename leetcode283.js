// brute force solution

// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = 0;
//     while (j < nums.length - 1) {
//       if (nums[j] == 0) {
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//       j++;
//     }
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
    }
  }
  return nums;
};

let nums = [1, 1, 2];
console.log(moveZeroes(nums));

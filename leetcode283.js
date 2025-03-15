// var moveZeroes = function (nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] === 0) {
//       let temp = nums[i];
//       for (let j = i; j < nums.length - 1; j++) {
//         nums[j] = nums[j + 1];
//       }
//       nums[nums.length - 1] = temp;
//     }

//     i++;
//   }
//   return nums;
// };
var moveZeroes = function (nums) {
  let i = 0;
  //let j = i + 1;
  while (i < nums.length - 1) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
    i++;
  }
  return nums;
};
let nums = [0, 0, 1];
console.log(moveZeroes(nums));

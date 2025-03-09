var threeSum = function (nums) {
  nums.sort((a, b), a - b);
  let n = nums.length;
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let lo = i + 1,
      hi = n - 1;
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        answer.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

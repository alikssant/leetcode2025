var findDifference = function (nums1, nums2) {
  const numbers = new Set(nums1);
  const numbers2 = new Set(nums2);
  nums1 = [];
  nums2 = [];

  for (const element of numbers2.values()) {
    if (!numbers.has(element)) {
      nums2.push(element);
    }
  }
  for (const element of numbers.values()) {
    if (!numbers2.has(element)) {
      nums1.push(element);
    }
  }
  let result = [];
  result.push(nums1);
  result.push(nums2);
  return result;
};

let nums1 = [1, 2, 3];
let nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));

var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      i++;
      j++;

      return [i, j];
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    }
  }
  return anwers;
};
let numbers = [2, 3, 4];
let target = 6;
console.log(twoSum(numbers, target));

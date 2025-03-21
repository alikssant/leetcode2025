//t\This solution uses  extra space with counts (an object) to store character frequencies.
var compress = function (chars) {
  let counts = {};

  for (let i = 0; i < chars.length; i++) {
    counts[chars[i]] = (counts[chars[i]] || 0) + 1;
  }

  let arr = Object.entries(counts); // Convert object to array of [key, value]
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0]);

    if (arr[i][1] !== 1) {
      if (arr[i][1] > 10) {
        let countStr = arr[i][1].toString();
        for (let digit of countStr) {
          result.push(digit);
        }
      } else {
        result.push(arr[i][1]);
      }
    }
  }

  return result;
};
let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars));

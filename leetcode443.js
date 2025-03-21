//t\This solution uses  extra space with counts (an object) to store character frequencies.
// var compress = function (chars) {
//   let counts = {};

//   for (let i = 0; i < chars.length; i++) {
//     counts[chars[i]] = (counts[chars[i]] || 0) + 1;
//   }

//   let arr = Object.entries(counts); // Convert object to array of [key, value]
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i][0]);

//     if (arr[i][1] !== 1) {
//       if (arr[i][1] > 10) {
//         let countStr = arr[i][1].toString();
//         for (let digit of countStr) {
//           result.push(digit);
//         }
//       } else {
//         result.push(arr[i][1]);
//       }
//     }
//   }

//   return result;
// };

var compress = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let char = chars[j];
    let count = 0;
    while (j < chars.length && chars[j] === char) {
      count++;
      j++;
    }
    chars[i] = char; //writes character to new array
    i++;
    if (count > 1) {
      let countStr = count.toString();
      for (let digit of countStr) {
        chars[i] = digit;
        i++;
      }
    }
  }
  console.log(i);
  return i;
};
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
let len1 = compress(chars1);
console.log(chars1);

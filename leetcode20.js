var isValid = function (s) {
  const parentheses = new Map([
    ["(", 1],
    ["{", 2],
    ["[", 3],
    [")", -1],
    ["}", -2],
    ["]", -3],
  ]);
  let count = 0;
  for (const char of s) {
    count += parentheses.get(char);
  }
  return count === 0 ? true : false;
};
let s = "()[]{}";
console.log(isValid(s));
//not solved

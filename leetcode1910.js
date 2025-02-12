var removeOccurrences = function (s, part) {
  let stack = [];
  let partLen = part.length;
  let temp;

  for (let char of s) {
    stack.push(char); //adding char to stack

    // Check if the top of the stack forms `part`
    temp = stack.slice(-partLen).join("");
    if (stack.length >= partLen && temp === part) {
      for (let i = 0; i < partLen; i++) {
        stack.pop(); // Remove last `partLen` characters
      }
    }
  }

  return stack.join("");
};
let s = "abcbaabcbcghg";
let part = "abc";
console.log(removeOccurrences(s, part));

// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
// Example 2:

// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".

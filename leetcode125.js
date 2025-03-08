var isPalindrome = function (s) {
  if (s.length === 1 || s.length === 0) {
    return true;
  }
  const formatted = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (formatted.length === 0 || formatted.length === 1) {
    return true;
  }
  let formattedArray = formatted.split("");
  let i = 0;
  let j = formattedArray.length - 1;
  while (i < j) {
    if (formattedArray[i] !== formattedArray[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
const input = "";

console.log(isPalindrome(input));

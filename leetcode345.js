var reverseVowels = function (s) {
  let i = 0;
  let j = s.length - 1;
  let arr = s.split("");

  const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

  while (i < j) {
    if (!vowels.has(s[i])) {
      i++;
    } else if (!vowels.has(s[j])) {
      j--;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr.join("");
};

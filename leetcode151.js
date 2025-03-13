var reverseWords = function (s) {
  s.trim();
  let arrayofWords = s.trim().split(" ");
  let arrayofWordsNospaces = [];
  arrayofWords.forEach((element) => {
    if (element.length >= 1 && element[0] !== " ") {
      arrayofWordsNospaces.push(element);
    }
  });
  let finalresult = "";
  let i = 0;
  let j = arrayofWordsNospaces.length - 1;
  while (i < j) {
    let temp = arrayofWordsNospaces[i];
    arrayofWordsNospaces[i] = arrayofWordsNospaces[j];
    arrayofWordsNospaces[j] = temp;
    i++;
    j--;
  }
  finalresult = arrayofWordsNospaces.join(" ");

  return finalresult;
};
// function reverseWords(s) {
//     return s.trim().split(/\s+/).reverse().join(" ");
// }

s = "       the        sky is   blue       ";
console.log(reverseWords(s));

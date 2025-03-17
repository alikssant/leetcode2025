var gcdOfStrings = function (str1, str2) {
  let i = 0;
  let j = 0;
  let str1Array = str1.split("");
  let str2Array = str2.split("");
  let str3Array = [];
  //   console.log(str1Array);
  //   console.log(str2Array);
  while (i < str2.length) {
    if (str1Array[i] === str2Array[i] && !str3Array.includes(str2Array[i])) {
      str3Array.push(str1Array[i]);
    }
    i++;
  }
  let s3 = "";
  s3 = str3Array.join("");

  return s3;
};

let str1 = "ABCABCD";
let str2 = "ABAB";
//console.log(gcdOfStrings(str1, str2));
console.log(str2.count("AB"));

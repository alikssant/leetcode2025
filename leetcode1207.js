var uniqueOccurrences = function (arr) {
  let counter = {};
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  }
  for (const element of Object.values(counter)) {
    if (set.has(element)) {
      return false;
    } else {
      set.add(element);
    }
  }
  return true;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));

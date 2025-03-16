var kidsWithCandies = function (candies, extraCandies) {
  let maxCandy = Math.max(...candies);
  let resultArray = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      resultArray.push(true);
    } else {
      resultArray.push(false);
    }
  }
  return resultArray;
};

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));

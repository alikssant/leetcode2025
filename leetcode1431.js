var kidsWithCandies = function (candies, extraCandies) {
  let resultArray = [];
  for (let i = 0; i < candies.length; i++) {
    let temp;
    temp = candies[i] + extraCandies;
    candies.push(temp);
    let maxCandies = Math.max(...candies);
    if (maxCandies - extraCandies === candies[i]) {
      resultArray.push(true);
    } else {
      resultArray.push(false);
    }
    candies.pop();
  }
  return resultArray;
};

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));

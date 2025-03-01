var canPlaceFlowers = function (flowerbed, n) {
  let newflowerbed = [];
  newflowerbed[0] = 0;
  newflowerbed.push(...flowerbed);
  newflowerbed.push(0);
  for (let i = 1; i < newflowerbed.length - 1; i++) {
    if (
      newflowerbed[i - 1] === 0 &&
      newflowerbed[i] === 0 &&
      newflowerbed[i + 1] === 0
    ) {
      newflowerbed[i] = 1;
      n = n - 1;
    }
  }

  return n <= 0 ? true : false;
};
let flowerbed = [0, 0, 1, 0, 0];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));

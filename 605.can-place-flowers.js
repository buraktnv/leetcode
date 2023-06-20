/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n != 0; i++) {
    if (flowerbed[i - 1] != 1 && flowerbed[i] == 0 && flowerbed[i + 1] != 1) {
      flowerbed[i] = 1;
      n--;
    }
  }
  if (n == 0) return true;
  return false;
};
// @lc code=end

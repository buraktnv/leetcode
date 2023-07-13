/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const half = Math.floor(candyType.length / 2);
  const numberTypes = Array.from(new Set(candyType));
  if (numberTypes.length > half) {
    return half;
  } else {
    return numberTypes.length;
  }
};
// @lc code=end

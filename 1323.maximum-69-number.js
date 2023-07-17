/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = num.toString().split``;
  firstSix = num.indexOf("6");
  if (firstSix == -1) return parseInt(num.join``);
  num[firstSix] = "9";

  return parseInt(num.join``);
};
// @lc code=end

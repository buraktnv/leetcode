/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const n = nums.length;
  let sortedNums = nums.sort((a, b) => a - b);
  const maxProduct1 = sortedNums[0] * sortedNums[1] * sortedNums[n - 1];
  const maxProduct2 = sortedNums[n - 3] * sortedNums[n - 2] * sortedNums[n - 1];
  return Math.max(maxProduct1, maxProduct2);
};
// @lc code=end

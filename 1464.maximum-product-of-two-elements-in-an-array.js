/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);
  let secondMax = Math.max(...nums);
  return (max - 1) * (secondMax - 1);
};
// @lc code=end

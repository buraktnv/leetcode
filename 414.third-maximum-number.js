/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sorted = Array.from(new Set(nums))
    .sort((a, b) => b - a)
    .slice(0, 3);
  if (sorted.length != 3) return sorted.shift();
  return sorted.pop();
};
// @lc code=end

/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i).reduce((a, b) => a + b, 0);
    let right = nums.slice(i + 1, nums.length).reduce((a, b) => a + b, 0);
    if (left == right) return i;
  }
  return -1;
};
// @lc code=end

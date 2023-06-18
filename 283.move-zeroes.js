/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums = nums.sort((a, b) => (a == 0 ? 1 : b == 0 ? -1 : 0));
};
// @lc code=end

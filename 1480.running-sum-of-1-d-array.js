/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.map(
    (el, index) => el + nums.slice(0, index).reduce((a, b) => a + b, 0)
  );
};
// @lc code=end

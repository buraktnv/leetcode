/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 == 0 ? result.unshift(nums[i]) : result.push(nums[i]);
  }
  return result;
};
// @lc code=end

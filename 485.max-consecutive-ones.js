/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    temp = 0,
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] == 1) {
      temp++;
      if (temp > max) max = temp;
    } else {
      temp = 0;
    }
  }
  return max;
};
// @lc code=end

/*
 * @lc app=leetcode id=1909 lang=javascript
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let changeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      nums.splice(i, 1);
      changeCount++;
      console.log(i);
      i = 0;
      console.log(i);
    }
  }
  return changeCount == 1;
};
// @lc code=end

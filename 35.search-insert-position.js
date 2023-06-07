/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // if element of array is bigger or equal to target return index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  // if there is no bigger or equal array element in the Array
  // return the array length because you should insert target to end
  return nums.length;
};
// @lc code=end

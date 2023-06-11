/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    let e = nums[i];
    if (nums.indexOf(e) == nums.lastIndexOf(e)) return e;
  }
};
// @lc code=end

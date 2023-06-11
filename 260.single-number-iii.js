/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let l = nums.length;
  let set = new Set();
  for (let i = 0; i < l; i++) {
    let e = nums[i];
    if (nums.indexOf(e) == nums.lastIndexOf(e)) set.add(e);
  }
  return [...set];
};
// @lc code=end

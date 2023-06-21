/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let uniqArray = [...new Set(nums)];
  for (let i = 0; i < uniqArray.length; i++) {
    el = uniqArray[i];
    fLen = nums.filter((a) => a == el).length;
    if (fLen > nums.length / 2) return uniqArray[i];
  }
};
// @lc code=end

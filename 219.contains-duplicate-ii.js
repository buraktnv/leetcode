/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 1; i < nums.length; i++) {
    let duplicatedItemIndex = nums.slice(i, i + k).indexOf(nums[i - 1]);
    if (duplicatedItemIndex != -1) {
      if (duplicatedItemIndex + 1 <= k) return true;
    }
  }
  return false;
};

// @lc code=end

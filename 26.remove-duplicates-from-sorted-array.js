/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqNums = new Set(nums);
  let deduplicatedArray = Array.from(uniqNums);
  for (let i = 0; i < deduplicatedArray.length; i++) {
    nums[i] = deduplicatedArray[i];
  }
  nums.length = deduplicatedArray.length;
  return nums.length;
};
// @lc code=end

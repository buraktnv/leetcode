/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // Map oluştur // Create a map
  let numberMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    element = nums[index];
    // sayı Map'ında ulaşmak istediğimiz sayının kalanı var mı ?
    // örneğin hedef 9 elemanımızda 7 olsun. 9 - 7 yani 2 var Map'te yoksa
    // Map'e indexi elemanla setler object olarak düşünrsek { 7 : index} olarak.
    // check numberMap has rest, get rest's index and return this index with current İndex
    if (numberMap.has(target - element))
      return [numberMap.get(target - element), index];
    else numberMap.set(element, index);
  }

  return [];
};
// @lc code=end

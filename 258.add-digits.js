/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = (num) => (num ? (num % 9 ? num % 9 : 9) : 0);
// @lc code=end

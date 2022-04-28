/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = (digits) => [...String(BigInt(digits.join``) + BigInt(1))];

// @lc code=end

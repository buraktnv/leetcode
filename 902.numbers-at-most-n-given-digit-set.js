/*
 * @lc app=leetcode id=902 lang=javascript
 *
 * [902] Numbers At Most N Given Digit Set
 */

// @lc code=start
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
    digitLimitLength = String(n).length;

    digitsArray = []
    for(i = 1 ; i <= digitLimitLength ; i++){
      if(parseInt(digits[0].repeat(i)) > n) continue;

    }
    
};
// @lc code=end


/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const array = nums.sort((a, b) => a - b);
  const length = array.length;
  let answer = [];
  if (length < 3) return [];
  for (let i = 0; i < length; i++) {
    let numberOne = array[i];
    if (numberOne > 0) break;
    for (let j = i + 1; j < length; j++) {
      let numberTwo = array[j];
      if (numberOne + numberTwo > 0) break;
      for (let k = length - 1; k > j; k--) {
        let numberThree = array[k];
        let sub = numberOne + numberTwo + numberThree;
        if (sub < 0) break;
        let arr = [numberOne, numberTwo, numberThree];
        if (sub === 0) answer.push(arr);
      }
    }
  }
  result = answer.filter(function (t) {
    var key = t.join("-");
    return this[key] ? false : (this[key] = true);
  }, Object.create(null));
  return result;
};
// @lc code=end

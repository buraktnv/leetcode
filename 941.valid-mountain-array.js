/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let rising = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (rising) {
      if (arr[i] > arr[i + 1]) {
        if (i == 0) {
          return false;
        }
        rising = false;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    if (arr[i] == arr[i + 1]) return false;
  }
  if (rising) return false;
  return true;
};
// @lc code=end

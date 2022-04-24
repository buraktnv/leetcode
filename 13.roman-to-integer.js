/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  roman = s.split``;
  arr = roman.map((x) =>
    x != "I"
      ? x != "V"
        ? x != "X"
          ? x != "L"
            ? x != "C"
              ? x != "D"
                ? 1000
                : 500
              : 100
            : 50
          : 10
        : 5
      : 1
  );
  result = 0;
  for (i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      if (arr[i] >= arr[i + 1]) {
        result += arr[i];
      } else {
        result -= arr[i];
      }
    } else {
      result += arr[i];
    }
  }
  return result;
};
// @lc code=end

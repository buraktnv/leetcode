/*
 * @lc app=leetcode id=1922 lang=javascript
 *
 * [1922] Count Good Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  function power(x, y) {
    let temp = BigInt(1);
    //same as 1n
    if (y === 0) {
      return temp;
    }

    if (y % 2 === 0) {
      temp = power(x, Math.floor(y / 2));
      temp = BigInt(temp);
      return (temp % 1000000007n) * (temp % 1000000007n);
    } else {
      temp = power(x, Math.floor(y / 2));
      temp = BigInt(temp);

      return BigInt(x) * (temp % 1000000007n) * (temp % 1000000007n);
    }
  }

  if (n % 2 === 0) {
    return (
      (power(5, Math.floor(n / 2)) * power(4, Math.floor(n / 2))) % 1000000007n
    );
  } else {
    return (
      (BigInt(5) * power(5, Math.floor(n / 2)) * power(4, Math.floor(n / 2))) %
      1000000007n
    );
  }
};
// @lc code=end

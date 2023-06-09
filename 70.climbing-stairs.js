/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // approach: when we are calculating n,
  // we have already calculated n-1 so 1 step ahead to n
  // we have already calculated n-2 so 2 step ahead to n
  // if we have change to step 3 stairs at the time we should add n-3
  if (n < 4) return n;
  let first = 1,
    second = 2,
    fib;
  for (let i = 2; i < n; i++) {
    fib = first + second;
    first = second;
    second = fib;
  }
  return fib;
};
// @lc code=end

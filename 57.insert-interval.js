/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  minmax = [];
  minmaxSelected = false;
  maxmin = [];
  for (interval of intervals) {
    // if the minimum interval is lower than any interval's maximum we get the interval start
    if (interval[0] <= newInterval[0]) {
      minmax = interval;
    }
    if (newInterval[1] >= interval[0]) maxmin = interval;
    if (newInterval[1] < interval[0]) {
      break;
    }
  }

  slicedArray = intervals.slice(
    intervals.indexOf(minmax),
    intervals.indexOf(maxmin) + 1
  );

  addInterval = [
    slicedArray[0][0] > newInterval[0] ? newInterval[0] : slicedArray[0][0],
    slicedArray[slicedArray.length - 1][1] < newInterval[1]
      ? newInterval[1]
      : slicedArray[slicedArray.length - 1][1],
  ];

  intervals.splice(
    intervals.indexOf(minmax),
    intervals.indexOf(maxmin) - intervals.indexOf(minmax) + 1,
    addInterval
  );

  return intervals;
};

insert([[1, 5]], [6, 8]);

// @lc code=end

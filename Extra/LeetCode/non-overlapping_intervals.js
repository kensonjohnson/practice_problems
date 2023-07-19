// Given an array of intervals intervals where intervals[i] = [starti, endi],
// return the minimum number of intervals you need to remove to make the rest
// of the intervals non-overlapping.

// Example 1:
const intervals1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
const intervals2 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
const intervals3 = [
  [1, 2],
  [2, 3],
];
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let answer = 0;

  // Sort intervals based on end index value
  intervals.sort((a, b) => a[1] - b[1]);

  // Grab the end point of the first interval
  let previousEnd = intervals[0][1];

  // iterate over intervals starting with the second element (index 1)
  for (let i = 1; i < intervals.length; i++) {
    // Check if last end point is greater than the current start
    if (previousEnd > intervals[i][0]) {
      // If yes, increment answer
      answer++;
    } else {
      // If no, update last end point
      previousEnd = intervals[i][1];
    }
  }

  return answer;
};

console.log(eraseOverlapIntervals(intervals1));
console.log(eraseOverlapIntervals(intervals2));
console.log(eraseOverlapIntervals(intervals3));

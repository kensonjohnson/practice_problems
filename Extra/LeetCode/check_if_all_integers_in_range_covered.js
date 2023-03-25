const ranges = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const left = 2;
const right = 5;

const ranges2 = [
  [1, 10],
  [10, 20],
];
const left2 = 21;
const right2 = 21;

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  // iterate from left to right
  // 2,3,4,5
  for (let i = left; i <= right; i++) {
    let withinRange = false;
    // loop over ranges, if any ranges include i
    for (const [start, end] of ranges) {
      // 2
      if (start <= i && i <= end) {
        withinRange = true;
        break;
      }
    }
    if (withinRange) {
      continue;
    }
    return false;
  }
  // if false, return false

  // default true
  return true;
};

// O(r*m)
console.log(isCovered(ranges, left, right));
console.log(isCovered(ranges2, left2, right2));

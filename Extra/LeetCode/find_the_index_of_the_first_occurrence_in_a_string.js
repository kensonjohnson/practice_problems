// Given two strings needle and haystack, return the index of the first occurrence
// of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
const haystack1 = "sadbutsad",
  needle1 = "sad";
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
const haystack2 = "leetcode",
  needle2 = "leeto";
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // make sure we have a needle
  if (needle.length == 0) return 0;

  // iterate over haystack
  for (let index = 0; index < haystack.length; index++) {
    let haystackPointer = index;
    let needlePointer = 0;
    while (
      haystack[haystackPointer] == needle[needlePointer] &&
      needlePointer < needle.length
    ) {
      haystackPointer++, needlePointer++;
    }
    if (needlePointer == needle.length) return index;
  }
  return -1;
};

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));

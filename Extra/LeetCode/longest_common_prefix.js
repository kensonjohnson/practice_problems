// Write a function to find the longest common prefix string amongst an
// array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
const strs = ["flower", "flow", "flight", "fling"];
// Output: "fl"

// Example 2:
const strs2 = ["dog", "racecar", "car"];
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // sort strs
  const strings = strs;
  strings.sort((a, b) => {
    return a.length - b.length;
  });

  let commonPrefix = "";
  // iterate over strs
  for (let i = 0; i < strings[0].length; i++) {
    commonPrefix += strings[0].charAt(i);
    let noMatch = false;
    // look at the current letter on each word
    // check that all are the same

    for (let j = 0; j < strings.length; j++) {
      const string = strings[j];
      if (!string.startsWith(commonPrefix)) {
        return commonPrefix.slice(0, i);
      }
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));

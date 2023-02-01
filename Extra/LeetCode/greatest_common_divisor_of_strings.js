// For two strings s and t, we say "t divides s" if and only if s = t + ... + t
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides
// both str1 and str2.

// Example 1:
const str1a = "ABCABC",
  str2a = "ABC";
// Output: "ABC"

// Example 2:
const str1b = "ABABAB",
  str2b = "ABAB";
// Output: "AB"

// Example 3:
const str1c = "LEET",
  str2c = "CODE";
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // This tells us that the words are a repeating pattern
  // and that the patterns are the same in both words
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Since we know that the words are matching patterns, we just need
  // to find the greatest common denominator for each word length
  const denominator = greatestCommonDenom(str1.length, str2.length);
  return str1.slice(0, denominator);
};

function greatestCommonDenom(length1, length2) {
  // As long as one length is not equal to 0
  while (length2 !== 0) {
    // get the remainder after division first/second
    const res = length1 % length2;
    // setup to repeat the process
    length1 = length2;
    length2 = res;
  }
  return length1;
}

console.log(gcdOfStrings(str1a, str2a));
console.log(gcdOfStrings(str1b, str2b));
console.log(gcdOfStrings(str1c, str2c));

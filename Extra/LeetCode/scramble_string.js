// We can scramble a string s to get a string t using the following algorithm:

// If the length of the string is 1, stop.
// If the length of the string is > 1, do the following:
// Split the string into two non-empty substrings at a random index, i.e., if
// the string is s, divide it to x and y where s = x + y.
// Randomly decide to swap the two substrings or to keep them in the same order.
// i.e., after this step, s may become s = x + y or s = y + x.
// Apply step 1 recursively on each of the two substrings x and y.
// Given two strings string1 and string2 of the same length, return true if string2 is a
// scrambled string of string1, otherwise, return false.

// Example 1:
const string1 = "great",
  string2 = "rgeat";
// Output: true
// Explanation: One possible scenario applied on string1 is:
// "great" --> "gr/eat" // divide at random index.
// "gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
// "gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
// "g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
// "r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
// "r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
// The algorithm stops now, and the result string is "rgeat" which is string2.
// As one possible scenario led string1 to be scrambled to string2, we return true.

// Example 2:
const string3 = "abcde",
  string4 = "caebd";
// Output: false

// Example 3:
const string5 = "a",
  string6 = "a";
// Output: true

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  // This Map stores all possible combinations as keys and a boolean
  // value of wether they are valid or not.
  const allCombinations = new Map();
  // Recursively create all permutations AND check if the arrangement is valid.
  function findPermutations(string, i) {
    // Base Case: The given string length is 1
    if (string.length == 1) {
      return s2[i] == string;
    }
    // Base Case: We have been here before
    const key = `${string},${i}`;
    if (allCombinations.has(key)) {
      return allCombinations.get(key);
    }

    // Pre Recursion
    let validPermutation = false; // We default to false
    // Split current string into two substrings of each possible length
    for (let j = 1; j < string.length; j++) {
      let stringX = string.slice(0, j); // x
      let stringY = string.slice(j); // y
      // Determine if s = x + y or s = y + x are valid
      let isXPlusYValid =
        findPermutations(stringX, i) &&
        findPermutations(stringY, i + stringX.length);
      let isYPlusXValid =
        findPermutations(stringY, i) &&
        findPermutations(stringX, i + stringY.length);
      if (isXPlusYValid || isYPlusXValid) {
        // if either are valid, set this permutation validPermutation as valid
        validPermutation = true;
        break;
      }
    }
    // Store or "Memoize" our result
    allCombinations.set(key, validPermutation);
    return validPermutation;
  }
  return findPermutations(s1, 0);
};

console.log(isScramble(string1, string2));
console.log(isScramble(string3, string4));
console.log(isScramble(string5, string6));

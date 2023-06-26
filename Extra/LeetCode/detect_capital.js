// We define the usage of capitals in a word to be right when one
// of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:
const word1 = "USA";
// Output: true

// Example 2:
const word2 = "FlaG";
// Output: false

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    return true;
  }
  return false;
};

console.log(detectCapitalUse(word1));
console.log(detectCapitalUse(word2));

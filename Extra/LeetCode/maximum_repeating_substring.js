// For a string sequence, a string word is k-repeating if word concatenated k times
// is a substring of sequence. The word's maximum k-repeating value is the highest
// value k where word is k-repeating in sequence. If word is not a substring of
// sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

// Example 1:
const sequence1 = "ababc",
  word1 = "ab";
// Output: 2
// Explanation: "abab" is a substring in "ababc".

// Example 2:
const sequence2 = "ababc",
  word2 = "ba";
// Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".

// Example 3:
const sequence3 = "ababc",
  word3 = "ac";
// Output: 0
// Explanation: "ac" is not a substring in "ababc".

const sequence4 = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word4 = "aaaba";

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0;

  // We will solve this be simply concatenating word on this substring.
  // Our default value is just the word without repeats
  let substring = word;

  // This will run until the substring gets too long for the repeating characters
  while (sequence.includes(substring)) {
    // On each round, concatenate another word to the end of the substring
    substring += word;
    count++;
  }

  return count;
};

console.log(maxRepeating(sequence1, word1));
console.log(maxRepeating(sequence2, word2));
console.log(maxRepeating(sequence3, word3));
console.log(maxRepeating(sequence4, word4));

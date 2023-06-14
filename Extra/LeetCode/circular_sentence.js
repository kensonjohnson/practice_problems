// A sentence is a list of words that are separated by a single space
// with no leading or trailing spaces.

// For example, "Hello World", "HELLO", "hello world hello world" are
// all sentences.
// Words consist of only uppercase and lowercase English letters.
// Uppercase and lowercase English letters are considered different.

// A sentence is circular if:
// The last character of a word is equal to the first character
// of the next word.
// The last character of the last word is equal to the first
// character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode",
// "leetcode eats soul" are all circular sentences.
// However, "Leetcode is cool", "happy Leetcode", "Leetcode"
// and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise,
// return false.

// Example 1:
const sentence1 = "leetcode exercises sound delightful";
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

// Example 2:
const sentence2 = "eetcode";
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.

// Example 3:
const sentence3 = "Leetcode is cool";
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.

/**
 * @param {string} sentence
 * @return {boolean}
 */

var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  let lastChar = sentence.charAt(sentence.length - 1);
  for (const word of words) {
    if (word.charAt(0) !== lastChar) {
      return false;
    }
    lastChar = word.charAt(word.length - 1);
  }
  return true;
};

console.log(isCircularSentence(sentence1));
console.log(isCircularSentence(sentence2));
console.log(isCircularSentence(sentence3));

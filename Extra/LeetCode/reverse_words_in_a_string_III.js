// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

const s1 = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

const s2 = "God Ding";
// Output: "doG gniD"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // split string into array of words
  const words = s.split(" ");
  // iterate over array of words
  for (let i = 0; i < words.length; i++) {
    // reverse word at current index, in place
    words[i] = words[i].split("").reverse().join("");
  }
  // join array of words into a string with spaces
  return words.join(" ");
};

console.log(reverseWords(s1));
console.log(reverseWords(s2));

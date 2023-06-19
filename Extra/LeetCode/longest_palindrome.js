// Given a string s which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

const s1 = "abccccdd";
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

const s2 = "a";
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // store the answer as a number
  let answer = 0;
  // create a hashmap for counting letters
  const lettersCount = {};
  // iterate over s
  for (const letter of s) {
    // check if hashmap has letter
    // if yes, increment the value at letter
    // if no, set 1 as value
    lettersCount[letter] = (lettersCount[letter] ?? 0) + 1;
    // check if value at letter is even
    if (lettersCount[letter] % 2 === 0) {
      // if yes, add 2 to the answer
      answer += 2;
    }
  }

  // check if s.length is longer than answer
  // if yes, return answer + 1
  // if no, return answer
  return answer < s.length ? answer + 1 : answer;
};

console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));

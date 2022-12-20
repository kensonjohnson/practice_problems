// Given a string s, find the length of the longest
// substring without repeating characters.

const test0 = "abcdef"; // Expect 6
const test1 = "abcabcbb"; // Expect 3
const test2 = "bbbbb"; // Expect 1
const test3 = "pwwkew"; // Expect 3
const test4 = "au"; // Expect 2
const test5 = "dvdf"; // Expect 3
const test6 = " "; // Expect 1
const test7 = ""; // Expect 0

var lengthOfLongestSubstring = function (s) {
  //split the word into all possible substrings
  let longestFound = 0;
  for (let i = 0; i < s.length; i++) {
    let reachedEnd = true;
    // we start by looking from i
    let substring = s.charAt(i);
    for (let j = i + 1; j < s.length; j++) {
      // check if j is anywhere in the substring
      if (substring.includes(s.charAt(j))) {
        // if yes, check if substring is longer than we have alreaedy found
        if (substring.length > longestFound) {
          // if yes, set it as the new longest we have found
          longestFound = substring.length;
        }
        // end of substring, start the next outer loop
        break;
      } else {
        // if no, concat the character at j to the substring
        substring += s.charAt(j);
      }
    }
    // if we make it all the way through the string, longest found never got updated
    if (reachedEnd && substring.length > longestFound) {
      longestFound = substring.length;
    }
  }
  return longestFound;
};

console.log(lengthOfLongestSubstring(test0));
console.log(lengthOfLongestSubstring(test1));
console.log(lengthOfLongestSubstring(test2));
console.log(lengthOfLongestSubstring(test3));
console.log(lengthOfLongestSubstring(test4));
console.log(lengthOfLongestSubstring(test5));
console.log(lengthOfLongestSubstring(test6));
console.log(lengthOfLongestSubstring(test7));

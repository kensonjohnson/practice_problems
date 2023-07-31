// Given two strings s and goal, return true if you can swap two
// letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed)
// such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
const s1 = "ab",
  goal1 = "ba";
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:
const s2 = "ab",
  goal2 = "ab";
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:
const s3 = "aa",
  goal3 = "aa";
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  let differences = [];
  let lettersInString = new Set(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) differences.push([s[i], goal[i]]);
  }

  if (s.length !== goal.length) return false;

  if (s === goal) return lettersInString.size < s.length;

  if (differences.length === 2)
    return differences[0].toString() === differences[1].reverse().toString();

  return false;
};

console.log(buddyStrings(s1, goal1));
console.log(buddyStrings(s2, goal2));
console.log(buddyStrings(s3, goal3));

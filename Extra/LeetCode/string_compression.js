// Given an array of characters chars, compress it using the following
// algorithm:

// Begin with an empty string s. For each group of consecutive repeating
// characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead,
// be stored in the input character array chars. Note that group lengths
// that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of
// the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
// Output: Return 6, and the first 6 characters of the input array should be:
// ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to
// "a2b2c3".

// Example 2:
const chars2 = ["a"];
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.

// Example 3:
const chars3 = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
];
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // store string form
  let s = chars[0];
  let currentChar = chars[0];
  const n = chars.length;

  let count = 1;
  // iterate over chars
  for (let i = 1; i < n; i++) {
    // look at current index to see is different from last
    const letter = chars[i];
    if (letter !== currentChar) {
      // if different, store current count of prev letter, and reset count and append
      if (count > 1) {
        s = s + count.toString();
        count = 1;
      }
      s = s + letter;
      currentChar = letter;
      continue;
    }
    // if not, increment count
    count++;
    if (i === n - 1) {
      s = s + count.toString();
    }
  }
  chars.splice(0);

  for (const letter of s) {
    chars.push(letter);
  }
  console.log(chars);

  return s.length;
};

console.log(compress(chars1));

// Given a string of English letters s, return the greatest English letter
// which occurs as both a lowercase and uppercase letter in s. The returned
// letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Example 1:
const s1 = "lEeTcOdE";
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.

// Example 2:
const s2 = "arRAzFif";
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

// Example 3:
const s3 = "AbCdEfGhIjK";
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  // create set to store found letters
  const letters = new Set();
  let highestFound = "";
  // iterate over s
  for (const letter of s) {
    // add current letter to set
    letters.add(letter);
    // check if letter uppercased and lowercased exist in set
    if (
      letters.has(letter.toLowerCase()) &&
      letters.has(letter.toUpperCase()) &&
      letter.toUpperCase() > highestFound
    ) {
      // if yes, check if letter uppercased's char code is higher than current highest found
      // if yes, store the current letter as highest found
      highestFound = letter.toUpperCase();
    }
  }
  return highestFound;
};

console.log(greatestLetter(s1));
console.log(greatestLetter(s2));
console.log(greatestLetter(s3));

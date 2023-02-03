// Given a string s, return the longest palindromic substring in s.

// Example 1:
const s1 = "babad";
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
const s2 = "cbbd";
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  // iterate over string
  const reversed = reverseString(s);
  for (let i = 0; i < n; i++) {
    const length = n - i;
    const substrings = [];

    // iterate up to i
    for (let j = 0; j <= i; j++) {
      substrings.push(s.slice(j, j + length));
    }

    for (let j = 0; j < substrings.length; j++) {
      const substring = substrings[j];
      if (substring === reverseString(substring)) {
        return substring;
      }
    }
  }
};

function reverseString(s) {
  const stringArr = s.split("");
  stringArr.reverse();
  return stringArr.join("");
}

const newLongestPalindrome = (s) => {
  let longestFound = "";
  // iterate over each letter
  for (let i = 0; i < s.length; i++) {
    // search twice going out from each letter
    // once for pointers to each side of the letter
    let palin1 = s.charAt(i);
    let pointer1 = i - 1;
    let pointer2 = i + 1;
    while (
      pointer1 >= 0 &&
      pointer2 < s.length &&
      s.charAt(pointer1) === s.charAt(pointer2)
    ) {
      const letter = s.charAt(pointer1);
      palin1 = letter + palin1 + letter;
      pointer1--;
      pointer2++;
    }
    // once for pointer1 on the letter and pointer2 on the next letter
    let palin2 = "";
    pointer1 = i;
    pointer2 = i + 1;
    while (
      pointer1 >= 0 &&
      pointer2 < s.length &&
      s.charAt(pointer1) === s.charAt(pointer2)
    ) {
      const letter = s.charAt(pointer1);
      palin2 = letter + palin2 + letter;
      pointer1--;
      pointer2++;
    }
    // Use Math.max() to determine which to store
    if (palin1.length > longestFound.length) {
      longestFound = palin1;
    }
    if (palin2.length > longestFound.length) {
      longestFound = palin2;
    }
  }
  return longestFound;
};

console.log(newLongestPalindrome(s1));
console.log(newLongestPalindrome(s2));

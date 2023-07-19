// Given a string s, reverse only all the vowels in the string and
// return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear
// in both lower and upper cases, more than once.

// Example 1:
const s1 = "hello";
// Output: "holle"

// Example 2:
const s2 = "leetcode";
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // Create a vowels array to help with conditionals
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Split s into an array of letters (strings)
  // We need this for the swapping
  const stringArray = s.split("");

  // Setup two pointers, one at the start of s and one at the end
  let left = 0;
  let right = s.length - 1;

  // iterate until pointers cross
  while (left < right) {
    // Grab left and right letters
    const leftLetter = stringArray[left];
    const rightLetter = stringArray[right];
    // check if left letter is a consonant
    if (!vowels.includes(leftLetter)) {
      // if yes, increment left and continue
      left++;
      continue;
    }

    // check if right letter is a consonant
    if (!vowels.includes(rightLetter)) {
      // if yes, decrement right and continue
      right--;
      continue;
    }

    // both are vowels, do a swap
    stringArray[left] = rightLetter;
    stringArray[right] = leftLetter;

    // move both pointers off of the current letters
    left++;
    right--;
  }

  return stringArray.join("");
};

console.log(reverseVowels(s1));
console.log(reverseVowels(s2));

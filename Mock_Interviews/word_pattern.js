// Write a function that takes as arguments two strings: pattern and input. Return
// whether or not the words in input match the pattern of the characters in pattern.

const pattern = "abba";
const input = "red blue blue red"; // expect true

const pattern2 = "abcabc";
const input2 = "red blue green red blue green";

const pattern3 = "abba";
const input3 = "red blue green red";

// split both strings into arrays of sub strings

// start iterating over both arrays
// map key value pairs from the elements
// if a previous key is encountered, check that the value matches
// if it doesn't, the input does not matcht the pattern

function wordPattern(pattern, input) {
  let keys = pattern.split("");
  let values = input.split(" ");

  const matches = new Map();

  for (let i = 0; i < keys.length; i++) {
    if (!matches.has(keys[i])) {
      matches.set(keys[i], values[i]);
    }
    let word = matches.get(keys[i]);
    if (word !== values[i]) {
      return false;
    }
  }
  return true;
}

console.log(wordPattern(pattern, input));
console.log(wordPattern(pattern2, input2));
console.log(wordPattern(pattern3, input3));

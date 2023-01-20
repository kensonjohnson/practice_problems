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

// get how many tokens exist
function howManyKeys(pattern) {
  const keys = new Set(pattern);
  return keys.size;
}

function hardWordPattern(pattern, input) {
  const tokens = new Map();
  const n = input.length;
  const numberOfTokens = howManyKeys(pattern);
  const keys = pattern.split("");
  const tokensPerKey = getTokensPerKey(pattern);

  let currentWord = "";
  for (let i = 1; i <= n; i++) {
    const currentToken = input.slice(0, i);
    const subString = input.slice(i);
    if (subString.includes(currentToken)) {
      currentWord = currentToken;
    } else {
      break;
    }
  }
}

function getTokensPerKey(pattern) {
  const keys = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const key = pattern.charAt(i);
    if (!keys.has(key)) {
      keys.set(key, []);
    }
    keys.get(key).push(i);
  }
  return keys;
}
// slice the string, in increasing windows
// check if that word exists later in the string,
// store that as a possibility
// repeat until the process breaks,
// store the largest as a word
// if none found, splice letter at index 0 and store it in the current key
// repeat the process
// if a word is found, previously found characters are a token,
// and new word found is a token

// console.log(tokensPerKey("abba"));

const question =
  "What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // create variable onlyRSTLNE to determine if a word is good to add to the answer Array
  let onlyRSTLNE = true;

  // iterate over current word
  for (let i = 0; i < word.length; i++) {
    // check if current letter is equal to R, S, T, L, N, E
    if (
      word.charAt(i) !== "R" &&
      word.charAt(i) !== "S" &&
      word.charAt(i) !== "T" &&
      word.charAt(i) !== "L" &&
      word.charAt(i) !== "N" &&
      word.charAt(i) !== "E"
    ) {
      // if not a match, set onlyRSTLNE to true and keep iterating
      onlyRSTLNE = false;
      break;
    }
  }
  // after the loop, check if onlyRSTLNE is true
  if (onlyRSTLNE) {
    // if true, add current word to answer Array
    answer.push(word);
  }
});

// format answer
console.log(question);
console.log(answer);

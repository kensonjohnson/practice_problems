const question =
  "What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// iterate over srabbleWords
scrabbleWords.forEach((word) => {
  // create variable noCommonLetters and set to true
  let noCommonLetters = true;
  // iterate over the current word
  for (let i = 0; i < word.length; i++) {
    // check if current word contains A, E, I, O, S, H, R, T, or N
    if (
      word.charAt(i) === "A" ||
      word.charAt(i) === "E" ||
      word.charAt(i) === "I" ||
      word.charAt(i) === "O" ||
      word.charAt(i) === "S" ||
      word.charAt(i) === "H" ||
      word.charAt(i) === "R" ||
      word.charAt(i) === "T" ||
      word.charAt(i) === "N"
    ) {
      // if a match, set noCommonLetters to false and break
      noCommonLetters = false;
      break;
    }
  }
  // after loop, check if noCommonLetters is true
  if (noCommonLetters) {
    // if true, store current word in the answer Array
    answer.push(word);
  }
});

// format the answer
console.log(question);
console.log(answer);

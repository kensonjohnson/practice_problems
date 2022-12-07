const question =
  "What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];
let tempWords = [];

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
    // if true, store current word in the tempWords Array
    tempWords.push(word);
  }
});

// sort tempWords from longest word to shortest
tempWords.sort((a, b) => {
  return b.length - a.length;
});

// iterate over tempWords
for (let i = 0; i < tempWords.length; i++) {
  // check if current word length is equal to length of the first word in tempWords
  if (tempWords[i].length === tempWords[0].length) {
    // if a match, store word in the answer Array
    answer.push(tempWords[i]);
  } else {
    // if not a match, no more matches can be made, break from the loop
    break;
  }
}

// format the answer
console.log(question);
console.log(answer);

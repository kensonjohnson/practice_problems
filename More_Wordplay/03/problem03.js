const question =
  "What are all of the words that have only “E”s for vowels and are at least 15 letters long?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if each word includes E, but does not include A, I, O, or U AND is at least 15 character long
  if (
    word.includes("E") &&
    !word.includes("A") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    word.length > 14
  ) {
    // if a match, save the word to the answer Array
    answer.push(word);
  }
});

// format answer
console.log(question);
console.log(answer);

const question = "What are all of the words that have only “U”s for vowels?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if each word includes U, but does not include A, E, I, or O
  if (
    word.includes("U") &&
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    // if a match, save the word to the answer Array
    answer.push(word);
  }
});

// format answer
console.log(question);
console.log(answer);

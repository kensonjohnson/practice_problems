// This one uses String.startsWith() and String.endsWith()

const question =
  "What are all of the words that both start with a “TH” and end with a “TH”?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

const subString = "TH";

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // for each word, check if the first two and last two letters are equal to the subString
  if (word.startsWith(subString) && word.endsWith(subString)) {
    // if both are true, save the current word in the answer Array
    answer.push(word);
  }
});

// format answer
console.log(question);
console.log(answer);

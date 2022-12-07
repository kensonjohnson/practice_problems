const question =
  "Write a function that takes a string word as the first argument, a string letter as the second argument, and returns a count of how many times letter occurs in word.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function howManyLetters(word, letter) {
  const toSearch = word.toUpperCase();
  const toFind = letter.toUpperCase();
  let numberOfTimes = 0;

  for (let i = 0; i < toSearch.length; i++) {
    if (toSearch.charAt(i) === toFind) {
      numberOfTimes++;
    }
  }
  return numberOfTimes;
}

console.log(question);
console.log(howManyLetters("Aardvark", "A"));

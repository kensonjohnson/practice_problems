const question =
  "Write a function that takes a string word as an argument and returns a count of all of the “A”s in that string.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function howManyA(word) {
  const toSearch = word.toUpperCase();
  let numberOfA = 0;

  for (let i = 0; i < toSearch.length; i++) {
    if (toSearch.charAt(i) === "A") {
      numberOfA++;
    }
  }

  return numberOfA;
}

console.log(question);
console.log(howManyA("Waiting"));
console.log(howManyA("Aardvark"));

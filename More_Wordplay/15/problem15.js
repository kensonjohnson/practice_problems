const question =
  "Write a function that takes a string phrase and returns a dictionary that contains counts of how many times every character appears in phrase.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function howManyOfEach(phrase) {
  let toSearch = phrase.toUpperCase().split("").sort().join("").trim();
  let dictionary = {};
  let count = 1;
  let char = toSearch.charAt(0);
  for (let i = 1; i < toSearch.length; i++) {
    if (toSearch.charAt(i) === toSearch.charAt(i - 1)) {
      count++;
    } else {
      dictionary[char] = count;
      char = toSearch.charAt(i);
      count = 1;
    }
  }
  return dictionary;
}

console.log(question);
console.log(howManyOfEach("The quick brown fox"));
console.log(howManyOfEach("How much wood could a woodchuck chuck"));

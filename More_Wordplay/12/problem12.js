const question =
  "Write a function that takes a string prefix as the first argument, a string suffix as the second argument, and an integer length as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function findWord(prefix, suffix, length) {
  let answer = [];
  const beginsWith = prefix.toUpperCase();
  const endsWith = suffix.toUpperCase();

  scrabbleWords.forEach((word) => {
    if (
      word.startsWith(beginsWith) &&
      word.endsWith(endsWith) &&
      word.length === length
    ) {
      answer.push(word);
    }
  });
  return answer;
}

console.log(question);
console.log(findWord("pl", "NG", 8));

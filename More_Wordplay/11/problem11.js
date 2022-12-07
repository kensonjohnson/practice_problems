const question =
  "Write a function that takes a string prefix as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function findPrefix(prefix) {
  let answer = [];
  const toFind = prefix.toUpperCase();
  scrabbleWords.forEach((word) => {
    if (word.startsWith(toFind)) {
      answer.push(word);
    }
  });
  return answer;
}

console.log(question);
console.log(findPrefix("pl").slice(0, 10));
console.log(findPrefix("TR").slice(0, 10));

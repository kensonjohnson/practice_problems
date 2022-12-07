const question =
  "Write a function that takes a string substring as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

function findSubstring(subString) {
  let answer = [];
  const toFind = subString.toUpperCase();

  scrabbleWords.forEach((word) => {
    if (word.includes(toFind)) {
      answer.push(word);
    }
  });
  return answer;
}

console.log(question);
console.log(findSubstring("rst").slice(0, 25));
console.log(findSubstring("ING").slice(0, 25));

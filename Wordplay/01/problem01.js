const question = "What are all of the words containing UU?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substring = "UU";

let filteredWords = scrabbleWords.filter((element) => {
  if (element.includes(substring)) return true;
});

console.log(question);
console.log(`${filteredWords.length} matches found:`);
console.log(filteredWords);

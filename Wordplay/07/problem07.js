const question = "What are all of the words that both start and end with a Y?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substring = "Y";

let beginsWithY = scrabbleWords.filter((e) => {
  if (e.startsWith(substring)) return true;
});

let answer = beginsWithY.filter((e) => {
  if (e.endsWith(substring)) return true;
});

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

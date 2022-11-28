const question =
  "What are all of the words that contain the word CAT and are exactly 5 letters long?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const substring = "CAT";
const wordLength = 5;

let answer = scrabbleWords.filter((element) => {
  if (element.includes(substring)) {
    if (element.length == wordLength) return true;
    return false;
  }
});

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

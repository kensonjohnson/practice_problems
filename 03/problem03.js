const question = "What are all of the words containing a Q but not a U?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader(
  "/home/kenson/repos/practice_problems/sowpods.txt"
);

const substring = "Q";
const substring2 = "U";

let filteredResult = scrabbleWords.filter((e) => {
  if (e.includes(substring)) return true;
});

let answer = filteredResult.filter((e) => {
  if (!e.includes(substring2)) return true;
});

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

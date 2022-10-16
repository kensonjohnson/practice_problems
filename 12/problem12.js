const question =
  "Create and print an array containing all of the words that end in 'GHTLY'";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader(
  "/home/kenson/repos/practice_problems/sowpods.txt"
);

const substring = "GHTLY";

answer = scrabbleWords.filter((e) => {
  if (e.endsWith(substring)) return true;
});

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

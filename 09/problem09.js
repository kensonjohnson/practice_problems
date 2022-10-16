const question =
  "What are all of the words that have all 5 vowels, in any order?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader(
  "/home/kenson/repos/practice_problems/sowpods.txt"
);

const vowels = ["A", "E", "I", "O", "U", "Y"];

function filterWithSubstrings(arrayToFilter, arrayOfSubstrings) {
  let finalResult = arrayToFilter;
  for (i = 0; i < arrayOfSubstrings.length; i++) {
    finalResult = finalResult.filter((element) => {
      if (element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

answer = filterWithSubstrings(scrabbleWords, vowels);

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

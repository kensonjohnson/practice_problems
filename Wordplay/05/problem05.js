const question =
  "What are all of the words that have no E or A and are at least 15 letters long?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const minLength = 15;
const substrings = ["A", "E"];

function filterWithSubstrings(arrayToFilter, arrayOfSubstrings) {
  let finalResult = arrayToFilter;
  for (i = 0; i < arrayOfSubstrings.length; i++) {
    finalResult = finalResult.filter((element) => {
      if (!element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

let filteredForLength = scrabbleWords.filter((e) => {
  if (e.length >= minLength) return true;
});

answer = filterWithSubstrings(filteredForLength, substrings);

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

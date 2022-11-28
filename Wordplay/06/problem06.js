const question =
  "What are all of the words that have a B and an X and are less than 5 letters long?";

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const maxLength = 4;
const substrings = ["B", "X"];

function filterWithSubstrings(arrayToFilter, arrayOfSubstrings) {
  let finalResult = arrayToFilter;
  for (i = 0; i < arrayOfSubstrings.length; i++) {
    finalResult = finalResult.filter((element) => {
      if (element.includes(arrayOfSubstrings[i])) return true;
    });
  }
  return finalResult;
}

let filteredForLength = scrabbleWords.filter((e) => {
  if (e.length <= maxLength) return true;
});

answer = filterWithSubstrings(filteredForLength, substrings);

console.log(question);
console.log(`${answer.length} matches were found:`);
console.log(answer);

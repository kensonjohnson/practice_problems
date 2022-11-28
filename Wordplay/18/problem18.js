// What are all of the words that have a Q and a Y and a Z and are at least 10 letters long?

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

console.log(scrabbleWords.length); // number of times Array.filter() will iterate

const filteredWords = scrabbleWords.filter((word) => {
  if (
    word.includes("Q") &&
    word.includes("Y") &&
    word.includes("Z") &&
    word.length > 9
  ) {
    return true;
  }
});

console.log(filteredWords); // Answer to the question

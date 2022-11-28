//What is the longest word that doesn't have an A, E, I, or O?

const fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const filteredForVowels = scrabbleWords.filter((word) => {
  if (
    word.includes("A") ||
    word.includes("E") ||
    word.includes("I") ||
    word.includes("O")
  ) {
    return false;
  } else {
    return true;
  }
});

filteredForVowels.sort((a, b) => {
  return a.length - b.length;
});

const filteredForLength = filteredForVowels.filter((word) => {
  if (word.length == filteredForVowels[filteredForVowels.length - 1].length) {
    return true;
  }
});

console.log(`${filteredForLength.length} answers found`);

// const answer = filteredForVowels[filteredForVowels.length - 1];

console.log(filteredForLength);

import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "What are all of the words that have at least 3 different double letters?\n";
const example =
  "For example: \n“BOOKKEEPER” is an answer because it has a double-O, a double-K, and a double-E.\n";

// Store all of the substrings
const substrings = ["OO", "KK", "EE"];

// iterate over scrabbleWords
const answer = scrabbleWords.filter((word) => {
  let hasAllSubStrings = true;
  // check if word includes substrings
  substrings.forEach((substring) => {
    if (!word.includes(substring)) {
      // if it does not, we need to return false
      hasAllSubStrings = false;
    }
  });
  return hasAllSubStrings;
});

console.log(question);
console.log(example);
console.log(answer);

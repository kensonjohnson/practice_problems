import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "What are all of the words that are at least 8 letters long and use 3 or fewer different letters?\n";
const example =
  "For example: \n“REFERRER” is an answer  because it uses only 3 different letters: R, E, and F.\n";

const minLength = 8;
const answer = [];
// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if word is at least 8 characters long
  if (typeof word !== "string" || word.length < minLength) {
    // if not, skip the word
    return;
  }
  // check if word has more than 3 unique characters
  const letters = new Set(word);
  if (letters.size > 3) {
    return;
  }
  answer.push(word);
});

// if it does, skip the word

// push the word to the answer array

console.log(question);
console.log(`${answer.length} words fit the answer to this question.\n`);
console.log(
  `A sample word is: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }.\n`
);

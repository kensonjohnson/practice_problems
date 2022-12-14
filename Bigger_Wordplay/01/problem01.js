import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question = "What is the longest word that has no repeating letters?\n";

let answer = [];
let longestFound = 0;
let hasRepeats = false;

// iterate over scrabbleWords
scrabbleWords.forEach((word) => {
  // check if word is as long as longestFound
  if (!word || word.length < longestFound) {
    // if not, skip the word
    return;
  }

  if (word.length > longestFound) {
    // if word.length is GREATER than longestFound, set the answer array to empty and store new longestFound
    answer = [];
    longestFound = word.length;
  }

  // check if word has repeating letters
  hasRepeats = false;
  for (let i = 0; i < word.length - 1; i++) {
    if (word.charAt(i) === word.charAt(i + 1)) {
      hasRepeats = true;
      break;
    }
  }
  //if it does, skip to next word
  if (hasRepeats) {
    return;
  }

  // if not, push() the word to the answer array
  answer.push(word);
});

console.log(question);
console.log(`${answer.length} words fit the answer to this question.\n`);
console.log(
  `A sample word is: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }.\n`
);

import readFile from "../../CustomParser.js";
console.time("Total time to completion:");
const scrabbleWords = readFile("../sowpods.txt");
const words = new Set(scrabbleWords);

const question =
  "What are all of the compound words? These are words made up of 2 smaller words.";
const example =
  "For example: \n - “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.\n";
const matches = [];

scrabbleWords.forEach((word) => {
  if (!word || word.length < 4) {
    return false;
  }
  if (isCompound(word)) {
    matches.push(word);
  }
});

function isCompound(word) {
  if (!word) {
    return;
  }
  for (let i = 2; i < word.length - 2; i++) {
    if (words.has(word.slice(0, i)) && words.has(word.slice(i))) {
      return true;
    }
  }
  return false;
}

console.log(question);
console.log(example);
console.timeEnd("Total time to completion:"); // end timing
console.log(`${matches.length} compound words were found.\n`);
console.log("Several examples that were found:");
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);
console.log(matches[Math.floor(Math.random() * (matches.length - 1))]);

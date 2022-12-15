import readFile from "../../CustomParser.js";
console.time("Total Time");
const scrabbleWords = readFile("../sowpods.txt").sort((a, b) => {
  return a.length - b.length;
});
const words = new Set(scrabbleWords);

const question =
  "What are all of the compound words? These are words made up of 2 smaller words.";
const example =
  "For example: \n - “SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.\n";
const matches = new Set();
for (let i = 0; i < scrabbleWords.length; i++) {
  if (i % 50 === 0) {
    console.log(i);
    console.log(matches.size);
  }
  const firstWord = scrabbleWords[i];
  if (!firstWord || firstWord.length < 3) {
    continue;
  }
  if (firstWord.length > 13) {
    break;
  }
  if (matches.has(firstWord)) {
    continue;
  }
  const minLength = firstWord.length + 2;
  if (i % 50 === 0) {
    console.time("Inner Loop");
  }
  scrabbleWords.forEach((secondWord) => {
    if (secondWord.length < firstWord.length) {
      return;
    }
    const biggerWord = firstWord + secondWord;
    if (biggerWord.length > 15 || biggerWord.length < minLength) {
      return;
    }
    const biggerWord2 = secondWord + firstWord;
    if (words.has(biggerWord)) {
      matches.add(biggerWord);
    }
    if (words.has(biggerWord2)) {
      matches.add(biggerWord2);
    }
  });
  if (i % 50 === 0) {
    console.timeEnd("Inner Loop");
  }
}

console.log(question);
console.log(example);
// console.log(matches);
console.timeEnd("Total Time");

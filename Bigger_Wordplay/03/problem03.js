import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "What are all of the words that are at least 8 letters long and use 3 or fewer different letters?\n";
const example =
  "For example: \n“BOOKKEEPER” is an answer because it has a double-O, a double-K, and a double-E.\n";

// code here

console.log(question);
console.log(example);

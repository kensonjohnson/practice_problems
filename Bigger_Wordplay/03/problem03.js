import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "What are all of the words that have at least 3 different double letters?\n";
const example =
  "For example: \n“BOOKKEEPER” is an answer because it has a double-O, a double-K, and a double-E.\n";

// code here

console.log(question);
console.log(example);

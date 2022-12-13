import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "What are all of the compound words? These are words made up of 2 smaller words.";
const example =
  "For example: \n“SNOWMAN” is a compound word made from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.\n";

  // code here

console.log(question + "\n");
console.log(example);

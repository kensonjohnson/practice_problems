import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

// Finding alphabet chains:
const question =
  "Finding alphabet chains:\nFirst, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order? e.g. 'FEEDBACK' is an answer";
const followUpQuestion =
  "Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain and the words that can be made from that chain.";
// code here

console.log(question);
// Format first answer here

// console.log(followUpQuestion);
// format second answer here

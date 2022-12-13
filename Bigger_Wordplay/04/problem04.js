import readFile from "../../CustomParser.js";

const scrabbleWords = readFile("../sowpods.txt");

const question =
  "Write a function that takes a string availableLetters as an argument and returns an \narray of all the words that can be made from only those letters. \nLetters can be re-used as many times as needed and can appear in any order. \nNot all of the letters in availableLetters have to be used.";

// code here

console.log(question);

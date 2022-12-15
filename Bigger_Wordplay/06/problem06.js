import readFile from "../../CustomParser.js";

console.time("Total Time");
const scrabbleWords = readFile("../sowpods.txt");

// Finding alphabet chains:
const question =
  "\nFinding alphabet chains:\nFirst, what are all of the words that have a least one “A”, one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order? e.g. 'FEEDBACK' is an answer.\n";
const followUpQuestion =
  "\nNext, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the longest chain and the words that can be made from that chain.\n";

let answer = [];
// iterate over scrabble words
scrabbleWords.forEach((word) => {
  // check if current word contains all of the substrings
  if (
    word.includes("A") &&
    word.includes("B") &&
    word.includes("C") &&
    word.includes("D") &&
    word.includes("E") &&
    word.includes("F")
  ) {
    // if it does, push the word to the answer array
    answer.push(word);
  }
});

// function takes in array and returns string
function findLongestChain(arrayOfStrings) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let longestChain = "";
  for (let i = 0; i < 15; i++) {
    if (longestChain.length > 0) {
      break;
    }
    const lengthOfChain = 15 - i;
    // create the array of substrings
    let substrings = new Map();
    for (let j = 0; j < alphabet.length - lengthOfChain; j++) {
      const chain = alphabet.slice(j, j + lengthOfChain);
      const substring = chain.split("");
      substrings.set(chain, substring || []);
    }
    // check if all the letters in the substring exist in any word
    substrings.forEach((substring, chain) => {
      let results = arrayOfStrings.filter((word) => {
        if (chain.length > word.length) {
          return false;
        }
        let hasAll = true;
        substring.forEach((letter) => {
          if (!word.includes(letter)) {
            hasAll = false;
          }
        });
        if (hasAll) {
          return true;
        }
      });
      // if at least one word exists that contains the entire substring, we have an answer
      if (results.length > 0) {
        longestChain = chain;
      }
    });
  }
  return longestChain;
}

console.log(question);
console.log(`${answer.length} words match the query.`);
console.log(
  `One of those words is: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }.`
);

console.log(followUpQuestion);
const longestChain = findLongestChain(scrabbleWords);
answer = scrabbleWords.filter((word) => {
  let hasAll = true;
  const substrings = longestChain.split("");
  substrings.forEach((letter) => {
    if (!word.includes(letter)) {
      hasAll = false;
    }
  });
  if (hasAll) {
    return true;
  }
});
console.log(
  `The longest chain found is ${longestChain}, which is ${longestChain.length} characters long.`
);
console.log(
  `This chain matches ${answer.length} words, and one such word is: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }.\n`
);
console.timeEnd("Total Time");

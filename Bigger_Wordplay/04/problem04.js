import readFile from "../../CustomParser.js";

const question =
  "\nWrite a function that takes a string availableLetters as an argument and returns an \narray of all the words that can be made from only those letters.\n - Letters can be re-used as many times as needed and can appear in any order.\n - Not all of the letters in availableLetters have to be used.";

// function takes string: availableLetters
function wordsFromAvailableLetters(availableLetters) {
  const scrabbleWords = readFile("../sowpods.txt");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  if (availableLetters.length === 1) {
    return "Please provide more than one letter.";
  }

  // split availableLetters into an Set
  const legalLetters = new Set(availableLetters.toUpperCase());
  // use set to create an array of illegal letters
  const illegalLetters = alphabet.filter((letter) => {
    let illegalLetter = true;
    legalLetters.forEach((legalLetter) => {
      if (legalLetter === letter) {
        illegalLetter = false;
      }
    });
    return illegalLetter;
  });
  // iterate over scrabbleWords
  const answer = scrabbleWords.filter((word) => {
    let legalWord = true;
    // check if word contains an illegal letter
    for (let i = 0; i < illegalLetters.length; i++) {
      if (word.includes(illegalLetters[i])) {
        // if it does, skip the word
        legalWord = false;
      }
    }
    // if it does not, push the word to the answer array
    return legalWord;
  });
  // function returns array[strings]
  return answer;
}
let answer;
const seperator =
  "---------------------------------------------------------------";
const example1 = "T";
const example2 = "BROTHER";
const example3 = "abcitl";
const example4 = "TMMMaohepp";
console.log(question);
console.log(seperator + "\n");
answer = wordsFromAvailableLetters(example1);
console.log(
  `We have to enter more than one word, otherwise we get: \n${answer}\n${seperator}\n`
);

answer = wordsFromAvailableLetters(example2);
console.log(
  `Giving the function "${example2}" as the input gives us ${answer.length} results.`
);
console.log(
  `A sample word from those results would be: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }\n${seperator}\n`
);

answer = wordsFromAvailableLetters(example3);
console.log("The given letters don't have to be uppercase either:");
console.log(
  `Giving the function "${example3}" as the input gives us ${answer.length} results.`
);
console.log(
  `A sample word from those results would be: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }\n${seperator}\n`
);

answer = wordsFromAvailableLetters(example4);
console.log("You can also repeat letters:");
console.log(
  `Giving the function "${example4}" as the input gives us ${answer.length} results.`
);
console.log(
  `A sample word from those results would be: ${
    answer[Math.floor(Math.random() * (answer.length - 1))]
  }\n${seperator}\n`
);

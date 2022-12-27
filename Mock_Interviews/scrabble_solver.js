// This was a real interview question at Dropbox. Candidates who passed the interview
// would typically successfully implement Part 1 and then articulate an algorithm for
// Part 2 within 60 minutes, but they might not have time to implement Part 2.

// Part 1

// Write code that:

// - Accepts a string (e.g. as an argument to a function, or as a command-line
// argument). This string represents your Scrabble “rack”.
// - Prints out the words that can be made from the characters in that input string,
// along with their Scrabble scores, one word per line, in descending score order

// Example input and output:

// `$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
// `17 piques`
// `17 equips`
// `16 quips`
// `16 pique`
// `16 equip`
// `15 quip`
// `…`

import readFile from "../CustomParser.js";

const scrabbleWords = readFile("sowpods.txt");

const SCORES_MAP = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

// function takes in string of available letters
function scrabbleSolver(string) {
  //    string = string.toUpperCase()
  let letters = new Map();
  for (let i = 0; i < string.length; i++) {
    let character = letters.get(string.charAt(i));
    letters.set(string.charAt(i).toUpperCase(), character ? ++character : 1);
  }
  // store valid words
  let validWords = [];
  // iterate over string
  for (let i = 0; i < scrabbleWords.length; i++) {
    const string = scrabbleWords[i];
    let currentWord = new Map();
    // break word into map
    for (let j = 0; j < string.length; j++) {
      let character = currentWord.get(string.charAt(j));
      currentWord.set(string.charAt(j), character ? ++character : 1);
    }
    // compare to map of given letters
    // if the number of unique keys in the current word is greater than the number of
    // unique letters we have in our "rack", we can't make the word
    if (letters.size < currentWord.size) {
      continue;
    }

    // if we have enough of each letter in currentWord in our letters, we can make the word.
    let valid = true;
    for (const [k, v] of currentWord) {
      if (!letters.has(k) || v > letters.get(k)) {
        valid = false;
      }
    }
    // if match, store word as match
    if (valid) {
      const score = generateScore(scrabbleWords[i]);
      validWords.push({ score: score, word: scrabbleWords[i] });
    }
  }

  // sort all of the valid words by score, highest to lowest.
  if (validWords.length < 1) {
    console.log("No words can be made from the input");
    return;
  }
  validWords.sort((a, b) => {
    return b.score - a.score;
  });
  validWords.forEach((word) => {
    console.log(word.score, word.word);
  });
}

function generateScore(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score = score + SCORES_MAP[word.charAt(i)];
  }
  return score;
}

scrabbleSolver("koajs");

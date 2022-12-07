const task = "Create a function that converts Roman Numerals to Integers";

const testCase1 = "III";
const testCase2 = "LVIII";
const testCase3 = "MCMXCIV";

const NUMERAL_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  const numerals = s.split("");
  let sum = 0;
  subtract = false;
  // iterate over numerals
  for (let i = 0; i < numerals.length; i++) {
    // check if I
    if (numerals[i] === "I") {
    }
  }

  // if I, check if next numeral is V or X

  // if it is set variable subtract equal to true

  // if its not add 1 to sum

  return numerals;
}

console.log(romanToInt(testCase1));

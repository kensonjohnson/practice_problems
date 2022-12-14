const task = "Create a function that converts Roman Numerals to Integers";

const testCase1 = "III";
const testCase2 = "LVIII";
const testCase3 = "MCMXCIV";

function numeralToInteger(s) {
  const NUMERAL_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let previousValue = 0;
  let sum = 0;
  const numerals = s.split("").reverse();
  numerals.forEach((numeral) => {
    if (NUMERAL_VALUES[numeral] >= previousValue) {
      sum += NUMERAL_VALUES[numeral];
    } else {
      sum -= NUMERAL_VALUES[numeral];
    }
    previousValue = NUMERAL_VALUES[numeral];
  });
  return sum;
}

console.log(numeralToInteger(testCase1));
console.log(numeralToInteger(testCase2));
console.log(numeralToInteger(testCase3));

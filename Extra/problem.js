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
  // iterate over numerals
  for (let i = 0; i < numerals.length; i++) {
    // check if I
    if (numerals[i] === "I") {
      //if we are at the last index, we don't want to look ahead
      if (i === numerals.length - 1) {
        // if it is, then just add I to sum
        sum = sum + NUMERAL_VALUES.I;
        continue;
      }
      // check if next numeral is V or X
      if (numerals[i + 1] === "V" || numerals[i + 1] === "X") {
        // if it is, subtract I from the sum
        sum = sum - NUMERAL_VALUES.I;
        continue;
      } else {
        // if its not add I to sum
        sum = sum + NUMERAL_VALUES.I;
        continue;
      }
    }

    // check if V
    if (numerals[i] === "V") {
      // if it is, add V to sum
      sum = sum + NUMERAL_VALUES.V;
      continue;
    }

    // check if X
    if (numerals[i] === "X") {
      // if we are at the last index, we don't want to look ahead
      if (i === numerals.length - 1) {
        sum = sum + NUMERAL_VALUES.X;
        continue;
      }
      // check if next numeral is L or C
      if (numerals[i + 1] === "L" || numerals[i + 1] === "C") {
        // if it is, subtract X from sum
        sum = sum - NUMERAL_VALUES.X;
        continue;
      } else {
        // if its not, then add X to sum
        sum = sum + NUMERAL_VALUES.X;
        continue;
      }
    }

    //check if L
    if (numerals[i] === "L") {
      // if it is, add L to sum
      sum = sum + NUMERAL_VALUES.L;
      continue;
    }

    // check if C
    if (numerals[i] === "C") {
      // if we are at the last index, we don't want to look ahead
      if (i === numerals.length - 1) {
        sum = sum + NUMERAL_VALUES.C;
        continue;
      }
      // check if the next numeral is D or M
      if (numerals[i + 1] === "D" || numerals[i + 1] === "M") {
        // if it is, subtract C from sum
        sum = sum - NUMERAL_VALUES.C;
        continue;
      } else {
        // if its not, add C to sum
        sum = sum + NUMERAL_VALUES.C;
        continue;
      }
    }

    // check if D
    if (numerals[i] === "D") {
      // if it is, add D to sum
      sum = sum + NUMERAL_VALUES.D;
      continue;
    }

    // check if M
    if (numerals[i] === "M") {
      // if it is, add M to sum
      sum = sum + NUMERAL_VALUES.M;
    }
  }

  return sum;
}

console.log(romanToInt(testCase3));

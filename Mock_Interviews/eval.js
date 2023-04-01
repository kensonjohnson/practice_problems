// given a string with only digits and signs
// return value of string
const sample = "3+9*2*4+3";
const sample2 = "9";
const sample3 = "92+3";
const sample4 = "92*2+3";
const sample5 = "2*0*0*5*0*9";
const sample6 = "2+0+0+5+0+9";

function evalNumberString(numString) {
  let total = 0; //  78
  let multipliedNumber = 1; // "3"
  let currentNumberString = ""; // "3"
  // iterate over string
  for (const element of numString) {
    // if digit append to currentNumberString
    if (Number.isInteger(parseInt(element))) {
      currentNumberString += element;
      continue;
    }
    // otherwise
    // finish evaluating multiplied number
    multipliedNumber *= parseInt(currentNumberString);
    currentNumberString = "";

    // if addition,
    if (element === "+") {
      // add multipliedNumber to total
      total += multipliedNumber;
      // reset multipliedNumber
      multipliedNumber = 1;
    }
    // if multipication, it's possible that the next operator is also multiply,
    // so we keep tracking the current multipliedNumber
  }

  // do one final eval and add to total
  multipliedNumber *= parseInt(currentNumberString);

  return total + multipliedNumber;
}

console.log(evalNumberString(sample));
console.log(evalNumberString(sample2));
console.log(evalNumberString(sample3));
console.log(evalNumberString(sample4));
console.log(evalNumberString(sample5));
console.log(evalNumberString(sample6));

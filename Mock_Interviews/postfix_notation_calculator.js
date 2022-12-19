const sampleOperand = "1 3 4 * + 2 -";
const sampleOperand2 = "3 2 1 + + 2 /";
const sampleOperand3 = "2 +";
const sampleOperand4 = "2 2";

// function that takes in a string, returns number
function postfixCalculator(string) {
  const operands = string.split(" ");
  let stack = [];

  for (let i = 0; i < operands.length; i++) {
    if (
      operands[i] === "*" ||
      operands[i] === "/" ||
      operands[i] === "+" ||
      operands[i] === "-"
    ) {
      if (stack.length < 2) {
        return "This is a malformed expression"; //simulates error
      }
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      if (operands[i] === "*") {
        stack.push(firstOperand * secondOperand);
      }
      if (operands[i] === "/") {
        stack.push(firstOperand / secondOperand);
      }
      if (operands[i] === "+") {
        stack.push(firstOperand + secondOperand);
      }
      if (operands[i] === "-") {
        stack.push(firstOperand - secondOperand);
      }
    } else {
      stack.push(parseInt(operands[i]));
    }
  }

  if (stack.length > 1) {
    return "This is a malformed expression";
  }
  return stack[0];
}

console.log(postfixCalculator(sampleOperand));
console.log(postfixCalculator(sampleOperand2));
console.log(postfixCalculator(sampleOperand3));
console.log(postfixCalculator(sampleOperand4));

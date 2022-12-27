// This is a classic 60 minute interview question.

// Given a string of different bracket types (parentheses, square brackets, and
// curly braces), write a function that returns whether or not the string is
// balanced.

// The string is balanced if each opening bracket is followed by a corresponding
// close bracket, and all brackets between those open and close brackets are also
// balanced.

// Examples of balanced strings

const test1 = `{[()]}`;
const test2 = `{}[]()`;
const test3 = `[(){()}]`;
const test4 = `((())`;
// Examples of unbalanced strings

const test5 = `{[(])}`; // Has a `]` before the `(` was closed with a `)`
const test6 = `{}][()`; // Has a `]` without a preceding `[`
const test7 = `[(){()}`; // Missing a closing `]`
const test8 = `}()`;

// Example function calls

// - `checkBrackets("{[()]}") → True`
// - `checkBrackets("{}][()") → False`

function brackets(string) {
  let stack = [];
  // iterate over string array
  for (let i = 0; i < string.length; i++) {
    // console.log(stack);
    // if any open bracket
    // store on the stack
    if (
      string.charAt(i) === "{" ||
      string.charAt(i) === "[" ||
      string.charAt(i) === "("
    ) {
      stack.push(string.charAt(i));
    } else {
      let bracket = stack.pop();
      if (bracket == null) {
        return false;
      }
      // if we find a close bracket, check that it matches the top of the stack
      if (!isClosingBracket(string.charAt(i), bracket)) {
        // if not, return false
        return false;
      }
    }
  }

  // if we make it trough the loop and stack empty return true
  // else return false
  if (stack.length === 0) {
    return true;
  }
  return false;
}

const CLOSING_BRACKETS = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function isClosingBracket(possibleClose, lastOpen) {
  const expectedClosing = CLOSING_BRACKETS[lastOpen];
  return expectedClosing === possibleClose;
}

console.log(brackets(test1));
console.log(brackets(test2));
console.log(brackets(test3));
console.log(brackets(test4));
console.log(brackets(test5));
console.log(brackets(test6));
console.log(brackets(test7));
console.log(brackets(test8));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
const s1 = "()";
// Output: true

// Example 2:
const s2 = "()[]{}";
// Output: true

// Example 3:
const s3 = "(]";
// Output: false

const s4 = "([{}])";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // create stack to keep open brackets
  const stack = [];
  // look at each bracket to find open or close
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    const openBracket = stack.pop();
    if (char === ")") {
      if (openBracket !== "(") {
        return false;
      }
    }
    if (char === "]") {
      if (openBracket !== "[") {
        return false;
      }
    }
    if (char === "}") {
      if (openBracket !== "{") {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

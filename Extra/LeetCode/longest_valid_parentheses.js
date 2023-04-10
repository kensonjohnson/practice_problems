// Given a string containing just the characters '(' and ')', return the
// length of the longest valid (well-formed) parentheses substring.

// Example 1:
const s1 = "(()";
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
const s2 = ")()())";
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
const s3 = "";
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (string) {
  // Store our answer
  let longestFound = 0;
  // We will treat an array like it'string a stack
  const stack = [];
  stack.push(-1); // We can't use 0

  // Iterate over string
  // Strings have an iterator, so we use that
  for (const charIndex in string) {
    // If the character at the current index is "(", add it to the stack
    if (string[charIndex] === "(") {
      stack.push(charIndex);
    } else {
      // otherwise, remove one from the stack
      stack.pop();

      // if our stack still has anything in it, compare size of current valid
      // string to the longest previously recorded
      if (stack.length > 0) {
        longestFound = Math.max(
          longestFound,
          charIndex - stack[stack.length - 1]
        );
      } else {
        // otherwise, push this as the start of a new subString
        stack.push(charIndex);
      }
    }
  }
  return longestFound;
};

console.log(longestValidParentheses(s1));
console.log(longestValidParentheses(s2));
console.log(longestValidParentheses(s3));

// Given two strings s and t, return true if they are equal when
// both are typed into empty text editors. '#' means a backspace
// character.

// Note that after backspacing an empty text, the text will
// continue empty.

// Example 1:
const s1 = "ab#c",
  t1 = "ad#c";
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
const s2 = "ab##",
  t2 = "c#d#";
// Output: true
// Explanation: Both s and t become "".

// Example 3:
const s3 = "a#c",
  t3 = "b";
// Output: false
// Explanation: s becomes "c" while t becomes "b".

var backspaceCompare = function (s, t) {
  // run the evaluation of each string and compare outputs
  return evaluateEdits(s) === evaluateEdits(t);
};

function evaluateEdits(string) {
  // create array to store the new chars
  const stringArray = [];

  // iterate over string
  for (const char of string) {
    // if #
    if (char === "#") {
      // pop from array
      stringArray.pop();
    } else {
      // otherwise, push char to array
      stringArray.push(char);
    }
  }

  // returns a string
  return stringArray.join("");
}

console.log(backspaceCompare(s1, t1));
console.log(backspaceCompare(s2, t2));
console.log(backspaceCompare(s3, t3));

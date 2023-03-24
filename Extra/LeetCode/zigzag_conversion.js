// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
// rows like this: (you may want to display this pattern in a fixed font for better
// legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number
// of rows:

// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let currentRow = 0;
  // store a bool of it increasing or decreasing row
  let goingDown = false;
  if (numRows == 1) {
    return s;
  }

  let rows = new Array(numRows).fill("");

  // iterate until string is exhausted
  for (const letter of s) {
    rows[currentRow] += letter;
    if (currentRow === numRows - 1 || currentRow === 0) {
      goingDown = !goingDown;
    }
    // on each, append letter to "row" in array
    if (goingDown) {
      currentRow++;
    } else {
      currentRow--;
    }
  }

  return rows.join("");
};

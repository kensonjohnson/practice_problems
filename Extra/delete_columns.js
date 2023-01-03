// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid.
// For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the
// above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are
// sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

// Example 1:
const strs = ["cbassssss", "dafssssss", "ghissssss"];
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1
// column.

// Example 2:
const strs2 = ["a", "b"];
// Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.

// Example 3:
const strs3 = ["zyx", "wvu", "tsr"];
// Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.

// function that returns a number
function minDeletionSize(strs) {
  const width = strs[0].length;
  let columns = [];
  // iterate over string
  for (let i = 0; i < width; i++) {
    columns[i] = "";
    // create new string from each letter in that column
    strs.forEach((string) => {
      columns[i] += string.charAt(i);
    });
  }
  let count = 0;
  columns.forEach((string) => {
    let prevCharCode = 0;
    for (let i = 0; i < string.length; i++) {
      const currentCharCode = string.charCodeAt(i);
      if (currentCharCode < prevCharCode) {
        count++;
        break;
      }
      prevCharCode = currentCharCode;
    }
  });
  return count;
}

// iterate over new strings
// for each one that is not alphabetical
// increment count

// return count

console.log(minDeletionSize(strs));
console.log(minDeletionSize(strs2));
console.log(minDeletionSize(strs3));

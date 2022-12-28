// Part I an example 60 minute interview question. It’s easy to get tripped up on
// the math — be systematic in your debugging and power through it! Part II is a
// bonus exercise.

// Part I

// (If you’ve heard of a rot13 letter substitution cipher, this question is a
// generalization of that cipher)

// Write a function `rot` that:

// - takes as arguments: an input string and an amount by which to shift the letters
// in the string
// - returns: the input string, shifted by the shift amount

// The function should preserve case — it should be able to handle both upper and
// lowercase letters — and it should not alter punctuation. The function should
// support negative numbers. The function should support large shift numbers.

// Sample inputs and outputs:

// rot("HELLO", 1) -> "IFMMP" # shift right by 1
// rot("HELLO", 2) -> "JGNNQ" # shift right by 2
// rot("HELLO", -1) -> "GDKKN" # shift left by 1
// rot("HELLO", 27) -> "IFMMP" # shift right by 27, wrapping back to the beginning
// rot("Hello, Rick", 1) -> "Ifmmp, Sjdl" # Preserve case and punctuation
// rot(rot("Hello, Rick", 1), -1) -> "Hello, Rick"

// Writing this function will require familiarity with converting between character
// and ordinals. For example, Python has the `ord` and `chr` functions, and
// JavaScript has the `charCodeAt` and `fromCharCode` String methods.

// You may also find reviewing modular arithmetic (using `%`) to be helpful.

// console.log("A".charCodeAt(0));
// console.log(String.fromCharCode(66));

// function takes in string and offset
function rot(string, offset) {
  let newString = "";
  offset = offset % 26;

  // iterate over the string
  for (let i = 0; i < string.length; i++) {
    // on each char, convert to charcode, add the offset, convert back to char
    // concat that new char onto new string
    let char = string.charAt(i);
    let charCode = char.charCodeAt(0);
    if (charCode > 64 && charCode < 91) {
      charCode = charCode + offset;
      if (charCode < 65) {
        charCode = charCode + 26;
      }
      if (charCode > 90) {
        charCode = charCode - 26;
      }
      let newChar = String.fromCharCode(charCode);
      newString = newString.concat(newChar);
      continue;
    }

    if (charCode > 96 && charCode < 123) {
      charCode = charCode + offset;
      if (charCode < 97) {
        charCode = charCode + 26;
      }
      if (charCode > 122) {
        charCode = charCode - 26;
      }
      let newChar = String.fromCharCode(charCode);
      newString = newString.concat(newChar);
      continue;
    }
    newString = newString.concat(string.charAt(i));
  }
  return newString;
}

// return the new string
let mixedUp = rot("ZzAa, Kenson", -53);
console.log(mixedUp);
console.log(rot(mixedUp, 1));

//

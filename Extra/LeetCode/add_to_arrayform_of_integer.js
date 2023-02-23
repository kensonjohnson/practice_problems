/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // convert int to array
  const converted = intToArray(k);
  // sum both args
  // declare the lengths of both arrays
  let numPointer = num.length;
  let convertedPointer = converted.length;
  let carryOne = false;
  // while loop as long as both are > 0
  while (numPointer > 0 && convertedPointer > 0) {
    // sum numbers and if carryover mark carryOne
    let sum = num[numPointer - 1] + converted[convertedPointer - 1];
    if (carryOne) {
      sum += 1;
    }
    if (sum > 9) {
      carryOne = true;
      sum = sum % 10;
    } else {
      carryOne = false;
    }
    num[numPointer - 1] = sum;
    // decrement each pointer
    numPointer--;
    convertedPointer--;
    // if either are zero, handle a carryOne
    if (numPointer <= 0) {
      if (convertedPointer <= 0 && carryOne) {
        num.unshift(1);
        break;
      }
      // handle carryover
      while (convertedPointer > 0) {
        let sum = converted[convertedPointer - 1];
        if (carryOne) {
          sum++;
        }
        if (sum > 9) {
          carryOne = true;
          sum = sum % 10;
        } else {
          carryOne = false;
        }
        num.unshift(sum);
        convertedPointer--;
        if (convertedPointer === 0 && carryOne) {
          num.unshift(1);
          carryOne = false;
          break;
        }
      }
    }

    if (convertedPointer <= 0 && carryOne) {
      // handle carryover
      while (carryOne) {
        if (numPointer <= 0) {
          num.unshift(1);
          break;
        }
        let sum = num[numPointer - 1] + 1;
        if (sum > 9) {
          sum = sum % 10;
        } else {
          carryOne = false;
        }
        num[numPointer - 1] = sum;
        numPointer--;
      }
    }
  }

  // return array-form
  return num;
};

// function to convert integer into array-form
function intToArray(number) {
  const arrayForm = [];
  while (number > 0) {
    const remainder = number % 10;
    arrayForm.unshift(remainder);
    number = Math.floor(number / 10);
  }
  return arrayForm;
}

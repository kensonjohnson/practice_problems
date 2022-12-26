// You are given an integer array nums. You are initially positioned at the array's
// first index, and each element in the array represents your maximum jump length at
// that position.

// Return true if you can reach the last index, or false otherwise.

const test1 = [2, 3, 1, 1, 4]; // expect true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

const test2 = [3, 2, 1, 0, 4]; // expect false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump
// length is 0, which makes it impossible to reach the last index.

const test3 = [0]; // expect true

const test4 = [2, 0]; // expect true

const test5 = [
  8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4,
  8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2,
  0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9,
  9, 3, 5, 0, 7, 5,
];

function canJump(numberArray) {
  if (numberArray.length === 1 && numberArray[0] === 0) {
    return true;
  }
  if (!numberArray.includes(0)) {
    return true;
  }

  // create an array to track where we have jumped from
  let beenHere = Array(numberArray.length).fill(false);
  // iterate over numbers array
  for (let i = 0; i < numberArray.length; i++) {
    // create a queue. We need to know the current index and what index we land on after the jump
    let stack = [];
    if (numberArray[i] > 0) {
      const jumpIndex = numberArray[i] + i;
      for (let j = i; j <= jumpIndex; j++) {
        stack.push(j);
      }
    } else {
      break;
    }
    if (beenHere[i]) {
      continue;
    }
    beenHere[i] = true;
    while (stack.length > 0) {
      // grab from the stack
      let currentPoint = stack.pop();
      // if we are higher than the length of the array, we made it
      if (currentPoint && currentPoint >= numberArray.length - 1) {
        return true;
      }
      // if we land on a zero or we have been here before, continue
      if (!currentPoint || beenHere[currentPoint] || currentPoint === 0) {
        continue;
      }
      beenHere[currentPoint] = true;
      // if the spot that we jump to is greater than zero, create a new jump point from there.
      if (numberArray[currentPoint] > 0) {
        const jumpIndex = numberArray[currentPoint] + currentPoint;
        for (let j = currentPoint; j <= jumpIndex; j++) {
          stack.push(j);
        }
      }
    }
  }

  return false;
}

function canJump2(numberArray) {
  var jumpsLeft = numberArray[0];
  for (var i = 1; i < numberArray.length; ++i) {
    // we make our jump
    jumpsLeft--;

    // if we are negative, we are further than allowed jumps
    if (jumpsLeft < 0) {
      return false;
    }

    // if we can jump further with the value at the current spot, grab that value
    if (numberArray[i] > jumpsLeft) {
      jumpsLeft = numberArray[i];
    }
  }

  return true;
}

console.time("First");
console.log(canJump(test1));
console.log(canJump(test2));
console.log(canJump(test3));
console.log(canJump(test4));
console.log(canJump(test5));
console.timeEnd("First");
console.time("Second");
console.log(canJump2(test1));
console.log(canJump2(test2));
console.log(canJump2(test3));
console.log(canJump2(test4));
console.log(canJump2(test5));
console.timeEnd("Second");

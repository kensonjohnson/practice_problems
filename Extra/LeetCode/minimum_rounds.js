// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task.
// In each round, you can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete
// all the tasks.

// Example 1:
const tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
// Output: 4
// Explanation: To complete all the tasks, a possible plan is:
// - In the first round, you complete 3 tasks of difficulty level 2.
// - In the second round, you complete 2 tasks of difficulty level 3.
// - In the third round, you complete 3 tasks of difficulty level 4.
// - In the fourth round, you complete 2 tasks of difficulty level 4.
// It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

// Example 2:
const tasks2 = [2, 3, 3];
// Output: -1
// Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete
// either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the
// answer is -1.

const tasks3 = [
  2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5,
];

// function takes in array of integers, return an integer
function minimumRounds(tasks) {
  // map values of array, with unique number as key, and appearance as values
  const totalTasks = new Map();
  tasks.forEach((task) => {
    if (totalTasks.has(task)) {
      let currentTotal = totalTasks.get(task);
      totalTasks.set(task, currentTotal + 1);
    } else {
      totalTasks.set(task, 1);
    }
  });

  let numberOfSteps = 0;
  let possible = true;
  // if % 2 = 0 or % 3 = 2 then return true, check on each number
  totalTasks.forEach((amount) => {
    if (!possible) {
      return;
    }
    if (amount >= 3 && amount % 3 === 0) {
      numberOfSteps += amount / 3;
      return;
    }
    if (amount === 4) {
      numberOfSteps += 2;
      return;
    }
    if (amount >= 3 && amount % 3 !== 0) {
      let startingAmount = amount;
      let count = 0;
      let divisible = false;
      while (startingAmount >= 3) {
        if (startingAmount % 3 === 0) {
          divisible = true;
          break;
        }
        startingAmount -= 2;
        count++;
      }
      if (divisible) {
        numberOfSteps += count;
        numberOfSteps += startingAmount / 3;
        return;
      } else {
        possible = false;
        return;
      }
    }
    if (amount >= 2 && amount % 2 === 0) {
      numberOfSteps += amount / 2;
      return;
    }

    possible = false;
  });

  if (possible) {
    return numberOfSteps;
  } else {
    return -1;
  }
}

// if all numbers pass, return

console.log(minimumRounds(tasks));
console.log(minimumRounds(tasks2));
console.log(minimumRounds(tasks3));

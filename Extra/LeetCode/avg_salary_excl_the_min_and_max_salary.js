// You are given an array of unique integers salary where salary[i] is the salary of
// the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

// Example 1:
const salary1 = [2000, 3000, 1000, 4000];
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Example 2:
const salary2 = [1000, 2000, 3000];
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  // sort in asending
  salary.sort((a, b) => {
    return a - b;
  });

  // remove first and last

  salary.pop();
  salary.shift();

  // average remaining elements
  const total = salary.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return total / salary.length;
};

// console.log(average(salary1));
// console.log(average(salary2));

/**
 * @param {number[]} salary
 * @return {number}
 */
var average2 = function (salary) {
  // store lowest and highest found
  let lowestSalary = salary[0];
  let highestSalary = salary[0];
  // store total
  let total = 0;
  // iterate over salary
  for (const amount of salary) {
    // if lower than lowest found
    if (amount < lowestSalary) {
      // add current lowest to total, and replace with new lowest
      lowestSalary = amount;
    }

    // if higher than highest found
    if (amount > highestSalary) {
      // add current highest to total, and replace with new highest
      highestSalary = amount;
    }

    total += amount;
  }
  return (total - lowestSalary - highestSalary) / (salary.length - 2);
};

console.log(average2(salary1));
console.log(average2(salary2));

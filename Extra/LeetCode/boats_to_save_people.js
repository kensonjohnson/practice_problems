const people1 = [1, 2],
  limit1 = 3;
const people2 = [3, 2, 2, 1, 1, 1, 1, 1, 1],
  limit2 = 5;
const people3 = [3, 5, 3, 4],
  limit3 = 5;

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let numberOfBoats = 0;
  let length = people.length;
  let index = 0;

  // Sort the people array in desc order
  people.sort((a, b) => {
    return b - a;
  });
  while (index < length) {
    if (people[i] + people[n - 1] <= limit) {
      length--;
    }
    // Load the heaviest person on a boat
    index++;
    numberOfBoats++;
  }

  return numberOfBoats;
};

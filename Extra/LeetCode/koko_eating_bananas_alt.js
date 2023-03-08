// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i]
// bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses
// some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas,
// she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the
// guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
const piles1 = [3, 6, 7, 11],
  h1 = 8;
// Output: 4

// Example 2:
const piles2 = [30, 11, 23, 4, 20],
  h2 = 5;
// Output: 30

// Example 3:
const piles3 = [30, 11, 23, 4, 20],
  h3 = 6;
// Output: 23

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let min = 1; // minimum 1 banana should be eaten per hour, otherwise no progress
  let max = Math.max(...piles); // the fastest we can ever go is the highest value of a pile
  let k = Infinity;

  // Binary Search
  while (min <= max) {
    const speed = Math.floor((min + max) / 2); // our midpoint is our current bananas per hour
    let totalHours = 0; // totalHours is the total time required to eat all bananas at current speed

    // Sum how long to eat all bananas at current speed
    for (let i = 0; i < piles.length; i++) {
      totalHours = totalHours + Math.ceil(piles[i] / speed);
    }

    // check if our current estimate is over the limit
    if (totalHours <= h) {
      // if within time limit, we can look for a slower speed
      k = Math.min(k, speed);
      max = speed - 1;
    } else {
      // if it took to long, we look for a faster speed
      min = speed + 1;
    }
  }

  // k finally equals the most optimal speed
  return k;
};

console.log(minEatingSpeed(piles1, h1));
console.log(minEatingSpeed(piles2, h2));
console.log(minEatingSpeed(piles3, h3));

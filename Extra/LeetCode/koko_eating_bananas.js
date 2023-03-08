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
  // sort piles desc
  piles.sort((a, b) => {
    return b - a;
  });
  if (piles.length === h) {
    return piles[0];
  }

  if (piles.length === 1) {
    return Math.ceil(piles[0] / h);
  }
  // do greedy algo, starting with largest value
  let pileNumber = 0;
  let perHour = piles[0];
  while (true) {
    let moves = h;
    piles.forEach((pile) => {
      moves = moves - Math.ceil(pile / piles[pileNumber]);
    });
    if (moves < 0) {
      perHour = piles[pileNumber - 1];
      break;
    }
    pileNumber++;
  }

  while (true) {
    let moves = h;
    piles.forEach((pile) => {
      moves = moves - Math.ceil(pile / perHour);
    });
    if (moves < 0) {
      // return last result if unseccessful
      return perHour + 1;
    }
    // record result if successful
    perHour--;
  }
};

console.log(minEatingSpeed(piles1, h1));
console.log(minEatingSpeed(piles2, h2));
console.log(minEatingSpeed(piles3, h3));

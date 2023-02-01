const coins = [1, 2, 5],
  amount = 11;

const coins2 = [2],
  amount2 = 3;

const coins3 = [1],
  amount3 = 0;

const coins4 = [186, 419, 83, 408];
const amount4 = 6249;

const coins5 = [1, 3, 4];
const amount5 = 25;

const coins6 = [1, 2, 5, 10];
const amount6 = 18;

const coins7 = [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422];
const amount7 = 9864;

const coins8 = [2, 4, 6];
const amount8 = 9999;

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount % 2 !== 0) {
    let allEven = true;
    coins.forEach((coin) => {
      if (coin % 2 !== 0) {
        allEven = false;
      }
    });
    if (allEven) {
      return -1;
    }
  }
  // We have to store the lowest found for each amount
  const preCalculated = new Map();
  let stats = { count: 0 }; // Not needed, just counts steps
  // loop from 0 to amount
  // dfs on each amount
  preCalculated.set(0, 0);
  for (let i = 1; i <= amount; i++) {
    preCalculated.set(i, dfs(0, coins, i, stats, preCalculated));
  }
  console.log("Number of recursive actions: ", stats.count); // Not needed
  return preCalculated.get(amount);
};

function dfs(index, coins, amount, stats, preCalculated) {
  // Base Cases:
  // Amount below 0
  if (amount < 0) {
    return -1;
  }
  // Amount equals 0
  if (amount === 0) {
    return 0;
  }

  if (preCalculated.has(amount)) {
    return preCalculated.get(amount);
  }

  // if index is within range, we try every possible combination of coins
  if (index < coins.length && amount > 0) {
    stats.count++;
    // This is the maximum number of loops below
    let maxValue = Math.floor(amount / coins[index]) + 1;
    // This is set to an arbitrary high number
    let minCost = Number.MAX_SAFE_INTEGER;
    // Loop through all possible coin combinations
    for (let i = 0; i < maxValue; i++) {
      // This is how much to remove from the amount each round
      const currentAmount = i * coins[index];
      if (amount >= currentAmount) {
        // Recurse
        const result = dfs(
          index + 1,
          coins,
          amount - currentAmount,
          stats,
          preCalculated
        );
        // After recursing
        if (result !== -1) {
          // This is how we find the lowest number of coins
          minCost = Math.min(minCost, result + i);
        }
      }
    }
    // It's possible the amount is less than currentAmount for all cases,
    // so we would never enter the if statement at the top of our loop.
    if (minCost === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    // This is our lowest number of coins possible
    // if (preCalculated.has(amount) && preCalculated.get(amount) > minCost) {
    //   preCalculated.set(amount, minCost);
    // }

    return minCost;
  }
  // This handles an index that's too high
  return -1;
}

console.log(coinChange(coins, amount));
console.log(coinChange(coins2, amount2));
console.log(coinChange(coins3, amount3));
console.log(coinChange(coins4, amount4));
console.log(coinChange(coins5, amount5));
console.log(coinChange(coins6, amount6));
console.log(coinChange(coins7, amount7));
console.log(coinChange(coins8, amount8));

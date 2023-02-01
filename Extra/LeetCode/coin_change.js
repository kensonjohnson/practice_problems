// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that
// amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
const coins = [1, 2, 5],
  amount = 11;
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
const coins2 = [2],
  amount2 = 3;
// Output: -1

// Example 3:
const coins3 = [1],
  amount3 = 0;
// Output: 0

// const coins = [1, 5, 10, 25];
// const amount1 = 26;
// const amount2 = 37;

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (amount) {
//   let numberOfCoins = 0;
//   if (typeof amount !== "number") {
//     return 0;
//   }

//   let workingAmount = amount;

//   // look at if I can divide the largest number
//   if (workingAmount >= 25) {
//     // if I can, remove that number as many times as possible
//     const quarters = Math.floor(workingAmount / 25);
//     numberOfCoins += quarters;
//     workingAmount -= quarters * 25;
//   }
//   // repeat with each lower number

//   if (workingAmount >= 10) {
//     const dimes = Math.floor(workingAmount / 10);
//     numberOfCoins += dimes;
//     workingAmount -= dimes * 10;
//   }
//   if (workingAmount >= 5) {
//     const nickels = Math.floor(workingAmount / 5);
//     numberOfCoins += nickels;
//     workingAmount -= nickels * 5;
//   }
//   if (workingAmount >= 1) {
//     const pennies = Math.floor(workingAmount / 1);
//     numberOfCoins += pennies;
//   }

//   return numberOfCoins;
// };

const coins4 = [186, 419, 83, 408];
const amount4 = 6249;

const coins5 = [1, 3, 4];
const amount5 = 25;

// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function (coins, amount) {
//   // sort the coins input descending order
//   coins.sort((a, b) => {
//     return b - a;
//   });
//   // store a workingAmount
//   let workingAmount = amount;
//   // store numberOfCoins
//   let numberOfCoins = 0;
//   // loop over coins
//   coins.forEach((coin) => {
//     if (workingAmount >= coin) {
//       // take away as many coins as possible at i
//       const howMany = Math.floor(workingAmount / coin);
//       numberOfCoins += howMany;
//       workingAmount -= howMany * coin;
//     }
//   });
//   if (workingAmount === 0) {
//     return numberOfCoins;
//   }
//   // if any left over, return -1
//   return -1;
// };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => {
    return b - a;
  });
  let stats = { count: 0 };
  let result = dfs(0, coins, amount, stats);
  console.log("Number of recursive actions: ", stats.count);
  return result;
};

function dfs(index, coins, amount, stats) {
  stats.count++;
  // Base Case:
  // Amount equals 0
  if (amount === 0) {
    return 0;
  }

  // if index is within range, we try every possible combination of coins
  if (index < coins.length && amount > 0) {
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
        const result = dfs(index + 1, coins, amount - currentAmount, stats);
        // After recursing
        if (result !== -1) {
          // This is how we find the lowest number of coins
          minCost = Math.min(minCost, result + i);
        }
      }
    }
    // it's possible we don't enter the if statement above
    if (minCost === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    // This is our lowest number of coins possible
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

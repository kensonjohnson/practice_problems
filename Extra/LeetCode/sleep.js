// Given a positive integer millis, write an asyncronous function that sleeps for
// millis milliseconds. It can resolve any value.

// Example 1:
const millis1 = 100;
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:
const millis2 = 200;
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// ------------- Tests ------------- //
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t);
});

sleep(200).then(() => {
  console.log(Date.now() - t);
});

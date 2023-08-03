/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  //declare final array
  const finalArr = [];
  //copy array and sort
  const sortedArr = [...arr].sort((a, b) => {
    return a - b;
  });
  //create a variable to hold index set default to 1
  let rank = 1;
  //create a Map to store the ranks of each number
  const numberToRanks = new Map();
  //iterate over sorted array
  for (const number of sortedArr) {
    //check to see if current element exists in Map
    if (numberToRanks.has(number)) {
      //continue
      continue;
    }

    numberToRanks.set(number, rank);

    rank++;
    //if it doesn't exist in Map, add current number and its rank to the Map
    //increment the variable
  }

  //iterate over arr
  for (const number of arr) {
    //Map.get to receive rank of number
    const getRank = numberToRanks.get(number);
    //push to final array
    finalArr.push(getRank);
  }
  //return final array
  return finalArr;
};

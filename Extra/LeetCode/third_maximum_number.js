var thirdMax = function (nums) {
  let biggestNumber = -Infinity;
  let secondBiggest = -Infinity;
  let thirdBiggest = -Infinity;

  for (const number of nums) {
    if (
      number === biggestNumber ||
      number === secondBiggest ||
      number === thirdBiggest
    ) {
      continue;
    }

    if (number > biggestNumber) {
      thirdBiggest = secondBiggest;
      secondBiggest = biggestNumber;
      biggestNumber = number;
    } else if (number > secondBiggest) {
      thirdBiggest = secondBiggest;
      secondBiggest = number;
    } else if (number > thirdBiggest) {
      thirdBiggest = number;
    }
  }

  return thirdBiggest == -Infinity ? biggestNumber : thirdBiggest;
};

const sampleArray = [65, 9, 1, 87, 5, 12, 4, 3, 20];

function mergeSort(numArray) {
  //base case, we only have one element
  if (numArray.length < 2) {
    return numArray;
  }
  let midPoint = Math.floor(numArray.length / 2);

  let arr1 = numArray.slice(0, midPoint);
  let arr2 = numArray.slice(midPoint);
  let newArr = merge(mergeSort(arr1), mergeSort(arr2));
  return newArr;
}

function merge(arr1, arr2) {
  let newArr = [];
  let combinedLength = arr1.length + arr2.length;
  while (newArr.length < combinedLength) {
    if (arr1[0] === undefined && arr2[0] !== undefined) {
      newArr.push(...arr2);
      break;
    }
    if (arr2[0] === undefined && arr2[0] !== undefined) {
      newArr.push(...arr1);
      break;
    }
    if (arr1[0] && arr2[0] && arr1[0] > arr2[0]) {
      let smaller = arr2.shift();
      newArr.push(smaller);
    } else {
      let smaller = arr1.shift();
      newArr.push(smaller);
    }
  }
  return newArr;
}

console.log(mergeSort(sampleArray));

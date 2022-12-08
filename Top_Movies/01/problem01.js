import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString();
};

function csvToArray(str, delimiter = ",") {
  // get the first row as header data
  const headers = str.slice(0, str.indexOf("\n")).trim().split(delimiter);

  //put all of the remaining rows into an array
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  const arr = rows.map((row) => {
    // split values from each row into an array
    let values = row.trim().split(delimiter);
    // If it has double qoutes, then we have a problem
    if (row.includes('"')) {
      // This function handles formating the values if double quotes are present
      values = handleDoubleQuotes(row, delimiter);
    }
    // use headers.reduce to create an object
    const el = headers.reduce((object, header, index) => {
      // if there is a space between words, we need to format like a property name
      if (header.includes(" ")) {
        const seperateWords = header.split(" ");
        // this can only handle a single space, for now
        let formated = seperateWords[0].toLowerCase() + seperateWords[1];
        object[formated] = values[index];
      } else {
        // object properties derived from headers:values
        object[header.toLowerCase()] = values[index];
      }

      return object;
    }, {});
    // the object passed as an element of the array
    return el;
  });

  // return the array
  return arr;
}

function handleDoubleQuotes(string, delimiter) {
  // split the string on the quotes
  const hasDoubleQuote = string.split('"');
  // iterate over the new resulting array
  for (let i = 0; i < hasDoubleQuote.length; i++) {
    // the characters we want to replace will only be on odd numbered indexes
    if (i % 2 !== 0) {
      // replace all commas in this section of the string to tildes
      hasDoubleQuote[i] = hasDoubleQuote[i].replaceAll(",", "~");
    }
  }
  // flatten the array back down into a single string
  const commasReplaced = hasDoubleQuote.join("");
  // split the row on the commas
  let newRow = commasReplaced.split(delimiter);
  // iterate over the newRow
  for (let i = 0; i < newRow.length; i++) {
    // find any tildes and replace them will commas
    if (newRow[i].includes("~")) {
      newRow[i] = newRow[i].replaceAll("~", ",");
    }
  }
  //return out the final, formatted data
  return newRow;
}

const question = "What movies on this list were distributed by DreamWorks?";

const movies = csvToArray(fileReader("../top_movies.csv"));

let answer = [];
const subString = "DreamWorks";

// iterate over movies
movies.forEach((movie) => {
  // check if current movie is distributed by DreamWorks
  if (
    movie.distributor !== undefined &&
    movie.distributor.includes(subString)
  ) {
    // if it is, put title of movie into the answer array
    answer.push(movie.title);
  }
});

console.log(question);
console.log(answer);
console.log(answer.length);

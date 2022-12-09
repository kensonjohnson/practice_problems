import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString();
};

function csvToArray(str, delimiter = ",") {
  // get the first row as header data
  const unformattedHeaders = str
    .slice(0, str.indexOf("\n"))
    .trim()
    .split(delimiter);
  const headers = formatHeaders(unformattedHeaders);

  //put all of the remaining rows into an array
  const rows = str
    .slice(str.indexOf("\n") + 1)
    .trim()
    .split(/\r?\n/);

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
      // object properties derived from headers:values
      object[header] = values[index];

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

function formatHeaders(headersArray) {
  let formattedHeaders = [];

  headersArray.forEach((header) => {
    // check if we have a space between words in the header
    if (header.includes(" ")) {
      // split the word on the space
      const seperateWords = header.split(" ");
      // get ready to store the formatted header
      let formattedHeader = "";
      for (let i = 0; i < seperateWords.length; i++) {
        if ((i = 0)) {
          //make sure the first word is all lower case
          formattedHeader = seperateWords[0].toLowerCase();
        } else {
          // make sure that the remaining words all have the first letter capitalized
          const string1 = seperateWords[i].toLowerCase();
          formattedHeader =
            formattedHeader +
            string1.charAt(0).toUpperCase() +
            string1.slice(1);
        }
      }
      return formattedHeaders.push(formattedHeader);
    }
    if (header.includes("-")) {
      const seperateWords = header.split("-");
      let formattedHeader = "";
      seperateWords.forEach((word) => {
        if (word === seperateWords[0]) {
          //make sure the first word is all lower case
          formattedHeader = word.toLowerCase();
        } else {
          // make sure that the remaining words all have the first letter capitalized
          const string1 = word.toLowerCase();
          formattedHeader =
            formattedHeader +
            string1.charAt(0).toUpperCase() +
            string1.slice(1);
        }
      });
      return formattedHeaders.push(formattedHeader);
    }
    // if no formatting is needed, just add it to the array
    formattedHeaders.push(header.toLowerCase());
  });
  return formattedHeaders;
}

const question =
  "What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?";

const billboard100 = csvToArray(fileReader("../billboard100_2000.csv"));

// code here

// format the answer
console.log(question);

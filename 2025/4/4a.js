const fs = require("fs");

const allFileContents = fs.readFileSync("4-data.txt", "utf-8").split(/\r?\n/);
let sum = 0;

const countAdjacent = (line, position, prevLine, nextLine) => {
  let count = 0;

  // Check left
  if (position > 0 && line[position - 1] === "@") {
    count++;
  }
  // Check right
  if (position < line.length - 1 && line[position + 1] === "@") {
    count++;
  }
  // Check above
  if (prevLine && prevLine[position] === "@") {
    count++;
  }
  // Check below
  if (nextLine && nextLine[position] === "@") {
    count++;
  }
  // Check top-left
  if (prevLine && position > 0 && prevLine[position - 1] === "@") {
    count++;
  }
  // Check top-right
  if (
    prevLine &&
    position < line.length - 1 &&
    prevLine[position + 1] === "@"
  ) {
    count++;
  }
  // Check bottom-left
  if (nextLine && position > 0 && nextLine[position - 1] === "@") {
    count++;
  }
  // Check bottom-right
  if (
    nextLine &&
    position < line.length - 1 &&
    nextLine[position + 1] === "@"
  ) {
    count++;
  }

  return count;
};

allFileContents.forEach((line, index) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "@") {
      const count = countAdjacent(
        line,
        i,
        allFileContents[index - 1],
        allFileContents[index + 1]
      );
      if (count < 4) {
        sum++;
      }
    }
  }
});

console.log("Final Sum: " + sum);

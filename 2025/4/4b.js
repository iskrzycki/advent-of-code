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

let backupArray = structuredClone(allFileContents);

// quite dummy. Would be better to detect no changes between loops and stop then.
for (let iteration = 0; iteration < 1000; iteration++) {
  const newArray = structuredClone(backupArray);

  backupArray.forEach((line, index) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "@") {
        const count = countAdjacent(
          line,
          i,
          backupArray[index - 1],
          backupArray[index + 1]
        );
        if (count < 4) {
          newArray[index] =
            newArray[index].slice(0, i) + "." + newArray[index].slice(i + 1);
          sum++;
        }
      }
    }
  });
  backupArray = structuredClone(newArray);
}

console.log("Final Sum: " + sum);

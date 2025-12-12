const fs = require("fs");

let dialPosition = 50;
let counter = 0;

const allFileContents = fs.readFileSync("1-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  const direction = line[0];

  let rest = parseInt(line.slice(1), 10);

  if (direction === "L") {
    if (rest > 99) {
      rest = rest % 100;
    }

    dialPosition -= rest;
    if (dialPosition < 0) {
      dialPosition = 100 - dialPosition * -1;
    }
  }

  if (direction === "R") {
    dialPosition += rest;
    if (dialPosition > 99) {
      dialPosition %= 100;
    }
  }

  if (dialPosition === 0) {
    counter += 1;
  }
});

console.log("Final Dial Position: " + dialPosition);
console.log("Number of times dial hit 0: " + counter);

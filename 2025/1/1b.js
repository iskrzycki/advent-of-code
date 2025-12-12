const fs = require("fs");

let dialPosition = 50;
let counter = 0;

const moveCogRight = (position) => {
  let newPosition = position + 1;
  if (newPosition === 100) {
    newPosition = 0;
  }
  return newPosition;
};

const moveCogLeft = (position) => {
  let newPosition = position - 1;
  if (newPosition === -1) {
    newPosition = 99;
  }
  return newPosition;
};

const allFileContents = fs.readFileSync("1-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  const direction = line[0];

  let rest = parseInt(line.slice(1), 10);

  for (let i = 0; i < rest; i++) {
    dialPosition =
      direction === "L"
        ? moveCogLeft(dialPosition)
        : moveCogRight(dialPosition);
    if (dialPosition === 0) {
      counter += 1;
    }
  }
});

console.log("Final Dial Position: " + dialPosition);
console.log("Number of times dial hit 0: " + counter);

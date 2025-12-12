const fs = require("fs");

const allFileContents = fs.readFileSync("3-data.txt", "utf-8");
let sum = 0;

allFileContents.split(/\r?\n/).forEach((line) => {
  console.log(line);

  let max = 0;

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const firstChar = line[i];
      const secondChar = line[j];

      const value = parseInt(`${firstChar}${secondChar}`);

      if (value > max) {
        max = value;
      }
    }
  }
  sum += max;
});

console.log("Final Sum: " + sum);

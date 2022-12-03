const fs = require("fs");

let max = 0;
let temp = 0;

const allFileContents = fs.readFileSync("1-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length === 0) {
    if (max < temp) {
      max = temp;
    }
    temp = 0;
  } else {
    temp += parseInt(line, 10);
  }
});

console.log("MAX: " + max);

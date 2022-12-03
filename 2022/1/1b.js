const fs = require("fs");

let temp = 0;
const sums = [];

const allFileContents = fs.readFileSync("1-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  if (line.length === 0) {
    sums.push(temp)
    temp = 0;
  } else {
    temp += parseInt(line, 10);
  }
});

const sortedArr = sums.sort((a,b) => a-b);

console.log("answer ", sortedArr[sortedArr.length-1] + sortedArr[sortedArr.length-2] + sortedArr[sortedArr.length-3])
const fs = require("fs");

const allFileContents = fs.readFileSync("3-data.txt", "utf-8");
let sum = 0;
const joltageLen = 12;

const getMax = (line) => {
  let index = 0;
  let max = 0;

  for (let i = 0; i < line.length; i++) {
    const currentDigit = parseInt(line[i], 10);
    if (currentDigit > max) {
      max = currentDigit;
      index = i;
    }
  }
  // console.log("Max Digit: " + max + " at Index: " + index);
  return { max, index };
};

allFileContents.split(/\r?\n/).forEach((line) => {
  let currentIndex = 0;
  let currentJoltage = "";

  for (let i = 0; i < joltageLen; i++) {
    console.log(
      "slice from " + currentIndex + " to " + (line.length - joltageLen + i + 1)
    );
    const splittedLine = line.slice(currentIndex, line.length - joltageLen + i + 1);
    console.log("Splitted Line: " + splittedLine);
    const { max, index } = getMax(splittedLine);
    currentJoltage += max.toString();
    currentIndex += index + 1;
  }
  // console.log("Current Joltage: " + currentJoltage);
  sum += parseInt(currentJoltage, 10);
});

console.log("Final Sum: " + sum);

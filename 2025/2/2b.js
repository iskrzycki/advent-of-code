const fs = require("fs");

const allFileContents = fs.readFileSync("2-data.txt", "utf-8");

const instructions = allFileContents.split(",");

const checkId = (id) => {
  const IdLength = id.toString().length;
  let divisors = [];

  for (let i = 2; i <= IdLength; i++) {
    if (IdLength % i === 0) {
      divisors.push(i);
    }
  }

  for (let z = 0; z < divisors.length; z++) {
    const divisor = divisors[z];
    const segmentLength = IdLength / divisor;
    const segments = [];

    for (let i = 0; i < divisor; i++) {
      segments.push(
        id.toString().slice(i * segmentLength, (i + 1) * segmentLength)
      );
    }
    if (isArrayEqual(segments)) {
      return true;
    }
  }
  return false;
};

const isArrayEqual = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
  }
  return true;
};

let sum = 0;

instructions.forEach((instruction) => {
  const [start, end] = instruction.trim().split("-");

  for (let i = parseInt(start, 10); i <= parseInt(end, 10); i++) {
    const isValid = checkId(i);

    if (isValid) {
      sum += i;
    }
  }
});

console.log("Sum of all valid IDs: " + sum);

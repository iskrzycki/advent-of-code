const fs = require("fs");

const fullyContains = (a1, a2) => a1.some((v) => a2.includes(v));

const createArray = (line) => {
  const splitted = line.split("-");
  const firstElem = parseInt(splitted[0], 10);
  const secondElem = parseInt(splitted[1], 10);

  const array = [];

  for (let i = firstElem; i <= secondElem; i++) {
    array.push(i);
  }
  return array;
};

const calculatePoints = (arr) => {
  const a1 = createArray(arr[0]);
  const a2 = createArray(arr[1]);

  if (fullyContains(a1, a2)) return 1;
  if (fullyContains(a2, a1)) return 1;
  return 0;
};

let pts = 0;

const allFileContents = fs.readFileSync("4-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  pts += calculatePoints(line.split(","));
});

console.log(pts);

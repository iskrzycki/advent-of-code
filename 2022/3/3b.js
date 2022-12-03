const fs = require("fs");

const calculateCommon = (char) =>
  char.charCodeAt(0) >= 97 ? char.charCodeAt(0) - 96 : char.charCodeAt(0) - 38;

const findCommonElem = (str1, str2, str3) => {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      for (let k = 0; k < str3.length; k++) {
        if (str1[i] === str2[j] && str1[i] === str3[k]) return str1[i];
      }
    }
  }
};

const calculatePoints = (array) => {
  const common = findCommonElem(array[0], array[1], array[2]);
  return calculateCommon(common);
};

let pts = 0;
let array = [];

const allFileContents = fs.readFileSync("3-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  array.push(line);

  if (array.length === 3) {
    console.log(JSON.stringify(array));
    pts += calculatePoints(array);
    array.length = 0;
  }
});

console.log(pts);

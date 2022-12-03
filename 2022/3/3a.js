const fs = require("fs");

const calculateCommon = (char) =>
  char.charCodeAt(0) >= 97 ? char.charCodeAt(0) - 96 : char.charCodeAt(0) - 38;

const findCommonElem = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) return str1[i];
    }
  }
};

const half = (item) => {
  let half = Math.floor(item.length / 2);

  return [item.slice(0, half), item.slice(half, item.length)];
};

const calculatePoints = (item) => {
  const parts = half(item);

  const common = findCommonElem(parts[0], parts[1]);

  return calculateCommon(common);
};

let pts = 0;

const allFileContents = fs.readFileSync("3-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  pts += calculatePoints(line);
});

console.log(pts);

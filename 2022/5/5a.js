const fs = require("fs");

const containers = [
  "BQC".split(""),
  "RQWZ".split(""),
  "BMRLV".split(""),
  "CZHVTW".split(""),
  "DZHBNVG".split(""),
  "HNPCJFVQ".split(""),
  "DGTRWZS".split(""),
  "CGMNBWZP".split(""),
  "NJBMWQFP".split(""),
];

const allFileContents = fs.readFileSync("5-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  const what = parseInt(line.split(" ")[1], 10); // how many
  const from = parseInt(line.split(" ")[3], 10); // source
  const to = parseInt(line.split(" ")[5], 10); // dest

  for (let i = 0; i < what; i++) {
    const removed = containers[from - 1].pop();
    containers[to - 1].push(removed);
  }
});

let result = "";
for (let i = 0; i < containers.length; i++) {
  result += containers[i].pop();
}
console.log(result);

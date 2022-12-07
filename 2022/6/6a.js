const fs = require("fs");

const allFileContents = fs.readFileSync("6-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  for (let i = 3; i < line.length; i++) {
    if (
      line[i] !== line[i - 1] &&
      line[i] !== line[i - 2] &&
      line[i] !== line[i - 3] &&
      line[i - 1] !== line[i - 3] &&
      line[i - 1] !== line[i - 2] &&
      line[i - 2] !== line[i - 3] &&
      line[i - 2] !== line[i - 1] &&
      line[i - 3] !== line[i - 2] &&
      line[i - 3] !== line[i - 1]
    ) {
      console.log("result", i + 1);
      return;
    }
  }
});

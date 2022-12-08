const fs = require("fs");

const allFileContents = fs.readFileSync("6-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  for (let i = 13; i < line.length; i++) {
    const currentArray = line.slice(i-13,i+1);
    const unique = new Set(currentArray);

    if (unique.size === currentArray.length) {
      console.log("result", i + 1);
      return;
    }
  }
});

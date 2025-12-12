const fs = require("fs");

const allFileContents = fs.readFileSync("5-data.txt", "utf-8").split(/\r?\n/);

const freshDatabase = [];
const products = [];
const freshProducts = new Set();

allFileContents.forEach((line) => {
  if (line.indexOf("-") > 0) {
    const [start, end] = line.split("-");
    freshDatabase.push({ start: parseInt(start, 10), end: parseInt(end, 10) });
  }

  if (line.length > 0 && line.indexOf("-") === -1) {
    const productId = parseInt(line, 10);
    products.push(productId);
  }
});

products.forEach((element) => {
  freshDatabase.forEach((range) => {
    if (element >= range.start && element <= range.end) {
      freshProducts.add(element);
    }
  });
});

console.log("Final Sum: " + freshProducts.size);

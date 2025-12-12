const fs = require("fs");

const allFileContents = fs.readFileSync("2-data.txt", "utf-8");

const instructions = allFileContents.split(",");

let sum = 0;

const checkId = (id) => {
  const firstHalf = id.toString().slice(0, id.toString().length / 2);
  const secondHalf = id
    .toString()
    .slice(id.toString().length / 2, id.toString().length);

  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf[i] !== secondHalf[i]) {
      return false;
    }

    return true;
  }
};

instructions.forEach((instruction) => {
  const [start, end] = instruction.trim().split("-");

  for (let i = parseInt(start, 10); i <= parseInt(end, 10); i++) {
    if (i.toString().length % 2 === 0) {
      if (checkId(i)) {
        sum += i;
      }
    }
  }
});
console.log("Current Sum: " + sum);

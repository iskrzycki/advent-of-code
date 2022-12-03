const fs = require("fs");

const detect = (val) =>
  ["A", "X"].includes(val) ? "R" : ["B", "Y"].includes(val) ? "P" : "S";

const extraPoints = (a) => (a === "R" ? 1 : a === "P" ? 2 : 3);

const calculatePoints = (a, b) => {
  const player1 = detect(a);
  const player2 = detect(b);
  let pts = 0;

  if (player1 === "R") {
    if (player2 === "P") {
      pts = 6;
    }
  } else if (player1 === "P") {
    if (player2 === "S") {
      pts = 6;
    }
  } else if (player1 === "S") {
    if (player2 === "R") {
      pts = 6;
    }
  }

  if (player1 === player2) {
    pts = 3;
  }

  return pts + extraPoints(player2);
};

let pts = 0;

const allFileContents = fs.readFileSync("2-data.txt", "utf-8");
allFileContents.split(/\r?\n/).forEach((line) => {
  const values = line.split(" ");
  pts += calculatePoints(values[0], values[1]);
});

console.log(pts);

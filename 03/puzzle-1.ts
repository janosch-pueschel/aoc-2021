const text = await Bun.file("./input.txt").text();
const reports = text.split("\n").map((item) => item.split(""));

let gammaRate = "";
let epsilonRate = "";

for (let i = 0; i < reports[0].length; i++) {
  let countZero = 0;
  let countOne = 0;

  for (let report of reports) {
    if (Number(report[i]) === 0) {
      countZero++;
    } else {
      countOne++;
    }
  }

  if (countZero < countOne) {
    gammaRate += "1";
    epsilonRate += "0";
  } else {
    gammaRate += "0";
    epsilonRate += "1";
  }
}

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));

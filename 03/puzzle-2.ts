const text = await Bun.file("./input.txt").text();
const reports = text.split("\n").map((item) => item.split(""));

// Get Oxygen-Rate

let oxygenRate = reports;

for (let i = 0; i < reports[0].length; i++) {
  let countZero = [];
  let countOne = [];
  if (oxygenRate.length === 1) {
    break;
  } else {
    for (let x = 0; x < oxygenRate.length; x++) {
      if (Number(oxygenRate[x][i]) === 0) {
        countZero.push(oxygenRate[x]);
      } else {
        countOne.push(oxygenRate[x]);
      }
    }

    if (countZero.length > countOne.length) {
      oxygenRate = countZero;
    } else if (
      countZero.length < countOne.length ||
      countZero.length === countOne.length
    ) {
      oxygenRate = countOne;
    }
  }
}

// Get Carbondioxide-Rate

let carbondioxideRate = reports;

for (let i = 0; i < reports[0].length; i++) {
  let countZero = [];
  let countOne = [];
  if (carbondioxideRate.length === 1) {
    break;
  } else {
    for (let x = 0; x < carbondioxideRate.length; x++) {
      if (Number(carbondioxideRate[x][i]) === 0) {
        countZero.push(carbondioxideRate[x]);
      } else {
        countOne.push(carbondioxideRate[x]);
      }
    }

    if (countZero.length > countOne.length) {
      carbondioxideRate = countOne;
    } else if (
      countZero.length < countOne.length ||
      countZero.length === countOne.length
    ) {
      carbondioxideRate = countZero;
    }
  }
}

// Get Life Support Rating

console.log(
  parseInt(oxygenRate[0].join(""), 2) *
    parseInt(carbondioxideRate[0].join(""), 2)
);

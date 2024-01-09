const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();
const depthMeasurements = await text.split("\n");

let increases = 0;

depthMeasurements.forEach((item, index) => {
  const firstMeasurement =
    Number(item) +
    Number(depthMeasurements[index + 1]) +
    Number(depthMeasurements[index + 2]);
  const secondMeasurement =
    Number(depthMeasurements[index + 1]) +
    Number(depthMeasurements[index + 2]) +
    Number(depthMeasurements[index + 3]);

  if (firstMeasurement < secondMeasurement) {
    increases++;
  }
});

console.log(increases);

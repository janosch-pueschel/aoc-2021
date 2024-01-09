const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();
const depthMeasurements = await text.split("\n");

let increases = 0;

depthMeasurements.forEach((item, index) => {
  if (index === 0 || Number(item) <= Number(depthMeasurements[index - 1])) {
    return;
  } else {
    increases++;
  }
});

console.log(increases);

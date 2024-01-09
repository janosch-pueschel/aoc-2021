const text = await Bun.file("./input.txt").text();
const commands = text.split("\n");

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

commands.forEach((item) => {
  const command = item.split(" ");
  const commandValue = Number(command[1]);

  switch (command[0]) {
    case "forward":
      horizontalPosition += commandValue;
      depth += aim * commandValue;
      break;
    case "up":
      aim -= commandValue;
      break;
    case "down":
      aim += commandValue;
      break;
  }
});

console.log(horizontalPosition * depth);

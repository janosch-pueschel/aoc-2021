const text = await Bun.file("./input.txt").text();
const commands = text.split("\n");

let horizontalPosition = 0;
let depth = 0;

commands.forEach((item) => {
  const command = item.split(" ");
  const commandValue = Number(command[1]);

  switch (command[0]) {
    case "forward":
      horizontalPosition += commandValue;
      break;
    case "up":
      depth -= commandValue;
      break;
    case "down":
      depth += commandValue;
      break;
  }
});

console.log(horizontalPosition * depth);

let connection;

const setupInput = function (conn)  {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;

};

const handleUserInput = function (key) {
  console.log(key)
  if (key === '\u0003') {
    process.exit();
  }
const commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  k: "Say: hello",
}
const command = commands[key]
console.log(command)
if (command) connection.write(command);


};
module.exports = {
  setupInput,
  }


const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
   console.log(data)
  });
  conn.on("connect", () => {
  console.log("successfully connected to game server")
  conn.write("Name: J Z");
  //setTimeout(() => {
    //conn.write("Move: up")
//}, 3000) // <=
  })

    return conn;
  };

module.exports = {
connect,
}
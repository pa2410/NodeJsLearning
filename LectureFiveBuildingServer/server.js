// console.log("server");

import http from "http";

const server = http.createServer((req, res) => {
  res.end("yor requested for something");
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server Listing", PORT);
});

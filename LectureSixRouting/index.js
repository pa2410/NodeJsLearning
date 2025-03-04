import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.end("<h1>Your request has been accepted</h1>");
  if (req.url === "/wdm") {
    res.end("<h1>Welcome to wdm url</h1>");
  } else if (req.url === "/srk") {
    res.end("<h1>We are not able to show anything about srk</h1>");
  } else {
    res.end("<h1>Invalid</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server listing", PORT);
});

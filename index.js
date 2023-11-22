const http = require("http");
const fs = require('fs')
const home  = fs.readFileSync("./index.html")
const PORT = 82;
const hostName = "localhost";
const server = http.createServer((req, res) => {
  if (req.url === "/") {
   return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About<h1>");
  } 
  else {
    return res.end("<h1>404 Page not found</h1>");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server is working on http://${hostName}:${PORT}`);
});

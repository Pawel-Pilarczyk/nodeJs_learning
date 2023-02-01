const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<h1>Hello page 1</h1>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/message" && req.method === "POST") {
    fs.writeFileSync("message.txt", "My Message");
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>Your Message</title></head>");
  // res.write("<body><h1>Hello page 2</h1></body>");
  // res.write("</html>");
  // res.end();
});

server.listen(3000);

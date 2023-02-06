function requestHandler(req, res) {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter userName</title></head>");
    res.write("<h1>Hello</h1>");
    res.write(
      "<body><form action='/user' method='POST'><input type='text' name='userName'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      res.write("<html>");
      res.write(`<head><title>User ${message}</title></head>`);
      res.write(`<h1>User ${message}</h1>`);
      res.write(`<p>Name - Adam</p>`);
      res.write(`<p>LastName - Sandler <p>`);
      res.write("</html>");
      res.end();
    });
  }
}

module.exports = requestHandler;

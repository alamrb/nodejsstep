const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page update");
  }
  if (req.url === "/about") {
    res.end("About us page update");
  }

  res.end(`
        <h1>Opps!</h1>
        <p>The page you are looking for is not found.</p>   
        <a href="/">Go back to home page</a>
        `);

  //   console.log(req);

  //   res.write("Welcome to our home page");
  //   res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

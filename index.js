const http = require("http");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8080;

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);

  console.log("pong!");

  res.end(
    JSON.stringify({
      message: "pong",
    })
  );
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}`);
});

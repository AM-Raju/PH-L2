const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

// Creating a server using raw node.js
const server = http.createServer();

// Listener
server.on("request", (req, res) => {
  //   console.log(req);
  console.log(req.url === "/read-file" && req.method === "GET");

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() + "/text/read.txt");

  // Streaming buffer listener
  readableStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  // Streaming end listener
  readableStream.on("end", () => {
    res.statusCode = 200;
    res.end("Streaming is over.");
  });

  // Streaming error listener
  readableStream.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("Something went wrong");
  });
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});

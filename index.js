const http = require("http");

const PORT = 5173;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end(
    'Hello world'
  );
});

server.listen(PORT);
console.log('server started at port: %d', PORT);
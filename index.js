const http = require("http");
const fs = require('fs');

const PORT = 5173;

const server = http.createServer((req, res) => {
  let filename;
  switch (req.url) {
    case '/':
    case '':
      filename = 'index.html';
      break;
    case '/about':
      filename = 'about.html';
      break;
    case '/contact-me':
      filename = 'contact-me.html';
      break;
    default:
      filename = '404.html';
  }

  fs.readFile(filename, 'utf8', (err, fileContent) => {
    if (err) {
      console.log(err.message);
      res.end('Internal server error');
      return;
    }

    res.end(fileContent);
  })
  // // read file

  // res.end();
});

server.listen(PORT);
console.log('server started at port: %d', PORT);
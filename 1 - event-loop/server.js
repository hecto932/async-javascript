const http = require('http');
const fs = require('fs');

const server = http.createServer(function handler(req, res) {

  fs.readFile(__filename, 'utf-8', function onReadFile(err, file) {
    if (err) {
      res.statusCode = 500;
      return res.end(err.message);
    }

    res.end(file);
  });

});

server.listen(9999);
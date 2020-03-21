var http = require('http');

// create a simple server object
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Opswork'); // response to client
  res.end(); // end the reponse
}).listen(80);

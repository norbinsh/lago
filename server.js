const http = require('http');
const url = require('url');
const isSubS = require('./src/utils/isSubSequence');
// create a simple server object
http.createServer(function(req, res) {
  const queryObject = url.parse(req.url,true).query;
  const subSorNot = isSubS.isSubsequence(queryObject.str1, queryObject.str2).toString();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`is ${queryObject.str1} subsequence of ${queryObject.str2}? ${subSorNot.toUpperCase()}`); // response to client
  res.end(); // end the reponse
}).listen(80);

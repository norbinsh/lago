const express = require('express');
const app = express();
const url = require('url');
const isSubS = require('./src/utils/isSubSequence');
const port = 80


app.get('/', function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  const subSorNot = isSubS.isSubsequence(queryObject.str1, queryObject.str2).toString();
  res.send(`is ${queryObject.str1} subsequence of ${queryObject.str2}? ${subSorNot.toUpperCase()}`);
} )

app.listen(port, () => console.log(`Lago app listening on port ${port}, running using OpsWorks!`))

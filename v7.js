var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express();
app.use(bodyParser());
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};
  http.createServer(app).listen(80);
  https.createServer(options, app).listen(443);
  app.use('/', express.static('./html', {maxAge: 60*60*1000}));
  app.get('/getcity', function (req, res) {
    console.log("In getcity route");
    res.json([{city:"Price"},{city:"Provo"}]);
  });
  app.get('/comment', function (req, res) {
    resarray = [ { Name: 'Mickey', Comment: 'Hello', 
        _id: '54f53d5ebf89e6100c2180da' },
      { Name: 'Mark', Comment: 'This is a comment',
        _id: '54f53e21801a52330c04be8a' }
      ]
    console.log(resarray);
    console.log(resarray[0]);
    console.log("In GET comment route");
    res.json(resarray);
//    res.writeHead(200);
//    res.end(JSON.stringify(itemArr));
  });
  app.post('/comment', function (req, res) {
    console.log("In POST comment route");
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Comment);
    res.status(200);
    res.end();
  });

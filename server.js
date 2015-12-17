"use strict";

var express = require('express');
var app = express();
var account = require('./routers/account');
var server;

function start() {
  
  app.use('/account', account);
  
  var port = 3000;
  server = app.listen(port);
  console.log("Listening on port %d", port);
}

function stop() {
  server.close();
  console.log("Shut down");
}

module.exports.start = start;
module.exports.stop = stop;
module.exports.app = app;
 
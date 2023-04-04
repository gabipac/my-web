const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const server = express();
const dotenv = require("dotenv");

dotenv.config({
  path: path.join(__dirname, ".env.production")
});

//here we are configuring dist to serve app files
server.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
server.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

server.listen(process.env.VUE_APP_PORT, process.env.VUE_APP_HOST, function() {
  console.log(`app is listening on: ${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`);
});
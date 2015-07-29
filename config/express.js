/*jslint node: true */
'use strict';

var config = require('./config');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  app.set('view engine', 'html');
  app.enable('view cache');
  app.engine('html', require('hogan-express'));

  app.set('views', './app/views');
  // app.set('view engine', 'ejs');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  require('../app/routes/index.server.routes.js')(app);

  return app;

};

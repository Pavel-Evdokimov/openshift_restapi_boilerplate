/*jslint node: true */
'use strict';

var config = require('./config');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');


module.exports = function() {
  var app = express();
  app.engine('html', require('hogan-express'));
  app.enable('view cache');
  app.set('views', './app/views');
  app.set('view engine', 'html');
  app.set('layout', './app/views/layouts/layout');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static('./public'));
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/api.server.routes.js')(app);
  return app;
};

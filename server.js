/*jslint node: true */
'use strict';

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  process.env.NODE_ENV = "openshift";
} else {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}

// Check Enviroment
console.log('Enviroment is: ' + process.env.NODE_ENV);

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var config = require('./config/config');

var db = mongoose();
var app = express();
app.listen(config.port, config.ipaddress, function() {
  console.log('%s: Node server started on %s:%d ...',
    Date(Date.now()), config.ipaddress, config.port);
});

module.exports = app;

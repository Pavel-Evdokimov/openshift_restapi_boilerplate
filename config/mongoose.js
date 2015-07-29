/*jslint node: true */
'use strict';

var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  // TODO: put here models through require statements

  return db;
};

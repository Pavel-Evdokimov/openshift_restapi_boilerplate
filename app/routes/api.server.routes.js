/*jslint node: true*/
'use strict';

var restful = require('node-restful');
var mongoose = require('mongoose');

module.exports = function(app) {
  var api = require('../controllers/api.server.controller.js');

  var Resource = app.resource = restful.model('resource', mongoose.Schema({
      title: String,
      year: Number,
    }))
    .methods(['get', 'post', 'put', 'delete']);

  Resource.register(app, '/api');
};

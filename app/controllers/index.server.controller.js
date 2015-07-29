/*jslint node: true*/
'use strict';

exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello there'
  });
};

/*jslint node: true*/
'use strict';

exports.render = function(req, res) {
  res.locals = {
    title: "new title2"
  };
  res.render('index', {
    partials: {
      part: "partials/part"
    }
  });
};
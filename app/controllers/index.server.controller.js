/*jslint node: true*/
'use strict';

exports.render = function(req, res) {
  res.locals = {
    message: "This is message from index.server.controller.js",
    title: "This is title"
  };
  res.render('index', {
    partials: {
      part: "partials/part"
    },
    layout: "layouts/layout"
  });
};

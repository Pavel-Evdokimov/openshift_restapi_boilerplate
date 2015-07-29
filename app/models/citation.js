/*jslint node: true */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define new 'Citatoin Schema'

var CitationSchema = new Schema({
  userName: String,
  bookName: String,
  bookAuthor: String,
  bookGanre: String,
  bookCitation: String
});

CitationSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

mongoose.model('Citation', CitationSchema);

module.exports = CitationSchema;

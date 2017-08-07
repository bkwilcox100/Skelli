#!/usr/bin/env node

const fs = require('fs');
const _ = require('underscore');
const path = require('path');
const createTempMap = require('../functions/createTemplateMap.js').create;

// Get Command Line Arguments
var argv = require('minimist')(process.argv.slice(2));

// Test Arguments
//console.log(argv);

var templates = createTempMap();

if (_.contains(argv['_'], 'help')) {
  fs.readFile(path.join(__dirname, '../docs/helpme.txt'), 'utf8', function(err, data) {
    if (err) {
      throw (err);
    }
    console.log(data);
  });
} else if (templates.has(argv['_'][0]) && argv['_'][1] && !(argv['m'])) {
  // Get file name of requested template
  var value = templates.get(argv['_'][0]);

  // Get location of template file
  var fileName = path.join(__dirname, '..', 'templates', value);

  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) {
      throw (err);
    }
    // Slice extension from template
    var extension = value.slice(value.indexOf('.'), value.length);

    fs.writeFile(path.join(process.cwd(), argv['_'][1] + extension), data, function(err) {
      if (err) {
        throw (err);
      }
    });
  });
} else if (argv['m']){
  var multiple = Number(argv['m']);
  if (multiple <= 100){
    for (i = 0; i < multiple; i++){
      // Get file name of requested template
      var value = templates.get(argv['_'][0]);

      // Get location of template file
      var fileName = path.join(__dirname, '..', 'templates', value);

      var template = fs.readFileSync(fileName, 'utf8');

      // Slice extension from template
      var extension = value.slice(value.indexOf('.'), value.length);

      fs.writeFile(path.join(process.cwd(), argv['_'][1] + i + extension), template, function(err) {
        if (err) {
          throw (err);
        }
      });
    }
  } else {
    console.log("Too many files. Only 100 or less at a time");
  }
} else {
  console.log("Unknown Command. run 'skelli help' for help");
}

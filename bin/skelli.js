#!/usr/bin/env node

const fs = require('fs');
const _ = require('underscore');
const path = require('path');
const createTempMap = require('../Functions/createTemplateMap.js').create;

// Get Command Line Arguments
var argv = require('minimist')(process.argv.slice(2));

// Test Arguments
//console.log(argv);

var templates = createTempMap();

if (_.contains(argv['_'], 'help')) {
  fs.readFile(path.join(__dirname, '../Docs/helpme.txt'), 'utf8', function(err, data) {
    if (err) {
      throw (err);
    }
    console.log(data);
  });
} else if (templates.has(argv['_'][0]) && argv['_'][1]) {
  // Get file name of requested template
  var value = templates.get(argv['_'][0]);

  // Get location of template file
  var fileName = path.join(__dirname, '..', 'Templates', value);

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
} else {
  console.log("Unknown Command. run 'skelli help' for help");
}

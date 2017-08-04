#!/usr/bin/env node

const fs = require('fs');
const _ = require('underscore');
const path = require('path');
const createTempMap = require('./Functions/createTemplateMap.js').create;

// Get Command Line Arguments
var argv = require('minimist')(process.argv.slice(2));

console.log(argv);

var templates = createTempMap();

if (_.contains(argv['_'], 'help')) {
  fs.readFile('./Docs/helpme.txt', 'utf8', function(err, data) {
    if (err) {
      throw (err);
    }
    console.log(data);
  });
} else if (templates.has(argv['_'][0]) && argv['_'][1]) {
  var value = templates.get(argv['_'][0]);
  var fileName = path.join('.', 'Templates', templates.get(argv['_'][0]));
  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) {
      throw (err);
    }

    var extension = value.slice(value.indexOf('.'), value.length);

    fs.writeFile(path.join(__dirname, argv['_'][1] + extension), data, function(err) {
      if (err) {
        throw (err);
      }
      console.log("Success");
    });
  });
} else {
  console.log("Unknown Command. run 'skelly help' for help");
}

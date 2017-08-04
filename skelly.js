#!/usr/bin/env node

const fs = require('fs');
const _ = require('underscore');
const createTempMap = require('./Functions/createTemplateMap.js').create;

// Get Command Line Arguments
var argv = require('minimist')(process.argv.slice(2));

console.log(argv);

var templates = createTempMap();

if (_.contains(argv['_'], 'help')){
  fs.readFile('./Docs/helpme.txt', 'utf8', function(err, data){
    if (err){
      throw (err);
    }
    console.log(data);
  });
} else if (templates.has(argv['_'][0])){
  console.log(templates.get(argv['_'][0]));
} else {
  console.log("Unknown Command. run 'skelly help' for help");
}

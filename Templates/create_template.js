// Include in every create function
const fs = require('fs');
const mustache = require('mustache');

fs.readFile(source_path, 'utf8', function(err, data){
  if (err){
    throw (err);
  }
  console.log("Success");
});

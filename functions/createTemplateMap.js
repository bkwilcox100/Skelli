const fs = require('fs');
const path = require('path');

exports.create = function() {
  var data = fs.readFileSync(path.join(__dirname, '../docs/template_codes.txt'), 'utf8');
  var templates = new Map();
  var parsedData = data.split('\n');

  for (pair in parsedData) {
    parsedData[pair] = parsedData[pair].replace(/ /g, '');
    var item = parsedData[pair].split(':');
    if (item[0] && item[1]) {
      templates.set(item[0], item[1]);
    }
  }

  return templates;
}

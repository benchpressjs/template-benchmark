var fs = require('fs');
var templatesjs = require('templates.js');
var tplData;
var tplString;

module.exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.tpl', 'utf8');
  tplData = data;
  tplString = str;
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.tpl', 'utf8');
  tplData = data;
  tplString = str;
  done();
};

module.exports.step = function (done) {
  var html = templatesjs.parse(tplString, tplData);
  done(undefined, html);
};

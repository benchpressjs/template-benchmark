var fs = require('fs');
var Twig = require('twig');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.twig', 'utf8');
  tplData = data;

  compiled = Twig.twig({
    id: 'tpl_escaped',
    data: str,
    allowInlineIncludes: false,
    rethrow: false,
    autoescape: false,
  });
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.twig', 'utf8');
  tplData = data;

  compiled = Twig.twig({
    id: 'tpl_unescaped',
    data: str,
    allowInlineIncludes: false,
    rethrow: false,
    autoescape: false,
  });
  done();
};

module.exports.step = function (done) {
  done(undefined, compiled.render(tplData));
};

'use strict';

var fs = require('fs');
var path = require('path');

var data = require('./data');
var count = 100000;

var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var templatesjs = require('./tjs/t.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var gaikan = require('./gaikan/gaikan.js');
var benchpress = require('./benchpress/benchpress.js');

function noop() {}

function test(name, sample, cb) {
  var callback = cb;
  var i = 0;
  var start;

  function done(error /* , html */) {
    if (error) {
      callback(error);
      callback = noop;
      return;
    }
    i += 1;
    if (i === count) {
      var diff = process.hrtime(start);
      callback(null, name, diff);
    }
  }

  sample.prepare(data, function () {
    start = process.hrtime();
    for (var j = 0; j < count; j += 1) {
      sample.step(done);
    }
  });
}

function testUnescaped(name, sample, cb) {
  var callback = cb;
  var i = 0;
  var start;

  function done(error /* , html */) {
    if (error) {
      callback(error);
      callback = noop;
      return;
    }
    i += 1;
    if (i === count) {
      var diff = process.hrtime(start);
      callback(null, name, diff);
    }
  }

  sample.prepareUnescaped(data, function () {
    start = process.hrtime();
    for (var j = 0; j < count; j += 1) {
      sample.step(done);
    }
  });
}

var samples = [

  { name: 'Jade', sample: jade },
  { name: 'CoffeeKup', sample: coffeekup },
  { name: 'Jade without `with`', sample: jadeWithoutWith },
  { name: 'Handlebars.js', sample: handlebars },
  { name: 'EJS', sample: ejs },
  { name: 'Eco', sample: eco },
  { name: 'Underscore', sample: underscore },
  { name: 'Swig', sample: swig },
  { name: 'doT', sample: dot },
  { name: 'EJS without `with`', sample: ejsWithoutWith },
  { name: 'Fest', sample: fest },
  { name: 'Hogan.js', sample: hogan },
  { name: 'Dust', sample: dust },
  { name: 'Gaikan', sample: gaikan },
  { name: 'ECT', sample: ect },
  { name: 'templates.js', sample: templatesjs },
  { name: 'Benchpress.js', sample: benchpress },
];

function pad(val, num, pre) {
  var value = typeof val === 'string' ? val : '' + val;
  while (value.length < num) {
    value = (pre ? ' ' : '') + value + (pre ? '' : ' ');
  }
  return value;
}

function parseTime(hrtime) {
  return (hrtime[0] * 1000) + (hrtime[1] / 1e6);
}

var reportOutput = '';
var detailedOutput = '';

function report(str) {
  reportOutput += '\n' + str;
  console.log(str);
}
function detail(str) {
  detailedOutput += '\n' + str;
  console.log(str);
}

function writeReport() {
  report('\n\n### [See stats by engine](detail.' + process.platform + '.txt)');

  fs.writeFileSync(path.join(__dirname, 'reports', 'report.' + process.platform + '.md'), reportOutput);
  fs.writeFileSync(path.join(__dirname, 'reports', 'detail.' + process.platform + '.txt'), detailedOutput);
}

var results = [];
function runTests() {
  if (samples.length) {
    var sample = samples.pop();

    test(sample.name, sample.sample, function (err, name, result) {
      if (err) {
        throw err;
      }

      testUnescaped(sample.name, sample.sample, function (errUn, nameUn, resultUn) {
        if (err) {
          throw err;
        }

        var escaped = parseTime(result);
        var unescaped = parseTime(resultUn);

        detail(sample.name);
        detail('  Escaped   : ' + escaped.toFixed() + 'ms');
        detail('  Unescaped : ' + unescaped.toFixed() + 'ms');
        detail('  Total     : ' + (escaped + unescaped).toFixed() + 'ms');
        detail('');

        results.push({
          name: sample.name,
          escaped: escaped,
          unescaped: unescaped,
          total: escaped + unescaped,
        });

        runTests();
      });
    });
  } else {
    report('Performance report for ' + count + ' templates (' + process.platform + ')');
    report('===========================');
    ['total', 'escaped', 'unescaped'].forEach(function (prop) {
      results.sort(function (a, b) {
        var x = a[prop];
        var y = b[prop];
        return x - y;
      });

      report('\n' + prop + ' duration\n--------------');
      report('|                      |         |           |');
      report('|----------------------|---------|-----------|');

      var fastest = results[0][prop];
      results.forEach(function (result, i) {
        var percentage = Math.round((100 / fastest * result[prop]) - 100);
        report(
          '| ' + pad(result.name, 20) +
          ' | ' + pad(result[prop].toFixed(), 5, true) + 'ms' +
          ' | ' + (i === 0 ? 'fastest' : percentage + '% slower') + ' |'
        );
      });
    });

    writeReport();
  }
}

detail('Rendering ' + count + ' templates:\n');
runTests();

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

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var diff = process.hrtime(start);
			cb(null, name, diff);
		}
	}
	sample.prepare(data, function() {
		start = process.hrtime();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var diff = process.hrtime(start);
			cb(null, name, diff);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = process.hrtime();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [

	{ name : 'Jade', sample : jade },
	{ name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Jade without `with`', sample : jadeWithoutWith },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'EJS', sample : ejs },
	{ name : 'Eco', sample : eco },
	{ name : 'Underscore', sample : underscore },
	{ name : 'Swig', sample : swig },
	{ name : 'doT', sample : dot },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'Gaikan', sample: gaikan },
	{ name : 'ECT', sample : ect },
	{ name : 'templates.js', sample : templatesjs },
	{ name : 'Benchpress.js', sample : benchpress },
];

var results = [];
var pad = function (val, num, pre) {
	val = typeof val === 'string' ? val : '' + val;
	while (val.length < num) val = (pre ? ' ' : '') + val + (pre ? '' : ' ');
	return val;
};

function parseTime(hrtime) {
	return hrtime[0] * 1000 + hrtime[1] / 1e6;
}

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				var escaped = parseTime(result);
				var unescaped = parseTime(resultUnescaped);

				console.log(name);
				console.log('  Escaped   : ' + escaped.toFixed() + 'ms');
				console.log('  Unescaped : ' + unescaped.toFixed() + 'ms');
				console.log('  Total     : ' + (escaped + unescaped).toFixed() + 'ms');
				console.log('');
				results.push({
					name: name,
					escaped: escaped,
					unescaped: unescaped,
					total: escaped + unescaped
				});
				runTests();
			});
		});
	} else {
		console.log('Performance report for ' + count + ' templates (' + process.platform + '):');
		var props = ['total', 'escaped', 'unescaped'];
		props.forEach(function (prop) {
			results.sort(function (a, b) {
				var x = a[prop];
				var y = b[prop];
				return x < y ? -1 : (x > y ? 1 : 0);
			});
			console.log('\n' + prop + '\n--------------');
			var fastest = results[0][prop];
			for (var i = 0; i < results.length; i += 1) {
				var result = results[i];
				var percentage = Math.round((100 / fastest * result[prop]) - 100);
				console.log(pad(result.name, 20) +
					' (' + pad(result[prop].toFixed(), 5, true) + 'ms)' +
					(i == 0 ? ' - fastest' : ' - ' + percentage + '% slower'));
			}
		});
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();

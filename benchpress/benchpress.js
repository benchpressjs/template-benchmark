var fs = require('fs');
var Benchpress = require('benchpressjs');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.tpl', 'utf8');
	tplData = data;

	// Benchpress.registerHelper('escape', function (str) { return str; });

	Benchpress.precompile({ source: str }, function (err, code) {
		if (err) {
			done(err);
			return;
		}

		compiled = Benchpress.evaluate(code);
		done();
	});
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.tpl', 'utf8');
	tplData = data;

	Benchpress.precompile({ source: str }, function (err, code) {
		if (err) {
			done(err);
			return;
		}

		compiled = Benchpress.evaluate(code);
		done();
	});
};

module.exports.step = function (done) {
	done(undefined, Benchpress.runtime(Benchpress.helpers, tplData, compiled));
};
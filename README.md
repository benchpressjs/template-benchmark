# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.7 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.0
- [templates.js](https://github.com/benchpressjs/benchpressjs/tree/templates.js-legacy)
- [Benchpress](https://github.com/benchpressjs/benchpressjs)

## Latest Results

### Windows 10 x64, NodeJS 8.0.0 (100 000x)

|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   840ms | fastest |
| Fest                 |   986ms | 17% slower |
| doT                  |  1199ms | 43% slower |
| Benchpress.js        |  1239ms | 48% slower |
| Handlebars.js        |  1486ms | 77% slower |
| Underscore           |  1974ms | 135% slower |
| ECT                  |  2096ms | 150% slower |
| Hogan.js             |  2725ms | 224% slower |
| Dust                 |  2803ms | 234% slower |
| EJS without `with`   |  3483ms | 315% slower |
| Swig                 |  3963ms | 372% slower |
| Eco                  |  4445ms | 429% slower |
| Jade without `with`  |  4873ms | 480% slower |
| CoffeeKup            |  5654ms | 573% slower |
| EJS                  |  5711ms | 580% slower |
| Jade                 | 10122ms | 1105% slower |
| templates.js         | 45268ms | 5291% slower |

[Full report](reports/report.win32.md)

## Usage

  git clone git://github.com/benchpressjs/template-benchmark.git
  cd template-benchmark
  npm install
  npm start

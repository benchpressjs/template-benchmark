# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup)
- [doT](https://github.com/olado/doT)
- [Dust](https://github.com/linkedin/dustjs)
- [Eco](https://github.com/sstephenson/eco)
- [ECT](https://github.com/baryshev/ect)
- [EJS](https://github.com/mde/ejs)
- [Fest](https://github.com/mailru/fest)
- [Handlebars.js](https://github.com/wycats/handlebars.js/)
- [Hogan.js](https://github.com/twitter/hogan.js)
- [Pug](https://github.com/pugjs/pug)
- [Underscore](https://github.com/documentcloud/underscore)
- [Gaikan](https://github.com/Deathspike/gaikan)
- [templates.js](https://github.com/benchpressjs/benchpressjs/tree/templates.js-legacy)
- [Benchpress](https://github.com/benchpressjs/benchpressjs)

## Latest Results

### Windows 10 x64, NodeJS 8.0.0 (100 000x)

|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   858ms | fastest |
| Fest                 |   999ms | 16% slower |
| doT                  |  1218ms | 42% slower |
| EJS without `with`   |  1312ms | 53% slower |
| Benchpress.js        |  1325ms | 54% slower |
| Handlebars.js        |  1728ms | 101% slower |
| ECT                  |  2147ms | 150% slower |
| Pug without `with`   |  2171ms | 153% slower |
| Pug                  |  2218ms | 159% slower |
| Underscore           |  2284ms | 166% slower |
| Hogan.js             |  2764ms | 222% slower |
| Dust                 |  3397ms | 296% slower |
| EJS                  |  4192ms | 389% slower |
| Eco                  |  4448ms | 419% slower |
| CoffeeKup            |  5606ms | 554% slower |
| templates.js         | 44532ms | 5091% slower |

[Full report](reports/report.win32.md)

## Usage

  git clone git://github.com/benchpressjs/template-benchmark.git
  cd template-benchmark
  npm install
  npm start

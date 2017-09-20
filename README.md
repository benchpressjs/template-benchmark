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
- [Twig.js](https://github.com/twigjs/twig.js)

## Latest Results

### Windows 10 x64, NodeJS 8.0.0 (100 000x)

|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   847ms | fastest |
| Fest                 |  1004ms | 19% slower |
| Benchpress.js        |  1169ms | 38% slower |
| doT                  |  1241ms | 47% slower |
| EJS without `with`   |  1339ms | 58% slower |
| Handlebars.js        |  1718ms | 103% slower |
| ECT                  |  2096ms | 148% slower |
| Pug without `with`   |  2141ms | 153% slower |
| Pug                  |  2183ms | 158% slower |
| Underscore           |  2243ms | 165% slower |
| Hogan.js             |  2771ms | 227% slower |
| Dust                 |  3432ms | 305% slower |
| EJS                  |  4191ms | 395% slower |
| Eco                  |  4395ms | 419% slower |
| CoffeeKup            |  5469ms | 546% slower |
| templates.js         | 43503ms | 5038% slower |
| Twig.js              | 78224ms | 9139% slower |

[Full report](reports/report.win32.md)

## Usage

```
git clone git://github.com/benchpressjs/template-benchmark.git
cd template-benchmark
npm install
npm start
```

Performance report for 100000 templates (win32)
===========================

total duration
--------------
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

escaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   804ms | fastest |
| Fest                 |   886ms | 10% slower |
| Benchpress.js        |  1027ms | 28% slower |
| EJS without `with`   |  1102ms | 37% slower |
| CoffeeKup            |  1188ms | 48% slower |
| doT                  |  1207ms | 50% slower |
| Handlebars.js        |  1274ms | 58% slower |
| Underscore           |  1307ms | 62% slower |
| ECT                  |  2056ms | 156% slower |
| Pug without `with`   |  2109ms | 162% slower |
| Pug                  |  2136ms | 166% slower |
| Hogan.js             |  2572ms | 220% slower |
| EJS                  |  2666ms | 231% slower |
| Dust                 |  2968ms | 269% slower |
| Eco                  |  4088ms | 408% slower |
| templates.js         | 21429ms | 2564% slower |
| Twig.js              | 44425ms | 5423% slower |

unescaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Pug without `with`   |    32ms | fastest |
| doT                  |    34ms | 6% slower |
| ECT                  |    40ms | 25% slower |
| Gaikan               |    42ms | 30% slower |
| Pug                  |    47ms | 46% slower |
| Fest                 |   118ms | 263% slower |
| Benchpress.js        |   141ms | 336% slower |
| Hogan.js             |   198ms | 512% slower |
| EJS without `with`   |   237ms | 630% slower |
| Eco                  |   307ms | 846% slower |
| Handlebars.js        |   444ms | 1269% slower |
| Dust                 |   464ms | 1332% slower |
| Underscore           |   937ms | 2789% slower |
| EJS                  |  1526ms | 4606% slower |
| CoffeeKup            |  4281ms | 13104% slower |
| templates.js         | 22074ms | 67979% slower |
| Twig.js              | 33799ms | 104142% slower |


### [See stats by engine](detail.win32.txt)
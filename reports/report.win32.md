
Performance report for 100000 templates (win32)
===========================

total duration
--------------
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

escaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   825ms | fastest |
| Fest                 |   877ms | 6% slower |
| EJS without `with`   |  1083ms | 31% slower |
| Benchpress.js        |  1167ms | 41% slower |
| doT                  |  1187ms | 44% slower |
| CoffeeKup            |  1230ms | 49% slower |
| Handlebars.js        |  1285ms | 56% slower |
| Underscore           |  1335ms | 62% slower |
| ECT                  |  2100ms | 155% slower |
| Pug without `with`   |  2138ms | 159% slower |
| Pug                  |  2171ms | 163% slower |
| Hogan.js             |  2555ms | 210% slower |
| EJS                  |  2628ms | 219% slower |
| Dust                 |  2933ms | 256% slower |
| Eco                  |  4127ms | 400% slower |
| templates.js         | 21440ms | 2500% slower |

unescaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| doT                  |    31ms | fastest |
| Pug without `with`   |    33ms | 5% slower |
| Gaikan               |    33ms | 7% slower |
| Pug                  |    47ms | 50% slower |
| ECT                  |    47ms | 52% slower |
| Fest                 |   122ms | 290% slower |
| Benchpress.js        |   159ms | 409% slower |
| Hogan.js             |   209ms | 571% slower |
| EJS without `with`   |   229ms | 636% slower |
| Eco                  |   321ms | 930% slower |
| Handlebars.js        |   443ms | 1322% slower |
| Dust                 |   465ms | 1391% slower |
| Underscore           |   949ms | 2946% slower |
| EJS                  |  1564ms | 4918% slower |
| CoffeeKup            |  4376ms | 13941% slower |
| templates.js         | 23092ms | 73995% slower |


### [See stats by engine](detail.win32.txt)
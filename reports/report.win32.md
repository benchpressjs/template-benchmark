
Performance report for 100000 templates (win32)
===========================

total duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   861ms | fastest |
| Fest                 |  1000ms | 16% slower |
| doT                  |  1189ms | 38% slower |
| Benchpress.js        |  1242ms | 44% slower |
| Handlebars.js        |  1476ms | 71% slower |
| Underscore           |  1977ms | 130% slower |
| ECT                  |  2092ms | 143% slower |
| Hogan.js             |  2725ms | 216% slower |
| Dust                 |  2764ms | 221% slower |
| EJS without `with`   |  3463ms | 302% slower |
| Swig                 |  3917ms | 355% slower |
| Eco                  |  4430ms | 414% slower |
| Jade without `with`  |  4857ms | 464% slower |
| CoffeeKup            |  5543ms | 544% slower |
| EJS                  |  5636ms | 554% slower |
| Jade                 | 10045ms | 1067% slower |
| templates.js         | 44205ms | 5034% slower |

escaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |   832ms | fastest |
| Fest                 |   885ms | 6% slower |
| Benchpress.js        |  1057ms | 27% slower |
| doT                  |  1157ms | 39% slower |
| Handlebars.js        |  1164ms | 40% slower |
| Underscore           |  1211ms | 46% slower |
| CoffeeKup            |  1237ms | 49% slower |
| ECT                  |  2045ms | 146% slower |
| Hogan.js             |  2538ms | 205% slower |
| Dust                 |  2562ms | 208% slower |
| EJS without `with`   |  3286ms | 295% slower |
| Swig                 |  3839ms | 361% slower |
| Jade without `with`  |  4042ms | 386% slower |
| Eco                  |  4102ms | 393% slower |
| EJS                  |  4435ms | 433% slower |
| Jade                 |  6733ms | 709% slower |
| templates.js         | 21985ms | 2542% slower |

unescaped duration
--------------
|                      |         |           |
|----------------------|---------|-----------|
| Gaikan               |    29ms | fastest |
| doT                  |    32ms | 10% slower |
| ECT                  |    47ms | 62% slower |
| Swig                 |    78ms | 168% slower |
| Fest                 |   115ms | 298% slower |
| EJS without `with`   |   177ms | 510% slower |
| Benchpress.js        |   184ms | 536% slower |
| Hogan.js             |   187ms | 545% slower |
| Dust                 |   202ms | 599% slower |
| Handlebars.js        |   312ms | 977% slower |
| Eco                  |   328ms | 1032% slower |
| Underscore           |   766ms | 2547% slower |
| Jade without `with`  |   814ms | 2713% slower |
| EJS                  |  1201ms | 4048% slower |
| Jade                 |  3312ms | 11343% slower |
| CoffeeKup            |  4307ms | 14778% slower |
| templates.js         | 22220ms | 76664% slower |


### [See stats by engine](detail.win32.txt)
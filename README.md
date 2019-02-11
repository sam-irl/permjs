# permjs

A library providing mathematical permutation, combination, and factorial operations.

## Installation

Using npm:

```
npm install --save permjs
```

## Usage
### Permutation
#### Purpose
Finds the possible orders of n objects taken r at a time.
#### Mathmatical formula
```
nPr = n!/(n - r)!
```
#### Implementation
```javascript
const { permutation } = require('permjs');

permutation(5, 2); // 5 nPr 2 => 20
```
### Combination
#### Purpose
Finds the possible sets (without regard to order) of n objects taken r at a time.
#### Mathematical Formula
```
nCr = n!/(n - r)!r!
```
#### Implementation
```javascript
const { combination } = require('permjs');

combination(5, 2); // 5 nCr 2 => 10
```
### Factorial
#### Purpose
Finds a number multipled by all integers smaller than it, down to 1. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120
#### Mathematical Formula
```
n! = n * (n - 1) * (n - 2) ... * 1
```
#### Implementation
```javascript
const { factorial } = require('permjs');

factorial(5); // 5! => 120
```
### Pascal's Triangle
#### Purpose
Gives the binomial coefficients of the binomial power (a + b)^n
#### Mathematical Formula
Takes the following form:
```
row[0]:          1
row[1]:         1 1
row[2]:        1 2 1
row[3]:       1 3 3 1
row[4]:      1 4 6 4 1
row[5]:    1 5 10 10 5 1
```
...etc
#### Implementation
```javascript
const { pascal } = require('permjs');

pascal(5); // row[5] => [1, 5, 10, 10, 5, 1]
```
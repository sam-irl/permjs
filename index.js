/**
 * Calculates the permutation of the number of elements, in the form nPr.
 * 
 * For example, nPr becomes permutation(n, r) - so 5P8 is permutation(5, 8).
 * 
 * @param {Number} n - size of set
 * @param {Number} r - items to select
 * @returns {Number|NaN} the possible permutations
 */
function permutation(n, r) {
    if (!(typeof n === "number") || !(typeof r === "number")) {
        throw TypeError('Cannot pass non-numeric arguments to permutation, did you mean to take the length?');
    }

    if (n < 0 || r < 0) {
        return NaN;
    }

    let nFactorial = 1;
    let nrFactorial = 1;

    for (let i = n; i > 1; i--) {
        nFactorial *= i;
    }

    for (let i = (n - r); i > 1; i--) {
        nrFactorial *= i;
    }

    return nFactorial / nrFactorial;
}

/**
 * Calculates the number of possible combinations of the elements, in the form nCr.
 * 
 * Similar to the permutation, but disregards order.
 * 
 * @param {Number} n - size of set
 * @param {Number} r - items to select
 * @returns {Number} the possible combinations
 */
function combination(n, r) {
    if (!(typeof n === "number") || !(typeof r === "number")) {
        throw TypeError('Cannot pass non-numeric arguments to combination, did you mean to take the length?');
    }

    if (n < 0 || r < 0) {
        return NaN;
    }

    let nFactorial = 1;
    let nrFactorial = 1;
    let rFactorial = 1;

    for (let i = n; i > 1; i--) {
        nFactorial *= i;
    }

    for (let i = (n - r); i > 1; i--) {
        nrFactorial *= i;
    }

    for (let i = r; i > 1; i--) {
        rFactorial *= i;
    }

    return nFactorial / (nrFactorial * rFactorial);
}

/**
 * Finds the factorial of the given number, n.
 * 
 * Multiplies n by n - 1, n - 2, etc, until it reaches 1.
 * 
 * @param {Number} n
 * @returns {Number} n!
 */
function factorial(n) {
    if (!(typeof n === "number")) {
        throw TypeError('Cannot pass non-numeric arguments to factorial, did you mean to take the length?');
    }

    if (n < 0) {
        return NaN;
    }

    let result = 1;

    for (let i = n; i > 1; i--) {
        result *= i;
    }

    return result;
}

/**
 * Returns the nth row of Pascal's Triangle, given
 * ```
 * row0 =       1
 * 
 * row1 =      1 1
 * 
 * row2 =     1 2 1
 * 
 * row3 =    1 3 3 1
 * 
 * row4 =   1 4 6 4 1
 * 
 * row5 = 1 5 10 10 5 1
 * ```
 * etc
 * 
 * @param {Number} n
 * @returns {Number[]} coefficients
 */
function pascal(n) {
    if (!typeof n === 'Number') {
        console.warn('pascal get non-number parameter, will attempt to cast to Number but may yield undesired results!');
        n = Number(n);
    }

    if (n < 0) throw Error('Row number of Pascal\'s triangle can be, at minimum, 0, instead got ' + n);
    
    if (n === 0) return [1];
    
    let coeff = Array(n + 1);
    
    for (let i = 0; i <= n; i++) {
        coeff[i] = combination(n, i);
    }

    return coeff;
}

// Namespace
const permjs = {
    permutation: permutation,
    combination: combination,
    factorial: factorial,
    pascal: pascal
}

module.exports = permjs;

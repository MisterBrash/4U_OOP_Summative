'use strict';

/**
 * Round the given number to the requested decimals
 * @param {number} value The number to be rounded
 * @param {number} decimals The number of decimals to keep
 * @returns {number} the rounded value
 */
function round(value, decimals) {
    return Math.round((value + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
}

/**
 * Return a random integer from min to max (inclusive)
 * @param {number} min The lowest possible integer.
 * @param {number} max The highest possibe integer.
 * @returns {number} a random integer from min to max.
 */
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { round, randInt };

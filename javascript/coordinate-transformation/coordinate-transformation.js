// @ts-check

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  /**
   * @param {number} x the x coordinate
   * @param {number} y the y coordinate
   * @returns {number[]} the translated coordinate pair
   */
  return (x, y) => [x + dx, y + dy];
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  /**
   * @param {number} x the x coordinate
   * @param {number} y the y coordinate
   * @returns {number[]} the scaled coordinate pair
   */
  return (x, y) => [x * sx, y * sy];
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  /**
   * @param {number} x the x coordinate
   * @param {number} y the y coordinate
   * @returns {number[]} the transformed coordinate pair
   */
  return (x, y) => g(...f(x, y));
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastArguments = null;
  let lastResult = null;

  /**
   * @param {number} x the x coordinate
   * @param {number} y the y coordinate
   * @returns {number[]} the transformed coordinate pair
   */
  return (x, y) => {
    const key = `${x},${y}`;
    if (key !== lastArguments) {
      lastArguments = key;
      lastResult = f(x, y);
    }
    return lastResult;
  }
}

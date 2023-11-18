// @ts-check

// All exercises require the use of a `while` loop and / or a `switch` statement.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = (name) => {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeIndex = 0;
  let wedgeCount = 0;

  while ((limeIndex < limes.length) && (wedgeCount < wedgesNeeded)) {
    switch (limes[limeIndex]) {
      case 'small':
        wedgeCount += 6;
        break;
      case 'medium':
        wedgeCount += 8;
        break;
      case 'large':
        wedgeCount += 10;
        break;
    }

    limeIndex++;
  }

  return limeIndex;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {
  while (timeLeft > 0) timeLeft -= timeToMixJuice(orders.shift() || '');
  return orders;
}

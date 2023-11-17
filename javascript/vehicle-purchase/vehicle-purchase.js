// @ts-check

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export const needsLicense = (kind) => ['car', 'truck'].includes(kind);

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export const chooseVehicle = (option1, option2) =>
  [option1, option2].sort()[0] + ' is clearly the better choice.';

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export const calculateResellPrice = (originalPrice, age) => {
  switch (true) {
    case age < 3: return originalPrice * 0.8;
    case age <= 10: return originalPrice * 0.7;
    default: return originalPrice * 0.5;
  }
}

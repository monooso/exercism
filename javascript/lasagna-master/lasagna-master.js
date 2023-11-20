/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Returns the cooking status based on the remaining cooking time.
 * @param {number} remainingTime
 * @returns {string}
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  return remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.';
}

/**
 * Returns the preparation time in minutes.
 * @param {array} layers
 * @param {number} time
 * @returns {number}
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

/**
 * Returns the preparation time in minutes.
 * @param {string[]} layers
 * @returns {object}
 */
export function quantities(layers) {
  return layers.reduce(({ noodles, sauce }, layer) => {
    if (layer === 'noodles') noodles += 50;
    if (layer === 'sauce') sauce += 0.2;
    return { noodles, sauce };
  }, { noodles: 0, sauce: 0 });
}

/**
 * Adds the secret ingredient to the end of my list. As per the exercise instructions, myList is modified in place.
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Calculates the amount of ingredients needed for the given number of portions.
 * @param {object} recipe
 * @param {number} portions
 * @returns {object}
 */
export function scaleRecipe(recipe, portions) {
  return Object.entries(recipe).reduce((acc, [ingredient, quantity]) => {
    acc[ingredient] = (quantity / 2) * portions;
    return acc;
  }, {});
}

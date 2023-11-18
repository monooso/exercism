// @ts-check

/**
 * All of the following exercises require the use of a `for` loop,
 * regardless of whether that is the most appropriate solution.
 */

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export const totalBirdCount = (birdsPerDay) => {
  // Normally we'd use reduce.
  let total = 0;
  for (const count of birdsPerDay) {
    total += count;
  }
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export const birdsInWeek = (birdsPerDay, week) => {
  const weekSlice = birdsPerDay.slice((week - 1) * 7, week * 7);
  return totalBirdCount(weekSlice);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export const fixBirdCountLog = (birdsPerDay) => {
  // Normally we'd use map.
  for (let index = 0; index < birdsPerDay.length; index += 2) {
    birdsPerDay[index]++;
  }
  return birdsPerDay;
}

// @ts-check

/**
 * Normalize the line of poetry by removing leading and trailing whitespace.
 *
 * @param {string} line
 * @returns {string}
 */
const normalizeLine = (line) => line.trim();

/**
 * Format the password.
 * 
 * @param {string} password
 * @returns {string}
 */
const formatPassword = (password) => password[0].toUpperCase() + password.slice(1).toLowerCase();

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export const frontDoorResponse = (line) => normalizeLine(line)[0];

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export const frontDoorPassword = (word) => formatPassword(word);

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export const backDoorResponse = (line) => {
  const normalized = normalizeLine(line);
  return normalized[normalized.length - 1];
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export const backDoorPassword = (word) => `${formatPassword(word)}, please`;


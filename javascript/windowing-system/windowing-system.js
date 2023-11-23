// @ts-check

/**
 * Constrains a number to be within a range.
 * @param {number} num
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The constrained number.
 */
const constrainNumber = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * Constructor function for a Size object.
 * @param {number} width
 * @param {number} height
 * @constructor
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Resize the size object.
 * @param {number} width
 * @param {number} height
 */
Size.prototype.resize = function(width, height) {
  this.width = width;
  this.height = height;
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Move the position object.
   * @param {number} x
   * @param {number} y
   * @returns {void}
   */
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600);
    this.position = new Position();
    this.size = new Size();
  }

  get screenSize() {
    return this._screenSize;
  }

  /**
   * Update the position.
   * @param {Position} position
   * @returns {void}
   */
  move(position) {
    const x = constrainNumber(position.x, 0, this._screenSize.width - this.size.width);
    const y = constrainNumber(position.y, 0, this._screenSize.height - this.size.height);
    this.position.move(x, y);
  }

  /**
   * Update the size.
   * @param {Size} size
   * @returns {void}
   */
  resize(size) {
    const width = constrainNumber(size.width, 1, this._screenSize.width - this.position.x);
    const height = constrainNumber(size.height, 1, this._screenSize.height - this.position.y);
    this.size.resize(width, height);
  }
}

/**
 * Changes the size and position of the given ProgramWindow.
 * @param {ProgramWindow} window
 * @returns {ProgramWindow}
 */
export function changeWindow(window) {
  window.move(new Position(100, 150));
  window.resize(new Size(400, 300));
  return window;
}


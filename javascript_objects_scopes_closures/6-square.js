#!/usr/bin/node

const Square = require('./5-square');

class SquareWithCharPrint extends Square {
  charPrint(c) {
    if (c === undefined) {
      // If c is undefined, use the character X
      c = 'X';
    }

    // Print the square using the character c
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = SquareWithCharPrint;

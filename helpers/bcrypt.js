"use strict";

const bcrypt = require("bcryptjs");

function hash(value) {
  const result = bcrypt.hashSync(value, 8);
  return result;
}

function compare(input, dbvalue) {
  const result = bcrypt.compareSync(input, dbvalue);
  return result;
}

module.exports = { hash, compare };

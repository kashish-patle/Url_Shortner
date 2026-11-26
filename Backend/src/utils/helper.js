const { nanoid } = require("nanoid");

// Generate a random unique ID of the given length
const generateNanoId = (length) => {
  return nanoid(length);
};

module.exports = { generateNanoId };
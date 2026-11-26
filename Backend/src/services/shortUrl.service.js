const { generateNanoId } = require("../utils/helper");

const {
  saveShortUrl,
  getShortUrl,
} = require("../dao/shortUrl.dao");

// Service to create a shortened URL
const createShortUrlService = async (url) => {

  // Generate a random 7-character short ID
  const shortId = generateNanoId(7);

  // Call DAO to save URL in MongoDB
  await saveShortUrl(url, shortId);

  return shortId;
};

// Service to retrieve original URL
const redirectShortUrlService = async (shortId) => {

  // Call DAO to retrieve URL and update clicks
  return await getShortUrl(shortId);
};

module.exports = {
  createShortUrlService,
  redirectShortUrlService,
};
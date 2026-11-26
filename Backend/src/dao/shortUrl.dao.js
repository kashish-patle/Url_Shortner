const ShortUrl = require("../models/shorturl.model");

// Save URL document to MongoDB
const saveShortUrl = async (url, shortId) => {
  const newUrl = new ShortUrl({
    originalUrl: url,
    shortId: shortId,
  });

  return await newUrl.save();
};

// Find URL document and increment click count
const getShortUrl = async (shortId) => {
  return await ShortUrl.findOneAndUpdate(
    { shortId },
    { $inc: { clicks: 1 } },
    { new: true }
  );
};

module.exports = {
  saveShortUrl,
  getShortUrl,
};
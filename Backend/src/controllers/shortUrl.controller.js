const {
  createShortUrlService,
  redirectShortUrlService,
} = require("../services/shortUrl.service");

// Controller to create a shortened URL
const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body || {};

    // Validate incoming request
    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    // Call URL creation service
    const shortId = await createShortUrlService(url);

    // Send response to client
    res.status(201).json(process.env.APP_URL + shortId);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Controller to redirect to the original URL
const redirectShortUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    // Call redirection service
    const url = await redirectShortUrlService(shortId);

    // Check whether the URL exists
    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    // Redirect to the original URL
    res.redirect(url.originalUrl);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createShortUrl, redirectShortUrl };
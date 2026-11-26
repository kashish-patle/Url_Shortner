const express = require("express");
const app = express();

const connectDB = require("./src/mongo.config");
const shortUrlRoute = require("./src/routes/shortUrl.route");

// Load environment variables
require("dotenv").config();

// Body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount URL shortening routes
app.use("/", shortUrlRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Hai Ho prabhu");
});

// Connect to MongoDB before starting the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
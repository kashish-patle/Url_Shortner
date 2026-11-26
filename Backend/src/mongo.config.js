const mongoose = require("mongoose");

// Establish connection with MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);

    // Stop the application if database connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
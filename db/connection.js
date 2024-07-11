const mongoose = require("mongoose");


const connectDB = async () => {
    try {
      mongoose.connect(process.env.DBURL);
      console.log("Database connected !!!")
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

  module.exports = connectDB()
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl);
    console.log("mongoose connected");
  } catch (err) {
    console.log("faild ton connect to mongoose", err.message);
    process.exit(1);
  }
};
module.exports = connectDb;


const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./db");

const app = express();
connectDb();
app.use(cors());
app.use(express.json()); 




app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

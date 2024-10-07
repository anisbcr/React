const express = require("express");
const path = require("path");
const dotnev = require("dotenv");
const app = express();
dotnev.config();
const PORT = process.env.PORT || 4050;
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
});

const express = require("express");

const upload = require('./scripts/upload.js');

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
  upload.
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
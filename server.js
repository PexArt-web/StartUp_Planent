const express = require("express");
const PORT = 8000;
const app = express();
const { log } = console;
const { startups } = require("./data/data.js");
app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.get("/api", (req, res) => {
  res.status(200).json(startups);
});

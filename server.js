const express = require("express");
const PORT = 8000;
const app = express();
const { log } = console;
const { startups } = require("./data/data.js");
app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.get("/api", (req, res) => {
  let filtered = startups;
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;
  if (industry) {
    filtered = filtered.filter((startup) =>
      startup.industry.toLowerCase().includes(industry.toLowerCase())
    );
  }

  if (country) {
    filtered = filtered.filter((startup) =>
      startup.country.toLowerCase().includes(country.toLowerCase())
    );
  }
  if (continent) {
    filtered = filtered.filter((startup) =>
      startup.continent.toLowerCase().includes(continent.toLowerCase())
    );
  }
  if (is_seeking_funding) {
    filtered = filtered.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
    );
  }

  if (has_mvp) {
    filtered = filtered.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.status(200).json(filtered);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;
  let filtered = startups;
  filtered = filtered.filter((startup) =>
    startup[field].toLowerCase().includes(term.toLowerCase())
  
  );
 res.status(200).json(filtered);
})

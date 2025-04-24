const { startups } = require("../data/data.js");
const getAllData = (req, res) => {
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
};

module.exports = { getAllData };

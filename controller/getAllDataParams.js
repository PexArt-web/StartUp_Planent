const allDataByParams = (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];
  if (!allowedFields.includes(field)) {
    return res.status(400).json({
      error:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }
  let filtered = startups;
  filtered = filtered.filter((startup) =>
    startup[field].toLowerCase().includes(term.toLowerCase())
  );
  res.status(200).json(filtered);
};

module.exports = { allDataByParams };
const express = require("express");
const PORT = 8000;
const app = express();
const { log } = console;
const dataRoutes = require("./routes/dataRoutes.js");
app.use(express.json());

app.use("/api", dataRoutes);
app.use((req, res) => {
  res.status(404).json({
    error: "page not found",
  });
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));

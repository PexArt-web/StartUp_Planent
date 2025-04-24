const express = require("express");
const { getAllData } = require("../controller/getAllData");
const { allDataByParams } = require("../controller/getAllDataParams");
const router = express.Router();

router.get("/", getAllData);

router.get("/:field/:term", allDataByParams);

module.exports = router;
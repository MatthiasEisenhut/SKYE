const express = require('express');
const router = express.Router();

const { getData } = require("../controllers/weather");

router.get('/', async (req, res) => {
  await res.json(getData());
});

module.exports = router;

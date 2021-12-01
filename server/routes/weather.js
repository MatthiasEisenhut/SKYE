const express = require('express');
const router = express.Router();

const { getData } = require('../controllers/weather');

router.get('/', async (req, res) => {
  const { data } = await res.json(getData());
  res.status(200).json(data);
});

module.exports = router;

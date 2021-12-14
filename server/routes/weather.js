const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;

router.get('/getData', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`,
    );
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

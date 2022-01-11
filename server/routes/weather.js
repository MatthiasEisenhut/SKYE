const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;

router.get('/getData/:city', async (req, res) => {
  const { city } = req.params;
  const cityCoords = await getCity(city);

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoords[0].lat}&lon=${cityCoords[0].lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`,
    );
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

async function getCity(city) {
  const { data } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`,
  );

  return data;
}

module.exports = router;

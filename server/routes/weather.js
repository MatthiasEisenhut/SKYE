const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;

const { getData } = require('../controllers/weather');

router.get('/getData', async (req, res) => {
  // const { data } = await res.json(getData());
  // console.log(data)
  // res.status(200).send(data);
   try {
     const { data } = await axios.get(
       `https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`,
     );
     console.log(data);
     res.status(200).send(data);
   } catch (error) {
     console.log(error);
   }
});

module.exports = router;

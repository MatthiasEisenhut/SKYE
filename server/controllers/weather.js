const axios = require('axios');
const { all } = require('../routes/weather');
const API_KEY = process.env.API_KEY;

async function getData() {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getData,
};

getData()
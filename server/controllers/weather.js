const axios = require('axios');
const { all } = require('../routes/weather');
const API_KEY = process.env.API_KEY;

async function getData() {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`,
    );
    console.log(data.list[0].wind);
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getData,
};

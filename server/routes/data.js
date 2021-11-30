const express = require('express');
const router = express.Router();

const API_KEY = process.env.API_KEY;

async function getData() {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`,
    );
  } catch (error) {
    console.log(error);
  }
}

router.get('/weather', async (req, res) => {
  await res.json(getData());
});

module.exports = router;

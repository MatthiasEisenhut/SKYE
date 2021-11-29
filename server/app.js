const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

const app = express();

async function getData() {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`,
    );
  } catch (error) {
    console.log(error);
  }
}
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on Port ${PORT}...`));

console.log('Server started');

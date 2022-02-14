const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const weatherRoute = require('./routes/weather');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/weather', weatherRoute);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}...`));

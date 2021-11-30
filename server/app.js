const express = require('express');
const path = require('path');
const axios = require('axios');

require('dotenv').config();

const weatherRoute = require('./routes/data');

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // body parser
app.use('/weather', weatherRoute);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}...`));

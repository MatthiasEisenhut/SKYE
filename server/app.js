const express = require('express');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

const app = express();

app.listen(PORT, () => console.log(`Server running on Port ${PORT}...`));

console.log('Server started');

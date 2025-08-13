// app.js
const express = require('express');
const app = express();

const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send(`Secrets loaded: DB_PASSWORD=${dbPassword}, API_KEY=${apiKey}`);
});

app.listen(3000, () => console.log('App running on port 3000'));
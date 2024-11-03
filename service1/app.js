// service1/app.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/get-value', async (req, res) => {
  try {
    const response = await axios.get('http://service2:3001/value');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error calling service2' });
  }
});

app.listen(port, () => {
  console.log(`Service 1 running on port ${port}`);
});

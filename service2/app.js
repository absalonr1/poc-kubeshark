// service2/app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Configuración de MongoDB Atlas
const mongoUri = 'mongodb+srv://luisopazo:xx@cluster0.85ruh.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0'; //process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const ValueSchema = new mongoose.Schema({ name: String, value: String });
const ValueModel = mongoose.model('Value', ValueSchema, 'testcollection');

app.get('/value', async (req, res) => {
  try {
    const result = await ValueModel.findOne({ name: 'example' });
    res.json({ value: result ? result.value : 'No data found' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Service 2 running on port ${port}`);
});

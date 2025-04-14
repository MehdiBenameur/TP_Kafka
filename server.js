// server.js
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./Message');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('✅ API Kafka + MongoDB opérationnelle');
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 }).limit(50);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur API REST démarré sur http://localhost:${PORT}`);
});

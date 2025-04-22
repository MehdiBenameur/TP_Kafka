const express = require('express');
const connectDB = require('./db');
const Message = require('./Message');

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

// Route pour récupérer tous les messages
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur Express lancé sur http://localhost:${PORT}`);
});

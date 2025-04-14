// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohamedmehdibenameur:<97976050>@cluster0.bj66i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connexion à MongoDB Atlas réussie');
  } catch (err) {
    console.error('❌ Erreur de connexion MongoDB Atlas', err);
    process.exit(1);
  }
};

module.exports = connectDB;

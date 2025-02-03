// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Utilisation des routes pour les tâches
app.use('/api', tasksRoutes);

// Démarrer le serveur sur le port 3000 (ou un autre port)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
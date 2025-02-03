// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Endpoint POST pour créer une nouvelle tâche
router.post('/tasks', async(req, res) => {
    try {
        // Récupérer les données envoyées dans le corps de la requête (req.body)
        const { title, description } = req.body;

        // Vérifier que le titre est fourni (validation minimale)
        if (!title) {
            return res.status(400).json({ error: 'Le titre est requis.' });
        }

        // Créer une nouvelle instance de Task
        const nouvelleTache = new Task({ title, description });

        // Sauvegarder la tâche dans la base de données
        await nouvelleTache.save();

        // Répondre avec le status 201 (créé) et la tâche créée
        res.status(201).json(nouvelleTache);
    } catch (error) {
        console.error("Erreur lors de la création de la tâche :", error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

module.exports = router;
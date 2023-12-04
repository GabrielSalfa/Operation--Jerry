const express = require("express");
const Accident = require("../models/accidents");

const router = express.Router();

// Crear siniestro
router.post("/accidents", (req, res) => {
    const accident = new Accident(req.body);
    accident.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Obtener todos los siniestro
router.get("/accidents", (req, res) => {
    Accident
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Obtener un siniestro específico
router.get("/accidents/:id", (req, res) => {
    const { id } = req.params;
    Accident
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Actualizar un siniestro
router.put("/accidents/:id", (req, res) => {
    const { id } = req.params;
    const { liquidator_name, date, workshop_assign } = req.body;
    Accident
    .updateOne({_id: id}, {$set: { liquidator_name, date, workshop_assign }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Eliminar un siniestro
router.delete("/accidents/:id", (req, res) => {
    const { id } = req.params;
    Accident
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;

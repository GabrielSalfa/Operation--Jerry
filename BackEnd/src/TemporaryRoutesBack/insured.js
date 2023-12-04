const expres = require("express");
const Insured = require("../models/insured");

const router = expres.Router();

// Crear el asegurado
router.post("/insured", (req, res) => {
    const insured = Insured(req.body);
    insured.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Conseguir los asegurados
router.get("/insured", (req, res) => {
    Insured.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// Conseguir al asegurado
router.get("/insured/:id", (req, res) => {
    const { id } = req.params;
    Insured.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// uptade one
router.put("/insured/:id", (req, res) => {
    const { id } = req.params;
    const {name,lastname,direction,modelvehicle,patent} = req.body;
    Insured 
    .updateOne({_id: id},{$set:{name,lastname,direction,modelvehicle,patent}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// delete one
router.delete("/insured/:id", (req, res) => {
    const { id } = req.params;
    Insured
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router
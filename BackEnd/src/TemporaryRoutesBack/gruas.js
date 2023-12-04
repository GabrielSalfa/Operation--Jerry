const expres = require("express");
const Grua = require("../models/gruas");

const router = expres.Router();

// Crear registro de grua
router.post("/gruas", (req, res) => {
    const gruas = Grua(req.body);
    gruas.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// get all
router.get("/gruas", (req, res) => {
    Grua
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// get one
router.get("/gruas/:id", (req, res) => {
    const { id } = req.params;
    Grua
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// uptade one
router.put("/gruas/:id", (req, res) => {
    const {id} = req.params;
    const {taller, grua, patente, nombre_chofer, direccion_referencia, punto_retiro, direccion} = req.body;
    Grua
        .updateOne({_id: id},{$set:{taller, grua, patente, nombre_chofer, direccion_referencia, punto_retiro, direccion}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// delete one
router.delete("/gruas/:id", (req, res) => {
    const {id} = req.params;
    Grua
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
module.exports = router
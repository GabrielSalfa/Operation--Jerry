const expres = require("express");
const Presup = require("../models/presupuestoRep");

const router = expres.Router();

// Crear el presupuesto de la reparación
router.post("/presupuestoRep", (req, res) => {
    const prstrep = Presup(req.body);
    prstrep.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// get all
router.get("/presupuestoRep", (req, res) => {
    Presup
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// get one
router.get("/presupuestoRep/:id", (req, res) => {
    const {id} = req.params;
    Presup
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// uptade one
router.put("/presupuestoRep/:id", (req, res) => {
    const {id} = req.params;
    const {categoria,descripcion,tiempo_asociado,dia_entrega,monto,detalle_pdf} = req.body;
    Presup 
    .updateOne({_id: id},{$set:{categoria,descripcion,tiempo_asociado,dia_entrega,monto,detalle_pdf}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
// delete one
router.delete("/presupuestoRep/:id", (req, res) => {
    const {id} = req.params;
    Presup 
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;
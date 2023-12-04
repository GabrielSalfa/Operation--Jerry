const expres = require("express");
const Report = require("../models/report");

const router = expres.Router();

// Crear el reporte
router.post("/report", (req, res) => {
    const report = Report(req.body);
    report.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// get all
router.get("/report", (req, res) => {
    Report
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// get one
router.get("/report/:id", (req, res) => {
    const {id} = req.params;
    Report
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// uptade one
router.put("/report/:id", (req, res) => {
    const {id} = req.params;
    const {tipo_vehiculo,resultados_talleres,lugares_solicitados_region,lugares_solicitados_ciudad} = req.body;
    Report
        .updateOne({_id: id},{$set:{tipo_vehiculo,resultados_talleres,lugares_solicitados_region,lugares_solicitados_ciudad}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// delete one
router.delete("/report/:id", (req, res) => {
    const {id} = req.params;
    Report
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
module.exports = router;
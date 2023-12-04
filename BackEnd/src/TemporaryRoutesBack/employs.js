const expres = require("express");
const employs = require("../models/employs");

const router = expres.Router();

// Crear empleado
router.post("/employs", (req, res) => {
    const employ = employs(req.body);
    employ.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Obtener todos los empleados
router.get("/employs", (req, res) => {
    employs.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Obtener un empleado
router.get("/employs/:id", (req, res) => {
    const { id } = req.params;
    employs
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Actualizar un empleado
router.put("/employs/:id", (req, res) => {
    const {id} = req.params;
    const {username, password, rol} = req.body;
    employs
        .updateOne({_id: id},{$set:{username, password, rol}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Eliminar un empleado
router.delete("/employs/:id", (req, res) => {
    const {id} = req.params;
    employs
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
//Metodo para encriptar la contraseña 
module.exports = router;


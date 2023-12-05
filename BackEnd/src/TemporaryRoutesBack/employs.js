const expres = require("express");
const Employ = require("../models/employs");
const router = expres.Router();
const bcrypt = require('bcrypt');
// Crear empleado
router.post("/employs", (req, res) => {
    const employ = new Employ(req.body);
    employ.save()
        .then((data) => {
            console.log(data); // Esto debería mostrar el documento en la consola del servidor
            res.json(data); // Esto envía la respuesta al cliente
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: error.message});
        });
});
// Obtener todos los empleados
router.get("/employs", (req, res) => {
    Employ.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Obtener un empleado
router.get("/employs/:id", (req, res) => {
    const { id } = req.params;
    Employ
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
// Actualizar un empleado
router.put("/employs/:id", async (req, res) => {
    const {id} = req.params;
    const {username, password, rol} = req.body;

    try {
        const employ = await Employ.findById(id);

        // Si se proporciona una nueva contraseña, hasheala
        if (password) {
            employ.password = await bcrypt.hash(password, saltRounds);
        }
        if (username) employ.username = username;
        if (rol) employ.rol = rol;

        await employ.save(); 
        res.json({ message: 'Empleado actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Eliminar un empleado
router.delete("/employs/:id", (req, res) => {
    const {id} = req.params;
    Employ
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;


const expres = require("express");
const employSchema = require("../models/employs");

const router = expres.Router();

// Crear empleado
router.post("/employs", (req, res) => {
    const employ = employSchema(req.body);
    employ.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});


module.exports = router;


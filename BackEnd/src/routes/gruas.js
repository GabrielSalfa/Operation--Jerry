const express = require("express");
const router = express.Router();

const { verificarToken, isAnalistaSiniestro } = require('../middlewares/authJwt');

const gruaController = require('../controllers/gruasController');

// Crear una nueva grúa
router.post("/gruas", gruaController.createGrua);

// Obtener todas las grúas
router.get("/gruas",[verificarToken],gruaController.getAllGruas);

// Obtener una grúa por ID
router.get("/gruas/:id", gruaController.getGruaById);

// Actualizar una grúa por ID
router.put("/gruas/:id", gruaController.updateGruaById);

// Eliminar una grúa por ID
router.delete("/gruas/:id", gruaController.deleteGruaById);


router.get("/gruas", [verificarToken, isAnalistaSiniestro], gruaController.getGruaById);

module.exports = router;
const expres = require("express");
const router = expres.Router();
const employController = require('../controllers/employController');
const { verificarToken } = require('../middlewares/authJwt');

//Rutas directas relacionadas a empleado
router.post("/employs", verificarToken , employController.crearempleado);
router.get("/employs", employController.getAllEmploys);
router.get("/employs/:id", employController.getEmployById);
router.put("/employs/:id", employController.updateEmployById);
router.delete("/employs/:id", employController.deleteEmployById);
router.post('/login', employController.login);


module.exports = router;
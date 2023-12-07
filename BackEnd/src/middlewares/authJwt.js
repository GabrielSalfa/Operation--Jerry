//Aqui vamos a verificar si se tienen tokens
const jwt = require('jsonwebtoken');

module.exports.verificarToken = async (req, res, next) => {
    const token = req.headers["x-access-token"]; // Asegúrate de que el nombre del header sea correcto

    if (!token) {
        return res.status(403).json({ message: "Se requiere un token para autenticar" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // O la propiedad que contenga el ID del usuario en el token
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token no válido" });
    }
};
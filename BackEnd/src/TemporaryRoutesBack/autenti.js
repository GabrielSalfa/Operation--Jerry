const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employ = require("../models/employs"); 

const router = express.Router();
router.post('/login', (req, res) => {
    // Buscar el usuario por su nombre de usuario
    Employ.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Login failed' });
        }
        // Comparar la contraseña hasheada
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                // Crear y asignar un token
                const token = jwt.sign(
                    { userId: user._id, username: user.username, role: user.rol },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );
                res.json({
                    message: 'Auth successful',
                    token: token
                });
            } else {
                return res.status(401).json({ message: 'Login failed' });
            }
        });
    }).catch(err => {
        res.status(500).json({ error: err });
    });
});

module.exports = router;
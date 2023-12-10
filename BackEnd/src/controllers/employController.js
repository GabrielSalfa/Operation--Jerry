const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employ = require("../models/employs"); 
const Rol = require("../models/rol");
// Crear empleado
exports.crearempleado = async (req, res) => {
    const { username, password, rol } = req.body;

    try {
        const empleadoExistente = await Employ.findOne({ username: username });
        if (empleadoExistente) {
            return res.status(400).json({ message: 'El username ya está en uso.' });
        }

        const foundRol = await Rol.findById(rol);
        if (!foundRol) {
            return res.status(400).json({ message: 'Rol inexistente' });
        }

        const newEmploy = new Employ({
            username,
            password,
            rol: foundRol._id
        });

        const empleadoGuardado = await newEmploy.save();
        const token = jwt.sign({ id: empleadoGuardado._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 horas
        });
        console.log(empleadoGuardado);
        res.status(201).json({ success: true, message: 'Empleado creado con éxito' }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Obtener todos los empleados
exports.getAllEmploys = async (req, res) => {
    Employ.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};
// Obtener un empleado
exports.getEmployById = async (req, res) => {
    const { id } = req.params;
    Employ
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};
// Actualizar un empleado
exports.updateEmployById = async (req, res) => {
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
};
// Eliminar un empleado
exports.deleteEmployById = async (req, res) => {
    const {id} = req.params;
    Employ
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// Ingreso empleados
exports.login = async (req, res) => {
    try {
        const busquedaEmpleado = await Employ.findOne({ username: req.body.username }).populate("rol");
        if (!busquedaEmpleado) {
            return res.status(400).json({ message: "El empleado que proporcionaste no es válido" });
        }
        
        // Asegúrate de que el primer argumento sea la contraseña ingresada y el segundo el hash almacenado
        const validPassword = await Employ.comparePassword(req.body.password, busquedaEmpleado.password);
        if (!validPassword) {
            return res.status(401).json({ token: null, message: 'Contraseña inválida' });
        }

        // Como todo es válido, genera el token
        const token = jwt.sign({ id: busquedaEmpleado._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 horas
        });

        // Devuelve el token en la respuesta
        res.json({ token: token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



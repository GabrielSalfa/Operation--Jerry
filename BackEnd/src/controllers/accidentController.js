const Accident = require("../models/accidents");

exports.createAccident = async  (req, res) => {
    const accident = new Accident(req.body);
    accident.save()
    .then(data => res.json(data))
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.getAllAccidents =  async (req, res) => {
    Accident.find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.getAccidentById = async (req, res) => {
    Accident.findById(req.params.id)
    .then(data => {
        if (!data) return res.status(404).json({ message: 'Siniestro no encontrado' });
        res.json(data);
    })
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.updateAccidentById = async (req, res) => {
    Accident.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => {
        if (!data) return res.status(404).json({ message: 'Siniestro no encontrado' });
        res.json({ message: 'Siniestro actualizado con éxito', accident: data });
    })
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.deleteAccidentById = async (req, res) => {
    Accident.findByIdAndDelete(req.params.id)
    .then(data => {
        if (!data) return res.status(404).json({ message: 'Siniestro no encontrado' });
        res.json({ message: 'Siniestro eliminado con éxito' });
    })
    .catch(error => res.status(400).json({ message: error.message }));
};
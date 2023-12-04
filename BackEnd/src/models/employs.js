const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const employSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: ["Call Center", "Analista Siniestro", "Liquidador", "Analista Negocio", "Chofer Grua", "Admin Taller"]
    }
});
employSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});
module.exports = mongoose.model('Employs',employSchema);
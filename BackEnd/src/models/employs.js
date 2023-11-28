const mongoose = require("mongoose");

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
        required: true
    }
});

module.exports = mongoose.model('Employs',employSchema);
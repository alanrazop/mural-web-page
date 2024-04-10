const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor dinos tu nombre'],
    },
    email: {
        type: String,
        required: [true, 'Por favor provee un email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Por favor usa un email válido'],
    },
    photo: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Porfavor provee una contraseña'],
        minlength: 8,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Por favor confirma tu contraseña'],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

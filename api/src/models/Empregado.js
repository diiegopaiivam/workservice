const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const EmpregadoSchema = new mongoose.Schema({
    name: String,
    facebook: String,
    whatsapp: String,
    email: String,
    description: String,
    avatar_url: String,
    especialidades: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Empregado', EmpregadoSchema);
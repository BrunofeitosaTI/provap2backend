const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    chassi: {
        type: String,
        required: true
    },
    disponivel: {
        type: Boolean,
        required: true
    }
});

const Veiculo = mongoose.model('Veiculo', veiculoSchema);

module.exports = Veiculo;

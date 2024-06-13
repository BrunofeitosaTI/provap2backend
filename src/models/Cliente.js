const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro'],
        required: true
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;

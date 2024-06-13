const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
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
    },
    cargo: {
        type: String,
        required: true
    }
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;

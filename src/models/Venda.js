const mongoose = require('mongoose');

const vendaSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    id_veiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});

const Venda = mongoose.model('Venda', vendaSchema);

module.exports = Venda;

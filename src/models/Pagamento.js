const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id_venda: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venda',
        required: true
    },
    modalidade: {
        type: String,
        required: true
    }
});

const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;

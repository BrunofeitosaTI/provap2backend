const Joi = require('joi');

const pagamentoValidator = Joi.object({
    tipo: Joi.string().required(),
    status: Joi.string().required(),
    id_venda: Joi.string().required(),
    modalidade: Joi.string().required()
});

module.exports = pagamentoValidator;

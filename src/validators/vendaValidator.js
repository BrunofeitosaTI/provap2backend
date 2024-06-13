const Joi = require('joi');

const vendaValidator = Joi.object({
    data: Joi.date().required(),
    id_cliente: Joi.string().required(),
    id_veiculo: Joi.string().required(),
    valor: Joi.number().required()
});

module.exports = vendaValidator;

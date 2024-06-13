const Joi = require('joi');

const veiculoValidator = Joi.object({
    marca: Joi.string().required(),
    modelo: Joi.string().required(),
    ano: Joi.number().integer().min(1886).required(), // O primeiro carro foi feito em 1886
    preco: Joi.number().required(),
    cor: Joi.string().required(),
    chassi: Joi.string().required(),
    disponivel: Joi.boolean().required()
});

module.exports = veiculoValidator;

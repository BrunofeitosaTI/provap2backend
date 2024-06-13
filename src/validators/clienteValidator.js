const Joi = require('joi');

const clienteValidator = Joi.object({
    nome: Joi.string().required(),
    telefone: Joi.string().required(),
    cpf: Joi.string().required(),
    endereco: Joi.string().required(),
    sexo: Joi.string().valid('Masculino', 'Feminino', 'Outro').required()
});

module.exports = clienteValidator;

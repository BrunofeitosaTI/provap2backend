const Joi = require('joi');

const funcionarioValidator = Joi.object({
    nome: Joi.string().required(),
    telefone: Joi.string().required(),
    cpf: Joi.string().required(),
    endereco: Joi.string().required(),
    sexo: Joi.string().valid('Masculino', 'Feminino', 'Outro').required(),
    cargo: Joi.string().required()
});

module.exports = funcionarioValidator;

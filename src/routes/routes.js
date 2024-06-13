const express = require('express');
const router = express.Router();

// Importa os controladores
const funcionarioController = require('../controllers/funcionarioController');
const vendaController = require('../controllers/vendaController');
const veiculoController = require('../controllers/veiculoController');
const pagamentoController = require('../controllers/pagamentoController');
const clienteController = require('../controllers/clienteController');

// Rotas para Funcionário
router.post('/funcionarios', funcionarioController.create);
router.get('/funcionarios', funcionarioController.getAll);
router.get('/funcionarios/:id', funcionarioController.getById);
router.put('/funcionarios/:id', funcionarioController.update);
router.delete('/funcionarios/:id', funcionarioController.remove);

// Rotas para Venda
router.post('/vendas', vendaController.create);
router.get('/vendas', vendaController.getAll);
router.get('/vendas/:id', vendaController.getById);
router.put('/vendas/:id', vendaController.update);
router.delete('/vendas/:id', vendaController.remove);

// Rotas para Veículo
router.post('/veiculos', veiculoController.create);
router.get('/veiculos', veiculoController.getAll);
router.get('/veiculos/:id', veiculoController.getById);
router.put('/veiculos/:id', veiculoController.update);
router.delete('/veiculos/:id', veiculoController.remove);

// Rotas para Pagamento
router.post('/pagamentos', pagamentoController.create);
router.get('/pagamentos', pagamentoController.getAll);
router.get('/pagamentos/:id', pagamentoController.getById);
router.put('/pagamentos/:id', pagamentoController.update);
router.delete('/pagamentos/:id', pagamentoController.remove);

// Rotas para Cliente
router.post('/clientes', clienteController.create);
router.get('/clientes', clienteController.getAll);
router.get('/clientes/:id', clienteController.getById);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.remove);

module.exports = router;

const Funcionario = require('../models/Funcionario');

// Cria um novo funcionário
async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body);
        const funcionarioCriado = await funcionario.save();
        res.status(201).json(funcionarioCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os funcionários
async function getAll(req, res) {
    try {
        const funcionarios = await Funcionario.find();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um funcionário por ID
async function getById(req, res) {
    try {
        const funcionario = await Funcionario.findById(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado' });
        }
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um funcionário
async function update(req, res) {
    try {
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado' });
        }
        res.json(funcionario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um funcionário
async function remove(req, res) {
    try {
        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado' });
        }
        res.json({ message: 'Funcionário removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};

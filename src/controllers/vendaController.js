const Venda = require('../models/Venda');

// Cria uma nova venda
async function create(req, res) {
    try {
        const venda = new Venda(req.body);
        const vendaCriada = await venda.save();
        res.status(201).json(vendaCriada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todas as vendas
async function getAll(req, res) {
    try {
        const vendas = await Venda.find();
        res.json(vendas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém uma venda por ID
async function getById(req, res) {
    try {
        const venda = await Venda.findById(req.params.id);
        if (!venda) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        res.json(venda);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza uma venda
async function update(req, res) {
    try {
        const venda = await Venda.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!venda) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        res.json(venda);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove uma venda
async function remove(req, res) {
    try {
        const venda = await Venda.findByIdAndDelete(req.params.id);
        if (!venda) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        res.json({ message: 'Venda removida com sucesso' });
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

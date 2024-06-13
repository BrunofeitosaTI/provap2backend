const Veiculo = require('../models/Veiculo');

// Cria um novo veículo
async function create(req, res) {
    try {
        const veiculo = new Veiculo(req.body);
        const veiculoCriado = await veiculo.save();
        res.status(201).json(veiculoCriado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Obtém todos os veículos
async function getAll(req, res) {
    try {
        const veiculos = await Veiculo.find();
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtém um veículo por ID
async function getById(req, res) {
    try {
        const veiculo = await Veiculo.findById(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ error: 'Veículo não encontrado' });
        }
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Atualiza um veículo
async function update(req, res) {
    try {
        const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!veiculo) {
            return res.status(404).json({ error: 'Veículo não encontrado' });
        }
        res.json(veiculo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Remove um veículo
async function remove(req, res) {
    try {
        const veiculo = await Veiculo.findByIdAndDelete(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ error: 'Veículo não encontrado' });
        }
        res.json({ message: 'Veículo removido com sucesso' });
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

const express =  require('express');
const app = express();
const PORT = 3000;

// ambiente do .env
require('dotenv').config();

// conexão ao banco
const DBConect = require('./database/conection')
DBConect();

// Middleware para analisar JSON
app.use(express.json());

// Rotas gerais
const routes = require('./routes/routes');
app.use(routes);


// Iniciar o servido na porta especificada
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
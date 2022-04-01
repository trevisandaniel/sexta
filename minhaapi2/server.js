console.log('Arquivo server.js executou com sucesso!');

//usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json

//definir porta para a api de serviço
const port = process.env.port || 3000;

app.listen(port,() =>{
    return console.log('API executando na porta ' + port);
});

//usar o mongo
require("./server/banco/mongo");
//usar as rotas
const routes = require('./server/routes/index');
app.use(routes);
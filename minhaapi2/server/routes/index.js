const { Router } = require("express");
const routes = Router();

//liberar origens para requisições
var cors = require('cors');
//routes.use(cors({origin: '*'}));
routes.use(cors({origin: 'http://localhost:3001'}));

const usuarioRout = require("./usuarioRout");
routes.use("/api", usuarioRout);

module.exports = routes;
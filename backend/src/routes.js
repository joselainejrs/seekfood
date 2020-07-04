const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');
const FuncionariosController = require('./controllers/FuncionariosController');
const PerfilController = require('./controllers/PerfilController');
const SessaoUsuarioController = require('./controllers/SessaoUsuarioController');
// const SessaoFuncionariosController = require('./controllers/SessaoFuncionariosController');


const routes = express();


routes.post('/sessaousuario', SessaoUsuarioController.create);
// routes.post('/sessaofuncionarios', SessaoFuncionariosController.create);

routes.get('/perfil', PerfilController.index);

routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);
routes.put('/usuarios/:id', UsuariosController.update);   
routes.delete('/usuarios/:id', UsuariosController.delete);   

routes.get('/funcionarios', FuncionariosController.index);
routes.post('/funcionarios', FuncionariosController.create);
routes.put('/funcionarios/:id', FuncionariosController.update);
routes.delete('/funcionarios/:id', FuncionariosController.delete);

module.exports = routes;
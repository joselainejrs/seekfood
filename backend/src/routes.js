const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');
const EnderecosController = require('./controllers/EnderecosController');
const PropietariosController = require('./controllers/PropietariosController')


const routes = express();

routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);

routes.get('/enderecos', EnderecosController.index);
routes.post('/enderecos', EnderecosController.create);
routes.put('/enderecos/:id', EnderecosController.update);   
routes.delete('/enderecos/:id', EnderecosController.delete);   

routes.get('/propietarios', PropietariosController.index);
routes.post('/propietarios', PropietariosController.create);
routes.put('/propietarios/:id', PropietariosController.update);
routes.delete('/propietarios/:id', PropietariosController.delete);

module.exports = routes;
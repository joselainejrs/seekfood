import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';

import CadastroEmpresa from './pages/empresa/cadastro';
import CadastroCompleto from './pages/empresa/cadastroavanço';
import LoginEmpresa from './pages/empresa/loginempresa';
import LoginUsuario from './pages/login';
import Inicio from './pages/inicio';
import PerfilEmpresa from './pages/empresa/logado/perfilempresa';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/login" component={LoginUsuario} />
            <Route path="/loginempresa" component={LoginEmpresa} />
            <Route path="/cadastro" component={CadastroEmpresa} />
            <Route path="/cadastroavanco" component={CadastroCompleto} />
            <Route path="/perfilempresa" component={PerfilEmpresa} />
        </Switch>
        </BrowserRouter>
    );
} 
import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';

import Logincliente from './pages/cliente/login';
import Inicio from './pages/inicio';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/logincliente" component={Logincliente} />
        </Switch>
        </BrowserRouter>
    );
} 
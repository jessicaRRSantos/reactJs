import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './Componentes/Index';
import Cadastro from './Componentes/Cadastro';


export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}
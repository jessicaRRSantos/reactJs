import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './components/Index';
import Cadastro from './components/Cadastro';


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
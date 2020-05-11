import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/menu';
import Home from '../Home/home';

import './styles.css';
// teste de pull request
const Conteudo = () =>{
    return (

        <div className="conteudo">
            <Header usuario="Ricardo" perfil="Administrador"/>
            <Menu/>
            <Home/>
        </div>       
    );
}

export default Conteudo;
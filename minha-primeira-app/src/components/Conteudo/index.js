import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';

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
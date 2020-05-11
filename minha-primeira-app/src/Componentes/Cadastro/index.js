import React from 'react';

import Formulario from '../Formulario';
import Header from '../Header';
import Menu from '../Menu';

const Cadastro = () => {
    return (
        
        <div className="conteudo">
            <Header usuario="Ricardo" perfil="Administrador"/>
            <Menu/>
            <Formulario/>   
        </div>                 
    );

}

export default Cadastro;
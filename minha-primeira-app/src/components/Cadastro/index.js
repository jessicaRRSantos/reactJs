import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import {Link} from 'react-router-dom';


import Formulario from '../Formulario';

const Cadastro = () => {
    return (
        <div className="Wrap">
            <div className="conteudo">
                <Header usuario="Ricardo" perfil="Administrador" />
                <Menu />
                {/* <Home /> */}
                <div className="ContentArea">
                    <div className="MainContent">

                        <div className="BreadCrumb"><Link to="/cadastro">Cadastro</Link> &raquo; Lund Trainers</div>
                        <div className="TitleBar">
                            <div className="Title">Lund Trainers</div>
                        </div>
                        {/* ajuste */}
                        <div className="FormVertical">
                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
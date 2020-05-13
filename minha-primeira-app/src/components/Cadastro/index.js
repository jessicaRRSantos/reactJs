import React from 'react';
import Header from '../Header';
import Menu from '../Menu';


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

                        <div className="BreadCrumb"><a href="/home">Home</a> &raquo; Lund Trainers</div>
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